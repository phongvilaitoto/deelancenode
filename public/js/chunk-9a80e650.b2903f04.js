(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-9a80e650"],{"1b27":function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t._m(0),a("app-category",{attrs:{loading:t.loading,categories:t.categories}})],1)},s=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"text-center mt-2 mb-4"},[a("span",{staticClass:"main-color",staticStyle:{"font-size":"20px"}},[t._v("ເລືອກປະເພດວຽກທີ່ຕ້ອງການ")])])}],n=(a("96cf"),a("89ba")),i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"mx-auto"},[t.loading?a("app-category-index-loader"):a("v-row",{attrs:{dense:""}},t._l(t.categories,(function(e){return a("v-col",{key:e.index,attrs:{cols:"4",xs:"4",sm:"2",md:"2",lg:"2"}},[a("v-card",{staticClass:"mx-auto v-card--hover",attrs:{to:{name:"CategoryFocus",params:{id:e._id,name:e.name}},outlined:"",width:"90",height:"90"}},[a("div",{staticClass:"pa-2"},[a("v-img",{attrs:{src:t.$server+e.image,"lazy-src":t.$server+e.image},scopedSlots:t._u([{key:"placeholder",fn:function(){return[a("v-row",{staticClass:"fill-height",attrs:{align:"center",justify:"center"}},[a("v-progress-circular",{attrs:{indeterminate:"",color:"primary"}})],1)]},proxy:!0}],null,!0)})],1)]),a("div",{staticClass:"text-center"},[a("span",{staticStyle:{"font-size":"13px"}},[t._v(t._s(e.name))])])],1)})),1)],1)},o=[],l=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-row",{attrs:{dense:""}},t._l(16,(function(t){return a("v-col",{key:t.index,attrs:{cols:"4",xs:"4",sm:"2",md:"2",lg:"2"}},[a("v-card",{staticClass:"mx-auto",attrs:{outlined:"",width:"90",height:"90"}},[a("div",{staticClass:"pa-2"},[a("v-skeleton-loader",{attrs:{height:"73",toto:t,type:"card"}})],1)]),a("v-skeleton-loader",{staticClass:"mt-2 mx-auto",attrs:{width:"90",type:"text"}})],1)})),1)},c=[],d=a("2877"),u=a("6544"),p=a.n(u),g=a("b0af"),h=a("62ad"),f=a("0fd9"),m=a("3129"),v={},b=Object(d["a"])(v,l,c,!1,null,null,null),y=b.exports;p()(b,{VCard:g["a"],VCol:h["a"],VRow:f["a"],VSkeletonLoader:m["a"]});var x={components:{appCategoryIndexLoader:y},props:["categories","loading"]},S=x,k=a("adda"),w=a("490a"),C=Object(d["a"])(S,i,o,!1,null,null,null),$=C.exports;p()(C,{VCard:g["a"],VCol:h["a"],VImg:k["a"],VProgressCircular:w["a"],VRow:f["a"]});var _={components:{appCategory:$},data:function(){return{categories:[],loading:!1}},methods:{fetchCategories:function(){var t=Object(n["a"])(regeneratorRuntime.mark((function t(){var e,a=this;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return this.loading=!0,t.next=3,this.$axios.get("category/getall");case 3:e=t.sent,this.categories=e.data.categories,setTimeout((function(){a.loading=!1}),200);case 6:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()},created:function(){this.fetchCategories()}},j=_,O=Object(d["a"])(j,r,s,!1,null,"153199e8",null);e["default"]=O.exports},"1f09":function(t,e,a){},3129:function(t,e,a){"use strict";a("1f09");var r=a("c995"),s=a("24b2"),n=a("7560"),i=a("58df"),o=a("80d2");e["a"]=Object(i["a"])(r["a"],s["a"],n["a"]).extend({name:"VSkeletonLoader",props:{boilerplate:Boolean,loading:Boolean,tile:Boolean,transition:String,type:String,types:{type:Object,default:()=>({})}},computed:{attrs(){return this.isLoading?this.boilerplate?{}:{"aria-busy":!0,"aria-live":"polite",role:"alert",...this.$attrs}:this.$attrs},classes(){return{"v-skeleton-loader--boilerplate":this.boilerplate,"v-skeleton-loader--is-loading":this.isLoading,"v-skeleton-loader--tile":this.tile,...this.themeClasses,...this.elevationClasses}},isLoading(){return Boolean(!Object(o["p"])(this)||this.loading)},rootTypes(){return{actions:"button@2",article:"heading, paragraph",avatar:"avatar",button:"button",card:"image, card-heading","card-avatar":"image, list-item-avatar","card-heading":"heading",chip:"chip","date-picker":"list-item, card-heading, divider, date-picker-options, date-picker-days, actions","date-picker-options":"text, avatar@2","date-picker-days":"avatar@28",heading:"heading",image:"image","list-item":"text","list-item-avatar":"avatar, text","list-item-two-line":"sentences","list-item-avatar-two-line":"avatar, sentences","list-item-three-line":"paragraph","list-item-avatar-three-line":"avatar, paragraph",paragraph:"text@3",sentences:"text@2",table:"table-heading, table-thead, table-tbody, table-tfoot","table-heading":"heading, text","table-thead":"heading@6","table-tbody":"table-row-divider@6","table-row-divider":"table-row, divider","table-row":"table-cell@6","table-cell":"text","table-tfoot":"text@2, avatar@2",text:"text",...this.types}}},methods:{genBone(t,e){return this.$createElement("div",{staticClass:`v-skeleton-loader__${t} v-skeleton-loader__bone`},e)},genBones(t){const[e,a]=t.split("@"),r=()=>this.genStructure(e);return Array.from({length:a}).map(r)},genStructure(t){let e=[];t=t||this.type||"";const a=this.rootTypes[t]||"";if(t===a);else{if(t.indexOf(",")>-1)return this.mapBones(t);if(t.indexOf("@")>-1)return this.genBones(t);a.indexOf(",")>-1?e=this.mapBones(a):a.indexOf("@")>-1?e=this.genBones(a):a&&e.push(this.genStructure(a))}return[this.genBone(t,e)]},genSkeleton(){const t=[],e=Object(o["p"])(this);return this.isLoading?t.push(this.genStructure()):t.push(e),this.transition?this.$createElement("transition",{props:{name:this.transition},on:{enter:t=>{this.isLoading&&(t.style.transition="none")},beforeLeave:t=>{t.style.display="none"}}},t):t},mapBones(t){return t.replace(/\s/g,"").split(",").map(this.genStructure)}},render(t){return t("div",{staticClass:"v-skeleton-loader",attrs:this.attrs,on:this.$listeners,class:this.classes,style:this.isLoading?this.measurableStyles:void 0},[this.genSkeleton()])}})},"62ad":function(t,e,a){"use strict";a("4b85");var r=a("2b0e"),s=a("d9f7"),n=a("80d2");const i=["sm","md","lg","xl"],o=(()=>{return i.reduce((t,e)=>{return t[e]={type:[Boolean,String,Number],default:!1},t},{})})(),l=(()=>{return i.reduce((t,e)=>{return t["offset"+Object(n["x"])(e)]={type:[String,Number],default:null},t},{})})(),c=(()=>{return i.reduce((t,e)=>{return t["order"+Object(n["x"])(e)]={type:[String,Number],default:null},t},{})})(),d={col:Object.keys(o),offset:Object.keys(l),order:Object.keys(c)};function u(t,e,a){let r=t;if(null!=a&&!1!==a){if(e){const a=e.replace(t,"");r+=`-${a}`}return"col"!==t||""!==a&&!0!==a?(r+=`-${a}`,r.toLowerCase()):r.toLowerCase()}}const p=new Map;e["a"]=r["a"].extend({name:"v-col",functional:!0,props:{cols:{type:[Boolean,String,Number],default:!1},...o,offset:{type:[String,Number],default:null},...l,order:{type:[String,Number],default:null},...c,alignSelf:{type:String,default:null,validator:t=>["auto","start","end","center","baseline","stretch"].includes(t)},justifySelf:{type:String,default:null,validator:t=>["auto","start","end","center","baseline","stretch"].includes(t)},tag:{type:String,default:"div"}},render(t,{props:e,data:a,children:r,parent:n}){let i="";for(const s in e)i+=String(e[s]);let o=p.get(i);if(!o){let t;for(t in o=[],d)d[t].forEach(a=>{const r=e[a],s=u(t,a,r);s&&o.push(s)});const a=o.some(t=>t.startsWith("col-"));o.push({col:!a||!e.cols,[`col-${e.cols}`]:e.cols,[`offset-${e.offset}`]:e.offset,[`order-${e.order}`]:e.order,[`align-self-${e.alignSelf}`]:e.alignSelf,[`justify-self-${e.justifySelf}`]:e.justifySelf}),p.set(i,o)}return t(e.tag,Object(s["a"])(a,{class:o}),r)}})}}]);
//# sourceMappingURL=chunk-9a80e650.b2903f04.js.map