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

/*
An extension for acquiring and displaying 'lists' of categories.
The functions here are designed to work with 'reasonable' size lists of categories.
*/


var _store_filter = function() {
	var r = {
		
	vars : {
		catPageID: "",
		'templates' : []
		},

					////////////////////////////////////   CALLS    \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\		


//store_search contains the maintained elastic query search. use that.
	calls : {}, //calls
//key is safe id. value is name of the filter form.
	filterMap : {
		
			//TEST FORM - REMOVE BEFORE GOING LIVE
			".shop_by_designer.ballgowns_by_mac_duggal":{
			"filter": "masterFilterSearchForm",
			"exec" : function($form,infoObj){app.ext._store_filter.u.renderSlider($form, infoObj, {MIN:0,MAX:1000});}
			},
			
			//PROM PAGES
			".prom.designers.bg_haute":{
			"filter": "PromBGHauteForm",
			"exec" : function($form,infoObj){app.ext._store_filter.u.renderSlider($form, infoObj, {MIN:0,MAX:1000});}
			},
			".prom.designers.prom.designers.cassandra_stone":{
			"filter": "PromCassStoneForm",
			"exec" : function($form,infoObj){app.ext._store_filter.u.renderSlider($form, infoObj, {MIN:0,MAX:1000});}
			},
			".prom.designers.faviana":{
			"filter": "PromFavianaForm",
			"exec" : function($form,infoObj){app.ext._store_filter.u.renderSlider($form, infoObj, {MIN:0,MAX:1000});}
			},
			".prom.designers.gigi":{
			"filter": "PromGigiForm",
			"exec" : function($form,infoObj){app.ext._store_filter.u.renderSlider($form, infoObj, {MIN:0,MAX:1000});}
			},
			".prom.designers.jasz_couture":{
			"filter": "PromJaszCoutForm",
			"exec" : function($form,infoObj){app.ext._store_filter.u.renderSlider($form, infoObj, {MIN:0,MAX:1000});}
			},
			".prom.designers.johnathan_kayne":{
			"filter": "PromJohnKayneForm",
			"exec" : function($form,infoObj){app.ext._store_filter.u.renderSlider($form, infoObj, {MIN:0,MAX:1000});}
			},
			".prom.designers.jovani":{
			"filter": "PromJovaniForm",
			"exec" : function($form,infoObj){app.ext._store_filter.u.renderSlider($form, infoObj, {MIN:0,MAX:1000});}
			},
			".prom.designers.la_femme":{
			"filter": "PromLaFemmeForm",
			"exec" : function($form,infoObj){app.ext._store_filter.u.renderSlider($form, infoObj, {MIN:0,MAX:1000});}
			},
			".prom.designers.le_gala":{
			"filter": "PromLeGalaForm",
			"exec" : function($form,infoObj){app.ext._store_filter.u.renderSlider($form, infoObj, {MIN:0,MAX:1000});}
			},
			".prom.designers.lm_collection":{
			"filter": "PromLmCollForm",
			"exec" : function($form,infoObj){app.ext._store_filter.u.renderSlider($form, infoObj, {MIN:0,MAX:1000});}
			},
			".prom.designers.mac_duggal":{
			"filter": "PromMacDuggalForm",
			"exec" : function($form,infoObj){app.ext._store_filter.u.renderSlider($form, infoObj, {MIN:0,MAX:1000});}
			},
			".prom.designers.mignon":{
			"filter": "PromMignonForm",
			"exec" : function($form,infoObj){app.ext._store_filter.u.renderSlider($form, infoObj, {MIN:0,MAX:1000});}
			},
			".prom.designers.mnm_couture":{
			"filter": "PromMnmCoutForm",
			"exec" : function($form,infoObj){app.ext._store_filter.u.renderSlider($form, infoObj, {MIN:0,MAX:1000});}
			},
			".prom.designers.night_moves":{
			"filter": "PromNightMovesForm",
			"exec" : function($form,infoObj){app.ext._store_filter.u.renderSlider($form, infoObj, {MIN:0,MAX:1000});}
			},
			".prom.designers.paris":{
			"filter": "PromParisForm",
			"exec" : function($form,infoObj){app.ext._store_filter.u.renderSlider($form, infoObj, {MIN:0,MAX:1000});}
			},
			".prom.designers.scala.":{
			"filter": "PromScalaForm",
			"exec" : function($form,infoObj){app.ext._store_filter.u.renderSlider($form, infoObj, {MIN:0,MAX:1000});}
			},
			".prom.designers.shail_k":{
			"filter": "PromShailKForm",
			"exec" : function($form,infoObj){app.ext._store_filter.u.renderSlider($form, infoObj, {MIN:0,MAX:1000});}
			},
			".prom.designers.sherri_hill":{
			"filter": "PromSherriHillForm",
			"exec" : function($form,infoObj){app.ext._store_filter.u.renderSlider($form, infoObj, {MIN:0,MAX:1000});}
			},
			".prom.designers.tony_bowls":{
			"filter": "PromTonyBowlsForm",
			"exec" : function($form,infoObj){app.ext._store_filter.u.renderSlider($form, infoObj, {MIN:0,MAX:1000});}
			},
			".prom..prom.styles.ballgown___a_line":{
			"filter": "PromALineForm",
			"exec" : function($form,infoObj){app.ext._store_filter.u.renderSlider($form, infoObj, {MIN:0,MAX:1000});}
			},
			".prom..prom.styles.empire":{
			"filter": "PromEmpireForm",
			"exec" : function($form,infoObj){app.ext._store_filter.u.renderSlider($form, infoObj, {MIN:0,MAX:1000});}
			},
			".prom..prom.styles.high_low":{
			"filter": "PromHighLowForm",
			"exec" : function($form,infoObj){app.ext._store_filter.u.renderSlider($form, infoObj, {MIN:0,MAX:1000});}
			},
			".prom..prom.styles.mermaid":{
			"filter": "PromMermaidForm",
			"exec" : function($form,infoObj){app.ext._store_filter.u.renderSlider($form, infoObj, {MIN:0,MAX:1000});}
			},
			".prom..prom.styles.short":{
			"filter": "PromShortForm",
			"exec" : function($form,infoObj){app.ext._store_filter.u.renderSlider($form, infoObj, {MIN:0,MAX:1000});}
			},
			".prom..prom.trends.beads":{
			"filter": "PromBeadsForm",
			"exec" : function($form,infoObj){app.ext._store_filter.u.renderSlider($form, infoObj, {MIN:0,MAX:1000});}
			},
			".prom..prom.trends.lace":{
			"filter": "PromLaceForm",
			"exec" : function($form,infoObj){app.ext._store_filter.u.renderSlider($form, infoObj, {MIN:0,MAX:1000});}
			},
			".prom..prom.trends.polka_dots":{
			"filter": "PromDotsForm",
			"exec" : function($form,infoObj){app.ext._store_filter.u.renderSlider($form, infoObj, {MIN:0,MAX:1000});}
			},
			".prom..prom.trends.sequins":{
			"filter": "PromSequinsForm",
			"exec" : function($form,infoObj){app.ext._store_filter.u.renderSlider($form, infoObj, {MIN:0,MAX:1000});}
			},
			".prom..prom.trends.vintage":{
			"filter": "PromVintageForm",
			"exec" : function($form,infoObj){app.ext._store_filter.u.renderSlider($form, infoObj, {MIN:0,MAX:1000});}
			},
			
		},

					////////////////////////////////////   CALLBACKS    \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\



	callbacks : {
//callbacks.init need to return either a true or a false, depending on whether or not the file will execute properly based on store account configuration. Use this for any config or dependencies that need to occur.
//the callback is auto-executed as part of the extensions loading process.
		init : {
			onSuccess : function()	{
//				app.u.dump('BEGIN app.ext.store_navcats.init.onSuccess ');
				var r = true; //return false if extension won't load for some reason (account config, dependencies, etc).
				return r;
				},
			onError : function()	{
//errors will get reported for this callback as part of the extensions loading.  This is here for extra error handling purposes.
				}
			}

		}, //callbacks


////////////////////////////////////   getFilterObj    \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\


		getElasticFilter : {
			
			slider : function($fieldset){
				var r = false; //what is returned. Will be set to an object if valid.
				var $slider = $('.slider-range',$fieldset);
				if($slider.length > 0)	{
					r = {"range":{}}
//if data-min and/or data-max are not set, use the sliders min/max value, respectively.
					r.range[$fieldset.attr('data-elastic-key')] = {
						"from" : $slider.slider('values', 0 ) * 100,
						"to" : $slider.slider("values",1) * 100
						}
					}
				else	{
					app.u.dump("WARNING! could not detect .ui-slider class within fieldset for slider filter.");
					}
				return r;
				}, //slider
			hidden : function($fieldset){
				return app.ext._store_filter.u.buildElasticTerms($("input:hidden",$fieldset),$fieldset.attr('data-elastic-key'));
				},
			hiddenOr : function($fieldset){
				var r = {"or":[]};
				$("input:hidden",$fieldset).each(function(){
					r.or.push(app.ext._store_filter.u.buildElasticTerms($(this),$fieldset.attr('data-elastic-key')));
					});
				return r;
				},
			checkboxes : function($fieldset)	{
				return app.ext._store_filter.u.buildElasticTerms($(':checked',$fieldset),$fieldset.attr('data-elastic-key'));
				} //checkboxes
			
			}, //getFilterObj




////////////////////////////////////   Actions    \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\


		a : {
			
			execFilter : function($form,$page){

app.u.dump("BEGIN store_filter.a.filter");
var $prodlist = $("[data-app-role='productList']",$page).first().empty();


$('.categoryList',$page).hide(); //hide any subcategory lists in the main area so customer can focus on results
$('.categoryText',$page).hide(); //hide any text blocks.

if(app.ext._store_filter.u.validateFilterProperties($form))	{
//	app.u.dump(" -> validated Filter Properties.")
	var query = {
		"mode":"elastic-native",
		"size":50,
		"filter" : app.ext._store_filter.u.buildElasticFilters($form),
		}//query
//	app.u.dump(" -> Query: "); app.u.dump(query);
	if(query.filter.and.length > 0)	{
		$prodlist.addClass('loadingBG');
		app.ext.store_search.calls.appPublicProductSearch.init(query,{'callback':function(rd){

			if(app.model.responseHasErrors(rd)){
				$page.anymessage({'message':rd});
				}
			else	{
				var L = app.data[rd.datapointer]['_count'];
				$prodlist.removeClass('loadingBG')
				if(L == 0)	{
					$page.anymessage({"message":"Your query returned zero results."});
					}
				else	{
					$prodlist.append(app.ext.store_search.u.getElasticResultsAsJQObject(rd));
					}
				}
			
			},'datapointer':'appPublicSearch|elasticFiltering',
			'templateID': $form.data('loadstemplate') || 'productListTemplateResults'
			});
			app.u.dump(JSON.stringify(query));
		app.model.dispatchThis();
		}
	else	{
		$page.anymessage({'message':"Please make some selections from the list of filters"});
		}
	}
else	{
	$page.anymessage({"message":"Uh Oh! It seems an error occured. Please try again or contact the site administator if error persists."});
	}
$('html, body').animate({scrollTop : 0},200); //new page content loading. scroll to top.

				
				},//filter
				
				//****FILTER HIDE/SHOW TOGGLE SWITCHES****
				toggleShowHidePriceFilter : function(){
					if($('.filterPriceCat').data('collapseOrExpanded') === true){
						$('.filterCategoryCont', '.filterPriceCat').slideUp(1000);
						$('.filterCatTitle', '.filterPriceCat').css("background-image","url(Images/categorypage/filteredsearch/catbarclosed.png)");
						$('.filterPriceCat').data('collapseOrExpanded',false).append();
					}
					else{
						$('.filterCategoryCont', '.filterPriceCat').slideDown(1000);
						$('.filterCatTitle', '.filterPriceCat').css("background-image","url(Images/categorypage/filteredsearch/catbaropen.png)");
						$('.filterPriceCat').data('collapseOrExpanded',true).append();
					}
				},
				
				toggleShowHideDressTypeFilter : function(){
					if($('.filterDressTypeCat').data('collapseOrExpanded') === true){
						$('.filterCategoryCont', '.filterDressTypeCat').slideUp(1000);
						$('.filterCatTitle', '.filterDressTypeCat').css("background-image","url(Images/categorypage/filteredsearch/catbarclosed.png)");
						$('.filterDressTypeCat').data('collapseOrExpanded',false).append();
					}
					else{
						$('.filterCategoryCont', '.filterDressTypeCat').slideDown(1000);
						$('.filterCatTitle', '.filterDressTypeCat').css("background-image","url(Images/categorypage/filteredsearch/catbaropen.png)");
						$('.filterDressTypeCat').data('collapseOrExpanded',true).append();
					}
				},
				
				toggleShowHideDesignerFilter : function(){
					if($('.filterDesignerCat').data('collapseOrExpanded') === true){
						$('.filterCategoryCont', '.filterDesignerCat').slideUp(1000);
						$('.filterCatTitle', '.filterDesignerCat').css("background-image","url(Images/categorypage/filteredsearch/catbarclosed.png)");
						$('.filterDesignerCat').data('collapseOrExpanded',false).append();
					}
					else{
						$('.filterCategoryCont', '.filterDesignerCat').slideDown(1000);
						$('.filterCatTitle', '.filterDesignerCat').css("background-image","url(Images/categorypage/filteredsearch/catbaropen.png)");
						$('.filterDesignerCat').data('collapseOrExpanded',true).append();
					}
				},
				
				toggleShowHideColorFilter : function(){
					if($('.filterColorCat').data('collapseOrExpanded') === true){
						$('.filterCategoryCont', '.filterColorCat').slideUp(1000);
						$('.filterCatTitle', '.filterColorCat').css("background-image","url(Images/categorypage/filteredsearch/catbarclosed.png)");
						$('.filterColorCat').data('collapseOrExpanded',false).append();
					}
					else{
						$('.filterCategoryCont', '.filterColorCat').slideDown(1000);
						$('.filterCatTitle', '.filterColorCat').css("background-image","url(Images/categorypage/filteredsearch/catbaropen.png)");
						$('.filterColorCat').data('collapseOrExpanded',true).append();
					}
				},
				
				toggleShowHideHemlineFilter : function(){
					if($('.filterHemlineCat').data('collapseOrExpanded') === true){
						$('.filterCategoryCont', '.filterHemlineCat').slideUp(1000);
						$('.filterCatTitle', '.filterHemlineCat').css("background-image","url(Images/categorypage/filteredsearch/catbarclosed.png)");
						$('.filterHemlineCat').data('collapseOrExpanded',false).append();
					}
					else{
						$('.filterCategoryCont', '.filterHemlineCat').slideDown(1000);
						$('.filterCatTitle', '.filterHemlineCat').css("background-image","url(Images/categorypage/filteredsearch/catbaropen.png)");
						$('.filterHemlineCat').data('collapseOrExpanded',true).append();
					}
				},
				
				toggleShowHideSilhouetteFilter : function(){
					if($('.filterSilhouetteCat').data('collapseOrExpanded') === true){
						$('.filterCategoryCont', '.filterSilhouetteCat').slideUp(1000);
						$('.filterCatTitle', '.filterSilhouetteCat').css("background-image","url(Images/categorypage/filteredsearch/catbarclosed.png)");
						$('.filterSilhouetteCat').data('collapseOrExpanded',false).append();
					}
					else{
						$('.filterCategoryCont', '.filterSilhouetteCat').slideDown(1000);
						$('.filterCatTitle', '.filterSilhouetteCat').css("background-image","url(Images/categorypage/filteredsearch/catbaropen.png)");
						$('.filterSilhouetteCat').data('collapseOrExpanded',true).append();
					}
				},
				
				toggleShowHideNecklineFilter : function(){
					if($('.filterNecklineCat').data('collapseOrExpanded') === true){
						$('.filterCategoryCont', '.filterNecklineCat').slideUp(1000);
						$('.filterCatTitle', '.filterNecklineCat').css("background-image","url(Images/categorypage/filteredsearch/catbarclosed.png)");
						$('.filterNecklineCat').data('collapseOrExpanded',false).append();
					}
					else{
						$('.filterCategoryCont', '.filterNecklineCat').slideDown(1000);
						$('.filterCatTitle', '.filterNecklineCat').css("background-image","url(Images/categorypage/filteredsearch/catbaropen.png)");
						$('.filterNecklineCat').data('collapseOrExpanded',true).append();
					}
				},
				
				toggleShowHideTrendFilter : function(){
					if($('.filterTrendsCat').data('collapseOrExpanded') === true){
						$('.filterCategoryCont', '.filterTrendsCat').slideUp(1000);
						$('.filterCatTitle', '.filterTrendsCat').css("background-image","url(Images/categorypage/filteredsearch/catbarclosed.png)");
						$('.filterTrendsCat').data('collapseOrExpanded',false).append();
					}
					else{
						$('.filterCategoryCont', '.filterTrendsCat').slideDown(1000);
						$('.filterCatTitle', '.filterTrendsCat').css("background-image","url(Images/categorypage/filteredsearch/catbaropen.png)");
						$('.filterTrendsCat').data('collapseOrExpanded',true).append();
					}
				}
			
			}, //actions


////////////////////////////////////   UTIL    \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\


		u : {
//pass in form as object.  This function will verify that each fieldset has the appropriate attributes.
//will also verify that each filterType has a getElasticFilter function.
			validateFilterProperties : function($form)	{
				var r = true, //what is returned. false if form doesn't validate.
				$fieldset, filterType; //recycled.

				$('fieldset',$form).each(function(index){
					$fieldset = $(this);
					filterType = $fieldset.attr('data-filtertype');
					if(!filterType)	{
						r = false;
						$form.anymessage({"message":"In _store_filters.u.validateFilterProperties,  no data-filtertype set on fieldset. can't include as part of query. [index: "+index+"]",gMessage:true});
						}
					else if(typeof app.ext._store_filter.getElasticFilter[filterType] != 'function')	{
						r = false;
						$form.anymessage({"message":"WARNING! type ["+filterType+"] has no matching getElasticFilter function. [typoof: "+typeof app.ext._store_filter.getElasticFilter[filterType]+"]",gMessage:true});
						}
					else if(!$fieldset.attr('data-elastic-key'))	{
						r = false;
						$form.anymessage({"message":"WARNING! data-elastic-key not set for filter. [index: "+index+"]",gMessage:true});
						}
					else	{
						//catch.
						}
					});
				return r;
				},
			
			
			buildElasticFilters : function($form)	{

var filters = {
	"and" : [] //push on to this the values from each fieldset.
	}//query


$('fieldset',$form).each(function(){
	var $fieldset = $(this),
	filter = app.ext._store_filter.getElasticFilter[$fieldset.attr('data-filtertype')]($fieldset);
	if(filter)	{
		filters.and.push(filter);
		}
	});

	filters.and.push({'not':{'term':{'prod_outofstock':'1'}}});

//and requires at least 2 inputs, so add a match_all.
//if there are no filters, don't add it. the return is also used to determine if any filters are present
// * doesn't do anything. added by clinton. removed by JT.
 	if(filters.and.length == 1)	{
		filters.and.push({match_all:{}})
 		}

return filters;				
				
				},

//pass in a jquery object or series of objects for form inputs (ex: $('input:hidden')) and a single term or a terms object will be returned.
//false is returned in nothing is checked/selected.
//can be used on a series of inputs, such as hidden or checkbox 
			buildElasticTerms : function($obj,attr)	{
				var r = false; //what is returned. will be term or terms object if valid.
				if($obj.length == 1)	{
					r = {term:{}};
					r.term[attr] = $obj.val().toLowerCase();
					}
				else if($obj.length > 1)	{
					r = {terms:{}};
					r.terms[attr] = new Array();
					$obj.each(function(){
						r.terms[attr].push($(this).val().toLowerCase());
						});
					}
				else	{
					//nothing is checked.
					}
				return r;
				},


			renderSlider : function($form, infoObj, props){
				$( ".slider-range" ).slider({
					range: true,
					min: props.MIN,
					max: props.MAX,
					values: [ props.MIN, props.MAX ],
					stop : function(){
						$form.submit();
						},
					slide: function( event, ui ) {
						$( ".sliderValue",$form ).val( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
						}
					});
				$( ".sliderValue",$form ).val( "$" + $( ".slider-range" ).slider( "values", 0 ) + " - $" + $( ".slider-range" ).slider( "values", 1 ) );
				} //renderSlider

			} //u


		
		} //r object.
	return r;
	}