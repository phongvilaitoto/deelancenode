(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-af2ca5bc"],{1052:function(t,e,s){},"123d":function(t,e,s){(function(e,s){t.exports=s()})(0,(function(){"use strict";var t=function(t,e){"function"===typeof t.scroll?t.scroll({top:t.scrollHeight,behavior:e?"smooth":"instant"}):t.scrollTop=t.scrollHeight},e={bind:function(e,s){var i=!1;e.addEventListener("scroll",(function(t){i=e.scrollTop+e.clientHeight+1<e.scrollHeight})),new MutationObserver((function(r){var a=s.value||{},n=!1===a.always&&i,o=r[r.length-1].addedNodes.length,c=r[r.length-1].removedNodes.length;if(a.scrollonremoved){if(n||1!=o&&1!=c)return}else if(n||1!=o)return;var l=a.smooth,d=!o&&1===c;d&&a.scrollonremoved&&"smoothonremoved"in a&&(l=a.smoothonremoved),t(e,l)})).observe(e,{childList:!0,subtree:!0})},inserted:function(e,s){var i=s.value||{};t(e,i.smooth)}},s={install:function(t,s){t.directive("chat-scroll",e)}};return"undefined"!==typeof window&&window.Vue&&window.Vue.use(s),s}))},"169a":function(t,e,s){"use strict";s("368e");var i=s("4ad4"),r=s("b848"),a=s("75eb"),n=s("e707"),o=s("e4d3"),c=s("21be"),l=s("f2e7"),d=s("a293"),u=s("80d2"),h=s("bfc5"),v=s("58df"),m=s("d9bd");const p=Object(v["a"])(i["a"],r["a"],a["a"],n["a"],o["a"],c["a"],l["a"]);e["a"]=p.extend({name:"v-dialog",directives:{ClickOutside:d["a"]},props:{dark:Boolean,disabled:Boolean,fullscreen:Boolean,light:Boolean,maxWidth:{type:[String,Number],default:"none"},noClickAnimation:Boolean,origin:{type:String,default:"center center"},persistent:Boolean,retainFocus:{type:Boolean,default:!0},scrollable:Boolean,transition:{type:[String,Boolean],default:"dialog-transition"},width:{type:[String,Number],default:"auto"}},data(){return{activatedBy:null,animate:!1,animateTimeout:-1,isActive:!!this.value,stackMinZIndex:200}},computed:{classes(){return{[`v-dialog ${this.contentClass}`.trim()]:!0,"v-dialog--active":this.isActive,"v-dialog--persistent":this.persistent,"v-dialog--fullscreen":this.fullscreen,"v-dialog--scrollable":this.scrollable,"v-dialog--animated":this.animate}},contentClasses(){return{"v-dialog__content":!0,"v-dialog__content--active":this.isActive}},hasActivator(){return Boolean(!!this.$slots.activator||!!this.$scopedSlots.activator)}},watch:{isActive(t){t?(this.show(),this.hideScroll()):(this.removeOverlay(),this.unbind())},fullscreen(t){this.isActive&&(t?(this.hideScroll(),this.removeOverlay(!1)):(this.showScroll(),this.genOverlay()))}},created(){this.$attrs.hasOwnProperty("full-width")&&Object(m["d"])("full-width",this)},beforeMount(){this.$nextTick(()=>{this.isBooted=this.isActive,this.isActive&&this.show()})},beforeDestroy(){"undefined"!==typeof window&&this.unbind()},methods:{animateClick(){this.animate=!1,this.$nextTick(()=>{this.animate=!0,window.clearTimeout(this.animateTimeout),this.animateTimeout=window.setTimeout(()=>this.animate=!1,150)})},closeConditional(t){const e=t.target;return!(this._isDestroyed||!this.isActive||this.$refs.content.contains(e)||this.overlay&&e&&!this.overlay.$el.contains(e))&&(this.$emit("click:outside"),this.persistent?(!this.noClickAnimation&&this.animateClick(),!1):this.activeZIndex>=this.getMaxZIndex())},hideScroll(){this.fullscreen?document.documentElement.classList.add("overflow-y-hidden"):n["a"].options.methods.hideScroll.call(this)},show(){!this.fullscreen&&!this.hideOverlay&&this.genOverlay(),this.$nextTick(()=>{this.$refs.content.focus(),this.bind()})},bind(){window.addEventListener("focusin",this.onFocusin)},unbind(){window.removeEventListener("focusin",this.onFocusin)},onKeydown(t){if(t.keyCode===u["t"].esc&&!this.getOpenDependents().length)if(this.persistent)this.noClickAnimation||this.animateClick();else{this.isActive=!1;const t=this.getActivator();this.$nextTick(()=>t&&t.focus())}this.$emit("keydown",t)},onFocusin(t){if(!t||!this.retainFocus)return;const e=t.target;if(e&&![document,this.$refs.content].includes(e)&&!this.$refs.content.contains(e)&&this.activeZIndex>=this.getMaxZIndex()&&!this.getOpenDependentElements().some(t=>t.contains(e))){const t=this.$refs.content.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');t.length&&t[0].focus()}}},render(t){const e=[],s={class:this.classes,ref:"dialog",directives:[{name:"click-outside",value:()=>{this.isActive=!1},args:{closeConditional:this.closeConditional,include:this.getOpenDependentElements}},{name:"show",value:this.isActive}],on:{click:t=>{t.stopPropagation()}},style:{}};this.fullscreen||(s.style={maxWidth:"none"===this.maxWidth?void 0:Object(u["f"])(this.maxWidth),width:"auto"===this.width?void 0:Object(u["f"])(this.width)}),e.push(this.genActivator());let i=t("div",s,this.showLazyContent(this.getContentSlot()));return this.transition&&(i=t("transition",{props:{name:this.transition,origin:this.origin}},[i])),e.push(t("div",{class:this.contentClasses,attrs:{role:"document",tabindex:this.isActive?0:void 0,...this.getScopeIdAttrs()},on:{keydown:this.onKeydown},style:{zIndex:this.activeZIndex},ref:"content"},[this.$createElement(h["a"],{props:{root:!0,light:this.light,dark:this.dark}},[i])])),t("div",{staticClass:"v-dialog__container",class:{"v-dialog__container--attached":""===this.attach||!0===this.attach||"attach"===this.attach},attrs:{role:"dialog"}},e)}})},"368e":function(t,e,s){},"4b23":function(t,e,s){"use strict";s.r(e);var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"container-fixed",style:t.$vuetify.breakpoint.smAndDown?"height: calc(100vh - 110px)":""},[s("v-card",{staticClass:"pa-5",attrs:{outlined:"",tile:"",align:"left"}},[s("b",[t._v("OrderID: "+t._s(t.currentOrder.quotation.orderId))])]),t.loading?s("v-card",{staticClass:"body-fixed"},[s("app-message-loading")],1):s("v-card",{directives:[{name:"chat-scroll",rawName:"v-chat-scroll",value:{always:!1},expression:"{ always: false }"}],staticClass:"body-fixed pa-2",attrs:{outlined:"",tile:""}},t._l(t.chat.messages,(function(e,i){return s("div",{key:i},[e.from!==t.auth._id?s("div",{staticClass:"msg-box receive"},[s("div",{staticClass:"receive-msg"},[s("v-avatar",{attrs:{height:"48"}},[s("v-img",{attrs:{src:t.auth._id===t.currentOrder.freelancerId._id?t.$server+t.currentOrder.employerId.image:t.$server+t.currentOrder.freelancerId.image}})],1),e.image?s("p",[s("v-img",{attrs:{contain:"","max-width":"200",src:t.$server+e.image,"lazy-src":t.$server+e.image},scopedSlots:t._u([{key:"placeholder",fn:function(){return[s("v-row",{staticClass:"fill-height",attrs:{align:"center",justify:"center"}},[s("v-progress-circular",{attrs:{size:"60",indeterminate:"",color:"primary"}})],1)]},proxy:!0}],null,!0)}),s("v-spacer"),s("span",[t._v(t._s(e.message))])],1):e.message?s("p",[t._v(t._s(e.message))]):t._e(),"quotation"===e.type?s("p",[s("v-card",{staticClass:"pa-2"},[s("div",{staticClass:"mx-5 my-5"},[s("b",[t._v(" ໃບສະເໜີລາຄາ ")]),s("br"),s("small",{staticClass:"mb-5"},[t._v(" "+t._s(t.currentOrder.portfolioId.title))]),s("br"),s("b",[t._v("ລາຄາ")]),s("span",{staticClass:"primary--text"},[t._v(" "+t._s(e.orderId.quotation.price.toLocaleString())+" ")]),s("b",[t._v("ກີບ")]),s("app-detail-quotation-modal",{attrs:{auth:t.auth,order:e.orderId,currentOrder:t.currentOrder}})],1)])],1):t._e()],1)]):s("div",{staticClass:"msg-box send"},[s("div",{staticClass:"send-msg"},[e.image?s("p",[s("v-img",{attrs:{contain:"","max-width":"200",src:t.$server+e.image,"lazy-src":t.$server+e.image},on:{click:function(e){t.index=i}},scopedSlots:t._u([{key:"placeholder",fn:function(){return[s("v-row",{staticClass:"fill-height",attrs:{align:"center",justify:"center"}},[s("v-progress-circular",{attrs:{size:"60",indeterminate:"",color:"primary"}})],1)]},proxy:!0}],null,!0)}),s("span",[t._v(t._s(e.message))])],1):e.message?s("p",[t._v(t._s(e.message))]):t._e(),"quotation"===e.type?s("p",[s("v-card",{staticClass:"pa-2"},[s("div",{staticClass:"mx-5 my-5"},[s("b",[t._v(" ໃບສະເໜີລາຄາ ")]),s("br"),s("small",{staticClass:"mb-5"},[t._v(" "+t._s(t.currentOrder.portfolioId.title))]),s("br"),s("b",[t._v("ລາຄາ")]),s("span",{staticClass:"primary--text"},[t._v(" "+t._s(e.orderId.quotation.price.toLocaleString())+" ")]),s("b",[t._v("ກີບ")]),s("app-detail-quotation-modal",{attrs:{auth:t.auth,order:e.orderId,currentOrder:t.currentOrder}})],1)])],1):t._e()]),s("v-spacer")],1)])})),0),t.base64?s("v-card",{attrs:{outlined:"",tile:""}},[s("div",{staticClass:"text-left"},[s("v-img",{staticClass:"ma-1",staticStyle:{border:"1px solid white"},attrs:{contain:"","max-width":"100","max-height":"100",src:t.base64}},[s("v-icon",{staticClass:"error--text mb-2",staticStyle:{cursor:"pointer"},attrs:{size:"30"},on:{click:function(e){t.base64="",t.file=""}}},[t._v(" mdi-cancel")])],1)],1)]):t._e(),s("v-card",{attrs:{outlined:"",tile:""}},[s("v-card-actions",[s("v-row",{attrs:{"no-gutters":""}},[s("v-col",{staticClass:"text-right",attrs:{cols:"1",xs:"2",sm:"2",md:"1",lg:"1"}},[s("div",{staticClass:"mt-1 mr-12"},[s("a",{staticClass:"icon file-input",on:{click:t.sendMessage}},[s("label",{attrs:{for:"file"}},[s("v-icon",{attrs:{size:"42"}},[t._v("mdi-camera")])],1),s("input",{attrs:{type:"file",id:"file"},on:{change:t.imgUpload}})])])]),s("v-col",{staticClass:"text-center",attrs:{cols:"10",xs:"8",sm:"8",md:"10",lg:"10"}},[s("v-form",{on:{submit:function(e){return e.preventDefault(),t.sendMessage(e)}}},[s("v-text-field",{class:t.$vuetify.breakpoint.smAndDown?"ml-4 mr-1":"",attrs:{rounded:"","hide-details":"",solo:"",placeholder:"ພິມຂໍ້ຄວາມ..."},model:{value:t.input,callback:function(e){t.input=e},expression:"input"}})],1)],1),s("v-col",{staticClass:"text-left",attrs:{cols:"1",xs:"2",sm:"2",md:"1",lg:"1"}},[s("div",{staticClass:"mt-1",class:t.$vuetify.breakpoint.smAndDown?"":"ml-2"},[s("a",{staticClass:"icon",on:{click:t.sendMessage}},[s("v-icon",{attrs:{size:"39"}},[t._v("mdi-send")])],1)]),s("a",{staticClass:"icon file-input"})])],1)],1)],1),s("v-overlay",{attrs:{value:t.overlay}},[s("v-progress-circular",{attrs:{color:"primary",indeterminate:"",size:"70"}})],1)],1)},r=[],a=(s("a4d3"),s("4de4"),s("4160"),s("e439"),s("dbb4"),s("b64b"),s("159b"),s("96cf"),s("89ba")),n=s("2fa7"),o=s("2b0e"),c=s("123d"),l=s.n(c),d=s("2f62"),u=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-row",{attrs:{justify:"center"}},[s("v-dialog",{attrs:{width:"600px"},scopedSlots:t._u([{key:"activator",fn:function(e){var i=e.on;return[s("a",t._g({staticClass:"primary--text ma-3"},i),[s("span",{staticStyle:{"text-decoration":"underline"}},[t._v("ລາຍລະອຽດໃບສະເໜີລາຄາ")])])]}}]),model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[s("v-card",[s("v-card-title",[s("span",{staticClass:"headline"},[t._v("ລາຍລະອຽດໃບສະເໜີລາຄາ ")])]),s("v-card-text",[s("p",[s("b",[t._v("ວັນທີ່ ")]),t._v(t._s(t.$moment(t.order.quotation.createdAt).format("DD/MM/YY")))]),s("v-divider"),s("br"),s("p",[s("b",[t._v("orderID:")]),t._v(" "+t._s(t.order.quotation.orderId))]),s("v-layout",[s("v-flex",[s("p",[s("b",[t._v("ໃບສະເໜີລາຄາຂອງ")]),t._v(" "+t._s(t.currentOrder.freelancerId._id===t.order.freelancerId?t.currentOrder.freelancerId.username:t.currentOrder.employerId.username)+" ")])]),s("v-flex",[s("p",[s("b",[t._v("ຜູ້ວ່າຈ້າງ")]),t._v(" "+t._s(t.currentOrder.freelancerId._id===t.order.freelancerId?t.currentOrder.employerId.username:t.currentOrder.freelancerId.username)+" ")])])],1),s("v-card",[s("v-card-title",{staticClass:"primary white--text"},[t._v("ລາຍລະອຽດ")]),s("v-card-text",[s("br"),s("p",[t._v(t._s(t.currentOrder.portfolioId.title))]),s("p",[t._v(" - "+t._s(t.currentOrder.quotation.information))])]),s("v-divider"),s("v-card-actions",{staticClass:"white justify-end"},[s("span",{staticClass:"mx-2 my-2"},[s("b",[t._v("ລາຄາ: ")]),t._v(" "+t._s(Number(t.order.quotation.price.toFixed(1)).toLocaleString())+" "),s("b",[t._v("ກີບ ")])])])],1),s("br"),s("b",[t._v("ໃຊ້ເວລາເຮັດ:")]),s("p",[t._v(" "+t._s(t.order.quotation.dayWork)+" ມື້")]),s("b",[t._v("ສິ່ງທີ່ລູກຄ້າຈະໄດ້ຮັບ:")]),s("p",[t._v(t._s(t.order.quotation.receive))]),s("b",[t._v("ໝາຍເຫດ:")]),s("p",[t._v(t._s(t.order.quotation.optional))]),t.auth._id===t.order.employerId?s("div",[s("v-btn",{staticClass:"primary",attrs:{to:{name:"Payment",params:{id:t.order.quotation.orderId}},block:""}},[t._v(" ຊໍາລະເງິນ")]),s("small",[t._v("* ເມື່ອທ່ານຊໍາລະເງິນຜ່ານລະບົບແລ້ວ Freelance ຈະເລີ່ມເຮັດວຽກທັນທີ")])],1):s("div",[s("small",[t._v("* ລໍຖ້າຜູ້ວ່າຈ້າງຊໍາລະເງິນໃຫ້ລະບົບສໍາເລັດ ແລ້ວເລີ່ມເຮັດວຽກໄດ້ທັນທີ")])])],1)],1)],1)],1)},h=[],v={props:["auth","order","currentOrder"],data:function(){return{dialog:!1}}},m=v,p=s("2877"),f=s("6544"),g=s.n(f),b=s("8336"),_=s("b0af"),y=s("99d9"),w=s("169a"),x=s("ce7e"),O=s("0e8f"),C=s("a722"),k=s("0fd9"),I=Object(p["a"])(m,u,h,!1,null,null,null),$=I.exports;g()(I,{VBtn:b["a"],VCard:_["a"],VCardActions:y["a"],VCardText:y["b"],VCardTitle:y["c"],VDialog:w["a"],VDivider:x["a"],VFlex:O["a"],VLayout:C["a"],VRow:k["a"]});var A=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",t._l(6,(function(t){return s("v-row",{key:t.index,staticClass:"mx-auto ma-5"},[s("v-col",{attrs:{cols:"5"}},[s("v-sheet",{staticClass:"ml-5"},[s("v-skeleton-loader",{attrs:{t:t,type:"sentences"}})],1)],1),s("v-col",{attrs:{cols:"2"}}),s("v-col",{attrs:{cols:"5"}},[s("v-sheet",{staticClass:"mr-5"},[s("v-skeleton-loader",{staticClass:"mt-12",attrs:{type:"sentences"}})],1)],1)],1)})),1)},V=[],S=s("62ad"),j=s("8dd9"),D=s("3129"),q={},M=Object(p["a"])(q,A,V,!1,null,null,null),T=M.exports;function B(t,e){var s=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),s.push.apply(s,i)}return s}function E(t){for(var e=1;e<arguments.length;e++){var s=null!=arguments[e]?arguments[e]:{};e%2?B(s,!0).forEach((function(e){Object(n["a"])(t,e,s[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(s)):B(s).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(s,e))}))}return t}g()(M,{VCol:S["a"],VRow:k["a"],VSheet:j["a"],VSkeletonLoader:D["a"]}),o["a"].use(l.a);var L={components:{appDetailQuotationModal:$,appMessageLoading:T},data:function(){return{base64:"",file:"",input:"",typing:!1,chat:{messages:[]},from:"",to:"",index:null,loading:!1,overlay:!1}},computed:E({},Object(d["c"])(["auth","currentOrder"])),methods:E({},Object(d["b"])(["fetchCurrentOrder"]),{sendMessage:function(){var t=Object(a["a"])(regeneratorRuntime.mark((function t(){var e,s,i;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(t.prev=0,!(this.input.length<=200&&0!==this.input.length||this.file)){t.next=23;break}return this.auth._id===this.currentOrder.employerId._id&&(this.from=this.currentOrder.employerId._id,this.to=this.currentOrder.freelancerId._id),this.auth._id===this.currentOrder.freelancerId._id&&(this.from=this.currentOrder.freelancerId._id,this.to=this.currentOrder.employerId._id),this.file&&(this.overlay=!0),this.chat.messages.push({message:this.input,from:this.from,to:this.to,orderId:this.currentOrder._id}),e=new FormData,e.append("message",this.input),e.append("from",this.from),e.append("to",this.to),e.append("orderId",this.currentOrder._id),e.append("image",this.file),this.input="",this.base64="",this.typing=!1,t.next=17,this.$axios.post("message/send",e);case 17:s=t.sent,i=s.data.messages,this.overlay=!1,this.file&&this.chat.messages.push(i),this.file="",this.$io.emit("message",i);case 23:t.next=28;break;case 25:throw t.prev=25,t.t0=t["catch"](0),new Error(t.t0);case 28:case"end":return t.stop()}}),t,this,[[0,25]])})));function e(){return t.apply(this,arguments)}return e}(),fetchMessage:function(){var t=Object(a["a"])(regeneratorRuntime.mark((function t(){var e,s=this;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return this.loading=!0,t.next=3,this.$axios.get("message/user-message",{params:{orderId:this.$route.params.id}});case 3:e=t.sent,this.chat.messages=e.data.messages,setTimeout((function(){s.loading=!1}),200);case 6:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),imgUpload:function(t){var e=this,s=t.target.files[0],i=new FileReader;s["size"]<2e6?(i.onloadend=function(t){e.base64=t.target.result},i.readAsDataURL(s),this.file=s):this.$swal({title:"ຮູບພາບຂະໜາດໃຫຍ່ເກີນໄປ",toast:!0,type:"error",position:"top-end",showConfirmButton:!1,timer:2e3})}}),watch:{"$route.params":{handler:function(t){var e=t.id;this.fetchCurrentOrder(e),this.fetchMessage(e)},immediate:!0}},mounted:function(){var t=this;this.$io.on("message",(function(e){var s=e.orderId;s._id===t.currentOrder._id&&t.chat.messages.push(e)})),this.$io.on("update-message",(function(){return t.fetchMessage(t.currentOrder._id)}))}},F=L,P=(s("ca1d"),s("7f74"),s("8212")),z=s("4bd4"),R=s("132d"),N=s("adda"),Z=s("a797"),W=s("490a"),H=s("2fa4"),U=s("8654"),J=Object(p["a"])(F,i,r,!1,null,"ce0ddd56",null);e["default"]=J.exports;g()(J,{VAvatar:P["a"],VCard:_["a"],VCardActions:y["a"],VCol:S["a"],VForm:z["a"],VIcon:R["a"],VImg:N["a"],VOverlay:Z["a"],VProgressCircular:W["a"],VRow:k["a"],VSpacer:H["a"],VTextField:U["a"]})},"4f58":function(t,e,s){},"7f74":function(t,e,s){"use strict";var i=s("4f58"),r=s.n(i);r.a},ca1d:function(t,e,s){"use strict";var i=s("1052"),r=s.n(i);r.a}}]);
//# sourceMappingURL=chunk-af2ca5bc.fa824768.js.map