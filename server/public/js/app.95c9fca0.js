(function(e){function t(t){for(var r,a,i=t[0],l=t[1],u=t[2],c=0,d=[];c<i.length;c++)a=i[c],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&d.push(o[a][0]),o[a]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(e[r]=l[r]);m&&m(t);while(d.length)d.shift()();return s.push.apply(s,u||[]),n()}function n(){for(var e,t=0;t<s.length;t++){for(var n=s[t],r=!0,a=1;a<n.length;a++){var i=n[a];0!==o[i]&&(r=!1)}r&&(s.splice(t--,1),e=l(l.s=n[0]))}return e}var r={},a={app:0},o={app:0},s=[];function i(e){return l.p+"js/"+({about:"about",documentation:"documentation","ids~modules":"ids~modules",ids:"ids",modules:"modules",logger:"logger",settings:"settings"}[e]||e)+"."+{about:"3872107f",documentation:"6e1af1a6","ids~modules":"d751bd7f",ids:"953c4e80",modules:"1a4519ba",logger:"29f2f7f7",settings:"ca6e326a"}[e]+".js"}function l(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,l),n.l=!0,n.exports}l.e=function(e){var t=[],n={ids:1,modules:1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=new Promise((function(t,n){for(var r="css/"+({about:"about",documentation:"documentation","ids~modules":"ids~modules",ids:"ids",modules:"modules",logger:"logger",settings:"settings"}[e]||e)+"."+{about:"31d6cfe0",documentation:"31d6cfe0","ids~modules":"31d6cfe0",ids:"a8136dc1",modules:"dfe0121a",logger:"31d6cfe0",settings:"31d6cfe0"}[e]+".css",o=l.p+r,s=document.getElementsByTagName("link"),i=0;i<s.length;i++){var u=s[i],c=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(c===r||c===o))return t()}var d=document.getElementsByTagName("style");for(i=0;i<d.length;i++){u=d[i],c=u.getAttribute("data-href");if(c===r||c===o)return t()}var m=document.createElement("link");m.rel="stylesheet",m.type="text/css",m.onload=t,m.onerror=function(t){var r=t&&t.target&&t.target.src||o,s=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");s.code="CSS_CHUNK_LOAD_FAILED",s.request=r,delete a[e],m.parentNode.removeChild(m),n(s)},m.href=o;var f=document.getElementsByTagName("head")[0];f.appendChild(m)})).then((function(){a[e]=0})));var r=o[e];if(0!==r)if(r)t.push(r[2]);else{var s=new Promise((function(t,n){r=o[e]=[t,n]}));t.push(r[2]=s);var u,c=document.createElement("script");c.charset="utf-8",c.timeout=120,l.nc&&c.setAttribute("nonce",l.nc),c.src=i(e);var d=new Error;u=function(t){c.onerror=c.onload=null,clearTimeout(m);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",d.name="ChunkLoadError",d.type=r,d.request=a,n[1](d)}o[e]=void 0}};var m=setTimeout((function(){u({type:"timeout",target:c})}),12e4);c.onerror=c.onload=u,document.head.appendChild(c)}return Promise.all(t)},l.m=e,l.c=r,l.d=function(e,t,n){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(l.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)l.d(n,r,function(t){return e[t]}.bind(null,r));return n},l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="/",l.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],c=u.push.bind(u);u.push=t,u=u.slice();for(var d=0;d<u.length;d++)t(u[d]);var m=c;s.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[e._m(0),n("router-view")],1)},o=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("nav",{staticClass:"navbar navbar-expand-lg navbar-light bg-light"},[n("a",{staticClass:"navbar-brand",attrs:{href:"/"}},[e._v("Overwatch")]),n("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbarColor03"}},[n("ul",{staticClass:"navbar-nav mr-auto"},[n("li",{staticClass:"nav-item"},[n("a",{staticClass:"nav-link",attrs:{href:"/About"}},[e._v("About")])]),n("li",{staticClass:"nav-item"},[n("a",{staticClass:"nav-link",attrs:{href:"/Modules"}},[e._v("Modules")])]),n("li",{staticClass:"nav-item"},[n("a",{staticClass:"nav-link",attrs:{href:"/Documentation"}},[e._v("Documentation")])]),n("li",{staticClass:"nav-item"},[n("a",{staticClass:"nav-link",attrs:{href:"/Settings"}},[e._v("Settings")])])])])])}],s=n("2877"),i={},l=Object(s["a"])(i,a,o,!1,null,null,null),u=l.exports,c=(n("d3b7"),n("8c4f")),d=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"text-center"},[r("img",{staticClass:"my-5",attrs:{alt:"Overwatch Logo",src:n("cf05")}}),r("GenInfo",{attrs:{header:e.header,message:e.message}})],1)},m=[],f=n("f447"),p={name:"home",data:function(){return{header:"Welcome to Overwatch!",message:"Start exploring to get started!"}},components:{GenInfo:f["a"]}},h=p,g=Object(s["a"])(h,d,m,!1,null,null,null),v=g.exports;r["a"].use(c["a"]);var b=[{path:"/",name:"home",component:v},{path:"/about",name:"about",component:function(){return n.e("about").then(n.bind(null,"f820"))}},{path:"/documentation",name:"documentation",component:function(){return n.e("documentation").then(n.bind(null,"8bae"))}},{path:"/settings",name:"settings",component:function(){return n.e("settings").then(n.bind(null,"26d3"))}},{path:"/modules",name:"modules",component:function(){return Promise.all([n.e("ids~modules"),n.e("modules")]).then(n.bind(null,"4228"))}},{path:"/modules/logger",name:"logger",component:function(){return n.e("logger").then(n.bind(null,"86f3"))}},{path:"/modules/ids",name:"ids",component:function(){return Promise.all([n.e("ids~modules"),n.e("ids")]).then(n.bind(null,"cac5"))}},{path:"/modules/pihole",name:"pihole",component:function(){return Promise.all([n.e("ids~modules"),n.e("ids")]).then(n.bind(null,"6880"))}}],y=new c["a"]({mode:"history",routes:b}),_=y;r["a"].config.productionTip=!1,new r["a"]({router:_,render:function(e){return e(u)}}).$mount("#app")},cf05:function(e,t,n){e.exports=n.p+"img/logo.a311465f.png"},f447:function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"text-center"},[n("h1",[e._v(e._s(e.header))]),n("p",[e._v(e._s(e.message))])])},a=[],o={name:"GenInfo",props:["header","message"]},s=o,i=n("2877"),l=Object(i["a"])(s,r,a,!1,null,null,null);t["a"]=l.exports}});
//# sourceMappingURL=app.95c9fca0.js.map