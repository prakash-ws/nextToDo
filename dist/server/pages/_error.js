(()=>{var e={};e.id=820,e.ids=[820,888,660],e.modules={1323:(e,t)=>{"use strict";Object.defineProperty(t,"l",{enumerable:!0,get:function(){return function e(t,r){return r in t?t[r]:"then"in t&&"function"==typeof t.then?t.then(t=>e(t,r)):"function"==typeof t&&"default"===r?t:void 0}}})},6968:(e,t,r)=>{"use strict";r.a(e,async(e,a)=>{try{r.r(t),r.d(t,{config:()=>h,default:()=>c,getServerSideProps:()=>m,getStaticPaths:()=>f,getStaticProps:()=>p,reportWebVitals:()=>g,routeModule:()=>x,unstable_getServerProps:()=>v,unstable_getServerSideProps:()=>_,unstable_getStaticParams:()=>P,unstable_getStaticPaths:()=>b,unstable_getStaticProps:()=>y});var n=r(7093),l=r(5244),o=r(1323),i=r(4684),d=r(3900),s=r(8435),u=e([d]);d=(u.then?(await u)():u)[0];let c=(0,o.l)(s,"default"),p=(0,o.l)(s,"getStaticProps"),f=(0,o.l)(s,"getStaticPaths"),m=(0,o.l)(s,"getServerSideProps"),h=(0,o.l)(s,"config"),g=(0,o.l)(s,"reportWebVitals"),y=(0,o.l)(s,"unstable_getStaticProps"),b=(0,o.l)(s,"unstable_getStaticPaths"),P=(0,o.l)(s,"unstable_getStaticParams"),v=(0,o.l)(s,"unstable_getServerProps"),_=(0,o.l)(s,"unstable_getServerSideProps"),x=new n.PagesRouteModule({definition:{kind:l.x.PAGES,page:"/_error",pathname:"/_error",bundlePath:"",filename:""},components:{App:d.default,Document:i.default},userland:s});a()}catch(e){a(e)}})},8435:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return s}});let a=r(167),n=a._(r(6689)),l=a._(r(4764)),o={400:"Bad Request",404:"This page could not be found",405:"Method Not Allowed",500:"Internal Server Error"};function i(e){let{res:t,err:r}=e;return{statusCode:t&&t.statusCode?t.statusCode:r?r.statusCode:404}}let d={error:{fontFamily:'system-ui,"Segoe UI",Roboto,Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji"',height:"100vh",textAlign:"center",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"},desc:{lineHeight:"48px"},h1:{display:"inline-block",margin:"0 20px 0 0",paddingRight:23,fontSize:24,fontWeight:500,verticalAlign:"top"},h2:{fontSize:14,fontWeight:400,lineHeight:"28px"},wrap:{display:"inline-block"}};class s extends n.default.Component{render(){let{statusCode:e,withDarkMode:t=!0}=this.props,r=this.props.title||o[e]||"An unexpected error has occurred";return n.default.createElement("div",{style:d.error},n.default.createElement(l.default,null,n.default.createElement("title",null,e?e+": "+r:"Application error: a client-side exception has occurred")),n.default.createElement("div",{style:d.desc},n.default.createElement("style",{dangerouslySetInnerHTML:{__html:"body{color:#000;background:#fff;margin:0}.next-error-h1{border-right:1px solid rgba(0,0,0,.3)}"+(t?"@media (prefers-color-scheme:dark){body{color:#fff;background:#000}.next-error-h1{border-right:1px solid rgba(255,255,255,.3)}}":"")}}),e?n.default.createElement("h1",{className:"next-error-h1",style:d.h1},e):null,n.default.createElement("div",{style:d.wrap},n.default.createElement("h2",{style:d.h2},this.props.title||e?r:n.default.createElement(n.default.Fragment,null,"Application error: a client-side exception has occurred (see the browser console for more information)"),"."))))}}s.displayName="ErrorPage",s.getInitialProps=i,s.origGetInitialProps=i,("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1815:(e,t)=>{"use strict";function r(e){let{ampFirst:t=!1,hybrid:r=!1,hasQuery:a=!1}=void 0===e?{}:e;return t||r&&a}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"isInAmpMode",{enumerable:!0,get:function(){return r}})},4764:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{defaultHead:function(){return s},default:function(){return f}});let a=r(167),n=r(8760)._(r(6689)),l=a._(r(210)),o=r(8039),i=r(1988),d=r(1815);function s(e){void 0===e&&(e=!1);let t=[n.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(n.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function u(e,t){return"string"==typeof t||"number"==typeof t?e:t.type===n.default.Fragment?e.concat(n.default.Children.toArray(t.props.children).reduce((e,t)=>"string"==typeof t||"number"==typeof t?e:e.concat(t),[])):e.concat(t)}r(9982);let c=["name","httpEquiv","charSet","itemProp"];function p(e,t){let{inAmpMode:r}=t;return e.reduce(u,[]).reverse().concat(s(r).reverse()).filter(function(){let e=new Set,t=new Set,r=new Set,a={};return n=>{let l=!0,o=!1;if(n.key&&"number"!=typeof n.key&&n.key.indexOf("$")>0){o=!0;let t=n.key.slice(n.key.indexOf("$")+1);e.has(t)?l=!1:e.add(t)}switch(n.type){case"title":case"base":t.has(n.type)?l=!1:t.add(n.type);break;case"meta":for(let e=0,t=c.length;e<t;e++){let t=c[e];if(n.props.hasOwnProperty(t)){if("charSet"===t)r.has(t)?l=!1:r.add(t);else{let e=n.props[t],r=a[t]||new Set;("name"!==t||!o)&&r.has(e)?l=!1:(r.add(e),a[t]=r)}}}}return l}}()).reverse().map((e,t)=>{let a=e.key||t;if(!r&&"link"===e.type&&e.props.href&&["https://fonts.googleapis.com/css","https://use.typekit.net/"].some(t=>e.props.href.startsWith(t))){let t={...e.props||{}};return t["data-href"]=t.href,t.href=void 0,t["data-optimized-fonts"]=!0,n.default.cloneElement(e,t)}return n.default.cloneElement(e,{key:a})})}let f=function(e){let{children:t}=e,r=(0,n.useContext)(o.AmpStateContext),a=(0,n.useContext)(i.HeadManagerContext);return n.default.createElement(l.default,{reduceComponentsToState:p,headManager:a,inAmpMode:(0,d.isInAmpMode)(r)},t)};("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},210:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return o}});let a=r(6689),n=()=>{},l=()=>{};function o(e){var t;let{headManager:r,reduceComponentsToState:o}=e;function i(){if(r&&r.mountedInstances){let t=a.Children.toArray(Array.from(r.mountedInstances).filter(Boolean));r.updateHead(o(t,e))}}return null==r||null==(t=r.mountedInstances)||t.add(e.children),i(),n(()=>{var t;return null==r||null==(t=r.mountedInstances)||t.add(e.children),()=>{var t;null==r||null==(t=r.mountedInstances)||t.delete(e.children)}}),n(()=>(r&&(r._pendingUpdate=i),()=>{r&&(r._pendingUpdate=i)})),l(()=>(r&&r._pendingUpdate&&(r._pendingUpdate(),r._pendingUpdate=null),()=>{r&&r._pendingUpdate&&(r._pendingUpdate(),r._pendingUpdate=null)})),null}},9982:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"warnOnce",{enumerable:!0,get:function(){return r}});let r=e=>{}},3900:(e,t,r)=>{"use strict";r.a(e,async(e,a)=>{try{r.r(t),r.d(t,{default:()=>d});var n=r(997),l=r(9862);r(108);var o=r(3291),i=e([l,o]);function d({Component:e,pageProps:t}){return n.jsx(n.Fragment,{children:n.jsx(o.Provider,{store:l.Z,children:n.jsx(e,{...t})})})}[l,o]=i.then?(await i)():i,a()}catch(e){a(e)}})},4684:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>l});var a=r(997),n=r(6859);function l(){return(0,a.jsxs)(n.Html,{lang:"en",children:[a.jsx(n.Head,{}),(0,a.jsxs)("body",{children:[a.jsx(n.Main,{}),a.jsx(n.NextScript,{})]})]})}},70:(e,t,r)=>{"use strict";r.a(e,async(e,a)=>{try{r.d(t,{Z:()=>d,h:()=>s});var n=r(3258),l=e([n]);n=(l.then?(await l)():l)[0];let o={tableData:[],formData:{name:"",price:0,description:"",id:0,disabled:!1}},i=(0,n.createSlice)({name:"tableData",initialState:o,reducers:{setData:(e,t)=>{e.tableData=t.payload},addData:(e,t)=>{e.tableData.find(e=>e.id===t.payload.id)?e.tableData=[...e.tableData.filter(e=>e.id!==t.payload.id),t.payload]:e.tableData.push({...t.payload,id:new Date().getTime(),disabled:!1}),e.formData=o.formData},removeData:(e,t)=>{e.tableData=e.tableData.filter(e=>e.id!==t.payload)},toggleDisableData:(e,t)=>{let r=e.tableData.find(e=>e.id===t.payload);r&&(r.disabled=!r.disabled)},setFormValues:(e,t)=>{e.formData={...t.payload}}}}),d=i,s=i.actions;a()}catch(e){a(e)}})},1127:(e,t,r)=>{"use strict";r.a(e,async(e,a)=>{try{r.d(t,{Z:()=>i,b:()=>d});var n=r(3258),l=e([n]);n=(l.then?(await l)():l)[0];let o=(0,n.createSlice)({name:"uiState",initialState:{formModal:!1},reducers:{toggleFormModal:e=>{e.formModal=!e.formModal}}}),i=o,d=o.actions;a()}catch(e){a(e)}})},9862:(e,t,r)=>{"use strict";r.a(e,async(e,a)=>{try{r.d(t,{Z:()=>d});var n=r(3258),l=r(1127),o=r(70),i=e([n,l,o]);[n,l,o]=i.then?(await i)():i;let d=(0,n.configureStore)({reducer:{uiState:l.Z.reducer,tableData:o.Z.reducer}});a()}catch(e){a(e)}})},108:()=>{},5244:(e,t)=>{"use strict";var r;Object.defineProperty(t,"x",{enumerable:!0,get:function(){return r}}),function(e){e.PAGES="PAGES",e.PAGES_API="PAGES_API",e.APP_PAGE="APP_PAGE",e.APP_ROUTE="APP_ROUTE"}(r||(r={}))},8039:(e,t,r)=>{"use strict";e.exports=r(7093).vendored.contexts.AmpContext},1988:(e,t,r)=>{"use strict";e.exports=r(7093).vendored.contexts.HeadManagerContext},2785:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/pages.runtime.prod.js")},6689:e=>{"use strict";e.exports=require("react")},997:e=>{"use strict";e.exports=require("react/jsx-runtime")},3258:e=>{"use strict";e.exports=import("@reduxjs/toolkit")},3291:e=>{"use strict";e.exports=import("react-redux")},1017:e=>{"use strict";e.exports=require("path")},8760:(e,t)=>{"use strict";function r(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,a=new WeakMap;return(r=function(e){return e?a:t})(e)}t._=t._interop_require_wildcard=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var a=r(t);if(a&&a.has(e))return a.get(e);var n={},l=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var i=l?Object.getOwnPropertyDescriptor(e,o):null;i&&(i.get||i.set)?Object.defineProperty(n,o,i):n[o]=e[o]}return n.default=e,a&&a.set(e,n),n}}};var t=require("../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),a=t.X(0,[859],()=>r(6968));module.exports=a})();