/* **************************************************************

   Copyright 2011 Zoovy, Inc.

   Licensed under the Apache License, Version 2.0 (the "License");
   you may not use this file except in compliance with the License.
   You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.

************************************************************** */

var _store_formals = function(_app) {
	var r= {
		vars : {
			scrollPosHist : "",
			scrollPosBackHit : "",
			scrollPosArrayIndex : "",

			catTemplates : {
			
				".showroom":"showroomTemplate",
			
				".testimonials" : "testimonialsTemplate",	
			
				".designers.bg_haute" : "categoryProductListTemplate",
				".designers.cassandra_stone" : "categoryProductListTemplate",
				".designers.faviana" : "categoryProductListTemplate",
				".designers.gigi" : "categoryProductListTemplate",
				".designers.jasz_couture" : "categoryProductListTemplate",
				".designers.johnathan_kayne" : "categoryProductListTemplate",
				".designers.la_femme" : "categoryProductListTemplate",
				".designers.le_gala" : "categoryProductListTemplate",
				".designers.lm_collection" : "categoryProductListTemplate",
				".designers.mac_duggal" : "categoryProductListTemplate",
				".designers.mignon" : "categoryProductListTemplate",
				".designers.mnm_couture" : "categoryProductListTemplate",
				".designers.night_moves" : "categoryProductListTemplate",
				".designers.paris" : "categoryProductListTemplate",
				".designers.scala" : "categoryProductListTemplate",
				".designers.shail_k" : "categoryProductListTemplate",
				".designers.sherri_hill" : "categoryProductListTemplate",
				".designers.tony_bowls" : "categoryProductListTemplate",
						
				".prom.designers.bg_haute" : "categoryProductListTemplate",
				".prom.designers.cassandra_stone" : "categoryProductListTemplate",
				".prom.designers.faviana" : "categoryProductListTemplate",
				".prom.designers.gigi" : "categoryProductListTemplate",
				".prom.designers.jasz_couture" : "categoryProductListTemplate",
				".prom.designers.johnathan_kayne" : "categoryProductListTemplate",
				".prom.designers.jovani" : "categoryProductListTemplate",
				".prom.designers.la_femme" : "categoryProductListTemplate",
				".prom.designers.le_gala" : "categoryProductListTemplate",
				".prom.designers.lm_collection" : "categoryProductListTemplate",
				".prom.designers.mac_duggal" : "categoryProductListTemplate",
				".prom.designers.mignon" : "categoryProductListTemplate",
				".prom.designers.mnm_couture" : "categoryProductListTemplate",
				".prom.designers.night_moves" : "categoryProductListTemplate",
				".prom.designers.paris" : "categoryProductListTemplate",
				".prom.designers.scala" : "categoryProductListTemplate",
				".prom.designers.shail_k" : "categoryProductListTemplate",
				".prom.designers.sherri_hill" : "categoryProductListTemplate",
				".prom.designers.tony_bowls" : "categoryProductListTemplate",
				".prom.styles.ballgown___a_line" : "categoryProductListTemplate",
				".prom.styles.empire" : "categoryProductListTemplate",
				".prom.styles.high_low" : "categoryProductListTemplate",
				".prom.styles.mermaid" : "categoryProductListTemplate",
				".prom.styles.short" : "categoryProductListTemplate",
				".prom.trends.beads" : "categoryProductListTemplate",
				".prom.trends.lace" : "categoryProductListTemplate",
				".prom.trends.polka_dots" : "categoryProductListTemplate",
				".prom.trends.sequins" : "categoryProductListTemplate",
				".prom.trends.vintage" : "categoryProductListTemplate",
				
				".prom.sale" : "categoryProductListTemplate",
				
				".evening.designers.bg_haute" : "categoryProductListTemplate",
				".evening.designers.jasz_couture" : "categoryProductListTemplate",
				".evening.designers.jovani" : "categoryProductListTemplate",
				".evening.designers.la_femme" : "categoryProductListTemplate",
				".evening.designers.mac_duggal" : "categoryProductListTemplate",
				".evening.designers.mignon" : "categoryProductListTemplate",
				".evening.designers.mnm_couture" : "categoryProductListTemplate",
				".evening.designers.scala" : "categoryProductListTemplate",
				".evening.designers.shail_k" : "categoryProductListTemplate",
				".evening.designers.sherri_hill" : "categoryProductListTemplate",
				".evening.designers.tony_bowls" : "categoryProductListTemplate",
				".evening.celebrity_inspired" : "categoryProductListTemplate",
				
				".cocktail.designers.faviana" : "categoryProductListTemplate",
				".cocktail.designers.gigi" : "categoryProductListTemplate",
				".cocktail.designers.jovani" : "categoryProductListTemplate",
				".cocktail.designers.johnathan_kayne" : "categoryProductListTemplate",
				".cocktail.designers.la_femme" : "categoryProductListTemplate",
				".cocktail.designers.lm_collection" : "categoryProductListTemplate",
				".cocktail.designers.mac_duggal" : "categoryProductListTemplate",
				".cocktail.designers.mignon" : "categoryProductListTemplate",
				".cocktail.designers.scala" : "categoryProductListTemplate",
				".cocktail.designers.shail_k" : "categoryProductListTemplate",
				".cocktail.designers.sherri_hill" : "categoryProductListTemplate",
				".cocktail.styles.sequins___beads" : "categoryProductListTemplate",
				".cocktail.styles.lace" : "categoryProductListTemplate",
				".cocktail.styles.babydoll" : "categoryProductListTemplate",
				".cocktail.styles.high_low" : "categoryProductListTemplate",
				
				".plus_size.designers.fabulouss" : "categoryProductListTemplate",
				".plus_size.designers.faviana" : "categoryProductListTemplate",
				".plus_size.designers.night_moves" : "categoryProductListTemplate",
				".plus_size.styles.a_line___ballgown" : "categoryProductListTemplate",
				".plus_size.styles.empire" : "categoryProductListTemplate",
				".plus_size.styles.mermaid" : "categoryProductListTemplate",
				".plus_size.styles.short" : "categoryProductListTemplate",
				
				".pageant.designers.jasz_couture" : "categoryProductListTemplate",
				".pageant.designers.jovani" : "categoryProductListTemplate",
				".pageant.designers.johnathan_kayne" : "categoryProductListTemplate",
				".pageant.designers.la_femme" : "categoryProductListTemplate",
				".pageant.designers.mac_duggal" : "categoryProductListTemplate",
				".pageant.designers.mnm_couture" : "categoryProductListTemplate",
				".pageant.designers.sherri_hill" : "categoryProductListTemplate",
				".pageant.designers.tony_bowls" : "categoryProductListTemplate",
				".pageant.children_s_pageant" : "categoryProductListTemplate",
				
				".bridal" : "categoryProductListTemplate",
				
				".accessories.shoes.touch_ups" : "categoryProductListTemplate",
				".accessories.shoes.coloriffics" : "categoryProductListTemplate",
				".accessories.jewelry" : "categoryProductListTemplate",
				".accessories.under_the_dress.bra_cups" : "categoryProductListTemplate",
				".accessories.under_the_dress.shapewear" : "categoryProductListTemplate",
				
				".in_stock" : "categoryProductListTemplate"
			},
		},
		
		callbacks : {
			init : {
				onSuccess : function(){
					_app.u.dump('BEGIN _app.ext_store_formals.callbacks.init.onSuccess');
					_app.ext._store_formals.u.bindOnclick();
					
										
				},
				onError : function() {
					_app.u.dump('BEGIN _app.ext_store_formals.callbacks.init.onError');
				}
			},
			startExtension : {
				onSuccess : function (){
					_app.u.dump('BEGIN _app.ext_store_formals.callbacks.startExtension.onSuccess')
					
					//replacement for bindByAnchor href to make crawlable links. Currently used mainly on sitemap
					
					//BEGIN ONCOMPLETES/ONDEPARTS/ONINITS
					_app.templates.productTemplate.on('complete.formals',function(event,$context,infoObj){
					//_app.rq.push(['templateFunction','productTemplate','onCompletes',function(P) {
	
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
							 dump("var image =");
							 dump (image);
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
								  dump("Thumbnail swap action activated.");
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
								   }, 3000);
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
						
					_app.templates.homepageTemplate.on('complete.formals',function(event,$context,infoObj){
						
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
						_app.u.dump("loadingBG has been removed from bottom carousel");
						
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
					});
					
					
					
					
					
					_app.templates.categoryTemplate.on('complete.formals',function(event,$context,infoObj){
						
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
						
						//var $context = $(_app.u.jqSelector('#',infoObj.parentID));
						
						_app.ext._store_banner.u.showCategoryBanners($context);
						
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
					
					
					
					
					
					
					
					_app.templates.categoryProductListTemplate.on('complete.formals',function(event,$context,infoObj){
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
						
						_app.ext._store_filter.vars.catPageID = $(_app.u.jqSelector('#',infoObj.parentID));  
						
						_app.u.dump("BEGIN categoryProductListTemplate onCompletes for filtering");
						
						//TESTING. REMOVE AFTER TESTING COMPLETED.
						dump(infoObj);
						dump($context);
						dump("_app.ext._store_filter.filterMap[infoObj.navcat] = " + _app.ext._store_filter.filterMap[infoObj.navcat]);
						
						
						if(_app.ext._store_filter.filterMap[infoObj.navcat])	{
							_app.u.dump(" -> safe id DOES have a filter.");
					
							var $page = $(_app.u.jqSelector('#',infoObj.parentID));
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
								_app.u.dump("$('.catGhostCell', $context).data('heightVal') exists. Assigning height value");
								$(".catGhostCell", $context).css("height",catGhostCellHeight);
							}
							else{
								$('.catGhostCell', $context).data('heightVal', '').append();
								_app.u.dump("$('.catGhostCell', $context).data('heightVal') doesn't exists. Make it.");
							}
							
							//ASSIGN EXPAND/COLLAPSE VALUES TO FILTER FORM
							var $sidebarContext = $(".catProdListSidebar").parent().parent();
							//_app.u.dump($sidebarContext);
							
							if($('.layeredSearch', $context).length){
								if($('.catProdListSidebar', $context).data('collapseOrExpanded')){
									_app.u.dump("$('.catProdListSidebar', $context).data('collapseOrExpanded') exists. Do nothing.");
								}
								else{
									_app.u.dump("$('.catProdListSidebar', $context).data('collapseOrExpanded') doesn't exists. Make it.");
									$('.catProdListSidebar', $context).data('collapseOrExpanded',false).append();
								}
								
								_app.u.dump("Filter form found, showing search tab");
							}
							else{
								$('.searchTab', $context).hide();
								_app.u.dump("Filter form not found, hiding search tab");
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
							
							_app.ext._store_banner.u.showCategoryBanners($context);		
					});
					
					
					
					_app.templates.searchTemplate.on('complete.formals',function(event,$context,infoObj){
						//if(infoObj.preservePage){ alert("You hit the back button");}
						
						//var $context = $(_app.u.jqSelector('#',infoObj.parentID));
						var $page = $(_app.u.jqSelector('#',infoObj.parentID));
						
						//****FILTERED SEARCH CODE****
						$('.fsCheckbox').attr('checked', false);
						$("#resultsProductListContainer").show(); 
						$(".searchFilterResults").hide();    
						_app.u.dump("BEGIN searchTemplate onCompletes for filtering");
						var $form = $("[name='SearchPageFilterSearchForm']",'#appFilters').clone().appendTo($('.filterContainerSearch',$page));
						$form.on('submit.filterSearch',function(event){
							event.preventDefault()
							_app.u.dump(" -> Filter form submitted.");
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
								_app.u.dump("$('.catGhostCell', $context).data('heightVal') exists. Assigning height value");
								$(".catGhostCell", $context).css("height",catGhostCellHeight);
							}
							else{
								$('.catGhostCell', $context).data('heightVal', '').append();
								_app.u.dump("$('.catGhostCell', $context).data('heightVal') doesn't exists. Make it.");
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
					
					
					_app.templates.companyTemplate.on('complete.formals',function(event,$context,infoObj){
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
					_app.templates.customerTemplate.on('complete.formals',function(event,$context,infoObj){
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
					_app.templates.searchTemplate.on('complete.formals',function(event,$context,infoObj){
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
					_app.templates.testimonialsTemplate.on('complete.formals',function(event,$context,infoObj){
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
					_app.templates.categoryProductListTemplate.on('complete.formals',function(event,$context,infoObj){
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
					_app.templates.productTemplate.on('complete.formals',function(event,$context,infoObj){
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
					_app.templates.checkoutTemplate.on('complete.formals',function(event,$context,infoObj){
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
					_app.templates.pageNotFoundTemplate.on('complete.formals',function(event,$context,infoObj){
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
					
					
					_app.templates.productTemplateQuickView.on('complete.formals',function(event,$context,infoObj){
						
						//var $context = $(_app.u.jqSelector('#',infoObj.parentID));
						
						
						if($(".variation_D5", $context).length){
							_app.u.dump(".variation_D5 exists. Adding sizing chat link");
							$(".variation_D5", $context).after("<div class='productSizingChartModalLinkContainer quickviewProductSizingChartModalLinkContainer'>"
							+ "<a onClick=\"$('#SizingChartTemplate').dialog({'modal':'true', 'title':'','width':825, height:700, 'dialogClass' : 'SizingChartModal'});\"> Need help with your size?</a>"
							+ "</div>");
						}
						else{
							_app.u.dump(".variation_D5 does not exists. Doing nothing");
						}
						
					
					});
					
					
					
					/*
					_app.templates.categoryProductListTemplate.on('depart.formals',function(event,$context,infoObj){
						var $context = $(_app.u.jqSelector('#',infoObj.parentID));
						if($('.layeredSearch', $context).length){
							$('.catProdListSidebar', $context).hide();
							$(".catGhostCell", $context).css("height","0");
						}
					}]);
					*/
				},
				onError : function (){
					_app.u.dump('BEGIN app_store_formals.callbacks.startExtension.onError');
				}
			},
		},
		
		
		////////////////////////////////////   ACTION    \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

//actions are functions triggered by a user interaction, such as a click/tap.
//these are going the way of the do do, in favor of app events. new extensions should have few (if any) actions.
		a : {
			//HEADER DROPDOWN MENUS
				showDropdown : function($tag) {
					var $dropdown = $(".dropdown", $tag);
					var height = 370;
					/*$dropdown.children().each(function(){
						height += $(this).outerHeight(true);
					});*/
					$dropdown.stop().animate({"height":height+"px"}, 500);
					$dropdown.css({'border-top':'7px dotted #909090'});
					$dropdown.css({'border-top':'7px dotted rgba(200, 200, 200, 0.5)'});
					$dropdown.css({'border-bottom':'10px solid #E61652'});
				},
					
				hideDropdown : function($tag) {
					$(".dropdown", $tag).stop().animate({"height":"0px"}, 500);
					$(".dropdown", $tag).css({'border-top':'none'});
					$(".dropdown", $tag).css({'border-bottom':'none'});
				},
				
				hideAllDropdowns : function() {
					$(".dropdown").css({'visibility':'hidden'});
					$(".dropdown").stop().animate({"height":"0px"}, 100);
					$(".dropdown").css({'border-top':'none'});
					$(".dropdown").css({'border-bottom':'none'});
					setTimeout(function(){
						$(".dropdown").css({'visibility':'visible'});
				   }, 300);
				},
			//END HEADER DROPDOWN MENUS
			
			homepageCategoryMouseOver : function($tag) {
				//_app.u.dump("mouse over function successully ran.")
				$(".homepageCatTitleBar", $tag).css({'background-color':'rgba(230,22,82,.5)'});
				$(".homepageCatTitle", $tag).css({'color':'white'});
			},
			homepageCategoryMouseOut : function($tag) {
				//_app.u.dump("mouse over function successully ran.")
				$(".homepageCatTitleBar", $tag).css({'background':'none'});
				$(".homepageCatTitleBar", $tag).css({'background-color':'rgba(900,900,900,.8)'});
				$(".homepageCatTitle", $tag).css({'color':'#333333'});
			},
			homepageSubCatMouseOver : function($tag) {
				//_app.u.dump("mouse over function successully ran.")
				$(".homepageSubCatTitleBar", $tag).css({'background-color':'rgba(230,22,82,.5)'});
				$(".homepageSubCatTitle", $tag).css({'color':'white'});
			},
			homepageSubCatMouseOut : function($tag) {
				//_app.u.dump("mouse over function successully ran.")
				$(".homepageSubCatTitleBar", $tag).css({'background-color':'rgba(900,900,900,.8)'});
				$(".homepageSubCatTitle", $tag).css({'color':'#333333'});
			},
			
			homepageCarouselProdItemMouseOver : function($tag) {
				//_app.u.dump("mouse over function successully ran.")
				$tag.css({'border':'10px solid #e61652'});
				//$(".productItemInfo", $tag).css({'background-color':'rgba(230,22,82,.5)'});
				$(".productItemInfoContent", $tag).hide();
				$(".productItemInfoMoreInfo", $tag).show();
			},
			homepageCarouselProdItemMouseOut : function($tag) {
				//_app.u.dump("mouse over function successully ran.")
				$tag.css({'border':'10px solid white'});
				//$(".productItemInfo", $tag).css({'background-color':'rgba(900,900,900,.8)'});
				$(".productItemInfoContent", $tag).show();
				$(".productItemInfoMoreInfo", $tag).hide();
			},
			
			categorySubCatMouseOver : function($tag) {
				//_app.u.dump("mouse over function successully ran.")
				$(".homepageSubCatTitleBar", $tag).css({'background-color':'rgba(230,22,82,.5)'});
				$(".catName", $tag).css({'color':'white'});	
			},
			categorySubCatMouseOut : function($tag) {
				//_app.u.dump("mouse over function successully ran.")
				$(".homepageSubCatTitleBar", $tag).css({'background-color':'rgba(900,900,900,.8)'});
				$(".catName", $tag).css({'color':'#333333'});
			},
			
			sizingChartModalScrollTop : function() {
				$("#SizingChartTemplate").animate({scrollTop: 0}, 600);
			},
			
			sizingChartModalScrollToChart : function(chartLoc) {
				$("#SizingChartTemplate").animate({scrollTop: chartLoc}, 600);
			},
			
			loginFrmSubmit : function(email,password,errorDiv)        {
					var errors = '';
					$errorDiv = errorDiv.empty(); //make sure error screen is empty. do not hide or callback errors won't show up.

					if(_app.u.isValidEmail(email) == false){
							errors += "Please provide a valid email address<br \/>";
							}
					if(!password)        {
							errors += "Please provide your password<br \/>";
							}
					if(errors == ''){
							_app.calls.appBuyerLogin.init({"login":email,"password":password},{'callback':'authenticateBuyer','extension':'myRIA'});
							_app.calls.refreshCart.init({},'immutable'); //cart needs to be updated as part of authentication process.
//                                        _app.calls.buyerProductLists.init('forgetme',{'callback':'handleForgetmeList','extension':'store_prodlist'},'immutable');
							_app.model.dispatchThis('immutable');
							}
					else {
							$errorDiv.anymessage({'message':errors});
							}
					showContent('customer',{'show':'myaccount'})
			}, //loginFrmSubmit
			
			collapseExpandFAQ : function($tagContext){
				if($(".faqContentCont", $tagContext).is(':hidden')){
					$(".faqContentCont", $tagContext).data('collapseExpand',false).append();
					//_app.u.dump("collapseExpand Data did not exist for this drop down. Created it.");
					//_app.u.dump($(".faqContentCont", $tagContext).data('collapseExpand'));

				}
				else{
				}
				
				if ($(".faqContentCont", $tagContext).data('collapseExpand') === false){
					$(".faqContentCont", $tagContext).slideDown(1000);
					$(".faqContentCont", $tagContext).data('collapseExpand',true).append();
					//_app.u.dump("FAQ was hidden. Now showing.");
				}
				else{
					$(".faqContentCont", $tagContext).slideUp(1000);
					$(".faqContentCont", $tagContext).data('collapseExpand',false).append();
					//_app.u.dump("FAQ was showing. Now hidden.");
				}
			} //END collapseExpandFAQ
			 
		},//END a FUNCTIONS
		
		u : {
			
			handleAppLoginCreate : function($form)        {
				if($form)        {
						var formObj = $form.serializeJSON();
						
						if(formObj.pass !== formObj.pass2) {
								_app.u.throwMessage('Sorry, your passwords do not match! Please re-enter your password');
								return;
						}
						
						var tagObj = {
								'callback':function(rd) {
										if(_app.model.responseHasErrors(rd)) {
												$form.anymessage({'message':rd});
										}
										else {
												showContent('customer',{'show':'myaccount'});
												_app.u.throwMessage(_app.u.successMsgObject("Your account has been created!"));
										}
								}
						}
						
						formObj._vendor = "onlineformals";
						_app.calls.appBuyerCreate.init(formObj,tagObj,'immutable');
						_app.model.dispatchThis('immutable');
				}
				else {
						$('#globalMessaging').anymessage({'message':'$form not passed into _store_formals.u.handleBuyerAccountCreate','gMessage':true});
				}
			},
			
			//replacement for bindByAnchor href to make crawlable links. Currently used mainly on sitemap
			bindOnclick : function() {
				$('body').off('click', 'a[data-onclick]').on('click', 'a[data-onclick]', function(event){
					var $this = $(this);
					var P = _app.ext.quickstart.u.parseAnchor($this.data('onclick'));
					return _app.ext.quickstart.a.showContent('',P);
				});
			}
		},//END u FUNCTIONS
		
		renderFormats : {
			//Identical to the showIFSet render format but sets to inline instead of block.
			showIfSetInline : function($tag,data)	{
			if(data.value)	{
				$tag.show().css('display','inline'); //IE isn't responding to the 'show', so the display:inline is added as well.
				}
			}, //END showIfSetInline
			
			money : function($tag,data)	{			
//			_app.u.dump('BEGIN view.formats.money');
			var amount = data.bindData.isElastic ? (data.value / 100) : data.value;
			if(amount)	{
				var r,o,sr;
				r = _app.u.formatMoney(amount,data.bindData.currencySign,'',data.bindData.hideZero);
//					_app.u.dump(' -> attempting to use var. value: '+data.value);
//					_app.u.dump(' -> currencySign = "'+data.bindData.currencySign+'"');

//				**SPAN IS APPENDED TO ALL OF THE PRICE TEXT, RATHER THAN JUST THE CENTS**
				if(r.substr(0,1))	{
//					_app.u.dump(' -> r = '+r);
					sr = r.split(r.substr(0,1));
					o = sr[0];
					if(sr[1])	{o += '<span class="productPriceText">$'+sr[1]+'<\/span>'}
					$tag.html(o);
					}
				else	{
					$tag.html(r);
					}
				}
			}, //END money
			
			vimeovideo : function($tag,data){
			var width = data.bindData.width ? data.bindData.width : 440
			var height = data.bindData.height ? data.bindData.height : 275
			//dump("Vimeo video ID = ");
			//dump(data.value);

			if(data.value == "" || data.value == undefined)
			{
			}
			else{
				var r = "<iframe width='"+width+"' height='"+height+"' src='"+(document.location.protocol === 'https:' ? 'https:' : 'http:')+"//player.vimeo.com/video/"+data.value+"' frameborder='0' webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>";
				$tag.append(r);

			}
			
			}, //END vimeoVideo
			
			
			currencyelastic : function($tag,data)	{
			dump("Begin currency elastic format");
			dump(data);
			dump($tag);
			
			var rawPrice = data.value;
			var cents = ".";
			var position = data.value.length - 2;
			dump(position);
			var r = "Our Price: $"+[rawPrice.slice(0, position), cents, rawPrice.slice(position)].join('');
			
			//var r = "Our price: $"+data.value;
			dump(r);
			
			dump(r);
			$tag.append(r);
			}, //currencyelastic
			
			
			
			currencyprodlist : function($tag,data)	{
			//dump("Begin currency product list format");
			//dump(data);
			//dump($tag);
			
			var r = "Our price: $"+data.value;
			//dump(r);
			var cents = r.split(".")
			//dump(cents[1]);
			if(cents[1] == undefined){
				//dump ("No cents present. Add a .00")
				r = r + ".00";
			}
			else if(cents[1].length === 1){
				//dump(cents[1].length);
				//dump ("cents only has one value. Adding a zero.")
				r = r + "0";
			}
			else if(cents[1] == ""){
				//dump("Price value has a decimal but no cent values. Fixing this shenanigans");
				r = r + "00";
			}
			//dump(r);
			$tag.append(r);
			}, //currencyprodlist
			
			
			currencymsrp : function($tag,data)	{
			//dump("Begin currency product list format");
			//dump(data);
			//dump($tag);
			
			var r = "MSRP: $"+data.value;
			//dump(r);
			var cents = r.split(".")
			//dump(cents[1]);
			if(cents[1] == undefined){
				//dump ("No cents present. Add a .00")
				r = r + ".00";
			}
			else if(cents[1].length === 1){
				//dump(cents[1].length);
				//dump ("cents only has one value. Adding a zero.")
				r = r + "0";
			}
			else if(cents[1] == ""){
				//dump("Price value has a decimal but no cent values. Fixing this shenanigans");
				r = r + "00";
			}
			//dump(r);
			$tag.append(r);
			}, //currencymsrp
			
		},
		tlcFormats : {
			//currencyprodlist : function(argObj,globals)	{
			currencyprodlist : function(data,thisTLC)	{
			
			dump("Begin currency format");
			dump(data);
			dump(thisTLC);
			
			//var r = "$"+globals.binds[argObj.bind]; 
			var r = "Our price: $"+data.globals.binds[data.globals.focusBind];
			dump(r);
			var cents = r.split(".")
			dump(cents[1]);
			if(cents[1] == undefined){
				dump ("No cents present. Add a .00")
				r = r + ".00";
			}
			else if(cents[1].length === 1){
			dump(cents[1].length);
			dump ("cents only has one value. Adding a zero.")
			}
			dump(r);
			return(r);
			}, //currencyprodlist
		}
	}
	return r;
}