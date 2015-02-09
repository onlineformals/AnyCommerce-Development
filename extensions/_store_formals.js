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

var _store_formals = function (_app) {
	var r = {
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
				
				".cocktail.homecoming" : "categoryProductListTemplate",
				
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
			}
		},
		
		calls : {

		appBuyerCreate : {
			init : function(obj,_tag)	{
				this.dispatch(obj,_tag);
				return 1;
				},
			dispatch : function(obj,_tag){
				obj._tag = _tag || {};
				obj._cmd = "appBuyerCreate";
				_app.model.addDispatchToQ(obj,'immutable');
				}
			} //appBuyerCreate
		},
		
		callbacks : {
			init : {
				onSuccess : function(){
					_app.u.dump('BEGIN _app.ext_store_formals.callbacks.init.onSuccess');
					//_app.globalAjax.numRequestsPerPipe = 25;
					//dump("_app.globalAjax.numRequestsPerPipe = ");
					//dump(_app.globalAjax.numRequestsPerPipe);
					//_app.ext._store_formals.u.bindOnclick();
					
					
										
				},
				onError : function() {
					_app.u.dump('BEGIN _app.ext_store_formals.callbacks.init.onError');
				}
			},
			startExtension : {
				onSuccess : function (){
					_app.u.dump('BEGIN _app.ext_store_formals.callbacks.startExtension.onSuccess');
					
					//replacement for bindByAnchor href to make crawlable links. Currently used mainly on sitemap
					
					
					
					
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
			}
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
				$(".modalPrerender").animate({scrollTop: 0}, 600);
			},
			
			sizingChartModalScrollToChart : function(chartLoc) {
				$(".modalPrerender").animate({scrollTop: chartLoc}, 600);
			},
			
			loginFrmSubmit : function(email,password,errorDiv)        {
					var errors = '';
					$errorDiv = errorDiv.empty(); //make sure error screen is empty. do not hide or callback errors won't show up.

					if(_app.u.isValidEmail(email) === false){
							errors += "Please provide a valid email address<br \/>";
							}
					if(!password)        {
							errors += "Please provide your password<br \/>";
							}
					if(errors ===''){
							_app.calls.appBuyerLogin.init({"login":email,"password":password},{'callback':'authenticateBuyer','extension':'myRIA'});
							_app.calls.refreshCart.init({},'immutable'); //cart needs to be updated as part of authentication process.
//                                        _app.calls.buyerProductLists.init('forgetme',{'callback':'handleForgetmeList','extension':'store_prodlist'},'immutable');
							_app.model.dispatchThis('immutable');
							}
					else {
							$errorDiv.anymessage({'message':errors});
							}
					showContent('customer',{'show':'myaccount'});
			}, //loginFrmSubmit
			
			collapseExpandFAQ : function($tagContext){
				if($(".faqContentCont", $tagContext).is(':hidden')){
					$(".faqContentCont", $tagContext).data('collapseExpand',false).append();
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
						//dump("formObj = ");
						//dump(formObj);
						_app.ext._store_formals.calls.appBuyerCreate.init(formObj,tagObj);
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
			},
			
			validatezip : function(zipCode, context) {
				//dump("Running validateZip function");
				//dump(zipCode);
				//dump(context);
				//dump(zipCode.value);
				
				if(zipCode.textLength > 10){
					//dump("Zip has more than 5 characters");
					$(".checkoutZipInput",context).css("border","0 0 1.5px 1px #FF0000");
					$(".checkoutPlaceOrderButton").attr("disabled", "disabled");
					$(".checkoutZipWarnText",context).show();
				}
				else if(zipCode.textLength < 5){
					//dump("Zip has less than 5 characters");
					$(".checkoutZipInput",context).css("box-shadow","0 0 1.5px 1px #FF0000");
					$(".checkoutPlaceOrderButton").attr("disabled", "disabled");
					$(".checkoutZipWarnText",context).show();
				}
				else{
					//dump("Zip has exactly 5 characters");
					$(".checkoutZipInput",context).css("box-shadow","none");
					$(".checkoutPlaceOrderButton").removeAttr("disabled");
					$(".checkoutZipWarnText",context).hide();
				}
			},
			
			fetchTemplateForPage : function(navcat){
				var r = false;
				if(_app.ext._store_formals.vars.catTemplates[navcat]){
					r = _app.ext._store_formals.vars.catTemplates[navcat];
					}
				else if((/\.mlb\.[^.]+\.[^.]+/).test(navcat)){
					r = 'categoryTemplatePlayer';
					}
				else if(navcat.indexOf('.aa.')==0){
					r = 'categoryTemplateHTML';
					}
				
				return r;
			},
			
			checkouterrorclickblock : function() {
				$(".checkoutClickBlocker").hide();
				$(".checkoutClickBlockerText").hide();
			},
			
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
												//showContent('customer',{'show':'myaccount'});
												_app.u.throwMessage(_app.u.successMsgObject("Your account has been created. Please sign into your account to get started!"));
										}
								}
						}
						
						formObj._vendor = "onlineformals";
						//dump("formObj = ");
						//dump(formObj);
						_app.ext._store_formals.calls.appBuyerCreate.init(formObj,tagObj);
						_app.model.dispatchThis('immutable');
				}
				else {
						$('#globalMessaging').anymessage({'message':'$form not passed into store_account_creation.u.handleBuyerAccountCreate','gMessage':true});
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
					else{
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
				//dump("Begin currency elastic format");
				//dump(data);
				//dump($tag);
				
				var rawPrice = data.value.toString();
				var cents = ".";
				var position = rawPrice.length - 2;
				//dump(position);
				//dump(rawPrice);
				
				var r = "Our Price: $"+[rawPrice.slice(0, position), cents, rawPrice.slice(position)].join('');
				
				$tag.append(r);
			}, //currencyelastic
			
			
			
			currencyprodlist : function($tag,data)	{
				//dump("Begin currency product list format");
				//dump(data);
				//dump($tag);
				
				var r = "<span class='pricePrefix'>Our price:</span> $"+data.value;
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
			
			cartcurrency : function($tag,data)	{
				//dump("Begin currency product list format");
				//dump(data);
				//dump($tag);
				
				var r = "$"+data.value;
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
			}, //cartcurrency
			
			currencymsrp : function($tag,data)	{
				//dump("Begin currency product list format");
				//dump(data);
				//dump($tag);
				
				var r = "<span class='msrpPrefix'>MSRP:</span> $"+data.value;
				//dump(r);
				var cents = r.split(".")
				//dump(cents[1]);
				if(cents[1] == undefined){
					//dump ("No cents present. Add a .00")
					r = r + "<span class='cents'>.00</span>";
				}
				else if(cents[1].length === 1){
					//dump(cents[1].length);
					//dump ("cents only has one value. Adding a zero.")
					var pricePieces = r.split(".");
					r = pricePieces[0] + "<span class='cents'>.00</span>";
				}
				else if(cents[1] == ""){
					//dump("Price value has a decimal but no cent values. Fixing this shenanigans");
					var pricePieces = r.split(".");
					r = pricePieces[0] + "<span class='cents'>.00</span>";
				}
				//dump(r);
				$tag.append(r);
			}, //currencymsrp
			
			
			currencyelasticmsrp : function($tag,data)	{
				dump("Begin elastic msrp product list format");
				dump(data);
				dump($tag);
				
				var r = "<span class='msrpPrefix'>MSRP:</span> $"+data.value;
				dump(r);
				var cents = r.split(".")
				dump(cents[1]);
				if(cents[1] == undefined){
					dump ("No cents present. Add a .00")
					r = r + "<span class='cents'>.00</span>";
				}
				else if(cents[1].length === 1){
					dump(cents[1].length);
					dump ("cents only has one value. Adding a zero.")
					var pricePieces = r.split(".");
					r = pricePieces[0] + "<span class='cents'>.00</span>";
				}
				else if(cents[1] == ""){
					dump("Price value has a decimal but no cent values. Fixing this shenanigans");
					var pricePieces = r.split(".");
					r = pricePieces[0] + "<span class='cents'>.00</span>";
				}
				dump(r);
				$tag.append(r);
			}, //currencyelasticmsrp
				
				priceretailsavingsdifferenceprodlistitem : function($tag,data)	{
					var o; //output generated.
					var pData = _app.data['appProductGet|'+data.value]['%attribs'];
					//use original pdata vars for display of price/msrp. use parseInts for savings computation only.
					var price = Number(pData['zoovy:base_price']);
					var msrp = Number(pData['zoovy:prod_msrp']);
					if(price > 0 && (msrp - price > 0))	{
						o = _app.u.formatMoney(msrp-price,'$',2,true)
						o = "You save: " + o;
						$tag.append(o);
						}
					else	{
						$tag.hide(); //if msrp > price, don't show savings because it'll be negative.
						}
				}, //priceRetailSavings
				
				priceretailsavingspercentageprodlistitem : function($tag,data)	{
					var o; //output generated.
					var pData = _app.data['appProductGet|'+data.value]['%attribs'];
					//use original pdata vars for display of price/msrp. use parseInts for savings computation only.
					var price = Number(pData['zoovy:base_price']);
					var msrp = Number(pData['zoovy:prod_msrp']);
					if(price > 0 && (msrp - price > 0))	{
						var savings = (( msrp - price ) / msrp) * 100;
						o = savings.toFixed(0)+'%';
						o = "(" + o + ")";
						$tag.append(o);
						}
					else	{
						$tag.hide(); //if msrp > price, don't show savings because it'll be negative.
						}
					}, //priceRetailSavings	
					
					showhidearea : function($tag,data)	{
						//dump("showHideCategoryVideo data object = ");
						//dump(data);
						if(data.value == null || data.value == ""){
							$tag.hide();
						}
						else{
							$tag.show();
						}	
				},//showhidearea
				
				
			
		},
		
		e : {
			//add this as a data-app-submit to the login form.
			accountLoginSubmit : function($ele,p)	{
				p.preventDefault();
				if(_app.u.validateForm($ele))	{
					var sfo = $ele.serializeJSON();
					_app.ext.cco.calls.cartSet.init({"bill/email":sfo.login,"_cartid":_app.model.fetchCartID()}) //whether the login succeeds or not, set bill/email in the cart.
					sfo._cmd = "appBuyerLogin";
					sfo.method = 'unsecure';
					sfo._tag = {"datapointer":"appBuyerLogin",'callback':'authenticateBuyer','extension':'quickstart'}
					_app.model.addDispatchToQ(sfo,"immutable");
					_app.calls.refreshCart.init({},'immutable'); //cart needs to be updated as part of authentication process.
					_app.model.dispatchThis('immutable');
					showContent('customer',{'show':'myaccount'});
					}
				else	{} //validateForm will handle the error display.
				return false;
				},
				
			sizingchartmodal : function($ele,p) {
				var $parent = $(".modalPrerender");
				$parent.empty().tlc({verb:"transmogrify", templateid:"SizingChartTemplate"});
				window.scrollTo(0,0); 
				$parent.dialog({'modal':'true', 'title':'','width':870, height:700, 'dialogClass' : 'SizingChartModal'});
			},
			showShare : function($context,infoObj){
				_app.require('partner_addthis',function($context,infoObj){
					var $toolbox = $('.socialLinks', $context);
					if($toolbox.hasClass('addThisRendered')){
						//Already rendered, don't do it again.
					}
					else {
						$toolbox.addClass('addThisRendered').append(
								'<div id="socialLinks" class="addthis_default_style addthis_32x32_style">'
							+		'<a class="addthis_button_preferred_1"></a>'
							+		'<a class="addthis_button_preferred_2"></a>'
							+		'<a class="addthis_button_preferred_3"></a>'
							+		'<a class="addthis_button_preferred_4"></a>'
							+		'<a class="addthis_button_compact"></a>'
							+	'</div>');

						_app.ext.partner_addthis.u.toolbox($toolbox, infoObj);
					}
				});
			dump("AddThis loaded.");

			}
			
		},
		
		tlcFormats : {
			//currencyprodlist : function(argObj,globals)	{
			currencyprodlist : function(data,thisTLC)	{
				//dump("Begin currency format");
				//dump(data);
				//dump(thisTLC);
				
				//var r = "$"+globals.binds[argObj.bind]; 
				var r = "Our price: $"+data.globals.binds[data.globals.focusBind];
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
				}
				//dump(r);
				return(r);
			} //currencyprodlist
		}
	}
	return r;
}