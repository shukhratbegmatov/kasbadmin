(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0cf06764"],{"1c4c":function(t,e,a){"use strict";var i=a("9b43"),n=a("5ca1"),o=a("4bf8"),r=a("1fa8"),s=a("33a4"),c=a("9def"),u=a("f1ae"),l=a("27ee");n(n.S+n.F*!a("5cc5")((function(t){Array.from(t)})),"Array",{from:function(t){var e,a,n,d,m=o(t),p="function"==typeof this?this:Array,f=arguments.length,g=f>1?arguments[1]:void 0,h=void 0!==g,v=0,b=l(m);if(h&&(g=i(g,f>2?arguments[2]:void 0,2)),void 0==b||p==Array&&s(b))for(e=c(m.length),a=new p(e);e>v;v++)u(a,v,h?g(m[v],v):m[v]);else for(d=b.call(m),a=new p;!(n=d.next()).done;v++)u(a,v,h?r(d,g,[n.value,v],!0):n.value);return a.length=v,a}})},"256c":function(t,e,a){"use strict";a("2749")},2749:function(t,e,a){},"53ca":function(t,e,a){"use strict";function i(t){return i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},i(t)}a.d(e,"a",(function(){return i}))},"5df3":function(t,e,a){"use strict";var i=a("02f4")(!0);a("01f9")(String,"String",(function(t){this._t=String(t),this._i=0}),(function(){var t,e=this._t,a=this._i;return a>=e.length?{value:void 0,done:!0}:(t=i(e,a),this._i+=t.length,{value:t,done:!1})}))},"776c":function(t,e,a){"use strict";a.r(e);var i,n=function(){var t=this,e=t._self._c;return e("div",{staticClass:"main_cont"},[e("base-header",{staticClass:"pb-6 pb-8 pt-5 pt-md-8"}),e("b-container",{staticClass:"mt--7",attrs:{fluid:""}},[e("form",{on:{submit:function(e){return e.preventDefault(),t.createOz()}}},[e("b-row",{staticClass:"justify-content-center"},[e("b-col",{attrs:{lg:"12"}},[e("b-card",{staticClass:"p-5",attrs:{"no-body":""}},[e("b-tabs",[e("b-tab",{attrs:{"no-body":"",title:"O'zbekcha"}},[e("div",{staticClass:"form_mains"},[e("div",{staticClass:"inputs"},[e("div",[e("label",[t._v("Sarlavha")])]),e("div",[e("input",{directives:[{name:"model",rawName:"v-model",value:t.title,expression:"title"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:t.title},on:{input:function(e){e.target.composing||(t.title=e.target.value)}}})])])])]),e("b-tab",{attrs:{"no-body":"",title:"Rus"}},[e("div",{staticClass:"inputs"},[e("div",[e("label",[t._v("Sarlavha")])]),e("div",[e("input",{directives:[{name:"model",rawName:"v-model",value:t.titleru,expression:"titleru"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:t.titleru},on:{input:function(e){e.target.composing||(t.titleru=e.target.value)}}})])])]),e("b-tab",{attrs:{"no-body":"",title:"Qoraqalpoq"}},[e("div",{staticClass:"inputs"},[e("div",[e("label",[t._v("Title")])]),e("div",[e("input",{directives:[{name:"model",rawName:"v-model",value:t.titleen,expression:"titleen"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:t.titleen},on:{input:function(e){e.target.composing||(t.titleen=e.target.value)}}})])])])],1),e("div",{staticClass:"inputs"},[e("div",{staticClass:"text-center"},[e("button",{staticClass:"btn btn-primary"},[t._v("O'zgartirish")])])])],1)],1)],1)],1)])],1)},o=[],r=(a("ac6a"),a("53ca")),s=(a("5df3"),a("1c4c"),a("ade3")),c=(a("5466"),a("450d"),a("ecdf")),u=a.n(c),l=(a("7f7f"),a("38a0"),a("ad41")),d=a.n(l),m=a("cee4"),p=a("b024"),f={name:"light-table",components:(i={},Object(s["a"])(i,d.a.name,d.a),Object(s["a"])(i,u.a.name,u.a),i),data:function(){return{menus:[],rows:1,perPage:1,currentPage:1,index:0,right_t:!1,data_main:[],title:"",titleru:"",titleen:"",order:"",isFooter:!1,url:"",isButton:!0,main_id:"",address:"",email_address:"",phone_number:"",telegram:"",instagram:"",facebook:"",contact:[],imageUrl:[],myImages:[],files_name:[],description:"",descriptionru:"",descriptionen:""}},methods:{trySubmitFile:function(t){for(var e=this,a=0;a<t.target.files.length;a++)this.files_name.push(t.target.files[a]);var i=Array.from(t.target.files);console.log(Object(r["a"])(i)),i.forEach((function(t){e.myImages.push(t);var a=new FileReader,i=e;a.onload=function(t){i.imageUrl.push(t.target.result)},a.readAsDataURL(t)}))},rigt_side:function(){this.right_t=!this.right_t,this.isButton=!1},updatePage:function(t){this.data_main=Users[t-1]},createOz:function(){var t=this,e=new FormData;e.append("title",this.title),m["a"].patch("".concat(p["a"],"countries/").concat(this.$route.params.id,"/"),e,{headers:{Authorization:"Bearer ".concat(localStorage.getItem("token")),"Accept-Language":"oz"}}).then((function(a){t.$toast("Ma'lumotlar o'zbek tilida kiritildi",{timeout:2e3,type:"success"}),e.append("title",t.titleru),m["a"].patch("".concat(p["a"],"countries/").concat(t.$route.params.id,"/"),e,{headers:{Authorization:"Bearer ".concat(localStorage.getItem("token")),"Accept-Language":"ru"}}).then((function(){t.$toast("Ma'lumotlar rus tilida kiritildi",{timeout:2e3,type:"success"}),e.append("title",t.titleen),m["a"].patch("".concat(p["a"],"countries/").concat(t.$route.params.id,"/"),e,{headers:{Authorization:"Bearer ".concat(localStorage.getItem("token")),"Accept-Language":"kar"}}).then((function(){t.$toast("Ma'lumotlar barcha tillarda kiritildi",{timeout:2e3,type:"success"})}))}))}))}},mounted:function(){var t=this;m["a"].get("".concat(p["a"],"countries/").concat(this.$route.params.id),{headers:{"Accept-Language":"oz"}}).then((function(e){t.menus=e.data,t.title=t.menus.title,t.description=t.menus.description,t.order=t.menus.order,t.url=t.menus.url,t.isFooter=t.menus.is_footer,console.log(e)})),m["a"].get("".concat(p["a"],"countries/").concat(this.$route.params.id),{headers:{"Accept-Language":"ru"}}).then((function(e){t.menus=e.data,t.descriptionru=t.menus.description,t.titleru=t.menus.title,console.log(e)})),m["a"].get("".concat(p["a"],"countries/").concat(this.$route.params.id),{headers:{"Accept-Language":"kar"}}).then((function(e){t.menus=e.data,t.descriptionen=t.menus.description,t.titleen=t.menus.title,console.log(e)}))}},g=f,h=(a("256c"),a("2877")),v=Object(h["a"])(g,n,o,!1,null,null,null);e["default"]=v.exports}}]);
//# sourceMappingURL=chunk-0cf06764.b123103f.js.map