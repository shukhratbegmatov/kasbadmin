(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2174c4c2"],{"126b":function(t,e,a){},"1c4c":function(t,e,a){"use strict";var i=a("9b43"),s=a("5ca1"),n=a("4bf8"),o=a("1fa8"),r=a("33a4"),c=a("9def"),l=a("f1ae"),u=a("27ee");s(s.S+s.F*!a("5cc5")((function(t){Array.from(t)})),"Array",{from:function(t){var e,a,s,f,m=n(t),d="function"==typeof this?this:Array,p=arguments.length,g=p>1?arguments[1]:void 0,h=void 0!==g,v=0,b=u(m);if(h&&(g=i(g,p>2?arguments[2]:void 0,2)),void 0==b||d==Array&&r(b))for(e=c(m.length),a=new d(e);e>v;v++)l(a,v,h?g(m[v],v):m[v]);else for(f=b.call(m),a=new d;!(s=f.next()).done;v++)l(a,v,h?o(f,g,[s.value,v],!0):s.value);return a.length=v,a}})},"53ca":function(t,e,a){"use strict";function i(t){return i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},i(t)}a.d(e,"a",(function(){return i}))},"5df3":function(t,e,a){"use strict";var i=a("02f4")(!0);a("01f9")(String,"String",(function(t){this._t=String(t),this._i=0}),(function(){var t,e=this._t,a=this._i;return a>=e.length?{value:void 0,done:!0}:(t=i(e,a),this._i+=t.length,{value:t,done:!1})}))},b862:function(t,e,a){"use strict";a.r(e);var i,s=function(){var t=this,e=t._self._c;return e("div",{staticClass:"main_cont"},[e("base-header",{staticClass:"pb-6 pb-8 pt-5 pt-md-8"}),e("b-container",{staticClass:"mt--7",attrs:{fluid:""}},[e("form",{on:{submit:function(e){return e.preventDefault(),t.createOz()}}},[e("b-row",{staticClass:"justify-content-center"},[e("b-col",{attrs:{lg:"8"}},[e("b-card",{staticClass:"p-5",attrs:{"no-body":""}},[e("b-tabs",[e("b-tab",{attrs:{"no-body":"",title:"O'zbekcha"}},[e("div",{staticClass:"form_mains"},[e("div",{staticClass:"inputs"},[e("div",[e("label",[t._v("Title")])]),e("div",[e("input",{directives:[{name:"model",rawName:"v-model",value:t.title,expression:"title"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:t.title},on:{input:function(e){e.target.composing||(t.title=e.target.value)}}})])])])]),e("b-tab",{attrs:{"no-body":"",title:"Rus"}},[e("div",{staticClass:"form_mains"},[e("div",{staticClass:"inputs"},[e("div",[e("label",[t._v("Title")])]),e("div",[e("input",{directives:[{name:"model",rawName:"v-model",value:t.titleru,expression:"titleru"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:t.titleru},on:{input:function(e){e.target.composing||(t.titleru=e.target.value)}}})])])])]),e("b-tab",{attrs:{"no-body":"",title:"Qoraqalpoq"}},[e("div",{staticClass:"form_mains"},[e("div",{staticClass:"inputs"},[e("div",[e("label",[t._v("Title")])]),e("div",[e("input",{directives:[{name:"model",rawName:"v-model",value:t.titleen,expression:"titleen"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:t.titleen},on:{input:function(e){e.target.composing||(t.titleen=e.target.value)}}})])])])])],1)],1)],1),e("b-col",{attrs:{lg:"4"}},[e("b-card",{staticClass:"p-5",attrs:{"no-body":""}},[e("div",{staticClass:"inputs edit"},[e("div",[e("label",[t._v("Kasb turlari")])]),e("b-form-select",{staticClass:"mt-3",attrs:{options:t.options1,size:"sm"},model:{value:t.selected1,callback:function(e){t.selected1=e},expression:"selected1"}})],1),e("div",{staticClass:"inputs"},[e("div",{staticClass:"text-center"},[e("button",{staticClass:"btn btn-primary"},[t._v("O'zgartirish")])])])])],1)],1)],1)])],1)},n=[],o=(a("ac6a"),a("53ca")),r=(a("5df3"),a("1c4c"),a("ade3")),c=(a("5466"),a("450d"),a("ecdf")),l=a.n(c),u=(a("7f7f"),a("38a0"),a("ad41")),f=a.n(u),m=a("cee4"),d=a("b024"),p={name:"light-table",components:(i={},Object(r["a"])(i,f.a.name,f.a),Object(r["a"])(i,l.a.name,l.a),i),data:function(){return{selected:[],options:[],is_negative:!1,is_positive:!1,selected1:[],options1:[],imageUrl:[],myImages:[],files_name:[],imageUrl1:[],myImages1:[],files_name1:[],imageUrl2:[],myImages2:[],files_name2:[],profession_aspects:"",profession_skills:"",profession_name:"",profession_type:"",min_salary:"",mid_salary:"",max_salary:"",workplace:"",working_condition:"",subject:"",practice:"",higher_education_info:"",about:"",title:"",profession_aspectsru:"",profession_skillsru:"",profession_nameru:"",profession_typeru:"",min_salaryru:"",mid_salaryru:"",max_salaryru:"",workplaceru:"",working_conditionru:"",subjectru:"",practiceru:"",higher_education_inforu:"",aboutru:"",titleru:"",order:"",profession_aspectsen:"",profession_skillsen:"",profession_nameen:"",profession_typeen:"",min_salaryen:"",mid_salaryen:"",max_salaryen:"",workplaceen:"",working_conditionen:"",subjecten:"",practiceen:"",higher_education_infoen:"",abouten:"",titleen:""}},methods:{trySubmitFile:function(t){var e=this;this.imageUrl=[],this.myImages=[];for(var a=0;a<t.target.files.length;a++)this.files_name.push(t.target.files[a]);var i=Array.from(t.target.files);console.log(Object(o["a"])(i)),i.forEach((function(t){e.myImages.push(t);var a=new FileReader,i=e;a.onload=function(t){i.imageUrl.push(t.target.result)},a.readAsDataURL(t)}))},trySubmitFile1:function(t){var e=this;this.imageUrl1=[],this.myImages1=[];for(var a=0;a<t.target.files.length;a++)this.files_name1.push(t.target.files[a]);var i=Array.from(t.target.files);console.log(Object(o["a"])(i)),i.forEach((function(t){e.myImages1.push(t);var a=new FileReader,i=e;a.onload=function(t){i.imageUrl1.push(t.target.result)},a.readAsDataURL(t)}))},trySubmitFile2:function(t){var e=this;this.imageUrl2=[],this.myImages2=[];for(var a=0;a<t.target.files.length;a++)this.files_name2.push(t.target.files[a]);var i=Array.from(t.target.files);console.log(Object(o["a"])(i)),i.forEach((function(t){e.myImages2.push(t);var a=new FileReader,i=e;a.onload=function(t){i.imageUrl2.push(t.target.result)},a.readAsDataURL(t)}))},rigt_side:function(){this.right_t=!this.right_t,this.isButton=!1},updatePage:function(t){this.data_main=Users[t-1]},createOz:function(){var t=this,e=new FormData;m["a"].patch("".concat(d["a"],"skills/").concat(this.$route.params.id,"/"),{content:this.title,profession:this.selected1},{headers:{Authorization:"Bearer ".concat(localStorage.getItem("token")),"Accept-Language":"oz"}}).then((function(a){t.$toast("Ma'lumotlar O'zbek tilida o'zgartirildi",{timeout:2e3,type:"success"}),m["a"].patch("".concat(d["a"],"skills/").concat(a.data.id,"/"),{content:t.titleru,profession:t.selected1},{headers:{Authorization:"Bearer ".concat(localStorage.getItem("token")),"Accept-Language":"ru"}}).then((function(){t.$toast("Ma'lumotlar rus tilida o'zgartirildi kiritildi",{timeout:2e3,type:"success"})})),e.append("title",t.titleen),m["a"].patch("".concat(d["a"],"skills/").concat(a.data.id,"/"),{content:t.titleen,profession:t.selected1},{headers:{Authorization:"Bearer ".concat(localStorage.getItem("token")),"Accept-Language":"kar"}}).then((function(){t.$toast("Ma'lumotlar barcha tillida o'zgartirildi",{timeout:2e3,type:"success"})})),t.$router.push("/profession/".concat(t.selected1,"/skills"))}))}},mounted:function(){var t=this;m["a"].get("".concat(d["a"],"subjects/")).then((function(e){e.data.forEach((function(e){console.log(e),t.options.push({value:e.id,text:e.title})}))})),m["a"].get("".concat(d["a"],"professions/")).then((function(e){e.data.forEach((function(e){console.log(e),t.options1.push({value:e.id,text:e.title})}))})),m["a"].get("".concat(d["a"],"skills/").concat(this.$route.params.id),{headers:{"Accept-Language":"oz"}}).then((function(e){t.menus=e.data,t.title=t.menus.content,t.selected1=t.menus.profession})),m["a"].get("".concat(d["a"],"skills/").concat(this.$route.params.id),{headers:{"Accept-Language":"ru"}}).then((function(e){t.menus=e.data,t.titleru=t.menus.content})),m["a"].get("".concat(d["a"],"skills/").concat(this.$route.params.id),{headers:{"Accept-Language":"kar"}}).then((function(e){t.menus=e.data,t.titleen=t.menus.content}))}},g=p,h=(a("e206"),a("2877")),v=Object(h["a"])(g,s,n,!1,null,null,null);e["default"]=v.exports},e206:function(t,e,a){"use strict";a("126b")}}]);
//# sourceMappingURL=chunk-2174c4c2.5a738d74.js.map