(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["common/main"],{3740:function(e,t,n){"use strict";(function(e){n("7754"),n("921b");var t=c(n("64d5")),a=(c(n("2f62")),c(n("66fd"))),o=c(n("d257")),r=c(n("eeed")),u=c(n("8415")),i=n("1b7c"),s=c(n("afad"));function c(e){return e&&e.__esModule?e:{default:e}}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},a=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),a.forEach(function(t){f(e,t,n[t])})}return e}function f(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}a.default.prototype.$baseUrl=t.default,a.default.config.productionTip=!1,a.default.prototype.dateUtils=o.default,a.default.prototype.imUtils=r.default,a.default.prototype.jpushIM=u.default,s.default.mpType="app";var d=new a.default(l({},s.default,{store:i.store}));e(d).$mount()}).call(this,n("6e42")["createApp"])},"3f25":function(e,t,n){},"999d":function(e,t,n){"use strict";(function(e,a){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;i(n("1b7c"));var o=i(n("8415")),r=i(n("66fd")),u=n("2f62");function i(e){return e&&e.__esModule?e:{default:e}}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},a=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),a.forEach(function(t){c(e,t,n[t])})}return e}function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var l={created:function(){var t=this,n=[];e.request({url:this.$baseUrl.baseUrl+"/getProductlist",data:"lalla",success:function(e){for(var a=0;a<e.data.data.length;a++)1==e.data.data[a].houseOK&&n.push(e.data.data[a]);t.saveProductlist(n)}}),o.default.init(),o.default.addClickMessageNotificationListener(function(t){e.navigateTo({url:"./im-chat/im-chat?title="+t.fromName+"&fromUser="+JSON.stringify(t.fromUser)})}),o.default.addReceiveMessageListener(function(e){var n=e.fromName;n||(n=e.fromUser.username),t.$store.commit("setReceiveMessage",e),plus.nativeUI.toast("您有来自"+n+"的新消息")}),o.default.addLoginStateChangedListener(function(n){e.showModal({title:"登录状态变更",content:JSON.stringify(n),showCancel:!1,cancelText:"",confirmText:"关闭"}),t.$store.commit("logout"),t.$store.commit("setLoginStateChanged",n)}),o.default.addSendMessageResponseCallbackListener(function(e){a("log",666," at App.vue:74"),a("log",e," at App.vue:75"),t.$store.commit("setSendMessageResponse",e)}),o.default.addfriendInvitiaonChangeListener(function(n){e.showModal({title:"您有新的好友事件",content:JSON.stringify(n),cancelText:"知道了",confirmText:"去查看",success:function(t){t.confirm&&e.navigateTo({url:"/pages/friend-invitiaon/friend-invitiaon"})}}),a("log",n," at App.vue:94"),t.$store.commit("addFriendInvitiaonChange",n)})},onLaunch:function(){var t=this;a("log",this.$baseUrl.baseUrl," at App.vue:100"),a("log","App Launch"," at App.vue:101"),e.getSystemInfo({success:function(e){r.default.prototype.StatusBar=e.statusBarHeight,"android"==e.platform?r.default.prototype.CustomBar=e.statusBarHeight+50:r.default.prototype.CustomBar=e.statusBarHeight+45}}),e.getStorage({key:"userInfo",success:function(n){e.request({url:t.$baseUrl.baseUrl+"/checklogin",sslVerify:!1,header:{"Content-Type":"application/x-www-form-urlencoded",Authorization:"Bearer"},data:{userId:n.data.userId,token:n.data.token},method:"POST",success:function(e){a("log",e.data," at App.vue:142"),0===e.data.err_code&&(a("log","更新登录状态"," at App.vue:144"),t.login(e.data))}})}})},onShow:function(){a("log","App Show"," at App.vue:154")},onHide:function(){a("log","App Hide"," at App.vue:157")},methods:s({},(0,u.mapMutations)(["login"]),(0,u.mapMutations)(["saveProductlist"]))};t.default=l}).call(this,n("6e42")["default"],n("0de9")["default"])},afad:function(e,t,n){"use strict";n.r(t);var a=n("e6fe");for(var o in a)"default"!==o&&function(e){n.d(t,e,function(){return a[e]})}(o);n("c838");var r,u,i,s,c=n("f0c5"),l=Object(c["a"])(a["default"],r,u,!1,null,null,null,!1,i,s);t["default"]=l.exports},c838:function(e,t,n){"use strict";var a=n("3f25"),o=n.n(a);o.a},e6fe:function(e,t,n){"use strict";n.r(t);var a=n("999d"),o=n.n(a);for(var r in a)"default"!==r&&function(e){n.d(t,e,function(){return a[e]})}(r);t["default"]=o.a}},[["3740","common/runtime","common/vendor"]]]);