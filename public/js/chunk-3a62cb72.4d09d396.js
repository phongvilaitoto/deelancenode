(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3a62cb72"],{"1f09":function(t,e,a){},"78c1":function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-sheet",{staticClass:"px-3 pt-3 pb-3"},[a("v-skeleton-loader",{staticClass:"mx-auto",attrs:{"max-width":"300",type:"card"}})],1)},s=[],n=a("2877"),r=a("6544"),l=a.n(r),o=a("8dd9"),d=(a("1f09"),a("c995")),h=a("24b2"),p=a("7560"),c=a("58df"),g=a("80d2"),u=Object(c["a"])(d["a"],h["a"],p["a"]).extend({name:"VSkeletonLoader",props:{boilerplate:Boolean,loading:Boolean,tile:Boolean,transition:String,type:String,types:{type:Object,default:()=>({})}},computed:{attrs(){return this.isLoading?this.boilerplate?{}:{"aria-busy":!0,"aria-live":"polite",role:"alert",...this.$attrs}:this.$attrs},classes(){return{"v-skeleton-loader--boilerplate":this.boilerplate,"v-skeleton-loader--is-loading":this.isLoading,"v-skeleton-loader--tile":this.tile,...this.themeClasses,...this.elevationClasses}},isLoading(){return Boolean(!Object(g["p"])(this)||this.loading)},rootTypes(){return{actions:"button@2",article:"heading, paragraph",avatar:"avatar",button:"button",card:"image, card-heading","card-avatar":"image, list-item-avatar","card-heading":"heading",chip:"chip","date-picker":"list-item, card-heading, divider, date-picker-options, date-picker-days, actions","date-picker-options":"text, avatar@2","date-picker-days":"avatar@28",heading:"heading",image:"image","list-item":"text","list-item-avatar":"avatar, text","list-item-two-line":"sentences","list-item-avatar-two-line":"avatar, sentences","list-item-three-line":"paragraph","list-item-avatar-three-line":"avatar, paragraph",paragraph:"text@3",sentences:"text@2",table:"table-heading, table-thead, table-tbody, table-tfoot","table-heading":"heading, text","table-thead":"heading@6","table-tbody":"table-row-divider@6","table-row-divider":"table-row, divider","table-row":"table-cell@6","table-cell":"text","table-tfoot":"text@2, avatar@2",text:"text",...this.types}}},methods:{genBone(t,e){return this.$createElement("div",{staticClass:`v-skeleton-loader__${t} v-skeleton-loader__bone`},e)},genBones(t){const[e,a]=t.split("@"),i=()=>this.genStructure(e);return Array.from({length:a}).map(i)},genStructure(t){let e=[];t=t||this.type||"";const a=this.rootTypes[t]||"";if(t===a);else{if(t.indexOf(",")>-1)return this.mapBones(t);if(t.indexOf("@")>-1)return this.genBones(t);a.indexOf(",")>-1?e=this.mapBones(a):a.indexOf("@")>-1?e=this.genBones(a):a&&e.push(this.genStructure(a))}return[this.genBone(t,e)]},genSkeleton(){const t=[],e=Object(g["p"])(this);return this.isLoading?t.push(this.genStructure()):t.push(e),this.transition?this.$createElement("transition",{props:{name:this.transition},on:{enter:t=>{this.isLoading&&(t.style.transition="none")},beforeLeave:t=>{t.style.display="none"}}},t):t},mapBones(t){return t.replace(/\s/g,"").split(",").map(this.genStructure)}},render(t){return t("div",{staticClass:"v-skeleton-loader",attrs:this.attrs,on:this.$listeners,class:this.classes,style:this.isLoading?this.measurableStyles:void 0},[this.genSkeleton()])}}),b={},v=Object(n["a"])(b,i,s,!1,null,null,null);e["default"]=v.exports;l()(v,{VSheet:o["a"],VSkeletonLoader:u})}}]);
//# sourceMappingURL=chunk-3a62cb72.4d09d396.js.map