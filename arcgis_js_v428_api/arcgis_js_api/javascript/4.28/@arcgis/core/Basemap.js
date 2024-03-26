/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
import{_ as e}from"./chunks/tslib.es6.js";import r from"./request.js";import s from"./core/Collection.js";import{r as a}from"./chunks/collectionUtils.js";import{JSONSupportMixin as t}from"./core/JSONSupport.js";import{isClonable as i,clone as l}from"./core/lang.js";import o from"./core/Loadable.js";import{l as c}from"./chunks/loadAll.js";import{L as p}from"./chunks/Logger.js";import{d as y}from"./chunks/maybe.js";import{throwIfAborted as n}from"./core/promiseUtils.js";import{isProtocolRelative as d,urlToObject as m}from"./core/urlUtils.js";import{property as g}from"./core/accessorSupport/decorators/property.js";import"./chunks/ensureType.js";import{subclass as h}from"./core/accessorSupport/decorators/subclass.js";import{w as b}from"./chunks/writer.js";import u from"./geometry/SpatialReference.js";import v from"./portal/Portal.js";import L from"./portal/PortalItem.js";import{g as S}from"./chunks/assets.js";import{f}from"./chunks/messages.js";import T from"./support/BasemapStyle.js";import{g as M}from"./chunks/writeUtils.js";import"./config.js";import"./chunks/typedArrayUtil.js";import"./kernel.js";import"./core/Error.js";import"./core/Accessor.js";import"./core/Handles.js";import"./chunks/metadata.js";import"./chunks/utils.js";import"./chunks/handleUtils.js";import"./chunks/ObjectPool.js";import"./chunks/ObservableBase.js";import"./chunks/tracking.js";import"./core/scheduling.js";import"./chunks/nextTick.js";import"./chunks/PooledArray.js";import"./chunks/time.js";import"./core/Evented.js";import"./chunks/shared.js";import"./chunks/SimpleObservable.js";import"./core/Promise.js";import"./chunks/asyncUtils.js";import"./chunks/unitUtils.js";import"./chunks/jsonMap.js";import"./chunks/Ellipsoid.js";import"./chunks/reader.js";import"./geometry/Extent.js";import"./geometry/Geometry.js";import"./geometry/Point.js";import"./core/accessorSupport/decorators/cast.js";import"./geometry/support/webMercatorUtils.js";import"./chunks/locale.js";import"./portal/PortalGroup.js";import"./portal/PortalQueryParams.js";import"./portal/PortalQueryResult.js";import"./portal/PortalUser.js";import"./portal/PortalFolder.js";import"./portal/PortalItemResource.js";import"./portal/PortalRating.js";import"./chunks/layerUtils2.js";const I={satellite:{id:"satellite",classic:!0,get thumbnailUrl(){return S("esri/images/basemap/satellite.jpg")},baseMapLayers:[{id:"satellite-base-layer",url:"//services.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer",layerType:"ArcGISTiledMapServiceLayer",title:"World Imagery",showLegend:!1,visibility:!0,opacity:1}]},hybrid:{id:"hybrid",classic:!0,get thumbnailUrl(){return S("esri/images/basemap/hybrid.jpg")},baseMapLayers:[{id:"hybrid-base-layer",url:"//services.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer",layerType:"ArcGISTiledMapServiceLayer",title:"World Imagery",showLegend:!1,visibility:!0,opacity:1},{id:"hybrid-reference-layer",styleUrl:"https://cdn.arcgis.com/sharing/rest/content/items/30d6b8271e1849cd9c3042060001f425/resources/styles/root.json",layerType:"VectorTileLayer",title:"Hybrid Reference Layer",isReference:!0,showLegend:!1,visibility:!0,opacity:1}]},terrain:{id:"terrain",classic:!0,get thumbnailUrl(){return S("esri/images/basemap/terrain.jpg")},baseMapLayers:[{id:"terrain-base-layer",url:"//services.arcgisonline.com/ArcGIS/rest/services/World_Terrain_Base/MapServer",layerType:"ArcGISTiledMapServiceLayer",title:"World Terrain Base",showLegend:!1,visibility:!0,opacity:1},{id:"terrain-reference-layer",url:"//services.arcgisonline.com/ArcGIS/rest/services/Reference/World_Reference_Overlay/MapServer",layerType:"ArcGISTiledMapServiceLayer",title:"World Reference Overlay",isReference:!0,showLegend:!1,visibility:!0,opacity:1}]},oceans:{id:"oceans",classic:!0,get thumbnailUrl(){return S("esri/images/basemap/oceans.jpg")},baseMapLayers:[{id:"oceans-base-layer",url:"//services.arcgisonline.com/arcgis/rest/services/Ocean/World_Ocean_Base/MapServer",layerType:"ArcGISTiledMapServiceLayer",title:"World Ocean Base",showLegend:!1,visibility:!0,opacity:1},{id:"oceans-reference-layer",url:"//services.arcgisonline.com/arcgis/rest/services/Ocean/World_Ocean_Reference/MapServer",layerType:"ArcGISTiledMapServiceLayer",title:"World Ocean Reference",isReference:!0,showLegend:!1,visibility:!0,opacity:1}]},osm:{id:"osm",classic:!0,get thumbnailUrl(){return S("esri/images/basemap/osm.jpg")},baseMapLayers:[{id:"osm-base-layer",layerType:"OpenStreetMap",title:"Open Street Map",showLegend:!1,visibility:!0,opacity:1}]},"dark-gray-vector":{id:"dark-gray-vector",classic:!0,get thumbnailUrl(){return S("esri/images/basemap/dark-gray-vector.jpg")},baseMapLayers:[{id:"dark-gray-base-layer",styleUrl:"https://cdn.arcgis.com/sharing/rest/content/items/5e9b3685f4c24d8781073dd928ebda50/resources/styles/root.json",layerType:"VectorTileLayer",title:"Dark Gray Base",visibility:!0,opacity:1},{id:"dark-gray-reference-layer",styleUrl:"https://cdn.arcgis.com/sharing/rest/content/items/747cb7a5329c478cbe6981076cc879c5/resources/styles/root.json",layerType:"VectorTileLayer",title:"Dark Gray Reference",isReference:!0,visibility:!0,opacity:1}]},get"dark-gray"(){return{...this["dark-gray-vector"],id:"dark-gray"}},"gray-vector":{id:"gray-vector",classic:!0,get thumbnailUrl(){return S("esri/images/basemap/gray-vector.jpg")},baseMapLayers:[{id:"gray-base-layer",styleUrl:"https://cdn.arcgis.com/sharing/rest/content/items/291da5eab3a0412593b66d384379f89f/resources/styles/root.json",layerType:"VectorTileLayer",title:"Light Gray Base",visibility:!0,opacity:1},{id:"gray-reference-layer",styleUrl:"https://cdn.arcgis.com/sharing/rest/content/items/1768e8369a214dfab4e2167d5c5f2454/resources/styles/root.json",layerType:"VectorTileLayer",title:"Light Gray Reference",isReference:!0,visibility:!0,opacity:1}]},get gray(){return{...this["gray-vector"],id:"gray"}},"streets-vector":{id:"streets-vector",classic:!0,get thumbnailUrl(){return S("esri/images/basemap/streets-vector.jpg")},baseMapLayers:[{id:"streets-vector-base-layer",styleUrl:"//cdn.arcgis.com/sharing/rest/content/items/de26a3cf4cc9451298ea173c4b324736/resources/styles/root.json",layerType:"VectorTileLayer",title:"World Streets",visibility:!0,opacity:1}]},get streets(){return{...this["streets-vector"],id:"streets"}},"topo-vector":{id:"topo-vector",classic:!0,get thumbnailUrl(){return S("esri/images/basemap/topo-vector.jpg")},baseMapLayers:[{id:"world-hillshade-layer",url:"//services.arcgisonline.com/arcgis/rest/services/Elevation/World_Hillshade/MapServer",layerType:"ArcGISTiledMapServiceLayer",title:"World Hillshade",showLegend:!1,visibility:!0,opacity:1},{id:"topo-vector-base-layer",styleUrl:"//cdn.arcgis.com/sharing/rest/content/items/7dc6cea0b1764a1f9af2e679f642f0f5/resources/styles/root.json",layerType:"VectorTileLayer",title:"World Topo",visibility:!0,opacity:1}]},get topo(){return{...this["topo-vector"],id:"topo"}},"streets-night-vector":{id:"streets-night-vector",classic:!0,get thumbnailUrl(){return S("esri/images/basemap/streets-night.jpg")},baseMapLayers:[{id:"streets-night-vector-base-layer",styleUrl:"//cdn.arcgis.com/sharing/rest/content/items/86f556a2d1fd468181855a35e344567f/resources/styles/root.json",layerType:"VectorTileLayer",title:"World Streets Night",visibility:!0,opacity:1}]},"streets-relief-vector":{id:"streets-relief-vector",classic:!0,get thumbnailUrl(){return S("esri/images/basemap/streets-relief.jpg")},baseMapLayers:[{id:"world-hillshade-layer",url:"//services.arcgisonline.com/arcgis/rest/services/Elevation/World_Hillshade/MapServer",layerType:"ArcGISTiledMapServiceLayer",title:"World Hillshade",showLegend:!1,visibility:!0,opacity:1},{id:"streets-relief-vector-base-layer",styleUrl:"//www.arcgis.com/sharing/rest/content/items/b266e6d17fc345b498345613930fbd76/resources/styles/root.json",title:"World Streets Relief",layerType:"VectorTileLayer",visibility:!0,opacity:1}]},"streets-navigation-vector":{id:"streets-navigation-vector",classic:!0,get thumbnailUrl(){return S("esri/images/basemap/streets-navigation.jpg")},baseMapLayers:[{id:"streets-navigation-vector-base-layer",styleUrl:"//cdn.arcgis.com/sharing/rest/content/items/63c47b7177f946b49902c24129b87252/resources/styles/root.json",layerType:"VectorTileLayer",title:"World Streets Navigation",visibility:!0,opacity:1}]},"topo-3d":{id:"topo-3d",is3d:!0,get thumbnailUrl(){return S("esri/images/basemap/topo-3d.png")},baseMapLayers:[{id:"topo-3d-base-layer",styleUrl:"https://www.arcgis.com/sharing/rest/content/items/1e7d1784d1ef4b79ba6764d0bd6c3150/resources/styles/root.json",layerType:"VectorTileLayer",title:"Topographic",visibility:!0,opacity:1},{id:"topo-3d-trees",title:"Trees",url:"https://basemaps3d.arcgis.com/arcgis/rest/services/OpenStreetMap3D_Trees_Thematic_v1/SceneServer",itemId:"f75fef56b2d944fe92ef9f7737b4f953",layerType:"ArcGISSceneServiceLayer"},{id:"topo-3d-places-and-labels",title:"Places and Labels",url:"https://basemaps3d.arcgis.com/arcgis/rest/services/OpenStreetMap3D_DarkLabels_v1/SceneServer",itemId:"a84404ad39c64c328d0596e361ec459b",layerType:"ArcGISSceneServiceLayer"},{id:"topo-3d-buildings",title:"Buildings",url:"https://basemaps3d.arcgis.com/arcgis/rest/services/OpenStreetMap3D_Buildings_v1/SceneServer",itemId:"ca0470dbbddb4db28bad74ed39949e25",layerType:"ArcGISSceneServiceLayer"}]},"navigation-3d":{id:"navigation-3d",is3d:!0,get thumbnailUrl(){return S("esri/images/basemap/navigation-3d.jpg")},baseMapLayers:[{id:"navigation-3d-base-layer",styleUrl:"https://www.arcgis.com/sharing/rest/content/items/ccc904ff872b4144b94934e55e32784b/resources/styles/root.json",layerType:"VectorTileLayer",title:"Navigation",visibility:!0,opacity:1},{id:"navigation-3d-places-and-labels",title:"Places and Labels",url:"https://basemaps3d.arcgis.com/arcgis/rest/services/OpenStreetMap3D_DarkLabels_v1/SceneServer",itemId:"a84404ad39c64c328d0596e361ec459b",layerType:"ArcGISSceneServiceLayer"},{id:"navigation-3d-buildings",title:"Buildings",url:"https://basemaps3d.arcgis.com/arcgis/rest/services/OpenStreetMap3D_Buildings_v1/SceneServer",itemId:"ca0470dbbddb4db28bad74ed39949e25",layerType:"ArcGISSceneServiceLayer"}]},"navigation-dark-3d":{id:"navigation-dark-3d",itemId:"5a1365328b4943f09a54cf5fd1205707",is3d:!0,baseMapLayers:[{id:"navigation-dark-3d-base-layer",styleUrl:"https://www.arcgis.com/sharing/rest/content/items/451a1777ab3f4bf095fae24a117439d9/resources/styles/root.json",layerType:"VectorTileLayer",title:"Navigation Dark"},{id:"navigation-dark-3d-places-and-labels",title:"Places and Labels",url:"https://basemaps3d.arcgis.com/arcgis/rest/services/OpenStreetMap3D_LightLabels_v1/SceneServer/layers/0",itemId:"f364b70b012a4da5a4b5921e193eac4a",layerType:"ArcGISSceneServiceLayer"},{id:"navigation-dark-3d-buildings",title:"Buildings",url:"https://basemaps3d.arcgis.com/arcgis/rest/services/OpenStreetMap3D_Buildings_v1/SceneServer",itemId:"ca0470dbbddb4db28bad74ed39949e25",layerType:"ArcGISSceneServiceLayer"}]},"arcgis-imagery":{get thumbnailUrl(){return S("esri/images/basemap/hybrid.jpg")},title:"Imagery Hybrid",baseMapLayers:[{layerType:"ArcGISTiledMapServiceLayer",showLegend:!1,title:"World Imagery",url:"https://ibasemaps-api.arcgis.com/arcgis/rest/services/World_Imagery/MapServer"},{layerType:"VectorTileLayer",styleUrl:"https://basemaps-api.arcgis.com/arcgis/rest/services/styles/ArcGIS:Imagery:Labels",title:"Hybrid Reference Layer",isReference:!0}]},"arcgis-imagery-standard":{get thumbnailUrl(){return S("esri/images/basemap/satellite.jpg")},title:"Imagery",baseMapLayers:[{layerType:"ArcGISTiledMapServiceLayer",showLegend:!1,title:"World Imagery",url:"https://ibasemaps-api.arcgis.com/arcgis/rest/services/World_Imagery/MapServer"}]},"arcgis-imagery-labels":{title:"Hybrid [Reference]",baseMapLayers:[{layerType:"VectorTileLayer",styleUrl:"https://basemaps-api.arcgis.com/arcgis/rest/services/styles/ArcGIS:Imagery:Labels",title:"Hybrid Reference Layer",isReference:!0}]},"arcgis-light-gray":{get thumbnailUrl(){return S("esri/images/basemap/gray-vector.jpg")},title:"Light Gray Canvas",baseMapLayers:[{layerType:"VectorTileLayer",styleUrl:"https://basemaps-api.arcgis.com/arcgis/rest/services/styles/ArcGIS:LightGray:Base",title:"Light Gray Canvas Base"},{layerType:"VectorTileLayer",styleUrl:"https://basemaps-api.arcgis.com/arcgis/rest/services/styles/ArcGIS:LightGray:Labels",title:"Light Gray Canvas Labels",isReference:!0}]},"arcgis-dark-gray":{get thumbnailUrl(){return S("esri/images/basemap/dark-gray.jpg")},title:"Dark Gray Canvas",baseMapLayers:[{layerType:"VectorTileLayer",styleUrl:"https://basemaps-api.arcgis.com/arcgis/rest/services/styles/ArcGIS:DarkGray:Base",title:"Dark Gray Canvas Base"},{layerType:"VectorTileLayer",styleUrl:"https://basemaps-api.arcgis.com/arcgis/rest/services/styles/ArcGIS:DarkGray:Labels",title:"Dark Gray Canvas Labels",isReference:!0}]},"arcgis-navigation":{get thumbnailUrl(){return S("esri/images/basemap/streets-navigation.jpg")},title:"Navigation",baseMapLayers:[{layerType:"VectorTileLayer",styleUrl:"https://basemaps-api.arcgis.com/arcgis/rest/services/styles/ArcGIS:Navigation",title:"World Navigation Map"}]},"arcgis-navigation-night":{title:"Navigation (Dark Mode)",baseMapLayers:[{layerType:"VectorTileLayer",styleUrl:"https://basemaps-api.arcgis.com/arcgis/rest/services/styles/ArcGIS:NavigationNight",title:"World Navigation Map (Dark Mode)"}]},"arcgis-streets":{get thumbnailUrl(){return S("esri/images/basemap/streets-vector.jpg")},title:"Streets",baseMapLayers:[{layerType:"VectorTileLayer",styleUrl:"https://basemaps-api.arcgis.com/arcgis/rest/services/styles/ArcGIS:Streets",title:"World Street Map"}]},"arcgis-streets-night":{get thumbnailUrl(){return S("esri/images/basemap/streets-night.jpg")},title:"Streets (Night)",baseMapLayers:[{layerType:"VectorTileLayer",styleUrl:"https://basemaps-api.arcgis.com/arcgis/rest/services/styles/ArcGIS:StreetsNight",title:"World Street Map (Night)"}]},"arcgis-streets-relief":{get thumbnailUrl(){return S("esri/images/basemap/streets-relief.jpg")},title:"Streets (with Relief)",baseMapLayers:[{layerType:"ArcGISTiledMapServiceLayer",showLegend:!1,title:"World Hillshade",url:"https://ibasemaps-api.arcgis.com/arcgis/rest/services/Elevation/World_Hillshade/MapServer"},{layerType:"VectorTileLayer",styleUrl:"https://basemaps-api.arcgis.com/arcgis/rest/services/styles/ArcGIS:StreetsRelief:Base",title:"World Street Map (with Relief)"}]},"arcgis-topographic":{get thumbnailUrl(){return S("esri/images/basemap/topo.jpg")},title:"Topographic",baseMapLayers:[{layerType:"ArcGISTiledMapServiceLayer",showLegend:!1,title:"World Hillshade",url:"https://ibasemaps-api.arcgis.com/arcgis/rest/services/Elevation/World_Hillshade/MapServer"},{layerType:"VectorTileLayer",styleUrl:"https://basemaps-api.arcgis.com/arcgis/rest/services/styles/ArcGIS:Topographic:Base",title:"World Topographic Map"}]},"arcgis-oceans":{get thumbnailUrl(){return S("esri/images/basemap/oceans.jpg")},title:"Oceans",baseMapLayers:[{layerType:"ArcGISTiledMapServiceLayer",showLegend:!1,title:"World Ocean Base",url:"https://ibasemaps-api.arcgis.com/arcgis/rest/services/Ocean/World_Ocean_Base/MapServer"},{layerType:"VectorTileLayer",styleUrl:"https://basemaps-api.arcgis.com/arcgis/rest/services/styles/ArcGIS:Oceans:Labels",title:"World Ocean Reference",isReference:!0}]},"osm-standard":{title:"OpenStreetMap",baseMapLayers:[{layerType:"VectorTileLayer",styleUrl:"https://basemaps-api.arcgis.com/arcgis/rest/services/styles/OSM:Standard",title:"OpenStreetMap"}]},"osm-standard-relief":{title:"OpenStreetMap (with relief)",baseMapLayers:[{layerType:"ArcGISTiledMapServiceLayer",showLegend:!1,title:"World Hillshade",url:"https://ibasemaps-api.arcgis.com/arcgis/rest/services/Elevation/World_Hillshade/MapServer"},{styleUrl:"https://basemaps-api.arcgis.com/arcgis/rest/services/styles/OSM:StandardRelief:Base",layerType:"VectorTileLayer",title:"OpenStreetMap Relief Base"}]},"osm-streets":{title:"OpenStreetMap (Streets)",baseMapLayers:[{layerType:"VectorTileLayer",styleUrl:"https://basemaps-api.arcgis.com/arcgis/rest/services/styles/OSM:Streets",title:"OpenStreetMap (Streets)"}]},"osm-streets-relief":{title:"OpenStreetMap (Streets with relief)",baseMapLayers:[{layerType:"ArcGISTiledMapServiceLayer",showLegend:!1,title:"World Hillshade",url:"https://ibasemaps-api.arcgis.com/arcgis/rest/services/Elevation/World_Hillshade/MapServer"},{styleUrl:"https://basemaps-api.arcgis.com/arcgis/rest/services/styles/OSM:StreetsRelief:Base",layerType:"VectorTileLayer",title:"OpenStreetMap Relief Base"}]},"osm-light-gray":{title:"OpenStreetMap (Light Gray Canvas)",baseMapLayers:[{layerType:"VectorTileLayer",styleUrl:"https://basemaps-api.arcgis.com/arcgis/rest/services/styles/OSM:LightGray:Base",title:"OSM (Light Gray Base)"},{layerType:"VectorTileLayer",styleUrl:"https://basemaps-api.arcgis.com/arcgis/rest/services/styles/OSM:LightGray:Labels",title:"OSM (Light Gray Reference)",isReference:!0}]},"osm-dark-gray":{title:"OpenStreetMap (Dark Gray Canvas)",baseMapLayers:[{layerType:"VectorTileLayer",styleUrl:"https://basemaps-api.arcgis.com/arcgis/rest/services/styles/OSM:DarkGray:Base",title:"OSM (Dark Gray Base)"},{layerType:"VectorTileLayer",styleUrl:"https://basemaps-api.arcgis.com/arcgis/rest/services/styles/OSM:DarkGray:Labels",title:"OSM (Dark Gray Reference)",isReference:!0}]},"arcgis-terrain":{title:"Terrain with Labels",baseMapLayers:[{layerType:"ArcGISTiledMapServiceLayer",showLegend:!1,title:"World Hillshade",url:"https://ibasemaps-api.arcgis.com/arcgis/rest/services/Elevation/World_Hillshade/MapServer"},{layerType:"VectorTileLayer",styleUrl:"https://basemaps-api.arcgis.com/arcgis/rest/services/styles/ArcGIS:Terrain:Base",title:"World Terrain Base"},{layerType:"VectorTileLayer",styleUrl:"https://basemaps-api.arcgis.com/arcgis/rest/services/styles/ArcGIS:Terrain:Detail",title:"World Terrain Reference",isReference:!0}]},"arcgis-community":{title:"Community",baseMapLayers:[{layerType:"VectorTileLayer",styleUrl:"https://basemaps-api.arcgis.com/arcgis/rest/services/styles/ArcGIS:Community",title:"Community"}]},"arcgis-charted-territory":{title:"Charted Territory",baseMapLayers:[{layerType:"ArcGISTiledMapServiceLayer",showLegend:!1,title:"World Hillshade",url:"https://ibasemaps-api.arcgis.com/arcgis/rest/services/Elevation/World_Hillshade/MapServer"},{layerType:"VectorTileLayer",styleUrl:"https://basemaps-api.arcgis.com/arcgis/rest/services/styles/ArcGIS:ChartedTerritory:Base",title:"Charted Territory"}]},"arcgis-colored-pencil":{title:"Colored Pencil",baseMapLayers:[{layerType:"VectorTileLayer",styleUrl:"https://basemaps-api.arcgis.com/arcgis/rest/services/styles/ArcGIS:ColoredPencil",title:"Colored Pencil"}]},"arcgis-nova":{title:"Nova",baseMapLayers:[{layerType:"VectorTileLayer",styleUrl:"https://basemaps-api.arcgis.com/arcgis/rest/services/styles/ArcGIS:Nova",title:"Nova"}]},"arcgis-modern-antique":{title:"Modern Antique",baseMapLayers:[{layerType:"ArcGISTiledMapServiceLayer",showLegend:!1,title:"World Hillshade",url:"https://ibasemaps-api.arcgis.com/arcgis/rest/services/Elevation/World_Hillshade/MapServer"},{layerType:"VectorTileLayer",styleUrl:"https://basemaps-api.arcgis.com/arcgis/rest/services/styles/ArcGIS:ModernAntique:Base",title:"Modern Antique"}]},"arcgis-midcentury":{title:"Mid-Century",baseMapLayers:[{layerType:"VectorTileLayer",styleUrl:"https://basemaps-api.arcgis.com/arcgis/rest/services/styles/ArcGIS:Midcentury",title:"Mid-Century"}]},"arcgis-newspaper":{title:"Newspaper",baseMapLayers:[{layerType:"VectorTileLayer",styleUrl:"https://basemaps-api.arcgis.com/arcgis/rest/services/styles/ArcGIS:Newspaper",title:"Newspaper"}]},"arcgis-hillshade-light":{title:"Hillshade",baseMapLayers:[{layerType:"ArcGISTiledMapServiceLayer",showLegend:!1,title:"World Hillshade",url:"https://ibasemaps-api.arcgis.com/arcgis/rest/services/Elevation/World_Hillshade/MapServer"}]},"arcgis-hillshade-dark":{title:"Hillshade (Dark)",baseMapLayers:[{layerType:"ArcGISTiledMapServiceLayer",showLegend:!1,title:"World Hillshade (Dark)",url:"https://ibasemaps-api.arcgis.com/arcgis/rest/services/Elevation/World_Hillshade_Dark/MapServer"}]},"arcgis-human-geography":{title:"Human Geography",baseMapLayers:[{layerType:"VectorTileLayer",styleUrl:"https://basemaps-api.arcgis.com/arcgis/rest/services/styles/ArcGIS:HumanGeography:Base",title:"Human Geography Base"},{layerType:"VectorTileLayer",styleUrl:"https://basemaps-api.arcgis.com/arcgis/rest/services/styles/ArcGIS:HumanGeography:Detail",title:"Human Geography Detail",isReference:!0},{layerType:"VectorTileLayer",styleUrl:"https://basemaps-api.arcgis.com/arcgis/rest/services/styles/ArcGIS:HumanGeography:Label",title:"Human Geography Label",isReference:!0}]},"arcgis-human-geography-dark":{title:"Human Geography (Dark)",baseMapLayers:[{layerType:"VectorTileLayer",styleUrl:"https://basemaps-api.arcgis.com/arcgis/rest/services/styles/ArcGIS:HumanGeographyDark:Base",title:"Human Geography Dark Base"},{layerType:"VectorTileLayer",styleUrl:"https://basemaps-api.arcgis.com/arcgis/rest/services/styles/ArcGIS:HumanGeographyDark:Detail",title:"Human Geography Dark Detail",isReference:!0},{layerType:"VectorTileLayer",styleUrl:"https://basemaps-api.arcgis.com/arcgis/rest/services/styles/ArcGIS:HumanGeographyDark:Label",title:"Human Geography Dark Label",isReference:!0}]}};var j;let G=0,w=j=class extends(t(o)){constructor(e){super(e),this.id=null,this.portalItem=null,this.spatialReference=null,this.style=null,this.thumbnailUrl=null,this.title="Basemap",this.id=Date.now().toString(16)+"-basemap-"+G++,this.baseLayers=new s,this.referenceLayers=new s;const r=e=>{e.parent&&e.parent!==this&&"remove"in e.parent&&e.parent.remove(e),e.parent=this,"elevation"===e.type&&p.getLogger(this).error(`Layer '${e.title}, id:${e.id}' of type '${e.type}' is not supported as a basemap layer and will therefore be ignored.`)},a=e=>{e.parent=null};this.addHandles([this.baseLayers.on("after-add",(e=>r(e.item))),this.referenceLayers.on("after-add",(e=>r(e.item))),this.baseLayers.on("after-remove",(e=>a(e.item))),this.referenceLayers.on("after-remove",(e=>a(e.item)))])}initialize(){this.when().catch((e=>{p.getLogger(this).error("#load()",`Failed to load basemap (title: '${this.title}', id: '${this.id}')`,e)})),this.resourceInfo&&this.read(this.resourceInfo.data,this.resourceInfo.context)}destroy(){const e=this.baseLayers.toArray();for(const r of e)r.destroy();const r=this.referenceLayers.toArray();for(const e of r)e.destroy();this.baseLayers.destroy(),this.referenceLayers.destroy(),this.portalItem=y(this.portalItem)}normalizeCtorArgs(e){return e&&"resourceInfo"in e&&(this._set("resourceInfo",e.resourceInfo),delete(e={...e}).resourceInfo),e}set baseLayers(e){this._set("baseLayers",a(e,this._get("baseLayers")))}_writeBaseLayers(e,r,s){const a=[];e?(s={...s,layerContainerType:"basemap"},this.baseLayers.forEach((e=>{const r=M(e,s.webmap?s.webmap.getLayerJSONFromResourceInfo(e):null,s);null!=r&&a.push(r)})),this.referenceLayers.forEach((e=>{const r=M(e,s.webmap?s.webmap.getLayerJSONFromResourceInfo(e):null,s);null!=r&&("scene"!==e.type&&(r.isReference=!0),a.push(r))})),r.baseMapLayers=a):r.baseMapLayers=a}set referenceLayers(e){this._set("referenceLayers",a(e,this._get("referenceLayers")))}writeTitle(e,r){r.title=e||"Basemap"}load(e){return this.addResolvingPromise(this._loadFromSource(e)),Promise.resolve(this)}loadAll(){return c(this,(e=>{e(this.baseLayers,this.referenceLayers)}))}clone(){const e={id:this.id,title:this.title,portalItem:this.portalItem,baseLayers:this.baseLayers.map((e=>i(e)?e.clone():e)),referenceLayers:this.referenceLayers.map((e=>i(e)?e.clone():e))};return this.loaded&&(e.loadStatus="loaded"),new j({resourceInfo:this.resourceInfo}).set(e)}read(e,r){this.resourceInfo||this._set("resourceInfo",{data:e,context:r}),super.read(e,r)}write(e,r){return e=e||{},r?.origin||(r={origin:"web-map",...r}),super.write(e,r),!this.loaded&&this.resourceInfo?.data.baseMapLayers&&(e.baseMapLayers=this.resourceInfo.data.baseMapLayers.map((e=>{const r=l(e);return r.url&&d(r.url)&&(r.url=`https:${r.url}`),r.templateUrl&&d(r.templateUrl)&&(r.templateUrl=`https:${r.templateUrl}`),r}))),e}async _loadFromSource(e){const{resourceInfo:r,portalItem:s,style:a}=this;n(e);const t=[];if(r){const s=r.context?r.context.url:null;if(t.push(this._loadLayersFromJSON(r.data,s,e)),r.data.id&&!r.data.title){const e=r.data.id;t.push(async function(e){if(!e)return;const r=e.includes("-vector")?e.slice(0,e.indexOf("-vector")):e.includes("-3d")?e.slice(0,e.indexOf("-3d")):e,s=await f("esri/t9n/basemaps");return s[e]||s[r]}(e).then((e=>{e&&this.read({title:e},r.context)})))}}else s?t.push(this._loadFromItem(s,e)):a&&t.push(this._loadFromStylesService(a,e));await Promise.all(t)}async _loadLayersFromJSON(e,r,s){const a=this.resourceInfo?.context,t=this.portalItem?.portal||a?.portal||null,i=k[a?.origin||""]??"web-map",{populateOperationalLayers:l}=await import("./chunks/layersCreator.js"),o=[];if(n(s),e.baseMapLayers&&Array.isArray(e.baseMapLayers)){const s={context:{...a,origin:i,url:r,portal:t,layerContainerType:"basemap"},defaultLayerType:"DefaultTileLayer"},c=e=>"web-scene"===i&&"ArcGISSceneServiceLayer"===e.layerType||e.isReference,p=l(this.baseLayers,e.baseMapLayers.filter((e=>!c(e))),s);o.push(p);const y=l(this.referenceLayers,e.baseMapLayers.filter(c),s);o.push(y)}await Promise.allSettled(o)}async _loadFromItem(e,r){const s=await e.load(r),a=await s.fetchData("json",r),t=m(e.itemUrl??"");return this._set("resourceInfo",{data:a.baseMap??{},context:{origin:U[e.type||""]??"web-map",portal:e.portal||v.getDefault(),url:t}}),this.read(this.resourceInfo.data,this.resourceInfo.context),this.read({spatialReference:a.spatialReference},this.resourceInfo.context),this.read({title:e.title,thumbnailUrl:e.thumbnailUrl},{origin:"portal-item",portal:e.portal||v.getDefault(),url:t}),this._loadLayersFromJSON(this.resourceInfo.data,t,r)}async _loadFromStylesService(e,s){const a=`${e.serviceUrl}/${e.id}`,t=(await r(a,{query:{language:e.getLanguageParamValue()},signal:s?.signal})).data;if(t.baseMap&&Array.isArray(t.baseMap.baseMapLayers))for(const e of t.baseMap.baseMapLayers)if(!e.customParameters&&e.styleUrl?.includes("?")){const r=m(e.styleUrl);r.query&&(e.styleUrl=r.path,e.customParameters=r.query)}const i=m(a);return this._set("resourceInfo",{data:t.baseMap??{},context:{origin:"web-map",url:i}}),this.read(this.resourceInfo.data,this.resourceInfo.context),this.read({spatialReference:t.spatialReference},this.resourceInfo.context),this._loadLayersFromJSON(this.resourceInfo.data,i,s)}static fromId(e){const r=I[e];return r?r.itemId?new j({portalItem:{id:r.itemId,portal:{url:"https://www.arcgis.com"}}}):j.fromJSON(r,{origin:r.is3d?"web-scene":"web-map"}):null}};e([g({json:{write:{ignoreOrigin:!0,target:"baseMapLayers",writer(e,r,s,a){this._writeBaseLayers(e,r,a)}},origins:{"web-scene":{write:{ignoreOrigin:!0,target:{baseMapLayers:{type:s}},writer(e,r,s,a){this._writeBaseLayers(e,r,a)}}}}}})],w.prototype,"baseLayers",null),e([g({type:String,json:{origins:{"web-scene":{write:!0}}}})],w.prototype,"id",void 0),e([g({type:L})],w.prototype,"portalItem",void 0),e([g()],w.prototype,"referenceLayers",null),e([g({readOnly:!0})],w.prototype,"resourceInfo",void 0),e([g({type:u})],w.prototype,"spatialReference",void 0),e([g({type:T})],w.prototype,"style",void 0),e([g()],w.prototype,"thumbnailUrl",void 0),e([g({type:String,json:{origins:{"web-scene":{write:{isRequired:!0}}}}})],w.prototype,"title",void 0),e([b("title")],w.prototype,"writeTitle",null),w=j=e([h("esri.Basemap")],w);const U={"Web Scene":"web-scene","Web Map":"web-map","Link Chart":"link-chart"},k={"web-scene":"web-scene","web-map":"web-map","link-chart":"link-chart"},A=w,_=Object.freeze(Object.defineProperty({__proto__:null,default:A},Symbol.toStringTag,{value:"Module"}));export{_ as B,A as default,I as e};