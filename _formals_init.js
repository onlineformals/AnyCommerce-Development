
myApp.rq.push(['script',0,(document.location.protocol == 'file:') ? myApp.vars.testURL+'jsonapi/config.js' : myApp.vars.baseURL+'jsonapi/config.js',function(){
//in some cases, such as the zoovy UI, zglobals may not be defined. If that's the case, certain vars, such as jqurl, must be passed in via P in initialize:
//	myApp.u.dump(" ->>>>>>>>>>>>>>>>>>>>>>>>>>>>> zGlobals is an object");
	myApp.vars.username = zGlobals.appSettings.username.toLowerCase(); //used w/ image URL's.
//need to make sure the secureURL ends in a / always. doesn't seem to always come in that way via zGlobals
	myApp.vars.secureURL = zGlobals.appSettings.https_app_url;
	myApp.vars.domain = zGlobals.appSettings.sdomain; //passed in ajax requests.
	myApp.vars.jqurl = (document.location.protocol === 'file:') ? myApp.vars.testURL+'jsonapi/' : '/jsonapi/';
	}]); //The config.js is dynamically generated.
	
myApp.rq.push(['extension',0,'order_create','']);
myApp.rq.push(['extension',0,'cco','']);

myApp.rq.push(['extension',0,'store_routing','', 'attachEventHandlers']);
myApp.rq.push(['extension',0,'store_tracking','extensions/store_tracking.js','attachHandlers']);
myApp.rq.push(['extension',0,'store_seo','', 'attachHandlers']);

myApp.rq.push(['extension',0,'store_prodlist','']);
myApp.rq.push(['extension',0,'store_navcats','']);
myApp.rq.push(['extension',0,'store_search','']);
myApp.rq.push(['extension',0,'store_product','']);
myApp.rq.push(['extension',0,'cart_message','']);
myApp.rq.push(['extension',0,'store_crm','']);
myApp.rq.push(['extension',0,'quickstart','','startMyProgram']);


//myApp.rq.push(['extension',0,'entomologist','extensions/entomologist/extension.js']);
//myApp.rq.push(['extension',0,'tools_animation','extensions/tools_animation.js']);

// 201405 - Deprecated for Universal Analytics
//myApp.rq.push(['extension',1,'google_analytics','extensions/partner_google_analytics.js','startExtension']);
//myApp.rq.push(['extension',1,'google_adwords','extensions/partner_google_adwords.js','startExtension']);
//myApp.rq.push(['extension',1,'tools_ab_testing','extensions/tools_ab_testing.js']);
myApp.rq.push(['extension',0,'partner_addthis','extensions/partner_addthis.js','startExtension']);
myApp.rq.push(['extension',0,'seo_robots','']);
//myApp.rq.push(['extension',1,'resellerratings_survey','extensions/partner_buysafe_guarantee.js','startExtension']); /// !!! needs testing.
//myApp.rq.push(['extension',1,'buysafe_guarantee','extensions/partner_buysafe_guarantee.js','startExtension']);
//myApp.rq.push(['extension',1,'powerReviews_reviews','extensions/partner_powerreviews_reviews.js','startExtension']);
//myApp.rq.push(['extension',0,'magicToolBox_mzp','extensions/partner_magictoolbox_mzp.js','startExtension']); // (not working yet - ticket in to MTB)


myApp.rq.push(['script',0,myApp.vars.baseURL+'resources/jquery.showloading-v1.0.jt.js']); //used pretty early in process..
myApp.rq.push(['script',0,myApp.vars.baseURL+'resources/jquery.ui.anyplugins.js']); //in zero pass in case product page is first page.
myApp.rq.push(['script',0,myApp.vars.baseURL+'resources/tlc.js']); //in zero pass in case product page is first page.
myApp.rq.push(['css',1,myApp.vars.baseURL+'resources/anyplugins.css']);

//CUSTOM SCRIPTS + EXTENSIONS
myApp.rq.push(['script',0,myApp.vars.baseURL+'carouFredSel-6.2.1/jquery.carouFredSel-6.2.1-packed.js']);
myApp.rq.push(['script',0,myApp.vars.baseURL+'zoom-master/jquery.zoom.js']);
myApp.rq.push(['script',0,myApp.vars.baseURL+'modalFix.js']);

myApp.rq.push(['extension',0,'_store_formals','','startExtension']);
myApp.rq.push(['extension',0,'prodlist_infinite','']);
myApp.rq.push(['extension',0,'_store_banner','']);
myApp.rq.push(['extension',0,'_store_filter','']);
//myApp.rq.push(['extension',0,'store_backScrollPosition','extensions/_store_backScrollPosition.js','startExtension']);
myApp.rq.push(['extension',0,'store_backScrollPositionVTwo','','startExtension']);


//myApp.rq.push(['script',0,myApp.vars.baseURL+'resources/jsonpath.0.8.0.js']); //used pretty early in process..

//once peg is loaded, need to retrieve the grammar file. Order is important there. This will validate the file too.
myApp.u.loadScript(myApp.vars.baseURL+'resources/peg-0.8.0.js',function(){
	myApp.model.getGrammar(myApp.vars.baseURL+"resources/pegjs-grammar-20140203.pegjs");
	}); // ### TODO -> callback on RQ.push wasn't getting executed. investigate.


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


//gets executed from app-admin.html as part of controller init process.
//progress is an object that will get updated as the resources load.
/*
'passZeroResourcesLength' : [INT],
'passZeroResourcesLoaded' : [INT],
'passZeroTimeout' : null //the timeout instance running within loadResources that updates this object. it will run indef unless clearTimeout run here OR all resources are loaded.

*/
myApp.u.showProgress = function(progress)	{
	function showProgress(attempt)	{
		if(progress.passZeroResourcesLength == progress.passZeroResourcesLoaded)	{
			//All pass zero resources have loaded.
			//the app will handle hiding the loading screen.
			myApp.u.appInitComplete();
			}
		else if(attempt > 150)	{
			//hhhhmmm.... something must have gone wrong.
			clearTimeout(progress.passZeroTimeout); //end the resource loading timeout.
			$('.appMessaging','#appPreView').anymessage({'message':'Init failed to load all the resources within a reasonable number of attempts. Please refresh the page in order to access this site.','gMessage':true,'persistent':true});
			}
		else	{
			var percentPerInclude = (100 / progress.passZeroResourcesLength);
			var percentComplete = Math.round(progress.passZeroResourcesLength * percentPerInclude); //used to sum how many includes have successfully loaded.
//			dump(" -> percentPerInclude: "+percentPerInclude+" and percentComplete: "+percentComplete);
			$('#appPreViewProgressBar').val(percentComplete);
			$('#appPreViewProgressText').empty().append(percentComplete+"% Complete");
			attempt++;
			setTimeout(function(){showProgress(attempt);},250);
			}
		}
	showProgress(0)
	}


//Any code that needs to be executed after the app init has occured can go here.
//will pass in the page info object. (pageType, templateID, pid/navcat/show and more)
myApp.u.appInitComplete = function()	{
	myApp.u.dump("Executing myAppIsLoaded code...");
	
	/*CUSTOM CODE */
				//APP PRELOAD WARNING MESSAGE
				dump("Beginning app load timer for refresh message.");
				setTimeout(function(){
					$(".appLoadRefreshMessage p.appLoadRefreshMess").slideDown();						
				}, 10000);
				
				//CHECKOUT ZIP CODE NUMERIC CODE VALIDATOR
				/*
				$(".checkoutZipInput", ".chkoutAddressBillTemplate").keydown(function (e) {
					// Allow: backspace, delete, tab, escape, enter and .
					if ($.inArray(e.keyCode, [46, 8, 9, 27, 13, 110, 190]) !== -1 ||
						 // Allow: Ctrl+A
						(e.keyCode == 65 && e.ctrlKey === true) || 
						 // Allow: home, end, left, right
						(e.keyCode >= 35 && e.keyCode <= 39)) {
							 // let it happen, don't do anything
							 return;
					}
					// Ensure that it is a number and stop the keypress
					if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) {
						e.preventDefault();
					}
				});
				$(".checkoutZipInput", ".chkoutAddressShipTemplate").keydown(function (e) {
					// Allow: backspace, delete, tab, escape, enter and .
					if ($.inArray(e.keyCode, [46, 8, 9, 27, 13, 110, 190]) !== -1 ||
						 // Allow: Ctrl+A
						(e.keyCode == 65 && e.ctrlKey === true) || 
						 // Allow: home, end, left, right
						(e.keyCode >= 35 && e.keyCode <= 39)) {
							 // let it happen, don't do anything
							 return;
					}
					// Ensure that it is a number and stop the keypress
					if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) {
						e.preventDefault();
					}
				});
				*/
				
				
					
	
	myApp.ext.order_create.checkoutCompletes.push(function(vars,$checkout){
		dump(" -> begin checkoutCOmpletes code: "); dump(vars);
		
		var cartContentsAsLinks = myApp.ext.cco.u.cartContentsAsLinks(myApp.data[vars.datapointer].order);
		dump(" -> cartContentsAsLinks: "+cartContentsAsLinks);
		
//append this to 
		$("[data-app-role='thirdPartyContainer']",$checkout).append("<h2>What next?</h2><div class='ocm ocmFacebookComment pointer zlink marginBottom checkoutSprite  '></div><div class='ocm ocmTwitterComment pointer zlink marginBottom checkoutSprit ' ></div><div class='ocm ocmContinue pointer zlink marginBottom checkoutSprite'></div>");
		$('.ocmTwitterComment',$checkout).click(function(){
			window.open('http://twitter.com/home?status='+cartContentsAsLinks,'twitter');
			window[myApp.vars.analyticsPointer]('send', 'event','Checkout','User Event','Tweeted about order');
			});
		//the fb code only works if an appID is set, so don't show banner if not present.				
		if(myApp.u.thisNestedExists("zGlobals.thirdParty.facebook.appId") && typeof FB == 'object')	{
			$('.ocmFacebookComment',$checkout).click(function(){
				myApp.ext.quickstart.thirdParty.fb.postToWall(cartContentsAsLinks);
				ga('send','event','Checkout','User Event','FB message about order');
				window[myApp.vars.analyticsPointer]('send', 'event','Checkout','User Event','FB message about order');
				});
			}
		else	{$('.ocmFacebookComment').hide()}
		});
	
	//Cart Messaging Responses.
	myApp.cmr.push(['chat.join',function(message){
		if(message.FROM == 'ADMIN')	{
			var $ui = myApp.ext.quickstart.a.showBuyerCMUI();
			$("[data-app-role='messageInput']",$ui).show();
			$("[data-app-role='messageHistory']",$ui).append("<p class='chat_join'>"+message.FROM+" has joined the chat.<\/p>");
			$('.show4ActiveChat',$ui).show();
			$('.hide4ActiveChat',$ui).hide();
			}
		}]);

	myApp.cmr.push(['goto',function(message,$context){
		var $history = $("[data-app-role='messageHistory']",$context);
		$P = $("<P>")
			.addClass('chat_post')
			.append("<span class='from'>"+message.FROM+"<\/span> has sent over a "+(message.vars.pageType || "")+" link for you within this store. <span class='lookLikeLink'>Click here<\/span> to view.")
			.on('click',function(){
				showContent(myApp.ext.quickstart.u.whatAmIFor(message.vars),message.vars);
				});
		$history.append($P);
		$history.parent().scrollTop($history.height());
		}]);

	}





//this will trigger the content to load on app init. so if you push refresh, you don't get a blank page.
//it'll also handle the old 'meta' uri params.
//this will trigger the content to load on app init. so if you push refresh, you don't get a blank page.
//it'll also handle the old 'meta' uri params.
myApp.router.appendInit({
	'type':'function',
	'route': function(v){
		return {'init':true} //returning anything but false triggers a match.
		},
	'callback':function(f,g){
		dump(" -> triggered callback for appendInit");
		g = g || {};
		if(g.uriParams.seoRequest){
			showContent(g.uriParams.pageType, g.uriParams);
			}
		else if (g.uriParams.marketplace){
			var infoObj = {"pid":g.uriParams.product};
			if(g.uriParams.sku){
				infoObj.sku = g.uriParams.sku;
				}
			showContent("product",infoObj);
			}
		else if(document.location.hash)	{	
			myApp.u.dump('triggering handleHash');
			myApp.router.handleHashChange();
			}
		else	{
			//IE8 didn't like the shortcut to showContent here.
			myApp.ext.quickstart.a.showContent('homepage');
			}
		if(g.uriParams && g.uriParams.meta)	{
			myApp.ext.cco.calls.cartSet.init({'want/refer':infoObj.uriParams.meta,'cartID':_app.model.fetchCartID()},{},'passive');
			}
		if(g.uriParams && g.uriParams.meta_src)	{
			myApp.ext.cco.calls.cartSet.init({'want/refer_src':infoObj.uriParams.meta_src,'cartID':_app.model.fetchCartID()},{},'passive');
			}
		}
	});





