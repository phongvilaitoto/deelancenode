(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1891d49c"],{"0e8f":function(t,e,a){"use strict";a("20f6");var s=a("e8f2");e["a"]=Object(s["a"])("flex")},"173c":function(t,e,a){},"3c93":function(t,e,a){},"6be4":function(t,e,a){"use strict";var s=a("c499"),r=a.n(s);r.a},"7fcb":function(t,e,a){},"94aa":function(t,e,a){},a523:function(t,e,a){"use strict";a("20f6"),a("4b85");var s=a("e8f2"),r=a("d9f7");e["a"]=Object(s["a"])("container").extend({name:"v-container",functional:!0,props:{id:String,tag:{type:String,default:"div"},fluid:{type:Boolean,default:!1}},render(t,{props:e,data:a,children:s}){let i;const{attrs:n}=a;return n&&(a.attrs={},i=Object.keys(n).filter(t=>{if("slot"===t)return!1;const e=n[t];return t.startsWith("data-")?(a.attrs[t]=e,!1):e||"string"===typeof e})),e.id&&(a.domProps=a.domProps||{},a.domProps.id=e.id),t(e.tag,Object(r["a"])(a,{staticClass:"container",class:Array({"container--fluid":e.fluid}).concat(i||[])}),s)}})},a722:function(t,e,a){"use strict";a("20f6");var s=a("e8f2");e["a"]=Object(s["a"])("layout")},a797:function(t,e,a){"use strict";a("3c93");var s=a("a9ad"),r=a("7560"),i=a("f2e7"),n=a("58df");e["a"]=Object(n["a"])(s["a"],r["a"],i["a"]).extend({name:"v-overlay",props:{absolute:Boolean,color:{type:String,default:"#212121"},dark:{type:Boolean,default:!0},opacity:{type:[Number,String],default:.46},value:{default:!0},zIndex:{type:[Number,String],default:5}},computed:{__scrim(){const t=this.setBackgroundColor(this.color,{staticClass:"v-overlay__scrim",style:{opacity:this.computedOpacity}});return this.$createElement("div",t)},classes(){return{"v-overlay--absolute":this.absolute,"v-overlay--active":this.isActive,...this.themeClasses}},computedOpacity(){return Number(this.isActive?this.opacity:0)},styles(){return{zIndex:this.zIndex}}},methods:{genContent(){return this.$createElement("div",{staticClass:"v-overlay__content"},this.$slots.default)}},render(t){const e=[this.__scrim];return this.isActive&&e.push(this.genContent()),t("div",{staticClass:"v-overlay",class:this.classes,style:this.styles},e)}})},b3d7:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t.loading?a("app-home-loading"):a("div",[a("app-first"),a("v-container",{staticStyle:{"max-width":"960px"}},[a("app-search",{attrs:{hidden:""}}),a("app-category",{attrs:{categoryId:t.categoryId,categories:t.categories,filterCategory:t.filterCate}}),a("div",{staticClass:"text-center my-3"},[a("span",{staticClass:"font-21 main-color"},[t._v("ແນະນໍາ")])]),a("app-portfolio-reuse",{attrs:{portfolios:t.portfolios,loading:t.loading}}),a("div",{staticClass:"text-center my-3"},[a("router-link",{attrs:{to:{name:"Category"}}},[a("span",{staticClass:"font-21 main-color"},[t._v("ເລືອກຕາມໝວດໝູ່ວຽກ")])])],1)],1)],1),a("v-overlay",{attrs:{value:t.overlay}},[a("v-progress-circular",{attrs:{color:"primary",indeterminate:"",size:"100"}})],1)],1)},r=[],i=(a("a4d3"),a("4de4"),a("4160"),a("e439"),a("dbb4"),a("b64b"),a("159b"),a("96cf"),a("89ba")),n=a("2fa7"),o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-parallax",{staticClass:"black",attrs:{height:t.$vuetify.breakpoint.smAndDown?400:350,width:t.$vuetify.breakpoint.smAndDown?400:"",src:t.$vuetify.breakpoint.smAndDown?"":"https://www.campaignmonitor.com/assets/uploads/2010/12/background_d.jpg"}},[a("v-container",{staticClass:"mx-auto",staticStyle:{"max-width":"960px"}},[a("v-row",{attrs:{"no-gutters":"",align:"center"}},[a("v-col",{attrs:{cols:"12",xs:"12",sm:"12",md:"6",lg:"6"}},[a("div",{staticClass:"text-center"},[a("strong",{staticClass:"white--text font-weight-bold",staticStyle:{"font-size":"20px"}},[t._v("ສະໝັກເປັນ "),a("span",{staticClass:"primary--text text-uppercase"},[t._v("Freelance")]),t._v(" ຕອນນີ້ເລີຍ")]),a("p",{staticClass:"white--text"},[t._v(" ສາມາດຊອກຫາ Freelance ທີ່ຖືກໃຈ ຫຼື ຈະສະໝັກເປັນ Freelance ເອງໄດ້ແລ້ວຕອນນີ້ທີ່ "),a("span",{staticClass:"info--text"},[t._v("Deelance")])]),a("v-layout",{attrs:{wrap:"","justify-center":""}},[a("v-flex",{attrs:{xs12:"",sm5:"",md5:"",lg5:""}},[a("v-btn",{staticClass:"success mb-3",attrs:{to:{name:"Category"},block:""}},[a("v-icon",{staticClass:"mr-1"},[t._v("mdi-gesture-two-double-tap")]),a("span",{staticClass:"font-12"},[t._v("ຊອກຫາ Freelance")])],1)],1),a("div",{staticClass:"mx-2"}),a("v-flex",{attrs:{xs12:"",sm5:"",md5:"",lg5:""}},[t.signInned?t._e():a("v-btn",{attrs:{to:{name:"SignUp"},block:""}},[a("v-icon",{staticClass:"mr-2"},[t._v("mdi-account-multiple-plus")]),a("span",{staticClass:"font-12"},[t._v("ສະໝັກເປັນ Freelance")])],1),t.signInned?a("v-btn",{attrs:{to:{name:"DashboardPortfolioPost"},block:""}},[a("v-icon",{staticClass:"mr-2"},[t._v("mdi-check-circle-outline")]),a("span",{staticClass:"font-12"},[t._v("ລົງຜົນງານ Freelance")])],1):t._e()],1)],1)],1)]),a("v-col",{staticClass:"hidden-sm-and-down",attrs:{cols:"12",xs:"12",sm:"12",md:"6",lg:"6"}},[a("div",{staticClass:"ml-8 mt-3"},[a("v-img",{staticStyle:{filter:"grayscale(100%) contrast(140%) hue-rotate(90deg) blur(0.2px) opacity(80%)"},attrs:{height:"350",width:"350",src:"https://www.trzcacak.rs/myfile/full/3-39707_lalisa-lisa-blackpink-kpop-freetoedit-lisa-manoban.png"}})],1)])],1)],1)],1)},c=[],l=a("2f62");function p(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);e&&(s=s.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,s)}return a}function u(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?p(a,!0).forEach((function(e){Object(n["a"])(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):p(a).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}var d={computed:u({},Object(l["c"])(["signInned"]))},f=d,h=a("2877"),m=a("6544"),v=a.n(m),g=a("8336"),y=a("62ad"),b=a("a523"),w=a("0e8f"),x=a("132d"),C=a("adda"),O=a("a722"),_=(a("94aa"),a("2b0e")),j=_["a"].extend({name:"translatable",props:{height:Number},data:()=>({elOffsetTop:0,parallax:0,parallaxDist:0,percentScrolled:0,scrollTop:0,windowHeight:0,windowBottom:0}),computed:{imgHeight(){return this.objHeight()}},beforeDestroy(){window.removeEventListener("scroll",this.translate,!1),window.removeEventListener("resize",this.translate,!1)},methods:{calcDimensions(){const t=this.$el.getBoundingClientRect();this.scrollTop=window.pageYOffset,this.parallaxDist=this.imgHeight-this.height,this.elOffsetTop=t.top+this.scrollTop,this.windowHeight=window.innerHeight,this.windowBottom=this.scrollTop+this.windowHeight},listeners(){window.addEventListener("scroll",this.translate,!1),window.addEventListener("resize",this.translate,!1)},objHeight(){throw new Error("Not implemented !")},translate(){this.calcDimensions(),this.percentScrolled=(this.windowBottom-this.elOffsetTop)/(parseInt(this.height)+this.windowHeight),this.parallax=Math.round(this.parallaxDist*this.percentScrolled)}}}),k=a("58df");const P=Object(k["a"])(j);var $=P.extend().extend({name:"v-parallax",props:{alt:{type:String,default:""},height:{type:[String,Number],default:500},src:String},data:()=>({isBooted:!1}),computed:{styles(){return{display:"block",opacity:this.isBooted?1:0,transform:`translate(-50%, ${this.parallax}px)`}}},mounted(){this.init()},methods:{init(){const t=this.$refs.img;t&&(t.complete?(this.translate(),this.listeners()):t.addEventListener("load",()=>{this.translate(),this.listeners()},!1),this.isBooted=!0)},objHeight(){return this.$refs.img.naturalHeight}},render(t){const e={staticClass:"v-parallax__image",style:this.styles,attrs:{src:this.src,alt:this.alt},ref:"img"},a=t("div",{staticClass:"v-parallax__image-container"},[t("img",e)]),s=t("div",{staticClass:"v-parallax__content"},this.$slots.default);return t("div",{staticClass:"v-parallax",style:{height:`${this.height}px`},on:this.$listeners},[a,s])}}),V=a("0fd9"),S=Object(h["a"])(f,o,c,!1,null,"60bd6a0c",null),D=S.exports;v()(S,{VBtn:g["a"],VCol:y["a"],VContainer:b["a"],VFlex:w["a"],VIcon:x["a"],VImg:C["a"],VLayout:O["a"],VParallax:$,VRow:V["a"]});var E=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-row",{staticClass:"mb-3",attrs:{"no-gutters":"",align:"center",justify:"center"}},[a("v-col",{attrs:{cols:"10",xs:"10",sm:"10",md:"6",lg:"6"}},[a("v-form",{on:{submit:function(t){t.preventDefault()}}},[a("v-toolbar",{staticClass:"search-toolbar",attrs:{dense:""}},[a("v-text-field",{attrs:{"hide-details":"","single-line":"",placeholder:"ຄົ້ນຫາ..."}}),a("v-btn",{attrs:{type:"submit",icon:""}},[a("i",{staticClass:"fas fa-search fa-2x search-icon"})])],1)],1)],1)],1)},B=[],I={props:["searchPortfolio"]},R=I,F=(a("e61f"),a("4bd4")),T=a("8654"),A=a("71d9"),H=Object(h["a"])(R,E,B,!1,null,"6f2eae34",null),z=H.exports;v()(H,{VBtn:g["a"],VCol:y["a"],VForm:F["a"],VRow:V["a"],VTextField:T["a"],VToolbar:A["a"]});var L=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-card",{attrs:{outlined:""}},[a("swiper",{attrs:{options:t.swiperOption}},[t._l(t.categories.slice(1),(function(e,s){return a("swiper-slide",{key:s,staticClass:"text-center"},[a("router-link",{attrs:{to:{name:"CategoryFocus",params:{id:e._id,name:e.name}}}},[a("v-img",{staticClass:"mx-auto my-2",attrs:{src:t.$server+e.image,"lazy-src":t.$server+e.image,"max-height":"50","max-width":"50"},scopedSlots:t._u([{key:"placeholder",fn:function(){return[a("v-row",{staticClass:"fill-height",attrs:{align:"center",justify:"center"}},[a("v-progress-circular",{attrs:{size:"40",indeterminate:"",color:"primary"}})],1)]},proxy:!0}],null,!0)})],1),a("span",{staticClass:"font-12",class:e._id===t.categoryId?"current-category":""},[t._v(t._s(e.name))])],1)})),a("div",{staticClass:"swiper-button-next swiper-button-primary",attrs:{slot:"button-next"},slot:"button-next"}),a("div",{staticClass:"swiper-button-prev swiper-button-primary",attrs:{slot:"button-prev"},slot:"button-prev"}),a("div",{staticClass:"swiper-pagination",attrs:{slot:"pagination",id:"__swiper-pagination"},slot:"pagination"})],2)],1)},N=[],U={props:["categoryId","filterCategory","categories"],data:function(){return{swiperOption:{slidesPerView:7,spaceBetween:20,breakpoints:{576:{slidesPerView:3,spaceBetween:20},768:{slidesPerView:4,spaceBetween:20},992:{slidesPerView:6,spaceBetween:20},1200:{slidesPerView:7,spaceBetween:20}},freeMode:!0,pagination:{el:".swiper-pagination",clickable:!0,dynamicBullets:!0,type:"progressbar"},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}}}},methods:{filterCate:function(t){this.$store.commit("SetCATEGORY",t),this.filterCategory(1)}}},Y=U,G=(a("fa0c"),a("6be4"),a("b0af")),J=a("490a"),M=Object(h["a"])(Y,L,N,!1,null,"333f28b2",null),W=M.exports;v()(M,{VCard:G["a"],VImg:C["a"],VProgressCircular:J["a"],VRow:V["a"]});var q=a("4f79"),K=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{staticStyle:{"max-width":"960px"}},[a("v-row",{attrs:{"no-gutters":"",justify:"center"}},[a("v-col",{attrs:{cols:"12"}},[a("v-row",[a("v-col",{attrs:{cols:"12",xs:"12",sm:"12",md:"6",lg:"6"}},[a("v-sheet",{class:t.$vuetify.breakpoint.mdAndUp?"my-12":""},[a("v-skeleton-loader",{staticClass:"ma-4",attrs:{type:"article, actions,  list-item"}})],1)],1),a("v-col",{staticClass:"mt-6 hidden-sm-and-down",attrs:{cols:"12",xs:"12",sm:"12",md:"6",lg:"6"}},[a("v-sheet",{class:t.$vuetify.breakpoint.mdAndUp?"my-12":""},[a("v-skeleton-loader",{attrs:{tile:"",type:"image"}})],1)],1)],1)],1),a("v-col",{attrs:{cols:"12"}},[a("v-sheet",[a("v-skeleton-loader",{staticClass:"mx-auto pa-4",attrs:{"max-width":"600",type:"sentences"}})],1)],1),a("v-col",{attrs:{cols:"12"}},[a("v-skeleton-loader",{staticClass:"my-2 mx-auto",attrs:{"max-width":"200",type:"list-item"}}),a("v-row",{attrs:{dense:""}},t._l(3,(function(e){return a("v-col",{key:e.index,attrs:{cols:"6",xs:"6",sm:"4",md:"3",lg:"3"}},[a("v-card",{attrs:{outlined:""}},[a("v-sheet",[a("v-skeleton-loader",{attrs:{height:t.$vuetify.breakpoint.smAndDown?150:190,toto:e,tile:"",type:"image"}}),a("v-skeleton-loader",{attrs:{type:"list-item-three-line"}})],1)],1)],1)})),1),a("v-skeleton-loader",{staticClass:"my-2 mx-auto",attrs:{"max-width":"200",type:"list-item"}})],1)],1)],1)},Q=[],X=a("8dd9"),Z=a("3129"),tt={},et=Object(h["a"])(tt,K,Q,!1,null,null,null),at=et.exports;function st(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);e&&(s=s.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,s)}return a}function rt(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?st(a,!0).forEach((function(e){Object(n["a"])(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):st(a).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}v()(et,{VCard:G["a"],VCol:y["a"],VContainer:b["a"],VRow:V["a"],VSheet:X["a"],VSkeletonLoader:Z["a"]});var it={components:{appFirst:D,appSearch:z,appCategory:W,appPortfolioReuse:q["a"],appHomeLoading:at},data:function(){return{showFilter:!0,categories:[],loading:!0,overlay:!1,animateOut:!1}},computed:rt({},Object(l["c"])(["portfolios","pagination","categoryId","catePaginate"])),methods:rt({},Object(l["b"])(["fetchPortfolios","filterCategory"]),{},Object(l["d"])(["PushPORTFOLIO"]),{fetchPort:function(){var t=Object(i["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.fetchPortfolios(this.pagination.page);case 2:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),filterCate:function(){var t=Object(i["a"])(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(this.overlay=!0,"all"!==this.categoryId){t.next=6;break}return t.next=4,this.fetchPortfolios(e);case 4:t.next=8;break;case 6:return t.next=8,this.filterCategory(e);case 8:this.overlay=!1;case 9:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}(),fetchCategories:function(){var t=Object(i["a"])(regeneratorRuntime.mark((function t(){var e,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,this.$axios.get("category/getall");case 3:e=t.sent,a=e.data.categories,a.unshift({name:"ທັງໝົດ",_id:"all"}),this.categories=a,t.next=12;break;case 9:throw t.prev=9,t.t0=t["catch"](0),t.t0;case 12:case"end":return t.stop()}}),t,this,[[0,9]])})));function e(){return t.apply(this,arguments)}return e}()}),created:function(){var t=Object(i["a"])(regeneratorRuntime.mark((function t(){var e,a=this;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(e=this.$route.query.by_category,e){t.next=4;break}return t.next=4,this.fetchPortfolios(1);case 4:if(!e){t.next=8;break}return this.$store.commit("SetCATEGORY",e),t.next=8,this.filterCategory(1);case 8:return t.next=10,this.fetchCategories();case 10:setTimeout((function(){a.loading=!1}),200);case 11:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),mounted:function(){var t=this;this.$io.on("postPortfolio",(function(){return t.fetchPortfolios(1)})),this.$io.on("updatePortfolio",(function(){return t.fetchPortfolios(1)})),this.$io.on("deletePortfolio",(function(){return t.fetchPortfolios(1)}))}},nt=it,ot=a("a797"),ct=Object(h["a"])(nt,s,r,!1,null,null,null);e["default"]=ct.exports;v()(ct,{VContainer:b["a"],VOverlay:ot["a"],VProgressCircular:J["a"]})},c499:function(t,e,a){},e61f:function(t,e,a){"use strict";var s=a("173c"),r=a.n(s);r.a},e8f2:function(t,e,a){"use strict";a.d(e,"a",(function(){return r}));var s=a("2b0e");function r(t){return s["a"].extend({name:`v-${t}`,functional:!0,props:{id:String,tag:{type:String,default:"div"}},render(e,{props:a,data:s,children:r}){s.staticClass=`${t} ${s.staticClass||""}`.trim();const{attrs:i}=s;if(i){s.attrs={};const t=Object.keys(i).filter(t=>{if("slot"===t)return!1;const e=i[t];return t.startsWith("data-")?(s.attrs[t]=e,!1):e||"string"===typeof e});t.length&&(s.staticClass+=` ${t.join(" ")}`)}return a.id&&(s.domProps=s.domProps||{},s.domProps.id=a.id),e(a.tag,s,r)}})}},fa0c:function(t,e,a){"use strict";var s=a("7fcb"),r=a.n(s);r.a}}]);
//# sourceMappingURL=chunk-1891d49c.78e3ff17.js.map