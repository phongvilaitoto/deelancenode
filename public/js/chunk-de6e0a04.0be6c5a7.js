(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-de6e0a04"],{"123d":function(e,t,r){(function(t,r){e.exports=r()})(0,(function(){"use strict";var e=function(e,t){"function"===typeof e.scroll?e.scroll({top:e.scrollHeight,behavior:t?"smooth":"instant"}):e.scrollTop=e.scrollHeight},t={bind:function(t,r){var a=!1;t.addEventListener("scroll",(function(e){a=t.scrollTop+t.clientHeight+1<t.scrollHeight})),new MutationObserver((function(s){var i=r.value||{},n=!1===i.always&&a,o=s[s.length-1].addedNodes.length,c=s[s.length-1].removedNodes.length;if(i.scrollonremoved){if(n||1!=o&&1!=c)return}else if(n||1!=o)return;var d=i.smooth,l=!o&&1===c;l&&i.scrollonremoved&&"smoothonremoved"in i&&(d=i.smoothonremoved),e(t,d)})).observe(t,{childList:!0,subtree:!0})},inserted:function(t,r){var a=r.value||{};e(t,a.smooth)}},r={install:function(e,r){e.directive("chat-scroll",t)}};return"undefined"!==typeof window&&window.Vue&&window.Vue.use(r),r}))},"46b1":function(e,t,r){},"4b23":function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("v-card",{staticClass:"pa-5",attrs:{outlined:"",tile:""}},[r("b",[e._v("orderID: "+e._s(e.currentOrder.quotation.orderId)+" ")])]),r("v-card",{directives:[{name:"chat-scroll",rawName:"v-chat-scroll"}],staticClass:"card pa-2",attrs:{outlined:"",tile:""}},[e._l(e.chat.messages,(function(t){return r("div",{key:t.index},[t.from!==e.auth._id?r("div",{staticClass:"msg-box receive"},[t.image?r("v-img",{attrs:{width:"200",src:t.image?e.$server+t.image:""}}):e._e(),r("div",{staticClass:"receive-msg"},[t.message?r("p",[e._v(e._s(t.message))]):e._e(),"quotation"===t.type?r("v-card",[r("div",{staticClass:"mx-5 my-5"},[r("b",[e._v(" ໃບສະເໜີລາຄາ ")]),r("br"),r("small",{staticClass:"mb-5"},[e._v(" "+e._s(e.currentOrder.portfolioId.title))]),r("br"),r("b",[e._v("ລາຄາ")]),r("span",{staticClass:"primary--text"},[e._v(" "+e._s(t.orderId.quotation.price.toLocaleString())+" ")]),r("b",[e._v("ກີບ")]),r("app-detail-quotation-modal",{attrs:{auth:e.auth,order:t.orderId,currentOrder:e.currentOrder}})],1)]):e._e()],1)],1):r("div",{staticClass:"msg-box send"},[t.image?r("v-img",{attrs:{width:"200",src:t.image?e.$server+t.image:""}}):e._e(),r("div",{staticClass:"send-msg"},[t.message?r("p",[e._v(e._s(t.message))]):e._e(),"quotation"===t.type?r("v-card",[r("div",{staticClass:"mx-5 my-5"},[r("b",[e._v(" ໃບສະເໜີລາຄາ ")]),r("br"),r("small",{staticClass:"mb-5"},[e._v(" "+e._s(e.currentOrder.portfolioId.title))]),r("br"),r("b",[e._v("ລາຄາ")]),r("span",{staticClass:"primary--text"},[e._v(" "+e._s(t.orderId.quotation.price.toLocaleString())+" ")]),r("b",[e._v("ກີບ")]),r("app-detail-quotation-modal",{attrs:{auth:e.auth,order:t.orderId,currentOrder:e.currentOrder}})],1)]):e._e()],1)],1)])})),e.typing?r("div",{staticClass:"msg-box receive"},[r("div",{staticClass:"receive-msg"},[r("p",[e._v("ກໍາລັງພິມ...")])])]):e._e(),e.base64?r("v-card",{attrs:{outlined:"",tile:""}},[r("v-img",{staticClass:"mx-2 my-2",staticStyle:{border:"1px solid white"},attrs:{width:"150",height:"150",src:e.base64}},[r("v-icon",{staticClass:"error--text mb-2",staticStyle:{cursor:"pointer"},attrs:{size:"30"},on:{click:function(t){e.base64="",e.file=""}}},[e._v(" mdi-cancel")])],1)],1):e._e()],2),r("v-card",{staticStyle:{height:"74px"},attrs:{outlined:"",tile:""}},[r("v-form",{on:{submit:function(t){return t.preventDefault(),e.sendMessage(t)}}},[r("v-layout",[r("v-flex",{attrs:{xs10:"",sm10:"",md10:"",lg10:""}},[r("v-text-field",{staticClass:"ml-4",attrs:{counter:"20"},model:{value:e.input,callback:function(t){e.input=t},expression:"input"}})],1),r("v-flex",{attrs:{"mt-5":""}},[r("a",{staticClass:"icon mx-2",on:{click:e.sendMessage}},[r("v-icon",{attrs:{size:"30"}},[e._v("mdi-send")])],1),r("a",{staticClass:"icon file-input"},[r("label",{attrs:{for:"file"}},[r("v-icon",{attrs:{size:"30"}},[e._v("mdi-link-variant ")])],1),r("input",{attrs:{type:"file",id:"file"},on:{change:e.imgUpload}})])])],1)],1)],1)],1)},s=[],i=(r("a4d3"),r("4de4"),r("4160"),r("e439"),r("dbb4"),r("b64b"),r("159b"),r("96cf"),r("89ba")),n=r("2fa7"),o=r("2b0e"),c=r("123d"),d=r.n(c),l=r("2f62"),u=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-row",{attrs:{justify:"center"}},[r("v-dialog",{attrs:{width:"600px"},scopedSlots:e._u([{key:"activator",fn:function(t){var a=t.on;return[r("a",e._g({staticClass:"primary--text ma-3"},a),[r("span",{staticStyle:{"text-decoration":"underline"}},[e._v("ລາຍລະອຽດໃບສະເໜີລາຄາ")])])]}}]),model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[r("v-card",[r("v-card-title",[r("span",{staticClass:"headline"},[e._v("ລາຍລະອຽດໃບສະເໜີລາຄາ ")])]),r("v-card-text",[r("p",[r("b",[e._v("ວັນທີ່ ")]),e._v(e._s(e.$moment(e.order.quotation.createdAt).format("DD/MM/YY")))]),r("v-divider"),r("br"),r("p",[r("b",[e._v("orderID:")]),e._v(" "+e._s(e.order.quotation.orderId))]),r("v-layout",[r("v-flex",[r("p",[r("b",[e._v("ໃບສະເໜີລາຄາຂອງ")]),e._v(" "+e._s(e.currentOrder.freelancerId._id===e.order.freelancerId?e.currentOrder.freelancerId.username:e.currentOrder.employerId.username)+" ")])]),r("v-flex",[r("p",[r("b",[e._v("ຜູ້ວ່າຈ້າງ")]),e._v(" "+e._s(e.currentOrder.freelancerId._id===e.order.freelancerId?e.currentOrder.employerId.username:e.currentOrder.freelancerId.username)+" ")])])],1),r("v-card",[r("v-card-title",{staticClass:"primary white--text"},[e._v("ລາຍລະອຽດ")]),r("v-card-text",[r("br"),r("p",[e._v(e._s(e.currentOrder.portfolioId.title))]),r("p",[e._v(" - "+e._s(e.currentOrder.quotation.information))])]),r("v-divider"),r("v-card-actions",{staticClass:"white justify-end"},[r("span",{staticClass:"mx-2 my-2"},[r("b",[e._v("ລາຄາ: ")]),e._v(" "+e._s(Number(e.order.quotation.price.toFixed(1)).toLocaleString())+" "),r("b",[e._v("ກີບ ")])])])],1),r("br"),r("b",[e._v("ໃຊ້ເວລາເຮັດ:")]),r("p",[e._v(" "+e._s(e.order.quotation.dayWork)+" ມື້")]),r("b",[e._v("ສິ່ງທີ່ລູກຄ້າຈະໄດ້ຮັບ:")]),r("p",[e._v(e._s(e.order.quotation.receive))]),r("b",[e._v("ໝາຍເຫດ:")]),r("p",[e._v(e._s(e.order.quotation.optional))]),e.auth._id===e.order.employerId?r("div",[r("v-btn",{staticClass:"primary",attrs:{to:{name:"Payment",params:{id:e.order.quotation.orderId}},block:""}},[e._v(" ຊໍາລະເງິນ")]),r("small",[e._v("* ເມື່ອທ່ານຊໍາລະເງິນຜ່ານລະບົບແລ້ວ Freelance ຈະເລີ່ມເຮັດວຽກທັນທີ")])],1):r("div",[r("small",[e._v("* ລໍຖ້າຜູ້ວ່າຈ້າງຊໍາລະເງິນໃຫ້ລະບົບສໍາເລັດ ແລ້ວເລີ່ມເຮັດວຽກໄດ້ທັນທີ")])])],1)],1)],1)],1)},v=[],p={props:["auth","order","currentOrder"],data:function(){return{dialog:!1}}},m=p,f=r("2877"),h=r("6544"),_=r.n(h),b=r("8336"),g=r("b0af"),y=r("99d9"),O=r("169a"),x=r("ce7e"),w=r("0e8f"),C=r("a722"),I=r("0fd9"),V=Object(f["a"])(m,u,v,!1,null,null,null),j=V.exports;function k(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function q(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?k(r,!0).forEach((function(t){Object(n["a"])(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):k(r).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}_()(V,{VBtn:b["a"],VCard:g["a"],VCardActions:y["a"],VCardText:y["b"],VCardTitle:y["c"],VDialog:O["a"],VDivider:x["a"],VFlex:w["a"],VLayout:C["a"],VRow:I["a"]}),o["a"].use(d.a);var D={components:{appDetailQuotationModal:j},data:function(){return{base64:"",file:"",input:"",typing:!1,chat:{messages:[]},from:"",to:""}},computed:q({},Object(l["c"])(["auth","currentOrder"])),methods:q({},Object(l["b"])(["fetchCurrentOrder"]),{sendMessage:function(){var e=Object(i["a"])(regeneratorRuntime.mark((function e(){var t,r,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(e.prev=0,!(this.input.length<=20&&0!==this.input.length||this.file)){e.next=20;break}return this.auth._id===this.currentOrder.employerId._id&&(this.from=this.currentOrder.employerId._id,this.to=this.currentOrder.freelancerId._id),this.auth._id===this.currentOrder.freelancerId._id&&(this.from=this.currentOrder.freelancerId._id,this.to=this.currentOrder.employerId._id),t=new FormData,t.append("message",this.input),t.append("from",this.from),t.append("to",this.to),t.append("orderId",this.currentOrder._id),t.append("image",this.file),e.next=12,this.$axios.post("message/send",t);case 12:r=e.sent,a=r.data.messages,this.chat.messages.push(a),this.$io.emit("message",a),this.input="",this.file="",this.base64="",this.typing=!1;case 20:e.next=25;break;case 22:throw e.prev=22,e.t0=e["catch"](0),new Error(e.t0);case 25:case"end":return e.stop()}}),e,this,[[0,22]])})));function t(){return e.apply(this,arguments)}return t}(),fetchMessage:function(){var e=Object(i["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.$axios.get("message/user-message",{params:{orderId:this.$route.params.id}});case 2:t=e.sent,this.chat.messages=t.data.messages;case 4:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),imgUpload:function(e){var t=this,r=e.target.files[0],a=new FileReader;r["size"]<2e6?(a.onloadend=function(e){t.base64=e.target.result},a.readAsDataURL(r),this.file=r):this.$swal({title:"ຮູບພາບຂະໜາດໃຫຍ່ເກີນໄປ",toast:!0,type:"error",position:"top-end",showConfirmButton:!1,timer:2e3})}}),watch:{"$route.params":{handler:function(e){var t=e.id;this.fetchCurrentOrder(t),this.fetchMessage(t)},immediate:!0}},mounted:function(){var e=this;this.$io.on("message",(function(t){var r=t.orderId;r._id===e.currentOrder._id&&e.chat.messages.push(t)})),this.$io.on("update-message",(function(){return e.fetchMessage(e.currentOrder._id)}))}},$=D,M=(r("d4f0"),r("893c"),r("4bd4")),S=r("132d"),P=r("adda"),F=r("8654"),L=Object(f["a"])($,a,s,!1,null,"0402216e",null);t["default"]=L.exports;_()(L,{VCard:g["a"],VFlex:w["a"],VForm:M["a"],VIcon:S["a"],VImg:P["a"],VLayout:C["a"],VTextField:F["a"]})},"6b1a":function(e,t,r){},"893c":function(e,t,r){"use strict";var a=r("46b1"),s=r.n(a);s.a},d4f0:function(e,t,r){"use strict";var a=r("6b1a"),s=r.n(a);s.a}}]);
//# sourceMappingURL=chunk-de6e0a04.0be6c5a7.js.map