webpackJsonp([1],{"1iv5":function(e,t){},"4/hK":function(e,t){},"9x86":function(e,t){},NHnr:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=i("7+uW"),s=i("8U58"),o=i.n(s),a=(i("4/hK"),i("Xdwu"),i("UM8r"),i("f6fj"),i("EFqf")),r=i.n(a),l=i("V8mf"),c=new r.a.Renderer,d=r.a.setOptions({renderer:c,gfm:!0,tables:!0,breaks:!1,pedantic:!1,sanitize:!1,smartLists:!0,highlight:function(e){return l.highlightAuto(e).value}}),u=window.CodeMirror||o.a,m={name:"markdown-editor",components:{marked:d},data:function(){return{editor:null}},mounted:function(){this.createEditor(),window.undo=this.undo,window.redo=this.redo,window.clear=this.clear,window.bold=this.bold,window.italic=this.italic,window.middleline=this.middleline,window.h1=this.h1,window.h2=this.h2,window.h3=this.h3,window.ul=this.ul,window.ol=this.ol,window.img=this.img,window.ref=this.ref,window.code=this.code,window.link=this.link,window.table=this.table,window.save=this.save,window.setEditorValue=this.setEditorValue},methods:{createEditor:function(){this.editor=u.fromTextArea(this.$refs.textarea,{value:"请在此开始编写您的markdown文件...",showCursorWhenSelecting:!0,theme:"monokai",mode:"markdown",autofocus:!0,smartIndent:!0,lineNumbers:!0,matchBrackets:!0,styleActiveLine:!0,cursorHeight:1.2}),this.editor.setValue(""),this.addEditorListener(),this.$emit("on-ready",{vm:this,insertContent:this.insertContent})},addEditorListener:function(){var e=this;this.editor.on("change",function(t){e.insertContent(e.editor.getValue())}),this.editor.on("keydown",function(t,i){13==i.keyCode&&e.editor.replaceSelection("  ")})},insertContent:function(e){document.getElementById("result").innerHTML=d(e)},undo:function(){this.editor.undo()},redo:function(){var e=this;this.editor.redo(),setTimeout(function(){e.editor.refresh()},20)},clear:function(){this.editor.setValue("")},bold:function(){this.setup("__","__",2,!1)},italic:function(){this.setup("*","*",1,!1)},middleline:function(){this.setup("~~","~~",2,!1)},h1:function(){this.setup("# ","",2,!0)},h2:function(){this.setup("## ","",3,!0)},h3:function(){this.setup("### ","",4,!0)},ul:function(){this.setup("* ","",2,!0)},ol:function(){this.setup("1. ","",3,!0)},img:function(){this.setup("![alt text]","(img url)",2,!1)},ref:function(){this.setup("> ","\n",2,!0)},code:function(){this.setup("```\n","\n```\n",3,!0)},link:function(){this.setup("[linkname]","(linkurl)",1,!1)},table:function(){this.setup("|  header   |  header  |\n|  ----  | ----  |\n| cell  | cell |\n| cell  | cell |","",1,!0)},save:function(){return this.editor.getValue()},setEditorValue:function(e){this.editor.setValue(e)},setup:function(e,t,i,n){var s=this.editor.getSelection();if(s)n?this.editor.replaceSelection("\n"+e+s+t):this.editor.replaceSelection(e+s+t);else{var o=this.editor.getCursor(),a=o.line,r=void 0===a?0:a,l=o.ch,c=void 0===l?0:l;n?(this.editor.replaceSelection("\n"+e+t),this.editor.setCursor(r+1,i)):(this.editor.replaceSelection(e+t),this.editor.setCursor(r,c+i)),this.editor.focus()}}}},h={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"editor"}},[t("textarea",{ref:"textarea"})])},staticRenderFns:[]};var f={render:function(){var e=this.$createElement;return(this._self._c||e)("div",{attrs:{id:"result"}})},staticRenderFns:[]};var p={data:function(){return{tool_noicon:[{name:"B",msg:"加粗"},{name:"I",msg:"斜体"},{name:"--",msg:"中划线"},{name:"H1",msg:"一级标题"},{name:"H2",msg:"二级标题"},{name:"H3",msg:"三级标题"}],tool_icon:[{name:"ul",icon:"el-icon-notebook-1",msg:"无序列表"},{name:"ol",icon:"el-icon-notebook-2",msg:"有序列表"},{name:"img",icon:"el-icon-picture-outline",msg:"图片"},{name:"ref",icon:"el-icon-paperclip",msg:"引用"},{name:"code",icon:"el-icon-chat-square",msg:"代码块"},{name:"link",icon:"el-icon-link",msg:"链接"},{name:"table",icon:"el-icon-s-grid",msg:"表格"},{name:"undo",icon:"el-icon-back",msg:"撤销"},{name:"redo",icon:"el-icon-right",msg:"重做"},{name:"clear",icon:"el-icon-circle-close",msg:"清空"},{name:"creat",icon:"el-icon-document-add",msg:"新建文档"},{name:"delete",icon:"el-icon-document-delete",msg:"删除当前文档"},{name:"save",icon:"el-icon-document-checked",msg:"保存"}],userName:this.$store.getters.getToken?this.$store.getters.getToken:"M",hoverContent:"M"==this.userName?"点击登录":"点击登出",activeName:"login",dialogVisible:!1,uname:"",pwd:"",repwd:"",fileName:"",fileList:this.$store.getters.getFile?this.$store.getters.getFile.split(","):[],logined:!!this.$store.getters.getToken}},components:{},methods:{showLoginDialog:function(){var e=this;this.logined?this.$confirm("确认退出登录？").then(function(t){e.t_logout()}).catch(function(e){}):this.dialogVisible=!0},selectMeth:function(e){var t=this;switch(e){case"save":this.t_save();break;case"undo":undo();break;case"redo":redo();break;case"clear":clear();break;case"B":bold();break;case"--":middleline();break;case"I":italic();break;case"H1":h1();break;case"H2":h2();break;case"H3":h3();break;case"ul":ul();break;case"ol":ol();break;case"img":img();break;case"ref":ref();break;case"code":code();break;case"link":link();break;case"table":table();break;case"creat":this.fileName="new file",clear();break;case"delete":this.$confirm("确认删除当前文件？").then(function(e){t.t_deleteMd()}).catch(function(e){})}},submit:function(){var e=this;this.$http({method:"post",url:"http://127.0.0.1:8081/process_login",params:{username:this.uname.trim(),password:this.pwd.trim()}}).then(function(t){if(0==t.data.code){e.$store.commit("setToken",t.data.message);var i="",n=0;t.data.file&&(n=t.data.file.length);for(var s=0;s<n;s++)i+=t.data.file[s].filename,s!=n-1&&(i+=",");e.$store.commit("setFile",i),e.$message({message:"登录成功",type:"success",offset:200}),e.$router.go(0)}else alert(t.data.message)}),this.dialogVisible=!1},regis:function(){this.$http({method:"post",url:"http://127.0.0.1:8081/process_register",params:{username:this.uname.trim(),password:this.pwd.trim(),repassword:this.repwd.trim()}}).then(function(e){0==e.data.code?this.$message({message:"注册成功",type:"success",offset:200}):alert(e.data.message)})},t_logout:function(){sessionStorage.clear(),this.$router.go(0)},t_save:function(){var e=this;"M"!=this.userName?"new file"!=this.fileName&&this.fileName?this.t_uploadMd("update"):this.$prompt("请输入文件名","保存markdown文件到云端",{confirmButtonText:"确定",cacelButtonText:"取消",inputPattern:/^(.)+$/,inputErrorMessage:"文件名不能为空"}).then(function(t){e.$message({type:"success",message:"保存为："+t.value+".md"}),e.fileName=t.value,e.t_uploadMd("insert")}).catch(function(t){e.$message({type:"info",message:"取消输入"})}):alert("您尚未登录")},t_uploadMd:function(e){var t=this,i=save();this.$http({method:"post",url:"http://127.0.0.1:8081/process_upload",params:{username:this.userName,filename:this.fileName,filecontent:i,operation:e}}).then(function(i){console.log(i),0==i.data.code?(t.$message({message:"保存成功",type:"success",offset:200}),"insert"==e&&(t.$store.commit("setFile",t.$store.getters.getFile+","+i.data.message),t.$router.go(0))):alert(i.data.message)})},t_fileSelect:function(e){var t=this;console.log("-----",this.fileList),this.fileList?(this.fileName=this.fileList[e],this.$http({method:"post",url:"http://127.0.0.1:8081/process_download",params:{username:this.userName,fileindex:e}}).then(function(e){0==e.data.code?(t.$message({message:"读取成功",type:"success",offset:200}),setEditorValue(e.data.message)):alert(e.data.message)})):alert("您尚未创建任何文件")},t_deleteMd:function(){var e=this;this.$http({method:"post",url:"http://127.0.0.1:8081/process_delete",params:{username:this.userName,filename:this.fileName}}).then(function(t){if(0==t.data.code){for(var i="",n=e.fileList.filter(function(e){return e!==t.data.message}),s=n.length,o=0;o<s;o++)i+=n[o],o!==s-1&&(i+=",");e.$store.commit("setFile",i),e.$message({message:"删除成功",type:"success",offset:200}),e.$router.go(0)}else alert(t.data.message)})}}},g={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{attrs:{id:"toolbar"}},[i("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:e.hoverContent,placement:"bottom-end"}},[i("el-avatar",{attrs:{id:"user"},nativeOn:{click:function(t){return e.showLoginDialog(t)}}},[e._v(e._s(e.userName))])],1),e._v(" "),i("el-dropdown",{class:e.logined?"show":"notshow",on:{command:e.t_fileSelect}},[i("span",{staticClass:"el-dropdown-link",attrs:{id:"test"}},[e._v("\n            "+e._s(e.fileName?e.fileName:"FileList")),i("i",{staticClass:"el-icon-arrow-down el-icon--right"})]),e._v(" "),i("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},e._l(e.fileList,function(t,n){return i("el-dropdown-item",{key:n,attrs:{command:n}},[e._v(e._s(t))])}),1)],1),e._v(" "),i("ul",[e._l(e.tool_noicon,function(t,n){return i("el-tooltip",{key:t.name+n,staticClass:"item",attrs:{effect:"dark",content:t.msg,placement:"bottom-end"}},[i("li",{attrs:{name:t},on:{click:function(i){return e.selectMeth(t.name)}}},[e._v(e._s(t.name))])])}),e._v(" "),e._l(e.tool_icon,function(t,n){return i("el-tooltip",{key:t.name+n,staticClass:"item",attrs:{effect:"dark",content:t.msg,placement:"bottom-end"}},[i("li",{attrs:{name:t.name},on:{click:function(i){return e.selectMeth(t.name)}}},[i("i",{class:t.icon})])])})],2),e._v(" "),i("el-dialog",{attrs:{visible:e.dialogVisible,width:"40%"},on:{"update:visible":function(t){e.dialogVisible=t}}},[i("el-tabs",{model:{value:e.activeName,callback:function(t){e.activeName=t},expression:"activeName"}},[i("el-tab-pane",{attrs:{label:"登录",name:"login"}},[i("el-input",{staticClass:"info",attrs:{type:"text",placeholder:"请输入用户名"},model:{value:e.uname,callback:function(t){e.uname=t},expression:"uname"}}),e._v(" "),i("el-input",{staticClass:"info",attrs:{type:"password",placeholder:"请输入密码"},model:{value:e.pwd,callback:function(t){e.pwd=t},expression:"pwd"}}),e._v(" "),i("el-button",{staticClass:"btn",on:{click:e.submit}},[e._v("登录")])],1),e._v(" "),i("el-tab-pane",{attrs:{label:"注册",name:"register"}},[i("el-input",{staticClass:"info",attrs:{type:"text",placeholder:"请输入用户名"},model:{value:e.uname,callback:function(t){e.uname=t},expression:"uname"}}),e._v(" "),i("el-input",{staticClass:"info",attrs:{type:"password",placeholder:"请输入密码"},model:{value:e.pwd,callback:function(t){e.pwd=t},expression:"pwd"}}),e._v(" "),i("el-input",{staticClass:"info",attrs:{type:"password",placeholder:"请再次输入密码"},model:{value:e.repwd,callback:function(t){e.repwd=t},expression:"repwd"}}),e._v(" "),i("el-button",{staticClass:"btn",on:{click:e.regis}},[e._v("注册")])],1)],1)],1)],1)},staticRenderFns:[]};var v={name:"App",components:{Editor:i("VU/8")(m,h,!1,function(e){i("9x86")},null,null).exports,Result:i("VU/8")({},f,!1,function(e){i("eIqZ")},"data-v-049e6baa",null).exports,Toolbar:i("VU/8")(p,g,!1,function(e){i("1iv5")},null,null).exports}},w={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"app"}},[t("toolbar"),this._v(" "),t("editor",{staticClass:"body"}),this._v(" "),t("result",{staticClass:"body"})],1)},staticRenderFns:[]};var k=i("VU/8")(v,w,!1,function(e){i("mvFp")},null,null).exports,b=i("NYxO");n.default.use(b.a);var _=new b.a.Store({state:{token:"",file:""},mutations:{setToken:function(e,t){e.token=t,sessionStorage.token=t},setFile:function(e,t){e.file=t,sessionStorage.file=t}},getters:{getToken:function(e){return e.token||(e.token=sessionStorage.getItem("token")),e.token},getFile:function(e){return e.file||(e.file=sessionStorage.getItem("file")),e.file}}}),$=i("/ocq");n.default.use($.a);var C=new $.a({}),N=i("mtWM"),y=i.n(N),x=i("zL8q"),V=i.n(x);i("tvR6");n.default.prototype.$http=y.a,n.default.use(V.a),n.default.config.productionTip=!1,new n.default({el:"#app",store:_,router:C,components:{App:k},template:"<App/>"})},UM8r:function(e,t){},Xdwu:function(e,t){},eIqZ:function(e,t){},mvFp:function(e,t){},tvR6:function(e,t){}},["NHnr"]);
//# sourceMappingURL=app.5a5a91b02210ea587383.js.map