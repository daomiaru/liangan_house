(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/im-chat/im-chat"],{"366d":function(e,t,i){"use strict";var s=i("da55"),n=i.n(s);n.a},"4ab3":function(e,t,i){"use strict";i.r(t);var s=i("c5fb"),n=i.n(s);for(var o in s)"default"!==o&&function(e){i.d(t,e,function(){return s[e]})}(o);t["default"]=n.a},"5ea2":function(e,t,i){"use strict";(function(e){i("7754"),i("921b");s(i("66fd"));var t=s(i("fac5"));function s(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,i("6e42")["createPage"])},"9d27":function(e,t,i){"use strict";var s={"uni-load-more":()=>i.e("components/uni-load-more/uni-load-more").then(i.bind(null,"4923"))},n=function(){var e=this,t=e.$createElement;e._self._c},o=[];i.d(t,"b",function(){return n}),i.d(t,"c",function(){return o}),i.d(t,"a",function(){return s})},c5fb:function(e,t,i){"use strict";(function(e,s){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=i("2f62");function o(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{},s=Object.keys(i);"function"===typeof Object.getOwnPropertySymbols&&(s=s.concat(Object.getOwnPropertySymbols(i).filter(function(e){return Object.getOwnPropertyDescriptor(i,e).enumerable}))),s.forEach(function(t){r(e,t,i[t])})}return e}function r(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}var a,c=function(){return i.e("components/uni-load-more/uni-load-more").then(i.bind(null,"4923"))},h={components:{uniLoadMore:c},computed:o({},(0,n.mapState)(["hasLogin","loginProvider","nickname","avatar","receiveMessage","sendMessageResponse"]),{emojiList:{get:function(){return this.imUtils.emojiList},set:function(){}}}),data:function(){return{textMsg:"",isHistoryLoading:!1,scrollAnimation:!1,scrollTop:0,scrollToView:"",msgList:[],msgImgList:[],myuid:"",loadHistoryLimit:10,getMsgListLimit:10,chartUser:{},offset:0,ifHaveMore:!0,loadingText:{contentdown:"上拉显示更多",contentrefresh:"",contentnomore:"没有更多数据了"},RECORDER:e.getRecorderManager(),isVoice:!1,voiceTis:"按住 说话",recordTis:"手指上滑 取消发送",recording:!1,willStop:!1,initPoint:{identifier:0,Y:0},recordTimer:null,recordLength:0,AUDIO:e.createInnerAudioContext(),playMsgid:null,VoiceTimer:null,popupLayerClass:"",hideMore:!0,hideEmoji:!0}},onLoad:function(t){var i=this;if(a=this,t.title){var n=JSON.parse(t.fromUser);s("log",n," at pages\\im-chat\\im-chat.vue:250"),this.title=t.title,this.chartUser=n,e.setNavigationBarTitle({title:t.title}),this.jpushIM.resetUnreadMessageCount({type:"single",username:this.chartUser.username}),this.hasLogin?(this.getMsgList(),this.myuid=this.loginProvider,s("log",333," at pages\\im-chat\\im-chat.vue:282"),s("log",this.myuid," at pages\\im-chat\\im-chat.vue:283")):this.$store.dispatch("checkCurrentIMUser").then(function(t){e.showToast({title:"自动登录中..",icon:"none"}),i.login(t.username),i.getMsgList(),i.myuid=i.loginProvider},function(t){e.showToast({title:t,icon:"none"})}),this.AUDIO.onEnded(function(e){i.playMsgid=null}),this.RECORDER.onStart(function(e){i.recordBegin(e)}),this.RECORDER.onStop(function(e){i.recordEnd(e)})}else e.showModal({title:"错误",content:"缺少用户信息",showCancel:!1,cancelText:"",confirmText:"好的"})},onShow:function(){this.scrollTop=9999999},methods:o({},(0,n.mapMutations)(["login","logout"]),{getMockMsgList:function(){var e=[{type:"user",msg:{id:1,type:"text",time:"12:56",userinfo:{uid:0,username:"大黑哥",face:"/static/img/face.jpg"},content:{text:"为什么温度会相差那么大？"}}},{type:"user",msg:{id:2,type:"text",time:"12:57",userinfo:{uid:1,username:"售后客服008",face:"/static/img/im/face/face_2.jpg"},content:{text:"这个是有偏差的，两个温度相差十几二十度是很正常的，如果相差五十度，那即是质量问题了。"}}},{type:"user",msg:{id:3,type:"voice",time:"12:59",userinfo:{uid:1,username:"售后客服008",face:"/static/img/im/face/face_2.jpg"},content:{url:"/static/voice/1.mp3",length:"00:06"}}},{type:"user",msg:{id:4,type:"voice",time:"13:05",userinfo:{uid:0,username:"大黑哥",face:"/static/img/face.jpg"},content:{url:"/static/voice/2.mp3",length:"00:06"}}}];e.sort(this.imUtils.compareAscSort("timestamp"));for(var t=0;t<e.length;t++)"user"==e[t].type&&"img"==e[t].msg.type&&(e[t].msg.content=this.setPicSize(e[t].msg.content),this.msgImgList.push(e[t].msg.content.url));this.msgList=e,this.$nextTick(function(){this.scrollTop=9999,this.$nextTick(function(){this.scrollAnimation=!0})}),e.length<this.getMsgListLimit&&(this.ifHaveMore=!1)},screenMsg:function(t){if(s("log",222," at pages\\im-chat\\im-chat.vue:343"),s("log",t," at pages\\im-chat\\im-chat.vue:344"),"system"==t.type)switch(t.msg.type){case"text":this.addSystemTextMsg(t);break;case"redEnvelope":this.addSystemRedEnvelopeMsg(t);break}else if("user"==t.type){switch(t.msg.type){case"text":this.addTextMsg(t);break;case"voice":this.addVoiceMsg(t);break;case"img":this.addImgMsg(t);break;case"redEnvelope":this.addRedEnvelopeMsg(t);break}this.$nextTick(function(){this.scrollToView=t.msg.msgId}),t.msg.userinfo.uid!=this.myuid&&e.vibrateLong()}},loadHistory:function(e){if(!this.isHistoryLoading&&0!=this.ifHaveMore){this.isHistoryLoading=!0,this.scrollAnimation=!1;var t=this.msgList[0].msg.msgId;setTimeout(function(){var e={type:"single",username:a.chartUser.username,from:a.offset,limit:a.loadHistoryLimit};a.jpushIM.getHistoryMessages(e,function(e){if(0==e.errorCode){for(var i=a.setList(e.data),s=0;s<i.length;s++)"user"==i[s].type&&"img"==i[s].msg.type&&(i[s].msg.content=a.setPicSize(i[s].msg.content),a.msgImgList.unshift(i[s].msg.content.url)),a.msgList.unshift(i[s]);a.$nextTick(function(){a.scrollToView=t,a.$nextTick(function(){a.scrollAnimation=!0})}),i.length<a.loadHistoryLimit&&(a.ifHaveMore=!1),a.isHistoryLoading=!1}else a.ifHaveMore=!1,a.isHistoryLoading=!1})},1e3)}},getMsgList:function(){var t=this,i={type:"single",username:this.chartUser.username,from:this.offset,limit:this.loadHistoryLimit};this.jpushIM.getHistoryMessages(i,function(i){if(0==i.errorCode){if(i.data.length<1)return t.ifHaveMore=!1,!1;var s=t.setList(i.data);s.sort(t.imUtils.compareAscSort("timestamp"));for(var n=0;n<s.length;n++)"user"==s[n].type&&"img"==s[n].msg.type&&(s[n].msg.content=t.setPicSize(s[n].msg.content),t.msgImgList.push(s[n].msg.content.url));t.msgList=s,t.$nextTick(function(){this.scrollTop=9999,this.$nextTick(function(){this.scrollAnimation=!0})}),s.length<t.getMsgListLimit&&(t.ifHaveMore=!1)}else t.ifHaveMore=!1,e.showToast({title:i.errorMsg,icon:"none"})})},setPicSize:function(t){var i=e.upx2px(350),s=e.upx2px(350);if(t.w>i||t.h>s){var n=t.w/t.h;t.w=n>1?i:s*n,t.h=n>1?i/n:s}return t},setList:function(e){var t=this,i=[];return e.forEach(function(e){if(e){t.offset++;var s=t.setSingItem(e,"user");i.push(s)}}),i},setSingItem:function(e,t){var i,s={},n=(new Date).getTime();return"text"==e.messageType?s={text:a.imUtils.replaceEmoji(e.messageString)}:"img"==e.messageType?s={url:e.messageString,w:e.extras.w,h:e.extras.h}:"voice"==e.messageType&&(s={url:e.messageString,length:e.extras.length}),i=n-e.timestamp<864e5?this.dateUtils.formatDateTime(e.timestamp,"H:i:s"):this.dateUtils.formatDateTime(e.timestamp,"str"),{type:t,timestamp:e.timestamp,msg:{id:e.serverMessageId,msgId:e.msgId,messageId:e.messageId,type:e.messageType,status:e.status,flagString:e.flagString,time:i,userinfo:{uid:e.fromUser.username,username:e.fromUser.nickname,face:e.fromUser.avatar?e.fromUser.avatar:"/static/img/face.jpg"},content:s}}},showMore:function(){this.isVoice=!1,this.hideEmoji=!0,this.hideMore?(this.hideMore=!1,this.openDrawer()):this.hideDrawer()},openDrawer:function(){this.popupLayerClass="showLayer"},hideDrawer:function(){var e=this;this.popupLayerClass="",setTimeout(function(){e.hideMore=!0,e.hideEmoji=!0},150)},chooseImage:function(){this.getImage("album")},camera:function(){this.getImage("camera")},getImage:function(t){var i=this;this.hideDrawer(),e.chooseImage({sourceType:[t],sizeType:["original","compressed"],success:function(t){for(var s=function(s){e.getImageInfo({src:t.tempFilePaths[s],success:function(e){var n={url:t.tempFilePaths[s],w:e.width,h:e.height};i.sendMsg(n,"img")}})},n=0;n<t.tempFilePaths.length;n++)s(n)}})},chooseEmoji:function(){this.hideMore=!0,this.hideEmoji?(this.hideEmoji=!1,this.openDrawer()):this.hideDrawer()},addEmoji:function(e){this.textMsg+=e.alt},textareaFocus:function(){"showLayer"==this.popupLayerClass&&0==this.hideMore&&this.hideDrawer()},sendText:function(){if(this.hideDrawer(),this.textMsg){var e=this.textMsg,t={text:e};this.sendMsg(t,"text"),this.textMsg=""}},sendMsg:function(t,i){var n=this,o={};switch(i){case"text":o={msgType:i,type:"single",username:this.chartUser.username,text:t.text};break;case"img":o={msgType:i,type:"single",username:this.chartUser.username,path:t.url,extras:{w:t.w,h:t.h}};break;case"voice":o={msgType:i,type:"single",username:this.chartUser.username,path:t.url,extras:{length:t.length,duration:t.duration}};break;default:break}this.$store.dispatch("submitChatMsg",o).then(function(e){s("log","成功"," at pages\\im-chat\\im-chat.vue:693"),s("log",e," at pages\\im-chat\\im-chat.vue:694");var t=n.setSingItem(e,"user");n.screenMsg(t)},function(t){s("log","失败"," at pages\\im-chat\\im-chat.vue:706"),e.showModal({title:"发送失败",content:t,showCancel:!1,cancelText:"",confirmText:"关闭"}),s("log","JMessagePlugin 发送消息失败："+JSON.stringify(t)," at pages\\im-chat\\im-chat.vue:714")})},addTextMsg:function(e){s("log",111," at pages\\im-chat\\im-chat.vue:720"),s("log",e," at pages\\im-chat\\im-chat.vue:721"),this.msgList.push(e)},addVoiceMsg:function(e){this.msgList.push(e)},addImgMsg:function(e){e.msg.content=this.setPicSize(e.msg.content),this.msgImgList.push(e.msg.content.url),this.msgList.push(e)},addRedEnvelopeMsg:function(e){this.msgList.push(e)},addSystemTextMsg:function(e){this.msgList.push(e)},addSystemRedEnvelopeMsg:function(e){this.msgList.push(e)},sendSystemMsg:function(e,t){var i=this.msgList[this.msgList.length-1].msg.id;i++;var s={type:"system",msg:{id:i,type:t,content:e}};this.screenMsg(s)},toDetails:function(t){e.navigateTo({url:"HM-details/HM-details?rid="+t})},showPic:function(t){e.previewImage({indicator:"none",current:t.content.url,urls:this.msgImgList})},playVoice:function(e){this.playMsgid=e.id,this.AUDIO.src=e.content.url,this.$nextTick(function(){this.AUDIO.play()})},voiceBegin:function(e){e.touches.length>1||(this.initPoint.Y=e.touches[0].clientY,this.initPoint.identifier=e.touches[0].identifier,this.RECORDER.start({format:"mp3"}))},recordBegin:function(e){var t=this;this.recording=!0,this.voiceTis="松开 结束",this.recordLength=0,this.recordTimer=setInterval(function(){t.recordLength++},1e3)},voiceCancel:function(){this.recording=!1,this.voiceTis="按住 说话",this.recordTis="手指上滑 取消发送",this.willStop=!0,this.RECORDER.stop()},voiceIng:function(t){if(this.recording){var i=t.touches[0];this.initPoint.Y-i.clientY>=e.upx2px(100)?(this.willStop=!0,this.recordTis="松开手指 取消发送"):(this.willStop=!1,this.recordTis="手指上滑 取消发送")}},voiceEnd:function(e){this.recording&&(this.recording=!1,this.voiceTis="按住 说话",this.recordTis="手指上滑 取消发送",this.RECORDER.stop())},recordEnd:function(e){if(clearInterval(this.recordTimer),this.willStop)s("log","取消发送录音"," at pages\\im-chat\\im-chat.vue:844");else{var t={length:0,url:e.tempFilePath,duration:this.recordLength},i=parseInt(this.recordLength/60),n=this.recordLength%60;i=i<10?"0"+i:i,n=n<10?"0"+n:n,t.length=i+":"+n,this.sendMsg(t,"voice")}this.willStop=!1},switchVoice:function(){this.hideDrawer(),this.isVoice=!this.isVoice},discard:function(){}}),watch:{receiveMessage:function(e){if(e.fromUser.username==this.chartUser.username){this.jpushIM.resetUnreadMessageCount({type:"single",username:this.chartUser.username});var t=this.setSingItem(e,"user");this.screenMsg(t),this.jpushIM.setMessageHaveRead({id:e.messageId,type:"single",username:e.fromUser.username},function(e){s("log","JS setMessageHaveRead:"+JSON.stringify(e)," at pages\\im-chat\\im-chat.vue:875")})}},sendMessageResponse:function(e){if(e.toUser.username==this.chartUser.username)for(var t=this.msgList,i=0;i<t.length;i++)"user"==t[i].type&&t[i].msg.messageId==e.messageId&&(t[i].msg.status=e.status,t[i].msg.messageId=e.messageId,t[i].msg.id=e.serverMessageId)}}};t.default=h}).call(this,i("6e42")["default"],i("0de9")["default"])},da55:function(e,t,i){},fac5:function(e,t,i){"use strict";i.r(t);var s=i("9d27"),n=i("4ab3");for(var o in n)"default"!==o&&function(e){i.d(t,e,function(){return n[e]})}(o);i("366d");var r,a=i("f0c5"),c=Object(a["a"])(n["default"],s["b"],s["c"],!1,null,null,null,!1,s["a"],r);t["default"]=c.exports}},[["5ea2","common/runtime","common/vendor"]]]);