(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3ba3efdc"],{1724:function(e,t,n){"use strict";var r=n("f824"),a=n.n(r);a.a},"2d93":function(e,t,n){},"4b77":function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"mx-auto my-1",staticStyle:{"max-width":"960px"}},[n("v-row",{attrs:{justify:"center","no-gutters":""}},[n("v-col",{attrs:{cols:"12",xs:"12",sm:"12",md:"6",lg:"6"}},[n("v-card",{staticClass:"text-center mt-10 pb-2 mx-auto",attrs:{outlined:"",tile:!!e.$vuetify.breakpoint.smAndDown}},[n("h2",{staticClass:"pt-5 mb-3"},[e._v("ສະໝັກສະມາຊິກ")]),n("v-row",{attrs:{"no-gutters":"",justify:"center"}},[n("v-col",{staticClass:"mb-5",attrs:{cols:"11",xs:"11",sm:"11",md:"10",lg:"10"}},[n("div",{staticClass:"customGPlusSignIn ",staticStyle:{width:"100%"},attrs:{id:"customBtn"},on:{click:e.google}},[n("span",{staticClass:"icon"}),n("span",{staticClass:"buttonText"},[e._v("ເຂົ້າສູ່ລະບົບດ້ວຍ Google")])])]),n("v-col",{staticClass:"mb-5",attrs:{cols:"11",xs:"11",sm:"11",md:"10",lg:"10"}},[n("a",{directives:[{name:"facebook-signin-button",rawName:"v-facebook-signin-button",value:e.appId,expression:"appId"}],staticClass:"fb connect ",staticStyle:{width:"100%"},on:{click:e.OnFacebookAuthSuccess}},[e._v("ເຂົ້າສູ່ລະບົບດ້ວຍ Facebook")])]),n("v-col",{attrs:{cols:"11",xs:"11",sm:"11",md:"10",lg:"10"}},[n("h3",{staticClass:"my-3"},[e._v("ຫຼື")]),n("validation-observer",{ref:"observer",attrs:{slim:""},scopedSlots:e._u([{key:"default",fn:function(t){t.invalid;return[n("v-form",{staticClass:"text-center",on:{submit:function(t){return t.preventDefault(),e.signUp(t)}}},[n("ValidationProvider",{attrs:{mode:"lazy",name:"username",rules:"required|between:4,15|unique"},scopedSlots:e._u([{key:"default",fn:function(t){var r=t.errors;return[n("v-text-field",{attrs:{counter:"15","prepend-inner-icon":"face",color:"info",label:"ຊື່ຜູ້ໃຊ້",outlined:"",type:"text",clearable:"","error-messages":r},model:{value:e.username,callback:function(t){e.username=t},expression:"username"}})]}}],null,!0)}),n("ValidationProvider",{attrs:{mode:"lazy",name:"email",rules:"required|email|between:5,30|unique"},scopedSlots:e._u([{key:"default",fn:function(t){var r=t.errors;return[n("v-text-field",{attrs:{counter:"30","prepend-inner-icon":"email",color:"info",label:"ອີເມວ",outlined:"",type:"email",clearable:"","error-messages":r},model:{value:e.email,callback:function(t){e.email=t},expression:"email"}})]}}],null,!0)}),n("ValidationProvider",{attrs:{mode:"lazy",name:"password",rules:"required|between: 6, 20"},scopedSlots:e._u([{key:"default",fn:function(t){var r=t.errors;return[n("v-text-field",{attrs:{counter:"20","prepend-inner-icon":"lock",label:"ລະຫັດຜ່ານ",outlined:"",type:"password",clearable:"","error-messages":r},model:{value:e.password,callback:function(t){e.password=t},expression:"password"}})]}}],null,!0)}),n("ValidationProvider",{attrs:{name:"confirmed password",mode:"eager",rules:"required|confirmed:password"},scopedSlots:e._u([{key:"default",fn:function(t){var r=t.errors;return[n("v-text-field",{attrs:{counter:"20","prepend-inner-icon":"lock",label:"ຢືນຢັນລະຫັດຜ່ານ",outlined:"",type:"password",clearable:"","error-messages":r},model:{value:e.confirmation,callback:function(t){e.confirmation=t},expression:"confirmation"}})]}}],null,!0)}),n("v-btn",{staticClass:"primary",attrs:{type:"submit",block:"",large:""}},[e._v("ສະໝັກສະມາຊິກ")])],1)]}}])})],1)],1),n("div",[n("p",{staticClass:"mt-5"},[e._v("ມີບັນຊີຜູ້ໃຊ້ແລ້ວ ? "),n("router-link",{staticStyle:{"text-decoration":"none"},attrs:{to:{name:"SignIn"}}},[e._v("ລົງທະບຽນ ")])],1)])],1)],1)],1),n("v-overlay",{attrs:{value:e.overlay}},[n("v-progress-circular",{attrs:{color:"primary",indeterminate:"",size:"98"}})],1)],1)},a=[],o=(n("a4d3"),n("4de4"),n("4160"),n("e439"),n("dbb4"),n("b64b"),n("159b"),n("2fa7")),s=(n("96cf"),n("89ba")),i=n("bc3a"),c=n.n(i),u=n("7bb1"),l=n("4c93"),d=n("6c43"),p=n("2f62");function m(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function f(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?m(n,!0).forEach((function(t){Object(o["a"])(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):m(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}Object(u["c"])("unique",{validate:function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(t){var n,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,c.a.post("auth/unique",{value:t});case 2:if(n=e.sent,r=n.data,!r.valid){e.next=6;break}return e.abrupt("return",!0);case 6:return e.abrupt("return",{valid:!1});case 7:case"end":return e.stop()}}),e)})));function t(t){return e.apply(this,arguments)}return t}(),message:"{_field_} ນີ້ມີຄົນໃຊ້ແລ້ວ"}),Object(u["c"])("required",f({},l["c"],{message:"ກະລຸນາປ້ອນຂໍ້ມູນໃນ {_field_}"})),Object(u["c"])("email",f({},l["b"],{message:"ຂໍ້ມູນຕ້ອງເປັນ {_field_}"})),Object(u["c"])("confirmed",f({},l["a"],{message:"ລະຫັດຜ່ານບໍ່ຕົງກັນ"})),Object(u["c"])("between",{validate:function(e,t){var n=t.min,r=t.max,a=e&&e.length;return a>=n&&a<=r},params:["min","max"],message:"ຂໍ້ມູນ {_field_} ຕ້ອງມີຄວາມຍາວລະຫວ່າງ {min} ຫາ {max} ຕົວອັກສອນ"});var b={components:{ValidationProvider:u["b"],ValidationObserver:u["a"]},directives:{FacebookSignInButton:d["a"]},data:function(){return{appId:"520207398815072",username:"",email:"",password:"",confirmation:"",overlay:!1}},methods:f({},Object(p["b"])(["googleSignIn"]),{signUp:function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.$refs.observer.validate();case 2:if(t=e.sent,!t){e.next=10;break}return this.overlay=!0,e.next=7,this.$store.dispatch("signUp",{username:this.username,email:this.email,password:this.password});case 7:this.overlay=!1,this.$swal({title:"ສະໝັກສະມາຊິກສໍາເລັດ",type:"success",toast:!0,position:"top-end",showConfirmButton:!1,timer:3e3}),this.$router.push({name:"Home"});case 10:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),google:function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,this.overlay=!0,e.next=4,this.googleSignIn();case 4:this.overlay=!1,this.$swal({title:"ເຂົ້າສູ່ລະບົບຜ່ານທາງ Google ແລ້ວ",type:"success",toast:!0,position:"top-end",showConfirmButton:!1,timer:2e3}),this.$router.push({name:"Home"}),e.next=12;break;case 9:throw e.prev=9,e.t0=e["catch"](0),e.t0;case 12:case"end":return e.stop()}}),e,this,[[0,9]])})));function t(){return e.apply(this,arguments)}return t}(),OnFacebookAuthSuccess:function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(t){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,this.overlay=!0,e.next=4,t;case 4:return n=e.sent,e.next=7,this.$store.dispatch("facebookSignIn",n);case 7:this.overlay=!1,this.$swal({title:"ເຂົ້າສູ່ລະບົບຜ່ານທາງ Facebook ແລ້ວ",type:"success",toast:!0,position:"top-end",showConfirmButton:!1,timer:2e3}),this.$router.push({name:"Home"}),e.next=15;break;case 12:throw e.prev=12,e.t0=e["catch"](0),e.t0;case 15:case"end":return e.stop()}}),e,this,[[0,12]])})));function t(t){return e.apply(this,arguments)}return t}(),OnFacebookAuthFail:function(e){throw e}})},v=b,h=(n("1724"),n("9e7d"),n("2877")),g=n("6544"),w=n.n(g),y=n("8336"),k=n("b0af"),x=n("62ad"),O=n("4bd4"),j=n("a797"),S=n("490a"),_=n("0fd9"),F=n("8654"),C=Object(h["a"])(v,r,a,!1,null,"6e5f9392",null);t["default"]=C.exports;w()(C,{VBtn:y["a"],VCard:k["a"],VCol:x["a"],VForm:O["a"],VOverlay:j["a"],VProgressCircular:S["a"],VRow:_["a"],VTextField:F["a"]})},"6c43":function(e,t,n){"use strict";var r=n("2b0e");t["a"]=r["a"].directive("facebook-signin-button",{bind:function(e,t,n){u();let r=t.value,a=document.createElement("script");function o(){FB.init({appId:r,xfbml:!0,version:"v3.1"}),FB.logout()}function s(){FB.login((function(e){"connected"===e.status?i(e.authResponse.accessToken):c()}))}function i(e){n.context.OnFacebookAuthSuccess(e)}function c(){n.context.OnFacebookAuthFail("Facebook sign-in failed")}function u(){if(!n.context.OnFacebookAuthSuccess)throw new Error("The method OnFacebookAuthSuccess must be defined on the component");if(!n.context.OnFacebookAuthFail)throw new Error("The method OnFacebookAuthFail must be defined on the component")}a.setAttribute("src","//connect.facebook.net/en_US/sdk.js"),document.head.appendChild(a),a.onload=o,e.addEventListener("click",s)}})},"9e7d":function(e,t,n){"use strict";var r=n("2d93"),a=n.n(r);a.a},f824:function(e,t,n){}}]);
//# sourceMappingURL=chunk-3ba3efdc.a58dbb7c.js.map