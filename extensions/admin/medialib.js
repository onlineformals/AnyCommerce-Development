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
An extension for managing the media library in addition to ALL other file uploads,including, but not limited to: csv and zip.
*/



var admin_medialib = function(_app) {
	var theseTemplates = new Array('mediaLibTemplate',
	'mediaLibFolderTemplate','mediaFileTemplate','mediaLibFileDetailsTemplate',
//	'fileUploadFilePreviewTemplate',
	'mediaLibSelectedFileTemplate','fileUploadTemplate','page-setup-import-help',
	'page-setup-publicfiles','page-setup-import-customers','page-setup-import-images',
	'page-setup-import-inventory','page-setup-import-listings','page-setup-import-navcats',
	'page-setup-import-rewrites','page-setup-import-orders','page-setup-import-other','page-setup-import-products',
	'page-setup-import-reviews','page-setup-import-rules','page-setup-import-tracking');
	var r = {

////////////////////////////////////   CALLS    \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

	calls : {

		adminCSVImport : {
			init : function(obj,tagObj,Q)	{
				this.dispatch(obj,tagObj,Q);
				return 1;//# of dispatches to occur.
				},
			dispatch : function(obj,tagObj,Q)	{
				obj._tag =  tagObj || {};
				obj._tag.datapointer = "adminCSVImport"
				obj._cmd = "adminCSVImport"
				_app.model.addDispatchToQ(obj,Q);
				}
			},


		adminImageDelete : {
			init : function(obj,tagObj,Q)	{
				this.dispatch(obj,tagObj,Q);
				return 1;//# of dispatches to occur.
				},
			dispatch : function(obj,tagObj,Q)	{
				obj._tag =  tagObj || {};
				obj._cmd = "adminImageDelete"
				_app.model.addDispatchToQ(obj,Q);
				}
			}, //adminImageDelete

//f is filename
		adminImageDetail : {
			init : function(f,tagObj,Q)	{
				this.dispatch(f,tagObj,Q);
				return 1;//# of dispatches to occur.
				},
			dispatch : function(f,tagObj,Q)	{
				tagObj = tagObj || {};
				tagObj.datapointer = "adminImageDetail|"+f
				_app.model.addDispatchToQ({"_cmd":"adminImageDetail","file":f,"_tag" : tagObj},Q);
				}
			}, //adminImageDetail

		adminImageFolderCreate : {
			init : function(f,tagObj,Q)	{
				this.dispatch(f,tagObj,Q);
				return 1;//# of dispatches to occur.
				},
			dispatch : function(f,tagObj,Q)	{
				tagObj = tagObj || {};
				_app.model.addDispatchToQ({"_cmd":"adminImageFolderCreate","folder":f,"_tag" : tagObj},Q);
				}
			}, //adminImageFolderCreate

		adminImageFolderDelete : {
			init : function(f,tagObj,Q)	{
				this.dispatch(f,tagObj,Q);
				return 1;//# of dispatches to occur.
				},
			dispatch : function(f,tagObj,Q)	{
				tagObj = tagObj || {};
				_app.model.addDispatchToQ({"_cmd":"adminImageFolderDelete","folder":f,"_tag" : tagObj},Q);
				}
			}, //adminImageFolderDelete

// use adminImageFolderDetail call (which executes the same _cmd) for a simple folder list lookup.
//That way, the data is stored in localStorage for quick reference.
//for folder detail, set detail:"FOLDER" on obj param
		adminImageList : {
			init : function(obj,tagObj,Q)	{
				this.dispatch(obj,tagObj,Q);
				return 1; //# of dispatches to occur.
				},
			dispatch : function(obj,tagObj,Q)	{
				obj._tag = tagObj || {};
				obj._tag.datapointer = "adminImageList"
				obj._cmd = "adminImageList";
				_app.model.addDispatchToQ(obj,Q);
				}
			}, //adminImageDetail


//folderDetail call was deprecated, but to keep local storage maintainable, the folderDetail name is used as the datapointer.
//f is folder
		adminImageFolderDetail : {
			init : function(f,tagObj,Q)	{
				var r; //# of dispatches to occur.  what is returned.
				tagObj = tagObj || {};
				tagObj.datapointer = "adminImageFolderDetail|"+f
				if(_app.model.fetchData(tagObj.datapointer) == false)	{
					r = 1;
					this.dispatch(f,tagObj,Q);
					}
				else	{
					_app.u.handleCallback(tagObj);
					r = 0;
					}
				return r;
				},
			dispatch : function(f,tagObj,Q)	{
//				dump(" -> adding dispatch to "+Q+" queue");
				_app.model.addDispatchToQ({"_cmd":"adminImageList","orderby":"NAME","folder":f,"detail":"NONE","_tag" : tagObj},Q);
				}
			}, //adminImageDetail


//a list of all the folders.
		adminImageFolderList : {
			init : function(tagObj,Q)	{
				var r; 
				tagObj = tagObj || {};
				tagObj.datapointer = 'adminImageFolderList';
				if(_app.model.fetchData(tagObj.datapointer) == false)	{
					r = 1;
					this.dispatch(tagObj,Q);
					}
				else	{
					r = 0;
					_app.u.handleCallback(tagObj);
					}
				return r;
				},
			dispatch : function(tagObj,Q)	{
				tagObj = tagObj || {};
				tagObj.datapointer = "adminImageFolderList"
				_app.model.addDispatchToQ({"_cmd":"adminImageFolderList","_tag" : tagObj},Q);
				}
			}, //adminImageFolderList

//This implementation of the call does not support a 'data' for the file itself, it's used with the jqueryUI plugin,
//which uploads the file to a location on the server where it is store temporarily, and returns a guid as part of that request.
		adminImageUpload : {
			init : function(obj,tagObj,Q){this.dispatch(obj,tagObj,Q); return 1},
			dispatch : function(obj,tagObj,Q){
				obj._cmd = "adminImageUpload";
				obj._tag = tagObj || {};
				_app.model.addDispatchToQ(obj,Q);
				}
			},


		adminPublicFileList : {
			init : function(tagObj,Q)	{
				var r;//# of dispatches to occur.
				tagObj = tagObj || {};
				tagObj.datapointer = 'adminPublicFileList';
				if(_app.model.fetchData(tagObj.datapointer) == false)	{
					r = 1;
					this.dispatch(tagObj,Q);
					}
				else	{
					r = 0
					_app.u.handleCallback(tagObj);
					}
				return r;
				},
			dispatch : function(tagObj,Q)	{
				obj = {};
				obj._tag =  tagObj;
				obj._cmd = "adminPublicFileList"
				_app.model.addDispatchToQ(obj,Q);
				}
			}, //adminPublicFileList


		adminPublicFileUpload : {
			init : function(obj,tagObj,Q)	{
				this.dispatch(obj,tagObj,Q);
				return 1;//# of dispatches to occur.
				},
			dispatch : function(obj,tagObj,Q)	{
				obj._tag =  tagObj || {};
				obj._cmd = "adminPublicFileUpload"
				_app.model.addDispatchToQ(obj,Q);
				}
			}, //adminPublicFileUpload

		adminPublicFileDelete : {
			init : function(filename,tagObj,Q)	{
				this.dispatch(filename,tagObj,Q);
				return 1;//# of dispatches to occur.
				},
			dispatch : function(filename,tagObj,Q)	{
				var obj = {};
				obj.filename = filename;
				obj._tag =  tagObj || {};
				obj._cmd = "adminPublicFileDelete"
				_app.model.addDispatchToQ(obj,Q);
				}
			}, //adminPublicFileDelete


//obj should contain verb and src. for save, should include IMG
		adminUIMediaLibraryExecute : {
			init : function(obj,tagObj)	{
				this.dispatch(obj,tagObj);
				return 1;//# of dispatches to occur.
				},
			dispatch : function(obj,tagObj)	{
				obj._cmd = "adminUIMediaLibraryExecute"
				obj._tag = tagObj || {};
				obj._tag.datapointer = 'adminUIMediaLibraryExecute|'+obj.verb;
				_app.model.addDispatchToQ(obj,'immutable');
				}
			}

		}, //calls




////////////////////////////////////   CALLBACKS    \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\



	callbacks : {
//executed when extension is loaded. should include any validation that needs to occur.
		init : {
			onSuccess : function()	{
				var r = true; //return false if extension won't load for some reason (account config, dependencies, etc).

				// _app.model.fetchNLoadTemplates(_app.vars.baseURL+'extensions/admin/medialib.html',theseTemplates);


				_app.rq.push(['script',0,_app.vars.baseURL+'app-admin/resources/lazyload-v1.8.4.js']); //

				_app.rq.push(['css',0,_app.vars.baseURL+'app-admin/resources/jquery.fileupload-ui.css','admin_medialib_fileupload_ui']); //CSS to style the file input field as button and adjust the jQuery UI progress bars
				_app.rq.push(['css',0,_app.vars.baseURL+'app-admin/resources/jquery.image-gallery.min.css','admin_medialib_imagegallery_ui']); //CSS to style the file input field as button and adjust the jQuery UI progress bars
				_app.rq.push(['css',0,_app.vars.baseURL+'extensions/admin/medialib.css','admin_medialib']); //our native css for presentation.

				_app.rq.push(['script',0,_app.vars.baseURL+'app-admin/resources/jquery.fileupload.js']); //
//here to solve a safari/chrome issue if these scripts load before fileupload.js
//not a great solution. will have to come up with something better. callback?

setTimeout(function(){
	_app.rq.push(['script',0,_app.vars.baseURL+'app-admin/resources/canvas-to-blob.min.js']); //
	_app.rq.push(['script',0,_app.vars.baseURL+'app-admin/resources/jquery.fileupload-fp.js']); //The File Upload file processing plugin
	_app.rq.push(['script',0,_app.vars.baseURL+'app-admin/resources/jquery.fileupload-ui.js']); //The File Upload user interface plugin
	_app.rq.push(['script',0,_app.vars.baseURL+'app-admin/resources/jquery.iframe-transport.js']); //The Iframe Transport is required for browsers without support for XHR file uploads
	_app.rq.push(['script',0,_app.vars.baseURL+'app-admin/resources/jquery.image-gallery.min.js']); //The Canvas to Blob plugin is included for image resizing functionality
	_app.rq.push(['script',0,_app.vars.baseURL+'app-admin/resources/jquery.fileupload-jui.js']); //The File Upload jqueryui plugin
	},3000);


//mediaLibrary shortcut is the function B executes from his content. his params are different than showMediaLib. don't change this shortcut.
//B may also trigger medialibrary by linking to #mediaLibModeManage. This case gets handled in admin.u.handleLinkRewrites.
				window.mediaLibrary = _app.ext.admin_medialib.a.uiShowMediaLib

				return r;
				},
			onError : function()	{
//errors will get reported for this callback as part of the extensions loading.  This is here for extra error handling purposes.
//you may or may not need it.
				dump('BEGIN admin_orders.callbacks.init.onError');
				}
			}, //init

		showMediaLibrary : {

			onSuccess : function(tagObj){
//				dump("BEGIN admin_medialib.callbacks.showMediaLibrary.onSuccess");
				$(_app.u.jqSelector('#',tagObj.parentID)).removeClass('loadingBG'); //removes from main col.
				$('.loadingBG','.mediaLibFolderList').removeClass('loadingBG'); //remove from left col.
				
				var L = _app.data[tagObj.datapointer]['@folders'].length; //datapointer is adminMediaFolderList
				var $template; //recycled. holds template till appended to parent.
				var fdata; //folder data. recycled. shortcut.
//				dump(" -> @folders.length: "+L);
//Generate the list of folders (on left);
				for(var i = 0; i < L; i += 1)	{
					fdata = _app.data[tagObj.datapointer]['@folders'][i];
					if(fdata.FName.substring(0,7) == "_ticket")	{} //_ticket folders are skipped.
					else	{
						fdata.id = '#mediaRootFolder_'+fdata.FName //the id given to each root folders.
						$template = _app.renderFunctions.transmogrify(fdata,'mediaLibFolderTemplate',fdata);
//number(parentFID) will return false for the root level categories, which are set to "0" (string);
//this will add the next folder either as a root or a sub folder, if the parentFID is not 0.
						Number(fdata.ParentFID) ? $('#mediaChildren_'+_app.u.makeSafeHTMLId(fdata.ParentFID)).append($template) : $('.mediaLibFolderListUL').append($template);
						}
					}
			
				$('.mediaLibControlsTabContainer').anytabs();
//in some cases, we may re-run this callback (such as after a file upload) and we need to open the folder on the left and in the media area opened for continuity.
				if(_app.ext.admin_medialib.u.getOpenFolderName())	{
//					dump(" -> _app.ext.admin_medialib.u.getOpenFolderName(): "+_app.ext.admin_medialib.u.getOpenFolderName());
					_app.ext.admin_medialib.u.openMediaFolderByFilePath(_app.ext.admin_medialib.u.getOpenFolderName())
					}
/*
				$('.mediaFilesUL').anyupload({
					'instantUpload' : true,
					'stripExtension' : true,
					'encode' : 'base64',
					'templateID' : 'mediaFileTemplate',
					'filesChange' : function(files,ui)	{
						//scroll to bottom of div to show new images
						$(".mediaLibInfiniteScroller").scrollTop($(".mediaLibInfiniteScroller")[0].scrollHeight);
						},
					'ajaxRequest' : function(data,ui){
						dump("BEGIN ajaxUpload callback.");
						var fname = ui.container.data('fname');
						_app.model.destroy('adminImageFolderDetail|'+fname);
						
						var newFileName = data.filename.substr(0, data.filename.lastIndexOf('.')) || data.filename; //strip file extension
						newFileName = newFileName.replace(/[^A-Za-z0-9]+/ig, "_").toString().toLowerCase(); //alphanumeric only (this will allow underscores). the +/ig will replace multiple spaces/specialcharacters in a row w/ 1 underscore.

						
						_app.model.addDispatchToQ({
							'_cmd':'adminImageUpload',
							'base64' : data.filecontents, //btoa is binary to base64
							'folder' : fname,
							'filename' : newFileName,
							'_tag':	{
								'callback' : function(rd){
									if(_app.model.responseHasErrors(rd)){
										$('#mediaLibMessaging').anymessage({'message':rd});
										}
									else	{
										//success content goes here.
										ui.fileElement.data({
											'fname':fname,
											'name':data.filename,
											'path':fname+"/"+data.filename})
										_app.u.handleButtons(ui.fileElement);
										}
									}
								}
							},'passive');
						_app.model.dispatchThis('passive');
						}
					});
*/
//for whatever reason, jqfu has decided it doesn't want to init properly right away. a slight pause and it works fine. weird. ### need a better long term solution.
				setTimeout(function(){
					_app.ext.admin_medialib.u.convertFormToJQFU($('form[name=mediaLibUploadForm]'),'mediaLibrary'); //turns the file upload area into a jquery file upload
					},2000);
				}
			}, //showMediaLibrary

		handleMediaLibSrc : {
			onSuccess : function(tagObj){
//				dump("BEGIN admin_medialib.callbacks.handleMediaLibSrc.onSuccess");
//				dump(" -> tagObj: "); dump(tagObj);
				var img = _app.data[tagObj.datapointer].IMG;
				var $target = $('.mediaLibraryFocusMediaDetails').show();
				$target.append(_app.renderFunctions.transmogrify({'path':_app.data[tagObj.datapointer].IMG,'name':_app.data[tagObj.datapointer].IMG},'mediaLibSelectedFileTemplate',_app.data[tagObj.datapointer]));
				_app.ext.admin_medialib.u.handleMediaFileButtons($target)
				}
			},//handleMediaLibUpdate, //showMediaLibrary


		handleFileUpload2Batch : {
			onSuccess : function(tagObj){
				var jobID = _app.data[tagObj.datapointer].JOBID;
				$("<div \/>").attr({'id':'batchDialog_'+jobID,'title':'Job ID: '+jobID}).append("<p class='pointer' onClick='navigateTo(\"/ext/admin_batchjob/showBatchJobManager\"); $(this).closest(\".ui-dialog-content\").dialog(\"close\");'>File uploaded. <span class='lookLikeLink'>click here</span> to see job status. job id: "+jobID+"<\/p>").dialog();
				}
			},

		handlePublicFilesList : {
			onSuccess: function(tagObj)	{
				var data = _app.data[tagObj.datapointer]['@files'];
				$ul = $("<ul \/>");
				var L = data.length;
// the delete below is a fairly benign delete. report errors, but no need updated the entire files list again, just remove the line from the dom.
// errors will get reported and, if the file doesn't delete, it'll always be here next time for deletion.
				for(var i = 0; i < L; i += 1)	{
					$ul.append($("<li>").html("[ <a href='#' onClick=\"adminApp.ext.admin_medialib.calls.adminPublicFileDelete.init('"+data[i].file+"',{},'passive'); adminApp.model.dispatchThis('passive');  $(this).parent().empty().remove(); adminApp.model.destroy('adminPublicFileList'); return false;\">del<\/a> ] <a href='"+data[i]['link']+"' target='_blank' >"+data[i].file+"<\/a>"));
					}
				 $('.publicFilesList').empty().removeClass('loadingBG').append($ul.children());
				},
			},

		handleImageUpload : {
			onSuccess : function(tagObj){
				$("[data-filename='"+_app.u.jqSelector('',tagObj.filename)+"']",$('.mediaLibraryFileUploadTable')).slideUp(1000)
				}
			},
		handleMediaLibUpdate : {
			onSuccess : function(tagObj){
				$('#mediaModal').dialog('close');
				}
			}//handleMediaLibUpdate
		}, //callbacks




////////////////////////////////////   ACTION    \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

		a : {

//media library gets used a lot.
// -> builder.
// -> product editor.
// -> setup tab.
//P.eleSelector -> an element ID for an input.
//P.imageID -> the ID of the image thumbnail.

			showMediaLib : function(P){
				var $target = $('#mediaModal');
//				dump(" -> P: "); dump(P);

//mode typically isn't needed. It is added to the ul containing the 'list' and when that list is run through the templating engine, mode can be used to change behaviors.
//for instance, mode = 'manage' will turn off the 'select' icons and not add an onclick to the images.
//if mode = kissTemplate, then in the 'selectThisMedia' phase, we'll look for image in the templateEditor iframe.
				P.mode = P.mode || 'unset'
				if($target.length)	{
//this is where the contents for what media is currently selected go. Needs to be emptied each time so old contents don't show up.
//also hidden by default. will be set to visible if populated (keep buttons from showing up)
					$('.mediaLibraryFocusMediaDetails').empty().hide();
//** 201324 -> bug fix. need these cleared each time so they don't carry over between uses.
					$target.data('mode',"");
					$target.data('pid',"");
					$target.data('src',"");
					$(".ui-showloading",$target).hideLoading(); //removes any instance of showLoading which may have been left open as a result of some sort of crash.
					} //media lib has already been created.
//media library hasn't been opened yet. Add to dom and add properties that only get added once.
				else	{
					$target = $("<div \/>").attr({'id':'mediaModal','title':'Media Library'}).addClass('loadingBG').appendTo('body');
//by adding the template instance only once, the media lib will re-open showing last edited folder.
					$target.append(_app.renderFunctions.createTemplateInstance('mediaLibTemplate'));
					$target.dialog({'autoOpen':false,'modal':true, width:'90%', height: 600});

//allow only alphanumeric characters AND underscores
					$('input[name=mediaLibNewFolderName]').off('keypress.mediaLib').on('keypress.mediaLib', function (event) {
						if((event.keyCode ? event.keyCode : event.which) == 8) {} //backspace. allow.
						else	{
							var key = String.fromCharCode(!event.charCode ? event.which : event.charCode);
							var regex = new RegExp("^[a-zA-Z0-9\_]+$");
							if (!regex.test(key)) {
								event.preventDefault();
								return false;
								}
							}
						});

//handles the buttons in the media lib header, such as add folder, delete selected, etc.
					_app.ext.admin_medialib.u.handleMediaLibButtons($target);
					_app.u.addEventDelegation($(".mediaLibInfiniteScroller")); //media list of files (within each folder or search results)
					_app.u.addEventDelegation($(".mediaLibraryFocusMediaDetails")); //currently selected file.
					
					_app.ext.admin_medialib.calls.adminImageFolderList.init({'callback':'showMediaLibrary','extension':'admin_medialib','parentID':'mediaModal','templateID':'mediaLibTemplate'},'immutable');

					}

				if(P.src)	{
					_app.ext.admin_medialib.calls.adminUIMediaLibraryExecute.init({'verb':'LOAD','src':P.src},{'callback':'handleMediaLibSrc','extension':'admin_medialib'});
					}

				_app.model.dispatchThis('immutable');
				$('.mediaLibFileList ul').data('mode',P.mode);
//				dump("Media library setting data: "); dump(P);
				$target.data(P); //put all the params into the object's data for easy lookup later (when a file is selected, for instance)
				$target.dialog('open');
				}, //showMediaLib





			publicFiles : function($target,p){
				$target.anycontent({'templateID':'page-setup-publicfiles','data':{}});
				_app.ext.admin_medialib.u.convertFormToJQFU($('form[name=publicFilesUploadForm]'),'publicFileUpload');
				_app.ext.admin_medialib.calls.adminPublicFileList.init({'callback':'handlePublicFilesList','extension':'admin_medialib'});
				_app.model.dispatchThis();
				},



//first param is thumbnail object on page.
//second param is string (src in api call) or object (ref to text input, hidden, something). must determine
//third param is The title.
//showMediaLib appends this info as data to the mediaLib object. didn't want two jq objects appended in this manner, so their id's are used.
// -> if no id's exist, they're assigned.
			uiShowMediaLib : function($image,strOrObj,title){

//the first two params are required and the first must be a jquery object.
	
				if(typeof $image == 'object' && strOrObj)		{
//P is added to media library instance using data, and I didn't want an entire jq object there (or two, potentially)
					var imageID;
					if($image.attr('id'))	{imageID = $image.attr('id')}
					else	{
						imageID = 'image_'+_app.u.guidGenerator()
						$image.attr('id',imageID)
						}

					var P = {'imageID':_app.u.jqSelector('#',imageID),'title':title};
	//see note about imageID on why this isn't being passed straight through.
	//also, because this is passed into the media library as a string, the string or object distinction is done here and passed in with different keys.
	//selector is passed instead of ID to be more versatile. The mediaLib itself may end up using a class.
					if(typeof strOrObj == 'object')	{
						if(strOrObj.attr('id'))	{P.eleSelector = strOrObj.attr('id')} //save as unencoded string. encode it when using as jquery selector 
						else	{
							P.eleSelector = 'input_'+_app.u.guidGenerator();
							strOrObj.attr('id',P.eleSelector);
							}
						if($image.data('media'))	{
							//this is not the way to get the 'currently selected' to work.  P.src goes into legacy UI mode, which isn't the desired behavior.
							//## TODO -> media is set on the image. Need to load the currently selected image into the media library header.
//							P.src = $image.data('media');
							}
						}
					else if(typeof strOrObj == 'string')	{P.src = strOrObj;}
					else	{} //strOrObj is blank or an invalid format.
					
					_app.ext.admin_medialib.a.showMediaLib(P);
					}
				else	{
					_app.u.throwGMessage("WARNING! invalid or missing params in admin_media.a.uiShowMediaLib. typeof $image = ["+typeof $image+"] and val strOrObj = ["+strOrObj+"]")
					}
				}, //uiShowMediaLib






//This is what's executed when a file in the media library is selected.
//$obj = jquery object of image container. properties for data-fid and some others will be set.
//in some cases, this function is executed when returning the value of the attribute to blank. when that's the case, set2Blank will b true.
			selectThisMedia : function($obj,set2Blank){
//				dump("BEGIN admin_medialib.a.selectThisMedia");
//the image is what's clickable, but the data is in a parent container. don't just check parent().data() because template may change and img could be nested lower.
				var fileInfo = $obj.closest('[data-path]').data();
				var newFilename = (set2Blank === true) ? '' : fileInfo.path; //set2Blank
				var $medialib = $('#mediaModal');
				$medialib.showLoading();
				var mediaData = $medialib.data();
//				dump("mediaData: "); dump(mediaData);
//				dump("fileInfo: "); dump(fileInfo);
				var error = false;
//imageID should always be set. And the presence of eleSelector or mode determines the action.
//eleSelector just updates some form on the page.
//mode requires an API call.
//when in kissTemplate mode, we're just doing a straight image substitution, so eleSelector and src are NOT required.
				if(mediaData.imageID && ( mediaData.eleSelector ||  mediaData.src || mediaData.mode == 'kissTemplate'))	{
//update the image on the page to show what has been selected.
					if(mediaData.imageID)	{
//						dump(" -> we have everything we need to proceed. Proceed.");
						var $templateEditor = $("[data-templateeditor-role='container']",_app.u.jqSelector('#',_app.ext.admin.vars.tab+'Content'));
						var $image = (mediaData.mode == 'kissTemplate') ? $('iframe',$templateEditor).contents().find(mediaData.imageID) : $(mediaData.imageID);
						var oldSrc = $image.src;
//						dump(" -> $image.length: "+$image.length);
//						dump(_app.u.makeImage({'tag':0,'w':$image.attr('width'),'h':$image.attr('height'),'name':newFilename,'b':'ffffff'}));
						$image.attr({
							'src':_app.u.makeImage({'tag':0,'w':$image.attr('width'),'h':$image.attr('height'),'name':newFilename,'b':'ffffff'}),
							'alt':fileInfo.Name,
							'data-filename':newFilename
							}).parent().addClass('edited'); //parent (usually an li) gets the edited class. if u need to change this, update product editor.
						_app.ext.admin.u.handleSaveButtonByEditedClass($image.closest('form'));
						}
//update form element
					if(mediaData.eleSelector){
//						dump("took selector route. selector: "+mediaData.eleSelector);
// ** 201318 -> the eleSelector on a few elements I tested had no #, so they weren't working right.
//however, didn't want to assume it was broken everywhere so a check was added.
						var correctedSelector = mediaData.eleSelector;
						if(mediaData.eleSelector.indexOf('#') == -1)	{
//							dump(" -> # some dumbass called medialib but used selector \'"+mediaData.eleSelector+"\'! i will *attempt* to fix it.");
							correctedSelector = _app.u.jqSelector('#',mediaData.eleSelector);
//							dump(" -> correctedSelector.length: "+$(correctedSelector).length);
							}
//						dump(" -> mediaData.eleSelector: "+mediaData.eleSelector);
//						dump(" -> selector.length: "+$(_app.u.jqSelector('#',mediaData.eleSelector)).length);
// * 201332 -> added 'edited' class on save. used in a lot of UI to count the number of updated elements and, in several cases, unlocks the save button.
						$(correctedSelector).val(newFilename).addClass('edited').triggerHandler('keyup.trackform')
						$(correctedSelector).triggerHandler('change');
// * 201336
//						if($(correctedSelector).closest('form').length)	{
//							_app.ext.admin.u.handleSaveButtonByEditedClass($(correctedSelector).closest('form'));
//							}
						$medialib.dialog('close');
						}
//selector OR mode WILL be set by the time we get here.
					else if(mediaData.src)	{
//						dump("took mode route");
						_app.ext.admin_medialib.calls.adminUIMediaLibraryExecute.init({'verb':'SAVE','src':mediaData.src,'IMG':newFilename},{'callback':'handleMediaLibUpdate','extension':'admin_medialib'});
						_app.model.dispatchThis('immutable');
						}
					else if(mediaData.mode == 'kissTemplate')	{
						if($image.data('filepath'))	{$image.attr('data-oldfilepath',$image.data('filepath'))}
						$image.attr({'data-wizardificated':'true','data-filepath':newFilename});  //must be attribute, not data, so it's preserved on save.
						magic.inspect(mediaData.imageID);  //update object inspector.
						$medialib.dialog('close');// straight substitution, which occurs above.
						}
					else	{
						//hhhmmm.. should never end up here. the 'if' to get into this block precludes any of the previous conditions not being met.
						}
					}
				else	{
					error = true;
					_app.u.throwGMessage("WARNING! Required params for admin_medialib.selectThisMedia not available.");
					dump(" -> imageID or eleSelector must be set:"); dump(mediaData);
					dump(" -> path must be set. Name would be nice"); dump(fileInfo);
					} //something is amiss. required params not avail.
				$medialib.hideLoading();
				}, //selectThisMedia






			showFoldersFor : function(P)	{
				if(P.targetID && P.templateID)	{
					P.parentFID = P.parentFID || "0"; //default to showing root level folders.
					$(_app.u.jqSelector('#',P.targetID)).append(_app.ext.admin_medialib.u.showFoldersByParentFID(P.parentFID,P.templateID));
					}
				else	{
					//required params missing.
					_app.u.throwGMessage("WARNING! some required params for admin_medialib.a.showFoldersFor were missing. targetID and templateID are required. Params follow:");
					dump(P);
					}
				}, //showFoldersFor

//Executed when 'info' button is clicked for a piece of media. Opens details in a dialog.
			showMediaDetailsInDialog : function(P){
				if(P.name)	{
					var safeID = 'mediaFileDetails_'+_app.u.makeSafeHTMLId(P.name)
					var $target = $(_app.u.jqSelector('#',safeID));
					if($target.length){} //contents already created. do nothing.
//contents not generated yet. Create them.
					else	{
						$target = $("<div \/>").attr({'id':safeID,'title':P.name}).appendTo('body');
						$target.dialog({autoOpen:false,width:500,height:350,modal:true});
						$target.append(_app.renderFunctions.createTemplateInstance('mediaLibFileDetailsTemplate'));
						_app.ext.admin_medialib.calls.adminImageDetail.init(P.path,{'callback':'translateTemplate','parentID':safeID});
						_app.model.dispatchThis();
						}
					$target.addClass('loadingBG').dialog('open');
					}
				else	{
					_app.u.throwGMessage("WARNING! params required for admin_medialib.a.showMediaDetailsInDialog missing. name is required:");
					dump(P);
					}
				}, //showMediaDetailsInDialog


			showMediaAndSubs : function(folderProperties){
//				dump("BEGIN admin_medialib.a.showMediaAndSubs"); dump(folderProperties);
				if(!$.isEmptyObject(folderProperties) && folderProperties.fid)	{
					dump("folderproperties.fid IS set.");
					var $mediaTarget = $('.mediaLibFileList ul');
					$mediaTarget.data('list-origin','folder');
					_app.model.abortQ('mutable'); //if folders are clicked in quick succession, incomplete requests should get cancelled so their results don't show up.
//SANITY -> folderProperties loads from data() on the li. which means, all variable names will be lowercase for browser compatibility.

//what follows is folder related code.  Populates/displays the subfolders. updates 'add folder' dropdown.
					var $folderTarget = $('#mediaChildren_'+folderProperties.fid); //ul for folder children.
					$('.ui-selected','.mediaLibFolderList').removeClass('ui-selected');

					$folderTarget.toggle(); //allows folders to be opened and closed.
					$folderTarget.parent().find('a:first').addClass('ui-selected');

//updates the text in the folder dropdown to allow the user to make the selection for where a new folder is created.
					$('.mediaLibActionsBar .selectAddFolderChoices li:last').attr('data-fname',folderProperties.fname).show().trigger('click').text("As child of "+folderProperties.fname);
					$('.mediaLibActionsBar .addMediaFilesBtn').attr('title','select files for upload to this folder').button('enable'); //the button is disabled by default (can't add files to root) and during the delete folder process.

//now handle the delete folder button. Folders with subfolders can not be deleted.
//updates the delete folder button with attributes of what folder is in focus so the button knows what folder to delete.
//if children are present, lock the disable folder button.
//this code must be run after the subfolders have been added or children().length won't be accurate.
					$('.mediaLibActionsBar .deleteFolderBtn .folderid').text(folderProperties.fname);

					if($folderTarget.children().length)	{
						$('.mediaLibActionsBar .deleteFolderBtn').button('disable').attr('title','unable to delete because subfolders are present').data({'focus-folder-id':folderProperties.fid,'focus-folder-name':folderProperties.fname})
						}
					else	{
						$('.mediaLibActionsBar .deleteFolderBtn').button('enable').attr('title','delete folder '+folderProperties.fname).data({'focus-folder-id':folderProperties.fid,'focus-folder-name':folderProperties.fname})
						}

//THe following code is for the file display.
//0 is, unfortunately, a valid folder name.
					if(folderProperties.fname || folderProperties.fname === 0)	{
//						dump(" -> folderProperties.fname IS set");
//						dump("admin_medialib.a.showMediaAndSubs folderProperties follows: ");	dump(folderProperties);
						$mediaTarget.attr({'data-fid':folderProperties.fid,'data-fname':folderProperties.fname});
						_app.ext.admin_medialib.u.showMediaFor({'FName':folderProperties.fname.toString(),'selector':'.mediaLibFileList'});
						_app.model.dispatchThis();
						}
					else	{
						_app.u.throwGMessage("admin_medialib.a.showMediaAndSubs folderProperties.fname is NOT set.<br\/>DEV: see console for details.");
						dump("WARNING! admin_medialib.a.showMediaAndSubs folderProperties.fname no set. folderproperties follows: ");
						dump(folderProperties);
						}
					}
				else	{
					_app.u.throwGMessage("WARNING! admin_medialib.a.showMediaAndSubs folderProperties not set and/or folderproperties.fid not set.");
					dump(folderProperties);
					}

				}, //showMediaAndSubs

			showFileImportPage : function($target,vars)	{
				$target.anycontent({
					'templateID' : 'pageFileImportTemplate',
					'showLoading' : false
					}).anyform();
				_app.u.addEventDelegation($target);
				$("[data-app-role='fileImportMenu']",$target).menu();

				vars = vars || {};
				if(!vars.VERB)(vars.VERB = "HELP"); //default to showing the help page.
				_app.ext.admin_medialib.u.handleImportPageByVerb($("[data-app-role='slimLeftContentContainer']",$target),vars.VERB);
				} //showCSVImports

			}, //Actions

////////////////////////////////////   RENDERFORMATS    \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

		renderFormats : {
			
			lazyImage : function($tag,data)	{
//the default image on an image based data bind is blank.gif. this is exactly what lazyload wants. It'll use the value of data-original to load the image when visible.
				data.bindData.name = (data.bindData.valuePretext) ? data.bindData.valuePretext+data.value : data.value;
				data.bindData.w = $tag.attr('width');
				data.bindData.h = $tag.attr('height');
				data.bindData.tag = 0;
				$tag.attr('data-original',_app.u.makeImage(data.bindData)); //passing in bindData allows for using
				$tag.addClass('lazyLoad');
				},
			
			showChildFolders : function($tag,data){
				dump("BEGIN admin_medialib.renderFormats.showChildFolders");
				$tag.append(_app.ext.admin_medialib.u.showFoldersByParentFID(data.value,data.bindData.loadsTemplate));
				}, //showChildFolders

//used in the 'mediaLibSelectedFileTemplate'. shows the file name/path as a link and, when clicked, that folder is opened.
//currently, the entire output links to the same place. long term, each link in the path should be linkable.
			mediaFilePathAsLinks : function($tag,data)	{
				var $a = $("<a \/>").attr('href','#').click(function(event){
					event.preventDefault();
					_app.ext.admin_medialib.u.openMediaFolderByFilePath($(this).text());
					}).text(data.value);
				$tag.append($a);
				},

//the click event is added to the image, not the li. Otherwise, any elements added (such as the delete or details button), the click event would trickle to.
//The data is set on the li though, so that any elements added, such as the checkbox, could look up that info easily through closest(li).data()
//this function is executed in infinitscroll as well
//infinitescroll is started, but not done. uncomment the second half of line 573 (var media) and the big chunk of commented code starting on 602.
//plus, in the css file, there's line 23 that needs to be uncommented.
			mediaList : function($tag,data)	{
				
//				dump("BEGIN mediaLib.renderFormats.mediaList");
				$(".mediaLibInfiniteScroller").scrollTop(0); //jump to top of image scroll
//				dump(data.value);
				var startpoint = $tag.children().length; //will eq 0 at start or 100 after 100 items
				var itemsPerPage,media;
//				var settings = _app.model.dpsGet('admin_medialib');
				var val; //recycled. set to path/filename.
				var FName = $tag.closest('[data-fname]').attr('data-fname'); //the name of the folder in focus.
				var listOrigin = $tag.data('list-origin'); //will = search or folder. on a folder imageList req, no 'folder' info is requested (because we already know what folder we're in and the request is faster without requiring the folder lookup)
//				dump(" -> list-origin: "+listOrigin);
				$tag.removeClass('loadingBG');

				var media = data.value;
				var L = media.length; //number of media files. could be different from startpoint+X if it's the last page in the list.

				if((FName || listOrigin == 'search') && data.bindData.loadsTemplate)	{
					for(var i = 0; i < L; i += 1)	{
//update data.value[i] with path and id, then pass this entire object into transmogrify so all the values are stored in data for use later on
//SANITY - FName is set to be consistent when this data is passed for interpolation (transmogrify param 3), but when data- is set (param 1) lowercase is used for browser compatiblity.
						if(FName && listOrigin == 'folder')	{
							media[i].path = FName+"/"+media[i].Name;
							media[i].FName = FName;
							}
						else if(listOrigin == 'search')	{
							media[i].path = media[i].Folder+"/"+media[i].Name;
							}
						else	{
							_app.u.throwGMessage("Unsupported origin or FName could not be determined with origin = folder in admin_medialib.renderFormats.mediaList");
							}

						media[i].id = 'mediaFile_'+(startpoint+i);
						
						$tag.append(_app.renderFunctions.transmogrify(media[i],data.bindData.loadsTemplate,media[i]));
						}

					

					
var mode = $tag.data('mode');
$("img.lazyLoad").lazyload({
	container : '.mediaLibInfiniteScroller',
	threshold : 100,
	onLazyLoad : function($i){
		_app.ext.admin_medialib.u.handleMediaFileButtons($i.parents('li'),mode);
		}
	});

if(L > 20)	{
	//lazyload seems to want the scroll to move a bit to show the above the fold images. so we jump down a pixel.
	$(".mediaLibInfiniteScroller").scrollTop(1);
	}
else	{
//scrolltop code above doesn't work if there's no scroll bar.  so instead, show the images if under 20.
	$("img.lazyLoad").lazyload({event: 'click'}).trigger('click',{lazyloadonly:true}); 
	}
	
					}
				else	{
					_app.u.throwGMessage("admin_medialib.renderFormats.mediaList unable to determine folder name (hint: should be set on parent ul as data-fname) or templateid [data.bindData.loadsTemplate: "+data.bindData.loadsTemplate+"].");
					}

				} //mediaList
			}, //renderFormats
////////////////////////////////////   UTIL [u]   \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\


		u : {

			handleImportPageByVerb : function($contentArea,verb)	{
				if(verb && $contentArea instanceof jQuery)	{

					$contentArea.intervaledEmpty().append(_app.renderFunctions.transmogrify({},'page-setup-import-'+verb.toLowerCase(),{})); //load the page template.
					_app.ext.admin_medialib.u.convertFormToJQFU($('form[name=csvUploadToBatchForm]'),'csvUploadToBatch');
					
					if(verb == 'INVENTORY')	{
						var $sc = $("[data-app-role='fileImportSupplierContainer']",$contentArea).showLoading({"message":"Fetching supplier list"}); //Supplier Container
						var $wc = $("[data-app-role='fileImportWMSContainer']",$contentArea).showLoading({"message":"Fetching warehouse list"}); //Warehouses Container
					
						_app.model.addDispatchToQ({
							'_cmd':'adminSupplierList',
							'_tag':	{
								'datapointer' : 'adminSupplierList',
								'callback':function(rd){
									$sc.hideLoading();
									if(_app.model.responseHasErrors(rd)){
										$('#globalMessaging').anymessage({'message':rd});
										}
									else	{
										var suppliers = _app.data[rd.datapointer]['@SUPPLIERS'];
										for(var index in suppliers)	{
											$sc.append("<label><input type='radio' name='HEADERS' value='BASETYPE=SUPPLIER|SUPPLIER_ID="+index+"'> SUPPLIER ID:"+index+" (%SKU,%QTY,%COST,%SUPPLIER_SKU) </label>");
											}					
										}
									}
								}
							},'mutable');
					
						_app.model.addDispatchToQ({
							'_cmd':'adminWarehouseList',
							'_tag':	{
								'datapointer' : 'adminWarehouseList',
								'callback':function(rd){
									$wc.hideLoading();
									if(_app.model.responseHasErrors(rd)){
										$('#globalMessaging').anymessage({'message':rd});
										}
									else	{
										var L = _app.data[rd.datapointer]['@ROWS'].length;
										for(var i = 0; i < L; i += 1)	{
											var tw = _app.data[rd.datapointer]['@ROWS'][i]; //This Warehouse
											$wc.append("<label><input type='radio' name='HEADERS' value='BASETYPE=WMS|WMS_GEO="+tw.GEO+"'> WMS GEO:"+tw.GEO+" (%SKU,%WMS_ZONE,%WMS_POS,%NOTE,%QTY,%COST)<</label>");
											}
										}
									}
								}
							},'mutable');
							
							
						_app.model.dispatchThis('mutable');
						}

					_app.u.handleButtons($contentArea);

					}
				else	{
					$('#globalMessaging').anymessage({"message":"In admin_medialib.u.handleImportPageByVerb, either verb ["+verb+"] not passed or $contentArea is not a jquery instance ["+($contentArea instanceof jQuery)+"].","gMessage":true});
					}
				},

//a way to consistently get the folder name for what folder is open.
//is a function to regularize it and so that if where the name is stored changes, only one update needs to be made.
			getOpenFolderName : function(){
				return $('.mediaLibFileList ul').attr('data-fname');
				},

//this is what 'was' in main.js for jquery file upload. but it was too specific and I needed one where I could set the selector.
//JQFU = JQuery File Upload.
//this turns the upload form into a jquery file upload.
//the mode set will impact the success callback.

			convertFormToJQFU : function(selector,mode,vars)	{

//dump("BEGIN admin_medialib.u.convertFormToJQFU");
//dump(" -> selector: "+selector);
//dump(" -> mode: "+mode);

//'use strict';

//both a selector and a mode are required.
if(selector && mode)	{
	// *** 201324 -> selector can now be a jquery object OR a string of a selector.
//	var $selector = $(_app.u.jqSelector(selector.charAt(0),selector.substring(1)));
	var $selector = (selector instanceof jQuery) ? selector : $(_app.u.jqSelector(selector.charAt(0),selector.substring(1)));
	vars = vars || {};
	$selector.data('modeVars',vars); //mode specific variables. reset each time the media lib is opened. allows for some modes, such as template, to easily set some params for later use.
//	dump(" -> $selector.length: "+$selector.length); //dump($selector);
//	dump(" -> $selector: "); dump($selector);
	var successCallbacks = {

//The dispatches in this request are immutable. the imageUpload and updates need to happen at the same time to provide a good UX and the image creation should be immutable.
//This code could get executed several times during a large batch of files. Any code needed for 1 time execution (at the end) should be in the fileuploadstopped function.
		'mediaLibrary' : function(data,textStatus){
			var L = data.length;
			var tagObj;
			var folderName = $('.mediaLibFileList ul').attr('data-fname'); /// for now, uploads will go to whatever folder is currently open
			_app.model.destroy('adminImageFolderDetail|'+folderName); //clear local copy of folder. done early in process to ensure retrieval regardless of upload result.
			for(var i = 0; i < L; i += 1)	{
				data[i].folder = folderName;
				_app.ext.admin_medialib.calls.adminImageUpload.init(data[i],{'callback':'handleImageUpload','extension':'admin_medialib','filename':data[i].filename},'immutable'); //on a successful response, add the file to the media library.
				}
			_app.model.dispatchThis('immutable');
			}, 
		'publicFileUpload' : function(data,textStatus)	{
			dump("Got to publicFileUpload success."); dump(data);
			_app.model.destroy('adminPublicFileList');
			_app.ext.admin_medialib.calls.adminPublicFileUpload.init(data[0],{'callback':function(rd){
				if(_app.model.responseHasErrors(rd)){
					$('#globalMessaging').anymessage({'message':rd});
					}
				else	{
					//success is handled in the else if(mode == 'publicFileUpload') so that it is only run once.
					}
				}},'immutable');
			_app.model.dispatchThis('immutable');
			},
		'adminTicketFileAttach' : function(data,textStatus)	{
//			dump(" -> Got to adminTicketFileAttach success.");
			data[0].ticketid = $("[name='ticketid']",$selector).val();
			data[0].uuid = $("[name='uuid']",$selector).val();
//			dump(" -> data[0].ticketid: "+data[0].ticketid);
//			dump(" -> data[0].uuid: "+data[0].uuid);
			_app.ext.admin_support.calls.adminTicketFileAttach.init(data[0],{'callback':'handleAdminTicketFileAttach','extension':'admin_support'},'immutable');
//			_app.calls.ping.init({'callback':'navigateTo','extension':'admin','path':'/biz/support/index.cgi?VERB=TICKET-VIEW&ID='+data[0].ticketid},'immutable'); //need to piggy-back this on the file attach so that the navigateTo request is triggered after the changes are reflected on the ticket.
			_app.model.dispatchThis('immutable');
			},
		'adminFileUpload' : function(data,textStatus)	{
			dump("Got to adminFileUpload success.");
			$selector.showLoading({"message":"uncompressing and distributing zip file. This may take a minute. You may safely close the 'eBay Template Zip File Upload' window (do not close the browser) and we will alert you when this has finished."});
//			dump(" -> data: "); dump(data);
			var
				L = data.length,
				profile = $("[name='profile']",$selector).val(),
				domain = $("[name='domain']",$selector).val(),
				campaignid = $("[name='campaignid']",$selector).val(),
				mode = $("[name='mode']",$selector).val();

			for(var i = 0; i < L; i += 1)	{
				_app.model.addDispatchToQ({
					'_cmd':'admin'+mode+'FileUpload',
					'fileguid' : data[i].fileguid,
					'FILENAME' : data[i].filename,
					'CAMPAIGNID' : campaignid,
					'DOMAIN' : domain,
					'PROFILE' : profile
					},'mutable');

				}
			_app.model.addDispatchToQ({
				'_cmd':'ping',
				'_tag':	{
					'callback':function(rd)	{
						if($selector.is(":visible"))	{$selector.hideLoading();}
						else	{
							alert("Your zip file upload has completed.");
							}
						}
					}
				},'mutable');

			_app.model.dispatchThis('mutable');
			
			},
		
		'templateMediaUpload' : function(data,textStatus)	{
			dump("Got to templateMediaUpload success.");
			var L = data.length;
			var tagObj;
			var folderName = "_ebay/"+$('#ebayTemplateEditor').data('profile');
			for(var i = 0; i < L; i += 1)	{
				data[i].folder = folderName;
				_app.ext.admin_medialib.calls.adminImageUpload.init(data[i],{},'immutable'); //on a successful response, add the file to the media library.
				}
//refresh the projects file list so that upon returning to the file chooser, it loads quick.
			_app.model.destroy("adminImageFolderDetail|"+folderName);
			_app.ext.admin_medialib.calls.adminImageFolderDetail.init(folderName,{},'immutable');
			_app.model.dispatchThis('immutable');
			},
		'csvUploadToBatch' : function(data,textStatus) {
			dump("Got to csvUploadToBatch success.");
	//		dump(" -> data:"); dump(data);]
	//		data[0].filetype = 'PRODUCT'; //tho only 1 csv can be uploaded at a time, the response is still nested because it's shared across all file uploads.
			_app.ext.admin_medialib.calls.adminCSVImport.init($.extend(data[0],$('form[name=csvUploadToBatchForm]').serializeJSON()),{'callback':'handleFileUpload2Batch','extension':'admin_medialib'},'immutable');
			_app.model.dispatchThis('immutable');
			}
		}
	
	//add domain to form so that it gets passed along to fileupload
	$selector.append("<input type='hidden' name='DOMAIN' value='"+_app.vars.domain+"' \/>");

/*
	$("[data-app-role='anyuploadContainer']",$selector).anyupload({
		'autoUpload' : false,
		'stripExtension' : false,
		'maxSelectableFiles' : 1,
		'instantUpload' : false,
		'templateID' : 'fileUploadFilePreviewTemplate',
		'ajaxRequest' : function(data,ui){
			dump("BEGIN ajaxUpload callback (specific to the anyupload instance)."); // dump(data);
			$.ajax({
				'url' : _app.vars.jqurl+'upload/',
				type: 'POST',
				processData: false,
				contentType: data.type,
				data: data,
				success: function(object,textStatus,jqXHR){
					dump("SUCCESS!!")
					dump("object: "); dump(object);
					dump("textStatus: "); dump(textStatus);
//					dump("jqXHR: "); dump(jqXHR);
					},
				error: function(jqXHR,textStatus,errorThrown)	{
					dump("ERROR!!")
//					dump("jqXHR: "); dump(jqXHR);
//					dump("textStatus: "); dump(textStatus);
//					dump("errorThrown: "); dump(errorThrown);
					}
				}); //don't hard code to http or https. breaks safari and chrome.			

			}
		});

*/


	// Initialize the jQuery File Upload widget:
	
	$selector.fileupload({
		// Uncomment the following to send cross-domain cookies:
		//xhrFields: {withCredentials: true},
		url: _app.vars.jqurl+'upload/', //** 201346 -> more consistent to use this url
//		url: document.location.protocol == 'file:' ? 'http://www.zoovy.com/jsonapi/upload/' : '/jsonapi/upload/', //don't hard code to http or https. breaks safari and chrome.
		'limitConcurrentUploads' : 4,
		maxNumberOfFiles : (mode == 'csvUploadToBatch') ? 1 : null, //for csv uploads, allow only 1 file to be selected.
		success : function(data,textStatus){
//			dump(" -> mode:  "+mode+" data: "); dump(data);
			successCallbacks[mode](data,textStatus);
			}
		});
	//$selector.bind('fileuploadadd', function (e, data) {}) //use this if a per-file-upload function is needed.

	function mediafileuploadstopped() {
		dump(" -> MEDIALIB. this should only get run once, after the upload is done.");
		var folderName = $('.mediaLibFileList ul').attr('data-fname'); /// for now, uploads will go to whatever folder is currently open

		_app.ext.admin_medialib.calls.adminImageFolderDetail.init(folderName,{},'immutable'); //update local/memory but do nothing. action handled in reset... function below.
		_app.ext.admin_medialib.u.resetAndGetMediaFolders('immutable'); //will empty list and create dispatch.
		_app.model.dispatchThis('immutable');
		}
	
	//this bind is used to update the folder list AND the open folder. It's here so that it only occurs once instead as part of each file uploaded.
	if(mode == 'mediaLibrary')	{
//		dump(" -> MODE is mediaLibrary and we're now adding a bind:");
		$selector.off('fileuploadstopped.jqfu').on('fileuploadstopped.jqfu',mediafileuploadstopped); //do not double-bind the event. remove then re-add.
		}
	else if(mode == 'publicFileUpload')	{
		//do not double-bind the event. remove then re-add.
		$selector.off('fileuploadstopped.jqfu').on('fileuploadstopped.jqfu',function(){
			navigateTo('/ext/admin_medialib/publicFiles');
			}); 
		}
	else if(mode == 'adminTicketFileAttach')	{
		$selector.off('fileuploadstopped.jqfu').on('fileuploadstopped.jqfu',function(a){
//			dump(" -> a: "); dump(a);
			var ticketID = $("[name='ticketid']",a.target).val();
			var uuid = $("[name='ticketid']",a.target).val();
			if(ticketID && uuid && $(_app.u.jqSelector('#','ticket_'+ticketID),'#supportContent').length)	{
				_app.ext.admin_support.u.loadTicketContent($(_app.u.jqSelector('#','ticket_'+ticketID),'#supportContent'),ticketID,uuid,'mutable');
				_app.model.dispatchThis('mutable');
				}
			$('#ticketFileUploadModal').dialog('close');
			}); //do not double-bind the event. remove then re-add.
		}
	// Enable iframe cross-domain access via redirect option:
	$selector.fileupload(
		'option',
		'redirect',
		window.location.href.replace(/\/[^\/]*$/,'/cors/result.html?%s')
		);
	
	
	//$('.btn-success',$selector).on('click', function(){$(".fileUploadButtonBar").show()});


	}
else	{
	_app.u.throwGMessage("In admin_medialib.u.convertFormToJQFU, either selector ["+selector+"] or mode ["+mode+"] are not set.");
	}


				}, //convertFormToJQFU

			getFolderInfoFromFID : function(FID)	{
				var r = false; //what is returned. Will be an object if FID is a valid folder id.
				var L = _app.data.adminImageFolderList['@folders'].length;
				for(var i = 0; i < L; i += 1)	{
					if(_app.data.adminImageFolderList['@folders'][i].FID == FID){
						r = _app.data.adminImageFolderList['@folders'][i]
						break
						}
					}
				return r;
				}, //getFolderInfoFromFID

//Will show the images for a given folder. Handles requesting the data.
// selector is a jquery selector (#something) of what gets translated. the entire selector gets translated.
//FName is the folder name (pretty). FID won't work.
// SANITY -> 0 (zero) is a valid folder name.
			showMediaFor : function(P,Q)	{
				$('.welcomeMessage','.mediaLibFileList').hide(); //make sure welcome message is off.
				$('.mediaLibInfiniteScroller').show(); //make sure media list is visible
				if(P.selector && (P.FName || P.FName === 0))	{
//					dump(" -> P.selector.substring(1): "+P.selector.substring(1));
					var $selector = $(_app.u.jqSelector(P.selector[0],P.selector.substring(1)));
//					dump(" -> $selector.length: "+$selector.length);
					$selector.showLoading();
					$('ul',$selector).empty(); //remove existing images (from previous folder)
					P.callback = function(rd)	{
						$selector.hideLoading();
						if(_app.model.responseHasErrors(rd)){
							_app.u.throwMessage(rd);
							}
						else	{
//							dump(" -> rd: "); dump(rd);
							_app.renderFunctions.translateSelector(rd.selector,_app.data[rd.datapointer]);
							}
						}
					_app.ext.admin_medialib.calls.adminImageFolderDetail.init(P.FName,P,Q || 'mutable');
					}
				else	{
					//required params missing.
					$('.mediaLibFileList').anymessage({"message":"In admin_medialib.u.showMediaFor, either selector ["+P.selector+"] or fname ["+P.FName+"] were left blank and both are required.","gMessage":true})
					}
				}, //showMediaFor

			showFoldersByParentFID : function(FID,templateID){
//				dump("BEGIN admin_medialib.u.showFoldersByParentFID");
				var $ul = $("<ul \/>"); //used to store the translated templates so that the dom can be updated just once. children are returned. 0 for none.
				if(FID && templateID)	{
					var L = _app.data.adminImageFolderList['@folders'].length;
//					dump(" -> L: "+L);
//					dump(" -> FID: "+FID);
	//loop through all the folders and translate a template for each where the parentName matches the value passed in (which is the parentFID).
					for(var i = 0; i < L; i += 1)	{
						if(_app.data.adminImageFolderList['@folders'][i].ParentFID == FID)	{
							$ul.append(_app.renderFunctions.transmogrify({'folderid':_app.data.adminImageFolderList['@folders'][i].FID,'id':'mediaLibFolder_'+_app.data.adminImageFolderList['@folders'][i].FID},templateID,_app.data.adminImageFolderList['@folders'][i]));
							}
						else	{
							//no match. do nothing.
							}
						}
					}
				else	{
					_app.u.throwGMessage("WARNING! params required for admin_medialib.u.showFoldersByName not set.");
					dump(" -> FID: "+FID);
					dump(" -> templateID: "+templateID);
					}
//				dump(" -> # children: "+$ul.children().length);
				return $ul.children();
				}, //showFoldersByParentFID

			buildDeleteMediaRequests : function(){
//				dump("BEGIN admin_medialib.u.buildDeleteMediaRequests");
				$('.mediaFilesUL .btnDelete').each(function(){
					if($(this).hasClass('ui-state-error'))	{
						var data = $(this).closest('li').data();
//						dump(" -> match!"); dump(data);
						_app.ext.admin_medialib.calls.adminImageDelete.init({'folder':data.fname,'file':data.name},{},'immutable');
						}
					else	{} //do nothing.
					});
				}, //buildDeleteMediaRequests

//pass in a foldername "7" or "7/x/y" and the corresponding folder in the medialib nav will get triggered. (opened including showing media)
//the root LI's contain UL's with their FID in the ID. (mediaChildren_FID) (arguably, should have been mediaChildrenOf_ to indicate better).
//each of these UL's contain all the properties of the parent folder. fid, fname, etc
			openMediaFolderByFilePath : function(path)	{
//				dump("BEGIN admin_medialib.u.openMediaFolderByFilePath ["+path+"]");
//if no slashes or periods, is a root category.
				if(path && path.indexOf('/') == -1 && path.indexOf('.') == -1){
					$("li[data-fname='"+path+"']:first",'.mediaLibFolderListUL').find('a:first').trigger('click');
					}
				else if(path)	{
//					dump(" -> is a sub folder");
					var pathArray = path.split('/');
					var path2Now = pathArray[0]; //puts path back together again. each pass it adds a folder back, starting with the root and working down 2 the last.
					var L = (path.indexOf('.') > -1) ? pathArray.length - 1 : pathArray.length; //if last spot is filename, ignore.
//					dump(" -> L: "+L);
					var $rootCat = $("li[data-fname='"+pathArray[0]+"']:first",'.mediaLibFolderListUL'); //$('#mediaRootFolder_'+pathArray[0])
//					dump(" -> $rootCat.length: "+$rootCat.length);
					var fid = $rootCat.data('fid'); //root folder has fname in the id, but all properties in data.
					var $tmp;
					$('#mediaChildren_'+fid).toggle(); //turn first set of subfolders.
					if(L == 1)	{
						$('#mediaRootFolder_'+pathArray[0]+' a:first').click();
						}
					else	{
//in loop, we can skip the root category logic (start at 1 instead of 0).
// If path is a root folder (no subs), the 'if' above takes care of it.
// and the code earlier in this block opens the first subfolder.
						for(i = 1; i < L; i += 1)	{
							path2Now += "/"+pathArray[i];
//							dump(i+") path2Now: "+path2Now+" and fid: "+fid);
							$tmp = $("[data-fname='"+_app.u.jqSelector('',path2Now)+"']",$rootCat);
							if($tmp.data('fname') == path2Now)	{$("a:first",$tmp).click();}
							else	{$("ul",$tmp).toggle()} //don't activate click, which would trigger an ajax request. just open it.
							}
						}
					}
				else	{
					_app.u.throwGMessage("WARNING! no path specified an admin_medialib.u.openMediaFoldersByFilePath.");
					}
				}, //openMediaFolderByFilePath

			resetAndGetMediaFolders : function(Q)	{
				$('.mediaLibFolderListUL').addClass('loadingBG').children().remove(); //folders will be re-added later.
				_app.model.destroy('adminImageFolderList'); //clear memory and local storage to ensure request is made.
				_app.ext.admin_medialib.calls.adminImageFolderList.init({'callback':'showMediaLibrary','extension':'admin_medialib','parentID':'mediaModal','templateID':'mediaLibTemplate'},Q);
				},

//This gets run over individual media files (each image).
//also gets run over the image details area in the header when opening media lib for a field that already has an image selected.
			handleMediaFileButtons : function($target,mode)	{
				_app.u.handleButtons($target);
//mode is set on the UL when the media library is initialized or reopened.
// ### IMPORTANT ### run this AFTER lazy load, so that the click trigger there does NOT impact the click event here.
				if(mode == 'manage')	{
					$("button[data-btn-action='selectMedia']").hide(); //leave button selector or images will be hidden.
					}
				else	{
					$("button[data-btn-action='selectMedia']").show();
					}

				}, //handleMediaFileButtons


//these are the actions on the tool bar row of buttons, not the individual photo/media buttons.
			handleMediaLibButtons : function($target){


$('.mediaLibSearchContainer button',$target).each(function(){
	var $button = $(this);
	$button.button();
	if($button.data('btn-action') == 'mediaLibSearch')	{
		$button.off('click.searchSubmit').on('click.searchSubmit',function(event){
			event.preventDefault();
			$('.welcomeMessage','.mediaLibFileList').hide(); //make sure welcome message is off.
			$('.mediaLibInfiniteScroller').show(); //make sure media list is visible
			$('.mediaFilesUL').empty().addClass('loadingBG').data('list-origin','search');
			$form = $(this).closest('form');
			_app.ext.admin_medialib.calls.adminImageList.init($form.serializeJSON(),{'callback':'translateSelector','selector':'.mediaLibFileList'},'immutable');
			_app.model.dispatchThis('immutable');
			})
		}
	else	{
		_app.u.throwGMessage("In admin_medialib.u.handleMediaLibButtons, unknown button action ["+$button.data('btn-action')+"] declared in mediaLibSearch element");

		}
	});

$('.mediaLibActionsBar button',$target).each(function(){

	var $button = $(this);
	if($button.data('btn-action') == 'deleteSelected')	{
		$button.button({icons: {primary: "ui-icon-trash"}}).click(function(event){
			event.preventDefault(); //keeps button from submitting the form.
			_app.ext.admin_medialib.u.buildDeleteMediaRequests();
			var fname = _app.ext.admin_medialib.u.getOpenFolderName();
			_app.model.destroy('adminImageFolderDetail|'+fname);
			_app.ext.admin_medialib.u.showMediaFor({'FName':fname,'selector':'.mediaLibFileList'},'immutable');
			_app.model.dispatchThis('immutable');
			//also re-request this folder detail and reload and set ul to loadingBG.
			//dispatch.
			})
		}
	else if($button.data('btn-action') == 'selectUploads')	{
		$button.attr('title','create and/or select a folder to add files to').button({icons: {primary: "ui-icon-plus"}}).click(function(event){
			event.preventDefault(); //keeps button from submitting the form.
	//		dump("Uploads Button Pushed.");
			$('.fileUploadButtonBar',$target).show();
			$('[type=file]',$target).click(); 
//			$("[type='file']",$('.mediaLibInfiniteScroller')).trigger('click');
			})
		$button.button('disable');
		}
	else if($button.data('btn-action') == 'deleteFolder')	{
		$button.addClass('deleteFolderBtn').button({icons: {primary: "ui-icon-trash"}}).click(function(event){
			event.preventDefault(); //keeps button from submitting the form.
			var numMediaFiles = $('.mediaLibFileList ul').children().length;
			var folderInfo = $button.data();

//There are two ways to get to the delete code within this function (has subfolders, has no subfolders) so a function is used.
			function deleteFolder(numMF){
//				dump(" -> folderInfo: "); dump(folderInfo);
//disable these buttons because the folder in focus will no longer exist in a moment.
				$('.mediaLibActionsBar .addMediaFilesBtn').button('disable');
				$('.mediaLibActionsBar .deleteFolderBtn').button('disable');
				$('.mediaLibActionsBar .selectAddFolderChoices li:last').hide(); //hide the 'as child of...' option in the add folder menu. it is targeted to the folder being deleted, which is about to no longer exist.

//now, add requests to the Q for all the media files to be deleted.
				if(numMF > 0)	{
					$('.mediaLibFileList .btnDelete').each(function(){$(this).click()});
					_app.ext.admin_medialib.u.buildDeleteMediaRequests();
					}
//if not a root folder, bring the parent folder into focus.
//folderInfo['focus-folder-name'] can = 2, a number, in which case indexOf is barfing. If it IS a number, it's automatically a root folder so we can safely treat it so.
				if(typeof folderInfo['focus-folder-name'] == 'string' && folderInfo['focus-folder-name'].indexOf('/') > -1 )	{
					var fname = folderInfo['focus-folder-name'].substring(0,folderInfo['focus-folder-name'].lastIndexOf('/'));
					_app.model.destroy('adminImageFolderDetail|'+fname);
					_app.ext.admin_medialib.u.showMediaFor({'FName':fname,'selector':'.mediaLibFileList'},'immutable');
					}
				else	{} // a root folder is being deleted. There are no images in root, so don't show anything in the files area.
//next, delete the folder.

				_app.ext.admin_medialib.calls.adminImageFolderDelete.init(folderInfo['focus-folder-name'],{},'immutable');
				$(".mediaFilesUL").empty(); //clear out any images in the list.
				_app.ext.admin_medialib.u.resetAndGetMediaFolders('immutable'); //will empty list and create dispatch.
				_app.model.dispatchThis('immutable');

				} //deleteFolder

//If mediafiles are present in this folder, confirm with the user that they want to delete both the folder AND the media files.
			if(numMediaFiles > 0)	{
				var $newDialog = $('<div \/>').attr('id','mediaFolderDeleteConfirmDialog').append("<p>The folder you are about to delete contains "+numMediaFiles+" media files. Please confirm you want to delete the folder and all "+numMediaFiles+" media files within.<\/p><p>This action can not be undone<\/p>");
				$newDialog.dialog({
					modal: true,
					title: "title",
					show: 'clip',
					hide: 'clip',
					buttons: [
						{text: "Proceed", click: function() {
							deleteFolder(numMediaFiles);
							$(this).dialog("close");
							}},
						{text: "Cancel", click: function() {$(this).dialog("close")}}
						]
					});
				}
			else	{
				deleteFolder(numMediaFiles);
				}
			})
		}
	else if($button.data('btn-action') == 'addFolder')	{
		$button.button({icons: {primary: "ui-icon-folder-collapsed"}}).click(function(event){
			event.preventDefault(); //keeps button from submitting the form.
	//		dump("Uploads Button Pushed.");
			$button.parent().find('ul').hide();
			if($('input[name=mediaLibNewFolderName]').val())	{
				var folderName; //uses either the value of the text input or prepends a path to it.
//there's a ul near the 'select folder' and when a folder on the left is selected, it's added to this list as the last child with data-fname set to it's name (parent).
//then, when the new folder button is clicked, if the subfolder option is selected, the fname is prepended to the new folder name and a child is created.
				if($('.mediaLibActionsBar .selectAddFolderChoices .ui-selected').attr('data-fname'))	{
					folderName = $('.mediaLibActionsBar .selectAddFolderChoices .ui-selected').attr('data-fname')+'/'+$('input[name=mediaLibNewFolderName]').val()
					} //create a sub level folder.
				else	{folderName = $('input[name=mediaLibNewFolderName]').val()} //create a root level folder.


				_app.ext.admin_medialib.calls.adminImageFolderCreate.init(folderName,{},'immutable');
				_app.ext.admin_medialib.u.resetAndGetMediaFolders('immutable'); //will empty list and create dispatch.
				_app.model.dispatchThis('immutable');
				}
			else	{
				_app.u.throwMessage("please enter a folder name");
				$('input[name=mediaLibNewFolderName]').focus();
				}

			})
		}
	else if($button.data('btn-action') == 'selectAddFolderDestination')	{
		$button.button({text:false, icons: {primary: "ui-icon-triangle-1-s"}}).click(function(event){

			event.preventDefault(); //keeps button from submitting the form.
var menu = $(this).parent().find('ul').toggle().css({position:'absolute','z-index':'1000'}).position({
	my: "right top",
	at: "right bottom",
	of: this
	});
			})
		}
	else	{
		_app.u.throwGMessage("In admin_medialib.u.handleMediaLibButtons, unknown button action ["+$button.data('btn-action')+"] declared in mediaLibActionsBar element");
		}
	});
	
//groups any buttons inside a span as a button set. this is specifically for the add folder feature.
$('.mediaLibActionsBar span',$target).buttonset();
//makes any ul's inside the spans a menu. THey'll appear on click as part of the btn-action code. used, but not limited to, for selectAddFolderDestination
$('.mediaLibActionsBar span ul',$target).hide().menu().selectable();
				}, //handleMediaLibButtons


			}, //u

		e : {

			fileImportPageShow : function($ele,P)	{
				if($ele.data('verb'))	{
					_app.ext.admin_medialib.u.handleImportPageByVerb($ele.closest("[data-app-role='fileImportContainer']").find("[data-app-role='slimLeftContentContainer']"),$ele.data('verb'));
					}
				else	{
					$('#globalMessaging').anymessage({"message":"In admin_medialib.e.fileImportPageShow, no data-verb set on trigger element.","gMessage":true});
					}
				}, //fileImportPageShow

			handleMediaFileButton : function($ele,P)	{
//				dump("BEGIN admin_medialib.e.handleMediaFileButton (Click!)");
//				dump(" -> $ele.data('btn-action'): "+$ele.data('btn-action'));

				P = P || {};
				P.preventDefault();
				
				var action = $ele.data('btn-action');
				if(action)	{
					switch(action)	{
						case 'deleteMedia':
							$ele.toggleClass('ui-state-error'); //NOTE - buildDeleteMediaRequests uses this class. if you change the class, change that function too.
							break;
						
						case 'selectMedia':
//for lazy load, a click on the image is triggered if no scroll bar. This prevents the click from auto-selecting the first image in the bunch.
							if(P.lazyloadonly)	{} 
//no action in manage mode. nothing gets selected.
							else if($ele.closest('ul').data('mode') == 'manage')	{} 
							else	{
								if($ele.is('img'))	{
									_app.ext.admin_medialib.a.selectThisMedia($ele);
									}
								else	{
									_app.ext.admin_medialib.a.selectThisMedia($ele.closest('li').find('img'));
									}
								}
							
							break;
						
						case 'mediaDetails':
							_app.ext.admin_medialib.a.showMediaDetailsInDialog($ele.closest('[data-path]').data());
							break;
						
						case 'clearMedia':
							_app.ext.admin_medialib.a.selectThisMedia($ele,true);
							break;
			
						case 'downloadMedia':
							dump(" -> $(this).closest('[data-path]').length: "+$ele.closest('[data-path]').length); dump($ele.closest('[data-path]').data());
							window.open(_app.u.makeImage({'name':$ele.closest('[data-path]').data('path')}));
							break;
						
						default:
							//unrecognized action.
						}
					}
				else	{
					
					}
				}, //handleMediaFileButton

			adminCSVExportRewritesExec : function($ele,p)	{
				$ele.parent().showLoading({"message":"Building URL Rewrite File"});
				_app.model.addDispatchToQ({
					'_cmd':'adminCSVExport',
					'base64' : 1,
					'export' : 'REWRITES',
					'_tag':	{
						'callback':'fileDownloadInModal',
						'filename' : 'rewrites.csv',
						'datapointer':'adminCSVExport|REWRITE',
						'jqObj' : $ele.parent()
						}
					},'mutable');
				_app.model.dispatchThis('mutable');
				}, //adminCSVExportRewritesExec

			adminCSVExportNavcatsExec : function($ele,p)	{
				$ele.parent().showLoading({"message":"Building Category File"});
				_app.model.addDispatchToQ({
					'_cmd':'adminCSVExport',
					'export' : 'CATEGORY',
					'base64' : 1,
					'@OTHER_COLUMNS' : $('.navcatExportHeader').val() ? $('.navcatExportHeader').val().split(',') : [],
					'_tag':	{
						'callback':'fileDownloadInModal',
						'datapointer':'adminCSVExport|CATEGORY',
						'filename' : 'categories.csv',
						'jqObj' : $ele.parent()
						}
					},'mutable');
				_app.model.dispatchThis('mutable');
				} //adminCSVExportNavcatsExec
			
			}

		} //r object.
	return r;
	}