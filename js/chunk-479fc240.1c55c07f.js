(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-479fc240"],{"1c4c":function(t,e,a){"use strict";var i=a("9b43"),n=a("5ca1"),r=a("4bf8"),o=a("1fa8"),s=a("33a4"),c=a("9def"),l=a("f1ae"),u=a("27ee");n(n.S+n.F*!a("5cc5")((function(t){Array.from(t)})),"Array",{from:function(t){var e,a,n,d,m=r(t),f="function"==typeof this?this:Array,p=arguments.length,g=p>1?arguments[1]:void 0,v=void 0!==g,b=0,h=u(m);if(v&&(g=i(g,p>2?arguments[2]:void 0,2)),void 0==h||f==Array&&s(h))for(e=c(m.length),a=new f(e);e>b;b++)l(a,b,v?g(m[b],b):m[b]);else for(d=h.call(m),a=new f;!(n=d.next()).done;b++)l(a,b,v?o(d,g,[n.value,b],!0):n.value);return a.length=b,a}})},"53ca":function(t,e,a){"use strict";function i(t){return i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},i(t)}a.d(e,"a",(function(){return i}))},"5df3":function(t,e,a){"use strict";var i=a("02f4")(!0);a("01f9")(String,"String",(function(t){this._t=String(t),this._i=0}),(function(){var t,e=this._t,a=this._i;return a>=e.length?{value:void 0,done:!0}:(t=i(e,a),this._i+=t.length,{value:t,done:!1})}))},"7f205":function(t,e,a){},d01d:function(t,e,a){"use strict";a("7f205")},f1be:function(t,e,a){"use strict";a.r(e);var i,n=function(){var t=this,e=t._self._c;return e("div",{staticClass:"main_cont"},[e("base-header",{staticClass:"pb-6 pb-8 pt-5 pt-md-8"}),e("b-container",{staticClass:"mt--7",attrs:{fluid:""}},[e("form",{on:{submit:function(e){return e.preventDefault(),t.createOz()}}},[e("b-row",{staticClass:"justify-content-center"},[e("b-col",{attrs:{lg:"12"}},[e("b-card",{staticClass:"p-5",attrs:{"no-body":""}},[e("b-tabs",[e("b-tab",{attrs:{"no-body":"",title:"O'zbekcha"}},[e("div",{staticClass:"form_mains"},[e("div",{staticClass:"inputs"},[e("div",[e("label",[t._v("Title")])]),e("div",[e("input",{directives:[{name:"model",rawName:"v-model",value:t.title,expression:"title"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:t.title},on:{input:function(e){e.target.composing||(t.title=e.target.value)}}})])])])]),e("b-tab",{attrs:{"no-body":"",title:"Rus"}},[e("div",{staticClass:"inputs"},[e("div",[e("label",[t._v("Title")])]),e("div",[e("input",{directives:[{name:"model",rawName:"v-model",value:t.titleru,expression:"titleru"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:t.titleru},on:{input:function(e){e.target.composing||(t.titleru=e.target.value)}}})])])]),e("b-tab",{attrs:{"no-body":"",title:"Qoraqalpoq"}},[e("div",{staticClass:"inputs"},[e("div",[e("label",[t._v("Title")])]),e("div",[e("input",{directives:[{name:"model",rawName:"v-model",value:t.titleen,expression:"titleen"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:t.titleen},on:{input:function(e){e.target.composing||(t.titleen=e.target.value)}}})])])])],1),e("div",{staticClass:"inputs"},[e("div",{staticClass:"text-center"},[e("button",{staticClass:"btn btn-primary"},[t._v("Qo'shish")])])])],1)],1)],1)],1)])],1)},r=[],o=(a("ac6a"),a("53ca")),s=(a("5df3"),a("1c4c"),a("ade3")),c=(a("5466"),a("450d"),a("ecdf")),l=a.n(c),u=(a("7f7f"),a("38a0"),a("ad41")),d=a.n(u),m=a("cee4"),f=a("b024"),p={name:"light-table",components:(i={},Object(s["a"])(i,d.a.name,d.a),Object(s["a"])(i,l.a.name,l.a),i),data:function(){return{menus:[],rows:1,perPage:1,currentPage:1,index:0,right_t:!1,data_main:[],title:"",titleru:"",titleen:"",order:"",isFooter:!1,url:"",isButton:!0,main_id:"",address:"",email_address:"",phone_number:"",telegram:"",instagram:"",facebook:"",contact:[],imageUrl:[],myImages:[],files_name:[],description:"",descriptionru:"",descriptionen:""}},methods:{trySubmitFile:function(t){for(var e=this,a=0;a<t.target.files.length;a++)this.files_name.push(t.target.files[a]);var i=Array.from(t.target.files);console.log(Object(o["a"])(i)),i.forEach((function(t){e.myImages.push(t);var a=new FileReader,i=e;a.onload=function(t){i.imageUrl.push(t.target.result)},a.readAsDataURL(t)}))},rigt_side:function(){this.right_t=!this.right_t,this.isButton=!1},updatePage:function(t){this.data_main=Users[t-1]},createOz:function(){var t=this,e=new FormData;e.append("title",this.title),m["a"].post("".concat(f["a"],"university-programs/"),e,{headers:{Authorization:"Bearer ".concat(localStorage.getItem("token")),"Accept-Language":"oz"}}).then((function(a){t.title="",t.description="",t.order="",t.myImages=[],t.$toast("Ma'lumotlar o'zbek tilida kiritildi",{timeout:2e3,type:"success"}),e.append("title",t.titleru),m["a"].patch("".concat(f["a"],"university-programs/").concat(a.data.id,"/"),e,{headers:{Authorization:"Bearer ".concat(localStorage.getItem("token")),"Accept-Language":"ru"}}).then((function(){t.titleru="",t.descriptionru="",t.order="",t.myImages=[],t.$toast("Ma'lumotlar rus tilida kiritildi",{timeout:2e3,type:"success"}),e.append("title",t.titleen),m["a"].patch("".concat(f["a"],"university-programs/").concat(a.data.id,"/"),e,{headers:{Authorization:"Bearer ".concat(localStorage.getItem("token")),"Accept-Language":"kar"}}).then((function(){t.titleen="",t.descriptionen="",t.order="",t.myImages=[],t.$toast("Ma'lumotlar barcha tillarda kiritildi",{timeout:2e3,type:"success"})}))}))}))}},mounted:function(){}},g=p,v=(a("d01d"),a("2877")),b=Object(v["a"])(g,n,r,!1,null,null,null);e["default"]=b.exports}}]);
//# sourceMappingURL=chunk-479fc240.1c55c07f.js.map