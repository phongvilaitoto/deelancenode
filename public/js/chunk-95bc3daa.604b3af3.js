(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-95bc3daa"],{"0e8f":function(t,e,a){"use strict";a("20f6");var s=a("e8f2");e["a"]=Object(s["a"])("flex")},1681:function(t,e,a){},"2bba":function(t,e,a){"use strict";var s=a("b6dc"),r=a.n(s);r.a},"4b85":function(t,e,a){},"4bd4":function(t,e,a){"use strict";var s=a("58df"),r=a("7e2b"),i=a("3206");e["a"]=Object(s["a"])(r["a"],Object(i["b"])("form")).extend({name:"v-form",inheritAttrs:!1,props:{lazyValidation:Boolean,value:Boolean},data:()=>({inputs:[],watchers:[],errorBag:{}}),watch:{errorBag:{handler(t){const e=Object.values(t).includes(!0);this.$emit("input",!e)},deep:!0,immediate:!0}},methods:{watchInput(t){const e=t=>{return t.$watch("hasError",e=>{this.$set(this.errorBag,t._uid,e)},{immediate:!0})},a={_uid:t._uid,valid:()=>{},shouldValidate:()=>{}};return this.lazyValidation?a.shouldValidate=t.$watch("shouldValidate",s=>{s&&(this.errorBag.hasOwnProperty(t._uid)||(a.valid=e(t)))}):a.valid=e(t),a},validate(){return 0===this.inputs.filter(t=>!t.validate(!0)).length},reset(){this.inputs.forEach(t=>t.reset()),this.resetErrorBag()},resetErrorBag(){this.lazyValidation&&setTimeout(()=>{this.errorBag={}},0)},resetValidation(){this.inputs.forEach(t=>t.resetValidation()),this.resetErrorBag()},register(t){this.inputs.push(t),this.watchers.push(this.watchInput(t))},unregister(t){const e=this.inputs.find(e=>e._uid===t._uid);if(!e)return;const a=this.watchers.find(t=>t._uid===e._uid);a&&(a.valid(),a.shouldValidate()),this.watchers=this.watchers.filter(t=>t._uid!==e._uid),this.inputs=this.inputs.filter(t=>t._uid!==e._uid),this.$delete(this.errorBag,e._uid)}},render(t){return t("form",{staticClass:"v-form",attrs:{novalidate:!0,...this.attrs$},on:{submit:t=>this.$emit("submit",t)}},this.$slots.default)}})},8071:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",[a("v-layout",{attrs:{wrap:"","justify-center":"","align-center":""}},[a("v-flex",{attrs:{xs12:"",sm7:"",md6:"",lg6:""}},[a("v-card",{staticClass:"mt-10"},[a("v-form",{staticClass:"pa-10 text-center",on:{submit:function(e){return e.preventDefault(),t.sendEvidence(e)}}},[a("h3",[t._v("ສົ່ງຫຼັກຖານຢືນຢັນການຊໍາລະເງິນ")]),a("div",{staticClass:"file-input"},[a("label",{staticClass:"v-btn info",attrs:{for:"file"}},[a("i",{staticClass:"fas fa-upload fa-lg mr-2"}),t._v(" ອັບໂຫຼດຫຼັກຖານ")]),a("input",{attrs:{type:"file",id:"file"},on:{change:t.imgUpload}})]),a("v-text-field",{attrs:{label:"orderID",outlined:"",type:"text"},model:{value:t.orderId,callback:function(e){t.orderId=e},expression:"orderId"}}),a("v-textarea",{attrs:{label:"ລາຍລະອຽດເພີ່ມເຕີມ",outlined:""},model:{value:t.description,callback:function(e){t.description=e},expression:"description"}}),a("v-btn",{staticClass:"primary",attrs:{type:"submit"}},[t._v("ສົ່ງຫຼັກຖານຢືນຢັນການຊໍາລະເງິນ")]),a("br"),t._v(" "),a("br"),a("small",[t._v("* ເມື່ອທ່ານໂອນເງິນຜ່ານລະບົບແລ້ວໃຫ້ສົ່ງຫຼັກຖານຢືນຢັນການໂອນເງິນ")])],1)],1)],1)],1)],1)},r=[],i=(a("a4d3"),a("e01a"),a("96cf"),a("89ba")),n={data:function(){return{orderId:"",description:"",file:"",base64:""}},methods:{imgUpload:function(t){var e=this,a=t.target.files[0],s=new FileReader;a["size"]<2e6?(s.onloadend=function(t){e.base64=t.target.result},s.readAsDataURL(a),this.file=a):this.$swal("Oops...","You are upload a large file","error")},sendEvidence:function(){var t=Object(i["a"])(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e=new FormData,e.append("orderId",this.orderId),e.append("image",this.file),e.append("description",this.description),t.next=6,this.$axios.post("evidence/post",e);case 6:alert("suc");case 7:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()},created:function(){this.orderId=this.$route.params.id}},o=n,c=(a("2bba"),a("2877")),l=a("6544"),u=a.n(l),d=a("8336"),p=a("b0af"),h=a("a523"),f=a("0e8f"),v=a("4bd4"),g=a("a722"),m=a("8654"),b=a("a844"),y=Object(c["a"])(o,s,r,!1,null,"369bc9e1",null);e["default"]=y.exports;u()(y,{VBtn:d["a"],VCard:p["a"],VContainer:h["a"],VFlex:f["a"],VForm:v["a"],VLayout:g["a"],VTextField:m["a"],VTextarea:b["a"]})},a523:function(t,e,a){"use strict";a("20f6"),a("4b85");var s=a("e8f2"),r=a("d9f7");e["a"]=Object(s["a"])("container").extend({name:"v-container",functional:!0,props:{id:String,tag:{type:String,default:"div"},fluid:{type:Boolean,default:!1}},render(t,{props:e,data:a,children:s}){let i;const{attrs:n}=a;return n&&(a.attrs={},i=Object.keys(n).filter(t=>{if("slot"===t)return!1;const e=n[t];return t.startsWith("data-")?(a.attrs[t]=e,!1):e||"string"===typeof e})),e.id&&(a.domProps=a.domProps||{},a.domProps.id=e.id),t(e.tag,Object(r["a"])(a,{staticClass:"container",class:Array({"container--fluid":e.fluid}).concat(i||[])}),s)}})},a722:function(t,e,a){"use strict";a("20f6");var s=a("e8f2");e["a"]=Object(s["a"])("layout")},a844:function(t,e,a){"use strict";a("1681");var s=a("8654"),r=a("58df");const i=Object(r["a"])(s["a"]);e["a"]=i.extend({name:"v-textarea",props:{autoGrow:Boolean,noResize:Boolean,rowHeight:{type:[Number,String],default:24,validator:t=>!isNaN(parseFloat(t))},rows:{type:[Number,String],default:5,validator:t=>!isNaN(parseInt(t,10))}},computed:{classes(){return{"v-textarea":!0,"v-textarea--auto-grow":this.autoGrow,"v-textarea--no-resize":this.noResizeHandle,...s["a"].options.computed.classes.call(this)}},noResizeHandle(){return this.noResize||this.autoGrow}},watch:{lazyValue(){this.autoGrow&&this.$nextTick(this.calculateInputHeight)},rowHeight(){this.autoGrow&&this.$nextTick(this.calculateInputHeight)}},mounted(){setTimeout(()=>{this.autoGrow&&this.calculateInputHeight()},0)},methods:{calculateInputHeight(){const t=this.$refs.input;if(!t)return;t.style.height="0";const e=t.scrollHeight,a=parseInt(this.rows,10)*parseFloat(this.rowHeight);t.style.height=Math.max(a,e)+"px"},genInput(){const t=s["a"].options.methods.genInput.call(this);return t.tag="textarea",delete t.data.attrs.type,t.data.attrs.rows=this.rows,t},onInput(t){s["a"].options.methods.onInput.call(this,t),this.autoGrow&&this.calculateInputHeight()},onKeyDown(t){this.isFocused&&13===t.keyCode&&t.stopPropagation(),this.$emit("keydown",t)}}})},b6dc:function(t,e,a){},d9f7:function(t,e,a){"use strict";a.d(e,"a",(function(){return n}));var s=a("80d2");const r={styleList:/;(?![^(]*\))/g,styleProp:/:(.*)/};function i(t){const e={};for(const a of t.split(r.styleList)){let[t,i]=a.split(r.styleProp);t=t.trim(),t&&("string"===typeof i&&(i=i.trim()),e[Object(s["c"])(t)]=i)}return e}function n(){const t={};let e,a,s=arguments.length;while(s--)for(e of Object.keys(arguments[s]))switch(e){case"class":case"style":case"directives":if(Array.isArray(t[e])||(t[e]=[]),"style"===e){let t;t=Array.isArray(arguments[s].style)?arguments[s].style:[arguments[s].style];for(let e=0;e<t.length;e++){const a=t[e];"string"===typeof a&&(t[e]=i(a))}arguments[s].style=t}t[e]=t[e].concat(arguments[s][e]);break;case"staticClass":if(!arguments[s][e])break;void 0===t[e]&&(t[e]=""),t[e]&&(t[e]+=" "),t[e]+=arguments[s][e].trim();break;case"on":case"nativeOn":t[e]||(t[e]={});const r=t[e];for(a of Object.keys(arguments[s][e]||{}))r[a]?r[a]=Array().concat(r[a],arguments[s][e][a]):r[a]=arguments[s][e][a];break;case"attrs":case"props":case"domProps":case"scopedSlots":case"staticStyle":case"hook":case"transition":t[e]||(t[e]={}),t[e]={...arguments[s][e],...t[e]};break;case"slot":case"key":case"ref":case"tag":case"show":case"keepAlive":default:t[e]||(t[e]=arguments[s][e])}return t}},e01a:function(t,e,a){"use strict";var s=a("23e7"),r=a("83ab"),i=a("da84"),n=a("5135"),o=a("861d"),c=a("9bf2").f,l=a("e893"),u=i.Symbol;if(r&&"function"==typeof u&&(!("description"in u.prototype)||void 0!==u().description)){var d={},p=function(){var t=arguments.length<1||void 0===arguments[0]?void 0:String(arguments[0]),e=this instanceof p?new u(t):void 0===t?u():u(t);return""===t&&(d[e]=!0),e};l(p,u);var h=p.prototype=u.prototype;h.constructor=p;var f=h.toString,v="Symbol(test)"==String(u("test")),g=/^Symbol\((.*)\)[^)]+$/;c(h,"description",{configurable:!0,get:function(){var t=o(this)?this.valueOf():this,e=f.call(t);if(n(d,t))return"";var a=v?e.slice(7,-1):e.replace(g,"$1");return""===a?void 0:a}}),s({global:!0,forced:!0},{Symbol:p})}},e8f2:function(t,e,a){"use strict";a.d(e,"a",(function(){return r}));var s=a("2b0e");function r(t){return s["a"].extend({name:`v-${t}`,functional:!0,props:{id:String,tag:{type:String,default:"div"}},render(e,{props:a,data:s,children:r}){s.staticClass=`${t} ${s.staticClass||""}`.trim();const{attrs:i}=s;if(i){s.attrs={};const t=Object.keys(i).filter(t=>{if("slot"===t)return!1;const e=i[t];return t.startsWith("data-")?(s.attrs[t]=e,!1):e||"string"===typeof e});t.length&&(s.staticClass+=` ${t.join(" ")}`)}return a.id&&(s.domProps=s.domProps||{},s.domProps.id=a.id),e(a.tag,s,r)}})}}}]);
//# sourceMappingURL=chunk-95bc3daa.604b3af3.js.map