(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0a2ff3f5"],{"115b":function(t,e,i){"use strict";i("160d")},"160d":function(t,e,i){},"1c4c":function(t,e,i){"use strict";var s=i("9b43"),a=i("5ca1"),r=i("4bf8"),n=i("1fa8"),o=i("33a4"),c=i("9def"),l=i("f1ae"),d=i("27ee");a(a.S+a.F*!i("5cc5")((function(t){Array.from(t)})),"Array",{from:function(t){var e,i,a,p,u=r(t),m="function"==typeof this?this:Array,v=arguments.length,h=v>1?arguments[1]:void 0,f=void 0!==h,_=0,g=d(u);if(f&&(h=s(h,v>2?arguments[2]:void 0,2)),void 0==g||m==Array&&o(g))for(e=c(u.length),i=new m(e);e>_;_++)l(i,_,f?h(u[_],_):u[_]);else for(p=g.call(u),i=new m;!(a=p.next()).done;_++)l(i,_,f?n(p,h,[a.value,_],!0):a.value);return i.length=_,i}})},"53ca":function(t,e,i){"use strict";function s(t){return s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},s(t)}i.d(e,"a",(function(){return s}))},"5df3":function(t,e,i){"use strict";var s=i("02f4")(!0);i("01f9")(String,"String",(function(t){this._t=String(t),this._i=0}),(function(){var t,e=this._t,i=this._i;return i>=e.length?{value:void 0,done:!0}:(t=s(e,i),this._i+=t.length,{value:t,done:!1})}))},"9d69":function(t,e,i){"use strict";i.r(e);i("b54a");var s,a=function(){var t=this,e=t._self._c;return e("div",{staticClass:"main_cont"},[e("base-header",{staticClass:"pb-6 pb-8 pt-5 pt-md-8"}),e("b-container",{staticClass:"mt--7",attrs:{fluid:""}},[e("form",{on:{submit:function(e){return e.preventDefault(),t.createOz()}}},[e("b-row",{staticClass:"justify-content-center"},[e("b-col",{attrs:{lg:"8"}},[e("b-card",{staticClass:"p-5",attrs:{"no-body":""}},[e("b-tabs",[e("b-tab",{attrs:{"no-body":"",title:"O'zbekcha"}},[e("div",{staticClass:"form_mains"},[e("div",{staticClass:"inputs"},[e("div",[e("label",[t._v("Title")])]),e("div",[e("input",{directives:[{name:"model",rawName:"v-model",value:t.title,expression:"title"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:t.title},on:{input:function(e){e.target.composing||(t.title=e.target.value)}}})])]),e("div",{staticClass:"inputs"},[e("div",[e("label",[t._v("Short description")])]),e("div",[e("input",{directives:[{name:"model",rawName:"v-model",value:t.short_description,expression:"short_description"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:t.short_description},on:{input:function(e){e.target.composing||(t.short_description=e.target.value)}}})])]),e("div",{staticClass:"inputs inputs_quil"},[e("div",[e("label",[t._v("Description")])]),e("quill-editor",{ref:"myQuillEditorOrg",attrs:{required:!0},model:{value:t.description,callback:function(e){t.description=e},expression:"description"}})],1)])]),e("b-tab",{attrs:{"no-body":"",title:"Rus"}},[e("div",{staticClass:"inputs"},[e("div",[e("label",[t._v("Title")])]),e("div",[e("input",{directives:[{name:"model",rawName:"v-model",value:t.titleru,expression:"titleru"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:t.titleru},on:{input:function(e){e.target.composing||(t.titleru=e.target.value)}}})])]),e("div",{staticClass:"inputs"},[e("div",[e("label",[t._v("Short description")])]),e("div",[e("input",{directives:[{name:"model",rawName:"v-model",value:t.short_descriptionru,expression:"short_descriptionru"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:t.short_descriptionru},on:{input:function(e){e.target.composing||(t.short_descriptionru=e.target.value)}}})])]),e("div",{staticClass:"inputs inputs_quil"},[e("div",[e("label",[t._v("Description")])]),e("quill-editor",{ref:"myQuillEditorOrg",attrs:{required:!0},model:{value:t.descriptionru,callback:function(e){t.descriptionru=e},expression:"descriptionru"}})],1)]),e("b-tab",{attrs:{"no-body":"",title:"Qoraqalpoq"}},[e("div",{staticClass:"inputs"},[e("div",[e("label",[t._v("Title")])]),e("div",[e("input",{directives:[{name:"model",rawName:"v-model",value:t.titleen,expression:"titleen"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:t.titleen},on:{input:function(e){e.target.composing||(t.titleen=e.target.value)}}})])]),e("div",{staticClass:"inputs"},[e("div",[e("label",[t._v("Short description")])]),e("div",[e("input",{directives:[{name:"model",rawName:"v-model",value:t.short_descriptionen,expression:"short_descriptionen"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:t.short_descriptionen},on:{input:function(e){e.target.composing||(t.short_descriptionen=e.target.value)}}})])]),e("div",{staticClass:"inputs inputs_quil"},[e("div",[e("label",[t._v("Description")])]),e("quill-editor",{ref:"myQuillEditorOrg",attrs:{required:!0},model:{value:t.descriptionen,callback:function(e){t.descriptionen=e},expression:"descriptionen"}})],1)])],1)],1)],1),e("b-col",{attrs:{lg:"4"}},[e("b-card",{staticClass:"p-5",attrs:{"no-body":""}},[e("div",{staticClass:"inputs"},[e("div",[e("label",[t._v("Order")])]),e("div",[e("input",{directives:[{name:"model",rawName:"v-model",value:t.order,expression:"order"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:t.order},on:{input:function(e){e.target.composing||(t.order=e.target.value)}}})])]),e("div",{staticClass:"inputs"},[e("div",[e("label",[t._v("Link")])]),e("div",[e("input",{directives:[{name:"model",rawName:"v-model",value:t.link,expression:"link"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:t.link},on:{input:function(e){e.target.composing||(t.link=e.target.value)}}})])]),e("div",{staticClass:"inputs"},[e("b-form-select",{attrs:{options:t.options,multiple:"","select-size":4},model:{value:t.selected,callback:function(e){t.selected=e},expression:"selected"}})],1),e("div",{staticClass:"create_form mt-4"},[e("img",{attrs:{src:t.imageUrl[0],width:"100%",height:"150px",alt:""}}),e("label",{staticClass:"btn btn-primary my-3",attrs:{for:"cr_image1"}},[t._v("Card rasm")]),e("input",{ref:"datafiles",staticClass:"form-control d-none",attrs:{type:"file",id:"cr_image1",accept:"*",name:"datafiles"},on:{change:t.trySubmitFile}})]),e("div",{staticClass:"create_form"},[e("img",{attrs:{src:t.imageUrl1[0],width:"100%",height:"150px",alt:""}}),e("label",{staticClass:"btn btn-primary my-3",attrs:{for:"cr_image2"}},[t._v("Ichki rasm")]),e("input",{ref:"datafiles",staticClass:"form-control d-none",attrs:{type:"file",id:"cr_image2",accept:"*",name:"datafiles"},on:{change:t.trySubmitFile1}})]),e("div",{staticClass:"create_form"},[e("img",{attrs:{src:t.imageUrl2[0],width:"100%",height:"150px",alt:""}}),e("label",{staticClass:"btn btn-primary my-3",attrs:{for:"cr_image3"}},[t._v("Asosiy rasm")]),e("input",{ref:"datafiles",staticClass:"form-control d-none",attrs:{type:"file",id:"cr_image3",accept:"*",name:"datafiles"},on:{change:t.trySubmitFile2}})]),e("div",{staticClass:"inputs"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.is_main,expression:"is_main"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(t.is_main)?t._i(t.is_main,null)>-1:t.is_main},on:{input:function(e){t.is_main=!t.is_main},change:function(e){var i=t.is_main,s=e.target,a=!!s.checked;if(Array.isArray(i)){var r=null,n=t._i(i,r);s.checked?n<0&&(t.is_main=i.concat([r])):n>-1&&(t.is_main=i.slice(0,n).concat(i.slice(n+1)))}else t.is_main=a}}}),e("label",{staticClass:"mx-3"},[t._v("Asosiy")])]),e("div",{staticClass:"inputs"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.is_world,expression:"is_world"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(t.is_world)?t._i(t.is_world,null)>-1:t.is_world},on:{input:function(e){t.is_world=!t.is_world},change:function(e){var i=t.is_world,s=e.target,a=!!s.checked;if(Array.isArray(i)){var r=null,n=t._i(i,r);s.checked?n<0&&(t.is_world=i.concat([r])):n>-1&&(t.is_world=i.slice(0,n).concat(i.slice(n+1)))}else t.is_world=a}}}),e("label",{staticClass:"mx-3"},[t._v("Dunyoda")])]),e("div",{staticClass:"inputs"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.is_europe,expression:"is_europe"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(t.is_europe)?t._i(t.is_europe,null)>-1:t.is_europe},on:{input:function(e){t.is_europe=!t.is_europe},change:function(e){var i=t.is_europe,s=e.target,a=!!s.checked;if(Array.isArray(i)){var r=null,n=t._i(i,r);s.checked?n<0&&(t.is_europe=i.concat([r])):n>-1&&(t.is_europe=i.slice(0,n).concat(i.slice(n+1)))}else t.is_europe=a}}}),e("label",{staticClass:"mx-3"},[t._v("Texnikum")])]),e("div",{staticClass:"inputs"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.is_country,expression:"is_country"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(t.is_country)?t._i(t.is_country,null)>-1:t.is_country},on:{input:function(e){t.is_country=!t.is_country},change:function(e){var i=t.is_country,s=e.target,a=!!s.checked;if(Array.isArray(i)){var r=null,n=t._i(i,r);s.checked?n<0&&(t.is_country=i.concat([r])):n>-1&&(t.is_country=i.slice(0,n).concat(i.slice(n+1)))}else t.is_country=a}}}),e("label",{staticClass:"mx-3"},[t._v("Davlatda")])]),e("div",{staticClass:"inputs"},[e("b-form-select",{staticClass:"mt-3",attrs:{options:t.options1,size:"sm"},model:{value:t.selected1,callback:function(e){t.selected1=e},expression:"selected1"}})],1),e("div",{staticClass:"inputs"},[e("div",{staticClass:"text-center"},[e("button",{staticClass:"btn btn-primary"},[t._v("Qo'shish")])])])])],1)],1)],1)])],1)},r=[],n=(i("ac6a"),i("53ca")),o=(i("5df3"),i("1c4c"),i("ade3")),c=(i("5466"),i("450d"),i("ecdf")),l=i.n(c),d=(i("7f7f"),i("38a0"),i("ad41")),p=i.n(d),u=i("cee4"),m=i("b024"),v={name:"light-table",components:(s={},Object(o["a"])(s,p.a.name,p.a),Object(o["a"])(s,l.a.name,l.a),s),data:function(){return{selected:[],options:[],selected1:[],options1:[],menus:[],rows:1,perPage:1,currentPage:1,index:0,right_t:!1,data_main:[],link:"",title:"",titleru:"",titleen:"",order:"",isFooter:!1,url:"",isButton:!0,main_id:"",address:"",email_address:"",phone_number:"",telegram:"",instagram:"",facebook:"",contact:[],imageUrl:[],myImages:[],files_name:[],imageUrl1:[],myImages1:[],files_name1:[],imageUrl2:[],myImages2:[],files_name2:[],description:"",descriptionru:"",descriptionen:"",short_description:"",short_descriptionru:"",short_descriptionen:"",is_country:!1,is_europe:!1,is_world:!1,is_main:!1}},methods:{func:function(){this.is_world=!this.is_world,console.log(this.is_world)},trySubmitFile:function(t){var e=this;this.imageUrl=[];for(var i=0;i<t.target.files.length;i++)this.files_name.push(t.target.files[i]);var s=Array.from(t.target.files);console.log(Object(n["a"])(s)),s.forEach((function(t){e.myImages.push(t);var i=new FileReader,s=e;i.onload=function(t){s.imageUrl.push(t.target.result)},i.readAsDataURL(t)}))},trySubmitFile1:function(t){var e=this;this.imageUrl1=[];for(var i=0;i<t.target.files.length;i++)this.files_name1.push(t.target.files[i]);var s=Array.from(t.target.files);console.log(Object(n["a"])(s)),s.forEach((function(t){e.myImages1.push(t);var i=new FileReader,s=e;i.onload=function(t){s.imageUrl1.push(t.target.result)},i.readAsDataURL(t)}))},trySubmitFile2:function(t){var e=this;this.imageUrl2=[];for(var i=0;i<t.target.files.length;i++)this.files_name2.push(t.target.files[i]);var s=Array.from(t.target.files);console.log(Object(n["a"])(s)),s.forEach((function(t){e.myImages2.push(t);var i=new FileReader,s=e;i.onload=function(t){s.imageUrl2.push(t.target.result)},i.readAsDataURL(t)}))},rigt_side:function(){this.right_t=!this.right_t,this.isButton=!1},updatePage:function(t){this.data_main=Users[t-1]},createOz:function(){for(var t=this,e=new FormData,i=0;i<this.selected.length;i++)e.append("common_programs",this.selected[i]);!0===this.is_europe?(e.append("order",this.order),e.append("link",this.link),e.append("description",this.description),e.append("short_description",this.short_description),e.append("title",this.title),e.append("country",this.selected1),e.append("is_country",this.is_country),e.append("is_europe",this.is_europe),e.append("is_main",this.is_main),e.append("is_world",this.is_world)):(e.append("cover",this.myImages[0]),e.append("inside_image",this.myImages1[0]),e.append("image",this.myImages2[0]),e.append("order",this.order),e.append("link",this.link),e.append("description",this.description),e.append("short_description",this.short_description),e.append("title",this.title),e.append("country",this.selected1),e.append("is_country",this.is_country),e.append("is_europe",this.is_europe),e.append("is_main",this.is_main),e.append("is_world",this.is_world)),u["a"].post("".concat(m["a"],"universities/"),e,{headers:{Authorization:"Bearer ".concat(localStorage.getItem("token")),"Accept-Language":"oz"}}).then((function(i){t.title="",t.description="",t.order="",t.myImages=[],t.$toast("Ma'lumotlar o'zbek tilida kiritildi",{timeout:2e3,type:"success"}),e.append("description",t.descriptionru),e.append("short_description",t.short_descriptionru),e.append("title",t.titleru),e.append("common_programs",t.selected),e.append("country",t.selected1),u["a"].patch("".concat(m["a"],"universities/").concat(i.data.id,"/"),e,{headers:{Authorization:"Bearer ".concat(localStorage.getItem("token")),"Accept-Language":"ru"}}).then((function(){t.titleru="",t.descriptionru="",t.order="",t.myImages=[],t.$toast("Ma'lumotlar rus tilida kiritildi",{timeout:2e3,type:"success"}),e.append("description",t.descriptionen),e.append("short_description",t.short_descriptionen),e.append("title",t.titleen),e.append("common_programs",t.selected),e.append("country",t.selected1),u["a"].patch("".concat(m["a"],"universities/").concat(i.data.id,"/"),e,{headers:{Authorization:"Bearer ".concat(localStorage.getItem("token")),"Accept-Language":"kar"}}).then((function(){t.titleen="",t.descriptionen="",t.order="",t.myImages=[],t.$toast("Ma'lumotlar barcha tillarda kiritildi",{timeout:2e3,type:"success"})}))}))}))}},mounted:function(){var t=this;u["a"].get("".concat(m["a"],"university-programs/")).then((function(e){e.data.forEach((function(e){console.log(e),t.options.push({value:e.id,text:e.title})}))})),u["a"].get("".concat(m["a"],"countries/")).then((function(e){e.data.forEach((function(e){console.log(e),t.options1.push({value:e.id,text:e.title})}))}))}},h=v,f=(i("115b"),i("2877")),_=Object(f["a"])(h,a,r,!1,null,null,null);e["default"]=_.exports}}]);
//# sourceMappingURL=chunk-0a2ff3f5.a34d38bd.js.map