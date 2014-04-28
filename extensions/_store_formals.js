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

var _store_formals = function() {
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
					app.u.dump('BEGIN app.ext_store_formals.callbacks.init.onSuccess');
				},
				onError : function() {
					app.u.dump('BEGIN app.ext_store_formals.callbacks.init.onError');
				}
			},
			startExtension : {
				onSuccess : function (){
					app.u.dump('BEGIN app.ext_store_formals.callbacks.startExtension.onSuccess')
				},
				onError : function (){
					app.u.dump('BEGIN app_store_formals.callbacks.startExtension.onError');
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
				//app.u.dump("mouse over function successully ran.")
				$(".homepageCatTitleBar", $tag).css({'background-color':'rgba(230,22,82,.5)'});
				$(".homepageCatTitle", $tag).css({'color':'white'});
			},
			homepageCategoryMouseOut : function($tag) {
				//app.u.dump("mouse over function successully ran.")
				$(".homepageCatTitleBar", $tag).css({'background':'none'});
				$(".homepageCatTitleBar", $tag).css({'background-color':'rgba(900,900,900,.8)'});
				$(".homepageCatTitle", $tag).css({'color':'#333333'});
			},
			homepageSubCatMouseOver : function($tag) {
				//app.u.dump("mouse over function successully ran.")
				$(".homepageSubCatTitleBar", $tag).css({'background-color':'rgba(230,22,82,.5)'});
				$(".homepageSubCatTitle", $tag).css({'color':'white'});
			},
			homepageSubCatMouseOut : function($tag) {
				//app.u.dump("mouse over function successully ran.")
				$(".homepageSubCatTitleBar", $tag).css({'background-color':'rgba(900,900,900,.8)'});
				$(".homepageSubCatTitle", $tag).css({'color':'#333333'});
			},
			
			homepageCarouselProdItemMouseOver : function($tag) {
				//app.u.dump("mouse over function successully ran.")
				$tag.css({'border':'10px solid #e61652'});
				//$(".productItemInfo", $tag).css({'background-color':'rgba(230,22,82,.5)'});
				$(".productItemInfoContent", $tag).hide();
				$(".productItemInfoMoreInfo", $tag).show();
			},
			homepageCarouselProdItemMouseOut : function($tag) {
				//app.u.dump("mouse over function successully ran.")
				$tag.css({'border':'10px solid white'});
				//$(".productItemInfo", $tag).css({'background-color':'rgba(900,900,900,.8)'});
				$(".productItemInfoContent", $tag).show();
				$(".productItemInfoMoreInfo", $tag).hide();
			},
			
			categorySubCatMouseOver : function($tag) {
				//app.u.dump("mouse over function successully ran.")
				$(".homepageSubCatTitleBar", $tag).css({'background-color':'rgba(230,22,82,.5)'});
				$(".catName", $tag).css({'color':'white'});	
			},
			categorySubCatMouseOut : function($tag) {
				//app.u.dump("mouse over function successully ran.")
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

					if(app.u.isValidEmail(email) == false){
							errors += "Please provide a valid email address<br \/>";
							}
					if(!password)        {
							errors += "Please provide your password<br \/>";
							}
					if(errors == ''){
							app.calls.appBuyerLogin.init({"login":email,"password":password},{'callback':'authenticateBuyer','extension':'myRIA'});
							app.calls.refreshCart.init({},'immutable'); //cart needs to be updated as part of authentication process.
//                                        app.calls.buyerProductLists.init('forgetme',{'callback':'handleForgetmeList','extension':'store_prodlist'},'immutable');
							app.model.dispatchThis('immutable');
							}
					else {
							$errorDiv.anymessage({'message':errors});
							}
					showContent('customer',{'show':'myaccount'})
			}, //loginFrmSubmit
			
			collapseExpandFAQ : function($tagContext){
				if($(".faqContentCont", $tagContext).is(':hidden')){
					$(".faqContentCont", $tagContext).data('collapseExpand',false).append();
					//app.u.dump("collapseExpand Data did not exist for this drop down. Created it.");
					//app.u.dump($(".faqContentCont", $tagContext).data('collapseExpand'));

				}
				else{
				}
				
				if ($(".faqContentCont", $tagContext).data('collapseExpand') === false){
					$(".faqContentCont", $tagContext).slideDown(1000);
					$(".faqContentCont", $tagContext).data('collapseExpand',true).append();
					//app.u.dump("FAQ was hidden. Now showing.");
				}
				else{
					$(".faqContentCont", $tagContext).slideUp(1000);
					$(".faqContentCont", $tagContext).data('collapseExpand',false).append();
					//app.u.dump("FAQ was showing. Now hidden.");
				}
			} //END collapseExpandFAQ
			 
		},//END a FUNCTIONS
		
		u : {
			
			handleAppLoginCreate : function($form)        {
                                if($form)        {
                                        var formObj = $form.serializeJSON();
                                        
                                        if(formObj.pass !== formObj.pass2) {
                                                app.u.throwMessage('Sorry, your passwords do not match! Please re-enter your password');
                                                return;
                                        }
                                        
                                        var tagObj = {
                                                'callback':function(rd) {
                                                        if(app.model.responseHasErrors(rd)) {
                                                                $form.anymessage({'message':rd});
                                                        }
                                                        else {
                                                                showContent('customer',{'show':'myaccount'});
                                                                app.u.throwMessage(app.u.successMsgObject("Your account has been created!"));
                                                        }
                                                }
                                        }
                                        
                                        formObj._vendor = "onlineformals";
                                        app.calls.appBuyerCreate.init(formObj,tagObj,'immutable');
                                        app.model.dispatchThis('immutable');
                                }
                                else {
                                        $('#globalMessaging').anymessage({'message':'$form not passed into _store_formals.u.handleBuyerAccountCreate','gMessage':true});
                                }
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
//			app.u.dump('BEGIN view.formats.money');
			var amount = data.bindData.isElastic ? (data.value / 100) : data.value;
			if(amount)	{
				var r,o,sr;
				r = app.u.formatMoney(amount,data.bindData.currencySign,'',data.bindData.hideZero);
//					app.u.dump(' -> attempting to use var. value: '+data.value);
//					app.u.dump(' -> currencySign = "'+data.bindData.currencySign+'"');

//				**SPAN IS APPENDED TO ALL OF THE PRICE TEXT, RATHER THAN JUST THE CENTS**
				if(r.substr(0,1))	{
//					app.u.dump(' -> r = '+r);
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
			
			vimeoVideo : function($tag,data){
			var width = data.bindData.width ? data.bindData.width : 440
			var height = data.bindData.height ? data.bindData.height : 275
			var r = "<iframe width='"+width+"' height='"+height+"' src='"+(document.location.protocol === 'https:' ? 'https:' : 'http:')+"//player.vimeo.com/video/"+data.value+"' frameborder='0' webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>";
			$tag.append(r);
			} //END vimeoVideo
			
		}
	}
	return r;
}