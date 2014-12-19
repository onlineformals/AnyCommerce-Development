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


var _store_filter = function(_app) {
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
		
			//SEARCH PAGE
			"searchPage":{
			"filter": "SearchPageFilterSearchForm",
			"exec" : function($form,infoObj){_app.ext._store_filter.u.renderSlider($form, infoObj, {MIN:0,MAX:2000});}
			},
			
			//DESIGNER PAGES
			".designers.bg_haute":{
			"filter": "designBGHauteForm",
			"exec" : function($form,infoObj){_app.ext._store_filter.u.renderSlider($form, infoObj, {MIN:0,MAX:1000});}
			},
			".designers.cassandra_stone":{
			"filter": "designCassandraStoneForm",
			"exec" : function($form,infoObj){_app.ext._store_filter.u.renderSlider($form, infoObj, {MIN:0,MAX:1000});}
			},
			".designers.faviana":{
			"filter": "designFavianaForm",
			"exec" : function($form,infoObj){_app.ext._store_filter.u.renderSlider($form, infoObj, {MIN:0,MAX:1000});}
			},
			".designers.gigi":{
			"filter": "designGigiForm",
			"exec" : function($form,infoObj){_app.ext._store_filter.u.renderSlider($form, infoObj, {MIN:0,MAX:1000});}
			},
			".designers.jasz_couture":{
			"filter": "designJaszCoutureForm",
			"exec" : function($form,infoObj){_app.ext._store_filter.u.renderSlider($form, infoObj, {MIN:0,MAX:1000});}
			},
			".designers.johnathan_kayne":{
			"filter": "designJohnathanKayneForm",
			"exec" : function($form,infoObj){_app.ext._store_filter.u.renderSlider($form, infoObj, {MIN:0,MAX:1000});}
			},
			".designers.la_femme":{
			"filter": "designLaFemmeForm",
			"exec" : function($form,infoObj){_app.ext._store_filter.u.renderSlider($form, infoObj, {MIN:0,MAX:1000});}
			},
			".designers.le_gala":{
			"filter": "designLeGalaForm",
			"exec" : function($form,infoObj){_app.ext._store_filter.u.renderSlider($form, infoObj, {MIN:0,MAX:1000});}
			},
			".designers.lm_collection":{
			"filter": "designLMCollectionForm",
			"exec" : function($form,infoObj){_app.ext._store_filter.u.renderSlider($form, infoObj, {MIN:0,MAX:1000});}
			},
			".designers.mac_duggal":{
			"filter": "designMacDuggalForm",
			"exec" : function($form,infoObj){_app.ext._store_filter.u.renderSlider($form, infoObj, {MIN:0,MAX:1000});}
			},
			".designers.mignon":{
			"filter": "designMignonForm",
			"exec" : function($form,infoObj){_app.ext._store_filter.u.renderSlider($form, infoObj, {MIN:0,MAX:1000});}
			},
			".designers.mnm_couture":{
			"filter": "designMNMCoutureForm",
			"exec" : function($form,infoObj){_app.ext._store_filter.u.renderSlider($form, infoObj, {MIN:0,MAX:1000});}
			},
			".designers.night_moves":{
			"filter": "designNightMovesForm",
			"exec" : function($form,infoObj){_app.ext._store_filter.u.renderSlider($form, infoObj, {MIN:0,MAX:1000});}
			},
			".designers.paris":{
			"filter": "designParisForm",
			"exec" : function($form,infoObj){_app.ext._store_filter.u.renderSlider($form, infoObj, {MIN:0,MAX:1000});}
			},
			".designers.scala":{
			"filter": "designScalaForm",
			"exec" : function($form,infoObj){_app.ext._store_filter.u.renderSlider($form, infoObj, {MIN:0,MAX:1000});}
			},
			".designers.shail_k":{
			"filter": "designShailKForm",
			"exec" : function($form,infoObj){_app.ext._store_filter.u.renderSlider($form, infoObj, {MIN:0,MAX:1000});}
			},
			".designers.sherri_hill":{
			"filter": "designSherriHillForm",
			"exec" : function($form,infoObj){_app.ext._store_filter.u.renderSlider($form, infoObj, {MIN:0,MAX:1000});}
			},
			".designers.tony_bowls":{
			"filter": "designTonyBowlsForm",
			"exec" : function($form,infoObj){_app.ext._store_filter.u.renderSlider($form, infoObj, {MIN:0,MAX:1000});}
			},
			
			
			
			//PROM PAGES
			".prom.designers.bg_haute":{
			"filter": "PromBGHauteForm",
			"exec" : function($form,infoObj){_app.ext._store_filter.u.renderSlider($form, infoObj, {MIN:0,MAX:1000});}
			},
			".prom.designers.prom.designers.cassandra_stone":{
			"filter": "PromCassStoneForm",
			"exec" : function($form,infoObj){_app.ext._store_filter.u.renderSlider($form, infoObj, {MIN:0,MAX:1000});}
			},
			".prom.designers.faviana":{
			"filter": "PromFavianaForm",
			"exec" : function($form,infoObj){_app.ext._store_filter.u.renderSlider($form, infoObj, {MIN:0,MAX:1000});}
			},
			".prom.designers.gigi":{
			"filter": "PromGigiForm",
			"exec" : function($form,infoObj){_app.ext._store_filter.u.renderSlider($form, infoObj, {MIN:0,MAX:1000});}
			},
			".prom.designers.jasz_couture":{
			"filter": "PromJaszCoutForm",
			"exec" : function($form,infoObj){_app.ext._store_filter.u.renderSlider($form, infoObj, {MIN:0,MAX:1000});}
			},
			".prom.designers.johnathan_kayne":{
			"filter": "PromJohnKayneForm",
			"exec" : function($form,infoObj){_app.ext._store_filter.u.renderSlider($form, infoObj, {MIN:0,MAX:1000});}
			},
			".prom.designers.jovani":{
			"filter": "PromJovaniForm",
			"exec" : function($form,infoObj){_app.ext._store_filter.u.renderSlider($form, infoObj, {MIN:0,MAX:1000});}
			},
			".prom.designers.la_femme":{
			"filter": "PromLaFemmeForm",
			"exec" : function($form,infoObj){_app.ext._store_filter.u.renderSlider($form, infoObj, {MIN:0,MAX:1000});}
			},
			".prom.designers.le_gala":{
			"filter": "PromLeGalaForm",
			"exec" : function($form,infoObj){_app.ext._store_filter.u.renderSlider($form, infoObj, {MIN:0,MAX:1000});}
			},
			".prom.designers.lm_collection":{
			"filter": "PromLmCollForm",
			"exec" : function($form,infoObj){_app.ext._store_filter.u.renderSlider($form, infoObj, {MIN:0,MAX:1000});}
			},
			".prom.designers.mac_duggal":{
			"filter": "PromMacDuggalForm",
			"exec" : function($form,infoObj){_app.ext._store_filter.u.renderSlider($form, infoObj, {MIN:0,MAX:1000});}
			},
			".prom.designers.mignon":{
			"filter": "PromMignonForm",
			"exec" : function($form,infoObj){_app.ext._store_filter.u.renderSlider($form, infoObj, {MIN:0,MAX:1000});}
			},
			".prom.designers.mnm_couture":{
			"filter": "PromMnmCoutForm",
			"exec" : function($form,infoObj){_app.ext._store_filter.u.renderSlider($form, infoObj, {MIN:0,MAX:1000});}
			},
			".prom.designers.night_moves":{
			"filter": "PromNightMovesForm",
			"exec" : function($form,infoObj){_app.ext._store_filter.u.renderSlider($form, infoObj, {MIN:0,MAX:1000});}
			},
			".prom.designers.paris":{
			"filter": "PromParisForm",
			"exec" : function($form,infoObj){_app.ext._store_filter.u.renderSlider($form, infoObj, {MIN:0,MAX:1000});}
			},
			".prom.designers.scala.":{
			"filter": "PromScalaForm",
			"exec" : function($form,infoObj){_app.ext._store_filter.u.renderSlider($form, infoObj, {MIN:0,MAX:1000});}
			},
			".prom.designers.shail_k":{
			"filter": "PromShailKForm",
			"exec" : function($form,infoObj){_app.ext._store_filter.u.renderSlider($form, infoObj, {MIN:0,MAX:1000});}
			},
			".prom.designers.sherri_hill":{
			"filter": "PromSherriHillForm",
			"exec" : function($form,infoObj){_app.ext._store_filter.u.renderSlider($form, infoObj, {MIN:0,MAX:1000});}
			},
			".prom.designers.tony_bowls":{
			"filter": "PromTonyBowlsForm",
			"exec" : function($form,infoObj){_app.ext._store_filter.u.renderSlider($form, infoObj, {MIN:0,MAX:1000});}
			},
			".prom.styles.ballgown___a_line":{
			"filter": "PromALineForm",
			"exec" : function($form,infoObj){_app.ext._store_filter.u.renderSlider($form, infoObj, {MIN:0,MAX:1000});}
			},
			".prom.styles.empire":{
			"filter": "PromEmpireForm",
			"exec" : function($form,infoObj){_app.ext._store_filter.u.renderSlider($form, infoObj, {MIN:0,MAX:1000});}
			},
			".prom.styles.high_low":{
			"filter": "PromHighLowForm",
			"exec" : function($form,infoObj){_app.ext._store_filter.u.renderSlider($form, infoObj, {MIN:0,MAX:1000});}
			},
			".prom.styles.mermaid":{
			"filter": "PromMermaidForm",
			"exec" : function($form,infoObj){_app.ext._store_filter.u.renderSlider($form, infoObj, {MIN:0,MAX:1000});}
			},
			".prom.styles.short":{
			"filter": "PromShortForm",
			"exec" : function($form,infoObj){_app.ext._store_filter.u.renderSlider($form, infoObj, {MIN:0,MAX:1000});}
			},
			
			".prom.trends.beads":{
			"filter": "PromBeadsForm",
			"exec" : function($form,infoObj){_app.ext._store_filter.u.renderSlider($form, infoObj, {MIN:0,MAX:1000});}
			},
			".prom.trends.lace":{
			"filter": "PromLaceForm",
			"exec" : function($form,infoObj){_app.ext._store_filter.u.renderSlider($form, infoObj, {MIN:0,MAX:1000});}
			},
			".prom.trends.polka_dots":{
			"filter": "PromDotsForm",
			"exec" : function($form,infoObj){_app.ext._store_filter.u.renderSlider($form, infoObj, {MIN:0,MAX:1000});}
			},
			".prom.trends.sequins":{
			"filter": "PromSequinsForm",
			"exec" : function($form,infoObj){_app.ext._store_filter.u.renderSlider($form, infoObj, {MIN:0,MAX:1000});}
			},
			".prom.trends.vintage":{
			"filter": "PromVintageForm",
			"exec" : function($form,infoObj){_app.ext._store_filter.u.renderSlider($form, infoObj, {MIN:0,MAX:1000});}
			},
			".prom.sale":{
			"filter": "PromSaleForm",
			"exec" : function($form,infoObj){_app.ext._store_filter.u.renderSlider($form, infoObj, {MIN:0,MAX:1000});}
			},
			
			//EVENING PAGES
			".evening.designers.bg_haute":{
			"filter": "EveningBGHauteForm",
			"exec" : function($form,infoObj){_app.ext._store_filter.u.renderSlider($form, infoObj, {MIN:0,MAX:1000});}
			},
			".evening.designers.jasz_couture":{
			"filter": "EveningJaszCoutForm",
			"exec" : function($form,infoObj){_app.ext._store_filter.u.renderSlider($form, infoObj, {MIN:0,MAX:1000});}
			},
			".evening.designers.jovani.":{
			"filter": "EveningJovaniForm",
			"exec" : function($form,infoObj){_app.ext._store_filter.u.renderSlider($form, infoObj, {MIN:0,MAX:1000});}
			},
			".evening.designers.la_femme":{
			"filter": "EveningLaFemmeForm",
			"exec" : function($form,infoObj){_app.ext._store_filter.u.renderSlider($form, infoObj, {MIN:0,MAX:1000});}
			},
			".evening.designers.mac_duggal":{
			"filter": "EveningMacDuggalForm",
			"exec" : function($form,infoObj){_app.ext._store_filter.u.renderSlider($form, infoObj, {MIN:0,MAX:1000});}
			},
			".evening.designers.mignon":{
			"filter": "EveningMignonForm",
			"exec" : function($form,infoObj){_app.ext._store_filter.u.renderSlider($form, infoObj, {MIN:0,MAX:1000});}
			},
			".evening.designers.mnm_couture":{
			"filter": "EveningMnmCoutForm",
			"exec" : function($form,infoObj){_app.ext._store_filter.u.renderSlider($form, infoObj, {MIN:0,MAX:1000});}
			},
			".evening.designers.scala":{
			"filter": "EveningScalaForm",
			"exec" : function($form,infoObj){_app.ext._store_filter.u.renderSlider($form, infoObj, {MIN:0,MAX:1000});}
			},
			".evening.designers.shail_k":{
			"filter": "EveningShailKForm",
			"exec" : function($form,infoObj){_app.ext._store_filter.u.renderSlider($form, infoObj, {MIN:0,MAX:1000});}
			},
			".evening.designers.sherri_hill":{
			"filter": "EveningSherriHillForm",
			"exec" : function($form,infoObj){_app.ext._store_filter.u.renderSlider($form, infoObj, {MIN:0,MAX:1000});}
			},
			".evening.designers.tony_bowls":{
			"filter": "EveningTonyBowlsForm",
			"exec" : function($form,infoObj){_app.ext._store_filter.u.renderSlider($form, infoObj, {MIN:0,MAX:1000});}
			},
			
			".evening.celebrity_inspired":{
			"filter": "EveningCelebForm",
			"exec" : function($form,infoObj){_app.ext._store_filter.u.renderSlider($form, infoObj, {MIN:0,MAX:1000});}
			},
			
			//COCKTAIL PAGES
			".cocktail.designers.faviana":{
			"filter": "CocktailFavianaForm",
			"exec" : function($form,infoObj){_app.ext._store_filter.u.renderSlider($form, infoObj, {MIN:0,MAX:1000});}
			},
			".cocktail.designers.gigi":{
			"filter": "CocktailGigiForm",
			"exec" : function($form,infoObj){_app.ext._store_filter.u.renderSlider($form, infoObj, {MIN:0,MAX:1000});}
			},
			".cocktail.designers.jovani":{
			"filter": "CocktailJovaniForm",
			"exec" : function($form,infoObj){_app.ext._store_filter.u.renderSlider($form, infoObj, {MIN:0,MAX:1000});}
			},
			".cocktail.designers.johnathan_kayne":{
			"filter": "CocktailJohnKayneForm",
			"exec" : function($form,infoObj){_app.ext._store_filter.u.renderSlider($form, infoObj, {MIN:0,MAX:1000});}
			},
			".cocktail.designers.la_femme":{
			"filter": "CocktailLaFemmeForm",
			"exec" : function($form,infoObj){_app.ext._store_filter.u.renderSlider($form, infoObj, {MIN:0,MAX:1000});}
			},
			".cocktail.designers.lm_collection":{
			"filter": "CocktailLMCollectionForm",
			"exec" : function($form,infoObj){_app.ext._store_filter.u.renderSlider($form, infoObj, {MIN:0,MAX:1000});}
			},
			".cocktail.designers.mac_duggal":{
			"filter": "CocktailMacDuggalForm",
			"exec" : function($form,infoObj){_app.ext._store_filter.u.renderSlider($form, infoObj, {MIN:0,MAX:1000});}
			},
			".cocktail.designers.mignon":{
			"filter": "CocktailMignonForm",
			"exec" : function($form,infoObj){_app.ext._store_filter.u.renderSlider($form, infoObj, {MIN:0,MAX:1000});}
			},
			".cocktail.designers.scala":{
			"filter": "CocktailScalaForm",
			"exec" : function($form,infoObj){_app.ext._store_filter.u.renderSlider($form, infoObj, {MIN:0,MAX:1000});}
			},
			".cocktail.designers.shail_k":{
			"filter": "CocktailShailKForm",
			"exec" : function($form,infoObj){_app.ext._store_filter.u.renderSlider($form, infoObj, {MIN:0,MAX:1000});}
			},
			".cocktail.designers.sherri_hill":{
			"filter": "CocktailSherriHillForm",
			"exec" : function($form,infoObj){_app.ext._store_filter.u.renderSlider($form, infoObj, {MIN:0,MAX:1000});}
			},
			
			".cocktail.styles.sequins___beads":{
			"filter": "CocktailSequinBeadForm",
			"exec" : function($form,infoObj){_app.ext._store_filter.u.renderSlider($form, infoObj, {MIN:0,MAX:1000});}
			},
			".cocktail.styles.lace":{
			"filter": "CocktailLaceForm",
			"exec" : function($form,infoObj){_app.ext._store_filter.u.renderSlider($form, infoObj, {MIN:0,MAX:1000});}
			},
			".cocktail.styles.babydoll":{
			"filter": "CocktailBabydollForm",
			"exec" : function($form,infoObj){_app.ext._store_filter.u.renderSlider($form, infoObj, {MIN:0,MAX:1000});}
			},
			".cocktail.styles.high_low":{
			"filter": "CocktailHighLowForm",
			"exec" : function($form,infoObj){_app.ext._store_filter.u.renderSlider($form, infoObj, {MIN:0,MAX:1000});}
			},
			".cocktail.homecoming":{
			"filter": "CocktailHomecomingForm",
			"exec" : function($form,infoObj){_app.ext._store_filter.u.renderSlider($form, infoObj, {MIN:0,MAX:1000});}
			},
			
			//PLUS SIZE PAGES
			".plus_size.designers.fabulouss":{
			"filter": "PlusSizeFabuloussForm",
			"exec" : function($form,infoObj){_app.ext._store_filter.u.renderSlider($form, infoObj, {MIN:0,MAX:1000});}
			},
			".plus_size.designers.faviana":{
			"filter": "PlusSizeFavianaForm",
			"exec" : function($form,infoObj){_app.ext._store_filter.u.renderSlider($form, infoObj, {MIN:0,MAX:1000});}
			},
			".plus_size.designers.night_moves":{
			"filter": "PlusSizeNightMovesForm",
			"exec" : function($form,infoObj){_app.ext._store_filter.u.renderSlider($form, infoObj, {MIN:0,MAX:1000});}
			},
			
			".plus_size.styles.a_line___ballgown":{
			"filter": "PlusSizeALineForm",
			"exec" : function($form,infoObj){_app.ext._store_filter.u.renderSlider($form, infoObj, {MIN:0,MAX:1000});}
			},
			".plus_size.styles.empire":{
			"filter": "PlusSizeEmpireForm",
			"exec" : function($form,infoObj){_app.ext._store_filter.u.renderSlider($form, infoObj, {MIN:0,MAX:1000});}
			},
			".plus_size.styles.mermaid":{
			"filter": "PlusSizeMermaidForm",
			"exec" : function($form,infoObj){_app.ext._store_filter.u.renderSlider($form, infoObj, {MIN:0,MAX:1000});}
			},
			".plus_size.styles.short":{
			"filter": "PlusSizeShortForm",
			"exec" : function($form,infoObj){_app.ext._store_filter.u.renderSlider($form, infoObj, {MIN:0,MAX:1000});}
			},
			
			//PAGEANT PAGES
			".pageant.designers.jasz_couture":{
			"filter": "PageantJaszCoutForm",
			"exec" : function($form,infoObj){_app.ext._store_filter.u.renderSlider($form, infoObj, {MIN:0,MAX:1000});}
			},
			".pageant.designers.jovani":{
			"filter": "PageantJovaniForm",
			"exec" : function($form,infoObj){_app.ext._store_filter.u.renderSlider($form, infoObj, {MIN:0,MAX:1000});}
			},
			".pageant.designers.johnathan_kayne":{
			"filter": "PageantJohnKayneForm",
			"exec" : function($form,infoObj){_app.ext._store_filter.u.renderSlider($form, infoObj, {MIN:0,MAX:1000});}
			},
			".pageant.designers.la_femme":{
			"filter": "PageantLaFemmeForm",
			"exec" : function($form,infoObj){_app.ext._store_filter.u.renderSlider($form, infoObj, {MIN:0,MAX:1000});}
			},
			".pageant.designers.mac_duggal":{
			"filter": "PageantMacDuggalForm",
			"exec" : function($form,infoObj){_app.ext._store_filter.u.renderSlider($form, infoObj, {MIN:0,MAX:1000});}
			},
			".pageant.designers.mnm_couture":{
			"filter": "PageantMnmCoutForm",
			"exec" : function($form,infoObj){_app.ext._store_filter.u.renderSlider($form, infoObj, {MIN:0,MAX:1000});}
			},
			".pageant.designers.sherri_hill":{
			"filter": "PageantSherriHillForm",
			"exec" : function($form,infoObj){_app.ext._store_filter.u.renderSlider($form, infoObj, {MIN:0,MAX:1000});}
			},
			".pageant.designers.tony_bowls":{
			"filter": "PageantTonyBowlsForm",
			"exec" : function($form,infoObj){_app.ext._store_filter.u.renderSlider($form, infoObj, {MIN:0,MAX:1000});}
			},
			
			".pageant.children_s_pageant":{
			"filter": "PageantChildrenForm",
			"exec" : function($form,infoObj){_app.ext._store_filter.u.renderSlider($form, infoObj, {MIN:0,MAX:1000});}
			},
			
			//BRIDAL PAGES
			".bridal":{
			"filter": "BridalForm",
			"exec" : function($form,infoObj){_app.ext._store_filter.u.renderSlider($form, infoObj, {MIN:0,MAX:1000});}
			},
			
			//IN STOCK PAGES
			".in_stock":{
			"filter": "InStockForm",
			"exec" : function($form,infoObj){_app.ext._store_filter.u.renderSlider($form, infoObj, {MIN:0,MAX:1000});}
			},
			
			//ACCESSORIES PAGES
			/*
			".accessories.shoes.touch_ups":{
			"filter": "AccessoriesForm",
			"exec" : function($form,infoObj){_app.ext._store_filter.u.renderSlider($form, infoObj, {MIN:0,MAX:1000});}
			},
			".accessories.shoes.coloriffics":{
			"filter": "AccessoriesForm",
			"exec" : function($form,infoObj){_app.ext._store_filter.u.renderSlider($form, infoObj, {MIN:0,MAX:1000});}
			},
			
			".accessories.jewelry":{
			"filter": "AccessoriesForm",
			"exec" : function($form,infoObj){_app.ext._store_filter.u.renderSlider($form, infoObj, {MIN:0,MAX:1000});}
			},
			
			".accessories.under_the_dress.bra_cups":{
			"filter": "AccessoriesForm",
			"exec" : function($form,infoObj){_app.ext._store_filter.u.renderSlider($form, infoObj, {MIN:0,MAX:1000});}
			},
			".accessories.under_the_dress.shapewear":{
			"filter": "AccessoriesForm",
			"exec" : function($form,infoObj){_app.ext._store_filter.u.renderSlider($form, infoObj, {MIN:0,MAX:1000});}
			},
			*/
			
			
			
		},

					////////////////////////////////////   CALLBACKS    \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\



	callbacks : {
//callbacks.init need to return either a true or a false, depending on whether or not the file will execute properly based on store account configuration. Use this for any config or dependencies that need to occur.
//the callback is auto-executed as part of the extensions loading process.
		init : {
			onSuccess : function()	{
//				_app.u.dump('BEGIN _app.ext.store_navcats.init.onSuccess ');
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
					_app.u.dump("WARNING! could not detect .ui-slider class within fieldset for slider filter.");
					}
				return r;
				}, //slider
			hidden : function($fieldset){
				return _app.ext._store_filter.u.buildElasticTerms($("input:hidden",$fieldset),$fieldset.attr('data-elastic-key'));
				},
			hiddenOr : function($fieldset){
				var r = {"or":[]};
				$("input:hidden",$fieldset).each(function(){
					r.or.push(_app.ext._store_filter.u.buildElasticTerms($(this),$fieldset.attr('data-elastic-key')));
					});
				return r;
				},
			checkboxes : function($fieldset)	{
				return _app.ext._store_filter.u.buildElasticTerms($(':checked',$fieldset),$fieldset.attr('data-elastic-key'));
				} //checkboxes
			
			}, //getFilterObj




////////////////////////////////////   Actions    \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\


		a : {
			
			execFilter : function($form,$page){

_app.u.dump("BEGIN store_filter.a.filter");
var $prodlist = $("[data-app-role='productList']",$page).first().empty();


$('.categoryList',$page).hide(); //hide any subcategory lists in the main area so customer can focus on results
$('.categoryText',$page).hide(); //hide any text blocks.

if(_app.ext._store_filter.u.validateFilterProperties($form))	{
//	_app.u.dump(" -> validated Filter Properties.")
	var query = {
		"mode":"elastic-search",
		"size":300,
		"filter" : _app.ext._store_filter.u.buildElasticFilters($form),
		}//query
//	_app.u.dump(" -> Query: "); _app.u.dump(query);
	if(query.filter.and.length > 0)	{
		$prodlist.addClass('loadingBG');
		_app.ext.store_search.calls.appPublicProductSearch.init(query,{'callback':function(rd){

			if(_app.model.responseHasErrors(rd)){
				$page.anymessage({'message':rd});
				}
			else	{
				var L = _app.data[rd.datapointer]['_count'];
				$prodlist.removeClass('loadingBG')
				if(L == 0)	{
					$page.anymessage({"message":"Your query returned zero results."});
					}
				else	{
					$prodlist.append(_app.ext.store_search.u.getElasticResultsAsJQObject(rd));
					}
				}
			
			},'datapointer':'appPublicSearch|elasticFiltering',
			'templateID': $form.data('loadstemplate') || 'productListTemplateResults'
			});
			_app.u.dump(JSON.stringify(query));
		_app.model.dispatchThis();
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
				toggleShowHidePriceFilter : function($context){
					if($('.filterPriceCat').data('collapseOrExpanded') === true){
						$('.filterCategoryCont', '.filterPriceCat').slideUp(1000);
						$('.filterCatTitle', '.filterPriceCat').css("background-image","url(Images/categorypage/filteredsearch/catbarclosed.png)");
						$('.filterPriceCat').data('collapseOrExpanded',false).append();
						setTimeout(function($context){
							var sidebar = $('.catProdListSidebar', $context).height();
							//_app.u.dump("sidebar = " + sidebar);
							var banner = $('.carouselCPBannerList ', $context).height();
							//_app.u.dump("banner = " + banner);
							if(banner == 0){
								//_app.u.dump("No banner detected. Reducing ghost cell size");
								var ghostCell = sidebar - 55;
							}
							else{
								//_app.u.dump("Banner detected. Increasing ghost cell size");
								var ghostCell = sidebar - banner - 55;
							}
							//_app.u.dump("ghostCell = " + sidebar + " " + banner + "- 405");
							$(".catGhostCell", $context).css("height",ghostCell);
						}, 1100);
					}
					else{
						$('.filterCategoryCont', '.filterPriceCat').slideDown(1000);
						$('.filterCatTitle', '.filterPriceCat').css("background-image","url(Images/categorypage/filteredsearch/catbaropen.png)");
						$('.filterPriceCat').data('collapseOrExpanded',true).append();
						setTimeout(function($context){
							var sidebar = $('.catProdListSidebar', $context).height();
							//_app.u.dump("sidebar = " + sidebar);
							var banner = $('.carouselCPBannerList ', $context).height();
							//_app.u.dump("banner = " + banner);
							if(banner == 0){
								//_app.u.dump("No banner detected. Reducing ghost cell size");
								var ghostCell = sidebar - 55;
							}
							else{
								//_app.u.dump("Banner detected. Increasing ghost cell size");
								var ghostCell = sidebar - banner - 55;
							}
							//_app.u.dump("ghostCell = " + sidebar + " " + banner + "- 405");
							$(".catGhostCell", $context).css("height",ghostCell);
						}, 1100);
					}
				},
				
				toggleShowHideDressTypeFilter : function($context){
					if($('.filterDressTypeCat').data('collapseOrExpanded') === true){
						$('.filterCategoryCont', '.filterDressTypeCat').slideUp(1000);
						$('.filterCatTitle', '.filterDressTypeCat').css("background-image","url(Images/categorypage/filteredsearch/catbarclosed.png)");
						$('.filterDressTypeCat').data('collapseOrExpanded',false).append();
						setTimeout(function($context){
							var sidebar = $('.catProdListSidebar', $context).height();
							//_app.u.dump("sidebar = " + sidebar);
							var banner = $('.carouselCPBannerList ', $context).height();
							//_app.u.dump("banner = " + banner);
							if(banner == 0){
								//_app.u.dump("No banner detected. Reducing ghost cell size");
								var ghostCell = sidebar - 55;
							}
							else{
								//_app.u.dump("Banner detected. Increasing ghost cell size");
								var ghostCell = sidebar - banner - 55;
							}
							//_app.u.dump("ghostCell = " + sidebar + " " + banner + "- 405");
							$(".catGhostCell", $context).css("height",ghostCell);
						}, 1100);
					}
					else{
						$('.filterCategoryCont', '.filterDressTypeCat').slideDown(1000);
						$('.filterCatTitle', '.filterDressTypeCat').css("background-image","url(Images/categorypage/filteredsearch/catbaropen.png)");
						$('.filterDressTypeCat').data('collapseOrExpanded',true).append();
						setTimeout(function($context){
							var sidebar = $('.catProdListSidebar', $context).height();
							//_app.u.dump("sidebar = " + sidebar);
							var banner = $('.carouselCPBannerList ', $context).height();
							//_app.u.dump("banner = " + banner);
							if(banner == 0){
								//_app.u.dump("No banner detected. Reducing ghost cell size");
								var ghostCell = sidebar - 55;
							}
							else{
								//_app.u.dump("Banner detected. Increasing ghost cell size");
								var ghostCell = sidebar - banner - 55;
							}
							//_app.u.dump("ghostCell = " + sidebar + " " + banner + "- 405");
							$(".catGhostCell", $context).css("height",ghostCell);
						}, 1100);
					}
				},
				
				toggleShowHideDesignerFilter : function($context){
					if($('.filterDesignerCat').data('collapseOrExpanded') === true){
						$('.filterCategoryCont', '.filterDesignerCat').slideUp(1000);
						$('.filterCatTitle', '.filterDesignerCat').css("background-image","url(Images/categorypage/filteredsearch/catbarclosed.png)");
						$('.filterDesignerCat').data('collapseOrExpanded',false).append();
						setTimeout(function($context){
							var sidebar = $('.catProdListSidebar', $context).height();
							//_app.u.dump("sidebar = " + sidebar);
							var banner = $('.carouselCPBannerList ', $context).height();
							//_app.u.dump("banner = " + banner);
							if(banner == 0){
								//_app.u.dump("No banner detected. Reducing ghost cell size");
								var ghostCell = sidebar - 55;
							}
							else{
								//_app.u.dump("Banner detected. Increasing ghost cell size");
								var ghostCell = sidebar - banner - 55;
							}
							//_app.u.dump("ghostCell = " + sidebar + " " + banner + "- 405");
							$(".catGhostCell", $context).css("height",ghostCell);
						}, 1100);
					}
					else{
						$('.filterCategoryCont', '.filterDesignerCat').slideDown(1000);
						$('.filterCatTitle', '.filterDesignerCat').css("background-image","url(Images/categorypage/filteredsearch/catbaropen.png)");
						$('.filterDesignerCat').data('collapseOrExpanded',true).append();
						setTimeout(function($context){
							var sidebar = $('.catProdListSidebar', $context).height();
							//_app.u.dump("sidebar = " + sidebar);
							var banner = $('.carouselCPBannerList ', $context).height();
							//_app.u.dump("banner = " + banner);
							if(banner == 0){
								//_app.u.dump("No banner detected. Reducing ghost cell size");
								var ghostCell = sidebar - 55;
							}
							else{
								//_app.u.dump("Banner detected. Increasing ghost cell size");
								var ghostCell = sidebar - banner - 55;
							}
							//_app.u.dump("ghostCell = " + sidebar + " " + banner + "- 405");
							$(".catGhostCell", $context).css("height",ghostCell);
						}, 1100);
					}
				},
				
				toggleShowHideColorFilter : function(){
					if($('.filterColorCat').data('collapseOrExpanded') === true){
						$('.filterCategoryCont', '.filterColorCat').slideUp(1000);
						$('.filterCatTitle', '.filterColorCat').css("background-image","url(Images/categorypage/filteredsearch/catbarclosed.png)");
						$('.filterColorCat').data('collapseOrExpanded',false).append();
						setTimeout(function($context){
							var sidebar = $('.catProdListSidebar', $context).height();
							//_app.u.dump("sidebar = " + sidebar);
							var banner = $('.carouselCPBannerList ', $context).height();
							//_app.u.dump("banner = " + banner);
							if(banner == 0){
								//_app.u.dump("No banner detected. Reducing ghost cell size");
								var ghostCell = sidebar - 55;
							}
							else{
								//_app.u.dump("Banner detected. Increasing ghost cell size");
								var ghostCell = sidebar - banner - 55;
							}
							//_app.u.dump("ghostCell = " + sidebar + " " + banner + "- 405");
							$(".catGhostCell", $context).css("height",ghostCell);
						}, 1100);
					}
					else{
						$('.filterCategoryCont', '.filterColorCat').slideDown(1000);
						$('.filterCatTitle', '.filterColorCat').css("background-image","url(Images/categorypage/filteredsearch/catbaropen.png)");
						$('.filterColorCat').data('collapseOrExpanded',true).append();
						setTimeout(function($context){
							var sidebar = $('.catProdListSidebar', $context).height();
							//_app.u.dump("sidebar = " + sidebar);
							var banner = $('.carouselCPBannerList ', $context).height();
							//_app.u.dump("banner = " + banner);
							if(banner == 0){
								//_app.u.dump("No banner detected. Reducing ghost cell size");
								var ghostCell = sidebar - 55;
							}
							else{
								//app.u.dump("Banner detected. Increasing ghost cell size");
								var ghostCell = sidebar - banner - 55;
							}
							//_app.u.dump("ghostCell = " + sidebar + " " + banner + "- 405");
							$(".catGhostCell", $context).css("height",ghostCell);
						}, 1100);
					}
				},
				
				toggleShowHideHemlineFilter : function(){
					if($('.filterHemlineCat').data('collapseOrExpanded') === true){
						$('.filterCategoryCont', '.filterHemlineCat').slideUp(1000);
						$('.filterCatTitle', '.filterHemlineCat').css("background-image","url(Images/categorypage/filteredsearch/catbarclosed.png)");
						$('.filterHemlineCat').data('collapseOrExpanded',false).append();
						setTimeout(function($context){
							var sidebar = $('.catProdListSidebar', $context).height();
							//_app.u.dump("sidebar = " + sidebar);
							var banner = $('.carouselCPBannerList ', $context).height();
							//_app.u.dump("banner = " + banner);
							if(banner == 0){
								//_app.u.dump("No banner detected. Reducing ghost cell size");
								var ghostCell = sidebar - 55;
							}
							else{
								//_app.u.dump("Banner detected. Increasing ghost cell size");
								var ghostCell = sidebar - banner - 55;
							}
							//_app.u.dump("ghostCell = " + sidebar + " " + banner + "- 405");
							$(".catGhostCell", $context).css("height",ghostCell);
						}, 1100);
					}
					else{
						$('.filterCategoryCont', '.filterHemlineCat').slideDown(1000);
						$('.filterCatTitle', '.filterHemlineCat').css("background-image","url(Images/categorypage/filteredsearch/catbaropen.png)");
						$('.filterHemlineCat').data('collapseOrExpanded',true).append();
						setTimeout(function($context){
							var sidebar = $('.catProdListSidebar', $context).height();
							//_app.u.dump("sidebar = " + sidebar);
							var banner = $('.carouselCPBannerList ', $context).height();
							//_app.u.dump("banner = " + banner);
							if(banner == 0){
								//_app.u.dump("No banner detected. Reducing ghost cell size");
								var ghostCell = sidebar - 55;
							}
							else{
								//_app.u.dump("Banner detected. Increasing ghost cell size");
								var ghostCell = sidebar - banner - 55;
							}
							//_app.u.dump("ghostCell = " + sidebar + " " + banner + "- 405");
							$(".catGhostCell", $context).css("height",ghostCell);
						}, 1100);
					}
				},
				
				toggleShowHideSilhouetteFilter : function(){
					if($('.filterSilhouetteCat').data('collapseOrExpanded') === true){
						$('.filterCategoryCont', '.filterSilhouetteCat').slideUp(1000);
						$('.filterCatTitle', '.filterSilhouetteCat').css("background-image","url(Images/categorypage/filteredsearch/catbarclosed.png)");
						$('.filterSilhouetteCat').data('collapseOrExpanded',false).append();
						setTimeout(function($context){
							var sidebar = $('.catProdListSidebar', $context).height();
							//_app.u.dump("sidebar = " + sidebar);
							var banner = $('.carouselCPBannerList ', $context).height();
							//_app.u.dump("banner = " + banner);
							if(banner == 0){
								//_app.u.dump("No banner detected. Reducing ghost cell size");
								var ghostCell = sidebar - 55;
							}
							else{
								//_app.u.dump("Banner detected. Increasing ghost cell size");
								var ghostCell = sidebar - banner - 55;
							}
							//_app.u.dump("ghostCell = " + sidebar + " " + banner + "- 405");
							$(".catGhostCell", $context).css("height",ghostCell);
						}, 1100);
					}
					else{
						$('.filterCategoryCont', '.filterSilhouetteCat').slideDown(1000);
						$('.filterCatTitle', '.filterSilhouetteCat').css("background-image","url(Images/categorypage/filteredsearch/catbaropen.png)");
						$('.filterSilhouetteCat').data('collapseOrExpanded',true).append();
						setTimeout(function($context){
							var sidebar = $('.catProdListSidebar', $context).height();
							//_app.u.dump("sidebar = " + sidebar);
							var banner = $('.carouselCPBannerList ', $context).height();
							//_app.u.dump("banner = " + banner);
							if(banner == 0){
								//_app.u.dump("No banner detected. Reducing ghost cell size");
								var ghostCell = sidebar - 55;
							}
							else{
								//_app.u.dump("Banner detected. Increasing ghost cell size");
								var ghostCell = sidebar - banner - 55;
							}
							//_app.u.dump("ghostCell = " + sidebar + " " + banner + "- 405");
							$(".catGhostCell", $context).css("height",ghostCell);
						}, 1100);
					}
				},
				
				toggleShowHideNecklineFilter : function(){
					if($('.filterNecklineCat').data('collapseOrExpanded') === true){
						$('.filterCategoryCont', '.filterNecklineCat').slideUp(1000);
						$('.filterCatTitle', '.filterNecklineCat').css("background-image","url(Images/categorypage/filteredsearch/catbarclosed.png)");
						$('.filterNecklineCat').data('collapseOrExpanded',false).append();
						setTimeout(function($context){
							var sidebar = $('.catProdListSidebar', $context).height();
							//_app.u.dump("sidebar = " + sidebar);
							var banner = $('.carouselCPBannerList ', $context).height();
							//_app.u.dump("banner = " + banner);
							if(banner == 0){
								//_app.u.dump("No banner detected. Reducing ghost cell size");
								var ghostCell = sidebar - 55;
							}
							else{
								//_app.u.dump("Banner detected. Increasing ghost cell size");
								var ghostCell = sidebar - banner - 55;
							}
							//_app.u.dump("ghostCell = " + sidebar + " " + banner + "- 405");
							$(".catGhostCell", $context).css("height",ghostCell);
						}, 1100);
					}
					else{
						$('.filterCategoryCont', '.filterNecklineCat').slideDown(1000);
						$('.filterCatTitle', '.filterNecklineCat').css("background-image","url(Images/categorypage/filteredsearch/catbaropen.png)");
						$('.filterNecklineCat').data('collapseOrExpanded',true).append();
						setTimeout(function($context){
							var sidebar = $('.catProdListSidebar', $context).height();
							//_app.u.dump("sidebar = " + sidebar);
							var banner = $('.carouselCPBannerList ', $context).height();
							//_app.u.dump("banner = " + banner);
							if(banner == 0){
								//_app.u.dump("No banner detected. Reducing ghost cell size");
								var ghostCell = sidebar - 55;
							}
							else{
								//_app.u.dump("Banner detected. Increasing ghost cell size");
								var ghostCell = sidebar - banner - 55;
							}
							//_app.u.dump("ghostCell = " + sidebar + " " + banner + "- 405");
							$(".catGhostCell", $context).css("height",ghostCell);
						}, 1100);
					}
				},
				
				toggleShowHideSaleFilter : function(){
					if($('.filterSaleCat').data('collapseOrExpanded') === true){
						$('.filterCategoryCont', '.filterSaleCat').slideUp(1000);
						$('.filterCatTitle', '.filterSaleCat').css("background-image","url(Images/categorypage/filteredsearch/catbarclosed.png)");
						$('.filterSaleCat').data('collapseOrExpanded',false).append();
						setTimeout(function($context){
							var sidebar = $('.catProdListSidebar', $context).height();
							//_app.u.dump("sidebar = " + sidebar);
							var banner = $('.carouselCPBannerList ', $context).height();
							//_app.u.dump("banner = " + banner);
							if(banner == 0){
								//_app.u.dump("No banner detected. Reducing ghost cell size");
								var ghostCell = sidebar - 55;
							}
							else{
								//_app.u.dump("Banner detected. Increasing ghost cell size");
								var ghostCell = sidebar - banner - 55;
							}
							//_app.u.dump("ghostCell = " + sidebar + " " + banner + "- 405");
							$(".catGhostCell", $context).css("height",ghostCell);
						}, 1100);
					}
					else{
						$('.filterCategoryCont', '.filterSaleCat').slideDown(1000);
						$('.filterCatTitle', '.filterSaleCat').css("background-image","url(Images/categorypage/filteredsearch/catbaropen.png)");
						$('.filterSaleCat').data('collapseOrExpanded',true).append();
						setTimeout(function($context){
							var sidebar = $('.catProdListSidebar', $context).height();
							//_app.u.dump("sidebar = " + sidebar);
							var banner = $('.carouselCPBannerList ', $context).height();
							//_app.u.dump("banner = " + banner);
							if(banner == 0){
								//_app.u.dump("No banner detected. Reducing ghost cell size");
								var ghostCell = sidebar - 55;
							}
							else{
								//_app.u.dump("Banner detected. Increasing ghost cell size");
								var ghostCell = sidebar - banner - 55;
							}
							//_app.u.dump("ghostCell = " + sidebar + " " + banner + "- 405");
							$(".catGhostCell", $context).css("height",ghostCell);
						}, 1100);
					}
				},
				
				toggleShowHideTrendFilter : function(){
					if($('.filterTrendsCat').data('collapseOrExpanded') === true){
						$('.filterCategoryCont', '.filterTrendsCat').slideUp(1000);
						$('.filterCatTitle', '.filterTrendsCat').css("background-image","url(Images/categorypage/filteredsearch/catbarclosed.png)");
						$('.filterTrendsCat').data('collapseOrExpanded',false).append();
						setTimeout(function($context){
							var sidebar = $('.catProdListSidebar', $context).height();
							//_app.u.dump("sidebar = " + sidebar);
							var banner = $('.carouselCPBannerList ', $context).height();
							//_app.u.dump("banner = " + banner);
							if(banner == 0){
								//_app.u.dump("No banner detected. Reducing ghost cell size");
								var ghostCell = sidebar - 55;
							}
							else{
								//_app.u.dump("Banner detected. Increasing ghost cell size");
								var ghostCell = sidebar - banner - 55;
							}
							//_app.u.dump("ghostCell = " + sidebar + " " + banner + "- 405");
							$(".catGhostCell", $context).css("height",ghostCell);
						}, 1100);
					}
					else{
						$('.filterCategoryCont', '.filterTrendsCat').slideDown(1000);
						$('.filterCatTitle', '.filterTrendsCat').css("background-image","url(Images/categorypage/filteredsearch/catbaropen.png)");
						$('.filterTrendsCat').data('collapseOrExpanded',true).append();
						setTimeout(function($context){
							var sidebar = $('.catProdListSidebar', $context).height();
							//_app.u.dump("sidebar = " + sidebar);
							var banner = $('.carouselCPBannerList ', $context).height();
							//_app.u.dump("banner = " + banner);
							if(banner == 0){
								//_app.u.dump("No banner detected. Reducing ghost cell size");
								var ghostCell = sidebar - 55;
							}
							else{
								//_app.u.dump("Banner detected. Increasing ghost cell size");
								var ghostCell = sidebar - banner - 55;
							}
							//_app.u.dump("ghostCell = " + sidebar + " " + banner + "- 405");
							$(".catGhostCell", $context).css("height",ghostCell);
						}, 1100);
					}
				},
				
				catProdListFilterExpandContract : function($context){
					//_app.u.dump(context);
					var sidebar = $('.catProdListSidebar', $context).height();
					//_app.u.dump("sidebar = " + sidebar);
					var banner = $('.carouselCPBannerList ', $context).height();
					//_app.u.dump("banner = " + banner);
					if(banner == 0){
						//_app.u.dump("No banner detected. Reducing ghost cell size");
						var ghostCell = sidebar - 55;
					}
					else{
						//_app.u.dump("Banner detected. Increasing ghost cell size");
						var ghostCell = sidebar - banner - 55;
					}
					//_app.u.dump("ghostCell = " + sidebar + " " + banner + "- 405");
					$('.catGhostCell', $context).data('heightVal', ghostCell).append();
					$(".catGhostCell", $context).css("height",ghostCell);
					
					if($('.catProdListSidebar', $context).data('collapseOrExpanded') === true){
						//$('.catProdListSidebar', $context).hide("slide", {direction: "left" }, 1000);
						$('.catProdListSidebar', $context).slideUp(1000);
						//$('.searchTab', $context).slideDown(1000);
						$(".productList", $context).css("width","100%");
						//$(".productList", $context).css("margin-right","20px");
						$('.catGhostCell', $context).hide();
						$('.catProdListSidebar', $context).data('collapseOrExpanded',false).append();
					}
					else{
						//$('.catProdListSidebar', $context).show("slide", { direction: "left" }, 1000);
						$('.catProdListSidebar', $context).slideDown(1000);
						//$('.searchTab', $context).slideUp(1000);
						$(".productList", $context).css("width","auto");
						//$(".productList", $context).css("margin-right","0");
						$('.catGhostCell', $context).show();
						$('.catProdListSidebar', $context).data('collapseOrExpanded',true).append();
					}
				},
				
				showFilterResultsOnPriceChange : function($context){
					//Make all altering of the price slider submit the form and show results list.
						$context.submit(); 
						//_app.u.dump("The price slider was moved.");
						$("#resultsProductListContainer",$context).hide();  
		
						$group1 = $('.fsCheckbox',$context);
						$priceGroup = $( ".sliderValue",$context ).val().toString();
						
						if($(".sliderValue",$context).val() == "$0 - $1000"){
							//_app.u.dump("Price slider is set to stock. Checking For filter options being checked.");
							if($group1.filter(':checked').length === 0){
								//_app.u.dump("No filter options checked. Showing stock product list.");
								$(".nativeProductList", ($context.parent().parent().parent())).show(); 
								$(".searchFilterResults", ($context.parent().parent().parent())).hide(); 
							}
							else{
								//_app.u.dump("One or more filter options were checked. Still showing filter search results.");
							}
						}
						else{
							//_app.u.dump("Price slider is set to custom value. Showing Search results.");
							$(".nativeProductList", ($context.parent().parent().parent())).hide(); 
							$(".searchFilterResults", ($context.parent().parent().parent())).show();  
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
					else if(typeof _app.ext._store_filter.getElasticFilter[filterType] != 'function')	{
						r = false;
						$form.anymessage({"message":"WARNING! type ["+filterType+"] has no matching getElasticFilter function. [typoof: "+typeof _app.ext._store_filter.getElasticFilter[filterType]+"]",gMessage:true});
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
	filter = _app.ext._store_filter.getElasticFilter[$fieldset.attr('data-filtertype')]($fieldset);
	if(filter)	{
		filters.and.push(filter);
		}
	});

	filters.and.push({'not':{'term':{'prod_outofstock':'1'}}});

//and requires at least 2 inputs, so add a match_all.
//if there are no filters, don't add it. the return is also used to determine if any filters are present
 	if(filters.and.length == 1)	{
		filters.and.push({match_all:{}})
 		}
		_app.u.dump("$( '.sliderValue',$form ).val() = " + $( ".sliderValue",$form ).val())

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
				}, //renderSlider
				
			
			
			startFilterSearch : function($context,infoObj) {
				_app.u.dump("BEGIN categoryTemplate onCompletes for filtering");
				if(_app.ext._store_filter.filterMap[infoObj.navcat])	{
					_app.u.dump(" -> safe id DOES have a filter.");
					dump(infoObj);

					//check if the filter form exists in the container, if yes move along, re-render if not. was done this way 
					//because all forms but the one on a page were getting nuked when the page was left, leaving only one form in the container. 
					var $formContainer = $("[data-filter-forms='search']");
					if($("[name='"+_app.ext._store_filter.filterMap[infoObj.navcat].filter+"']",$formContainer).length) {}
						else { $formContainer.empty().tlc({verb:"transmogrify", templateid:"appFilters"}); 
					}

		//			var $page = $(_app.u.jqSelector('#',infoObj.parentID));
					_app.u.dump(" -> $context.length: "+$context.length);
					if($context.data('filterAdded'))	{_app.u.dump("filter exists skipping form add");} //filter is already added, don't add again.
					else {
						$context.attr('data-filterAdded',true)
		// TODO : GET FILTERS OUT OF INDEX.HTML AND INTO TEMPLATES.HTML
						var $form = $("[name='"+_app.ext._store_filter.filterMap[infoObj.navcat].filter+"']",'.appFilters').clone().appendTo($('.catProdListSidebar',$context));
						$form.on('submit.filterSearch',function(event){
							event.preventDefault()
							_app.u.dump(" -> Filter form submitted.");
							_app.ext._store_filter.a.execFilter($form,$context);
								//put a hold on infinite product list and hide loadingBG for it
							$context.find("[data-app-role='productList']").data('filtered',true);
							$context.find("[data-app-role='infiniteProdlistLoadIndicator']").hide();
						});

						if(typeof _app.ext._store_filter.filterMap[infoObj.navcat].exec == 'function') {
							_app.ext._store_filter.filterMap[infoObj.navcat].exec($form,infoObj)
						}

						//make all the checkboxes auto-submit the form.
						$(":checkbox",$form).off('click.formSubmit').on('click.formSubmit',function() {
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
					}
				}
					
				//selector for reset button to reload page
				$('.resetButton', $context).click(function(){
					$('.fsCheckbox', $context).attr('checked', false);
					$(".nativeProductList", $context).show(); 
					$(".searchFilterResults", $context).hide();    
				});
			}

			} //u


		
		} //r object.
	return r;
	}
