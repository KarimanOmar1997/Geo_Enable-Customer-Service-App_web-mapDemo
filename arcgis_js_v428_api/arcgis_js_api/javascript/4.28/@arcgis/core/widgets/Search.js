/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
import{_ as e}from"../chunks/tslib.es6.js";import{substitute as t}from"../intl.js";import{e as s}from"../core/promiseUtils.js";import{d as o,a as r}from"../chunks/maybe.js";import{watch as i,on as n,initial as l}from"../core/reactiveUtils.js";import{e as u}from"../chunks/Logger.js";import{property as a}from"../core/accessorSupport/decorators/property.js";import"../chunks/ensureType.js";import"../chunks/typedArrayUtil.js";import{subclass as c}from"../core/accessorSupport/decorators/subclass.js";import h from"./Widget.js";import{l as p}from"../chunks/legacyIcon.js";import d from"./Search/SearchResultRenderer.js";import m from"./Search/SearchViewModel.js";import{g}from"../chunks/globalCss.js";import{b as _,l as v,m as y}from"../chunks/widgetUtils.js";import{m as M}from"../chunks/messageBundle.js";import{v as b}from"../chunks/vmEvent.js";import{t as j}from"../chunks/jsxFactory.js";import"../chunks/date.js";import"../chunks/jsonMap.js";import"../config.js";import"../core/lang.js";import"../chunks/locale.js";import"../chunks/handleUtils.js";import"../chunks/timeZoneUtils.js";import"../chunks/datetime.js";import"../chunks/messages.js";import"../core/Error.js";import"../request.js";import"../kernel.js";import"../core/urlUtils.js";import"../core/JSONSupport.js";import"../core/Accessor.js";import"../core/Handles.js";import"../chunks/metadata.js";import"../chunks/utils.js";import"../chunks/ObjectPool.js";import"../chunks/ObservableBase.js";import"../chunks/tracking.js";import"../core/scheduling.js";import"../chunks/nextTick.js";import"../chunks/PooledArray.js";import"../chunks/time.js";import"../chunks/assets.js";import"../chunks/asyncUtils.js";import"../core/Collection.js";import"../core/Evented.js";import"../chunks/shared.js";import"../chunks/SimpleObservable.js";import"../chunks/domUtils.js";import"../core/Promise.js";import"../chunks/uuid.js";import"../core/accessorSupport/decorators/cast.js";import"../chunks/projector.js";import"../chunks/dom.js";import"../chunks/index.js";import"../chunks/jsxWidgetSupport.js";import"../chunks/accessibleHandler.js";import"../Graphic.js";import"../geometry.js";import"../geometry/Extent.js";import"../geometry/Geometry.js";import"../chunks/reader.js";import"../geometry/SpatialReference.js";import"../chunks/unitUtils.js";import"../chunks/Ellipsoid.js";import"../chunks/writer.js";import"../geometry/Point.js";import"../geometry/support/webMercatorUtils.js";import"../geometry/Multipoint.js";import"../chunks/zmUtils.js";import"../geometry/Polygon.js";import"../chunks/Axis.js";import"../chunks/extentUtils.js";import"../chunks/aaBoundingRect.js";import"../chunks/mathUtils.js";import"../chunks/vec3.js";import"../chunks/vec3f64.js";import"../chunks/common.js";import"../geometry/Polyline.js";import"../chunks/typeUtils.js";import"../geometry/support/jsonUtils.js";import"../PopupTemplate.js";import"../core/Clonable.js";import"../layers/support/fieldUtils.js";import"../core/sql.js";import"../chunks/arcadeOnDemand.js";import"../popup/content.js";import"../popup/content/AttachmentsContent.js";import"../popup/content/Content.js";import"../popup/content/CustomContent.js";import"../popup/content/ExpressionContent.js";import"../popup/ElementExpressionInfo.js";import"../popup/content/FieldsContent.js";import"../popup/FieldInfo.js";import"../chunks/enumeration.js";import"../popup/support/FieldInfoFormat.js";import"../popup/content/MediaContent.js";import"../popup/content/BarChartMediaInfo.js";import"../popup/content/mixins/ChartMediaInfo.js";import"../popup/content/mixins/MediaInfo.js";import"../popup/content/support/ChartMediaInfoValue.js";import"../Color.js";import"../chunks/colorUtils.js";import"../popup/content/support/ChartMediaInfoValueSeries.js";import"../chunks/chartMediaInfoUtils.js";import"../popup/content/ColumnChartMediaInfo.js";import"../popup/content/ImageMediaInfo.js";import"../popup/content/support/ImageMediaInfoValue.js";import"../popup/content/LineChartMediaInfo.js";import"../popup/content/PieChartMediaInfo.js";import"../popup/content/RelationshipContent.js";import"../popup/support/RelatedRecordsInfoFieldOrder.js";import"../popup/content/TextContent.js";import"../popup/ExpressionInfo.js";import"../popup/LayerOptions.js";import"../popup/RelatedRecordsInfo.js";import"../support/actions/ActionBase.js";import"../core/Identifiable.js";import"../support/actions/ActionButton.js";import"../support/actions/ActionToggle.js";import"../symbols.js";import"../symbols/CIMSymbol.js";import"../symbols/Symbol.js";import"../symbols/ExtrudeSymbol3DLayer.js";import"../symbols/Symbol3DLayer.js";import"../chunks/utils4.js";import"../symbols/edges/Edges3D.js";import"../chunks/screenUtils.js";import"../chunks/materialUtils.js";import"../chunks/opacityUtils.js";import"../symbols/edges/SketchEdges3D.js";import"../symbols/edges/SolidEdges3D.js";import"../chunks/Symbol3DMaterial.js";import"../symbols/FillSymbol.js";import"../symbols/SimpleLineSymbol.js";import"../symbols/LineSymbol.js";import"../symbols/LineSymbolMarker.js";import"../chunks/lineMarkers.js";import"../symbols/FillSymbol3DLayer.js";import"../symbols/patterns/LineStylePattern3D.js";import"../symbols/patterns/StylePattern3D.js";import"../chunks/utils5.js";import"../chunks/colors.js";import"../chunks/symbolLayerUtils3D.js";import"../chunks/aaBoundingBox.js";import"../symbols/Font.js";import"../symbols/IconSymbol3DLayer.js";import"../chunks/persistableUrlUtils.js";import"../chunks/Symbol3DAnchorPosition2D.js";import"../symbols/LabelSymbol3D.js";import"../symbols/Symbol3D.js";import"../chunks/collectionUtils.js";import"../portal/Portal.js";import"../core/Loadable.js";import"../portal/PortalGroup.js";import"../portal/PortalQueryParams.js";import"../portal/PortalQueryResult.js";import"../portal/PortalUser.js";import"../portal/PortalFolder.js";import"../symbols/LineSymbol3DLayer.js";import"../symbols/LineStyleMarker3D.js";import"../symbols/ObjectSymbol3DLayer.js";import"../symbols/PathSymbol3DLayer.js";import"../symbols/TextSymbol3DLayer.js";import"../symbols/WaterSymbol3DLayer.js";import"../symbols/support/StyleOrigin.js";import"../chunks/Thumbnail.js";import"../chunks/calloutUtils.js";import"../symbols/callouts/Callout3D.js";import"../symbols/callouts/LineCallout3D.js";import"../symbols/support/Symbol3DVerticalOffset.js";import"../symbols/LineSymbol3D.js";import"../symbols/MarkerSymbol.js";import"../symbols/MeshSymbol3D.js";import"../symbols/PictureFillSymbol.js";import"../chunks/urlUtils.js";import"../symbols/PictureMarkerSymbol.js";import"../symbols/PointSymbol3D.js";import"../symbols/PolygonSymbol3D.js";import"../symbols/SimpleFillSymbol.js";import"../symbols/SimpleMarkerSymbol.js";import"../symbols/TextSymbol.js";import"../symbols/WebStyleSymbol.js";import"../chunks/layerViewUtils.js";import"./Search/LayerSearchSource.js";import"./Search/SearchSource.js";import"../chunks/FullTextSearch.js";import"../chunks/geometryUtils3.js";import"../chunks/scaleUtils.js";import"./Search/LocatorSearchSource.js";import"../chunks/suggestLocations.js";import"../chunks/utils6.js";import"../rest/support/AddressCandidate.js";import"../chunks/commonProperties3.js";import"../chunks/geolocationUtils.js";import"../chunks/project.js";import"../chunks/utils7.js";import"../rest/support/ProjectParameters.js";import"./support/GoTo.js";const S="esri-search",w={base:S,widgetIcon:p.search,hasMultipleSources:`${S}--multiple-sources`,isLoading:`${S}--loading`,isSearching:`${S}--searching`,showSuggestions:`${S}--show-suggestions`,showSources:`${S}--sources`,showWarning:`${S}--warning`,container:`${S}__container`,input:`${S}__input`,inputContainer:`${S}__input-container`,form:`${S}__form`,submitButton:`${S}__submit-button`,sourcesButton:`${S}__sources-button`,sourcesButtonDown:`${S}__sources-button--down`,sourcesButtonUp:`${S}__sources-button--up`,clearButton:`${S}__clear-button`,sourceName:`${S}__source-name`,suggestionsMenu:`${S}__suggestions-menu`,suggestionList:`${S}__suggestions-list`,suggestionListCurrentLocation:`${S}__suggestions-list--current-location`,sourcesMenu:`${S}__sources-menu`,source:`${S}__source`,warningMenu:`${S}__warning-menu`,warningMenuBody:`${S}__warning-body`,warningMenuHeader:`${S}__warning-header`,warningMenuText:`${S}__warning-text`,noValueText:`${S}__no-value-text`},I=/<[a-z/][\s\S]*>/i;let k=class extends h{constructor(e,t){super(e,t),this._activeMenuItemIndex=-1,this._inputNode=null,this._menuItemCount=0,this._sourceMenuButtonNode=null,this._sourceListNode=null,this._suggestionListNode=null,this._searchResultRenderer=new d,this._suggestController=null,this._searchController=null,this._locateFailed=!1,this._container=null,this.activeMenu="none",this.disabled=!1,this.iconClass=w.widgetIcon,this.icon=null,this.messages=null,this.messagesCommon=null,this.viewModel=new m,this._clearActiveMenu=()=>{this.activeMenu="none"},this._removeActiveMenu=e=>{const t=e.relatedTarget;t&&this._container?.contains(t)||this._clearActiveMenu()},this.addHandles([i((()=>this.searchTerm),(e=>{(e&&"warning"===this.activeMenu||!e&&!this.viewModel?.selectedSuggestion?.location)&&this._clearActiveMenu()})),n((()=>this.viewModel?.allSources),"change",(()=>this._watchSourceChanges())),i((()=>this.activeMenu),(()=>this._resetActiveMenuItemIndex()),l),i((()=>this.viewModel?.defaultPopupTemplate),(e=>{e&&(e.content=this._renderSearchResultsContent.bind(this))}),l)])}destroy(){this._cancelSuggest(),this._cancelSearch(),this._searchResultRenderer=o(this._searchResultRenderer)}get displayedSearchTerm(){return`${this.viewModel.searchTerm}`.trim()}get inputId(){return this._buildId("input")}get suggestionsMenuId(){return this._buildId("suggest-menu")}get sourceMenuId(){return this._buildId("source-menu")}get sourceMenuButtonId(){return this._buildId("source-menu-button")}get activeSource(){return this.viewModel?.activeSource}get activeSourceIndex(){return this.viewModel.activeSourceIndex}set activeSourceIndex(e){this.viewModel.activeSourceIndex=e}get allPlaceholder(){return this.viewModel.allPlaceholder}set allPlaceholder(e){this.viewModel.allPlaceholder=e}get allSources(){return this.viewModel.allSources}get autoNavigate(){return this.viewModel.autoNavigate}set autoNavigate(e){this.viewModel.autoNavigate=e}get autoSelect(){return this.viewModel.autoSelect}set autoSelect(e){this.viewModel.autoSelect=e}get defaultSources(){return this.viewModel.defaultSources}get goToOverride(){return this.viewModel.goToOverride}set goToOverride(e){this.viewModel.goToOverride=e}get includeDefaultSources(){return this.viewModel.includeDefaultSources}set includeDefaultSources(e){this.viewModel.includeDefaultSources=e}get label(){return this.messages?.widgetLabel??""}set label(e){this._overrideIfSome("label",e)}get locationEnabled(){return this.viewModel.locationEnabled}set locationEnabled(e){this.viewModel.locationEnabled=e}get maxResults(){return this.viewModel.maxResults}set maxResults(e){this.viewModel.maxResults=e}get maxSuggestions(){return this.viewModel.maxSuggestions}set maxSuggestions(e){this.viewModel.maxSuggestions=e}get minSuggestCharacters(){return this.viewModel.minSuggestCharacters}set minSuggestCharacters(e){this.viewModel.minSuggestCharacters=e}get popupEnabled(){return this.viewModel.popupEnabled}set popupEnabled(e){this.viewModel.popupEnabled=e}get popupTemplate(){return this.viewModel.popupTemplate}set popupTemplate(e){this.viewModel.popupTemplate=e}get portal(){return this.viewModel?.portal}set portal(e){this.viewModel&&(this.viewModel.portal=e)}get resultGraphic(){return this.viewModel.resultGraphic}set resultGraphic(e){this.viewModel.resultGraphic=e}get resultGraphicEnabled(){return this.viewModel.resultGraphicEnabled}set resultGraphicEnabled(e){this.viewModel.resultGraphicEnabled=e}get results(){return this.viewModel.results}get searchAllEnabled(){return this.viewModel.searchAllEnabled}set searchAllEnabled(e){this.viewModel.searchAllEnabled=e}get searchTerm(){return this.viewModel.searchTerm}set searchTerm(e){this.viewModel.searchTerm=e}get selectedResult(){return this.viewModel.selectedResult}get sources(){return this.viewModel.sources}set sources(e){this.viewModel.sources=e}get suggestions(){return this.viewModel.suggestions}get suggestionsEnabled(){return this.viewModel.suggestionsEnabled}set suggestionsEnabled(e){this.viewModel.suggestionsEnabled=e}get view(){return this.viewModel.view}set view(e){this.viewModel.view=e}clear(){this.viewModel.clear()}focus(){this._inputNode?.focus(),this.emit("search-focus")}blur(){this._inputNode?.blur(),this.emit("search-blur")}async search(e){this._clearActiveMenu(),this._cancelSuggest(),this._cancelSearch();const t=new AbortController,{signal:s}=t;this._searchController=t;try{const o=await this.viewModel.search(e,{signal:s});if(this._searchController!==t)return;return this.activeMenu=o?.numResults?"none":"warning",this._searchController=null,o}catch(e){if(this._searchController!==t)return;return this._clearActiveMenu(),void(this._searchController=null)}}async suggest(e){this._cancelSuggest();const t=new AbortController,{signal:s}=t;this._suggestController=t;try{const o=await this.viewModel.suggest(e,null,{signal:s});if(this._suggestController!==t)return;return this._suggestController=null,o?.numResults&&this._openSuggestionMenu(),this._scrollToTopSuggestion(),o}catch(e){return this._suggestController!==t||(this._suggestController=null),null}}render(){const{state:e}=this.viewModel,t={[g.disabled]:"disabled"===e,[g.widgetDisabled]:this.disabled};return j("div",{class:this.classes(w.base,g.widget,t)},"loading"===e?this._renderLoader():this._renderContainer())}_renderSubmitButton(){const{messages:e,disabled:t}=this;return j("button",{"aria-label":e.searchButtonTitle,bind:this,class:this.classes(w.submitButton,g.widgetButton),disabled:t,key:"esri-search__submit-button",onclick:this._handleSearchButtonClick,title:e.searchButtonTitle,type:"button"},j("span",{"aria-hidden":"true",class:p.search}))}_renderWarningMenu(){return j("div",{class:this.classes(g.menu,w.warningMenu),key:"esri-search__error-menu"},j("div",{class:w.warningMenuBody},this._renderWarning()))}_renderSourceMenuButton(){const{messages:e,activeMenu:t,sourceMenuId:s,sourceMenuButtonId:o,disabled:r}=this,{activeSourceIndex:i,allSources:n}=this.viewModel;return n.length>1?j("button",{afterCreate:_,"aria-controls":s,"aria-expanded":("source"===t).toString(),"aria-haspopup":"true","aria-label":e.searchIn,bind:this,class:this.classes(w.sourcesButton,g.widgetButton),"data-node-ref":"_sourceMenuButtonNode",disabled:r,id:o,key:"esri-search__source-menu-button",onclick:this._handleSourcesMenuToggleClick,onfocus:this._handleSourcesMenuToggleFocus,title:e.searchIn,type:"button"},j("span",{"aria-hidden":"true",class:this.classes(p.downArrow,w.sourcesButtonDown)}),j("span",{"aria-hidden":"true",class:this.classes(p.upArrow,w.sourcesButtonUp)}),j("span",{class:w.sourceName},this._getSourceName(i))):null}_renderSourcesList(){const{allSources:e,searchAllEnabled:t}=this.viewModel,{_activeMenuItemIndex:s,activeMenu:o,sourceMenuId:r,sourceMenuButtonId:i}=this,n="source"===o&&s>-1?this._buildId("source-item",s):null;return e.length>1?j("ul",{afterCreate:_,"aria-activedescendant":n,"aria-labelledby":i,bind:this,class:g.menuList,"data-node-ref":"_sourceListNode",id:r,onkeydown:this._handleSourceMenuKeydown,onkeyup:this._handleSourceMenuKeyup,role:"menu",tabIndex:-1},t?this._renderSource(m.ALL_INDEX):null,e.map(((e,t)=>this._renderSource(t))).toArray()):null}_renderSourcesMenu(){const{allSources:e}=this.viewModel;return e.length>1?j("div",{class:this.classes(g.menu,w.sourcesMenu),key:"esri-search__source-menu"},this._renderSourcesList()):null}_renderLoader(){const{messages:e,messagesCommon:t,disabled:s}=this;return j("div",{class:g.loader,key:"base-loader",tabIndex:s?-1:void 0},j("span",{"aria-hidden":"true",class:g.loaderAnimation}),j("span",{class:p.fontFallbackText},e.searchButtonTitle),j("span",{class:g.loaderText},t.loading))}_renderContainer(){const{allSources:e,state:t}=this.viewModel,{activeMenu:s}=this,o={[w.hasMultipleSources]:e.length>1,[w.isLoading]:"loading"===t,[w.isSearching]:"searching"===t,[w.showWarning]:"warning"===s,[w.showSources]:"source"===s,[w.showSuggestions]:"suggestion"===s};return j("div",{afterCreate:e=>{this._container=e,e.addEventListener("focusout",this._removeActiveMenu)},afterRemoved:e=>{e.removeEventListener("focusout",this._removeActiveMenu)},class:this.classes(o,w.container),key:"base-container",tabIndex:-1},this._renderSourceMenuButton(),this._renderSourcesMenu(),this._renderInputContainer(),this._renderSubmitButton(),this._renderWarningMenu())}_renderClearButton(){return this.searchTerm?j("button",{bind:this,class:this.classes(w.clearButton,g.widgetButton),disabled:this.disabled,key:"esri-search__clear-button",onclick:this._handleClearButtonClick,onfocus:this._clearActiveMenu,title:this.messages.clearButtonTitle,type:"button"},j("span",{"aria-hidden":"true",class:p.close})):null}_renderLocationGroup(){const{messages:e,locationEnabled:t,displayedSearchTerm:s}=this,o=t&&!s,r="suggestion"===this.activeMenu&&0===this._activeMenuItemIndex;return o?j("ul",{class:this.classes(g.menuList,w.suggestionList,w.suggestionListCurrentLocation),key:"esri-search__suggestion-list-current-location",role:"group"},j("li",{"aria-selected":("suggestion"===this.activeMenu&&0===this._activeMenuItemIndex).toString(),bind:this,class:this.classes(g.menuItem,r?g.menuItemFocus:null),"data-current-location-item":!0,id:this._buildId("suggestion-item",0),onclick:this._handleUseCurrentLocationClick,role:"option"},j("span",{"aria-hidden":"true",class:p.locateCircled})," ",e.useCurrentLocation)):null}_renderInput(){const{activeMenu:e,locationEnabled:t,displayedSearchTerm:s,messages:o,suggestionsMenuId:r,inputId:i,_activeMenuItemIndex:n,disabled:l}=this,{maxInputLength:u,placeholder:a,searchTerm:c,suggestionCount:h}=this.viewModel,p=!((!t||s)&&!h),d="suggestion"===e&&n>-1?this._buildId("suggestion-item",n):null;return j("input",{afterCreate:_,"aria-activedescendant":d,"aria-autocomplete":"list","aria-controls":p?r:null,"aria-expanded":(p&&"suggestion"===e).toString(),"aria-haspopup":"listbox","aria-label":o.searchButtonTitle,autocomplete:"off",bind:this,class:this.classes(g.input,w.input),"data-node-ref":"_inputNode",disabled:l,id:i,maxlength:u,onblur:this.blur,onclick:this._openSuggestionMenu,onfocus:this.focus,oninput:this._handleInputPaste,onkeyup:this._handleInputKeyup,onpaste:this._handleInputPaste,placeholder:a,role:"combobox",title:c?"":a,type:"text",value:c})}_renderForm(){return j("form",{bind:this,class:w.form,disabled:this.disabled,key:"esri-search__form",onsubmit:this._formSubmit,role:"search"},this._renderInput())}_renderSuggestList(e){const{sourceIndex:t}=e,{results:s}=e,o=s?.length;return o?j("ul",{class:this.classes(g.menuList,w.suggestionList),key:`esri-search__suggestion-list-${t}`,role:"group"},s?.map((e=>this._renderSuggestion(e,this._menuItemCount++)))):null}_renderSuggestionsGroup(){const{suggestions:e}=this.viewModel;return e?e.map((e=>[this._renderSuggestionHeader(e),this._renderSuggestList(e)])):[]}_renderSuggestionsMenu(){const{displayedSearchTerm:e,locationEnabled:t,suggestionsMenuId:s,inputId:o}=this,{suggestionCount:r}=this.viewModel,i=t&&!e||r;return this._menuItemCount=0,i?j("div",{afterCreate:_,"aria-labelledby":o,bind:this,class:this.classes(g.menu,w.suggestionsMenu),"data-node-ref":"_suggestionListNode",id:s,key:"esri-search__suggestions-menu",role:"listbox"},this._renderLocationGroup(),this._renderSuggestionsGroup()):null}_renderInputContainer(){return j("div",{class:w.inputContainer,key:"esri-search__input-container"},this._renderForm(),this._renderSuggestionsMenu(),this._renderClearButton())}_renderSuggestionHeader(e){const{allSources:t,activeSourceIndex:s}=this.viewModel,{sourceIndex:o}=e,r=e.results?.length,i=t.length>1&&s===m.ALL_INDEX;return r&&i?j("div",{class:g.menuHeader,key:`esri-search__suggestion-header-${o}`},this._getSourceName(o)):null}_renderSuggestion(e,t){const{_activeMenuItemIndex:s,viewModel:{searchTerm:o}}=this;if(!o)return;const r="suggestion"===this.activeMenu&&s===t;return j("li",{"aria-selected":("suggestion"===this.activeMenu&&this._activeMenuItemIndex===t).toString(),bind:this,class:this.classes(g.menuItem,r?g.menuItemFocus:null),"data-suggestion":e,id:this._buildId("suggestion-item",t),innerHTML:this._getSuggestResultHTML(e.text,o),key:`esri-search__suggestion_${t}`,onclick:this._handleSuggestionClick,role:"option"})}_renderSource(e){const{activeSourceIndex:t,searchAllEnabled:s}=this.viewModel,o={[g.menuItemActive]:e===t,[g.menuItemFocus]:"source"===this.activeMenu&&e===(s?this._activeMenuItemIndex-1:this._activeMenuItemIndex)},r=s?e+1:e;return j("li",{"aria-checked":(e===t).toString(),bind:this,class:this.classes(w.source,g.menuItem,o),"data-source-index":e,id:this._buildId("source-item",r),key:`esri-search__source-${e}`,onclick:this._handleSourceClick,role:"menuitemradio"},this._getSourceName(e))}_renderNoResultsWarning(e){const{messages:s}=this,o=e?t(s.noResultsFoundForValue,{value:`"${e}"`}):s.noResultsFound;return j("div",{key:"esri-search__no_results"},j("div",{class:w.warningMenuHeader},s.noResults),j("div",{class:w.warningMenuText},o))}_renderEmptySearchWarning(){const{messages:e}=this;return j("div",{key:"esri-search__empty-search"},j("span",{"aria-hidden":"true",class:p.noticeTriangle}),j("span",{class:w.noValueText},e.emptyValue))}_renderLocateWarning(){const{messages:e}=this;return j("div",{key:"esri-search__locate-error"},j("span",{"aria-hidden":"true",class:p.noticeTriangle}),j("span",{class:w.noValueText},e.locateError))}_renderWarning(){const{displayedSearchTerm:e,_locateFailed:t}=this,{viewModel:s}=this;return t?this._renderLocateWarning():s.selectedSuggestion?.location||e?this._renderNoResultsWarning(e):this._renderEmptySearchWarning()}_resetActiveMenuItemIndex(){this._activeMenuItemIndex=-1}_buildId(e,t){return`${this.id}-${e}${void 0===t?"":`-${t}`}`}_watchSourceChanges(){const{viewModel:{allSources:e}}=this,t="sources";this.removeHandles(t),e.forEach((e=>this.addHandles(i((()=>e.name),(()=>this.scheduleRender())),t)))}_handleSourcesMenuToggleFocus(){"source"!==this.activeMenu&&this._clearActiveMenu()}_handleSourcesMenuToggleClick(){const e="source"===this.activeMenu;this.activeMenu=e?"none":"source",this.renderNow(),"source"===this.activeMenu&&this._sourceListNode?.focus()}_handleClearButtonClick(){this.viewModel.clear(),this._focus()}_handleSearchButtonClick(){this.search()}_handleSuggestionClick(e){const t=f(e.currentTarget);t&&(this._focus(),this.search(t))}_handleUseCurrentLocationClick(){this._useCurrentLocation()}_useCurrentLocation(){this._focus("none"),this._cancelSuggest(),this._cancelSearch();const e=new AbortController,{signal:t}=e;this._searchController=e,(async()=>{try{const e=await this.viewModel.searchNearby({signal:t});this.activeMenu=e?.numResults?"none":"warning"}catch(e){this._locateFailed=!0,this.activeMenu="warning"}finally{this._searchController=null}})()}_handleSourceClick(e){this._setSourceFromMenuItem(e.currentTarget)}_setSourceFromMenuItem(e){if(!e)return;const t=(s=e,s?.["data-source-index"]);var s;null!=t&&(this.viewModel.activeSourceIndex=t,this._clearActiveMenu(),this._sourceMenuButtonNode?.focus())}_cancelSuggest(){this._suggestController=r(this._suggestController)}_cancelSearch(){this._searchController=r(this._searchController),this._locateFailed=!1}_handleInputKeyup(e){const t=s(e);if(e.ctrlKey||e.metaKey||"Copy"===t||"ArrowLeft"===t||"ArrowRight"===t||"Shift"===t)return;if("Tab"===t||"Escape"===t||e.shiftKey&&"Tab"===t)return this._cancelSuggest(),void("Escape"===t&&this._clearActiveMenu());const o="Home"===t||"End"===t||"ArrowUp"===t||"ArrowDown"===t;if("Enter"===t&&this._activeMenuItemIndex<0)return void this._cancelSuggest();const r=this._suggestionListNode?.getElementsByTagName("li");if(r?.length){if("suggestion"!==this.activeMenu&&this._openSuggestionMenu(),o)return e.preventDefault(),this._cancelSuggest(),void this._handleItemNavigation(t,r,this._suggestionListNode);const s=r[this._activeMenuItemIndex];if("Enter"===t&&s){const e=f(s);return void(e?(this._focus(),this.search(e)):(i=s,i?.["data-current-location-item"]&&this._useCurrentLocation()))}}var i;this.viewModel.searchTerm&&this.suggest()}_handleItemNavigation(e,t,s){const o=this._activeMenuItemIndex;"Home"===e&&(this._activeMenuItemIndex=0),"End"===e&&(this._activeMenuItemIndex=t.length-1),"ArrowUp"===e&&(this._activeMenuItemIndex=this._activeMenuItemIndex<=0?t.length-1:this._activeMenuItemIndex-1),"ArrowDown"===e&&(this._activeMenuItemIndex=this._activeMenuItemIndex===t.length-1?0:this._activeMenuItemIndex+1),o!==this._activeMenuItemIndex&&s&&v(t[this._activeMenuItemIndex],s)}_scrollToTopSuggestion(){this._suggestionListNode&&(this._suggestionListNode.scrollTop=0)}_openSuggestionMenu(){this.activeMenu="suggestion"}_handleInputPaste(e){const t=e.target;this.viewModel.searchTerm!==t.value&&(this.viewModel.searchTerm=t.value),this.viewModel.searchTerm&&this.suggest()}_handleSourceMenuKeydown(e){const t=s(e);if(y(t)){e.preventDefault();const t=this._sourceListNode?.getElementsByTagName("li"),s=t?.[this._activeMenuItemIndex];this._setSourceFromMenuItem(s)}else"ArrowUp"!==t&&"ArrowDown"!==t&&"End"!==t&&"Home"!==t||e.preventDefault()}_handleSourceMenuKeyup(e){const t=s(e),o="ArrowUp"===t||"ArrowDown"===t||"End"===t||"Home"===t;if(o&&e.preventDefault(),"Escape"===t)return this._clearActiveMenu(),void this._sourceMenuButtonNode?.focus();const r=this._sourceListNode?.getElementsByTagName("li");return r&&0!==r.length&&o?("source"!==this.activeMenu&&(this.activeMenu="source"),void this._handleItemNavigation(t,r,this._sourceListNode?.parentElement)):void 0}_focus(e){this.focus(),e&&(this.activeMenu=e)}_formSubmit(e){e.preventDefault(),-1===this._activeMenuItemIndex&&this.search()}_getSourceName(e){const{messages:t}=this,s=this.viewModel,{allSources:o}=s,r=o.at(e);return e===m.ALL_INDEX?t.all:r&&r.name||t.untitledSource}_getSuggestResultHTML(e,t){return e?I.test(e)?e:((e,t)=>{const s=u(t).split(/\s/),o=new RegExp(`(${s.join("|")})`,"gi");return e.replace(o,(e=>`<strong>${e}</strong>`))})(e,t):this.messages.untitledResult}_renderSearchResultsContent(){return this._searchResultRenderer.showMoreResultsOpen=!1,this._searchResultRenderer.viewModel=this.viewModel,this._searchResultRenderer}};function f(e){return e?.["data-suggestion"]}e([a()],k.prototype,"_activeMenuItemIndex",void 0),e([a()],k.prototype,"displayedSearchTerm",null),e([a({readOnly:!0})],k.prototype,"inputId",null),e([a({readOnly:!0})],k.prototype,"suggestionsMenuId",null),e([a({readOnly:!0})],k.prototype,"sourceMenuId",null),e([a({readOnly:!0})],k.prototype,"sourceMenuButtonId",null),e([a()],k.prototype,"activeMenu",void 0),e([a({readOnly:!0})],k.prototype,"activeSource",null),e([a()],k.prototype,"activeSourceIndex",null),e([a()],k.prototype,"allPlaceholder",null),e([a({readOnly:!0})],k.prototype,"allSources",null),e([a()],k.prototype,"autoNavigate",null),e([a()],k.prototype,"autoSelect",null),e([a({readOnly:!0})],k.prototype,"defaultSources",null),e([a()],k.prototype,"disabled",void 0),e([a()],k.prototype,"goToOverride",null),e([a()],k.prototype,"iconClass",void 0),e([a()],k.prototype,"icon",void 0),e([a()],k.prototype,"includeDefaultSources",null),e([a()],k.prototype,"label",null),e([a()],k.prototype,"locationEnabled",null),e([a()],k.prototype,"maxResults",null),e([a()],k.prototype,"maxSuggestions",null),e([a(),M("esri/widgets/Search/t9n/Search")],k.prototype,"messages",void 0),e([a(),M("esri/t9n/common")],k.prototype,"messagesCommon",void 0),e([a()],k.prototype,"minSuggestCharacters",null),e([a()],k.prototype,"popupEnabled",null),e([a()],k.prototype,"popupTemplate",null),e([a()],k.prototype,"portal",null),e([a()],k.prototype,"resultGraphic",null),e([a()],k.prototype,"resultGraphicEnabled",null),e([a({readOnly:!0})],k.prototype,"results",null),e([a()],k.prototype,"searchAllEnabled",null),e([a()],k.prototype,"searchTerm",null),e([a({readOnly:!0})],k.prototype,"selectedResult",null),e([a()],k.prototype,"sources",null),e([a({readOnly:!0})],k.prototype,"suggestions",null),e([a()],k.prototype,"suggestionsEnabled",null),e([a()],k.prototype,"view",null),e([b(["search-complete","search-clear","search-start","select-result","suggest-start","suggest-complete"]),a({type:m})],k.prototype,"viewModel",void 0),k=e([c("esri.widgets.Search")],k);const C=k;export{C as default};
