(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-e8c9b974"],{"0964":function(t,e,i){"use strict";i.r(e);var a=function(){var t=this,e=t._self._c;return e("div",{staticClass:"activity_box"},[e("div",{staticClass:"event_left_box"},[t.activityList.length?e("div",{staticClass:"list_box"},[e("div",{staticClass:"title"},[t._v(t._s(t.$t("event.list")))]),t._l(t.activityList,(function(i,a){return e("div",{key:a,staticClass:"list_item"},[i.bannerImg?e("img",{attrs:{src:i.bannerImg,alt:""},on:{click:function(e){return t.clickActivity(i)}}}):t._e()])}))],2):e("div",{staticClass:"no_data_icon"},[e("span",[t._v(t._s(t.$t("historical.noData")))])])]),e("div",{staticClass:"event_middle_box"},[t.discountDetailsData?e("div",{staticClass:"event_detail"},[e("div",{staticClass:"title_detail"},[t._v(t._s(t.$t("event.detail")))]),e("div",{staticClass:"rule_content_icon"},[e("span",[t._v(t._s(t.$t("event.content")))])]),e("div",{staticClass:"content_details"},[e("div",{domProps:{innerHTML:t._s(t.discountDetailsData.content)}}),t.quizInfoOptionlist.length&&t.discountDetailsData.quizInfo?e("span",{staticClass:"title_btn",staticStyle:{display:"inline-block",padding:"0px 20px","line-height":"32px","font-size":"18px","font-weight":"bold",color:"#ffffff","border-radius":"5px","text-align":"center",background:"linear-gradient(270deg, #409eff, #1e83ec)","-webkit-box-shadow":"0 12px 12px 0 rgba(64, 158, 255, 0.5)","box-shadow":"0 12px 12px 0 rgba(64, 158, 255, 0.5)","margin-bottom":"20px"}},[t._v(t._s(t.$t("event.quiz")))]):t._e(),t.quizInfoOptionlist.length?e("div",{staticClass:"quizInfo"},t._l(t.quizInfoOptionlist,(function(i,a){return e("div",{key:a,staticClass:"quizInfolist"},[Array.isArray(i)?t._l(i,(function(i,s){return e("div",{key:s,class:["quizInfolistitem",0==a&&t.discountDetailsData.quizInfo&&1==t.discountDetailsData.quizInfo.hasSubChoice?"headers":"cursorpointer",t.discountDetailsData.quizInfo&&t.quizSelectKeysListData[1==t.discountDetailsData.quizInfo.hasSubChoice?s:a]&&t.quizSelectKeysListData[1==t.discountDetailsData.quizInfo.hasSubChoice?s:a].find(t=>t==i)?"actived":""],on:{click:function(e){return t.selectQuizHandle(s,i,a)}}},[t._v(" "+t._s(i)+" ")])})):e("div",[t._v(t._s(i))])],2)})),0):t._e(),t.applyBtns?e("div",{class:["apply_btn",t.discountDetailsData.applied?"noruns_opacity":""],on:{click:function(e){return t.showModal(2)}}},[t._v(" "+t._s(t.discountDetailsData.applied?t.$t("event.already"):t.$t("event.apply"))+" ")]):t._e(),t.quizBtns?e("div",{class:["apply_btn",t.btnstatus||t.discountDetailsData.quizInfo&&t.discountDetailsData.quizInfo.submittedQuiz?"noruns_opacity":""],on:{click:function(e){return t.showModal(1)}}},[t._v(" "+t._s(t.discountDetailsData.quizInfo&&t.discountDetailsData.quizInfo.submittedQuiz?t.$t("event.commited"):t.$t("event.commit"))+" ")]):t._e()]),t.discountDetailsData.rule?e("div",{staticClass:"rule_rule_icon"},[e("span",[t._v(t._s(t.$t("event.rule")))])]):t._e(),e("div",{staticClass:"text_box"},[e("div",{domProps:{innerHTML:t._s(t.discountDetailsData.rule)}})])]):e("div",{staticClass:"no_data_icon"},[e("span",[t._v(t._s(t.$t("historical.noData")))])])]),e("div",{staticClass:"event_right_box"},[t.recordList?e("div",{staticClass:"record_box"},[e("div",{staticClass:"record_title"},[t._v(t._s(t.$t("event.record")))]),e("div",{staticClass:"collapse_box"},[e("el-collapse",t._l(t.recordList.rows,(function(i,a){return e("el-collapse-item",{key:a,attrs:{name:a}},[e("template",{slot:"title"},[e("div",{staticClass:"collapse_title"},[e("span",{staticClass:"title_name text_ellipsis"},[t._v(t._s(i.promotionTitle))]),e("span",{staticClass:"status"},[t._v(t._s(t.statusObj[i.status]))])])]),e("div",[t._v(t._s(t.$t("event.applyTime"))+" : "+t._s(i.createTime))]),e("div",[t._v(t._s(t.$t("event.auditTime"))+" ："+t._s(i.auditTime))])],2)})),1),t.RecordTotal&&t.RecordTotal>t.RecordPageSize?e("el-pagination",{staticClass:"pagination_box",attrs:{background:"",layout:"prev, pager, next","page-size":t.RecordPageSize,"page-sizes":[10,20,30],total:t.RecordTotal,"current-page":t.RecordPageNum},on:{"current-change":t.handleCurrentChange}}):t._e()],1)]):e("div",{staticClass:"no_data_icon"},[e("span",[t._v(t._s(t.$t("historical.noData")))])])]),e("validateCode",{directives:[{name:"show",rawName:"v-show",value:t.dialog_visible,expression:"dialog_visible"}],ref:"validateCode",attrs:{code:t.code,param:t.param,form:t.form,modalType:t.modalType},on:{close:t.close,changePic:t.changepic,applySubmit:t.applySubmit,quizSubmit:t.quizSubmit}})],1)},s=[],o=(i("14d9"),function(){var t=this,e=t._self._c;return e("div",{staticClass:"tanchuceng layui-layer-wrap",attrs:{id:"querywind"}},[e("div",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticClass:"tanin"},[e("div",{staticClass:"cl h60"},[e("div",{staticClass:"tac"},[t._v(t._s(t.$t("event.applyTitle")))]),e("div",{staticClass:"close",on:{click:t.close}},[e("img",{staticClass:"layui-layer-close closebtn",attrs:{src:i("90b5"),alt:""}})])]),e("el-form",{ref:"form",attrs:{model:t.form,"label-width":"75px"}},[t._l(t.param,(function(i,a){return[t.param.length>0?e("el-form-item",{key:a,staticClass:"code",attrs:{label:i}},[e("el-input",{staticStyle:{width:"372px"},attrs:{placeholder:t.$t("personal.please")+i},model:{value:t.timeTip[a].paramValue,callback:function(e){t.$set(t.timeTip[a],"paramValue",e)},expression:"timeTip[index].paramValue"}})],1):t._e()]})),e("el-form-item",{staticClass:"code",attrs:{label:t.$t("personal.code")}},[e("el-input",{staticStyle:{width:"372px"},attrs:{placeholder:t.$t("personal.validText")},on:{input:function(e){return t.onInput()}},model:{value:t.form.code,callback:function(e){t.$set(t.form,"code",e)},expression:"form.code"}}),e("img",{staticClass:"code_img",attrs:{src:t.code,width:"100",height:"32"},on:{click:t.changePic}})],1),e("el-form-item",[e("el-button",{attrs:{id:"search"},on:{click:t.clickApply}},[t._v(t._s(1==t.modalType?t.$t("event.commit"):t.$t("event.apply")))])],1)],2)],1)])}),n=[],l={data(){return{selectList:{qunxiongzhengba:[{key:1,value:"小组赛（第一轮）"},{key:2,value:"小组赛（第二轮）"},{key:3,value:"小组赛（第三轮）"},{key:4,value:"1/8决赛"},{key:5,value:"1/4决赛"},{key:6,value:"半决赛"},{key:7,value:"总决赛"}],baojiahuhang:[{key:1,value:"第一轮"},{key:2,value:"第二轮"}]},timeTip:[{paramValue:""},{paramValue:""},{paramValue:""},{paramValue:""},{paramValue:""}],loading:!1}},props:{code:{type:String},param:{type:Array},selectType:{type:String},form:{type:Object,default:function(){return{}}},modalType:{type:Number,default:function(){return 1}}},methods:{showLoadding(){this.loading=!0},hideLoadding(){this.loading=!1},onInput(){this.$forceUpdate()},close(){this.$emit("close",!1)},changePic(){this.$emit("changePic")},clickApply(){let t=[];if(this.param&&this.param.length){for(let t=0;t<this.param.length;t++)if(""==this.timeTip[t].paramValue)return this.$message({message:this.param[t]+this.$t("event.notEmpty"),type:"warning",duration:3e3}),!1;this.param.forEach((e,i)=>{let a={};a["paramName"]=e,a["paramValue"]=this.timeTip[i].paramValue,t.push(a)})}for(var e in this.form)if(!this.form[e])return"code"==e&&(e=this.$t("personal.code")),this.$message({message:e+this.$t("event.notEmpty"),type:"warning",duration:3e3}),!1;1==this.modalType&&this.$emit("quizSubmit",this.form),2==this.modalType&&this.$emit("applySubmit",this.form,t)}},mounted(){}},c=l,d=(i("6fe9"),i("8409"),i("2877")),u=Object(d["a"])(c,o,n,!1,null,"9344a334",null),r=u.exports,h=i("9e2a"),p={components:{validateCode:r},data(){return{activityList:[],pageSize:1e3,pageNum:1,currentEvent:"",dialog_visible:!1,code:"",param:[],form:{},comomsOptionListData:{},discountDetailsData:"",quizInfoOptionlist:[],quizSelectKeysListData:{},codeNonce:"",isShowApply:!1,showPageStatus:!1,modalType:1,recordList:"",RecordPageSize:10,RecordPageNum:1,RecordTotal:0,statusObj:{0:this.$t("event.audit"),1:this.$t("event.auditing"),2:this.$t("event.pass"),3:this.$t("event.nopass"),4:this.$t("event.commited")}}},computed:{btnstatus(){const t=this.quizSelectKeysListData,{quizInfo:e}=this.discountDetailsData;return!Object.keys(t).length||(0==e.multiSelect?!Object.values(t).every(t=>t.length):1==e.multiSelect?!Object.values(t).every(t=>t.length==e.multiMaxCount):2==e.multiSelect?Object.keys(t).length!=e.firstChoiceCount||!Object.values(t).every(t=>t.length):3==e.multiSelect?Object.keys(t).length!=e.firstChoiceCount||!Object.values(t).every(t=>t.length==e.multiMaxCount):void 0)},applyBtns(){const t=this.discountDetailsData;return t.canApply?!!(t.quizInfo&&t.quizInfo.submittedQuiz||!t.quizInfo):!!t.applied},quizBtns(){const t=this.discountDetailsData;return!!t.quizInfo&&(!!t.quizInfo.canSubmitQuiz||!!t.quizInfo.submittedQuiz&&(!t.canApply&&!t.applied))}},methods:{showModal(t){if(localStorage.getItem("token")){if(this.discountDetailsData.applyParams&&this.discountDetailsData.applyParams.length?this.param=this.discountDetailsData.applyParams:this.param=[],this.form.code="",(this.btnstatus||this.discountDetailsData.quizInfo.submittedQuiz)&&1==t)return;if(this.discountDetailsData.applied&&2==t)return;this.changepic(),this.modalType=t,this.dialog_visible=!0}else this.$router.push("/mainpage")},close(){this.dialog_visible=!1,this.form={}},getCode(){const t=this;for(var e="",i=0;i<4;i++)e+=Math.floor(10*Math.random());t.codeNonce=(new Date).getTime()+""+e,t.code="/api/member/captcha?&codeNonce="+t.codeNonce+"&type=math"},changepic(){for(var t="",e=0;e<4;e++)t+=Math.floor(10*Math.random());this.codeNonce=(new Date).getTime()+""+t,this.code="/api/member/captcha?&codeNonce="+this.codeNonce+"&type=math"},getActivityList(){this.$store.state.showLoading=!0,Object(h["d"])().then(t=>{if(0==t.data.code){this.$store.state.showLoading=!1;let e=t.data.data;this.activityList=e}else this.$store.state.showLoading=!1,this.$message.closeAll(),this.$message.error(t.data.msg)})},getActivityDetail(){Object(h["c"])({id:this.currentEvent.id}).then(t=>{if(0==t.data.code){this.discountDetailsData=t.data.data||{},this.quizInfoOptionlist=this.discountDetailsData.quizInfo&&this.discountDetailsData.quizInfo.quizOptions||[];const{multiSelect:e}=this.discountDetailsData.quizInfo||{};if(e||0==e){const t={};this.quizInfoOptionlist.forEach((i,a)=>{0!=e&&1!=e||(t[a]=i),2!=e&&3!=e||i.forEach((e,i)=>{t[i]||(t[i]=[]),t[i].push(e)})}),this.comomsOptionListData=t}}else this.$message.closeAll(),this.$message.error(t.data.msg)})},applySubmit(t,e){if(this.discountDetailsData.applied)return this.$message({message:this.$t("event.applied"),type:"info",duration:3e3}),!1;let i={};e.length&&(i.applyParams=e),Object(h["b"])({id:this.discountDetailsData.id,validCode:t.code,codeNonce:this.codeNonce,...i}).then(t=>{0==t.data.code?Object(h["c"])({id:this.discountDetailsData.id}).then(t=>{if(0==t.data.code){const e=this.discountDetailsData;e.applied=t.data.data.applied,e.awardSendType=t.data.data.awardSendType,e.canApply=t.data.data.canApply,t.data.data.quizInfo&&(e.quizInfo.canSubmitQuiz=t.data.data.quizInfo.canSubmitQuiz,e.quizInfo.submittedQuiz=t.data.data.quizInfo.submittedQuiz),this.discountDetailsData=e}this.$message({message:t.data.msg,type:"success",duration:3e3}),this.dialog_visible=!1,this.form={}}).catch(t=>{console.log("err :>> ",t),this.dialog_visible=!1,this.form={}}):(this.form={},this.$message({message:t.data.msg,type:"error",duration:3e3}))})},quizSubmit(t){const e=this.quizSelectKeysListData,i=this.comomsOptionListData;let a=[];for(let s in e)if(e[s]&&e[s].length){let t=e[s];t.sort((t,e)=>{let a=i[s];return a.indexOf(t)-a.indexOf(e)}),a.push(t.join(","))}promotionSubmitQuiz({quizResult:a,id:this.discountDetailsData.id,validCode:t.code,codeNonce:this.codeNonce}).then(t=>{0==t.data.code?Object(h["c"])({id:this.discountDetailsData.id}).then(t=>{if(0==t.data.code){const e=this.discountDetailsData;e.applied=t.data.data.applied,e.awardSendType=t.data.data.awardSendType,e.canApply=t.data.data.canApply,t.data.data.quizInfo&&(e.quizInfo.canSubmitQuiz=t.data.data.quizInfo.canSubmitQuiz,e.quizInfo.submittedQuiz=t.data.data.quizInfo.submittedQuiz),this.discountDetailsData=e}this.dialog_visible=!1,this.form={},this.$message({message:t.data.msg,type:"success",duration:3e3})}).catch(t=>{console.log("err :>> ",t),this.dialog_visible=!1,this.form={}}):(this.form={},this.$message({message:t.data.msg,type:"success",duration:3e3}))})},selectQuizHandle(t,e,i){const{quizInfo:a}=this.discountDetailsData;a.hasSubChoice&&!i||a.submittedQuiz||(0==a.multiSelect&&this.singleChoiceForSingle(1==a.hasSubChoice?t:i,e),1==a.multiSelect&&this.singleChoiceForMore(1==a.hasSubChoice?t:i,e),2==a.multiSelect&&this.moreChoiceForSingle(1==a.hasSubChoice?t:i,e),3==a.multiSelect&&this.moreChoiceForMore(1==a.hasSubChoice?t:i,e))},singleChoiceForSingle(t,e){const i=JSON.parse(JSON.stringify(this.quizSelectKeysListData)),a={};if(i[t]&&i[t].length)if(i[t].find(t=>t==e)){const a=i[t].findIndex(t=>t==e);i[t].splice(a,1),i[t].length||delete i[t],this.quizSelectKeysListData=i}else i[t]=[],i[t].push(e),this.quizSelectKeysListData=i;else a[t]=[],a[t].push(e),this.quizSelectKeysListData=a},singleChoiceForMore(t,e){const{quizInfo:i}=this.discountDetailsData,a=JSON.parse(JSON.stringify(this.quizSelectKeysListData)),s={};if(a[t]&&a[t].length)if(a[t].find(t=>t==e)){const i=a[t].findIndex(t=>t==e);a[t].splice(i,1),a[t].length||delete a[t],this.quizSelectKeysListData=a}else a[t].length<i.multiMaxCount?(a[t].push(e),this.quizSelectKeysListData=a):this.$message({message:this.$t("event.choice",{num:i.multiMaxCount}),type:"info",duration:3e3});else s[t]=[],s[t].push(e),this.quizSelectKeysListData=s},moreChoiceForSingle(t,e){const{quizInfo:i}=this.discountDetailsData,a=JSON.parse(JSON.stringify(this.quizSelectKeysListData));if(a[t]&&a[t].length)if(a[t].find(t=>t==e)){const i=a[t].findIndex(t=>t==e);a[t].splice(i,1),a[t].length||delete a[t],this.quizSelectKeysListData=a}else a[t]=[],a[t].push(e),this.quizSelectKeysListData=a;else a[t]=[],a[t].push(e),this.quizSelectKeysListData=a},moreChoiceForMore(t,e){const{quizInfo:i}=this.discountDetailsData,a=JSON.parse(JSON.stringify(this.quizSelectKeysListData));if(a[t]&&a[t].length)if(a[t].find(t=>t==e)){const i=a[t].findIndex(t=>t==e);a[t].splice(i,1),a[t].length||delete a[t],this.quizSelectKeysListData=a}else a[t].length<i.multiMaxCount?(a[t].push(e),this.quizSelectKeysListData=a):this.$message({message:this.$t("event.choice",{num:i.multiMaxCount}),type:"info",duration:3e3});else a[t]=[],a[t].push(e),this.quizSelectKeysListData=a},clickActivity(t){this.currentEvent=t,this.getActivityDetail()},getRecordList(){let t={pageSize:this.RecordPageSize,pageNum:this.RecordPageNum};Object(h["a"])(t).then(t=>{if(0==t.data.code){let e=t.data.data;this.recordList=e,this.RecordTotal=e.total}else this.$message.closeAll(),this.$message.error(t.data.msg)})},handleCurrentChange(t){this.RecordPageNum=t,this.getRecordList()}},mounted(){this.getActivityList(),this.getRecordList()}},m=p,g=(i("b30d"),Object(d["a"])(m,a,s,!1,null,"248ac41a",null));e["default"]=g.exports},"301d":function(t,e,i){},"5a29":function(t,e,i){},"6fe9":function(t,e,i){"use strict";i("5a29")},8409:function(t,e,i){"use strict";i("301d")},"8c1d":function(t,e,i){},"90b5":function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAYAAACpSkzOAAAAAXNSR0IArs4c6QAAAXVJREFUSEul1jtKBEEQgOG/LqCp+Eg0MDIwFRb1FmIgeAEf1zAQ9ACiiIheQlHQCxgYLCv4OEdJLTPLONvTXTVOuDtTX1d1V82Iqs4AJ8Am8AYcicgP/7hUdQ44BdaBV+BYVPUC2G/EHQFbIvLVx1LVReARWGk8f2nQO7DaCtoL60As9NCgW2AnsfoQlkEs9L1B88AzsNwXKyC24IFYcFVdquoaxhzItoh8jqG+WLXAh9bG1yEtkzFiP0ygKBZBpiAvVi3ZlUmd3p+MAmVUT7mahysJOTJL9fKfPWnf0AkFsSyS3KP2SgpH324vIhGoa+NrqDgbPaXLIc2eyWKlw+BBXFjueOf6xIKHxtUU5Ol4G4/R2ZgaQa6Ojw7i9lB1IYEJMjkgzddECIli9YvvqWN2fVTfD+NR33U5yjgw6AbYTQRxIc7M7gwaJrIJIQ5sZNAVsNfIqBdSwK4NmgXOgI3qA/JARL5ze1L6T1UXgHNgDXgBDn8B4XX4mR72DksAAAAASUVORK5CYII="},"9e2a":function(t,e,i){"use strict";i.d(e,"d",(function(){return o})),i.d(e,"c",(function(){return n})),i.d(e,"b",(function(){return l})),i.d(e,"a",(function(){return c}));var a=i("c59a"),s=i("b775");function o(t){return Object(s["a"])({url:a["a"]+"/promotion/list",method:"get",data:t})}function n(t){return Object(s["a"])({url:a["a"]+"/promotion/detail",method:"get",data:t})}function l(t){return Object(s["a"])({url:a["a"]+"/promotion/apply",method:"post",data:t})}function c(t){return Object(s["a"])({url:a["a"]+"/promotion/application/record",method:"get",data:t})}},b30d:function(t,e,i){"use strict";i("8c1d")}}]);