(function(e){function t(t){for(var r,a,s=t[0],i=t[1],u=t[2],l=0,d=[];l<s.length;l++)a=s[l],Object.prototype.hasOwnProperty.call(c,a)&&c[a]&&d.push(c[a][0]),c[a]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);f&&f(t);while(d.length)d.shift()();return o.push.apply(o,u||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,a=1;a<n.length;a++){var s=n[a];0!==c[s]&&(r=!1)}r&&(o.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},a={app:0},c={app:0},o=[];function s(e){return i.p+"js/"+({}[e]||e)+"."+{"chunk-2d212f1d":"a98615e1","chunk-2d230447":"68cd7970","chunk-3b10659a":"5aa7a294","chunk-57c34342":"0862bcb2","chunk-1100cb5b":"972b5c68","chunk-3af6bd3c":"06a250e4","chunk-4150209f":"c7b85d17","chunk-48143a1f":"d3d02ba1","chunk-8010db68":"9e5d2ea6","chunk-102cd403":"d88eda79","chunk-6d032e3a":"9f05a4b4","chunk-007c6043":"08d65341","chunk-c33e0f00":"4a007ecb","chunk-0f3e3b7e":"d707575b","chunk-15a3621c":"8034c9cc","chunk-61d128ae":"4960d839","chunk-5cf22568":"47d082ba","chunk-d1505360":"aac610b5","chunk-5b3269d4":"61dd6235","chunk-5c819f8c":"6e908253","chunk-7be1b8a1":"807edde4","chunk-a1bc209e":"6512d48e"}[e]+".js"}function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(e){var t=[],n={"chunk-3b10659a":1,"chunk-57c34342":1,"chunk-1100cb5b":1,"chunk-3af6bd3c":1,"chunk-4150209f":1,"chunk-48143a1f":1,"chunk-8010db68":1,"chunk-102cd403":1,"chunk-6d032e3a":1,"chunk-007c6043":1,"chunk-c33e0f00":1,"chunk-0f3e3b7e":1,"chunk-15a3621c":1,"chunk-61d128ae":1,"chunk-5cf22568":1,"chunk-d1505360":1,"chunk-5b3269d4":1,"chunk-5c819f8c":1,"chunk-7be1b8a1":1,"chunk-a1bc209e":1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=new Promise((function(t,n){for(var r="css/"+({}[e]||e)+"."+{"chunk-2d212f1d":"31d6cfe0","chunk-2d230447":"31d6cfe0","chunk-3b10659a":"42790c7f","chunk-57c34342":"88125c95","chunk-1100cb5b":"c3eba0f0","chunk-3af6bd3c":"bd8461ae","chunk-4150209f":"4fa65883","chunk-48143a1f":"5b9c382b","chunk-8010db68":"ee4f1a21","chunk-102cd403":"0504fe2f","chunk-6d032e3a":"d683e606","chunk-007c6043":"e8b5ce82","chunk-c33e0f00":"cbbdcfe8","chunk-0f3e3b7e":"61bc355f","chunk-15a3621c":"0a3449e9","chunk-61d128ae":"dfd166d6","chunk-5cf22568":"5bd5c446","chunk-d1505360":"0b6e8d87","chunk-5b3269d4":"dfad7db5","chunk-5c819f8c":"d3085ca8","chunk-7be1b8a1":"28876c51","chunk-a1bc209e":"cbbdcfe8"}[e]+".css",c=i.p+r,o=document.getElementsByTagName("link"),s=0;s<o.length;s++){var u=o[s],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===r||l===c))return t()}var d=document.getElementsByTagName("style");for(s=0;s<d.length;s++){u=d[s],l=u.getAttribute("data-href");if(l===r||l===c)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var r=t&&t.target&&t.target.src||c,o=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=r,delete a[e],f.parentNode.removeChild(f),n(o)},f.href=c;var h=document.getElementsByTagName("head")[0];h.appendChild(f)})).then((function(){a[e]=0})));var r=c[e];if(0!==r)if(r)t.push(r[2]);else{var o=new Promise((function(t,n){r=c[e]=[t,n]}));t.push(r[2]=o);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,i.nc&&l.setAttribute("nonce",i.nc),l.src=s(e);var d=new Error;u=function(t){l.onerror=l.onload=null,clearTimeout(f);var n=c[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",d.name="ChunkLoadError",d.type=r,d.request=a,n[1](d)}c[e]=void 0}};var f=setTimeout((function(){u({type:"timeout",target:l})}),12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(t)},i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/",i.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=t,u=u.slice();for(var d=0;d<u.length;d++)t(u[d]);var f=l;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},1:function(e,t){},4678:function(e,t,n){var r={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-SG":"cdab","./en-SG.js":"cdab","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-nz":"6f50","./en-nz.js":"6f50","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-tw":"90ea","./zh-tw.js":"90ea"};function a(e){var t=c(e);return n(t)}function c(e){if(!n.o(r,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return r[e]}a.keys=function(){return Object.keys(r)},a.resolve=c,e.exports=a,a.id="4678"},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-app",[n("app-navbar"),n("v-content",[n("router-view")],1),n("app-footer")],1)},c=[],o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("v-navigation-drawer",{attrs:{"disable-resize-watcher":"","mini-variant":e.miniVariant,clipped:e.clipped,fixed:"",app:""},model:{value:e.drawer,callback:function(t){e.drawer=t},expression:"drawer"}},[n("v-list",[n("v-list-item",{attrs:{to:{name:"Home"},router:"",exact:""}},[n("v-list-item-action",[n("v-icon",[e._v("mdi-apps")])],1),n("v-list-item-content",[n("v-list-item-title",[e._v("ໜ້າຫຼັກ")])],1)],1),n("v-list",[n("v-list-group",{attrs:{"no-action":""},scopedSlots:e._u([{key:"activator",fn:function(){return[n("v-list-item-action",[n("v-icon",[e._v("mdi-apps")])],1),n("v-list-item-content",[n("v-list-item-title",[e._v("ປະເພດ")])],1)]},proxy:!0}])},e._l(e.categories,(function(t){return n("v-list-item",{key:t.index},[n("v-list-item-title",{staticStyle:{cursor:"pointer"},on:{click:function(n){return e.filterCate(t._id)}}},[e._v(e._s(t.name))])],1)})),1)],1),e.signInned?e._e():n("v-list-item",{attrs:{to:{name:"SignIn"},router:"",exact:""}},[n("v-list-item-action",[n("v-icon",[e._v("mdi-login")])],1),n("v-list-item-content",[n("v-list-item-title",[e._v("ລົງທະບຽນ")])],1)],1),e.signInned?e._e():n("v-list-item",{attrs:{to:{name:"SignUp"},router:"",exact:""}},[n("v-list-item-action",[n("v-icon",[e._v("mdi-plus")])],1),n("v-list-item-content",[n("v-list-item-title",[e._v("ສະໝັກສະມາຊິກ")])],1)],1),e.signInned?n("v-list-item",{attrs:{to:{name:"Dashboard"},router:"",exact:""}},[n("v-list-item-action",[n("v-icon",[e._v("mdi-arrow-left-bold")])],1),n("v-list-item-content",[n("v-list-item-title",[e._v("Dashboard")])],1)],1):e._e(),e.signInned?n("v-list-item",{attrs:{to:{name:"SignOut"},router:"",exact:""}},[n("v-list-item-action",[n("v-icon",[e._v("mdi-arrow-left-bold")])],1),n("v-list-item-content",[n("v-list-item-title",[e._v("ອອກຈາກລະບົບ")])],1)],1):e._e()],1)],1),n("v-app-bar",{attrs:{fixed:"",app:""}},[n("v-app-bar-nav-icon",{on:{click:function(t){t.stopPropagation(),e.drawer=!e.drawer}}}),n("v-spacer"),n("router-link",{attrs:{to:{name:"Home"}}},[n("v-toolbar-title",[n("v-img",{staticClass:"mt-10 ml-7 hidden-sm-and-down",staticStyle:{"border-radius":"110px"},attrs:{height:"110",width:"110",src:"https://www.seoclerk.com/pics/551103-1TOqFD1502285018.jpg"}}),n("v-img",{staticClass:"mt-6 ml-7 hidden-md-and-up",staticStyle:{"border-radius":"110px"},attrs:{height:"70",width:"70",src:"https://www.seoclerk.com/pics/551103-1TOqFD1502285018.jpg"}})],1)],1),n("v-spacer"),n("v-menu",{attrs:{bottom:"","offset-y":""},scopedSlots:e._u([{key:"activator",fn:function(t){var r=t.on;return[n("v-avatar",e._g({staticClass:"ma-2",staticStyle:{cursor:"pointer"}},r),[n("v-img",{attrs:{src:e.auth.image?e.$server+e.auth.image:"https://www.w3schools.com/howto/img_avatar.png"}})],1)]}}])},[e.signInned?n("v-list",[n("v-list-item",[n("router-link",{staticStyle:{"text-decoration":"none",color:"black"},attrs:{to:{name:"Dashboard"}}},[e._v("Dashboard ")])],1),n("v-divider"),n("v-list-item",[n("router-link",{staticStyle:{"text-decoration":"none",color:"black"},attrs:{to:{name:"Message"}}},[e._v("ກ່ອງຂໍ້ຄວາມ ")])],1),n("v-divider"),n("v-list-item",[n("router-link",{staticStyle:{"text-decoration":"none",color:"black"},attrs:{to:{name:"SignOut"}}},[e._v("ອອກຈາກລະບົບ ")])],1)],1):e._e(),e.signInned?e._e():n("v-list",[n("v-list-item",[n("router-link",{staticStyle:{"text-decoration":"none",color:"black"},attrs:{to:{name:"SignIn"}}},[e._v("ລົງທະບຽນ ")])],1),n("v-divider"),n("v-list-item",[n("router-link",{staticStyle:{"text-decoration":"none",color:"black"},attrs:{to:{name:"SignUp"}}},[e._v("ສະໝັກສະມາຊິກ ")])],1)],1)],1)],1)],1)},s=[],i=(n("a4d3"),n("4de4"),n("4160"),n("e439"),n("dbb4"),n("b64b"),n("159b"),n("96cf"),n("89ba")),u=n("2fa7"),l=n("2f62");function d(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function f(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?d(n,!0).forEach((function(t){Object(u["a"])(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):d(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var h={computed:f({},Object(l["c"])(["signInned","auth"])),data:function(){return{clipped:!1,drawer:!1,fixed:!1,miniVariant:!1,categories:[]}},methods:f({},Object(l["b"])(["filterCategory"]),{fetchCategories:function(){var e=Object(i["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.$axios.get("category/getall");case 2:t=e.sent,this.categories=t.data.categories;case 4:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),filterCate:function(e){this.$store.commit("SetCATEGORY",e),this.filterCategory(1),this.drawer=!1}}),mounted:function(){var e=this;this.$io.on("message",(function(t){t.to===e.auth._id&&e.$swal({title:t.message,toast:!0,position:"top-end",showConfirmButton:!1,timer:3e3})}))},created:function(){this.fetchCategories()}},m=h,p=n("2877"),b=n("6544"),v=n.n(b),g=n("40dc"),k=n("5bc1"),j=n("8212"),y=n("ce7e"),w=n("132d"),O=n("adda"),S=n("8860"),_=n("56b0"),x=n("da13"),P=n("1800"),I=n("5d23"),T=n("e449"),E=n("f774"),A=n("2fa4"),C=n("2a7f"),R=Object(p["a"])(m,o,s,!1,null,null,null),V=R.exports;v()(R,{VAppBar:g["a"],VAppBarNavIcon:k["a"],VAvatar:j["a"],VDivider:y["a"],VIcon:w["a"],VImg:O["a"],VList:S["a"],VListGroup:_["a"],VListItem:x["a"],VListItemAction:P["a"],VListItemContent:I["a"],VListItemTitle:I["b"],VMenu:T["a"],VNavigationDrawer:E["a"],VSpacer:A["a"],VToolbarTitle:C["b"]});var D=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-footer",{attrs:{dark:"",padless:""}},[n("v-card",{staticClass:"flex",attrs:{flat:"",tile:""}},[n("v-card-title",{staticClass:"primary"},[n("v-spacer"),e._l(e.icons,(function(t){return n("v-btn",{key:t,staticClass:"mx-4",attrs:{dark:"",icon:""}},[n("v-icon",{attrs:{size:"24px"}},[e._v(e._s(t))])],1)}))],2),n("v-card-text",{staticClass:"py-2 white--text text-center"},[e._v(" "+e._s((new Date).getFullYear())+" — "),n("strong",[e._v("Deelance")])])],1)],1)},z=[],N={data:function(){return{icons:["fab fa-facebook","fab fa-twitter","fab fa-google-plus","fab fa-linkedin","fab fa-instagram"]}}},L=N,F=n("8336"),q=n("b0af"),G=n("99d9"),H=n("553a"),$=Object(p["a"])(L,D,z,!1,null,null,null),U=$.exports;v()($,{VBtn:F["a"],VCard:q["a"],VCardText:G["b"],VCardTitle:G["c"],VFooter:H["a"],VIcon:w["a"],VSpacer:A["a"]});var B={components:{appNavbar:V,appFooter:U}},M=B,K=n("7496"),Y=n("a75b"),J=Object(p["a"])(M,a,c,!1,null,null,null),Q=J.exports;v()(J,{VApp:K["a"],VContent:Y["a"]});n("45fc"),n("d3b7");var X=n("8c4f"),Z=n("bc3a"),W=n.n(Z),ee=n("4328"),te=n.n(ee),ne=n("c9bf"),re={clientId:"752508685901-6u41sefa9grgflhdfrfp47kjc6et2bhi.apps.googleusercontent.com",clientSecret:"-iTwuOBNYk6IHRQc8BNSXj__",prompt:"select_account",fetch_basic_profile:!1};r["a"].use(ne["a"],re);var ae={token:localStorage.getItem("access_token")||null,auth:localStorage.getItem("auth_item")||{}},ce={signInned:function(e){return null!==e.token},auth:function(e){return te.a.parse(e.auth)}},oe={SetTOKEN:function(e,t){e.token=t},DestroyTOKEN:function(e){e.token=null},SetAUTH:function(e,t){e.auth=t},DestroyAUTH:function(e){e.auth={}}},se={fetchAuth:function(){var e=Object(i["a"])(regeneratorRuntime.mark((function e(t){var n,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!t.getters.signInned){e.next=15;break}return W.a.defaults.headers.common["Authorization"]=ae.token,e.prev=2,e.next=5,W.a.get("auth/currentuser");case 5:return n=e.sent,r=n.data.auth,localStorage.setItem("auth_item",te.a.stringify(r)),t.commit("SetAUTH",te.a.stringify(r)),e.abrupt("return",Promise.resolve(n));case 12:return e.prev=12,e.t0=e["catch"](2),e.abrupt("return",Promise.reject(e.t0));case 15:case"end":return e.stop()}}),e,null,[[2,12]])})));function t(t){return e.apply(this,arguments)}return t}(),signIn:function(){var e=Object(i["a"])(regeneratorRuntime.mark((function e(t,n){var r,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(t.getters.signInned){e.next=15;break}return e.prev=1,e.next=4,W.a.post("auth/signin",{email:n.email,password:n.password});case 4:return r=e.sent,a=r.data.token,localStorage.setItem("access_token",a),t.commit("SetTOKEN",a),t.dispatch("fetchAuth"),e.abrupt("return",Promise.resolve(r));case 12:return e.prev=12,e.t0=e["catch"](1),e.abrupt("return",Promise.reject(e.t0));case 15:case"end":return e.stop()}}),e,null,[[1,12]])})));function t(t,n){return e.apply(this,arguments)}return t}(),signUp:function(){var e=Object(i["a"])(regeneratorRuntime.mark((function e(t,n){var r,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(t.getters.signInned){e.next=15;break}return e.prev=1,e.next=4,W.a.post("auth/signup",{username:n.username,email:n.email,password:n.password});case 4:return r=e.sent,a=r.data.token,localStorage.setItem("access_token",a),t.commit("SetTOKEN",a),t.dispatch("fetchAuth"),e.abrupt("return",Promise.resolve(r));case 12:return e.prev=12,e.t0=e["catch"](1),e.abrupt("return",Promise.reject(e.t0));case 15:case"end":return e.stop()}}),e,null,[[1,12]])})));function t(t,n){return e.apply(this,arguments)}return t}(),signOut:function(){var e=Object(i["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!t.getters.signInned){e.next=12;break}return e.prev=1,localStorage.removeItem("access_token"),localStorage.removeItem("auth_item"),t.commit("DestroyTOKEN"),t.commit("DestroyAUTH"),e.abrupt("return",Promise.resolve("SignOut successfully"));case 9:return e.prev=9,e.t0=e["catch"](1),e.abrupt("return",Promise.reject("SignOut has error"));case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));function t(t){return e.apply(this,arguments)}return t}(),googleSignIn:function(){var e=Object(i["a"])(regeneratorRuntime.mark((function e(t){var n,a,c,o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(t.getters.signInned){e.next=19;break}return e.prev=1,e.next=4,r["a"].prototype.$gAuth.signIn();case 4:return n=e.sent,a=n.Zi.access_token,e.next=8,W.a.post("auth/oauth/google",null,{params:{access_token:a}});case 8:return c=e.sent,o=c.data.token,localStorage.setItem("access_token",o),t.commit("SetTOKEN",o),t.dispatch("fetchAuth"),e.abrupt("return",Promise.resolve(o));case 16:return e.prev=16,e.t0=e["catch"](1),e.abrupt("return",Promise.reject(e.t0));case 19:case"end":return e.stop()}}),e,null,[[1,16]])})));function t(t){return e.apply(this,arguments)}return t}(),facebookSignIn:function(){var e=Object(i["a"])(regeneratorRuntime.mark((function e(t,n){var r,a,c;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(t.getters.signInned){e.next=18;break}return e.prev=1,e.next=4,n;case 4:return r=e.sent,e.next=7,W.a.post("auth/oauth/facebook",null,{params:{access_token:r}});case 7:return a=e.sent,c=a.data.token,localStorage.setItem("access_token",c),t.commit("SetTOKEN",c),t.dispatch("fetchAuth"),e.abrupt("return",Promise.resolve(c));case 15:return e.prev=15,e.t0=e["catch"](1),e.abrupt("return",Promise.reject(e.t0));case 18:case"end":return e.stop()}}),e,null,[[1,15]])})));function t(t,n){return e.apply(this,arguments)}return t}()},ie={state:ae,getters:ce,mutations:oe,actions:se},ue={pagination:{length:0,perPage:6,page:1},portfolios:[],categoryId:null,catePaginate:!1},le={portfolios:function(e){return e.portfolios},pagination:function(e){return e.pagination},categoryId:function(e){return e.categoryId},catePaginate:function(e){return e.catePaginate}},de={SetPORTFOLIO:function(e,t){e.portfolios=t},SetLENGTH:function(e,t){e.pagination.length=t},SetPAGE:function(e,t){e.pagination.page=t},SetCATEGORY:function(e,t){e.categoryId=t},SetCATEPAGINATE:function(e,t){e.catePaginate=t},PushPORTFOLIO:function(e,t){e.portfolios.push(t)}},fe={fetchPortfolios:function(){var e=Object(i["a"])(regeneratorRuntime.mark((function e(t,n){var r,a,c,o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,r=t.state.pagination.perPage,e.next=4,W.a.get("home",{params:{page:n,perPage:r}});case 4:a=e.sent,c=a.data.portfolios,o=a.data.length,t.commit("SetPORTFOLIO",c),t.commit("SetLENGTH",o),t.commit("SetCATEPAGINATE",!1),t.commit("SetCATEGORY","all"),e.next=16;break;case 13:throw e.prev=13,e.t0=e["catch"](0),e.t0;case 16:case"end":return e.stop()}}),e,null,[[0,13]])})));function t(t,n){return e.apply(this,arguments)}return t}(),filterCategory:function(){var e=Object(i["a"])(regeneratorRuntime.mark((function e(t,n){var r,a,c,o,s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,r=t.state.pagination.perPage,a=t.state.categoryId,e.next=5,W.a.get("home/filtercategory",{params:{page:n,perPage:r,categoryId:a}});case 5:c=e.sent,o=c.data.portfolios,s=c.data.length,t.commit("SetPORTFOLIO",o),t.commit("SetLENGTH",s),t.commit("SetCATEPAGINATE",!0),t.commit("SetCATEGORY",a),t.commit("SetPAGE",n),e.next=18;break;case 15:throw e.prev=15,e.t0=e["catch"](0),e.t0;case 18:case"end":return e.stop()}}),e,null,[[0,15]])})));function t(t,n){return e.apply(this,arguments)}return t}()},he={state:ue,getters:le,mutations:de,actions:fe},me={currentOrder:{}},pe={currentOrder:function(e){return e.currentOrder}},be={SetCurrentOrder:function(e,t){e.currentOrder=t}},ve={fetchCurrentOrder:function(){var e=Object(i["a"])(regeneratorRuntime.mark((function e(t,n){var r,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,W.a.get("order/current-order",{params:{_id:n}});case 2:r=e.sent,a=r.data.order,t.commit("SetCurrentOrder",a);case 5:case"end":return e.stop()}}),e)})));function t(t,n){return e.apply(this,arguments)}return t}()},ge={state:me,getters:pe,mutations:be,actions:ve};r["a"].use(l["a"]);var ke=new l["a"].Store({state:{},getters:{},mutations:{},actions:{},modules:{auth:ie,portfolios:he,message:ge}});r["a"].use(X["a"]);var je=new X["a"]({mode:"history",base:"/",scrollBehavior:function(e,t,n){return n||(e.hash?{selector:e.hash}:{x:0,y:0})},routes:[{path:"/test",name:"Test",component:function(){return n.e("chunk-a1bc209e").then(n.bind(null,"78c1"))}},{path:"/message",component:function(){return Promise.all([n.e("chunk-57c34342"),n.e("chunk-6d032e3a")]).then(n.bind(null,"0944"))},meta:{requiresAuth:!0},children:[{path:"/",name:"Message",component:function(){return n.e("chunk-5b3269d4").then(n.bind(null,"a357"))}},{path:":id",name:"MessageFocus",component:function(){return Promise.all([n.e("chunk-57c34342"),n.e("chunk-1100cb5b")]).then(n.bind(null,"4b23"))}}]},{path:"/",name:"Home",component:function(){return Promise.all([n.e("chunk-57c34342"),n.e("chunk-48143a1f"),n.e("chunk-8010db68"),n.e("chunk-102cd403")]).then(n.bind(null,"b3d7"))}},{path:"/detail/:id",name:"Details",component:function(){return Promise.all([n.e("chunk-57c34342"),n.e("chunk-8010db68"),n.e("chunk-007c6043")]).then(n.bind(null,"3207"))}},{path:"/signin",name:"SignIn",component:function(){return Promise.all([n.e("chunk-57c34342"),n.e("chunk-c33e0f00"),n.e("chunk-15a3621c")]).then(n.bind(null,"ab23"))},meta:{requiresVisitor:!0}},{path:"/signup",name:"SignUp",component:function(){return Promise.all([n.e("chunk-57c34342"),n.e("chunk-c33e0f00"),n.e("chunk-0f3e3b7e")]).then(n.bind(null,"4b77"))},meta:{requiresVisitor:!0}},{path:"/signout",name:"SignOut",component:function(){return n.e("chunk-2d212f1d").then(n.bind(null,"ab28"))},meta:{requiresAuth:!0}},{path:"/payment/:id",name:"Payment",component:function(){return Promise.all([n.e("chunk-57c34342"),n.e("chunk-3af6bd3c")]).then(n.bind(null,"8071"))}},{path:"/dashboard",component:function(){return n.e("chunk-7be1b8a1").then(n.bind(null,"5c3a8"))},children:[{path:"",name:"Dashboard",component:function(){return n.e("chunk-5c819f8c").then(n.bind(null,"cd59"))}},{path:"profile/edit",name:"DashboardProfileEdit",component:function(){return Promise.all([n.e("chunk-57c34342"),n.e("chunk-4150209f")]).then(n.bind(null,"ad67"))}},{path:"task",name:"DashboardTask",component:function(){return n.e("chunk-3b10659a").then(n.bind(null,"771c"))},meta:{requiresFreelancer:!0}},{path:"feedback",name:"DashboardFeedback",component:function(){return n.e("chunk-2d230447").then(n.bind(null,"ec0c"))},meta:{requiresFreelancer:!0}},{path:"portfolio/post",name:"DashboardPortfolioPost",component:function(){return Promise.all([n.e("chunk-57c34342"),n.e("chunk-c33e0f00"),n.e("chunk-48143a1f"),n.e("chunk-61d128ae"),n.e("chunk-d1505360")]).then(n.bind(null,"c43b"))},meta:{requiresFreelancer:!0}},{path:"portfolio/update/:id",name:"DashboardPortfolioUpdate",component:function(){return Promise.all([n.e("chunk-57c34342"),n.e("chunk-c33e0f00"),n.e("chunk-48143a1f"),n.e("chunk-61d128ae"),n.e("chunk-5cf22568")]).then(n.bind(null,"6fa4"))},meta:{requiresFreelancer:!0}}]}]});je.beforeEach((function(e,t,n){e.matched.some((function(e){return e.meta.requiresAuth}))?ke.getters.signInned?n():n({name:"SignIn"}):n()})),je.beforeEach((function(e,t,n){e.matched.some((function(e){return e.meta.requiresVisitor}))&&ke.getters.signInned?n({name:"Home"}):n()})),je.beforeEach((function(e,t,n){e.matched.some((function(e){return e.meta.requiresFreelancer}))&&"freelancer"!==ke.getters.auth.type?n({name:"Home"}):n()}));var ye=je,we=n("f309");r["a"].use(we["a"]);var Oe=new we["a"],Se="http://206.189.145.0/client/",_e="http://206.189.145.0/";W.a.defaults.baseURL=Se,W.a.defaults.headers.common["Authorization"]=ke.state.auth.token,r["a"].prototype.$axios=W.a;var xe=n("5886");r["a"].use(xe["a"]);new xe["a"];var Pe=n("7212"),Ie=n.n(Pe);n("dfa4");r["a"].use(Ie.a);var Te=n("c1df"),Ee=n.n(Te);r["a"].use(Ee.a),r["a"].prototype.$moment=Ee.a;var Ae=n("8055"),Ce=n.n(Ae),Re=Ce()(_e);r["a"].prototype.$io=Re,r["a"].prototype.$server=_e,new r["a"]({router:ye,store:ke,vuetify:Oe,render:function(e){return e(Q)}}).$mount("#app")}});
//# sourceMappingURL=app.ee22014f.js.map