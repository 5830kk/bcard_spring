webpackJsonp([2],{AXg9:function(t,e){},Usk8:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o={name:"Listvue",data:function(){return{datas:[],bNo:"",id:"",bTitle:"",result:null}},methods:{fetchContacts:function(){},addContact:function(){var t=this;this.$http.post("/baordCreate",{bno:this.id,bTitle:this.bTitle}).then(function(e){console.warn(e),t.result=e.data,t.$router.push("/list")}).catch(function(t){console.warn("ERROR!!!!! : ",t)})}}},a={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"Listvue"}},[n("div",{staticClass:"container"},[n("div",{staticClass:"form-group"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.bno,expression:"bno"}],attrs:{type:"text"},domProps:{value:t.bno},on:{input:function(e){e.target.composing||(t.bno=e.target.value)}}}),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.bTitle,expression:"bTitle"}],attrs:{type:"text",placeholder:"이름을 입력합니다"},domProps:{value:t.bTitle},on:{input:function(e){e.target.composing||(t.bTitle=e.target.value)}}}),t._v(" "),n("button",{on:{click:t.addContact}},[t._v("수정")])])])])},staticRenderFns:[]};var i=n("VU/8")(o,a,!1,function(t){n("AXg9")},"data-v-4dc046c7",null);e.default=i.exports}});
//# sourceMappingURL=2.8ec7fdb27ddb8a2412c8.js.map