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

var store_backScrollPosition = function() {
	var r= {
		vars : {
			scrollPosHist : "",
			scrollPosBackHit : "",
			scrollPosArrayIndex : "",

			
		},//END vars 
		
		callbacks : {
			init : {
				onSuccess : function(){
					app.u.dump('BEGIN app.ext.store_backScrollPosition.callbacks.init.onSuccess');
				},
				onError : function() {
					app.u.dump('BEGIN app.ext.store_backScrollPosition.callbacks.init.onError');
				}
			},
			startExtension : {
				onSuccess : function (p){

					app.rq.push(['templateFunction','categoryTemplate','onCompletes',function(P) {
						var $context = $(app.u.jqSelector('#',P.parentID));
						app.u.dump($context);
						if($context.hasClass("initialLoadComplete")){
							//app.u.dump("initialLoadComplete exists. Do nothing")
						}
						else{
							//app.u.dump("initialLoadComplete does not exists. Adding it")
							$context.addClass("initialLoadComplete");
						}
					}]);

					app.u.dump('BEGIN app.ext.store_backScrollPosition.callbacks.startExtension.onSuccess')
					function addScrollPosSet(){
						for( var t in app.ext.myRIA.template ){
						  if(app.ext.myRIA.template[t].onDeparts){
							app.ext.myRIA.template[t].onDeparts.push(function(){
								if(app.ext.store_backScrollPosition.vars.scrollPosBackHit === 1){
									//app.u.dump("Begin returning scroll position to previous location");
									//app.u.dump("back button was hit.");
									//app.u.dump(app.ext.store_backScrollPosition.vars.scrollPosBackHit);
									//app.u.dump("app.ext.store_backScrollPosition.vars.scrollPosArrayIndex = " + app.ext.store_backScrollPosition.vars.scrollPosArrayIndex);
									//app.u.dump("app.ext.store_backScrollPosition.vars.scrollPosHist[app.ext.store_backScrollPosition.vars.scrollPosArrayIndex] = " + app.ext.store_backScrollPosition.vars.scrollPosHist[app.ext.store_backScrollPosition.vars.scrollPosArrayIndex]);
									if(app.ext.store_backScrollPosition.vars.scrollPosArrayIndex === 0){
										function scrollToPosition1(){
											$('html, body').animate({scrollTop : app.ext.store_backScrollPosition.vars.scrollPosHist[app.ext.store_backScrollPosition.vars.scrollPosArrayIndex]},1000);
											app.ext.store_backScrollPosition.vars.scrollPosBackHit = 0;
											//app.u.dump("app.ext.store_backScrollPosition.vars.scrollPosArrayIndex = 0");
											//app.u.dump("app.ext.store_backScrollPosition.vars.scrollPosHist[app.ext.store_backScrollPosition.vars.scrollPosArrayIndex] = " + app.ext.store_backScrollPosition.vars.scrollPosHist[app.ext.store_backScrollPosition.vars.scrollPosArrayIndex]);
											//app.u.dump("Ran scrollToPosition1");
										}
										setTimeout(scrollToPosition1, 2000);
								}
								else{
									function scrollToPosition2(){
										//app.u.dump("Begin returning scroll position to previous location");
										//app.u.dump("app.ext.store_backScrollPosition.vars.scrollPosArrayIndex before reduction = " + app.ext.store_backScrollPosition.vars.scrollPosArrayIndex);
										app.ext.store_backScrollPosition.vars.scrollPosArrayIndex = app.ext.store_backScrollPosition.vars.scrollPosArrayIndex - 1;
										//app.u.dump("index passed into scrollTo = " + app.ext.store_backScrollPosition.vars.scrollPosArrayIndex);
										//app.u.dump("app.ext.store_backScrollPosition.vars.scrollPosHist = " + app.ext.store_backScrollPosition.vars.scrollPosHist);
										//app.u.dump("app.ext.store_backScrollPosition.vars.scrollPosHist[app.ext.store_backScrollPosition.vars.scrollPosArrayIndex] = " + app.ext.store_backScrollPosition.vars.scrollPosHist[app.ext.store_backScrollPosition.vars.scrollPosArrayIndex]);
										$('html, body').animate({scrollTop : app.ext.store_backScrollPosition.vars.scrollPosHist[app.ext.store_backScrollPosition.vars.scrollPosArrayIndex]},1000);
										app.ext.store_backScrollPosition.vars.scrollPosBackHit = 0;
										app.ext.store_backScrollPosition.vars.scrollPosArrayIndex = app.ext.store_backScrollPosition.vars.scrollPosArrayIndex - 1;
										//app.u.dump("Ran scrollToPosition2");
									}
									setTimeout(scrollToPosition2, 2000);
								}
							}
						});
						}
					}
					}
					setTimeout(addScrollPosSet, 5000);
					
					function addScrollPosStoring(){
						for( var t in app.ext.myRIA.template ){
						  if(app.ext.myRIA.template[t].onCompletes){
							app.ext.myRIA.template[t].onCompletes.push(function(){
								//app.u.dump("Begin adding scroll position to array");
								//app.u.dump("app.ext.store_backScrollPosition.vars.scrollPosBackHit = " + app.ext.store_backScrollPosition.vars.scrollPosBackHit);
								if(app.ext.store_backScrollPosition.vars.scrollPosHist === ""){
									//app.u.dump("app.ext.store_backScrollPosition.vars.scrollPosHist is null");
									app.ext.store_backScrollPosition.vars.scrollPosHist = window.pageYOffset;
									app.ext.store_backScrollPosition.vars.scrollPosArrayIndex = 0;
									//app.u.dump("app.ext.store_backScrollPosition.vars.scrollPosHist = " + app.ext.store_backScrollPosition.vars.scrollPosHist);
									//app.u.dump("app.ext.store_backScrollPosition.vars.scrollPosArrayIndex = " + app.ext.store_backScrollPosition.vars.scrollPosArrayIndex);
								}
								else{
									if(app.ext.store_backScrollPosition.vars.scrollPosArrayIndex === 0){
										//app.u.dump("app.ext.store_backScrollPosition.vars.scrollPosHist is 0");
										var newArray = new Array();
										var currentIndex = app.ext.store_backScrollPosition.vars.scrollPosArrayIndex;
										newArray[0] = app.ext.store_backScrollPosition.vars.scrollPosHist;
										newArray[1] = window.pageYOffset;
										app.ext.store_backScrollPosition.vars.scrollPosHist = newArray;
										currentIndex = currentIndex + 1;
										app.ext.store_backScrollPosition.vars.scrollPosArrayIndex = currentIndex;
										//app.u.dump("app.ext.store_backScrollPosition.vars.scrollPosHist = " + app.ext.store_backScrollPosition.vars.scrollPosHist);
										//app.u.dump("app.ext.store_backScrollPosition.vars.scrollPosArrayIndex = " + app.ext.store_backScrollPosition.vars.scrollPosArrayIndex);
									}
									else{
										//app.u.dump("app.ext.store_backScrollPosition.vars.scrollPosHist does not = 0");
										var oldArray = new Array();
										var currentIndex = app.ext.store_backScrollPosition.vars.scrollPosArrayIndex;
										oldArray = app.ext.store_backScrollPosition.vars.scrollPosHist;
										currentIndex = currentIndex + 1;
										oldArray[currentIndex] = window.pageYOffset;
										app.ext.store_backScrollPosition.vars.scrollPosHist = oldArray;
										app.ext.store_backScrollPosition.vars.scrollPosArrayIndex = currentIndex;
										//app.u.dump("app.ext.store_backScrollPosition.vars.scrollPosHist = " + app.ext.store_backScrollPosition.vars.scrollPosHist);
										//app.u.dump("app.ext.store_backScrollPosition.vars.scrollPosArrayIndex = " + app.ext.store_backScrollPosition.vars.scrollPosArrayIndex);
									}
								}
							});
						  }
						}
					}
					setTimeout(addScrollPosStoring, 5000);
				},
				onError : function (){
					app.u.dump('BEGIN ext.store_backScrollPosition.callbacks.startExtension.onError');
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