(function(_app){
var configURI = (document.location.protocol == 'file:') ? _app.vars.testURL+'jsonapi/config.js' : _app.vars.baseURL+'jsonapi/config.js';

_app.u.loadScript(configURI,function(){
//in some cases, such as the zoovy UI, zglobals may not be defined. If that's the case, certain vars, such as jqurl, must be passed in via P in initialize:
//	_app.u.dump(" ->>>>>>>>>>>>>>>>>>>>>>>>>>>>> zGlobals is an object");
	_app.vars.username = zGlobals.appSettings.username.toLowerCase(); //used w/ image URL's.
//need to make sure the secureURL ends in a / always. doesn't seem to always come in that way via zGlobals
	_app.vars.secureURL = zGlobals.appSettings.https_app_url;
	_app.vars.domain = zGlobals.appSettings.sdomain; //passed in ajax requests.
	_app.vars.jqurl = (document.location.protocol === 'file:') ? _app.vars.testURL+'jsonapi/' : '/jsonapi/';
	
	var startupRequires = ['quickstart','_store_formals','_store_filter']
	
	_app.require(startupRequires, function(){
		_app.ext.quickstart.callbacks.startMyProgram.onSuccess();		
		
		_app.ext._store_formals.vars.mcSetInterval = setInterval(function(){
			_app.ext.quickstart.u.handleMinicartUpdate({'datapointer':'cartDetail|'+_app.model.fetchCartID()});
		},4000);
		});
	}); //The config.js is dynamically generated.
	
_app.extend({
	"namespace" : "quickstart",
	"filename" : "app-quickstart.js"
	});
_app.extend({
	"namespace" : "store_account_creation",
	"filename" : "extensions/store_account_creation.js"
	});

_app.couple('quickstart','addPageHandler',{
	"pageType" : "static",
	"require" : [],
	"handler" : function($container, infoObj){
		var deferred = $.Deferred();
		infoObj.defPipeline.addDeferred(deferred);
		if(infoObj.deferred){
			infoObj.defPipeline.addDeferred(infoObj.deferred);
			}
		//We use infoObj.require here because the router handlers may have put something in there.
		//By nature, the static page handler requires nothing, but the templates it renders may require all kinds of stuff
		infoObj.require = infoObj.require || [];
		_app.require(infoObj.require,function(){
			infoObj.verb = 'translate';
	dump('------------------------------------------'); dump(infoObj);
			infoObj.templateid = infoObj.templateID;
			var $page = new tlc().runTLC(infoObj);
			//$page.tlc(infoObj);
			$page.data('templateid',infoObj.templateid);
			$page.data('pageid',infoObj.id);
			$container.append($page);
			infoObj.state = 'complete';
			//this method is synchronous so no extra deferred required
			_app.renderFunctions.handleTemplateEvents($page,infoObj);
			deferred.resolve();
			});
		}
	});

_app.extend({
	"namespace" : "order_create",
	"filename" : "extensions/checkout/extension.js"
	});

_app.couple('quickstart','addPageHandler',{
	"pageType" : "checkout",
	"require" : ['order_create','cco', 'extensions/checkout/active.html'],
	"handler" : function($container, infoObj, require){
		var deferred = $.Deferred();
		infoObj.defPipeline.addDeferred(deferred);
		infoObj.templateID = 'checkoutTemplate';
		_app.require(require,function(){
			$container.attr('id', 'checkoutContainer');
			_app.ext.order_create.a.startCheckout($container,_app.model.fetchCartID());
			infoObj.state = 'complete'; //needed for handleTemplateEvents.
			_app.renderFunctions.handleTemplateEvents($container,infoObj);
			deferred.resolve();
			});
		}
	});
	
_app.extend({
	"namespace" : "cco",
	"filename" : "extensions/cart_checkout_order.js"
	});

_app.couple('quickstart','addPageHandler',{
	"pageType" : "cart",
	"require" : ['cco','order_create','templates.html'],
	"handler" : function($container, infoObj, require){
		infoObj.deferred = $.Deferred();
		infoObj.defPipeline.addDeferred(infoObj.deferred);
		infoObj.navcat = zGlobals.appSettings.rootcat;
		infoObj.cartid = _app.model.fetchCartID();
		infoObj.templateID = 'cartTemplate';
		infoObj.trigger = 'fetch';
		_app.require(require,function(){
			//var $cart = new tlc().getTemplateInstance('cartTemplate');
			//var $cart = $(_app.renderFunctions.createTemplateInstance('cartTemplate',infoObj));
			var $cart = _app.ext.cco.a.getCartAsJqObj(infoObj);
			$container.append($cart);
			
			$cart.on('complete',function(){
				$("[data-app-role='shipMethodsUL']",$(this)).find(":radio").each(function(){
					$(this).attr('data-app-change','quickstart|cartShipMethodSelect');
					});
				});

			$cart.trigger(infoObj.trigger,$.extend({'Q':'mutable'},infoObj));
				_app.model.dispatchThis('mutable');
			
			// _app.calls.cartDetail.init(_app.model.fetchCartID(),{
				// 'callback':'tlc',
				// 'onComplete' : function(){
					// infoObj.state = 'complete';
					// _app.renderFunctions.handleTemplateEvents($cart,$.extend(true,{},infoObj));
					// },
				// 'jqObj' : $cart,
				// 'verb' : 'translate'
				// },'mutable');
			// _app.model.dispatchThis('mutable');
			});
		}
	});
_app.u.bindTemplateEvent('cartTemplate','complete.cart',function(event, $context, infoObj){
	//_app.ext._store_formals.u.cartitemqty($context);
	//_app.ext._store_formals.u.getShipContainerHeight($context);
	});
_app.u.bindTemplateEvent('cartTemplate','depart.destroy',function(event, $context, infoObj){
	var $page = $context.closest('[data-app-uri]');
	if($page){
		$page.empty().remove();
		}
	});

_app.extend({
	"namespace" : "store_routing",
	"filename" : "extensions/store_routing.js"
	});
	//formerly in startup callback of store_routing
_app.router.addAlias('product',		function(routeObj){_app.ext.quickstart.a.newShowContent(routeObj.value,	$.extend({'pageType':'product'}, routeObj.params));});
_app.router.appendHash({'type':'match','route':'/product/{{pid}}/{{name}}*','callback':'product'});
_app.router.appendHash({'type':'match','route':'/product/{{pid}}*','callback':'product'});


_app.router.addAlias('homepage',	function(routeObj){_app.ext.quickstart.a.newShowContent(routeObj.value,	$.extend({'pageType':'homepage'}, routeObj.params));});
_app.router.appendHash({'type':'exact','route':'/home','callback':'homepage'});
_app.router.appendHash({'type':'exact','route':'/home/','callback':'homepage'});
_app.router.appendHash({'type':'exact','route':'/','callback':'homepage'});

_app.router.addAlias('category',	function(routeObj){_app.ext.quickstart.a.newShowContent(routeObj.value,	$.extend({'pageType':'category'}, routeObj.params));});
_app.router.appendHash({'type':'match','route':'/category/{{navcat}}*','callback':'category'});

_app.router.addAlias('search',		function(routeObj){_app.ext.quickstart.a.newShowContent(routeObj.value,	$.extend({'pageType':'search','require':['quickstart','_store_formals','_store_filter','powerreviews_reviews','store_product']}, routeObj.params));});
_app.router.appendHash({'type':'match','route':'/search/tag/{{tag}}*','callback':'search'});
_app.router.appendHash({'type':'match','route':'/search/keywords/{{KEYWORDS}}*','callback':'search'});

_app.router.addAlias('checkout',	function(routeObj){_app.ext.quickstart.a.newShowContent(routeObj.value,	$.extend({'pageType':'checkout', 'requireSecure':true}, routeObj.params));});
_app.router.appendHash({'type':'exact','route':'/checkout','callback':'checkout'});
_app.router.appendHash({'type':'exact','route':'/checkout/','callback':'checkout'});

_app.router.addAlias('cart',	function(routeObj){_app.ext.quickstart.a.newShowContent(routeObj.value,	$.extend({'pageType':'cart'}, routeObj.params));});
_app.router.appendHash({'type':'exact','route':'/cart','callback':'cart'});
_app.router.appendHash({'type':'exact','route':'/cart/','callback':'cart'});

_app.router.appendHash({'type':'exact','route':'/404','callback':function(routeObj){
	$.extend(routeObj.params,{
		'pageType':'static',
		'templateID':'pageNotFoundTemplate',
		'require':['templates.html','store_routing']
		});
	_app.ext.quickstart.a.newShowContent(routeObj.value,routeObj.params);
	}});

_app.router.appendHash({'type':'exact','route':'/about_us/','callback':function(routeObj){
	$.extend(routeObj.params,{
		'pageType':'static',
		'templateID':'aboutUsTemplate',
		'require':['templates.html']
		});
	_app.ext.quickstart.a.newShowContent(routeObj.value,routeObj.params);
	}});
_app.router.appendHash({'type':'exact','route':'/contact_us/','callback':function(routeObj){
	$.extend(routeObj.params,{
		'pageType':'static',
		'templateID':'contactUsTemplate',
		'require':['templates.html', 'store_crm']
		});
	_app.ext.quickstart.a.newShowContent(routeObj.value,routeObj.params);
	}});
_app.router.appendHash({'type':'exact','route':'/frequently_asked_questions/','callback':function(routeObj){
	$.extend(routeObj.params,{
		'pageType':'static',
		'templateID':'faqTemplate',
		'require':['templates.html']
		});
	dump(routeObj.params);
	routeObj.params.deferred = $.Deferred();
	_app.ext.quickstart.a.newShowContent(routeObj.value,routeObj.params);
	}});
_app.u.bindTemplateEvent('faqTemplate','complete.faq',function(event, $context, infoObj){
	$context.off('complete.faq');
	dump('in faq complete event');
	_app.require(['store_crm','templates.html'],function(){
		_app.ext.store_crm.calls.appFAQsAll.init({'jqObj':$('.faqContent',$context),'deferred':infoObj.deferred,'callback':'showFAQTopics','extension':'store_crm','templateID':'faqTopicTemplate'});
		_app.model.dispatchThis();			
		});
	});
_app.router.appendHash({'type':'exact','route':'/payment_policy/','callback':function(routeObj){
	$.extend(routeObj.params,{
		'pageType':'static',
		'templateID':'paymentTemplate',
		'require':['templates.html']
		});
	_app.ext.quickstart.a.newShowContent(routeObj.value,routeObj.params);
	}});
_app.router.appendHash({'type':'exact','route':'/privacy_policy/','callback':function(routeObj){
	$.extend(routeObj.params,{
		'pageType':'static',
		'templateID':'privacyTemplate',
		'require':['templates.html']
		});
	_app.ext.quickstart.a.newShowContent(routeObj.value,routeObj.params);
	}});
_app.router.appendHash({'type':'exact','route':'/return_policy/','callback':function(routeObj){
	$.extend(routeObj.params,{
		'pageType':'static',
		'templateID':'returnTemplate',
		'require':['templates.html']
		});
	_app.ext.quickstart.a.newShowContent(routeObj.value,routeObj.params);
	}});
_app.router.appendHash({'type':'exact','route':'/shipping_policy/','callback':function(routeObj){
	$.extend(routeObj.params,{
		'pageType':'static',
		'templateID':'shippingTemplate',
		'require':['templates.html']
		});
	_app.ext.quickstart.a.newShowContent(routeObj.value,routeObj.params);
	}});
_app.router.appendHash({'type':'exact','route':'/store_locations/','callback':function(routeObj){
	$.extend(routeObj.params,{
		'pageType':'static',
		'templateID':'locationTemplate',
		'require':['templates.html']
		});
	_app.ext.quickstart.a.newShowContent(routeObj.value,routeObj.params);
	}});

_app.router.appendHash({'type':'exact','route':'/my_account/','callback':function(routeObj){
	$.extend(routeObj.params,{
		'pageType':'static',
		'login' : true,
		'templateID':'myAccountTemplate',
		'require':['cco','templates.html','store_crm']
		});
	_app.ext.quickstart.a.newShowContent(routeObj.value,routeObj.params);
	}});	
_app.u.bindTemplateEvent('myAccountTemplate','complete.customer',function(event, $context, infoObj){
	_app.ext.cco.calls.appCheckoutDestinations.init(_app.model.fetchCartID(),{},'mutable'); //needed for country list in address editor.
	_app.model.addDispatchToQ({"_cmd":"buyerAddressList","_tag":{'callback':'tlc','jqObj':$('.mainColumn',$context),'verb':'translate','datapointer':'buyerAddressList'}},'mutable');
	_app.model.dispatchThis();							
	});
_app.router.appendHash({'type':'exact','route':'/change_password/','callback':function(routeObj){
	$.extend(routeObj.params,{
		'pageType':'static',
		'login' : true,
		'templateID':'changePasswordTemplate',
		'require':['templates.html']
		});
	_app.ext.quickstart.a.newShowContent(routeObj.value,routeObj.params);
	}});
_app.router.appendHash({'type':'exact','route':'/my_order_history/','callback':function(routeObj){
	$.extend(routeObj.params,{
		'pageType':'static',
		'login' : true,
		'templateID':'orderHistoryTemplate',
		'require':['templates.html']
		});
	_app.ext.quickstart.a.newShowContent(routeObj.value,routeObj.params);
	}});
_app.u.bindTemplateEvent('changePasswordTemplate','complete.customer',function(event, $context, infoObj){
	_app.model.addDispatchToQ({"_cmd":"buyerPurchaseHistory","_tag":{
		"datapointer":"buyerPurchaseHistory",
		"callback":"tlc",
		"verb" : "translate",
		"jqObj" : $("[data-app-role='orderList']",$context).empty()
		}},"mutable");
	_app.model.dispatchThis();							
	});
_app.router.appendHash({'type':'exact','route':'/my_wishlist/','callback':function(routeObj){
	$.extend(routeObj.params,{
		'pageType':'static',
		'login' : true,
		'templateID':'customerListsTemplate',
		'require':['templates.html']
		});
	_app.ext.quickstart.a.newShowContent(routeObj.value,routeObj.params);
	}});
_app.u.bindTemplateEvent('orderHistoryTemplate','complete.customer',function(event, $context, infoObj){
	_app.model.addDispatchToQ({"_cmd":"buyerPurchaseHistory","_tag":{'callback':'tlc','jqObj':$('.mainColumn',$context),'verb':'translate','datapointer':'buyerPurchaseHistory'}},'mutable');
	_app.model.dispatchThis();							
	});
_app.u.bindTemplateEvent('customerListsTemplate','complete.customer',function(event, $context, infoObj){
	_app.model.addDispatchToQ({"_cmd":"buyerProductLists","_tag":{"datapointer":"buyerProductLists",'verb':'translate','jqObj': $('.mainColumn',$context),'callback':'tlc',onComplete : function(rd){
//data formatting on lists is unlike any other format for product, so a special handler is used.				
		function populateBuyerProdlist(listID,$context)	{
			//add the product list ul here because tlc statement has list ID for bind.
			$("[data-buyerlistid='"+listID+"']",$context).append("<ul data-tlc=\"bind $var '.@"+listID+"'; store_prodlist#productlist  --hideSummary='1' --withReviews='1' --withVariations='1' --withInventory='1' --templateid='productListTemplateBuyerList'  --legacy;\" class='listStyleNone fluidList clearfix noPadOrMargin productList'></ul>");
			_app.model.addDispatchToQ({"_cmd":"buyerProductListDetail","listid":listID,"_tag" : {'datapointer':'buyerProductListDetail|'+listID,"listid":listID,'callback':'buyerListAsProdlist','extension':'quickstart', "require":"store_prodlist",'jqObj':$("[data-buyerlistid='"+listID+"'] ul",$context)}},'mutable');
			}
		
		var data = _app.data[rd.datapointer]['@lists']; //shortcut
		var L = data.length;
		var numRequests = 0;
		for(var i = 0; i < L; i += 1)	{
			populateBuyerProdlist(data[i].id,rd.jqObj)
			}
		_app.model.dispatchThis('mutable');
		//no sense putting 1 list into an accordion.
		if(L > 1)	{
			$('.applyAccordion',rd.jqObj).accordion({heightStyle: "content"});
			}
		}}},"mutable");
	_app.model.dispatchThis();							
	});
_app.u.bindTemplateEvent(function(){return true;}, 'complete.routing', function(event, $context, infoObj){
	if(infoObj){
		var canonical = "";
		
		var $routeEle = $('[data-canonical]',$context);
		if($routeEle.length){ canonical = $routeEle.attr('data-canonical'); }
		else{
			canonical = $context.closest('[data-app-uri]').attr('data-app-uri');
			}
		
		var $canonical = $('link[rel=canonical]')
		if(!$canonical.length){
			dump('NO CANONICAL IN THE DOCUMENT');
			$canonical = $('<link rel="canonical" href="" />');
			$('head').append($canonical);
			}
		$canonical.attr('href', canonical);
		}
	});
	
_app.extend({
	"namespace" : "store_tracking",
	"filename" : "extensions/store_tracking.js"
	});
_app.couple('order_create','addOrderCompleteHandler',{
	'handler':function(P){
		_app.require('store_tracking',function(){
			if(P && P.datapointer && _app.data[P.datapointer] && _app.data[P.datapointer].order){
				var order = _app.data[P.datapointer].order;
				var plugins = zGlobals.plugins;
				// note: order is an object that references the raw (public) cart
				// order.our.xxxx  order[@ITEMS], etc.
				// data will appear in google analytics immediately after adding it (there is no delay)
				ga('require', 'ecommerce');
				//analytics tracking
				var r = {
					'id' : order.our.orderid,
					'revenue' : order.sum.items_total,
					'shipping' : order.sum.shp_total,
					'tax' : order.sum.tax_total
					};
				// _app.u.dump(r);
				ga('ecommerce:addTransaction',r);

				for(var i in order['@ITEMS']){
					var item = order['@ITEMS'][i];
					// _app.u.dump(item);
					ga('ecommerce:addItem', {
						'id' : order.our.orderid,
						'name' : item.prod_name,
						'sku' : item.sku,
						'price' : item.base_price,
						'quantity' : item.qty,
						})
					};

				ga('ecommerce:send');
				_app.u.dump('FINISHED store_tracking.onSuccess (google analytics)');
				
				for(var i in plugins){
					if(_app.ext.store_tracking.trackers[i] && _app.ext.store_tracking.trackers[i].enable){
						_app.ext.store_tracking.trackers[i](order, plugins[i]);
						}
					}
				}
			});
		}
	});
	
//********************************************************************************BEGIN TEMPLATE CUSTOM INITS*********************************************************************************

//BEGIN ONCOMPLETES/ONDEPARTS/ONINITS
_app.u.bindTemplateEvent('productTemplate', 'complete.pageinit',function(event,$context,infoObj){
//_app.rq.push(['templateFunction','productTemplate','onCompletes',function(P) {

	//INTERNET EXPLORER WARNING MESSAGE
	/*
	if($('.headerIE8WarningCont').data('messageShown')){
	}
	else{
		$('.headerIE8WarningCont').data('messageShown',false);
	}
	if($('.headerIE8WarningCont').data('messageShown') === false)
	{
		$('.headerIE8WarningCont').anymessage({'message':'We noticed you\'re using Internet Explorer 8. We recommend upgrading to version 9 and above or using Firefox, Chrome, or Safari for a more enhanced shopping experience.'});	
		$('.headerIE8WarningCont').data('messageShown',true).append();
	}
	*/
	
	//var $context = $(_app.u.jqSelector('#',infoObj.parentID));
	var $tabContainer = $( ".tabbedProductContent",$context);
		if($tabContainer.length)	{
			if($tabContainer.data("widget") == 'anytabs'){} //tabs have already been instantiated. no need to be redundant.
			else	{
				$tabContainer.anytabs();
			}
		}
		else	{} //couldn't find the tab to tabificate.
		
		
		//HOVER ZOOM FEATURE
		 
		 var image = $('.prodImageContainer',$context).attr('data-imgsrc');
		 //dump("var image =");
		 //dump (image);
		 var imageURL = _app.u.makeImage({
		   "name" : image,
		   "w" : 1000,
		   "h" : 1150,
		   "b" : "FFFFFF"
		   });
		 $('.largeImageContainer', $context).zoom({
		  url: imageURL,
		  on:'mouseover',
		  onZoomIn: function(){
		   // the active class causes the curser to be switched to a zoom out image - this occurs when the image has zoom
		   $('.largeImageContainer').addClass('active');
		   },
		  onZoomOut: function(){
		   // restores the zoom in curser after zoom out
		   $('.largeImageContainer').removeClass('active');
		   }});
		 $('.thumbnail',$context).on('mouseenter', function(){
			  //dump("Thumbnail swap action activated.");
			  $('.largeImageContainer').trigger('zoom.destroy');
			  //dump("$(this).parent().attr('data-imgsrc') = ");
			  //dump($(this).parent().attr('data-imgsrc'));
			  var newImage = $(this).attr('data-imgsrc');
			  
			  //IMAGE VIEWER CLICK BLOCKER
			  var thumbObject = $(this);
			  if(thumbObject.data("firstTimeHover")){
				  //_app.u.dump("firstTimeHover exists for " + $(this) + ". Doing nothing.")
			  }
			  else{
				  //_app.u.dump("firstTimeHover does not exists for " + $(this) + ". Adding it set to false.")
				  thumbObject.data('firstTimeHover',false).append();
			  }
			  
			  if (thumbObject.data('firstTimeHover') === false){
				  //_app.u.dump("Running image blocker for " + $(this) + ".")
				  var imageContainerSize = $('.imageContainer', $context).height();
				  //_app.u.dump(imageContainerSize);
				  $(".imageContainerBlocker", $context).css("height",imageContainerSize);
				  $(".imageContainerBlocker", $context).show();
			  }
			  //END IMAGE CLICK BLOCKER
		
			  $('.prodImageContainer > img',$context).attr('src', _app.u.makeImage({
				   "name" : newImage,
				   "w" : 450,
				   "h" : 560,
				   "b" : "FFFFFF"
			   }));
			  var newImageURL = _app.u.makeImage({
				   "name" : newImage,
				   "w" : 1000,
				   "h" : 1150,
				   "b" : "FFFFFF"
			   });
			   
			   //CLICK BLOCKER ACTIVATOR
			   setTimeout(function(){
				   $(".imageContainerBlocker", $context).hide();
				   thumbObject.data('firstTimeHover',true).append();
				   //_app.u.dump("Setting firstTimeHover to true for " + $(this) + ".");
			   }, 2000);
			   //END CLICK BLOCK ACTIVATOR
			   
			  $('.largeImageContainer').zoom({
				   url: newImageURL,
				   on:'mouseover',
				   onZoomIn: function(){
					$('.largeImageContainer').addClass('active');
					//_app.u.dump("we're running addClass");
					},
				   onZoomOut: function(){
					$('.largeImageContainer').removeClass('active');
					}
				});
		});
	
		function productHoverZoomClick(){
			$(".zoomImg", $context).before("<div onClick='_app.ext.store_product.u.showPicsInModal({\"pid\":$(this).attr(\"data-pid\")});' data-bind=\"var:product(zoovy:prod_image1; format:assignAttribute; attribute:data-pid;\">");
			$(".zoomImg", $context).after("</div>");
		}
});
	
_app.u.bindTemplateEvent('homepageTemplate', 'complete.pageinit',function(event,$context,infoObj){
	
	//INTERNET EXPLORER WARNING MESSAGE
	/*
	if($('.headerIE8WarningCont').data('messageShown')){
	}
	else{
		$('.headerIE8WarningCont').data('messageShown',false);
	}
	if($('.headerIE8WarningCont').data('messageShown') === false)
	{
		$('.headerIE8WarningCont').anymessage({'message':'We noticed you\'re using Internet Explorer 8. We recommend upgrading to version 9 and above or using Firefox, Chrome, or Safari for a more enhanced shopping experience.'});	
		$('.headerIE8WarningCont').data('messageShown',true).append();
	}
	*/
	
	//Carousel horizontal sliders - homepage banner
	function carouselHPBanner(){ $(".carouselHPBannerList", $context).carouFredSel
	({
		width   : 940,
		//height	: 350,
		items   : 1,
		scroll: 1,
		auto : {
			duration    : 500,
			timeoutDuration: 5000,
			pauseOnHover: true
		},
		prev : ".prevHPBannerCaro",
		next : ".nextHPBannerCaro"
	});
	}
	setTimeout(carouselHPBanner, 1000);
	
	//Carousel title bar - homepage product lists
	function carouselHPProductListTitle(){ $(".hpProductListTitleCarousel", $context).carouFredSel
	({
		width   : 400,
		height	: 112,
		items   : 1,
		scroll: 1,
		auto : false,
		/*auto : {
			duration    : 500,
			timeoutDuration: 5000,
			pauseOnHover: true
		},*/
		//pagination  : ".hpProductListPag"
	});
	}
	setTimeout(carouselHPProductListTitle, 1000);
	
	//Carousel Content bar - homepage product lists
	function carouselHPProductList(){ $(".hpProductListCarouselContainer",$context).carouFredSel
	({
		width   : 960,
		//height	: 670,
		items   : 1,
		scroll: 1,
		auto : false,
	});
	}
	//$(".loadingBG", ".hpProductListCarouselContainer").remove();
	//_app.u.dump("loadingBG has been removed from bottom carousel");
	
	setTimeout(carouselHPProductList, 1000);
	
	$(".hpProductListNext", $context).click(function() {
		$(".hpProductListTitleCarousel", $context).trigger("next");
		$(".hpProductListCarouselContainer", $context).trigger("next");
	});
	$(".hpProductListPrev", $context).click(function() {
		$(".hpProductListTitleCarousel", $context).trigger("prev");
		$(".hpProductListCarouselContainer", $context).trigger("prev");
	});
	
	//TITLEBAR HIDING FUNCTIONALITY.
	if($(".homepageSubCatTitleBar1", $context).children().text().length === 0){
		$(".homepageSubCatTitleBar1", $context).hide();
	}
	else{
		$(".homepageSubCatTitleBar1", $context).show();
	}
	
	if($(".homepageSubCatTitleBar2", $context).children().text().length === 0){
		$(".homepageSubCatTitleBar2", $context).hide();
	}
	else{
		$(".homepageSubCatTitleBar2", $context).show();
	}
	
	if($(".homepageSubCatTitleBar3", $context).children().text().length === 0){
		$(".homepageSubCatTitleBar3", $context).hide();
	}
	else{
		$(".homepageSubCatTitleBar3", $context).show();
	}
	
	if($(".homepageCatTitleBar1", $context).children().text().length === 0){
		$(".homepageCatTitleBar1", $context).hide();
	}
	else{
		$(".homepageCatTitleBar1", $context).show();
	}
	
	if($(".homepageCatTitleBar2", $context).children().text().length === 0){
		$(".homepageCatTitleBar2", $context).hide();
	}
	else{
		$(".homepageCatTitleBar2", $context).show();
	}
	
	if($(".homepageCatTitleBar3", $context).children().text().length === 0){
		$(".homepageCatTitleBar3", $context).hide();
	}
	else{
		$(".homepageCatTitleBar3", $context).show();
	}
	
	if($(".homepageCatTitleBar4", $context).children().text().length === 0){
		$(".homepageCatTitleBar4", $context).hide();
	}
	else{
		$(".homepageCatTitleBar4", $context).show();
	}
});


_app.extend({
	"namespace" : "_store_banner",
	"filename" : "extensions/_store_banner.js"
	});


_app.u.bindTemplateEvent('categoryTemplate', 'complete.pageinit',function(event,$context,infoObj){
	
	//INTERNET EXPLORER WARNING MESSAGE
	if($('.headerIE8WarningCont', $context).data('messageShown')){
	}
	else{
		$('.headerIE8WarningCont', $context).data('messageShown',false);
	}
	if($('.headerIE8WarningCont', $context).data('messageShown') === false)
	{
		$('.headerIE8WarningCont', $context).anymessage({'message':'We noticed you\'re using Internet Explorer 8. We recommend upgrading to version 9 and above or using Firefox, Chrome, or Safari for a more enhanced shopping experience.'});	
		$('.headerIE8WarningCont', $context).data('messageShown',true).append();
	}
	
	//var $context = $(_app.u.jqSelector('#',infoObj.parentID));
	
	dump("infoObj.navcat = ");
	dump(infoObj.navcat);
	
	_app.ext._store_banner.u.showCategoryBanners($context, infoObj.navcat);
	
	//Carousel horizontal sliders - category banner
	function carouselCPBanner(){ $(".carouselCPBannerList", $context).carouFredSel
	({
		width   : 960,
		//height	: 440,
		items   : 1,
		scroll: 1,
		auto : {
			duration    : 500,
			timeoutDuration: 5000,
			pauseOnHover: true
		},
		prev : ".prevCPBannerCaro",
		next : ".nextCPBannerCaro"
	});
	}
	setTimeout(carouselCPBanner, 2000);
	
	
	
		//Carousel title bar - homepage product lists
	/*
	function carouselCatProductListTitle(){ $(".catProductListTitleCarousel").carouFredSel
	({
		width   : 400,
		height	: 112,
		items   : 1,
		scroll: 1,
		auto : false,
	});
	}
	setTimeout(carouselCatProductListTitle, 2000);
	
	//Carousel Content bar - homepage product lists
	function carouselCatProductList(){ $(".catProductListCarouselContainer").carouFredSel
	({
		width   : 960,
		//height	: 695,
		items   : 1,
		scroll: 1,
		auto : false,
	});
	}
	$(".loadingBG", ".catProductListCarouselContainer").remove();
	_app.u.dump("loadingBG has been removed from bottom carousel");
	
	setTimeout(carouselCatProductList, 2000);
	
	$(".catProductListNext").click(function() {
		$(".catProductListTitleCarousel").trigger("next", 1);
		$(".catProductListCarouselContainer").trigger("next", 1);
	});
	$(".catProductListPrev").click(function() {
		$(".catProductListTitleCarousel").trigger("prev", 1);
		$(".catProductListCarouselContainer").trigger("prev", 1);
	});
	*/
	
	
	

});


var filterIDNum = 0;
var filterForNum = 0;







_app.u.bindTemplateEvent('categoryProductListTemplate', 'complete.pageinit',function(event,$context,infoObj){
	//var $context = $(_app.u.jqSelector('#',infoObj.parentID));
	
	function carouselCPBanner(){ $(".carouselCPBannerList", $context).carouFredSel
	({
		width   : 960,
		//height	: 440,
		items   : 1,
		scroll: 1,
		auto : {
			duration    : 500,
			timeoutDuration: 5000,
			pauseOnHover: true
		},
		prev : ".prevCPBannerCaroProdList",
		next : ".nextCPBannerCaroProdList"
	});
	}
	setTimeout(carouselCPBanner, 2000);
	
	//$('.fsCheckbox').attr('checked', false);
	//$(".nativeProductList").show(); 
	//$(".searchFilterResults").hide();
	
	//**COMMENT TO REMOVE AUTO-RESETTING WHEN LEAVING CAT PAGE FOR FILTERED SEARCH**
	
	_app.ext._store_filter.u.startFilterSearch($context,infoObj);
	
	/*
	_app.ext._store_filter.catPageID = $(_app.u.jqSelector('#',infoObj.navcat));  
	
	_app.u.dump("BEGIN categoryTemplate onCompletes for filtering");
	if(_app.ext._store_filter.filterMap[infoObj.navcat])	{
		_app.u.dump(" -> safe id DOES have a filter.");
		
		var $formContainer = $("[data-filter-forms='search']");
		if($("[name='"+_app.ext.store_filter.filterMap[infoObj.navcat].filter+"']",$formContainer).length) {}
		else { $formContainer.empty().tlc({verb:"transmogrify", templateid:"appFiltersTemplate"}); }


		var $page = $context;
		_app.u.dump(" -> $page.length: "+$page.length);
		if($page.data('filterAdded'))	{} //filter is already added, don't add again.
		else	{
			$page.data('filterAdded',true)
			var $form = $("[name='"+_app.ext._store_filter.filterMap[infoObj.navcat].filter+"']",'#appFilters').clone().appendTo($('.catProdListSidebar',$page));
			$form.on('submit.filterSearch',function(event){
				event.preventDefault()
				_app.u.dump(" -> Filter form submitted.");
				_app.ext._store_filter.a.execFilter($form,$page);
				});
	
			if(typeof _app.ext._store_filter.filterMap[infoObj.navcat].exec == 'function')	{
				_app.ext._store_filter.filterMap[infoObj.navcat].exec($form,infoObj)
				}
	
	//make all the checkboxes auto-submit the form and show results list.
			$(":checkbox",$context).off('click.formSubmit').on('click.formSubmit',function() {
				$form.submit(); 
				//_app.u.dump("A filter checkbox was clicked.");
				$("#resultsProductListContainer",$context).hide();  
				
				$group1 = $('.fsCheckbox',$context);
				
				if(($group1.filter(':checked').length === 0) && ($(".sliderValue",$context).val() == "$0 - $1000")){
					//_app.u.dump("All checkboxes removed. Showing stock product list.");
					$(".nativeProductList", $context).show(); 
					$(".searchFilterResults", $context).hide(); 
				}
				else{
					//_app.u.dump("Checkbox is active. Showing Search results.");
					$(".nativeProductList", $context).hide(); 
					$(".searchFilterResults", $context).show();  
				}  
			});
			
			//_app.u.dump($(".sliderValue",$context));
		}
	}
		
				
			
		
		$('.resetButton', $context).click(function(){
			$('.fsCheckbox', $context).attr('checked', false);
			$(".nativeProductList", $context).show(); 
			$(".searchFilterResults", $context).hide();    
		});
		*/
		
		//**ADD ID/FOR VALUES FOR CHECKBOX VISUAL MODIFIER**
		/*
		$('.filterCB', $context).each(function() {
			$(this).attr('id', 'filterCB'+filterIDNum);
			filterIDNum += 1;
		});
		$('.break', $context).each(function() {
			$(this).attr('for', 'filterCB'+filterForNum);
			filterForNum += 1;
		});
		*/
		
		
		//IF RE-VISITING A CAT PAGE, RETURNS HEIGHT OF GHOST ELEMENT TO EITHER FULL FILTER FORM SIZE OR COLLAPSED.
		if($('.catGhostCell', $context).data('heightVal')){
			var catGhostCellHeight = $('.catGhostCell', $context).data('heightVal');
			//_app.u.dump("$('.catGhostCell', $context).data('heightVal') exists. Assigning height value");
			$(".catGhostCell", $context).css("height",catGhostCellHeight);
		}
		else{
			$('.catGhostCell', $context).data('heightVal', '').append();
			//_app.u.dump("$('.catGhostCell', $context).data('heightVal') doesn't exists. Make it.");
		}
		
		//ASSIGN EXPAND/COLLAPSE VALUES TO FILTER FORM
		var $sidebarContext = $(".catProdListSidebar", $context).parent().parent();
		//_app.u.dump($sidebarContext);
		
		if($('.layeredSearch', $context).length){
			if($('.catProdListSidebar', $context).data('collapseOrExpanded')){
				//_app.u.dump("$('.catProdListSidebar', $context).data('collapseOrExpanded') exists. Do nothing.");
			}
			else{
				//_app.u.dump("$('.catProdListSidebar', $context).data('collapseOrExpanded') doesn't exists. Make it.");
				$('.catProdListSidebar', $context).data('collapseOrExpanded',false).append();
			}
			
			//_app.u.dump("Filter form found, showing search tab");
		}
		else{
			$('.searchTab', $context).hide();
			//_app.u.dump("Filter form not found, hiding search tab");
		}
		
		if($('.filterPriceCat', $context).length){
			$('.filterCategoryCont', '.filterPriceCat').show();
			$('.filterCatTitle', '.filterPriceCat').css("background-image","url(Images/categorypage/filteredsearch/catbaropen.png)");
			$('.filterPriceCat', $context).data('collapseOrExpanded',true).append();
		}
		
		if($('.filterDressTypeCat', $context).length){
			$('.filterCategoryCont', '.filterDressTypeCat').show();
			$('.filterCatTitle', '.filterDressTypeCat').css("background-image","url(Images/categorypage/filteredsearch/catbaropen.png)");
			$('.filterDressTypeCat', $context).data('collapseOrExpanded',true).append();
		}
		
		if($('.filterDesignerCat', $context).length){
			$('.filterCategoryCont', '.filterDesignerCat').show();
			$('.filterCatTitle', '.filterDesignerCat').css("background-image","url(Images/categorypage/filteredsearch/catbaropen.png)");
			$('.filterDesignerCat', $context).data('collapseOrExpanded',true).append();
		}
		
		if($('.filterColorCat', $context).length){
			$('.filterCategoryCont', '.filterColorCat').show();
			$('.filterCatTitle', '.filterColorCat').css("background-image","url(Images/categorypage/filteredsearch/catbaropen.png)");
			$('.filterColorCat', $context).data('collapseOrExpanded',true).append();
		}
		
		if($('.filterHemlineCat', $context).length){
			$('.filterCategoryCont', '.filterHemlineCat').show();
			$('.filterCatTitle', '.filterHemlineCat').css("background-image","url(Images/categorypage/filteredsearch/catbaropen.png)");
			$('.filterHemlineCat', $context).data('collapseOrExpanded',true).append();
		}
		
		if($('.filterSilhouetteCat', $context).length){
			$('.filterCategoryCont', '.filterSilhouetteCat').show();
			$('.filterCatTitle', '.filterSilhouetteCat').css("background-image","url(Images/categorypage/filteredsearch/catbaropen.png)");
			$('.filterSilhouetteCat', $context).data('collapseOrExpanded',true).append();
		}
		
		if($('.filterNecklineCat', $context).length){
			$('.filterCategoryCont', '.filterNecklineCat').show();
			$('.filterCatTitle', '.filterNecklineCat').css("background-image","url(Images/categorypage/filteredsearch/catbaropen.png)");
			$('.filterNecklineCat', $context).data('collapseOrExpanded',true).append();
		}
		
		if($('.filterSaleCat', $context).length){
			$('.filterCategoryCont', '.filterSaleCat').show();
			$('.filterCatTitle', '.filterSaleCat').css("background-image","url(Images/categorypage/filteredsearch/catbaropen.png)");
			$('.filterSaleCat', $context).data('collapseOrExpanded',true).append();
		}
		
		if($('.filterTrendsCat', $context).length){
			$('.filterCategoryCont', '.filterTrendsCat').show();
			$('.filterCatTitle', '.filterTrendsCat').css("background-image","url(Images/categorypage/filteredsearch/catbaropen.png)");
			$('.filterTrendsCat', $context).data('collapseOrExpanded',true).append();
		}
		
		_app.ext._store_banner.u.showCategoryBanners($context, infoObj.navcat);		
});



_app.u.bindTemplateEvent('searchTemplate', 'complete.pageinit',function(event,$context,infoObj){
	//if(infoObj.preservePage){ alert("You hit the back button");}
	
	//var $context = $(_app.u.jqSelector('#',infoObj.parentID));
	var $page = $context;
	
	//****FILTERED SEARCH CODE****
	//dump("Begin add of filtered search to the search page.");
	$('.fsCheckbox').attr('checked', false);
	$("#resultsProductListContainer").show(); 
	$(".searchFilterResults").hide();    
	//_app.u.dump("BEGIN searchTemplate onCompletes for filtering");
	var $form = $("[name='SearchPageFilterSearchForm']",'#appFilters').clone().appendTo($('.filterContainerSearch',$page));
	$form.on('submit.filterSearch',function(event){
		event.preventDefault()
		//_app.u.dump(" -> Filter form submitted.");
		_app.ext._store_filter.a.execFilter($form,$page);
				});
	
		if(typeof _app.ext._store_filter.filterMap["searchPage"].exec == 'function')	{
			_app.ext._store_filter.filterMap["searchPage"].exec($form,infoObj)
			}
	
	//make all the checkboxes auto-submit the form.
		$(":checkbox",$form).off('click.formSubmit').on('click.formSubmit',function() {
			$form.submit(); 
			//_app.u.dump("Filter search actvated");
			$("#resultsProductListContainer").hide();  
			
			$group1 = $('.fsCheckbox');
			if($group1.filter(':checked').length === 0){
				//_app.u.dump("All checkboxes removed. Filter search deactivated.");
				$("#resultsProductListContainer", $context).show(); 
				$(".searchFilterResults", $context).hide(); 
				$(".resultsHeader", $context).show();   
			}
			else{
				//_app.u.dump("All checkboxes removed. Filter search still active.");
				$("#resultsProductListContainer", $context).hide(); 
				$(".searchFilterResults", $context).show();  
				$(".resultsHeader", $context).hide();  
			}  
		});
				
			
		
		$('.resetButtonSearchPage', $context).click(function(){
			$('.fsCheckbox').attr('checked', false);
			$("#resultsProductListContainer").show(); 
			$(".searchFilterResults").hide();    
		});
		
		if($('.catGhostCell', $context).data('heightVal')){
			var catGhostCellHeight = $('.catGhostCell', $context).data('heightVal');
			//_app.u.dump("$('.catGhostCell', $context).data('heightVal') exists. Assigning height value");
			$(".catGhostCell", $context).css("height",catGhostCellHeight);
		}
		else{
			$('.catGhostCell', $context).data('heightVal', '').append();
			//_app.u.dump("$('.catGhostCell', $context).data('heightVal') doesn't exists. Make it.");
		}
		
		//ASSIGN EXPAND/COLLAPSE VALUES TO FILTER FORM
		var $sidebarContext = $(".filterContainerSearch").parent().parent();
		//_app.u.dump($sidebarContext);
		
		if($('.filterPriceCat', $context).length){
			$('.filterCategoryCont', '.filterPriceCat').show();
			$('.filterCatTitle', '.filterPriceCat').css("background-image","url(Images/categorypage/filteredsearch/catbaropen.png)");
			$('.filterPriceCat').data('collapseOrExpanded',true).append();
		}
		
		if($('.filterDressTypeCat', $context).length){
			$('.filterCategoryCont', '.filterDressTypeCat').show();
			$('.filterCatTitle', '.filterDressTypeCat').css("background-image","url(Images/categorypage/filteredsearch/catbaropen.png)");
			$('.filterDressTypeCat').data('collapseOrExpanded',true).append();
		}
		
		if($('.filterDesignerCat', $context).length){
			$('.filterCategoryCont', '.filterDesignerCat').show();
			$('.filterCatTitle', '.filterDesignerCat').css("background-image","url(Images/categorypage/filteredsearch/catbaropen.png)");
			$('.filterDesignerCat').data('collapseOrExpanded',true).append();
		}
		
		if($('.filterColorCat', $context).length){
			$('.filterCategoryCont', '.filterColorCat').show();
			$('.filterCatTitle', '.filterColorCat').css("background-image","url(Images/categorypage/filteredsearch/catbaropen.png)");
			$('.filterColorCat').data('collapseOrExpanded',true).append();
		}
		
		if($('.filterHemlineCat', $context).length){
			$('.filterCategoryCont', '.filterHemlineCat').show();
			$('.filterCatTitle', '.filterHemlineCat').css("background-image","url(Images/categorypage/filteredsearch/catbaropen.png)");
			$('.filterHemlineCat').data('collapseOrExpanded',true).append();
		}
		
		if($('.filterSilhouetteCat', $context).length){
			$('.filterCategoryCont', '.filterSilhouetteCat').show();
			$('.filterCatTitle', '.filterSilhouetteCat').css("background-image","url(Images/categorypage/filteredsearch/catbaropen.png)");
			$('.filterSilhouetteCat').data('collapseOrExpanded',true).append();
		}
		
		if($('.filterNecklineCat', $context).length){
			$('.filterCategoryCont', '.filterNecklineCat').show();
			$('.filterCatTitle', '.filterNecklineCat').css("background-image","url(Images/categorypage/filteredsearch/catbaropen.png)");
			$('.filterNecklineCat').data('collapseOrExpanded',true).append();
		}
		
		if($('.filterSaleCat', $context).length){
			$('.filterCategoryCont', '.filterSaleCat').show();
			$('.filterCatTitle', '.filterSaleCat').css("background-image","url(Images/categorypage/filteredsearch/catbaropen.png)");
			$('.filterSaleCat').data('collapseOrExpanded',true).append();
		}
		
		if($('.filterTrendsCat', $context).length){
			$('.filterCategoryCont', '.filterTrendsCat').show();
			$('.filterCatTitle', '.filterTrendsCat').css("background-image","url(Images/categorypage/filteredsearch/catbaropen.png)");
			$('.filterTrendsCat').data('collapseOrExpanded',true).append();
		}
});


_app.u.bindTemplateEvent('companyTemplate', 'complete.pageinit',function(event,$context,infoObj){
	//INTERNET EXPLORER WARNING MESSAGE
	if($('.headerIE8WarningCont').data('messageShown')){
	}
	else{
		$('.headerIE8WarningCont').data('messageShown',false);
	}
	if($('.headerIE8WarningCont').data('messageShown') === false)
	{
		$('.headerIE8WarningCont').anymessage({'message':'We noticed you\'re using Internet Explorer 8. We recommend upgrading to version 9 and above or using Firefox, Chrome, or Safari for a more enhanced shopping experience.'});	
		$('.headerIE8WarningCont').data('messageShown',true).append();
	}
});
_app.u.bindTemplateEvent('customerTemplate', 'complete.pageinit',function(event,$context,infoObj){
	//INTERNET EXPLORER WARNING MESSAGE
	if($('.headerIE8WarningCont').data('messageShown')){
	}
	else{
		$('.headerIE8WarningCont').data('messageShown',false);
	}
	if($('.headerIE8WarningCont').data('messageShown') === false)
	{
		$('.headerIE8WarningCont').anymessage({'message':'We noticed you\'re using Internet Explorer 8. We recommend upgrading to version 9 and above or using Firefox, Chrome, or Safari for a more enhanced shopping experience.'});	
		$('.headerIE8WarningCont').data('messageShown',true).append();
	}
});
_app.u.bindTemplateEvent('searchTemplate', 'complete.pageinit',function(event,$context,infoObj){
	//INTERNET EXPLORER WARNING MESSAGE
	if($('.headerIE8WarningCont').data('messageShown')){
	}
	else{
		$('.headerIE8WarningCont').data('messageShown',false);
	}
	if($('.headerIE8WarningCont').data('messageShown') === false)
	{
		$('.headerIE8WarningCont').anymessage({'message':'We noticed you\'re using Internet Explorer 8. We recommend upgrading to version 9 and above or using Firefox, Chrome, or Safari for a more enhanced shopping experience.'});	
		$('.headerIE8WarningCont').data('messageShown',true).append();
	}
});
_app.u.bindTemplateEvent('testimonialsTemplate', 'complete.pageinit',function(event,$context,infoObj){
	//INTERNET EXPLORER WARNING MESSAGE
	if($('.headerIE8WarningCont').data('messageShown')){
	}
	else{
		$('.headerIE8WarningCont').data('messageShown',false);
	}
	if($('.headerIE8WarningCont').data('messageShown') === false)
	{
		$('.headerIE8WarningCont').anymessage({'message':'We noticed you\'re using Internet Explorer 8. We recommend upgrading to version 9 and above or using Firefox, Chrome, or Safari for a more enhanced shopping experience.'});	
		$('.headerIE8WarningCont').data('messageShown',true).append();
	}
});
_app.u.bindTemplateEvent('categoryProductListTemplate', 'complete.pageinit',function(event,$context,infoObj){
	//INTERNET EXPLORER WARNING MESSAGE
	if($('.headerIE8WarningCont').data('messageShown')){
	}
	else{
		$('.headerIE8WarningCont').data('messageShown',false);
	}
	if($('.headerIE8WarningCont').data('messageShown') === false)
	{

		$('.headerIE8WarningCont').anymessage({'message':'We noticed you\'re using Internet Explorer 8. We recommend upgrading to version 9 and above or using Firefox, Chrome, or Safari for a more enhanced shopping experience.'});	
		$('.headerIE8WarningCont').data('messageShown',true).append();
	}
});
_app.u.bindTemplateEvent('productTemplate', 'complete.pageinit',function(event,$context,infoObj){
	//INTERNET EXPLORER WARNING MESSAGE
	if($('.headerIE8WarningCont').data('messageShown')){
	}
	else{
		$('.headerIE8WarningCont').data('messageShown',false);
	}
	if($('.headerIE8WarningCont').data('messageShown') === false)
	{
		$('.headerIE8WarningCont').anymessage({'message':'We noticed you\'re using Internet Explorer 8. We recommend upgrading to version 9 and above or using Firefox, Chrome, or Safari for a more enhanced shopping experience.'});	
		$('.headerIE8WarningCont').data('messageShown',true).append();
	}
});
_app.u.bindTemplateEvent('checkoutTemplate', 'complete.pageinit',function(event,$context,infoObj){
	//INTERNET EXPLORER WARNING MESSAGE
	if($('.headerIE8WarningCont').data('messageShown')){
	}
	else{
		$('.headerIE8WarningCont').data('messageShown',false);
	}
	if($('.headerIE8WarningCont').data('messageShown') === false)
	{
		$('.headerIE8WarningCont').anymessage({'message':'We noticed you\'re using Internet Explorer 8. We recommend upgrading to version 9 and above or using Firefox, Chrome, or Safari for a more enhanced shopping experience.'});	
		$('.headerIE8WarningCont').data('messageShown',true).append();
	}
});



_app.u.bindTemplateEvent('productTemplateQuickView', 'complete.pageinit',function(event,$context,infoObj){
	if($(".variation_D5", $context).length){
		//_app.u.dump(".variation_D5 exists. Adding sizing chat link");
		$(".variation_D5", $context).after("<div class='productSizingChartModalLinkContainer quickviewProductSizingChartModalLinkContainer'>"
		+ "<a onClick=\"$('#SizingChartTemplate').dialog({'modal':'true', 'title':'','width':825, height:700, dialogClass: 'dlgfixed', position: 'center', 'dialogClass' : 'SizingChartModal'});\"> Need help with your size?</a>"
		+ "</div>");
	}
	else{
		//_app.u.dump(".variation_D5 does not exists. Doing nothing");
	}
});

_app.u.bindTemplateEvent('productTemplate', 'complete.pageinit',function(event,$context,infoObj){
	if($(".variation_D5", $context).length){
		if($(".productSizingChartModalLinkContainer", $context).length){
		}
		else{
			//_app.u.dump(".variation_D5 exists. Adding sizing chat link");
			$(".variation_D5", $context).after("<div class='productSizingChartModalLinkContainer'>"
			+ "<a data-app-click='_store_formals|sizingchartmodal'> Need help with your size?</a>"
			+ "</div>");
		}
	}
	else{
		//_app.u.dump(".variation_D5 does not exists. Doing nothing");
	}
});

$('#cartTemplate').on('complete.updateMinicart',function(state,$ele,infoObj)	{
	var cartid = infoObj.cartid || myApp.model.fetchCartID();
	var $appView = $('#appView'), cart = myApp.data['cartDetail|'+cartid], itemCount = 0, subtotal = 0, total = 0;
	dump(" -> cart "+cartid+": "); dump(cart);
	if(!$.isEmptyObject(cart['@ITEMS']))	{
		itemCount = cart.sum.items_count || 0;
		subtotal = cart.sum.items_total;
		total = cart.sum.order_total;
		}
	else	{
		//cart not in memory yet. use defaults.
		}
	$('.cartItemCount',$appView).text(itemCount);
	$('.cartSubtotal',$appView).text(myApp.u.formatMoney(subtotal,'$',2,false));
	$('.cartTotal',$appView).text(myApp.u.formatMoney(total,'$',2,false));
});


//********************************************************************************END TEMPLATE CUSTOM INITS***********************************************************************************

//Generate meta information
_app.u.bindTemplateEvent(function(){return true;}, 'complete.metainformation',function(event, $context, infoObj){
	var defaultTitle = "Prom Dresses Online | Sherri Hill | La Femme | Tony Bowls";
	var titlePrefix = "";
	var titlePostfix = " | OnlineFormals.com";
	
	var baseTitle = $('[data-seo-title]', $context).attr('data-seo-title') || defaultTitle;
	var desc = $('[data-seo-desc]', $context).attr('data-seo-desc') || '';
	
	document.title = titlePrefix + baseTitle + titlePostfix;
	$('meta[name=description]').attr('content', desc);
	});
	
//Scroll restore
_app.u.bindTemplateEvent(function(){return true;}, 'complete.scrollrestore',function(event, $context, infoObj){
	var scroll = $context.data('scroll-restore');
	if(scroll){
		$('html, body').animate({scrollTop : scroll}, 300);
		dump("return scroll value detected. The position is: "+ scroll);
		}
	else if((infoObj.performJumpToTop === false) ? false : true) {
		$('html, body').animate({scrollTop : 0}, 300);
		dump("No return scroll value detected. Scrolling to the top of the screen");
		}
	else {
		//do nothing
		}
	});
	
_app.u.bindTemplateEvent(function(){return true;}, 'depart.scrollrestore', function(event, $context, infoObj){
	var scroll = $('html').scrollTop()
	$context.data('scroll-restore',scroll);
	dump($context);
	dump("Scroll position for "+$context+" is " + scroll);
	});

_app.extend({
	"namespace" : "_store_formals",
	"filename" : "extensions/_store_formals.js"
	});
_app.extend({
	"namespace" : "_store_filter",
	"filename" : "extensions/_store_filter.js"
	});
	
_app.u.bindTemplateEvent('homepageTemplate', 'depart.pageinit',function(event,$context,infoObj) {
	$(".mobileSlideMenu.standardNav", $context).removeClass("hideOnHome");
	});
	
_app.u.bindTemplateEvent('productTemplate', 'complete.invcheck',function(event, $context, infoObj){
	if(!$context.attr('data-invcheck')){
		$context.attr('data-invcheck','true');
		var data = _app.data['appProductGet|'+infoObj.pid];
		var variations = data['@variations'];
		if(variations.length == 1 /*&& variations[0].id.match(/A[BDEFGHM]/) */){
			var id = variations[0].id;
			$('select[name='+id+'] option', $context).each(function(){
				var sku = infoObj.pid+":"+id+""+$(this).attr("value");
				dump(sku);
				dump(data["@inventory"][sku]);
				if(data["@inventory"][sku] && data["@inventory"][sku].AVAILABLE <= 0){
					//$(this).attr("disabled","disabled");
					$(this).remove();
					}
				});
			}
		}
	});
_app.u.bindTemplateEvent('productTemplate', 'complete.pageinit', function(event, $context, infoObj){
	//app.ext._store_formals.u.showRecentlyViewedItems($context);
	//app.ext._store_formals.u.runPreviousCarousel($context);
	//app.ext._store_formals.u.showHideVariation($context,infoObj);
	});
_app.u.bindTemplateEvent('productTemplate', 'depart.pageinit', function(event, $context, infoObj){
	//_app.ext._store_formals.u.addRecentlyViewedItems($context, infoObj.pid);
	});
	
					

function loadPage(id, successCallback, failCallback){
	console.log(id);
	dump(_app.ext._store_filter.vars.filterPageLoadQueue);
	var pageObj = _app.ext._store_filter.vars.filterPageLoadQueue[id];
	if(pageObj){
		$.getJSON(pageObj.jsonPath+"?_v="+(new Date()).getTime(), function(json){
			_app.ext._store_filter.filterData[pageObj.id] = json;
			if(typeof successCallback == 'function'){
				successCallback();
				}
			})
			.fail(function(){
				dump("FILTER DATA FOR PAGE: "+pageObj.id+" UNAVAILABLE AT PATH: "+pageObj.jsonPath);
				if(typeof failCallback == 'function'){
					failCallback();
					}
				});
		}
	else {
		if(typeof failCallback == 'function'){
			failCallback();
			}
		}
	};

function showPage(routeObj,parentID){
//					dump('START showPage'); dump(routeObj);
	// routeObj.params.templateid = routeObj.params.templateID || "filteredSearchTemplate";
//					dump(parentID);
	routeObj.params.dataset = $.extend(true, {}, $.grep(_app.ext._store_filter.filterData[parentID].pages,function(e,i){
		return e.id == routeObj.params.id;
	})[0]);
//					dump('routeObj.params.dataset');  dump(routeObj.params.dataset.optionList);
	
	var optStrs = routeObj.params.dataset.optionList;
	routeObj.params.dataset.options = routeObj.params.dataset.options || {};
	for(var i in optStrs){
//						dump('optStrs[i]'); dump(optStrs[i]);
		var o = optStrs[i];
		if(_app.ext._store_filter.vars.elasticFields[o]){
			routeObj.params.dataset.options[o] = $.extend(true, {}, _app.ext._store_filter.vars.elasticFields[o]);
			if(routeObj.searchParams && routeObj.searchParams[o]){
				var values = routeObj.searchParams[o].split('|');
				for(var i in routeObj.params.dataset.options[o].options){
					var option = routeObj.params.dataset.options[o].options[i];
					if($.inArray(option.v, values) >= 0){
						option.checked = "checked";
						}
					}
				}
			}
		else {
			dump("Unrecognized option "+o+" on filter page "+routeObj.params.id);
			}
		}
	routeObj.params.dataset.breadcrumb = [parentID,routeObj.params.id]	
	routeObj.params.pageType = 'static'
	// showContent('static',routeObj.params);
	_app.ext.quickstart.a.newShowContent(routeObj.value,routeObj.params);
	}


function showSubPage(routeObj,parentID){
	routeObj.params.templateid = routeObj.params.templateID || "filteredSearchTemplate";
					dump('START showSubPage'); dump(routeObj);
//					dump(parentID); dump(_app.ext._store_filter.filterData);
	var filterData = _app.ext._store_filter.filterData[parentID]; //gets the top level data
//					dump('filtterData after gets top level data'); dump(filterData); dump(routeObj.params.id);
	filterData = $.grep(filterData.pages,function(e,i){
		return e.id == routeObj.params.id;	//gets mid level data
	})[0];

//					dump(filterData);
	filterData = $.grep(filterData.pages,function(e,i){
		return e.id == routeObj.params.end;	//gets the lowest level data
	})[0];
	routeObj.params.dataset = $.extend(true, {}, filterData);	//deep copy to avoid pass by reference bugs
	
	var optStrs = routeObj.params.dataset.optionList;
	routeObj.params.dataset.options = routeObj.params.dataset.options || {};
	for(var i in optStrs){
//						dump('optStrs[i]'); dump(optStrs[i]);
		var o = optStrs[i];
		if(_app.ext._store_filter.vars.elasticFields[o]){
			routeObj.params.dataset.options[o] = $.extend(true, {}, _app.ext._store_filter.vars.elasticFields[o]);
			if(routeObj.searchParams && routeObj.searchParams[o]){
				var values = routeObj.searchParams[o].split('|');
				for(var i in routeObj.params.dataset.options[o].options){
					var option = routeObj.params.dataset.options[o].options[i];
					if($.inArray(option.v, values) >= 0){
						option.checked = "checked";
						}
					}
				}
			}
		else {
			dump("Unrecognized option "+o+" on filter page "+routeObj.params.id);
			}
		}
	routeObj.params.dataset.breadcrumb = [parentID,routeObj.params.id,routeObj.params.end]
	routeObj.params.id = routeObj.params.id + "-" + routeObj.params.end;
	routeObj.params.pageType = 'static';
	// showContent('static',routeObj.params);
	_app.ext.quickstart.a.newShowContent(routeObj.value,routeObj.params);
	}

_app.router.addAlias('subcat', function(routeObj) {
	_app.require(['_store_formals','_store_filter','store_search','store_routing','prodlist_infinite','store_prodlist', 'templates.html'], function(){
		var a = routeObj.pagefilter;
		var b = routeObj.params.id;
		routeObj.params.templateID = "splashPageTemplate";
		$.getJSON("filters/apparel/"+a+".json?_v="+(new Date()).getTime(), function(json){
			var dataset = $.extend(true, {}, $.grep(json.pages,function(e,i){
				return e.id == b;
			})[0]);
			dataset.breadcrumb = [routeObj.pagefilter,routeObj.params.id]
			// showContent('static',{'templateid':'splashPageTemplate','id':routeObj.params.id,'dataset':dataset});
			$.extend(true, routeObj.params, {'pageType':'static','templateid':routeObj.templateid,'id':json.id,'dataset':dataset});
			_app.ext.quickstart.a.newShowContent(routeObj.value,routeObj.params);
		})
		.fail(function() {
			dump('FILTER DATA FOR ' + a + 'SUBCAT COULD NOT BE LOADED.');
			_app.router.handleURIChange('/404');
		});
	});
});	

_app.router.addAlias('filter', function(routeObj){
	_app.require(['_store_formals','_store_filter','store_search','store_routing','prodlist_infinite','store_prodlist', 'templates.html'], function(){
//		dump('filter alias routeObj: '); dump(routeObj);
		//decides if filter JSON is in local var or if it needs to be retrieved
		var filterpage = routeObj.pagefilter;
		routeObj.params.templateID = "filteredSearchTemplate";
			if(_app.ext._store_filter.filterData[filterpage]){
//			dump('RUNNING showPage');
			showPage(routeObj,filterpage);
		}
		else {
			dump('RUNNING filter loadPage');
			loadPage(
				filterpage, 
				function(){showPage(routeObj,filterpage);}, 
				function(){_app.router.handleURIChange('/404');}
			);
		}
	});
});


_app.router.addAlias('subfilter', function(routeObj){
	_app.require(['_store_formals','_store_filter','store_search','store_routing','prodlist_infinite','store_prodlist', 'templates.html'], function(){
		//decides if filter JSON is in local var or if it needs to be retrieved
		dump('-------------------------subfilter Alias'); dump(routeObj);
		var filterpage = routeObj.pagefilter;
		routeObj.params.templateID = "filteredSearchTemplate";
		if(_app.ext._store_filter.filterData[filterpage]){
			showSubPage(routeObj,filterpage);
		}
		else {
			loadPage(
				filterpage, 
				function(){showSubPage(routeObj,filterpage);}, 
				function(){_app.router.handleURIChange('/404');}
			);
		}
	});
});

				//sends passed object of attribs as a showContent search
				_app.router.addAlias('promo', function(routeObj){
					_app.require(['_store_formals','_store_filter','store_search','store_routing','prodlist_infinite','store_prodlist', 'templates.html'], function(){
						var path = routeObj.params.PATH;
				//		dump('promo Alias'); dump(path);
						$.getJSON("filters/search/"+path+".json?_v="+(new Date()).getTime(), function(json){
							dump('content shown from json');
				//			dump('THE SEARCH JSON IS...'); dump(routeObj.params);
							routeObj.params.elasticsearch = json;
						//	showContent('search',	routeObj.params);
						//	_app.router.addAlias('search',		function(routeObj){_app.ext.quickstart.a.newShowContent(routeObj.value,	$.extend({'pageType':'search'}, routeObj.params));});
							_app.ext.quickstart.a.newShowContent(routeObj.value,	$.extend({'pageType':'search'}, routeObj.params));
						})
						.fail(function() {
							dump('FILTER DATA FOR ' + path + ' PROMO COULD NOT BE LOADED.');
							_app.router.handleURIChange('/404');
						}); 
					});
				});
//EXPERIMENTAL PROMO CATEGORY TO GIVE THE A MORE "CATEGORY" LIKE FEEL (TITLES, FACETS, ETC.)
//WILL NEED IT'S OWN SHOWPAGE FUNCTION TO ADD THE FACETS FROM THE "ONLY LEAF" STYLE PAGE IT IS.
//_app.router.addAlias('promo', function(routeObj){
//	_app.require(['_store_formals','_store_filter','store_search','store_routing','prodlist_infinite','store_prodlist', 'templates.html'], function(){
//		var route = routeObj.pagefilter;
//		routeObj.params.templateID = 'filteredSearchTemplate';
//		if(_app.ext._store_formals.vars[route]) {
//			var filterData = $.extend(true, {}, _app.ext._store_formals.vars[route]);
//			$.extend(true, routeObj.params, {'templateid':routeObj.templateid,'id':filterData.id,'dataset':filterData});
//			_app.ext.quickstart.a.newShowContent(routeObj.value,routeObj.params);
//		}
//		else {
//			$.getJSON("filters/search/"+route+".json?_v="+(new Date()).getTime(), function(json){
//			_app.ext._store_formals.vars[route] = json;
//				//Deep copy into the routeObj.params, and that becomes our new "infoObj"
//				//Need to pass through routeObj.params at this moment, as it is expected to become infoObj
//				//This may change later.
//				$.extend(true, routeObj.params, {'pageType':'static','templateid':routeObj.templateid,'id':json.id,'dataset':json});
//				_app.ext.quickstart.a.newShowContent(routeObj.value,routeObj.params);
//			})
//			.fail(function() {
//				dump('FILTER DATA FOR ' + route + ' PROMO COULD NOT BE LOADED.');
//			});
//		}
//	});
//});

_app.router.addAlias('root', function(routeObj){
	_app.require(['_store_formals','_store_filter','store_search','store_routing','prodlist_infinite','store_prodlist', 'templates.html'], function(){
		var route = routeObj.pagefilter;
		routeObj.params.templateID = 'splashPageRootTemplate';
		if(_app.ext._store_formals.vars[route]) {
			var filterData = $.extend(true, {}, _app.ext._store_formals.vars[route]);
			$.extend(true, routeObj.params, {'templateid':routeObj.templateid,'id':filterData.id,'dataset':filterData});
			_app.ext.quickstart.a.newShowContent(routeObj.value,routeObj.params);
		}
		else {
			$.getJSON("filters/apparel/"+route+".json?_v="+(new Date()).getTime(), function(json){
				json.breadcrumb = [json.id];
				_app.ext._store_formals.vars[route] = json;
				//Deep copy into the routeObj.params, and that becomes our new "infoObj"
				//Need to pass through routeObj.params at this moment, as it is expected to become infoObj
				//This may change later.
				$.extend(true, routeObj.params, {'pageType':'static','templateid':routeObj.templateid,'id':json.id,'dataset':json});
				_app.ext.quickstart.a.newShowContent(routeObj.value,routeObj.params);
			})
			.fail(function() {
				dump('FILTER DATA FOR ' + route + ' ROOT COULD NOT BE LOADED.');
			});
		}
	});
});


	
//SEARCH APPENDS
_app.router.appendHash({'type':'match','route':'/search/promo/{{PATH}}*','callback':'promo'});					
					
	
_app.u.bindTemplateEvent('filteredSearchTemplate', 'complete.filter',function(event, $context, infoObj){
	if(infoObj.deferred){
		$('form.filterList',$context).data('deferred', infoObj.deferred);
		}
	if(!$context.attr('data-filter-rendered')){
		var $form = $('form.filterListTemplate', $context);
		function submitForm(){
			if($form.attr('data-filter-base')){
				$form.trigger('submit');
				}
			else {
//				 dump('gotta wait');
				setTimeout(submitForm,100);
				}
			}
		setTimeout(submitForm,0);
		}
	});

_app.extend({
	"namespace" : "seo_robots",
	"filename" : "extensions/_robots.js"
	});
	
_app.extend({
	"namespace" : "store_prodlist",
	"filename" : "extensions/store_prodlist.js"
	});
	
_app.extend({
	"namespace" : "prodlist_infinite",
	"filename" : "extensions/prodlist_infinite.js"
	});
	
_app.extend({
	"namespace" : "store_navcats",
	"filename" : "extensions/store_navcats.js"
	});
	
_app.couple('quickstart','addPageHandler',{
	"pageType" : "homepage",
	"require" : ['store_navcats','templates.html','store_routing','store_prodlist','prodlist_infinite'],
	"handler" : function($container, infoObj, require){
		infoObj.deferred = $.Deferred();
		infoObj.defPipeline.addDeferred(infoObj.deferred);
		dump('homepage handler');
		infoObj.navcat = zGlobals.appSettings.rootcat;
		_app.require(require,function(){
			infoObj.templateID = 'homepageTemplate';
			_app.ext.store_navcats.u.showPage($container, infoObj);
			});
		}
	});
	
_app.extend({
	"namespace" : "_store_filter",
	"filename" : "extensions/_store_filter.js"
	});
	
_app.couple('quickstart','addPageHandler',{
	"pageType" : "category",
	"require" : ['store_navcats','store_prodlist','prodlist_infinite','templates.html','store_routing','_store_banner','_store_filter','store_search','_store_formals','store_product'],
	"handler" : function($container, infoObj, require){
		infoObj.deferred = $.Deferred();
		infoObj.defPipeline.addDeferred(infoObj.deferred);
		if(infoObj.navcat.charAt(0) != '.'){
			infoObj.navcat = '.'+infoObj.navcat
			}
		if(_app.ext.quickstart.vars.session.recentCategories[0] != infoObj.navcat)	{
			_app.ext.quickstart.vars.session.recentCategories.unshift(infoObj.navcat);
			}
		_app.require(require,function(){
			if(infoObj.templateID){}
			else if(infoObj.templateID = _app.ext._store_formals.u.fetchTemplateForPage(infoObj.navcat)){dump("Alternate template used : "+ infoObj.templateID);}
			else{infoObj.templateID = 'categoryTemplate';}
			
			//currently this is expected to be resolved by the prodlist_infinite tlc format.  Probably a bad idea.
			infoObj.prodRenderedDeferred = $.Deferred();
			infoObj.defPipeline.addDeferred(infoObj.prodRenderedDeferred);

			_app.ext.store_navcats.u.showPage($container, infoObj);
			});
						
		}
	});
	
_app.extend({
	"namespace" : "store_search",
	"filename" : "extensions/store_search.js"
	});
_app.couple('store_search','addUniversalFilter',{
	'filter' : {"has_child":{"type":"sku","query":{"range":{"available":{"gte":1}}}}}
	});
_app.couple('store_search','addUniversalFilter',{
	'filter' : {"not":{"term":{"tags":"IS_DISCONTINUED"}}}
	});

				
_app.couple('quickstart','addPageHandler',{
	"pageType" : "search",
	"require" : ['store_search','templates.html','store_routing','_store_filter', '_store_formals'],
	"handler" : function($container, infoObj, require){
		infoObj.deferred = $.Deferred();
		infoObj.defPipeline.addDeferred(infoObj.deferred);
		_app.require(require,function(){
			_app.ext.store_search.u.showSearch($container, infoObj);
			});
						
		}
	});
	
_app.extend({
	"namespace" : "store_product",
	"filename" : "extensions/store_product.js"
	});
	
/*
_app.extend({
	"namespace" : "tools_zoom",
	"filename" : "extensions/tools_zoom/tools_zoom.js"
	});
*/
_app.extend({
	"namespace" : "partner_addthis",
	"filename" : "extensions/partner_addthis.js"
	});
	
_app.couple('quickstart','addPageHandler',{
	"pageType" : "product",
	"require" : ['store_product','store_navcats', 'store_routing', 'store_search', 'templates.html', 'store_prodlist','_store_formals','partner_addthis','store_crm'],
	"handler" : function($container, infoObj, require){
		infoObj.deferred = $.Deferred();
		infoObj.defPipeline.addDeferred(infoObj.deferred);
		if($.inArray(infoObj.pid,_app.ext.quickstart.vars.session.recentlyViewedItems) < 0)	{
			_app.ext.quickstart.vars.session.recentlyViewedItems.unshift(infoObj.pid);
			}
		else	{
			_app.ext.quickstart.vars.session.recentlyViewedItems.splice(0, 0, _app.ext.quickstart.vars.session.recentlyViewedItems.splice($.inArray(infoObj.pid, _app.ext.quickstart.vars.session.recentlyViewedItems), 1)[0]);
			}
		//IMPORTANT: requiring every extension needed in order to render the page, including TLC formats in the template
		_app.require(require, function(){
			infoObj.templateID = 'productTemplate';
			_app.ext.store_product.u.showProd($container, infoObj);
			});
		}
	});
	
_app.extend({
	"namespace" : "store_crm",
	"filename" : "extensions/store_crm.js"
	});
	
// _app.extend({
	// "namespace" : "partner_addthis",
	// "filename" : "extensions/partner_addthis.js"
	// });
// _app.u.bindTemplateEvent('productTemplate', 'complete.test', function(event, $context, infoObj){
	// var $toolbox = $('.socialLinks', $context);
	// if($toolbox.hasClass('addThisRendered')){
		// //Already rendered, don't do it again.
		// }
	// else {
		// $toolbox.addClass('addThisRendered').append(
				// '<div class="addthis_toolbox addthis_default_style addthis_32x32_style">'
			// +		'<a class="addthis_button_preferred_1"></a>'
			// +		'<a class="addthis_button_preferred_2"></a>'
			// +		'<a class="addthis_button_preferred_3"></a>'
			// +		'<a class="addthis_button_preferred_4"></a>'
			// +		'<a class="addthis_button_preferred_5"></a>'
			// +		'<a class="addthis_button_preferred_6"></a>'
			// +		'<a class="addthis_button_preferred_7"></a>'
			// +		'<a class="addthis_button_preferred_8add"></a>'
			// +		'<a class="addthis_button_compact"></a>'
			// +	'</div>');
		
		// _app.ext.partner_addthis.u.toolbox($toolbox, infoObj);
		// }
	// });
	
	_app.u.bindTemplateEvent(function(){return true;},'depart.dismissDrop',function(event,$context,infoObj){
		//app.ext.store_cc.u.dismissAllDrop();
	});
	
	
//_app.rq.push(['script',0,'lightbox/js/lightbox-2.6.min.js']); this runs in index apptimized.

_app.model.getGrammar("pegjs");


//Any code that needs to be executed after the app init has occured can go here.
//will pass in the page info object. (pageType, templateID, pid/navcat/show and more)
_app.u.appInitComplete = function()	{
//	_app.u.dump("Executing _appIsLoaded code...");
	
	_app.ext.order_create.checkoutCompletes.push(function(vars,$checkout){
		dump(" -> begin checkoutCOmpletes code: "); dump(vars);
		
		var cartContentsAsLinks = encodeURIComponent(_app.ext.cco.u.cartContentsAsLinks(_app.data[vars.datapointer].order));
	
		
//append this to 
		$("[data-app-role='thirdPartyContainer']",$checkout).append("<h2>What next?</h2><div class='ocm ocmFacebookComment pointer zlink marginBottom checkoutSprite  '></div><div class='ocm ocmTwitterComment pointer zlink marginBottom checkoutSprit ' ></div><div class='ocm ocmContinue pointer zlink marginBottom checkoutSprite'></div>");
		$('.ocmTwitterComment',$checkout).click(function(){
			window.open('http://twitter.com/home?status='+cartContentsAsLinks,'twitter');
			window[_app.vars.analyticsPointer]('send', 'event','Checkout','User Event','Tweeted about order');
			window[_app.vars.analyticsPointer]('send', 'event','Checkout','User Event','Tweeted about order');
			});
		//the fb code only works if an appID is set, so don't show banner if not present.				
		if(_app.u.thisNestedExists("zGlobals.thirdParty.facebook.appId") && typeof FB == 'object')	{
			$('.ocmFacebookComment',$checkout).click(function(){
				_app.ext.quickstart.thirdParty.fb.postToWall(cartContentsAsLinks);
				ga('send','event','Checkout','User Event','FB message about order');
				window[_app.vars.analyticsPointer]('send', 'event','Checkout','User Event','FB message about order');
				});
			}
		else	{$('.ocmFacebookComment').hide()}
		});
	
	//Cart Messaging Responses.
	_app.cmr.push(['chat.join',function(message){
		if(message.FROM == 'ADMIN')	{
			var $ui = _app.ext.quickstart.a.showBuyerCMUI();
			$("[data-app-role='messageInput']",$ui).show();
			$("[data-app-role='messageHistory']",$ui).append("<p class='chat_join'>"+message.FROM+" has joined the chat.<\/p>");
			$('.show4ActiveChat',$ui).show();
			$('.hide4ActiveChat',$ui).hide();
			}
		}]);

	_app.cmr.push(['goto',function(message,$context){
		var $history = $("[data-app-role='messageHistory']",$context);
		$P = $("<P>")
			.addClass('chat_post')
			.append("<span class='from'>"+message.FROM+"<\/span> has sent over a "+(message.vars.pageType || "")+" link for you within this store. <span class='lookLikeLink'>Click here<\/span> to view.")
			.on('click',function(){
				showContent(_app.ext.quickstart.u.whatAmIFor(message.vars),message.vars);
				});
		$history.append($P);
		$history.parent().scrollTop($history.height());
		}]);

	}





//this will trigger the content to load on app init. so if you push refresh, you don't get a blank page.
//it'll also handle the old 'meta' uri params.
//this will trigger the content to load on app init. so if you push refresh, you don't get a blank page.
//it'll also handle the old 'meta' uri params.
_app.router.appendInit({
	'type':'function',
	'route': function(v){
		return {'init':true} //returning anything but false triggers a match.
		},
	'callback':function(f,g){
		$('#clickBlocker').remove();
		dump(" -> triggered callback for appendInit");
		g = g || {};
		var $existingPage = $('#mainContentArea [data-app-uri]');
		console.log($existingPage.length);
		if($existingPage.length /*&& $existingPage.attr('data-app-uri') == document.location.pathname*/){
			//We are a transplanted document, let's load accordingly.
			//re-attach template handlers
			var $renderedTemplate = $('[data-templateid]', $existingPage);
			var templateid = $renderedTemplate.attr('data-templateid');
			for(var i in _app.templateEvents){
				var event = _app.templateEvents[i];
				if(event.filterFunc(templateid)){
					dump("Attaching event");
					dump(event);
					$renderedTemplate.on(event.event, event.handler);
					}
				}
			//handleURIChange here will not change the page, but it will execute appropriate events
			_app.router.handleURIString($existingPage.attr('data-app-uri'), true, {"retrigger" : true});
			}
		else if (document.location.hash.indexOf("#!") == 0){
			var pathStr = document.location.hash.substr(2);
			var search = false;
			if(pathStr.indexOf('?') >= 0){
				var arr = pathStr.split('?');
				pathStr = arr[0];
				search = arr[1];
				}
			_app.router.handleURIChange("/"+pathStr, search, false, true);
			}
		else if(document.location.protocol == "file:"){
			_app.router.handleURIChange("/", document.location.search, document.location.hash, true);
			}
		else if (g.uriParams.marketplace){
		   _app.router.handleURIString('/product/'+g.uriParams.product+'/', 'replace');
		   window[_app.vars.analyticsPointer]('send','event','Arrival','Syndication','product '+g.uriParams.product);
	   }
		else if(document.location.pathname)	{	
			_app.u.dump('triggering handleHash');
			_app.router.handleURIChange(document.location.pathname, document.location.search, document.location.hash, true);
			}
		else	{
			_app.router.handleURIChange("/", document.location.search, document.location.hash, true);
			_app.u.throwMessage(_app.u.successMsgObject("We're sorry, the page you requested could not be found!"));
			window[_app.vars.analyticsPointer]('send', 'event','init','404 event',document.location.href);
			}
		if(g.uriParams && g.uriParams.meta)	{
			_app.require('cco', function(){
				_app.ext.cco.calls.cartSet.init({'want/refer':g.uriParams.meta,'cartID':_app.model.fetchCartID()},{},'passive');
				});
			}
		if(g.uriParams && g.uriParams.meta_src)	{
			_app.require('cco',function(){
				_app.ext.cco.calls.cartSet.init({'want/refer_src':g.uriParams.meta_src,'cartID':_app.model.fetchCartID()},{},'passive');
				});
			}
		}
	});




})(myApp);
