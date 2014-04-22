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

var store_backScrollPosition = function(_app) {
	var r= {
		vars : {
			scrollPosHist : "",
			scrollPosBackHit : "",
			scrollPosArrayIndex : "",

			
		},//END vars 
		
		callbacks : {
			init : {
				onSuccess : function(){
					_app.u.dump('BEGIN _app.ext.store_backScrollPosition.callbacks.init.onSuccess');
				},
				onError : function() {
					_app.u.dump('BEGIN _app.ext.store_backScrollPosition.callbacks.init.onError');
				}
			},
			startExtension : {
				onSuccess : function (p){
				
					_app.u.dump('BEGIN _app.ext.store_backScrollPosition.callbacks.startExtension.onSuccess');
					_app.templates.categoryTemplate.on('complete.downlite',function(P){
					//_app.rq.push(['templateFunction','categoryTemplate','onCompletes',function(P) {
						var $context = $(_app.u.jqSelector('#',P.parentID));
						//_app.u.dump($context);
						if($context.hasClass("initialLoadComplete")){
							//_app.u.dump("initialLoadComplete exists. Do nothing")
						}
						else{
							//_app.u.dump("initialLoadComplete does not exists. Adding it")
							$context.addClass("initialLoadComplete");
						}
					});

					_app.u.dump('BEGIN _app.ext.store_backScrollPosition.callbacks.startExtension.onSuccess')
					function addScrollPosSet(){
						for( var t in _app.templates ){
							dump("Adding onDepart to " + t);
							_app.templates[t].on('depart.downlite',function(){
								dump("Departing :" + t);
								if(_app.ext.store_backScrollPosition.vars.scrollPosBackHit === 1){
									//_app.u.dump("Begin returning scroll position to previous location");
										//_app.u.dump("back button was hit.");
									//_app.u.dump(_app.ext.store_backScrollPosition.vars.scrollPosBackHit);
									//_app.u.dump("_app.ext.store_backScrollPosition.vars.scrollPosArrayIndex = " + _app.ext.store_backScrollPosition.vars.scrollPosArrayIndex);
									//_app.u.dump("_app.ext.store_backScrollPosition.vars.scrollPosHist[_app.ext.store_backScrollPosition.vars.scrollPosArrayIndex] = " + _app.ext.store_backScrollPosition.vars.scrollPosHist[_app.ext.store_backScrollPosition.vars.scrollPosArrayIndex]);
									if(_app.ext.store_backScrollPosition.vars.scrollPosArrayIndex === 0){
										function scrollToPosition1(){
											$('html, body').animate({scrollTop : _app.ext.store_backScrollPosition.vars.scrollPosHist[_app.ext.store_backScrollPosition.vars.scrollPosArrayIndex]},1000);
											_app.ext.store_backScrollPosition.vars.scrollPosBackHit = 0;
											//_app.u.dump("_app.ext.store_backScrollPosition.vars.scrollPosArrayIndex = 0");
											//_app.u.dump("_app.ext.store_backScrollPosition.vars.scrollPosHist[_app.ext.store_backScrollPosition.vars.scrollPosArrayIndex] = " + _app.ext.store_backScrollPosition.vars.scrollPosHist[_app.ext.store_backScrollPosition.vars.scrollPosArrayIndex]);
											//_app.u.dump("Ran scrollToPosition1");
										}
										setTimeout(scrollToPosition1, 2000);
								}
								else{
									function scrollToPosition2(){
										//_app.u.dump("Begin returning scroll position to previous location");
										//_app.u.dump("_app.ext.store_backScrollPosition.vars.scrollPosArrayIndex before reduction = " + _app.ext.store_backScrollPosition.vars.scrollPosArrayIndex);
										_app.ext.store_backScrollPosition.vars.scrollPosArrayIndex = _app.ext.store_backScrollPosition.vars.scrollPosArrayIndex - 1;
										//_app.u.dump("index passed into scrollTo = " + _app.ext.store_backScrollPosition.vars.scrollPosArrayIndex);
										//_app.u.dump("_app.ext.store_backScrollPosition.vars.scrollPosHist = " + _app.ext.store_backScrollPosition.vars.scrollPosHist);
										//_app.u.dump("_app.ext.store_backScrollPosition.vars.scrollPosHist[_app.ext.store_backScrollPosition.vars.scrollPosArrayIndex] = " + _app.ext.store_backScrollPosition.vars.scrollPosHist[_app.ext.store_backScrollPosition.vars.scrollPosArrayIndex]);
										$('html, body').animate({scrollTop : _app.ext.store_backScrollPosition.vars.scrollPosHist[_app.ext.store_backScrollPosition.vars.scrollPosArrayIndex]},1000);
										_app.ext.store_backScrollPosition.vars.scrollPosBackHit = 0;
										_app.ext.store_backScrollPosition.vars.scrollPosArrayIndex = _app.ext.store_backScrollPosition.vars.scrollPosArrayIndex - 1;
										//_app.u.dump("Ran scrollToPosition2");
									}
									setTimeout(scrollToPosition2, 2000);
								}
							}
						});
						//}
					}
					}
					setTimeout(addScrollPosSet, 5000);
					
					function addScrollPosStoring(){
						for( var t in _app.ext.quickstart.template ){
						  if(_app.ext.quickstart.template[t].onCompletes){
							_app.ext.quickstart.template[t].onCompletes.push(function(){
								//_app.u.dump("Begin adding scroll position to array");
								//_app.u.dump("_app.ext.store_backScrollPosition.vars.scrollPosBackHit = " + _app.ext.store_backScrollPosition.vars.scrollPosBackHit);
								if(_app.ext.store_backScrollPosition.vars.scrollPosHist === ""){
									//_app.u.dump("_app.ext.store_backScrollPosition.vars.scrollPosHist is null");
									_app.ext.store_backScrollPosition.vars.scrollPosHist = window.pageYOffset;
									_app.ext.store_backScrollPosition.vars.scrollPosArrayIndex = 0;
									//_app.u.dump("_app.ext.store_backScrollPosition.vars.scrollPosHist = " + _app.ext.store_backScrollPosition.vars.scrollPosHist);
									//_app.u.dump("_app.ext.store_backScrollPosition.vars.scrollPosArrayIndex = " + _app.ext.store_backScrollPosition.vars.scrollPosArrayIndex);
								}
								else{
									if(_app.ext.store_backScrollPosition.vars.scrollPosArrayIndex === 0){
										//_app.u.dump("_app.ext.store_backScrollPosition.vars.scrollPosHist is 0");
										var newArray = new Array();
										var currentIndex = _app.ext.store_backScrollPosition.vars.scrollPosArrayIndex;
										newArray[0] = _app.ext.store_backScrollPosition.vars.scrollPosHist;
										newArray[1] = window.pageYOffset;
										_app.ext.store_backScrollPosition.vars.scrollPosHist = newArray;
										currentIndex = currentIndex + 1;
										_app.ext.store_backScrollPosition.vars.scrollPosArrayIndex = currentIndex;
										//_app.u.dump("_app.ext.store_backScrollPosition.vars.scrollPosHist = " + _app.ext.store_backScrollPosition.vars.scrollPosHist);
										//_app.u.dump("_app.ext.store_backScrollPosition.vars.scrollPosArrayIndex = " + _app.ext.store_backScrollPosition.vars.scrollPosArrayIndex);
									}
									else{
										//_app.u.dump("_app.ext.store_backScrollPosition.vars.scrollPosHist does not = 0");
										var oldArray = new Array();
										var currentIndex = _app.ext.store_backScrollPosition.vars.scrollPosArrayIndex;
										oldArray = _app.ext.store_backScrollPosition.vars.scrollPosHist;
										currentIndex = currentIndex + 1;
										oldArray[currentIndex] = window.pageYOffset;
										_app.ext.store_backScrollPosition.vars.scrollPosHist = oldArray;
										_app.ext.store_backScrollPosition.vars.scrollPosArrayIndex = currentIndex;
										//_app.u.dump("_app.ext.store_backScrollPosition.vars.scrollPosHist = " + _app.ext.store_backScrollPosition.vars.scrollPosHist);
										//_app.u.dump("_app.ext.store_backScrollPosition.vars.scrollPosArrayIndex = " + _app.ext.store_backScrollPosition.vars.scrollPosArrayIndex);
									}
								}
							});
						  }
						}
					}
					setTimeout(addScrollPosStoring, 5000);
				},
				onError : function (){
					_app.u.dump('BEGIN ext.store_backScrollPosition.callbacks.startExtension.onError');
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