(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-628fae16"],{"052a":function(t,e,s){t.exports=s.p+"static/img/whatsapp.adab28eb.svg"},"0916":function(t,e,s){var a={"./1.png":"2930","./2.png":"cc96","./3.png":"2255","./about_img.png":"ba3d","./account.png":"96dc5","./app.png":"61d9","./banner_left.png":"68d3","./banner_right.png":"90c3","./black_close.png":"186c","./circle.png":"3b9c","./down.png":"8414","./down_img.png":"34e5","./down_img_a.png":"1b46","./down_img_cfc.png":"1dc5","./down_img_hs.png":"1371","./down_img_m.png":"aef8","./down_img_new.png":"9f6d","./down_img_sev.png":"b226","./eight_team.png":"9f90","./fan.png":"6be1","./fan_active.png":"61a8","./gear.png":"be90","./god.png":"e6e7","./hot.png":"c826","./left_arrow.png":"c1b3","./license.png":"f7cc","./logout.png":"c0a7","./online.png":"74b3","./online_person.png":"7865","./pass.png":"d07d","./question.png":"a9b3","./rank.png":"689b","./remind.png":"0666","./right_arrow.png":"c282","./user.png":"0ff5","./voice_icon.png":"29a3","./vs.png":"399f"};function i(t){var e=o(t);return s(e)}function o(t){if(!s.o(a,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return a[t]}i.keys=function(){return Object.keys(a)},i.resolve=o,t.exports=i,i.id="0916"},"11d8":function(t,e,s){t.exports=s.p+"static/img/skype.c323ada5.svg"},"182d":function(t,e,s){"use strict";s("706b")},"319c":function(t,e,s){t.exports=s.p+"static/img/line.62e83cd7.svg"},3451:function(t,e,s){t.exports=s.p+"static/img/linepersnal.203b7c8f.svg"},5318:function(t,e,s){t.exports=s.p+"static/img/facebook.b0453b26.svg"},"706b":function(t,e,s){},"865c":function(t,e,s){t.exports=s.p+"static/img/whatsapppersonal.acf51bc4.svg"},"873d":function(t,e,s){t.exports=s.p+"static/img/instagram.b2474acb.svg"},"8a89":function(t,e,s){"use strict";s.r(e);s("14d9");var a=function(){var t=this,e=t._self._c;return e("div",{staticClass:"home_page"},[e("div",{staticClass:"home_left_box"},[e("div",{staticClass:"left_head btncolor"},[e("div",{staticClass:"head_title"},[e("img",{attrs:{src:s("c826"),alt:""}}),e("span",[t._v(t._s(t.$t("homePage.match")))])]),e("div",{staticClass:"more_btn",on:{click:function(e){return t.$router.push("/market")}}},[e("span",[t._v(t._s(t.$t("homePage.more")))]),t._v(">> ")])]),e("div",{staticClass:"left_content_box"},t._l(t.hotMatchList,(function(s,a){return e("div",{key:a,staticClass:"content_item",on:{click:function(e){return t.goWebBets(s)}}},[e("div",{staticClass:"content_left"},[e("div",{staticClass:"volume_text text_ellipsis"},[t._v(" "+t._s(t.$t("homePage.volume"))+" ")]),e("div",{staticClass:"volume_number fontColor"},[t._v(t._s(s.amountCount))])]),e("div",{staticClass:"content_right"},[e("div",{staticClass:"content_right_top"},[e("span",{staticClass:"play"},[t._v(t._s(t.$t("trading.bodan"))+t._s(t.dealwithBodan(s.bet)))]),e("span",{staticClass:"add"},[t._v("@"+t._s(s.odds))]),e("span",{staticClass:"time"},[t._v(t._s(t._f("formatDate")(s.matchTime,"yyyy-MM-dd hh:mm")))])]),e("div",{staticClass:"content_right_middle"},[e("div",{directives:[{name:"lazy-container",rawName:"v-lazy-container",value:{selector:"img"},expression:"{ selector: 'img' }"}],staticClass:"left_contents"},[e("img",{attrs:{"data-src":s.teamhIcon,"data-error":t.globalteamDefaultIcon(),"data-loading":t.globalteamDefaultIcon()}}),e("div",{staticClass:"teamA text_ellipsis"},[t._v(" "+t._s(s.hostName)+" ")])]),e("div",{class:["middle_contents",t.themeStyleIMgMap[t.$store.state.oprationId]]}),e("div",{directives:[{name:"lazy-container",rawName:"v-lazy-container",value:{selector:"img"},expression:"{ selector: 'img' }"}],staticClass:"right_contents"},[e("div",{staticClass:"teamA text_ellipsis"},[t._v(" "+t._s(s.guestName)+" ")]),e("img",{attrs:{"data-src":s.teamcIcon,"data-error":t.globalteamDefaultIcon(),"data-loading":t.globalteamDefaultIcon()}})])]),e("div",{staticClass:"content_right_bottom"},[e("span",{class:["pt"==t.$i18n.locale||"br"==t.$i18n.locale?"league_name_short":"league_name","text_ellipsis"]},[t._v(t._s(s.leagueName))]),e("span",{staticClass:"time_out brightness"},[e("span",{staticClass:"veraz"},[t._v(t._s(t.$t("homePage.close")))]),t._v("   "),e("van-count-down",{attrs:{time:t.calcTime(s.closeLeft)}})],1)])])])})),0)]),e("div",{staticClass:"home_right_box"},[e("div",{staticClass:"right_top"},[e("div",{staticClass:"top_head btncolor"},[e("img",{attrs:{src:s("96dc5"),alt:""}}),e("span",[t._v(t._s(t.$t("homePage.account",{num:t.$store.state.moneyAbbr})))])]),e("div",{staticClass:"top_content"},[e("div",{staticClass:"top_div_box"},[e("span",[t._v(t._s(t.$t("homePage.spare"))+":")]),e("span",[t._v(t._s(t._f("toDecimal2")(t.$store.state.userInfo.amount))+t._s(10047==t.$store.state.oprationId?` = ${t.$store.state.userInfo.amountOfUSDT} USDT`:""))])]),e("div",{staticClass:"top_div_box"},[e("span",[t._v(t._s(t.$t("homePage.noPay"))+":")]),e("span",[t._v(t._s(t._f("toDecimal2")(t.$store.state.userInfo.unsettleAmount)))])]),e("div",{staticClass:"top_div_box"},[e("span",[t._v(t._s(t.$t("homePage.effective"))+":")]),e("span",[t._v(t._s(t._f("toDecimal2")(t.$store.state.userInfo.totalAmount)))])])])]),e("div",{staticClass:"right_bottom"},[e("div",{staticClass:"bottom_head btncolor"},[e("img",{attrs:{src:s("e6e7"),alt:""}}),e("span",[t._v(t._s(t.$t("homePage.person")))])]),e("div",{staticClass:"bottom_content"},[e("ul",{staticClass:"table_head backgroundBrightness"},[e("li",{staticClass:"rank_row"},[t._v(" "+t._s(t.$t("homePage.rank"))),e("el-popover",{attrs:{placement:"top-start",title:t.$t("homePage.questionTitle"),width:"200",trigger:"hover",content:t.$t("homePage.questionContent")}},[e("span",{staticClass:"question",attrs:{slot:"reference"},slot:"reference"})])],1),e("li",{staticClass:"rate_row whitecolor"},[t._v(t._s(t.$t("homePage.rate")))]),e("li",{staticClass:"win_row whitecolor"},[t._v(t._s(t.$t("homePage.win")))]),e("li",{staticClass:"recommend_row whitecolor"},[t._v(t._s(t.$t("homePage.recommend")))])]),e("ul",{staticClass:"table_content"},t._l(t.godList,(function(a,i){return e("li",{key:i},[e("div",{staticClass:"name_div"},[e("div",{staticClass:"icon_box"},[i<3?e("img",{attrs:{src:s("0916")(`./${i+1}.png`),alt:""}}):t._e(),i>=3?e("span",{staticClass:"num"},[t._v(t._s(i+1))]):t._e()]),e("span",{staticClass:"name_span text_ellipsis"},[t._v(t._s(a.username))])]),e("div",{staticClass:"rate_div"},[t._v(t._s(a.profitOdds)+"%")]),e("div",{staticClass:"win_div"},[t._v(t._s(t._f("toDecimal2")(a.profitSum)))]),e("div",{staticClass:"recommend_div"},[e("div",{staticClass:"recommend_btn linegredient",on:{click:function(e){return t.recommendBet(a)}}},[t._v(" "+t._s(t.$t("homePage.follow"))+" ")]),e("div",{staticClass:"attention_box"},[t._v(" "+t._s(a.attentionNum)+t._s(t.$t("homePage.attention"))+" ")])])])})),0)])])]),t.appList.length?e("div",{staticClass:"rightfloat"},[e("div",{staticClass:"hotarea fixed-area"},[e("div",{staticClass:"mainimgs"},[e("img",{staticClass:"rarotes",attrs:{src:t.appList[0]&&t.appList[0].icon,alt:""},on:{click:t.expandMenu}}),e("div",{class:[(t.appList.length,"menulist"),t.expandstyle?t.floatsAtstation:""]},t._l(t.appList,(function(s){return e("div",{key:s.key,staticClass:"imgwrap",on:{click:function(e){return t.toOtherApp(s.pcUrl)}}},[e("img",{attrs:{src:s.icon,alt:""}})])})),0)])])]):t._e(),e("Betting",{attrs:{betDetail:t.betDetail}}),e("importantNotice",{attrs:{show:t.showNotice,contentList:t.contentList},on:{sure:t.confirmNotice}})],1)},i=[],o=s("32a6"),n=function(){var t=this,e=t._self._c;return e("div",{staticClass:"dialog_el_custom"},[e("el-dialog",{attrs:{title:t.$t("personal.adasd"),visible:t.show,width:"420px","show-close":!1,"close-on-click-modal":!1},on:{"update:visible":function(e){t.show=e}}},[e("div",{staticClass:"dialog_content_div"},t._l(t.contentList,(function(s,a){return e("div",{key:a,staticClass:"content_box"},[e("div",{staticClass:"content_title"},[t._v(t._s(s.noticeTitle))]),e("div",{staticClass:"content_text"},[t._v(t._s(s.noticeContent))])])})),0),e("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[e("el-button",{staticClass:"normal_btn btncolor",staticStyle:{width:"120px"},attrs:{size:"small",type:"primary"},on:{click:t.confirm}},[t._v(t._s(t.$t("personal.confirm")))])],1)])],1)},c=[],l={props:{show:{default:!1},contentList:""},data(){return{}},methods:{confirm(){this.$emit("sure")}}},r=l,d=s("2877"),g=Object(d["a"])(r,n,c,!1,null,"2e5fd6a7",null),p=g.exports,m=s("2f3b"),_={name:"Home",inject:["globalIcon","globalteamDefaultIcon"],components:{Betting:o["a"],importantNotice:p},data(){return{hotMatchList:[],contentList:[],betDetail:{},godList:[],expandstyle:!1,showNotice:!1,floatsAtstation:"",appList:[],iconMap:{"instagram://":s("873d"),"fb://group":s("5318"),skype:s("11d8"),"tg://resolve":s("ba8d"),twitter:s("dca8"),"chat.whatsapp":s("052a"),"line.me/ti/g":s("319c"),"line.me/ti/p":s("3451"),"zalo.me":s("d6ec"),"wa.me":s("865c")},themeStyleIMgMap:{10009:"redvs",10002:"redvs",10025:"redvs",10030:"redvs",10032:"redvs",10013:"redvs",10011:"goldvs",10014:"goldvs",10017:"greenvs",10039:"greenvs",10040:"greenvs",10018:"goldvs",10019:"greenvs",10033:"bluevs",10045:"redvs",10038:"redvs",10050:"redvs",10035:"redvs"}}},methods:{confirmNotice(){this.showNotice=!1,window.sessionStorage.setItem("importantNotice","hasRead")},getNotice(){Object(m["h"])().then(t=>{if(0==t.data.code){let e=t.data.data;e&&e.length?(this.contentList=e,this.showNotice=!0):this.showNotice=!1}else this.$message({message:t.data.msg,type:"warning",duration:3e3})}).catch((function(t){console.log("err",t)}))},getoutsideAppConfigs(){var t=navigator.userAgent,e=t.indexOf("Android")>-1||t.indexOf("Linux")>-1,s=!!t.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);Object(m["v"])().then(t=>{if(0==t.data.code){let a=t.data.data;a.forEach(t=>{t.key=t.appName.toLowerCase();for(let e in this.iconMap)t.pcUrl.includes(e)&&(t.icon=this.iconMap[e]);if(t.pcUrl.includes("fb://group")){let a=t.pcUrl.split("id=")[1];e&&(t.pcUrl="fb://group/"+a),s&&(t.pcUrl="fb://group?id="+a)}}),this.appList=a||[],this.floatsAtstation="expandstyleright"}})},expandMenu(){this.appList.length&&(1==this.appList.length?this.toOtherApp(this.appList[0].pcUrl):this.expandstyle=!this.expandstyle)},toOtherApp(t){var e=document.createElement("a");e.setAttribute("href",t),e.setAttribute("target","_blank"),e.setAttribute("id","startTelMedicine"),document.getElementById("startTelMedicine")&&document.body.removeChild(document.getElementById("startTelMedicine")),document.body.appendChild(e),e.click()},recommendBet(t){let e={matchCode:t.gid,bet:t.betContentCode};this.goWebBets(e)},calcTime(t){if(!t)return;let e=t.split(":");return 3==e.length?60*e[0]*60*1e3+60*e[1]*1e3+1e3*e[2]:0},dealwithBodan(t){if(!t)return;if("AOS"==t)return"other";let e=t.split("");return`${e[1]}-${e[3]}`},goWebBets(t){if(!this.$store.state.token)return void(this.$store.state.showLogin=!0);let e={matchCode:t.matchCode,bet:t.bet};Object(m["n"])(e).then(t=>{if(0==t.data.code){let e=t.data.data;this.betDetail=e,this.$store.state.showBetting=!0}else this.$message.closeAll(),this.$message.error(t.data.msg)})},getHotMatch(){this.$store.state.showLoading=!0,Object(m["l"])().then(t=>{if(0==t.data.code){this.$store.state.showLoading=!1;let e=t.data.data;this.hotMatchList=e}else this.$store.state.showLoading=!1,this.$message.closeAll(),this.$message.error(t.data.msg)})},getGodList(){this.$store.state.showLoading=!0,Object(m["m"])().then(t=>{if(0==t.data.code){this.$store.state.showLoading=!1;let e=t.data.data;this.godList=e}else this.$store.state.showLoading=!1,this.$message.closeAll(),this.$message.error(t.data.msg)})}},mounted(){this.getHotMatch(),this.getGodList(),this.getoutsideAppConfigs(),window.sessionStorage.getItem("importantNotice")?this.showNotice=!1:this.getNotice()}},h=_,v=(s("182d"),Object(d["a"])(h,a,i,!1,null,"1d95bda4",null));e["default"]=v.exports},ba8d:function(t,e,s){t.exports=s.p+"static/img/telegram.924c7558.svg"},d6ec:function(t,e,s){t.exports=s.p+"static/img/zalo.9087cf4a.svg"},dca8:function(t,e,s){t.exports=s.p+"static/img/twitter.c86b433a.svg"}}]);