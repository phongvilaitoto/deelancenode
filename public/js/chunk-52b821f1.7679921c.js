(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-52b821f1"],{"297c":function(t,e,s){"use strict";var r=s("2b0e"),a=(s("6ece"),s("0789")),i=s("a9ad"),n=s("fe6c"),o=s("a452"),c=s("7560"),l=s("80d2"),d=s("58df");const u=Object(d["a"])(i["a"],Object(n["b"])(["absolute","fixed","top","bottom"]),o["a"],c["a"]);var h=u.extend({name:"v-progress-linear",props:{active:{type:Boolean,default:!0},backgroundColor:{type:String,default:null},backgroundOpacity:{type:[Number,String],default:null},bufferValue:{type:[Number,String],default:100},color:{type:String,default:"primary"},height:{type:[Number,String],default:4},indeterminate:Boolean,query:Boolean,rounded:Boolean,stream:Boolean,striped:Boolean,value:{type:[Number,String],default:0}},data(){return{internalLazyValue:this.value||0}},computed:{__cachedBackground(){return this.$createElement("div",this.setBackgroundColor(this.backgroundColor||this.color,{staticClass:"v-progress-linear__background",style:this.backgroundStyle}))},__cachedBar(){return this.$createElement(this.computedTransition,[this.__cachedBarType])},__cachedBarType(){return this.indeterminate?this.__cachedIndeterminate:this.__cachedDeterminate},__cachedBuffer(){return this.$createElement("div",{staticClass:"v-progress-linear__buffer",style:this.styles})},__cachedDeterminate(){return this.$createElement("div",this.setBackgroundColor(this.color,{staticClass:"v-progress-linear__determinate",style:{width:Object(l["e"])(this.normalizedValue,"%")}}))},__cachedIndeterminate(){return this.$createElement("div",{staticClass:"v-progress-linear__indeterminate",class:{"v-progress-linear__indeterminate--active":this.active}},[this.genProgressBar("long"),this.genProgressBar("short")])},__cachedStream(){return this.stream?this.$createElement("div",this.setTextColor(this.color,{staticClass:"v-progress-linear__stream",style:{width:Object(l["e"])(100-this.normalizedBuffer,"%")}})):null},backgroundStyle(){const t=null==this.backgroundOpacity?this.backgroundColor?1:.3:parseFloat(this.backgroundOpacity);return{opacity:t,left:Object(l["e"])(this.normalizedValue,"%"),width:Object(l["e"])(this.normalizedBuffer-this.normalizedValue,"%")}},classes(){return{"v-progress-linear--absolute":this.absolute,"v-progress-linear--fixed":this.fixed,"v-progress-linear--query":this.query,"v-progress-linear--reactive":this.reactive,"v-progress-linear--rounded":this.rounded,"v-progress-linear--striped":this.striped,...this.themeClasses}},computedTransition(){return this.indeterminate?a["c"]:a["d"]},normalizedBuffer(){return this.normalize(this.bufferValue)},normalizedValue(){return this.normalize(this.internalLazyValue)},reactive(){return Boolean(this.$listeners.change)},styles(){const t={};return this.active||(t.height=0),this.indeterminate||100===parseFloat(this.normalizedBuffer)||(t.width=Object(l["e"])(this.normalizedBuffer,"%")),t}},methods:{genContent(){const t=Object(l["n"])(this,"default",{value:this.internalLazyValue});return t?this.$createElement("div",{staticClass:"v-progress-linear__content"},t):null},genListeners(){const t=this.$listeners;return this.reactive&&(t.click=this.onClick),t},genProgressBar(t){return this.$createElement("div",this.setBackgroundColor(this.color,{staticClass:"v-progress-linear__indeterminate",class:{[t]:!0}}))},onClick(t){if(!this.reactive)return;const{width:e}=this.$el.getBoundingClientRect();this.internalValue=t.offsetX/e*100},normalize(t){return t<0?0:t>100?100:parseFloat(t)}},render(t){const e={staticClass:"v-progress-linear",attrs:{role:"progressbar","aria-valuemin":0,"aria-valuemax":this.normalizedBuffer,"aria-valuenow":this.indeterminate?void 0:this.normalizedValue},class:this.classes,style:{bottom:this.bottom?0:void 0,height:this.active?Object(l["e"])(this.height):0,top:this.top?0:void 0},on:this.genListeners()};return t("div",e,[this.__cachedStream,this.__cachedBackground,this.__cachedBuffer,this.__cachedBar,this.genContent()])}}),g=h;e["a"]=r["a"].extend().extend({name:"loadable",props:{loading:{type:[Boolean,String],default:!1},loaderHeight:{type:[Number,String],default:2}},methods:{genProgress(){return!1===this.loading?null:this.$slots.progress||this.$createElement(g,{props:{absolute:!0,color:!0===this.loading||""===this.loading?this.color||"primary":this.loading,height:this.loaderHeight,indeterminate:!0}})}}})},"3c83":function(t,e,s){"use strict";var r=s("d907"),a=s.n(r);a.a},"615b":function(t,e,s){},"6ece":function(t,e,s){},"771c":function(t,e,s){"use strict";s.r(e);var r=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("v-toolbar",{attrs:{tile:""}},[s("v-btn",{staticClass:"font-weight-bold",attrs:{large:"",text:""},on:{click:t.taskOrderFunc}},[s("span",{class:t.taskOrder?"active":""},[t._v("ລໍຖ້າຈ່າຍເງິນ")])]),s("v-divider",{attrs:{vertical:""}}),s("v-btn",{staticClass:"font-weight-bold",attrs:{large:"",text:""},on:{click:t.taskWorkingFunc}},[s("span",{class:t.taskWorking?"active":""},[t._v("ກໍາລັງເຮັດ")])]),s("v-divider",{attrs:{vertical:""}}),s("v-btn",{staticClass:"font-weight-bold",attrs:{large:"",text:""},on:{click:t.taskPendingFunc}},[s("span",{class:t.taskPending?"active":""},[t._v("ລໍຖ້າອະນຸມັດ")])]),s("v-divider",{attrs:{vertical:""}}),s("v-btn",{staticClass:"font-weight-bold",attrs:{large:"",text:""},on:{click:t.taskSuccessfulFunc}},[s("span",{class:t.taskSuccessful?"active":""},[t._v("ສໍາເລັດ")])]),s("v-divider",{attrs:{vertical:""}}),s("v-btn",{staticClass:"font-weight-bold",attrs:{large:"",text:""},on:{click:t.taskUnsuccessfulFunc}},[s("span",{class:t.taskUnsuccessful?"active":""},[t._v("ບໍ່ສໍາເລັດ")])])],1),s("app-task-order",{attrs:{orders:t.ordersFilter,current:t.taskOrder?"ລໍຖ້າຈ່າຍເງິນ":t.taskWorking?"ກໍາລັງເຮັດ":t.taskPending?"ລໍຖ້າອະນຸມັດ":t.taskSuccessful?"ສໍາເລັດ":"ບໍ່ສໍາເລັດ"}})],1)},a=[],i=(s("a4d3"),s("4de4"),s("4160"),s("e439"),s("dbb4"),s("b64b"),s("159b"),s("96cf"),s("89ba")),n=s("2fa7"),o=s("2f62"),c=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("v-card",{staticClass:"mx-5 my-1"},[s("v-card-title",{},[s("h3",[t._v(" "+t._s(t.current)+" ")])]),s("v-card-text",[s("v-simple-table",{attrs:{height:"300px"},scopedSlots:t._u([{key:"default",fn:function(){return[s("thead",[s("tr",[s("th",[t._v("OrderID")]),s("th",[t._v("Employer")]),s("th",[t._v("ສ້າງເມື່ອ")]),s("th",[t._v("ລາຄາ")]),s("th",[t._v("ລາຍລະອຽດ")]),s("th",[t._v("ມື້ເຮັດວຽກ")]),s("th",[t._v("ຊໍາລະເງິນ")]),s("th",[t._v("Action")])])]),t._l(t.orders,(function(e){return s("tbody",{key:e.index},[s("tr",[s("td",[t._v(t._s(e.quotation.orderId))]),s("td",[t._v(t._s(e.employerId.username))]),s("td",[t._v(t._s(t.$moment(e.createdAt).format("DD/MM/YY")))]),s("td",[t._v(t._s(e.quotation.price)+" ກີບ")]),s("td",[t._v(t._s(e.quotation.information))]),s("td",[t._v(t._s(e.quotation.dayWork))]),s("td",{class:!0===e.quotation.paymentStatus?"success--text":"error--text"},[t._v(" "+t._s(!0===e.quotation.paymentStatus?"ຊໍາລະເງິນແລ້ວ":"ບໍ່ທັນຊໍາລະເງິນ"))]),s("td",[s("v-btn",{staticClass:"primary",attrs:{to:{name:"MessageFocus",params:{id:e._id}}}},[t._v("ສົ່ງຂໍ້ຄວາມ")])],1)])])}))]},proxy:!0}])})],1)],1)],1)},l=[],d={props:["orders","current"]},u=d,h=s("2877"),g=s("6544"),f=s.n(g),v=s("8336"),p=s("b0af"),m=s("99d9"),b=(s("8b37"),s("80d2")),k=s("7560"),_=s("58df"),y=Object(_["a"])(k["a"]).extend({name:"v-simple-table",props:{dense:Boolean,fixedHeader:Boolean,height:[Number,String]},computed:{classes(){return{"v-data-table--dense":this.dense,"v-data-table--fixed-height":!!this.height&&!this.fixedHeader,"v-data-table--fixed-header":this.fixedHeader,...this.themeClasses}}},methods:{genWrapper(){return this.$slots.wrapper||this.$createElement("div",{staticClass:"v-data-table__wrapper",style:{height:Object(b["e"])(this.height)}},[this.$createElement("table",this.$slots.default)])}},render(t){return t("div",{staticClass:"v-data-table",class:this.classes},[this.$slots.top,this.genWrapper(),this.$slots.bottom])}}),O=Object(h["a"])(u,c,l,!1,null,"5f4ac14d",null),B=O.exports;function C(t,e){var s=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),s.push.apply(s,r)}return s}function S(t){for(var e=1;e<arguments.length;e++){var s=null!=arguments[e]?arguments[e]:{};e%2?C(s,!0).forEach((function(e){Object(n["a"])(t,e,s[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(s)):C(s).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(s,e))}))}return t}f()(O,{VBtn:v["a"],VCard:p["a"],VCardText:m["b"],VCardTitle:m["c"],VSimpleTable:y});var x={components:{appTaskOrder:B},data:function(){return{orders:[],taskOrder:!0,taskWorking:!1,taskPending:!1,taskSuccessful:!1,taskUnsuccessful:!1}},computed:S({},Object(o["c"])(["auth"]),{ordersFilter:function(){var t=this;return this.orders.filter((function(e){return t.taskOrder?"wait for payment"===e.quotation.workStatus:t.taskWorking?"in progress"===e.quotation.workStatus:t.taskPending?"pending"===e.quotation.workStatus:t.taskSuccessful?"successful"===e.quotation.workStatus:t.taskUnsuccessful?"unsuccessful"===e.quotation.workStatus:void 0}))}}),methods:{fetchOrders:function(){var t=Object(i["a"])(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$axios.get("order/orders",{params:{authId:this.auth._id}});case 2:e=t.sent,this.orders=e.data.orders;case 4:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),taskOrderFunc:function(){this.taskOrder=!0,this.taskWorking=!1,this.taskPending=!1,this.taskSuccessful=!1,this.taskUnsuccessful=!1},taskWorkingFunc:function(){this.taskWorking=!0,this.taskOrder=!1,this.taskPending=!1,this.taskSuccessful=!1,this.taskUnsuccessful=!1},taskPendingFunc:function(){this.taskPending=!0,this.taskOrder=!1,this.taskWorking=!1,this.taskSuccessful=!1,this.taskUnsuccessful=!1},taskSuccessfulFunc:function(){this.taskSuccessful=!0,this.taskOrder=!1,this.taskWorking=!1,this.taskPending=!1,this.taskUnsuccessful=!1},taskUnsuccessfulFunc:function(){this.taskUnsuccessful=!0,this.taskSuccessful=!1,this.taskOrder=!1,this.taskWorking=!1,this.taskPending=!1}},created:function(){this.fetchOrders()}},w=x,j=(s("3c83"),s("ce7e")),P=s("71d9"),$=Object(h["a"])(w,r,a,!1,null,"b70ddd74",null);e["default"]=$.exports;f()($,{VBtn:v["a"],VDivider:j["a"],VToolbar:P["a"]})},"8b37":function(t,e,s){},"99d9":function(t,e,s){"use strict";s.d(e,"c",(function(){return o})),s.d(e,"a",(function(){return i})),s.d(e,"b",(function(){return n}));var r=s("80d2"),a=s("b0af");const i=Object(r["g"])("v-card__actions"),n=Object(r["g"])("v-card__text"),o=Object(r["g"])("v-card__title");a["a"]},b0af:function(t,e,s){"use strict";s("615b");var r=s("10d2"),a=s("297c"),i=s("1c87"),n=s("58df");e["a"]=Object(n["a"])(a["a"],i["a"],r["a"]).extend({name:"v-card",props:{flat:Boolean,hover:Boolean,img:String,link:Boolean,loaderHeight:{type:[Number,String],default:4},outlined:Boolean,raised:Boolean},computed:{classes(){return{"v-card":!0,...i["a"].options.computed.classes.call(this),"v-card--flat":this.flat,"v-card--hover":this.hover,"v-card--link":this.isClickable,"v-card--loading":this.loading,"v-card--disabled":this.loading||this.disabled,"v-card--outlined":this.outlined,"v-card--raised":this.raised,...r["a"].options.computed.classes.call(this)}},styles(){const t={...r["a"].options.computed.styles.call(this)};return this.img&&(t.background=`url("${this.img}") center center / cover no-repeat`),t}},methods:{genProgress(){const t=a["a"].options.methods.genProgress.call(this);return t?this.$createElement("div",{staticClass:"v-card__progress"},[t]):null}},render(t){const{tag:e,data:s}=this.generateRouteLink();return s.style=this.styles,this.isClickable&&(s.attrs=s.attrs||{},s.attrs.tabindex=0),t(e,this.setBackgroundColor(this.color,s),[this.genProgress(),this.$slots.default])}})},d907:function(t,e,s){}}]);
//# sourceMappingURL=chunk-52b821f1.7679921c.js.map