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

var store_backScrollPositionVTwo = function(_app) {
	var r= {
		vars : {

			
		},//END vars 
		
		callbacks : {
			init : {
				onSuccess : function(){
					_app.u.dump('BEGIN _app.ext.store_backScrollPositionVTwo.callbacks.init.onSuccess');
				},
				onError : function() {
					_app.u.dump('BEGIN _app.ext.store_backScrollPositionVTwo.callbacks.init.onError');
				}
			},
			startExtension : {
				onSuccess : function (p){
					_app.u.dump('BEGIN _app.ext.store_backScrollPositionVTwo.callbacks.startExtension.onSuccess');
							
					_app.templates.homepageTemplate.on('complete.backButton',function(event,$context,infoObj){
						dump("Checking for y-scroll position for homepage template");
						//dump("context = ");
						//dump($context);
						if($context.data('scroll-restore')){
							dump("Scroll value found. Returning to previous spot.");
							dump($context.data('scroll-restore'));
							setTimeout(function(){
								$('html, body').animate({scrollTop : $context.data('scroll-restore')},500);
							}, 1000);
						}
						else{
							dump("Never previously been to this page. Scrolling to the top.");
							setTimeout(function(){
								$('html, body').animate({scrollTop : 0},500)
							}, 1000);
						}
					});					
					_app.templates.homepageTemplate.on('depart.backButton',function(event,$context,infoObj){
						dump("Saving y scroll position for homepage template");
						//dump("context = ");
						//dump($context);
						$context.data('scroll-restore',window.pageYOffset);
						dump($context.data('scroll-restore'));
					});
					
					_app.templates.categoryTemplate.on('complete.backButton',function(event,$context,infoObj){
						dump("Checking for y-scroll position for homepage template");
						//dump("context = ");
						//dump($context);
						if($context.data('scroll-restore')){
							dump("Scroll value found. Returning to previous spot.");
							dump($context.data('scroll-restore'));
							setTimeout(function(){
								$('html, body').animate({scrollTop : $context.data('scroll-restore')},500);
							}, 1000);
						}
						else{
							dump("Never previously been to this page. Scrolling to the top.");
							setTimeout(function(){
								$('html, body').animate({scrollTop : 0},500)
							}, 1000);
						}
					});					
					_app.templates.categoryTemplate.on('depart.backButton',function(event,$context,infoObj){
						dump("Saving y scroll position for homepage template");
						//dump("context = ");
						//dump($context);
						$context.data('scroll-restore',window.pageYOffset);
						dump($context.data('scroll-restore'));
					});
					
					_app.templates.categoryProductListTemplate.on('complete.backButton',function(event,$context,infoObj){
						dump("Checking for y-scroll position for homepage template");
						//dump("context = ");
						//dump($context);
						if($context.data('scroll-restore')){
							dump("Scroll value found. Returning to previous spot.");
							dump($context.data('scroll-restore'));
							setTimeout(function(){
								$('html, body').animate({scrollTop : $context.data('scroll-restore')},500);
							}, 1000);
						}
						else{
							dump("Never previously been to this page. Scrolling to the top.");
							setTimeout(function(){
								$('html, body').animate({scrollTop : 0},500)
							}, 1000);
						}
					});					
					_app.templates.categoryProductListTemplate.on('depart.backButton',function(event,$context,infoObj){
						dump("Saving y scroll position for homepage template");
						//dump("context = ");
						//dump($context);
						$context.data('scroll-restore',window.pageYOffset);
						dump($context.data('scroll-restore'));
					});
					
					_app.templates.productTemplate.on('complete.backButton',function(event,$context,infoObj){
						dump("Checking for y-scroll position for homepage template");
						//dump("context = ");
						//dump($context);
						if($context.data('scroll-restore')){
							dump("Scroll value found. Returning to previous spot.");
							dump($context.data('scroll-restore'));
							setTimeout(function(){
								$('html, body').animate({scrollTop : $context.data('scroll-restore')},500);
							}, 1000);
						}
						else{
							dump("Never previously been to this page. Scrolling to the top.");
							setTimeout(function(){
								$('html, body').animate({scrollTop : 0},500)
							}, 1000);
						}
					});					
					_app.templates.productTemplate.on('depart.backButton',function(event,$context,infoObj){
						dump("Saving y scroll position for homepage template");
						//dump("context = ");
						//dump($context);
						$context.data('scroll-restore',window.pageYOffset);
						dump($context.data('scroll-restore'));
					});
					
					_app.templates.testimonialsTemplate.on('complete.backButton',function(event,$context,infoObj){
						dump("Checking for y-scroll position for homepage template");
						//dump("context = ");
						//dump($context);
						if($context.data('scroll-restore')){
							dump("Scroll value found. Returning to previous spot.");
							dump($context.data('scroll-restore'));
							setTimeout(function(){
								$('html, body').animate({scrollTop : $context.data('scroll-restore')},500);
							}, 1000);
						}
						else{
							dump("Never previously been to this page. Scrolling to the top.");
							setTimeout(function(){
								$('html, body').animate({scrollTop : 0},500)
							}, 1000);
						}
					});					
					_app.templates.testimonialsTemplate.on('depart.backButton',function(event,$context,infoObj){
						dump("Saving y scroll position for homepage template");
						//dump("context = ");
						//dump($context);
						$context.data('scroll-restore',window.pageYOffset);
						dump($context.data('scroll-restore'));
					});
					
					_app.templates.companyTemplate.on('complete.backButton',function(event,$context,infoObj){
						dump("Checking for y-scroll position for homepage template");
						//dump("context = ");
						//dump($context);
						if($context.data('scroll-restore')){
							dump("Scroll value found. Returning to previous spot.");
							dump($context.data('scroll-restore'));
							setTimeout(function(){
								$('html, body').animate({scrollTop : $context.data('scroll-restore')},500);
							}, 1000);
						}
						else{
							dump("Never previously been to this page. Scrolling to the top.");
							setTimeout(function(){
								$('html, body').animate({scrollTop : 0},500)
							}, 1000);
						}
					});					
					_app.templates.companyTemplate.on('depart.backButton',function(event,$context,infoObj){
						dump("Saving y scroll position for homepage template");
						//dump("context = ");
						//dump($context);
						$context.data('scroll-restore',window.pageYOffset);
						dump($context.data('scroll-restore'));
					});
					
					_app.templates.customerTemplate.on('complete.backButton',function(event,$context,infoObj){
						dump("Checking for y-scroll position for homepage template");
						//dump("context = ");
						//dump($context);
						if($context.data('scroll-restore')){
							dump("Scroll value found. Returning to previous spot.");
							dump($context.data('scroll-restore'));
							setTimeout(function(){
								$('html, body').animate({scrollTop : $context.data('scroll-restore')},500);
							}, 1000);
						}
						else{
							dump("Never previously been to this page. Scrolling to the top.");
							setTimeout(function(){
								$('html, body').animate({scrollTop : 0},500)
							}, 1000);
						}
					});					
					_app.templates.customerTemplate.on('depart.backButton',function(event,$context,infoObj){
						dump("Saving y scroll position for homepage template");
						//dump("context = ");
						//dump($context);
						$context.data('scroll-restore',window.pageYOffset);
						dump($context.data('scroll-restore'));
					});
					
					_app.templates.searchTemplate.on('complete.backButton',function(event,$context,infoObj){
						dump("Checking for y-scroll position for homepage template");
						//dump("context = ");
						//dump($context);
						if($context.data('scroll-restore')){
							dump("Scroll value found. Returning to previous spot.");
							dump($context.data('scroll-restore'));
							setTimeout(function(){
								$('html, body').animate({scrollTop : $context.data('scroll-restore')},500);
							}, 1000);
						}
						else{
							dump("Never previously been to this page. Scrolling to the top.");
							setTimeout(function(){
								$('html, body').animate({scrollTop : 0},500)
							}, 1000);
						}
					});					
					_app.templates.searchTemplate.on('depart.backButton',function(event,$context,infoObj){
						dump("Saving y scroll position for homepage template");
						//dump("context = ");
						//dump($context);
						$context.data('scroll-restore',window.pageYOffset);
						dump($context.data('scroll-restore'));
					});
					
					_app.templates.cartTemplate.on('complete.backButton',function(event,$context,infoObj){
						dump("Checking for y-scroll position for homepage template");
						//dump("context = ");
						//dump($context);
						if($context.data('scroll-restore')){
							dump("Scroll value found. Returning to previous spot.");
							dump($context.data('scroll-restore'));
							setTimeout(function(){
								$('html, body').animate({scrollTop : $context.data('scroll-restore')},500);
							}, 1000);
						}
						else{
							dump("Never previously been to this page. Scrolling to the top.");
							setTimeout(function(){
								$('html, body').animate({scrollTop : 0},500)
							}, 1000);
						}
					});					
					_app.templates.cartTemplate.on('depart.backButton',function(event,$context,infoObj){
						dump("Saving y scroll position for homepage template");
						//dump("context = ");
						//dump($context);
						$context.data('scroll-restore',window.pageYOffset);
						dump($context.data('scroll-restore'));
					});
							
							
				},
				onError : function (){
					_app.u.dump('BEGIN ext.store_backScrollPositionVTwo.callbacks.startExtension.onError');
				}
			},
		},//END callbacks FUNCTIONS
		
		
		////////////////////////////////////   ACTION    \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

//actions are functions triggered by a user interaction, such as a click/tap.
//these are going the way of the do do, in favor of app events. new extensions should have few (if any) actions.
		a : {
			
		},//END a FUNCTIONS
		
		u : {
			
			
		},//END u FUNCTIONS
		
		renderFormats : {
				
		}//END renderFormats FUNCTIONS
	}
	return r;
}