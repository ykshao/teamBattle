webpackJsonp([13],{140:function(t,e,n){var a=window.location.hostname;t.exports={host:"http://localhost:8080/",socket:"ws://"+a+":8181",battleTpl:function(t){var e="./components/questions/"+t+"/";return{vArithmetic:function(t){return n.e(4).then(function(){var a=[n(544)(e+"arithmetic.vue")];t.apply(null,a)}.bind(this)).catch(n.oe)},QABattle:function(t){return n.e(3).then(function(){var a=[n(546)(e+"qaBattle.vue")];t.apply(null,a)}.bind(this)).catch(n.oe)},breakBrick:function(t){return n.e(2).then(function(){var a=[n(545)(e+"breakBrick.vue")];t.apply(null,a)}.bind(this)).catch(n.oe)}}}}},147:function(t,e,n){"use strict";n.d(e,"a",function(){return a});var a="UPDATE_MATCHING"},148:function(t,e,n){"use strict";n.d(e,"a",function(){return a}),n.d(e,"b",function(){return r}),n.d(e,"c",function(){return o});var a="DISTRI_LOADING",r="VIEW_BATTLE",o="UPDATE_RANKINGS"},149:function(t,e,n){"use strict";n.d(e,"a",function(){return a}),n.d(e,"b",function(){return r}),n.d(e,"c",function(){return o}),n.d(e,"d",function(){return c});var a="USER_LOGIN",r="UPADATE_BATTLE_STATU",o="UPDATE_WEBSOCKET_STATU",c="BACK_TO_HOME"},204:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n(11),r=n.n(a),o=n(527),c=n.n(o),i=n(67),u=n(531),s=n.n(u),f=n(506),d=n.n(f),l=n(521),h=(n.n(l),n(138)),p=(n.n(h),n(208)),v=n(140),m=(n.n(v),n(250));r.a.use(d.a),r.a.use(m.a),r.a.use(s.a,{name:"v-touch"});new r.a({store:p.a,router:i.a,render:function(t){return t(c.a)}}).$mount("#app")},208:function(t,e,n){"use strict";var a=n(11),r=n.n(a),o=n(206),c=n(264),i=n(252),u=(n.n(i),n(251)),s=n(263),f=n(260),d=n(255);r.a.use(o.d);var l=new o.d.Store({state:c.a,getters:i,actions:u,mutations:s.a,modules:{teacher:f.a,student:d.a},strict:!1});e.a=l},250:function(t,e,n){"use strict";var a=n(61),r=n.n(a),o=n(207),c=n.n(o),i=n(11),u=(n.n(i),n(231)),s=n.n(u),f=n(140);n.n(f);e.a={install:function(t,e){t.prototype.$axios=s.a,t.prototype.$http=function(t,e,n,a,r,o,c,i){var u=s.a.CancelToken;s.a.request({baseURL:e,url:n,method:t,headers:{"X-Requested-With":"XMLHttpRequest"},params:a,data:a,timeout:6e4,responseType:"json",cancelToken:new u(function(t){try{i.cancelToken=t}catch(t){}})}).then(function(t){if(!e)return void r(t.data);var n=Number(t.data.code);switch(n){case 0:break;case 1:if(-4004===n)r(t.data);else{var a=t.data.data;if("string"==typeof a&&a.constructor==String)try{a=JSON.parse(a)}catch(t){}r(a,t.data.msg)}}}).catch(function(t){try{c(t)}catch(e){console.log(t)}})},t.prototype.$localSave={get:function(t){var e=localStorage.getItem(t);try{e=JSON.parse(localStorage.getItem(t))}catch(t){}return e},set:function(t,e){e=c()(e),localStorage.setItem(t,e)}},t.prototype.$sessionSave={get:function(t){var e=sessionStorage.getItem(t);try{e=JSON.parse(sessionStorage.getItem(t))}catch(t){}return e},set:function(t,e){e=c()(e),sessionStorage.setItem(t,e)}},t.prototype.$cookieSave={set:function(t,e){var n=new Date;n.setTime(n.getTime()+2592e6),document.cookie=t+"="+escape(e)+";expires="+n.toGMTString()},get:function(t){var e=void 0,n=new RegExp("(^| )"+t+"=([^;]*)(;|$)");return(e=document.cookie.match(n))?unescape(e[2]):null},del:function(t){var e=new Date;e.setTime(e.getTime()-1);var n=getCookie(t);null!=n&&(document.cookie=t+"="+n+";expires="+e.toGMTString())}},t.prototype.$deepClone=function(t){for(var e={},n=[t],a=[e],o=[],c=[];n.length>0;){var i=n.shift(),u=a.shift();o.push(i),c.push(u);for(var s in i){var f=i[s];if("object"!==(void 0===f?"undefined":r()(f)))u[s]=f;else{var d=o.indexOf(f);d>=0&&(u[s]=c[d]),n.push(f),u[s]={},a.push(u[s])}}}return e},t.sortBy=function(t){return function(e,n){var a=e[t],r=n[t];return isNaN(Number(a))||isNaN(Number(r))||(a=Number(a),r=Number(r)),a<r?-1:a>r?1:0}},t.copyArr=function(t){for(var e=[],n=0;n<t.length;n++)e.push(t[n]);return e}}}},251:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),n.d(e,"loginTo",function(){return r}),n.d(e,"backToHome",function(){return o});var a=n(149),r=function(t,e){(0,t.commit)(a.a,e)},o=function(t,e){(0,t.commit)(a.d,e)}},252:function(t,e){},253:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),n.d(e,"updateMatching",function(){return r});var a=n(147),r=function(t,e){(0,t.commit)(a.a,e)}},254:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),n.d(e,"allReadyStart",function(){return a});var a=function(t){return t.otherIsReady&&t.count_over}},255:function(t,e,n){"use strict";var a=n(257),r=n(254),o=n(253),c=n(256);e.a={namespaced:!0,state:a.a,getters:r,actions:o,mutations:c.a}},256:function(t,e,n){"use strict";var a=n(90),r=n.n(a),o=n(11),c=n.n(o),i=n(147),u=n(67);e.a=r()({},i.a,function(t,e){switch(e.type){case"battle_init":for(var n=0;n<e.data;n++)t.otherChecks.push({id:n});break;case"ready":t.otherIsReady=!0;break;case"count_over":t.count_over=!0;break;case"matched":t.matching.push(e.data),u.a.push({path:"/student/battle"});break;case"answering":e.data.length?t.otherChecks=e.data:(c.a.set(t.otherChecks[e.data.index],"check",e.data.check),c.a.set(t.otherChecks[e.data.index],"confirm",!0)),t.otherScore=e.data.total_score,t.otherAnswer.push(e.data.answer)}})},257:function(t,e,n){"use strict";n.d(e,"a",function(){return a});var a={matching:[],otherIsReady:!1,otherScore:0,otherAnswer:[],otherChecks:[],count_over:!1}},258:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),n.d(e,"distriForLoading",function(){return r}),n.d(e,"viewBattle",function(){return o}),n.d(e,"updateRanking",function(){return c});var a=n(148),r=function(t){(0,t.commit)(a.a)},o=function(t){var e=(t.dispatch,t.commit),n=t.rootState;e(a.b,n.userInfo.account_type)},c=function(t,e){(0,t.commit)(a.c,e)}},259:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),n.d(e,"rankingList",function(){return o});var a=n(11),r=n.n(a),o=function(t){return r.a.copyArr(t.battleList).sort(r.a.sortBy("score")).reverse()}},260:function(t,e,n){"use strict";var a=n(262),r=n(259),o=n(258),c=n(261);e.a={namespaced:!0,state:a.a,getters:r,actions:o,mutations:c.a}},261:function(t,e,n){"use strict";var a,r=n(90),o=n.n(r),c=n(148),i=n(67);e.a=(a={},o()(a,c.a,function(t,e){t.distriLoading=e}),o()(a,c.b,function(t,e){t.distriLoading=!1,"teacher"===e&&i.a.push({path:"/teacher/viewBattle"})}),o()(a,c.c,function(t,e){switch(e.type){case"member":console.log(e.data),t.battleList.push(e.data);break;case"rankings":for(var n=0;n<t.battleList.length;n++)if(t.battleList[n].id===e.data.userId){t.battleList[n].score=Number(e.data.total_score);break}}}),a)},262:function(t,e,n){"use strict";n.d(e,"a",function(){return a});var a={distriLoading:!1,quesData:{statu:!1,time:120,data:""},battleList:[]}},263:function(t,e,n){"use strict";n.d(e,"a",function(){return s});var a,r=n(90),o=n.n(r),c=n(11),i=(n.n(c),n(149)),u=n(67),s=(a={},o()(a,i.a,function(t,e){t.userInfo=e}),o()(a,i.b,function(t,e){t.battle_statu=e.statu,t.ques_type=e.ques_type}),o()(a,i.c,function(t,e){t.websocket_statu=e}),o()(a,i.d,function(t,e){u.a.push({path:"/"+e}),t.battle_statu=!1,t.student=JSON.parse(sessionStorage.getItem(e+"_state_default"))}),a)},264:function(t,e,n){"use strict";n.d(e,"a",function(){return a});var a={userInfo:{id:"",name:"",account_type:""},battle_statu:!1,websocket_statu:!1,ques_type:""}},521:function(t,e){},522:function(t,e){},527:function(t,e,n){n(522);var a=n(205)(null,n(528),null,null);t.exports=a.exports},528:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},staticRenderFns:[]}},532:function(t,e,n){n(138),t.exports=n(204)},67:function(t,e,n){"use strict";n.d(e,"a",function(){return c});var a=n(11),r=n.n(a),o=n(529);r.a.use(o.a);var c=new o.a({routes:[{path:"/",redirect:"/login"},{path:"/login",meta:{title:"登陆"},component:function(t){return n.e(11).then(function(){var e=[n(535)];t.apply(null,e)}.bind(this)).catch(n.oe)}},{path:"/teacher",meta:{title:"教师端"},component:function(t){return n.e(0).then(function(){var e=[n(540)];t.apply(null,e)}.bind(this)).catch(n.oe)},children:[{path:"/",meta:{title:"教师端首页"},component:function(t){return n.e(5).then(function(){var e=[n(541)];t.apply(null,e)}.bind(this)).catch(n.oe)}},{path:"viewBattle",meta:{title:"教师端对战榜"},component:function(t){return n.e(8).then(function(){var e=[n(542)];t.apply(null,e)}.bind(this)).catch(n.oe)}},{path:"editQues",meta:{title:"题目编辑"},component:function(t){return n.e(7).then(function(){var e=[n(543)];t.apply(null,e)}.bind(this)).catch(n.oe)}}]},{path:"/student",meta:{title:"学生端"},component:function(t){return n.e(1).then(function(){var e=[n(537)];t.apply(null,e)}.bind(this)).catch(n.oe)},children:[{path:"/",meta:{title:"学生端首页"},component:function(t){return n.e(9).then(function(){var e=[n(538)];t.apply(null,e)}.bind(this)).catch(n.oe)}},{meta:{title:"学生端对战界面"},path:"battle",component:function(t){return n.e(6).then(function(){var e=[n(539)];t.apply(null,e)}.bind(this)).catch(n.oe)}}]},{path:"*",component:function(t){return n.e(10).then(function(){var e=[n(536)];t.apply(null,e)}.bind(this)).catch(n.oe)}}]});c.beforeEach(function(t,e,n){window.document.title=t.meta.title,n()})}},[532]);