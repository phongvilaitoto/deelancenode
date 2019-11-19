(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-a40ca1f2"],{"0fd9":function(t,e,r){"use strict";r("4b85");var a=r("2b0e"),i=r("d9f7"),s=r("80d2");const n=["sm","md","lg","xl"],o=["start","end","center"];function l(t,e){return n.reduce((r,a)=>{return r[t+Object(s["w"])(a)]=e(),r},{})}const c=t=>[...o,"baseline","stretch"].includes(t),d=l("align",()=>({type:String,default:null,validator:c})),u=t=>[...o,"space-between","space-around"].includes(t),h=l("justify",()=>({type:String,default:null,validator:u})),f=t=>[...o,"space-between","space-around","stretch"].includes(t),p=l("alignContent",()=>({type:String,default:null,validator:f})),v={align:Object.keys(d),justify:Object.keys(h),alignContent:Object.keys(p)},m={align:"align",justify:"justify",alignContent:"align-content"};function g(t,e,r){let a=m[t];if(null!=r){if(e){const r=e.replace(t,"");a+=`-${r}`}return a+=`-${r}`,a.toLowerCase()}}const b=new Map;e["a"]=a["a"].extend({name:"v-row",functional:!0,props:{tag:{type:String,default:"div"},dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:c},...d,justify:{type:String,default:null,validator:u},...h,alignContent:{type:String,default:null,validator:f},...p},render(t,{props:e,data:r,children:a}){let s="";for(const i in e)s+=String(e[i]);let n=b.get(s);if(!n){let t;for(t in n=[],v)v[t].forEach(r=>{const a=e[r],i=g(t,r,a);i&&n.push(i)});n.push({"no-gutters":e.noGutters,"row--dense":e.dense,[`align-${e.align}`]:e.align,[`justify-${e.justify}`]:e.justify,[`align-content-${e.alignContent}`]:e.alignContent}),b.set(s,n)}return t(e.tag,Object(i["a"])(r,{staticClass:"row",class:n}),a)}})},"13d5":function(t,e,r){"use strict";var a=r("23e7"),i=r("d58f").left,s=r("b301");a({target:"Array",proto:!0,forced:s("reduce")},{reduce:function(t){return i(this,t,arguments.length,arguments.length>1?arguments[1]:void 0)}})},"169a":function(t,e,r){"use strict";r("368e");var a=r("4ad4"),i=r("b848"),s=r("75eb"),n=r("e707"),o=r("e4d3"),l=r("21be"),c=r("f2e7"),d=r("a293"),u=r("80d2"),h=r("bfc5"),f=r("58df"),p=r("d9bd");const v=Object(f["a"])(a["a"],i["a"],s["a"],n["a"],o["a"],l["a"],c["a"]);e["a"]=v.extend({name:"v-dialog",directives:{ClickOutside:d["a"]},props:{dark:Boolean,disabled:Boolean,fullscreen:Boolean,light:Boolean,maxWidth:{type:[String,Number],default:"none"},noClickAnimation:Boolean,origin:{type:String,default:"center center"},persistent:Boolean,retainFocus:{type:Boolean,default:!0},scrollable:Boolean,transition:{type:[String,Boolean],default:"dialog-transition"},width:{type:[String,Number],default:"auto"}},data(){return{activatedBy:null,animate:!1,animateTimeout:-1,isActive:!!this.value,stackMinZIndex:200}},computed:{classes(){return{[`v-dialog ${this.contentClass}`.trim()]:!0,"v-dialog--active":this.isActive,"v-dialog--persistent":this.persistent,"v-dialog--fullscreen":this.fullscreen,"v-dialog--scrollable":this.scrollable,"v-dialog--animated":this.animate}},contentClasses(){return{"v-dialog__content":!0,"v-dialog__content--active":this.isActive}},hasActivator(){return Boolean(!!this.$slots.activator||!!this.$scopedSlots.activator)}},watch:{isActive(t){t?(this.show(),this.hideScroll()):(this.removeOverlay(),this.unbind())},fullscreen(t){this.isActive&&(t?(this.hideScroll(),this.removeOverlay(!1)):(this.showScroll(),this.genOverlay()))}},created(){this.$attrs.hasOwnProperty("full-width")&&Object(p["d"])("full-width",this)},beforeMount(){this.$nextTick(()=>{this.isBooted=this.isActive,this.isActive&&this.show()})},beforeDestroy(){"undefined"!==typeof window&&this.unbind()},methods:{animateClick(){this.animate=!1,this.$nextTick(()=>{this.animate=!0,window.clearTimeout(this.animateTimeout),this.animateTimeout=window.setTimeout(()=>this.animate=!1,150)})},closeConditional(t){const e=t.target;return!(this._isDestroyed||!this.isActive||this.$refs.content.contains(e)||this.overlay&&e&&!this.overlay.$el.contains(e))&&(this.$emit("click:outside"),this.persistent&&this.overlay?(this.noClickAnimation||this.overlay.$el!==e&&!this.overlay.$el.contains(e)||this.animateClick(),!1):this.activeZIndex>=this.getMaxZIndex())},hideScroll(){this.fullscreen?document.documentElement.classList.add("overflow-y-hidden"):n["a"].options.methods.hideScroll.call(this)},show(){!this.fullscreen&&!this.hideOverlay&&this.genOverlay(),this.$nextTick(()=>{this.$refs.content.focus(),this.bind()})},bind(){window.addEventListener("focusin",this.onFocusin)},unbind(){window.removeEventListener("focusin",this.onFocusin)},onKeydown(t){if(t.keyCode===u["s"].esc&&!this.getOpenDependents().length)if(this.persistent)this.noClickAnimation||this.animateClick();else{this.isActive=!1;const t=this.getActivator();this.$nextTick(()=>t&&t.focus())}this.$emit("keydown",t)},onFocusin(t){if(!t||t.target===document.activeElement||!this.retainFocus)return;const e=t.target;if(e&&![document,this.$refs.content].includes(e)&&!this.$refs.content.contains(e)&&this.activeZIndex>=this.getMaxZIndex()&&!this.getOpenDependentElements().some(t=>t.contains(e))){const t=this.$refs.content.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');t.length&&t[0].focus()}}},render(t){const e=[],r={class:this.classes,ref:"dialog",directives:[{name:"click-outside",value:()=>{this.isActive=!1},args:{closeConditional:this.closeConditional,include:this.getOpenDependentElements}},{name:"show",value:this.isActive}],on:{click:t=>{t.stopPropagation()}},style:{}};this.fullscreen||(r.style={maxWidth:"none"===this.maxWidth?void 0:Object(u["e"])(this.maxWidth),width:"auto"===this.width?void 0:Object(u["e"])(this.width)}),e.push(this.genActivator());let a=t("div",r,this.showLazyContent(this.getContentSlot()));return this.transition&&(a=t("transition",{props:{name:this.transition,origin:this.origin}},[a])),e.push(t("div",{class:this.contentClasses,attrs:{role:"document",tabindex:this.isActive?0:void 0,...this.getScopeIdAttrs()},on:{keydown:this.onKeydown},style:{zIndex:this.activeZIndex},ref:"content"},[this.$createElement(h["a"],{props:{root:!0,light:this.light,dark:this.dark}},[a])])),t("div",{staticClass:"v-dialog__container",attrs:{role:"dialog"}},e)}})},"2bc5":function(t,e,r){"use strict";r("abd3");var a=r("f914"),i=r("f625"),s=r("7560"),n=r("58df");e["a"]=Object(n["a"])(s["a"]).extend({name:"v-breadcrumbs",props:{divider:{type:String,default:"/"},items:{type:Array,default:()=>[]},large:Boolean},computed:{classes(){return{"v-breadcrumbs--large":this.large,...this.themeClasses}}},methods:{genDivider(){return this.$createElement(a["a"],this.$slots.divider?this.$slots.divider:this.divider)},genItems(){const t=[],e=!!this.$scopedSlots.item,r=[];for(let a=0;a<this.items.length;a++){const s=this.items[a];r.push(s.text),e?t.push(this.$scopedSlots.item({item:s})):t.push(this.$createElement(i["a"],{key:r.join("."),props:s},[s.text])),a<this.items.length-1&&t.push(this.genDivider())}return t}},render(t){const e=this.$slots.default||this.genItems();return t("ul",{staticClass:"v-breadcrumbs",class:this.classes},e)}})},3207:function(t,e,r){"use strict";r.r(e);var a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-container",{staticStyle:{"max-width":"1000px"},attrs:{fluid:""}},[t.loading?r("v-layout",{staticClass:"hidden-sm-and-down",attrs:{wrap:"","justify-center":""}},[r("v-flex",{attrs:{xs12:"",sm12:"",md10:"",lg10:""}},[r("vue-content-loading",{attrs:{width:300,height:350}},[r("rect",{attrs:{x:"0",y:"0",rx:"4",ry:"4",width:"60",height:"15"}}),r("rect",{attrs:{x:"0",y:"20",rx:"4",ry:"4",width:"300",height:"180"}}),r("rect",{attrs:{x:"0",y:"210",rx:"4",ry:"4",width:"180",height:"10"}}),r("rect",{attrs:{x:"0",y:"230",rx:"4",ry:"4",width:"100",height:"10"}}),r("rect",{attrs:{x:"0",y:"250",rx:"4",ry:"4",width:"60",height:"10"}}),r("rect",{attrs:{x:"200",y:"210",rx:"4",ry:"4",width:"90",height:"100"}}),r("rect",{attrs:{x:"0",y:"270",rx:"4",ry:"4",width:"150",height:"10"}}),r("rect",{attrs:{x:"0",y:"290",rx:"4",ry:"4",width:"120",height:"10"}})])],1)],1):r("v-layout",{attrs:{wrap:"","justify-center":""}},[r("v-flex",{attrs:{xs12:"",sm12:"",md10:"",lg10:""}},[r("v-breadcrumbs",{attrs:{items:t.items},scopedSlots:t._u([{key:"divider",fn:function(){return[r("v-icon",[t._v("mdi-chevron-right")])]},proxy:!0}])}),r("app-carousel",{attrs:{user:t.user,portfolio:t.portfolio}})],1),r("v-flex",{attrs:{xs12:"",sm12:"",md10:"",lg10:""}},[r("app-content",{attrs:{portfolio:t.portfolio,user:t.user,auth:t.auth,filterCategory:t.filterCate,rating:t.rating,reviews:t.reviews}})],1),r("v-flex",{staticClass:"mt-2 hidden-md-and-up",attrs:{xs12:"",sm12:"",md10:"",lg10:""}},[r("app-avatar",{attrs:{user:t.user,auth:t.auth,portfolio:t.portfolio}})],1),r("v-flex",{attrs:{xs10:"",sm10:"",dm10:"",lg10:""}},[r("app-also-like",{attrs:{categoryId:t.categoryId}})],1)],1)],1)},i=[],s=(r("a4d3"),r("4de4"),r("4160"),r("d81d"),r("13d5"),r("e439"),r("dbb4"),r("b64b"),r("159b"),r("96cf"),r("89ba")),n=r("2fa7"),o=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-card",{staticClass:"mx-auto mb-2"},[r("swiper",{ref:"swiperThumbs",staticClass:"gallery-thumbs",attrs:{options:t.swiperOptionThumbs}},[t._l(t.portfolio.images,(function(e,a){return r("swiper-slide",{key:a,staticClass:"slide-1"},[r("v-img",{attrs:{src:e?t.$server+e:"https://image.flaticon.com/icons/png/512/64/64572.png"}})],1)})),r("div",{staticClass:"swiper-button-next swiper-button-info",attrs:{slot:"button-next"},slot:"button-next"}),r("div",{staticClass:"swiper-button-prev swiper-button-info",attrs:{slot:"button-prev"},slot:"button-prev"}),r("div",{staticClass:"swiper-pagination",attrs:{slot:"pagination",id:"__swiper-pagination"},slot:"pagination"})],2)],1)},l=[],c={data:function(){return{swiperOptionThumbs:{autoHeight:!0,autoplay:{delay:4e3},grabCursor:!0,effect:"coverflow",coverflowEffect:{rotate:50,stretch:0,depth:100,modifier:1,slideShadows:!1},freeMode:!1,spaceBetween:0,centeredSlides:!0,slidesPerView:1,touchRatio:1,slideToClickedSlide:!0,pagination:{el:".swiper-pagination",clickable:!0,dynamicBullets:!0,type:"progressbar"},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}}}},props:["portfolio","user"]},d=c,u=(r("81be"),r("2877")),h=r("6544"),f=r.n(h),p=r("b0af"),v=r("adda"),m=Object(u["a"])(d,o,l,!1,null,"5a8fc90c",null),g=m.exports;f()(m,{VCard:p["a"],VImg:v["a"]});var b=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-card",[r("v-layout",{attrs:{wrap:""}},[r("v-flex",{attrs:{xs12:"",sm12:"",md8:"",lg8:""}},[r("div",{staticClass:"ml-5 mt-2"},[r("v-card-actions",[r("v-rating",{attrs:{readonly:"",dense:"","half-increments":"",color:"yellow darken-3","background-color":"grey darken-1",hover:"",size:"25"},model:{value:t.rating,callback:function(e){t.rating=e},expression:"rating"}}),r("h3",{staticClass:"warning--text ml-1 mt-1"},[t._v(t._s(t.rating?t.rating:""))]),r("span",{staticClass:"grey--text mx-2 mt-1"},[t._v(" ("+t._s(t.portfolio.reviews.length)+") ")])],1),r("h2",{staticClass:"black--text mb-4 font-weight-bold"},[t._v(t._s(t.portfolio.title))]),r("p",{domProps:{innerHTML:t._s(t.portfolio.description)}}),r("h2",{staticClass:"black--text mb-1"},[t._v("ປະເພດ")]),r("v-btn",{staticClass:"primary--text v-btn--outlined font-weight-bold",attrs:{text:""},on:{click:function(e){return t.filterCategory(t.portfolio.categoryId._id)}}},[t._v(" "+t._s(t.portfolio.categoryId?t.portfolio.categoryId.name:"")+" ")]),r("h2",{staticClass:"my-3 "},[t._v("Reviews ("+t._s(t.portfolio.reviews.length)+")")]),t._l(t.reviews.slice(0,t.reviewToShow),(function(e){return r("v-card",{key:e.index,staticClass:"mr-5 ma-1",attrs:{tile:"",raised:""}},[r("v-card-actions",[r("v-avatar",[r("v-img",{attrs:{src:t.$server+e.userId.image}})],1),r("span",[t._v(" "+t._s(e.text))]),r("v-spacer"),r("v-rating",{attrs:{readonly:"",dense:"","half-increments":"",color:"yellow darken-3","background-color":"grey darken-1",hover:"",size:"25"},model:{value:e.rating,callback:function(r){t.$set(e,"rating",r)},expression:"review.rating"}})],1)],1)})),r("div",{staticClass:"text-center"},[r("v-btn",{attrs:{loading:t.loading,color:"primary",outlined:""},on:{click:t.loadmore}},[t._v("Load more...")])],1),r("br")],2)]),r("v-flex",{staticClass:"hidden-sm-and-down",attrs:{xs6:"",sm6:"",md4:"",lg4:""}},[r("app-avatar",{staticClass:"mx-2 my-2",attrs:{user:t.user,auth:t.auth,portfolio:t.portfolio}})],1)],1)],1)},y=[],w=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-card",[r("div",{staticClass:"text-center"},[r("v-avatar",{staticClass:"my-2",attrs:{width:"100",height:"100"}},[r("v-img",{attrs:{src:t.user.image?t.$server+t.user.image:"https://www.w3schools.com/howto/img_avatar.png"}})],1),r("v-card-title",{staticClass:"justify-center font-weight-bold"},[t._v(" "+t._s(t.user.username)+" ")]),r("v-divider"),r("br")],1),r("div",{staticClass:"ml-7"},[r("i",{staticClass:"fas fa-child mr-3"}),r("b",[t._v("skill:")]),r("p",{staticClass:"mr-3"},[t._v(t._s(t.user.skill))]),r("br"),r("i",{staticClass:"fas fa-history mr-2"}),r("b",[t._v("History:")]),r("p",{staticClass:"mr-3"},[t._v(t._s(t.user.history))])]),r("v-divider",{staticClass:"my-2"}),t.signInned?r("div",[t.auth._id!==t.user._id?r("div",{staticClass:"text-center mx-2"},[!0===t.user.acceptOrder?r("app-create-order-modal",{attrs:{auth:t.auth,user:t.user,portfolio:t.portfolio}}):r("v-btn",{staticClass:"error mb-2",on:{click:t.alert}},[t._v("ບໍ່ພ້ອມຮັບງານ")])],1):t._e()]):r("div",{staticClass:"text-center"},[r("v-btn",{staticClass:"primary mb-2",attrs:{to:{name:"SignIn"}}},[r("i",{staticClass:"fas fa-envelope mr-1"}),t._v("ແຊັດຕອນນີ້ ")])],1)],1)},x=[],C=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-row",{attrs:{justify:"center"}},[r("v-dialog",{attrs:{width:"600px"},scopedSlots:t._u([{key:"activator",fn:function(e){var a=e.on;return[r("v-btn",t._g({staticClass:"mb-2",attrs:{color:"primary",dark:""}},a),[r("i",{staticClass:"fas fa-envelope mr-1"}),t._v("ແຊັດຕອນນີ້ ")])]}}]),model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[r("v-card",[r("v-card-title",[r("span",{staticClass:"headline mx-auto"},[t._v(" ສົ່ງຫາ "+t._s(t.user.username)+" "),r("v-avatar",[r("v-img",{attrs:{src:t.$server+t.user.image}})],1)],1)]),r("v-card-text",[r("v-form",{on:{submit:function(e){return e.preventDefault(),t.createOrder(t.auth._id,t.user._id,t.portfolio._id)}}},[r("v-layout",[r("v-flex",{attrs:{xs12:"",sm12:"",md12:"",lg12:""}},[r("v-text-field",{staticClass:"ml-4",attrs:{counter:"20"},model:{value:t.message,callback:function(e){t.message=e},expression:"message"}})],1),r("v-flex",{attrs:{"mt-5":""}},[r("a",{staticClass:"icon mx-2",on:{click:function(e){return t.createOrder(t.auth._id,t.user._id,t.portfolio._id)}}},[r("v-icon",{attrs:{size:"30"}},[t._v("mdi-send")])],1)])],1)],1)],1),r("v-card-actions",[r("v-spacer")],1)],1)],1)],1)},_=[],O={props:["auth","user","portfolio"],data:function(){return{message:"",dialog:!1}},methods:{createOrder:function(){var t=Object(s["a"])(regeneratorRuntime.mark((function t(e,r,a){var i,s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$axios.post("order/create-order",{employerId:e,freelancerId:r,portfolioId:a,message:this.message});case 2:i=t.sent,s=i.data.orderId,this.$router.push({name:"MessageFocus",params:{id:s}}),this.$io.emit("create-order");case 6:case"end":return t.stop()}}),t,this)})));function e(e,r,a){return t.apply(this,arguments)}return e}()}},k=O,$=r("8212"),j=r("8336"),S=r("99d9"),V=r("169a"),I=r("0e8f"),A=r("4bd4"),P=r("132d"),T=r("a722"),B=r("0fd9"),E=r("2fa4"),D=r("8654"),R=Object(u["a"])(k,C,_,!1,null,null,null),L=R.exports;f()(R,{VAvatar:$["a"],VBtn:j["a"],VCard:p["a"],VCardActions:S["a"],VCardText:S["b"],VCardTitle:S["c"],VDialog:V["a"],VFlex:I["a"],VForm:A["a"],VIcon:P["a"],VImg:v["a"],VLayout:T["a"],VRow:B["a"],VSpacer:E["a"],VTextField:D["a"]});var F=r("2f62");function M(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,a)}return r}function N(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?M(r,!0).forEach((function(e){Object(n["a"])(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):M(r).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var H={components:{appCreateOrderModal:L},props:["auth","user","portfolio"],computed:N({},Object(F["c"])(["signInned"])),methods:{alert:function(){this.$swal({title:"Freelance ບໍ່ພ້ອມຮັບງານ",type:"error",toast:!0,position:"top-end",showConfirmButton:!1,timer:2e3})}}},W=H,Z=(r("9add"),r("ce7e")),z=Object(u["a"])(W,w,x,!1,null,"4e6a16f2",null),q=z.exports;f()(z,{VAvatar:$["a"],VBtn:j["a"],VCard:p["a"],VCardTitle:S["c"],VDivider:Z["a"],VImg:v["a"]});var G={components:{appAvatar:q},props:["portfolio","user","auth","filterCategory","rating","reviews"],data:function(){return{reviewToShow:2,loading:!1}},methods:{loadmore:function(){var t=this;this.loading=!0,setTimeout((function(){t.reviewToShow+=2,t.loading=!1}),400)}}},J=G,K=r("1d4d"),Q=Object(u["a"])(J,b,y,!1,null,null,null),U=Q.exports;f()(Q,{VAvatar:$["a"],VBtn:j["a"],VCard:p["a"],VCardActions:S["a"],VFlex:I["a"],VImg:v["a"],VLayout:T["a"],VRating:K["a"],VSpacer:E["a"]});var X=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-container",[t._v(" ວຽກທີ່ໃກ້ຄຽງ: "),r("v-row",{attrs:{wrap:""}},[t._l(t.portfolios,(function(e,a){return r("v-col",{key:a,attrs:{xs:"12",sm:"6",md:"4",lg:"3"}},[r("v-card",{staticClass:"portfolio-card mx-auto",attrs:{width:"344"}},[r("router-link",{attrs:{to:{name:"Details",params:{id:e._id}}}},[r("v-img",{staticClass:"portfolio-img",attrs:{src:e.images?t.$server+e.images[0]:"",height:"200px"}})],1),r("v-card-title",[r("span",{staticClass:"ml-3 subtitle-1"},[t._v(t._s(e.title))])]),r("v-card-text",{domProps:{innerHTML:t._s(e.description.substring(0,40)+"...")}}),r("hr"),r("v-card-actions",[r("v-avatar",[r("v-img",{attrs:{rounded:"",src:e.author.local?t.$server+e.author.local.image:e.author.google?t.$server+e.author.google.image:e.author.facebook?t.$server+e.author.facebook.image:"https://www.w3schools.com/howto/img_avatar.png",width:"40",height:"40"}})],1),r("v-btn",{staticClass:"primary--text font-weight-bold ml-auto v-btn--outlined",attrs:{text:""},on:{click:function(r){return t.filterCategory(e.categoryId._id,t.page)}}},[t._v(t._s(e.categoryId?e.categoryId.name:""))])],1)],1)],1)})),t.portfolios.length<=0?r("v-col",[r("p",{staticClass:"primary--text"},[t._v(" No portfolio found")])]):t._e()],2)],1)},Y=[],tt={data:function(){return{portfolios:[]}},props:["categoryId"],methods:{},created:function(){}},et=tt,rt=r("62ad"),at=r("a523"),it=Object(u["a"])(et,X,Y,!1,null,null,null),st=it.exports;f()(it,{VAvatar:$["a"],VBtn:j["a"],VCard:p["a"],VCardActions:S["a"],VCardText:S["b"],VCardTitle:S["c"],VCol:rt["a"],VContainer:at["a"],VImg:v["a"],VRow:B["a"]});var nt=r("68ee"),ot=r.n(nt);function lt(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,a)}return r}function ct(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?lt(r,!0).forEach((function(e){Object(n["a"])(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):lt(r).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var dt={components:{appCarousel:g,appContent:U,appAlsoLike:st,appAvatar:q,VueContentLoading:ot.a},data:function(){return{loading:!1,categoryId:"",portfolio:{},user:{},reviews:[],rating:null,items:[{text:"Home",to:{name:"Home"},exact:!0},{text:"Detail",to:{name:"Detail"}}]}},computed:ct({},Object(F["c"])(["auth"])),methods:ct({},Object(F["b"])(["filterCategory"]),{fetchReviews:function(){var t=Object(s["a"])(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$axios.get("review/get-all",{params:{portfolioId:this.$route.params.id}});case 2:e=t.sent,this.reviews=e.data.reviews;case 4:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),fetchPortfolio:function(){var t=Object(s["a"])(regeneratorRuntime.mark((function t(){var e,r,a,i,s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$axios.get("home/detail",{params:{_id:this.$route.params.id}});case 2:e=t.sent,r=e.data.portfolio,this.portfolio=r,this.user=r.author,this.categoryId=r.categoryId._id,a=r.reviews.length,i=r.reviews.map((function(t){return t.rating})),s=i.reduce((function(t,e){return t+e}),0),this.rating=s/a;case 11:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),filterCate:function(){var t=Object(s["a"])(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:this.$router.push({name:"Home",query:{by_category:e}});case 1:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}(),loadingPage:function(){var t=this;setTimeout((function(){t.loading=!1}),2e3)}}),mounted:function(){var t=this;this.$io.on("acceptWork",(function(e){t.user._id===e&&t.fetchPortfolio()})),this.$io.on("updatePortfolio",(function(e){t.$route.params.id===e&&t.fetchPortfolio()})),this.$io.on("deletePortfolio",(function(e){t.$route.params.id===e&&t.$router.push({name:"Home"})}))},created:function(){var t=Object(s["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.fetchPortfolio();case 2:return t.next=4,this.fetchReviews();case 4:return t.next=6,this.loadingPage();case 6:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()},ut=dt,ht=r("2bc5"),ft=Object(u["a"])(ut,a,i,!1,null,null,null);e["default"]=ft.exports;f()(ft,{VBreadcrumbs:ht["a"],VContainer:at["a"],VFlex:I["a"],VIcon:P["a"],VLayout:T["a"]})},"368e":function(t,e,r){},"62ad":function(t,e,r){"use strict";r("4b85");var a=r("2b0e"),i=r("d9f7"),s=r("80d2");const n=["sm","md","lg","xl"],o=(()=>{return n.reduce((t,e)=>{return t[e]={type:[Boolean,String,Number],default:!1},t},{})})(),l=(()=>{return n.reduce((t,e)=>{return t["offset"+Object(s["w"])(e)]={type:[String,Number],default:null},t},{})})(),c=(()=>{return n.reduce((t,e)=>{return t["order"+Object(s["w"])(e)]={type:[String,Number],default:null},t},{})})(),d={col:Object.keys(o),offset:Object.keys(l),order:Object.keys(c)};function u(t,e,r){let a=t;if(null!=r&&!1!==r){if(e){const r=e.replace(t,"");a+=`-${r}`}return"col"!==t||""!==r&&!0!==r?(a+=`-${r}`,a.toLowerCase()):a.toLowerCase()}}const h=new Map;e["a"]=a["a"].extend({name:"v-col",functional:!0,props:{cols:{type:[Boolean,String,Number],default:!1},...o,offset:{type:[String,Number],default:null},...l,order:{type:[String,Number],default:null},...c,alignSelf:{type:String,default:null,validator:t=>["auto","start","end","center","baseline","stretch"].includes(t)},tag:{type:String,default:"div"}},render(t,{props:e,data:r,children:a,parent:s}){let n="";for(const i in e)n+=String(e[i]);let o=h.get(n);if(!o){let t;for(t in o=[],d)d[t].forEach(r=>{const a=e[r],i=u(t,r,a);i&&o.push(i)});const r=o.some(t=>t.startsWith("col-"));o.push({col:!r||!e.cols,[`col-${e.cols}`]:e.cols,[`offset-${e.offset}`]:e.offset,[`order-${e.order}`]:e.order,[`align-self-${e.alignSelf}`]:e.alignSelf}),h.set(n,o)}return t(e.tag,Object(i["a"])(r,{class:o}),a)}})},"7b2d":function(t,e,r){},"81be":function(t,e,r){"use strict";var a=r("a429"),i=r.n(a);i.a},"9add":function(t,e,r){"use strict";var a=r("7b2d"),i=r.n(a);i.a},a429:function(t,e,r){},abd3:function(t,e,r){},d58f:function(t,e,r){var a=r("1c0b"),i=r("7b0b"),s=r("44ad"),n=r("50c4"),o=function(t){return function(e,r,o,l){a(r);var c=i(e),d=s(c),u=n(c.length),h=t?u-1:0,f=t?-1:1;if(o<2)while(1){if(h in d){l=d[h],h+=f;break}if(h+=f,t?h<0:u<=h)throw TypeError("Reduce of empty array with no initial value")}for(;t?h>=0:u>h;h+=f)h in d&&(l=r(l,d[h],h,c));return l}};t.exports={left:o(!1),right:o(!0)}},d81d:function(t,e,r){"use strict";var a=r("23e7"),i=r("b727").map,s=r("1dde");a({target:"Array",proto:!0,forced:!s("map")},{map:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}})},f625:function(t,e,r){"use strict";var a=r("1c87"),i=r("58df");e["a"]=Object(i["a"])(a["a"]).extend({name:"v-breadcrumbs-item",props:{activeClass:{type:String,default:"v-breadcrumbs__item--disabled"},ripple:{type:[Boolean,Object],default:!1}},computed:{classes(){return{"v-breadcrumbs__item":!0,[this.activeClass]:this.disabled}}},render(t){const{tag:e,data:r}=this.generateRouteLink();return t("li",[t(e,{...r,attrs:{...r.attrs,"aria-current":this.isActive&&this.isLink?"page":void 0}},this.$slots.default)])}})},f914:function(t,e,r){"use strict";r.d(e,"a",(function(){return n}));var a=r("2bc5"),i=r("f625"),s=r("80d2");const n=Object(s["h"])("v-breadcrumbs__divider","li");a["a"],i["a"]}}]);
//# sourceMappingURL=chunk-a40ca1f2.958f606c.js.map