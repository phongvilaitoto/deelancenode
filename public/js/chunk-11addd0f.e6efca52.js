(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-11addd0f"],{"78c1":function(t,a,n){"use strict";n.r(a);var e=function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("v-container",[n("v-card",{staticClass:"ma-10"},[n("div",{staticClass:"ma-12"},[n("v-text-field",{model:{value:t.a,callback:function(a){t.a=a},expression:"a"}}),n("v-text-field",{model:{value:t.b,callback:function(a){t.b=a},expression:"b"}}),n("v-btn",{on:{click:function(a){return t.sum(t.a,t.b)}}},[t._v("Click")])],1)])],1)},r=[],s={data:function(){return{a:0,b:0}},methods:{sum:function(){}}},i=s,o=n("2877"),c=n("6544"),d=n.n(c),l=n("8336"),u=n("b0af"),f=n("a523"),p=n("8654"),b=Object(o["a"])(i,e,r,!1,null,null,null);a["default"]=b.exports;d()(b,{VBtn:l["a"],VCard:u["a"],VContainer:f["a"],VTextField:p["a"]})},a523:function(t,a,n){"use strict";n("20f6"),n("4b85");var e=n("e8f2"),r=n("d9f7");a["a"]=Object(e["a"])("container").extend({name:"v-container",functional:!0,props:{id:String,tag:{type:String,default:"div"},fluid:{type:Boolean,default:!1}},render(t,{props:a,data:n,children:e}){let s;const{attrs:i}=n;return i&&(n.attrs={},s=Object.keys(i).filter(t=>{if("slot"===t)return!1;const a=i[t];return t.startsWith("data-")?(n.attrs[t]=a,!1):a||"string"===typeof a})),a.id&&(n.domProps=n.domProps||{},n.domProps.id=a.id),t(a.tag,Object(r["a"])(n,{staticClass:"container",class:Array({"container--fluid":a.fluid}).concat(s||[])}),e)}})},e8f2:function(t,a,n){"use strict";n.d(a,"a",(function(){return r}));var e=n("2b0e");function r(t){return e["a"].extend({name:`v-${t}`,functional:!0,props:{id:String,tag:{type:String,default:"div"}},render(a,{props:n,data:e,children:r}){e.staticClass=`${t} ${e.staticClass||""}`.trim();const{attrs:s}=e;if(s){e.attrs={};const t=Object.keys(s).filter(t=>{if("slot"===t)return!1;const a=s[t];return t.startsWith("data-")?(e.attrs[t]=a,!1):a||"string"===typeof a});t.length&&(e.staticClass+=` ${t.join(" ")}`)}return n.id&&(e.domProps=e.domProps||{},e.domProps.id=n.id),a(n.tag,e,r)}})}}}]);
//# sourceMappingURL=chunk-11addd0f.e6efca52.js.map