(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7d5d224e"],{"413e":function(t,e,r){"use strict";var a=r("5b2a"),i=r.n(a);i.a},"5b2a":function(t,e,r){},"6fa4":function(t,e,r){"use strict";r.r(e);var a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-row",{staticClass:"mb-2",attrs:{"no-gutters":""}},[r("v-col",{staticClass:"mx-auto",attrs:{tile:!!t.$vuetify.breakpoint.smAndDown,cols:"12",xs:"12",sm:"12",md:"8",lg:"8"}},[r("v-breadcrumbs",{attrs:{items:t.items},scopedSlots:t._u([{key:"divider",fn:function(){return[r("v-icon",[t._v("mdi-chevron-right")])]},proxy:!0}])}),r("v-card",{attrs:{outlined:""}},[r("v-card-title",{staticClass:"__card-title justify-center"},[r("p",[t._v(" ອັບເດດ Portfolio")])]),r("v-divider"),r("v-col",{staticClass:" mx-auto",attrs:{cols:"12",xs:"12",md:"10",lg:"10"}},[r("ValidationObserver",{ref:"observer",attrs:{slim:""},scopedSlots:t._u([{key:"default",fn:function(e){e.invalid;return[r("v-form",{staticClass:"text-center",on:{submit:function(e){return e.preventDefault(),t.updatePortfolio(e)}}},[r("h2",{staticClass:"font-weight-bold"},[t._v("ຂໍ້ມູນຂອງ Portfolio")]),r("div",{staticClass:"uploader mb-5",class:{dragging:t.isDragging},on:{dragenter:t.OnDragEnter,dragleave:t.OnDragLeave,dragover:function(t){t.preventDefault()},drop:t.onDrop}},[r("i",{staticClass:"fas fa-cloud-upload-alt fa-3x"}),r("p",[t._v("ລາກຮູບມາໄວ້ບ່ອນນີ້...")]),r("div",[t._v("ຫຼື")]),r("div",{staticClass:"file-input"},[r("label",{attrs:{for:"file"}},[t._v("ເລືອກຮູບ")]),r("input",{attrs:{type:"file",id:"file",multiple:""},on:{change:t.onInputChange}})]),r("v-row",[t._l(t.imgs,(function(e,a){return r("v-col",{key:a,attrs:{cols:"4",xs:"4",sm:"4",md:"3",lg:"3"}},[r("v-img",{staticClass:"text-right",attrs:{contain:"",height:"90",src:t.$server+e,"lazy-src":t.$server+e}},[r("i",{staticClass:"fas fa-backspace mr-1 red--text i",on:{click:function(r){return t.spliceImgs(e,a)}}})]),r("div",{staticClass:"detail"})],1)})),t._l(t.images,(function(e,a){return r("v-col",{key:a,attrs:{cols:"4",xs:"4",sm:"4",md:"3",lg:"3"}},[r("v-img",{staticClass:"text-right",attrs:{contain:"",height:"90",src:e,"lazy-src":t.$server+e}},[r("i",{staticClass:"fas fa-backspace mr-1 red--text i",on:{click:function(e){return t.spliceImages(a)}}})]),r("div",{staticClass:"detail"})],1)}))],2)],1),r("ValidationProvider",{attrs:{mode:"lazy",name:"ຫົວຂໍ້",rules:"required|between: 4, 50"},scopedSlots:t._u([{key:"default",fn:function(e){var a=e.errors;return[r("v-text-field",{attrs:{label:"ຫົວຂໍ້",outlined:"",clearable:"","error-messages":a},model:{value:t.portfolio.title,callback:function(e){t.$set(t.portfolio,"title",e)},expression:"portfolio.title"}})]}}],null,!0)}),r("ValidationProvider",{attrs:{mode:"lazy",name:"ລາຍລະອຽດ",rules:"required|between: 10, 2000"},scopedSlots:t._u([{key:"default",fn:function(e){var a=e.errors;return[r("ckeditor",{attrs:{editor:t.editor},model:{value:t.portfolio.description,callback:function(e){t.$set(t.portfolio,"description",e)},expression:"portfolio.description"}}),a?r("p",{staticClass:"error--text"},[t._v(t._s(a[0]))]):t._e()]}}],null,!0)}),r("ValidationProvider",{attrs:{mode:"lazy",name:"ປະເພດ",rules:"required"},scopedSlots:t._u([{key:"default",fn:function(e){var a=e.errors;return[r("v-select",{attrs:{items:t.categories,"item-text":"name","item-value":"_id","menu-props":{top:!0,offsetY:!0},label:"ປະເພດ",outlined:"","error-messages":a},model:{value:t.portfolio.categoryId._id,callback:function(e){t.$set(t.portfolio.categoryId,"_id",e)},expression:"portfolio.categoryId._id"}})]}}],null,!0)}),r("v-btn",{staticClass:"v-size--x-large success",attrs:{type:"submit"}},[t._v(" ອັບເດດ Portfolio ")])],1)]}}])})],1)],1),r("v-overlay",{attrs:{value:t.overlay}},[r("v-progress-circular",{attrs:{color:"primary",indeterminate:"",size:"70"}})],1)],1)],1)},i=[],s=(r("a4d3"),r("e01a"),r("4de4"),r("4160"),r("a630"),r("a434"),r("e439"),r("dbb4"),r("b64b"),r("ac1f"),r("3ca3"),r("466d"),r("159b"),r("96cf"),r("89ba")),o=r("2fa7"),n=r("2f62"),c=r("7bb1"),l=r("4c93"),u=r("2b0e"),d=r("3730"),f=r.n(d),p=r("fb3d"),m=r.n(p);function g(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,a)}return r}function h(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?g(r,!0).forEach((function(e){Object(o["a"])(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):g(r).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}u["a"].use(f.a),Object(c["c"])("required",h({},l["c"],{message:"ກະລຸນາປ້ອນຂໍ້ມູນໃນ {_field_}"})),Object(c["c"])("between",{validate:function(t,e){var r=e.min,a=e.max,i=t&&t.length;return i>=r&&i<=a},params:["min","max"],message:"ຂໍ້ມູນ {_field_} ຕ້ອງມີຄວາມຍາວລະຫວ່າງ {min} ຫາ {max} ຕົວອັກສອນ"});var v={components:{ValidationProvider:c["b"],ValidationObserver:c["a"]},data:function(){return{editor:m.a,portfolio:{title:"",description:"",categoryId:""},categories:[],imgs:[],imgPath:[],files:[],images:[],isDragging:!1,dragCount:0,items:[{text:"Dashboard",to:{name:"Dashboard"},exact:!0},{text:"Post portfolio"}],overlay:!1}},computed:h({},Object(n["c"])(["auth"])),methods:{OnDragEnter:function(t){t.preventDefault(),this.dragCount++,this.isDragging=!0},OnDragLeave:function(t){t.preventDefault(),this.dragCount--,this.dragCount<=0&&(this.isDragging=!1)},onInputChange:function(t){var e=this,r=t.target.files;Array.from(r).forEach((function(t){return e.addImage(t)}))},onDrop:function(t){var e=this;t.preventDefault(),t.stopPropagation();var r=t.dataTransfer.files;Array.from(r).forEach((function(t){return e.addImage(t)}))},addImage:function(t){var e=this;if(t.type.match("image.*")){this.files.push(t);var r=new FileReader;r.onload=function(t){return e.images.push(t.target.result)},r.readAsDataURL(t)}else this.$swal({title:"File ຕ້ອງເປັນຮູບພາບ",type:"error",toast:!0,position:"top-end",showConfirmButton:!1,timer:2e3})},fetchOne:function(){var t=Object(s["a"])(regeneratorRuntime.mark((function t(){var e,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$axios.get("portfolio/getone",{params:{_id:this.$route.params.id}});case 2:e=t.sent,r=e.data.portfolio,this.portfolio=r,this.imgs=r.images;case 6:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),fetchCategories:function(){var t=Object(s["a"])(regeneratorRuntime.mark((function t(){var e,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$axios.get("category/getall");case 2:e=t.sent,r=e.data.categories,this.categories=r;case 5:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),updatePortfolio:function(){var t=Object(s["a"])(regeneratorRuntime.mark((function t(){var e,r,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,this.$refs.observer.validate();case 3:if(e=t.sent,!e){t.next=20;break}return this.overlay=!0,r=new FormData,a=this.portfolio,r.append("title",a.title),r.append("description",a.description),r.append("categoryId",a.categoryId._id),this.imgs.forEach((function(t){r.append("images[]",t)})),this.imgPath.forEach((function(t){r.append("imgPath[]",t)})),this.files.forEach((function(t){r.append("images",t)})),t.next=16,this.$axios.put("portfolio/update",r,{params:{_id:this.$route.params.id}});case 16:this.overlay=!1,this.$router.push({name:"Dashboard"}),this.$swal({title:"ອັບເດດ Portfolio ແລ້ວ",type:"success",toast:!0,position:"top-end",showConfirmButton:!1,timer:2e3}),this.$io.emit("updatePortfolio",this.portfolio._id);case 20:t.next=25;break;case 22:throw t.prev=22,t.t0=t["catch"](0),t.t0;case 25:case"end":return t.stop()}}),t,this,[[0,22]])})));function e(){return t.apply(this,arguments)}return e}(),spliceImgs:function(t,e){var r=this.imgs.length+this.images.length;r>1?(this.imgPath.push(t),this.imgs.splice(e,1)):this.$swal({title:"ກະລຸນາເພີ່ມຮູບໃໝ່ກ່ອນ ຈຶ່ງຈະສາມາດລົບຮູບນີ້ໄດ້",type:"error",toast:!0,position:"top-end",showConfirmButton:!1,timer:2e3})},spliceImages:function(t){var e=this.imgs.length+this.images.length;e>1?(this.files.splice(t,1),this.images.splice(t,1)):this.$swal({title:"ກະລຸນາເພີ່ມຮູບໃໝ່ກ່ອນ ຈຶ່ງຈະສາມາດລົບຮູບນີ້ໄດ້",type:"error",toast:!0,position:"top-end",showConfirmButton:!1,timer:2e3})}},created:function(){this.fetchOne(),this.fetchCategories()}},b=v,y=(r("413e"),r("2877")),w=r("6544"),x=r.n(w),C=r("2bc5"),_=r("8336"),O=r("b0af"),D=r("99d9"),P=r("62ad"),k=r("ce7e"),V=r("4bd4"),$=r("132d"),j=r("adda"),I=r("a797"),E=r("490a"),R=r("0fd9"),S=r("b974"),z=r("8654"),B=Object(y["a"])(b,a,i,!1,null,"b4ed6362",null);e["default"]=B.exports;x()(B,{VBreadcrumbs:C["a"],VBtn:_["a"],VCard:O["a"],VCardTitle:D["c"],VCol:P["a"],VDivider:k["a"],VForm:V["a"],VIcon:$["a"],VImg:j["a"],VOverlay:I["a"],VProgressCircular:E["a"],VRow:R["a"],VSelect:S["a"],VTextField:z["a"]})}}]);
//# sourceMappingURL=chunk-7d5d224e.461a05e2.js.map