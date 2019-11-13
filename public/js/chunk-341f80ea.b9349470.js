(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-341f80ea"],{"0d85":function(t,e,i){"use strict";var r=i("4f5f"),s=i.n(r);s.a},"0e8f":function(t,e,i){"use strict";i("20f6");var r=i("e8f2");e["a"]=Object(r["a"])("flex")},"0fd9":function(t,e,i){"use strict";i("4b85");var r=i("2b0e"),s=i("d9f7"),n=i("80d2");const a=["sm","md","lg","xl"],o=["start","end","center"];function c(t,e){return a.reduce((i,r)=>{return i[t+Object(n["w"])(r)]=e(),i},{})}const l=t=>[...o,"baseline","stretch"].includes(t),d=c("align",()=>({type:String,default:null,validator:l})),u=t=>[...o,"space-between","space-around"].includes(t),h=c("justify",()=>({type:String,default:null,validator:u})),v=t=>[...o,"space-between","space-around","stretch"].includes(t),f=c("alignContent",()=>({type:String,default:null,validator:v})),p={align:Object.keys(d),justify:Object.keys(h),alignContent:Object.keys(f)},m={align:"align",justify:"justify",alignContent:"align-content"};function g(t,e,i){let r=m[t];if(null!=i){if(e){const i=e.replace(t,"");r+=`-${i}`}return r+=`-${i}`,r.toLowerCase()}}const b=new Map;e["a"]=r["a"].extend({name:"v-row",functional:!0,props:{tag:{type:String,default:"div"},dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:l},...d,justify:{type:String,default:null,validator:u},...h,alignContent:{type:String,default:null,validator:v},...f},render(t,{props:e,data:i,children:r}){let n="";for(const s in e)n+=String(e[s]);let a=b.get(n);if(!a){let t;for(t in a=[],p)p[t].forEach(i=>{const r=e[i],s=g(t,i,r);s&&a.push(s)});a.push({"no-gutters":e.noGutters,"row--dense":e.dense,[`align-${e.align}`]:e.align,[`justify-${e.justify}`]:e.justify,[`align-content-${e.alignContent}`]:e.alignContent}),b.set(n,a)}return t(e.tag,Object(s["a"])(i,{staticClass:"row",class:a}),r)}})},"123d":function(t,e,i){(function(e,i){t.exports=i()})(0,(function(){"use strict";var t=function(t,e){"function"===typeof t.scroll?t.scroll({top:t.scrollHeight,behavior:e?"smooth":"instant"}):t.scrollTop=t.scrollHeight},e={bind:function(e,i){var r=!1;e.addEventListener("scroll",(function(t){r=e.scrollTop+e.clientHeight+1<e.scrollHeight})),new MutationObserver((function(s){var n=i.value||{},a=!1===n.always&&r,o=s[s.length-1].addedNodes.length,c=s[s.length-1].removedNodes.length;if(n.scrollonremoved){if(a||1!=o&&1!=c)return}else if(a||1!=o)return;var l=n.smooth,d=!o&&1===c;d&&n.scrollonremoved&&"smoothonremoved"in n&&(l=n.smoothonremoved),t(e,l)})).observe(e,{childList:!0,subtree:!0})},inserted:function(e,i){var r=i.value||{};t(e,r.smooth)}},i={install:function(t,i){t.directive("chat-scroll",e)}};return"undefined"!==typeof window&&window.Vue&&window.Vue.use(i),i}))},"169a":function(t,e,i){"use strict";i("368e");var r=i("4ad4"),s=i("b848"),n=i("75eb"),a=i("e707"),o=i("e4d3"),c=i("21be"),l=i("f2e7"),d=i("a293"),u=i("80d2"),h=i("bfc5"),v=i("58df"),f=i("d9bd");const p=Object(v["a"])(r["a"],s["a"],n["a"],a["a"],o["a"],c["a"],l["a"]);e["a"]=p.extend({name:"v-dialog",directives:{ClickOutside:d["a"]},props:{dark:Boolean,disabled:Boolean,fullscreen:Boolean,light:Boolean,maxWidth:{type:[String,Number],default:"none"},noClickAnimation:Boolean,origin:{type:String,default:"center center"},persistent:Boolean,retainFocus:{type:Boolean,default:!0},scrollable:Boolean,transition:{type:[String,Boolean],default:"dialog-transition"},width:{type:[String,Number],default:"auto"}},data(){return{activatedBy:null,animate:!1,animateTimeout:-1,isActive:!!this.value,stackMinZIndex:200}},computed:{classes(){return{[`v-dialog ${this.contentClass}`.trim()]:!0,"v-dialog--active":this.isActive,"v-dialog--persistent":this.persistent,"v-dialog--fullscreen":this.fullscreen,"v-dialog--scrollable":this.scrollable,"v-dialog--animated":this.animate}},contentClasses(){return{"v-dialog__content":!0,"v-dialog__content--active":this.isActive}},hasActivator(){return Boolean(!!this.$slots.activator||!!this.$scopedSlots.activator)}},watch:{isActive(t){t?(this.show(),this.hideScroll()):(this.removeOverlay(),this.unbind())},fullscreen(t){this.isActive&&(t?(this.hideScroll(),this.removeOverlay(!1)):(this.showScroll(),this.genOverlay()))}},created(){this.$attrs.hasOwnProperty("full-width")&&Object(f["d"])("full-width",this)},beforeMount(){this.$nextTick(()=>{this.isBooted=this.isActive,this.isActive&&this.show()})},beforeDestroy(){"undefined"!==typeof window&&this.unbind()},methods:{animateClick(){this.animate=!1,this.$nextTick(()=>{this.animate=!0,window.clearTimeout(this.animateTimeout),this.animateTimeout=window.setTimeout(()=>this.animate=!1,150)})},closeConditional(t){const e=t.target;return!(this._isDestroyed||!this.isActive||this.$refs.content.contains(e)||this.overlay&&e&&!this.overlay.$el.contains(e))&&(this.$emit("click:outside"),this.persistent&&this.overlay?(this.noClickAnimation||this.overlay.$el!==e&&!this.overlay.$el.contains(e)||this.animateClick(),!1):this.activeZIndex>=this.getMaxZIndex())},hideScroll(){this.fullscreen?document.documentElement.classList.add("overflow-y-hidden"):a["a"].options.methods.hideScroll.call(this)},show(){!this.fullscreen&&!this.hideOverlay&&this.genOverlay(),this.$nextTick(()=>{this.$refs.content.focus(),this.bind()})},bind(){window.addEventListener("focusin",this.onFocusin)},unbind(){window.removeEventListener("focusin",this.onFocusin)},onKeydown(t){if(t.keyCode===u["s"].esc&&!this.getOpenDependents().length)if(this.persistent)this.noClickAnimation||this.animateClick();else{this.isActive=!1;const t=this.getActivator();this.$nextTick(()=>t&&t.focus())}this.$emit("keydown",t)},onFocusin(t){if(!t||t.target===document.activeElement||!this.retainFocus)return;const e=t.target;if(e&&![document,this.$refs.content].includes(e)&&!this.$refs.content.contains(e)&&this.activeZIndex>=this.getMaxZIndex()&&!this.getOpenDependentElements().some(t=>t.contains(e))){const t=this.$refs.content.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');t.length&&t[0].focus()}}},render(t){const e=[],i={class:this.classes,ref:"dialog",directives:[{name:"click-outside",value:()=>{this.isActive=!1},args:{closeConditional:this.closeConditional,include:this.getOpenDependentElements}},{name:"show",value:this.isActive}],on:{click:t=>{t.stopPropagation()}},style:{}};this.fullscreen||(i.style={maxWidth:"none"===this.maxWidth?void 0:Object(u["e"])(this.maxWidth),width:"auto"===this.width?void 0:Object(u["e"])(this.width)}),e.push(this.genActivator());let r=t("div",i,this.showLazyContent(this.getContentSlot()));return this.transition&&(r=t("transition",{props:{name:this.transition,origin:this.origin}},[r])),e.push(t("div",{class:this.contentClasses,attrs:{role:"document",tabindex:this.isActive?0:void 0,...this.getScopeIdAttrs()},on:{keydown:this.onKeydown},style:{zIndex:this.activeZIndex},ref:"content"},[this.$createElement(h["a"],{props:{root:!0,light:this.light,dark:this.dark}},[r])])),t("div",{staticClass:"v-dialog__container",attrs:{role:"dialog"}},e)}})},"368e":function(t,e,i){},"3aef":function(t,e,i){},"4b23":function(t,e,i){"use strict";i.r(e);var r=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("v-card",{staticClass:"pa-5",attrs:{outlined:"",tile:""}},[i("b",[t._v("orderID: "+t._s(t.currentOrder.quotation.orderId)+" ")])]),i("v-card",{directives:[{name:"chat-scroll",rawName:"v-chat-scroll"}],staticClass:"card pa-2",attrs:{outlined:"",tile:""}},[t._l(t.chat.messages,(function(e){return i("div",{key:e.index},[e.from!==t.auth._id?i("div",{staticClass:"msg-box receive"},[e.image?i("v-img",{attrs:{width:"200",src:e.image?t.$server+e.image:""}}):t._e(),i("div",{staticClass:"receive-msg"},[e.message?i("p",[t._v(t._s(e.message))]):t._e(),"quotation"===e.type?i("v-card",[i("div",{staticClass:"mx-5 my-5"},[i("b",[t._v(" ໃບສະເໜີລາຄາ ")]),i("br"),i("small",{staticClass:"mb-5"},[t._v(" "+t._s(t.currentOrder.portfolioId.title))]),i("br"),i("b",[t._v("ລາຄາ")]),i("span",{staticClass:"primary--text"},[t._v(" "+t._s(e.orderId.quotation.price.toLocaleString())+" ")]),i("b",[t._v("ກີບ")]),i("app-detail-quotation-modal",{attrs:{auth:t.auth,order:e.orderId,currentOrder:t.currentOrder}})],1)]):t._e()],1)],1):i("div",{staticClass:"msg-box send"},[e.image?i("v-img",{attrs:{width:"200",src:e.image?t.$server+e.image:""}}):t._e(),i("div",{staticClass:"send-msg"},[e.message?i("p",[t._v(t._s(e.message))]):t._e(),"quotation"===e.type?i("v-card",[i("div",{staticClass:"mx-5 my-5"},[i("b",[t._v(" ໃບສະເໜີລາຄາ ")]),i("br"),i("small",{staticClass:"mb-5"},[t._v(" "+t._s(t.currentOrder.portfolioId.title))]),i("br"),i("b",[t._v("ລາຄາ")]),i("span",{staticClass:"primary--text"},[t._v(" "+t._s(e.orderId.quotation.price.toLocaleString())+" ")]),i("b",[t._v("ກີບ")]),i("app-detail-quotation-modal",{attrs:{auth:t.auth,order:e.orderId,currentOrder:t.currentOrder}})],1)]):t._e()],1)],1)])})),t.typing?i("div",{staticClass:"msg-box receive"},[i("div",{staticClass:"receive-msg"},[i("p",[t._v("ກໍາລັງພິມ...")])])]):t._e(),t.base64?i("v-card",{attrs:{outlined:"",tile:""}},[i("v-img",{staticClass:"mx-2 my-2",staticStyle:{border:"1px solid white"},attrs:{width:"150",height:"150",src:t.base64}},[i("v-icon",{staticClass:"error--text mb-2",staticStyle:{cursor:"pointer"},attrs:{size:"30"},on:{click:function(e){t.base64="",t.file=""}}},[t._v(" mdi-cancel")])],1)],1):t._e()],2),i("v-card",{staticStyle:{height:"74px"},attrs:{outlined:"",tile:""}},[i("v-form",{on:{submit:function(e){return e.preventDefault(),t.sendMessage(e)}}},[i("v-layout",[i("v-flex",{attrs:{xs10:"",sm10:"",md10:"",lg10:""}},[i("v-text-field",{staticClass:"ml-4",attrs:{counter:"20"},model:{value:t.input,callback:function(e){t.input=e},expression:"input"}})],1),i("v-flex",{attrs:{"mt-5":""}},[i("a",{staticClass:"icon mx-2",on:{click:t.sendMessage}},[i("v-icon",{attrs:{size:"30"}},[t._v("mdi-send")])],1),i("a",{staticClass:"icon file-input"},[i("label",{attrs:{for:"file"}},[i("v-icon",{attrs:{size:"30"}},[t._v("mdi-link-variant ")])],1),i("input",{attrs:{type:"file",id:"file"},on:{change:t.imgUpload}})])])],1)],1)],1)],1)},s=[],n=(i("a4d3"),i("4de4"),i("4160"),i("e439"),i("dbb4"),i("b64b"),i("159b"),i("96cf"),i("89ba")),a=i("2fa7"),o=i("2b0e"),c=i("123d"),l=i.n(c),d=i("2f62"),u=i("8055"),h=i.n(u),v=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-row",{attrs:{justify:"center"}},[i("v-dialog",{attrs:{width:"600px"},scopedSlots:t._u([{key:"activator",fn:function(e){var r=e.on;return[i("a",t._g({staticClass:"primary--text ma-3"},r),[i("span",{staticStyle:{"text-decoration":"underline"}},[t._v("ລາຍລະອຽດໃບສະເໜີລາຄາ")])])]}}]),model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[i("v-card",[i("v-card-title",[i("span",{staticClass:"headline"},[t._v("ລາຍລະອຽດໃບສະເໜີລາຄາ ")])]),i("v-card-text",[i("p",[i("b",[t._v("ວັນທີ່ ")]),t._v(t._s(t.$moment(t.order.quotation.createdAt).format("DD/MM/YY")))]),i("v-divider"),i("br"),i("p",[i("b",[t._v("orderID:")]),t._v(" "+t._s(t.order.quotation.orderId))]),i("v-layout",[i("v-flex",[i("p",[i("b",[t._v("ໃບສະເໜີລາຄາຂອງ")]),t._v(" "+t._s(t.currentOrder.freelancerId._id===t.order.freelancerId?t.currentOrder.freelancerId.username:t.currentOrder.employerId.username)+" ")])]),i("v-flex",[i("p",[i("b",[t._v("ຜູ້ວ່າຈ້າງ")]),t._v(" "+t._s(t.currentOrder.freelancerId._id===t.order.freelancerId?t.currentOrder.employerId.username:t.currentOrder.freelancerId.username)+" ")])])],1),i("v-card",[i("v-card-title",{staticClass:"primary white--text"},[t._v("ລາຍລະອຽດ")]),i("v-card-text",[i("br"),i("p",[t._v(t._s(t.currentOrder.portfolioId.title))]),i("p",[t._v(" - "+t._s(t.currentOrder.quotation.information))])]),i("v-divider"),i("v-card-actions",{staticClass:"white justify-end"},[i("span",{staticClass:"mx-2 my-2"},[i("b",[t._v("ລາຄາ: ")]),t._v(" "+t._s(Number(t.order.quotation.price.toFixed(1)).toLocaleString())+" "),i("b",[t._v("ກີບ ")])])])],1),i("br"),i("b",[t._v("ໃຊ້ເວລາເຮັດ:")]),i("p",[t._v(" "+t._s(t.order.quotation.dayWork)+" ມື້")]),i("b",[t._v("ສິ່ງທີ່ລູກຄ້າຈະໄດ້ຮັບ:")]),i("p",[t._v(t._s(t.order.quotation.receive))]),i("b",[t._v("ໝາຍເຫດ:")]),i("p",[t._v(t._s(t.order.quotation.optional))]),t.auth._id===t.order.employerId?i("div",[i("v-btn",{staticClass:"primary",attrs:{to:{name:"Payment",params:{id:t.order.quotation.orderId}},block:""}},[t._v(" ຊໍາລະເງິນ")]),i("small",[t._v("* ເມື່ອທ່ານຊໍາລະເງິນຜ່ານລະບົບແລ້ວ Freelance ຈະເລີ່ມເຮັດວຽກທັນທີ")])],1):i("div",[i("small",[t._v("* ລໍຖ້າຜູ້ວ່າຈ້າງຊໍາລະເງິນໃຫ້ລະບົບສໍາເລັດ ແລ້ວເລີ່ມເຮັດວຽກໄດ້ທັນທີ")])])],1)],1)],1)],1)},f=[],p={props:["auth","order","currentOrder"],data:function(){return{dialog:!1}}},m=p,g=i("2877"),b=i("6544"),y=i.n(b),_=i("8336"),w=i("b0af"),O=i("99d9"),x=i("169a"),C=i("ce7e"),j=i("0e8f"),k=i("a722"),I=i("0fd9"),$=Object(g["a"])(m,v,f,!1,null,null,null),S=$.exports;function A(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,r)}return i}function D(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?A(i,!0).forEach((function(e){Object(a["a"])(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):A(i).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}y()($,{VBtn:_["a"],VCard:w["a"],VCardActions:O["a"],VCardText:O["b"],VCardTitle:O["c"],VDialog:x["a"],VDivider:C["a"],VFlex:j["a"],VLayout:k["a"],VRow:I["a"]});var V=h()("http://localhost:1307");o["a"].use(l.a);var q={components:{appDetailQuotationModal:S},data:function(){return{base64:"",file:"",input:"",typing:!1,chat:{messages:[]},from:"",to:""}},computed:D({},Object(d["c"])(["auth","currentOrder"])),methods:D({},Object(d["b"])(["fetchCurrentOrder"]),{sendMessage:function(){var t=Object(n["a"])(regeneratorRuntime.mark((function t(){var e,i,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(t.prev=0,!(this.input.length<=20&&0!==this.input.length||this.file)){t.next=20;break}return this.auth._id===this.currentOrder.employerId._id&&(this.from=this.currentOrder.employerId._id,this.to=this.currentOrder.freelancerId._id),this.auth._id===this.currentOrder.freelancerId._id&&(this.from=this.currentOrder.freelancerId._id,this.to=this.currentOrder.employerId._id),e=new FormData,e.append("message",this.input),e.append("from",this.from),e.append("to",this.to),e.append("orderId",this.currentOrder._id),e.append("image",this.file),t.next=12,this.$axios.post("message/send",e);case 12:i=t.sent,r=i.data.messages,this.chat.messages.push(r),V.emit("message",r),this.input="",this.file="",this.base64="",this.typing=!1;case 20:t.next=25;break;case 22:throw t.prev=22,t.t0=t["catch"](0),new Error(t.t0);case 25:case"end":return t.stop()}}),t,this,[[0,22]])})));function e(){return t.apply(this,arguments)}return e}(),fetchMessage:function(){var t=Object(n["a"])(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$axios.get("message/user-message",{params:{orderId:this.$route.params.id}});case 2:e=t.sent,this.chat.messages=e.data.messages;case 4:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),imgUpload:function(t){var e=this,i=t.target.files[0],r=new FileReader;i["size"]<2e6?(r.onloadend=function(t){e.base64=t.target.result},r.readAsDataURL(i),this.file=i):this.$swal({title:"ຮູບພາບຂະໜາດໃຫຍ່ເກີນໄປ",toast:!0,type:"error",position:"top-end",showConfirmButton:!1,timer:2e3})}}),watch:{"$route.params":{handler:function(t){var e=t.id;this.fetchCurrentOrder(e),this.fetchMessage(e)},immediate:!0}},mounted:function(){var t=this;V.on("message",(function(e){var i=e.orderId;i._id===t.currentOrder._id&&t.chat.messages.push(e)})),V.on("update-message",(function(){return t.fetchMessage(t.currentOrder._id)}))}},B=q,M=(i("0d85"),i("cf2a"),i("4bd4")),E=i("132d"),P=i("adda"),T=i("8654"),F=Object(g["a"])(B,r,s,!1,null,"48784e55",null);e["default"]=F.exports;y()(F,{VCard:w["a"],VFlex:j["a"],VForm:M["a"],VIcon:E["a"],VImg:P["a"],VLayout:k["a"],VTextField:T["a"]})},"4f5f":function(t,e,i){},"99d9":function(t,e,i){"use strict";i.d(e,"c",(function(){return o})),i.d(e,"a",(function(){return n})),i.d(e,"b",(function(){return a}));var r=i("80d2"),s=i("b0af");const n=Object(r["g"])("v-card__actions"),a=Object(r["g"])("v-card__text"),o=Object(r["g"])("v-card__title");s["a"]},a722:function(t,e,i){"use strict";i("20f6");var r=i("e8f2");e["a"]=Object(r["a"])("layout")},cf2a:function(t,e,i){"use strict";var r=i("3aef"),s=i.n(r);s.a},e8f2:function(t,e,i){"use strict";i.d(e,"a",(function(){return s}));var r=i("2b0e");function s(t){return r["a"].extend({name:`v-${t}`,functional:!0,props:{id:String,tag:{type:String,default:"div"}},render(e,{props:i,data:r,children:s}){r.staticClass=`${t} ${r.staticClass||""}`.trim();const{attrs:n}=r;if(n){r.attrs={};const t=Object.keys(n).filter(t=>{if("slot"===t)return!1;const e=n[t];return t.startsWith("data-")?(r.attrs[t]=e,!1):e||"string"===typeof e});t.length&&(r.staticClass+=` ${t.join(" ")}`)}return i.id&&(r.domProps=r.domProps||{},r.domProps.id=i.id),e(i.tag,r,s)}})}}}]);
//# sourceMappingURL=chunk-341f80ea.b9349470.js.map