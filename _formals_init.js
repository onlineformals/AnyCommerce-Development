var app = app || {vars:{},u:{}}; //make sure app exists.
app.rq = app.rq || []; //ensure array is defined. rq = resource queue.



app.rq.push(['extension',0,'orderCreate','extensions/checkout/extension.js']);
app.rq.push(['extension',0,'cco','extensions/cart_checkout_order.js']);


app.rq.push(['extension',0,'store_prodlist','extensions/store_prodlist.js']);
app.rq.push(['extension',0,'store_navcats','extensions/store_navcats.js']);
app.rq.push(['extension',0,'store_search','extensions/store_search.js']);
app.rq.push(['extension',0,'store_product','extensions/store_product.js']);
app.rq.push(['extension',0,'store_cart','extensions/store_cart.js']);
app.rq.push(['extension',0,'store_crm','extensions/store_crm.js']);
app.rq.push(['extension',0,'_store_filter','extensions/_store_filter.js']);
app.rq.push(['extension',0,'myRIA','app-quickstart.js','startMyProgram']);

//CUSTOM EXTENSIONS
app.rq.push(['extension',0,'_store_formals','extensions/_store_formals.js']);
app.rq.push(['extension',0,'prodlist_infinite','extensions/prodlist_infinite.js']);
app.rq.push(['extension',0,'_store_banner','extensions/_store_banner.js']);
app.rq.push(['extension',0,'store_backScrollPosition','extensions/_store_backScrollPosition.js','startExtension']);

app.rq.push(['script',0,app.vars.baseURL+'carouFredSel-6.2.1/jquery.carouFredSel-6.2.1-packed.js']);
app.rq.push(['script',0,app.vars.baseURL+'zoom-master/jquery.zoom.js']);

app.rq.push(['extension',1,'google_analytics','extensions/partner_google_analytics.js','startExtension']);
app.rq.push(['extension',1,'tools_ABtesting','extensions/tools_ABtesting.js']);
app.rq.push(['extension',0,'partner_addthis','extensions/partner_addthis.js']);
//app.rq.push(['extension',1,'resellerratings_survey','extensions/partner_buysafe_guarantee.js','startExtension']); /// !!! needs testing.
//app.rq.push(['extension',1,'buysafe_guarantee','extensions/partner_buysafe_guarantee.js','startExtension']);
//app.rq.push(['extension',1,'powerReviews_reviews','extensions/partner_powerreviews_reviews.js','startExtension']);
//app.rq.push(['extension',0,'magicToolBox_mzp','extensions/partner_magictoolbox_mzp.js','startExtension']); // (not working yet - ticket in to MTB)

app.rq.push(['script',0,(document.location.protocol == 'file:') ? app.vars.testURL+'jquery/config.js' : app.vars.baseURL+'jquery/config.js']); //The config.js is dynamically generated.
app.rq.push(['script',0,app.vars.baseURL+'model.js']); //'validator':function(){return (typeof zoovyModel == 'function') ? true : false;}}
app.rq.push(['script',0,app.vars.baseURL+'includes.js']); //','validator':function(){return (typeof handlePogs == 'function') ? true : false;}})

app.rq.push(['script',0,app.vars.baseURL+'controller.js']);

app.rq.push(['script',0,app.vars.baseURL+'resources/jquery.showloading-v1.0.jt.js']); //used pretty early in process..
app.rq.push(['script',0,app.vars.baseURL+'resources/jquery.ui.anyplugins.js']); //in zero pass in case product page is first page.




//add tabs to product data.
//tabs are handled this way because jquery UI tabs REALLY wants an id and this ensures unique id's between product
app.rq.push(['templateFunction','productTemplate','onCompletes',function(P) {
	
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
	
	var $context = $(app.u.jqSelector('#',P.parentID));
	var $tabContainer = $( ".tabbedProductContent",$context);
		if($tabContainer.length)	{
			if($tabContainer.data("widget") == 'anytabs'){} //tabs have already been instantiated. no need to be redundant.
			else	{
				$tabContainer.anytabs();
				}
			}
		else	{} //couldn't find the tab to tabificate.
		
		
		//HOVER ZOOM FEATURE
		 
		 var image = $('.prodMainImage',$context).parent().attr('data-imgsrc');
		 var imageURL = app.u.makeImage({
		   "name" : image,
		   "w" : 1000,
		   "h" : 1150,
		   "b" : "FFFFFF"
		   });
		 $('.largeImageContainer').zoom({
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
		 $('.thumbnail',$context).on('mouseenter.productHover', function(){
		  $('.largeImageContainer').trigger('zoom.destroy');
		  var newImage = $(this).parent().attr('data-imgsrc');
		  
		  //IMAGE VIEWER CLICK BLOCKER
		  var thumbObject = $(this);
		  if(thumbObject.data("firstTimeHover")){
			  //app.u.dump("firstTimeHover exists for " + $(this) + ". Doing nothing.")
		  }
		  else{
			  //app.u.dump("firstTimeHover does not exists for " + $(this) + ". Adding it set to false.")
			  thumbObject.data('firstTimeHover',false).append();
		  }
		  
		  if (thumbObject.data('firstTimeHover') === false){
			  //app.u.dump("Running image blocker for " + $(this) + ".")
			  var imageContainerSize = $('.imageContainer', $context).height();
			  //app.u.dump(imageContainerSize);
			  $(".imageContainerBlocker", $context).css("height",imageContainerSize);
			  $(".imageContainerBlocker", $context).show();
		  }
		  //END IMAGE CLICK BLOCKER
		
		  $('.prodMainImage',$context).attr('src', app.u.makeImage({
		   "name" : newImage,
		   "w" : 450,
		   "h" : 560,
		   "b" : "FFFFFF"
		   }));
		  var newImageURL = app.u.makeImage({
		   "name" : newImage,
		   "w" : 1000,
		   "h" : 1150,
		   "b" : "FFFFFF"
		   });
		   
		   //CLICK BLOCKER ACTIVATOR
		   setTimeout(function(){
			   $(".imageContainerBlocker", $context).hide();
			   thumbObject.data('firstTimeHover',true).append();
			   //app.u.dump("Setting firstTimeHover to true for " + $(this) + ".");
		   }, 3000);
		   //END CLICK BLOCK ACTIVATOR
		   
		  $('.largeImageContainer').zoom({
		   url: newImageURL,
		   on:'mouseover',
		   onZoomIn: function(){
			$('.largeImageContainer').addClass('active');
			//app.u.dump("we're running addClass");
			},
		   onZoomOut: function(){
			$('.largeImageContainer').removeClass('active');
			}
		   });
		});
		
		function productHoverZoomClick(){
			$(".zoomImg", $context).before("<div onClick='app.ext.store_product.u.showPicsInModal({\"pid\":$(this).attr(\"data-pid\")});' data-bind=\"var:product(zoovy:prod_image1; format:assignAttribute; attribute:data-pid;\">");
			$(".zoomImg", $context).after("</div>");
		}
}]);
	
app.rq.push(['templateFunction','homepageTemplate','onCompletes',function(P) {
	
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
	
	//Carousel horizontal sliders - homepage banner
	function carouselHPBanner(){ $(".carouselHPBannerList").carouFredSel
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
	setTimeout(carouselHPBanner, 2000);
	
	//Carousel title bar - homepage product lists
	function carouselHPProductListTitle(){ $(".hpProductListTitleCarousel").carouFredSel
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
	setTimeout(carouselHPProductListTitle, 2000);
	
	//Carousel Content bar - homepage product lists
	function carouselHPProductList(){ $(".hpProductListCarouselContainer").carouFredSel
	({
		width   : 960,
		//height	: 670,
		items   : 1,
		scroll: 1,
		auto : false,
	});
	}
	$(".loadingBG", ".hpProductListCarouselContainer").remove();
	app.u.dump("loadingBG has been removed from bottom carousel");
	
	setTimeout(carouselHPProductList, 2000);
	
	$(".hpProductListNext").click(function() {
    	$(".hpProductListTitleCarousel").trigger("next", 1);
		$(".hpProductListCarouselContainer").trigger("next", 1);
    });
	$(".hpProductListPrev").click(function() {
    	$(".hpProductListTitleCarousel").trigger("prev", 1);
		$(".hpProductListCarouselContainer").trigger("prev", 1);
    });
	
	//TITLEBAR HIDING FUNCTIONALITY.
	if($(".homepageSubCatTitleBar1").children().text().length === 0){
		$(".homepageSubCatTitleBar1").hide();
	}
	else{
		$(".homepageSubCatTitleBar1").show();
	}
	
	if($(".homepageSubCatTitleBar2").children().text().length === 0){
		$(".homepageSubCatTitleBar2").hide();
	}
	else{
		$(".homepageSubCatTitleBar2").show();
	}
	
	if($(".homepageSubCatTitleBar3").children().text().length === 0){
		$(".homepageSubCatTitleBar3").hide();
	}
	else{
		$(".homepageSubCatTitleBar3").show();
	}
	
	if($(".homepageCatTitleBar1").children().text().length === 0){
		$(".homepageCatTitleBar1").hide();
	}
	else{
		$(".homepageCatTitleBar1").show();
	}
	
	if($(".homepageCatTitleBar2").children().text().length === 0){
		$(".homepageCatTitleBar2").hide();
	}
	else{
		$(".homepageCatTitleBar2").show();
	}
	
	if($(".homepageCatTitleBar3").children().text().length === 0){
		$(".homepageCatTitleBar3").hide();
	}
	else{
		$(".homepageCatTitleBar3").show();
	}
	
	if($(".homepageCatTitleBar4").children().text().length === 0){
		$(".homepageCatTitleBar4").hide();
	}
	else{
		$(".homepageCatTitleBar4").show();
	}
}]);





app.rq.push(['templateFunction','categoryTemplate','onCompletes',function(P) {
	
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
	
	var $context = $(app.u.jqSelector('#',P.parentID));
	
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
	app.u.dump("loadingBG has been removed from bottom carousel");
	
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
	
	
	app.ext._store_banner.u.showCategoryBanners($context);

}]);


var filterIDNum = 0;
var filterForNum = 0;







app.rq.push(['templateFunction','categoryProductListTemplate','onCompletes',function(P) {
	var $context = $(app.u.jqSelector('#',P.parentID));
	
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
	
	app.ext._store_filter.vars.catPageID = $(app.u.jqSelector('#',P.parentID));  
	
	app.u.dump("BEGIN categoryTemplate onCompletes for filtering");
	if(app.ext._store_filter.filterMap[P.navcat])	{
		app.u.dump(" -> safe id DOES have a filter.");

		var $page = $(app.u.jqSelector('#',P.parentID));
		app.u.dump(" -> $page.length: "+$page.length);
		if($page.data('filterAdded'))	{} //filter is already added, don't add again.
		else	{
			$page.data('filterAdded',true)
			var $form = $("[name='"+app.ext._store_filter.filterMap[P.navcat].filter+"']",'#appFilters').clone().appendTo($('.catProdListSidebar',$page));
			$form.on('submit.filterSearch',function(event){
				event.preventDefault()
				app.u.dump(" -> Filter form submitted.");
				app.ext._store_filter.a.execFilter($form,$page);
				});
	
			if(typeof app.ext._store_filter.filterMap[P.navcat].exec == 'function')	{
				app.ext._store_filter.filterMap[P.navcat].exec($form,P)
				}
	
	//make all the checkboxes auto-submit the form and show results list.
			$(":checkbox",$context).off('click.formSubmit').on('click.formSubmit',function() {
				$form.submit(); 
				//app.u.dump("A filter checkbox was clicked.");
				$("#resultsProductListContainer",$context).hide();  
				
				$group1 = $('.fsCheckbox',$context);
				
				if(($group1.filter(':checked').length === 0) && ($(".sliderValue",$context).val() == "$0 - $1000")){
					//app.u.dump("All checkboxes removed. Showing stock product list.");
					$(".nativeProductList", $context).show(); 
					$(".searchFilterResults", $context).hide(); 
				}
				else{
					//app.u.dump("Checkbox is active. Showing Search results.");
					$(".nativeProductList", $context).hide(); 
					$(".searchFilterResults", $context).show();  
				}  
			});
			
			//app.u.dump($(".sliderValue",$context));
		}
	}
		
				
			
		
		$('.resetButton', $context).click(function(){
			$('.fsCheckbox').attr('checked', false);
			$(".nativeProductList").show(); 
			$(".searchFilterResults").hide();    
		});
		
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
			app.u.dump("$('.catGhostCell', $context).data('heightVal') exists. Assigning height value");
			$(".catGhostCell", $context).css("height",catGhostCellHeight);
		}
		else{
			$('.catGhostCell', $context).data('heightVal', '').append();
			app.u.dump("$('.catGhostCell', $context).data('heightVal') doesn't exists. Make it.");
		}
		
		//ASSIGN EXPAND/COLLAPSE VALUES TO FILTER FORM
		var $sidebarContext = $(".catProdListSidebar").parent().parent();
		//app.u.dump($sidebarContext);
		
		if($('.layeredSearch', $context).length){
			if($('.catProdListSidebar', $context).data('collapseOrExpanded')){
				app.u.dump("$('.catProdListSidebar', $context).data('collapseOrExpanded') exists. Do nothing.");
			}
			else{
				app.u.dump("$('.catProdListSidebar', $context).data('collapseOrExpanded') doesn't exists. Make it.");
				$('.catProdListSidebar', $context).data('collapseOrExpanded',false).append();
			}
			
			app.u.dump("Filter form found, showing search tab");
		}
		else{
			$('.searchTab', $context).hide();
			app.u.dump("Filter form not found, hiding search tab");
		}
		
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
		
		app.ext._store_banner.u.showCategoryBanners($context);		
}]);

app.rq.push(['templateFunction','searchTemplate','onCompletes',function(P) {
	//if(P.preservePage){ alert("You hit the back button");}
	
	var $context = $(app.u.jqSelector('#',P.parentID));
	var $page = $(app.u.jqSelector('#',P.parentID));
	
	//****FILTERED SEARCH CODE****
	$('.fsCheckbox').attr('checked', false);
	$("#resultsProductListContainer").show(); 
	$(".searchFilterResults").hide();    
	app.u.dump("BEGIN searchTemplate onCompletes for filtering");
	var $form = $("[name='SearchPageFilterSearchForm']",'#appFilters').clone().appendTo($('.filterContainerSearch',$page));
	$form.on('submit.filterSearch',function(event){
		event.preventDefault()
		app.u.dump(" -> Filter form submitted.");
		app.ext._store_filter.a.execFilter($form,$page);
				});
	
		if(typeof app.ext._store_filter.filterMap["searchPage"].exec == 'function')	{
			app.ext._store_filter.filterMap["searchPage"].exec($form,P)
			}
	
	//make all the checkboxes auto-submit the form.
		$(":checkbox",$form).off('click.formSubmit').on('click.formSubmit',function() {
			$form.submit(); 
			//app.u.dump("Filter search actvated");
			$("#resultsProductListContainer").hide();  
			
			$group1 = $('.fsCheckbox');
			if($group1.filter(':checked').length === 0){
				//app.u.dump("All checkboxes removed. Filter search deactivated.");
				$("#resultsProductListContainer", $context).show(); 
				$(".searchFilterResults", $context).hide(); 
				$(".resultsHeader", $context).show();   
			}
			else{
				//app.u.dump("All checkboxes removed. Filter search still active.");
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
			app.u.dump("$('.catGhostCell', $context).data('heightVal') exists. Assigning height value");
			$(".catGhostCell", $context).css("height",catGhostCellHeight);
		}
		else{
			$('.catGhostCell', $context).data('heightVal', '').append();
			app.u.dump("$('.catGhostCell', $context).data('heightVal') doesn't exists. Make it.");
		}
		
		//ASSIGN EXPAND/COLLAPSE VALUES TO FILTER FORM
		var $sidebarContext = $(".filterContainerSearch").parent().parent();
		//app.u.dump($sidebarContext);
		
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
}]);

app.rq.push(['templateFunction','companyTemplate','onCompletes',function(P) {
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
}]);
app.rq.push(['templateFunction','customerTemplate','onCompletes',function(P) {
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
}]);
app.rq.push(['templateFunction','searchTemplate','onCompletes',function(P) {
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
}]);
app.rq.push(['templateFunction','testimonialsTemplate','onCompletes',function(P) {
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
}]);
app.rq.push(['templateFunction','categoryProductListTemplate','onCompletes',function(P) {
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
}]);
app.rq.push(['templateFunction','productTemplate','onCompletes',function(P) {
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
}]);
app.rq.push(['templateFunction','checkoutTemplate','onCompletes',function(P) {
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
}]);
app.rq.push(['templateFunction','pageNotFoundTemplate','onCompletes',function(P) {
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
}]);


app.rq.push(['templateFunction','productTemplateQuickView','onCompletes',function(P) {
	
	var $context = $(app.u.jqSelector('#',P.parentID));
	
	
	if($(".variation_D5", $context).length){
		app.u.dump(".variation_D5 exists. Adding sizing chat link");
		$(".variation_D5", $context).after("<div class='productSizingChartModalLinkContainer quickviewProductSizingChartModalLinkContainer'>"
		+ "<a onClick=\"$('#SizingChartTemplate').dialog({'modal':'true', 'title':'','width':825, height:700, 'dialogClass' : 'SizingChartModal'});\"> Need help with your size?</a>"
		+ "</div>");
	}
	else{
		app.u.dump(".variation_D5 does not exists. Doing nothing");
	}
	

}]);


app.rq.push(['templateFunction','showroomTemplate','onCompletes',function(P) {
}]);

/*
pp.rq.push(['templateFunction','categoryProductListTemplate','onDeparts',function(P) {
	var $context = $(app.u.jqSelector('#',P.parentID));
	if($('.layeredSearch', $context).length){
		$('.catProdListSidebar', $context).hide();
		$(".catGhostCell", $context).css("height","0");
	}
}]);
*/


//sample of an onDeparts. executed any time a user leaves this page/template type.
//app.rq.push(['templateFunction','homepageTemplate','onDeparts',function(P) {app.u.dump("just left the homepage")}]);
/*
app.rq.push(['templateFunction','productTemplate','onCompletes',function(P) {
	if(app.data.cartDetail && app.data.cartDetail.ship && app.data.cartDetail.ship.postal)	{
		app.ext.myRIA.u.fetchTimeInTransit($(app.u.jqSelector('#',P.parentID)),new Array(P.pid));
		}
	}]);
*/

//group any third party files together (regardless of pass) to make troubleshooting easier.
app.rq.push(['script',0,(document.location.protocol == 'https:' ? 'https:' : 'http:')+'//ajax.googleapis.com/ajax/libs/jqueryui/1.10.1/jquery-ui.min.js']);


/*
This function is overwritten once the controller is instantiated. 
Having a placeholder allows us to always reference the same messaging function, but not impede load time with a bulky error function.
*/
app.u.throwMessage = function(m)	{
	alert(m); 
	}

app.u.howManyPassZeroResourcesAreLoaded = function(debug)	{
	var L = app.vars.rq.length;
	var r = 0; //what is returned. total # of scripts that have finished loading.
	for(var i = 0; i < L; i++)	{
		if(app.vars.rq[i][app.vars.rq[i].length - 1] === true)	{
			r++;
			}
		if(debug)	{app.u.dump(" -> "+i+": "+app.vars.rq[i][2]+": "+app.vars.rq[i][app.vars.rq[i].length -1]);}
		}
	return r;
	}


//gets executed once controller.js is loaded.
//check dependencies and make sure all other .js files are done, then init controller.
//function will get re-executed if not all the scripts in app.vars.scripts pass 1 are done loading.
//the 'attempts' var is incremented each time the function is executed.

app.u.initMVC = function(attempts){
//	app.u.dump("app.u.initMVC activated ["+attempts+"]");
	var includesAreDone = true,
	percentPerInclude = (100 / app.vars.rq.length),   //what percentage of completion a single include represents (if 10 includes, each is 10%).
	resourcesLoaded = app.u.howManyPassZeroResourcesAreLoaded(),
	percentComplete = Math.round(resourcesLoaded * percentPerInclude); //used to sum how many includes have successfully loaded.

//make sure precentage is never over 100
	if(percentComplete > 100 )	{
		percentComplete = 100;
		}

	$('#appPreViewProgressBar','#appPreView').val(percentComplete);
	$('#appPreViewProgressText','#appPreView').empty().append(percentComplete+"% Complete");

	if(resourcesLoaded == app.vars.rq.length)	{
		var clickToLoad = false;
		if(clickToLoad){
			$('#loader').fadeOut(1000);
			$('#clickToLoad').delay(1000).fadeIn(1000).click(function() {
				app.u.loadApp();
			});
		} else {
			app.u.loadApp();
			}
		}
// *** 201324 -> increase # of attempts to reduce pre-timeout error reporting. will help to load app on slow connection/computer.
	else if(attempts > 250)	{
		app.u.dump("WARNING! something went wrong in init.js");
		//this is 10 seconds of trying. something isn't going well.
		$('#appPreView').empty().append("<h2>Uh Oh. Something seems to have gone wrong. </h2><p>Several attempts were made to load the store but some necessary files were not found or could not load. We apologize for the inconvenience. Please try 'refresh' and see if that helps.<br><b>If the error persists, please contact the site administrator</b><br> - dev: see console.</p>");
		app.u.howManyPassZeroResourcesAreLoaded(true);
		}
	else	{
		setTimeout("app.u.initMVC("+(attempts+1)+")",250);
		}

	}

app.u.loadApp = function() {
//instantiate controller. handles all logic and communication between model and view.
//passing in app will extend app so all previously declared functions will exist in addition to all the built in functions.
//tmp is a throw away variable. app is what should be used as is referenced within the mvc.
	app.vars.rq = null; //to get here, all these resources have been loaded. nuke record to keep DOM clean and avoid any duplication.
	var tmp = new zController(app);
//instantiate wiki parser.
	myCreole = new Parse.Simple.Creole();
	}


//Any code that needs to be executed after the app init has occured can go here.
//will pass in the page info object. (pageType, templateID, pid/navcat/show and more)
app.u.appInitComplete = function(P)	{
	app.u.dump("Executing myAppIsLoaded code...");
	}




//don't execute script till both jquery AND the dom are ready.
$(document).ready(function(){
	app.u.handleRQ(0)
	});






