<template>
	<view>

		<view class="content" @touchstart="hideDrawer" >
			<scroll-view class="msg-list" scroll-y="true" :scroll-with-animation="scrollAnimation" :scroll-top="scrollTop"
			 :scroll-into-view="scrollToView" @scrolltoupper="loadHistory" upper-threshold="50" style="background-image: url(../../static/icon/144x144.png); background-size: cover;">
				<!-- 加载历史数据waitingUI -->
				<view class="loading" v-if="ifHaveMore==true">
					<view class="spinner">
						<view class="rect1"></view>
						<view class="rect2"></view>
						<view class="rect3"></view>
						<view class="rect4"></view>
						<view class="rect5"></view>
					</view>
				</view>
				<view class="row" v-else>
					<view class="system">
						<!-- 文字消息 -->
						<view class="text">暂无更多记录</view>
					</view>
				</view>

				<view class="row" v-for="(row,index) in msgList" :key="index" :id="row.msg.msgId">
					<!-- 系统消息 -->
					<block v-if="row.type=='system'">
						<view class="system">
							<!-- 文字消息 -->
							<view v-if="row.msg.type=='text'" class="text">
								{{row.msg.content.text}}
							</view>
						</view>
					</block>
					<!-- 用户消息 -->
					<block v-if="row.type=='user'">
						<!-- 自己发出的消息 -->
						<view class="my" v-if="row.msg.userinfo.uid==myuid">
							<!-- 左-消息 -->
							<view class="left">
								<!-- 初始状态 ，0 1都是发送中 -->
								<view v-if="row.msg.status < 2">
									<uni-load-more :contentText="loadingText" iconType="spinner" status="loading" />
								</view>
								<!-- 文字消息 -->
								<view v-if="row.msg.type=='text'" class="bubble">
									<rich-text :nodes="row.msg.content.text"></rich-text>
								</view>
								<!-- 语言消息 -->
								<view v-if="row.msg.type=='voice'" class="bubble voice" @tap="playVoice(row.msg)" :class="playMsgid == row.msg.id?'play':''">
									<view class="length">{{row.msg.content.length}}</view>
									<view class="icon my-voice"></view>
								</view>
								<!-- 图片消息 -->
								<view v-if="row.msg.type=='img'" class="bubble img" @tap="showPic(row.msg)">
									<image :src="row.msg.content.url" :style="{'width': row.msg.content.w+'px','height': row.msg.content.h+'px'}"></image>
								</view>
							</view>
							<!-- 右-头像 -->
							<view class="right">
								<image src="../../static/icon/96x96.png"></image>
							</view>
						</view>
						<!-- 别人发出的消息 -->
						<view class="other" v-if="row.msg.userinfo.uid!=myuid">
							<!-- 左-头像 -->
							<view class="left">
								<image src="../../static/HM-PersonalCenter/face.jpeg"></image>
							</view>
							<!-- 右-用户名称-时间-消息 -->
							<view class="right">
								<view class="username">
									<view class="name" style="color: #F3F3F3;">{{row.msg.userinfo.username}}</view>
									<view class="time" style="color: #F3F3F3;position: relative;right: 20px;">{{row.msg.time}}</view>
								</view>
								<!-- 文字消息 -->
								<view v-if="row.msg.type=='text'" class="bubble" >
									<rich-text :nodes="row.msg.content.text"></rich-text>
								</view>
								<!-- 语音消息 -->
								<view v-if="row.msg.type=='voice'" class="bubble voice" @tap="playVoice(row.msg)" :class="playMsgid == row.msg.id?'play':''">
									<view class="icon other-voice"></view>
									<view class="length">{{row.msg.content.length}}</view>
								</view>
								<!-- 图片消息 -->
								<view v-if="row.msg.type=='img'" class="bubble img" @tap="showPic(row.msg)">
									<image :src="row.msg.content.url" :style="{'width': row.msg.content.w+'px','height': row.msg.content.h+'px'}"></image>
								</view>
							</view>
						</view>
					</block>
				</view>
			</scroll-view>
		</view>
		<!-- 抽屉栏 -->
		<view class="popup-layer" :class="popupLayerClass" @touchmove.stop.prevent="discard">
			<!-- 表情 -->
			<swiper class="emoji-swiper" :class="{hidden:hideEmoji}" indicator-dots="true" duration="150">
				<swiper-item v-for="(page,pid) in emojiList" :key="pid">
					<view v-for="(em,eid) in page" :key="eid" @tap="addEmoji(em)">
						<image mode="widthFix" :src="'/static/img/emoji/'+em.url"></image>
					</view>
				</swiper-item>
			</swiper>
			<!-- 更多功能 相册-拍照 -->
			<view class="more-layer" :class="{hidden:hideMore}">
				<view class="list">
					<view class="box" @tap="chooseImage">
						<view class="icon tupian2"></view>
					</view>
					<view class="box" @tap="camera">
						<view class="icon paizhao"></view>
					</view>
				</view>
			</view>
		</view>
		<!-- 底部输入栏 -->
		<view class="input-box" :class="popupLayerClass" @touchmove.stop.prevent="discard">
			<!-- H5下不能录音，输入栏布局改动一下 -->
			<!-- #ifndef H5 -->
			<view class="voice">
				<view class="icon" :class="isVoice?'jianpan':'yuyin'" @tap="switchVoice"></view>
			</view>
			<!-- #endif -->
			<!-- #ifdef H5 -->
			<view class="more" @tap="showMore">
				<view class="icon add"></view>
			</view>
			<!-- #endif -->
			<view class="textbox">
				<!-- 使用前端录音模板 -->
				<view class="voice-mode" :class="[isVoice?'':'hidden',recording?'recording':'']" @touchstart="voiceBegin"
				 @touchmove.stop.prevent="voiceIng" @touchend="voiceEnd" @touchcancel="voiceCancel">{{voiceTis}}</view>
				<view class="text-mode" :class="isVoice?'hidden':''">
					<view class="box">
						<textarea auto-height="true" v-model="textMsg" @focus="textareaFocus" />
						</view>
					<view class="em" @tap="chooseEmoji">
						<view class="icon biaoqing"></view>
					</view>
				</view>
			</view>
			<!-- #ifndef H5 -->
			<view class="more" @tap="showMore">
				<view class="icon add"></view>
			</view>
			<!-- #endif -->
			<view class="send" :class="isVoice?'hidden':''" @tap="sendText" >
				<view class="btn" >发送</view>
			</view>
		</view>
		<!-- 录音UI效果 -->
		<view class="record" :class="recording?'':'hidden'">
			<view class="ing" :class="willStop?'hidden':''"><view class="icon luyin2" ></view></view>
			<view class="cancel" :class="willStop?'':'hidden'"><view class="icon chehui" ></view></view>
			<view class="tis" :class="willStop?'change':''">{{recordTis}}</view>
		</view>
		
	</view>
</template>
<script>
	import {
		mapState,
		mapMutations
	} from 'vuex'
	
	import uniLoadMore from '@/components/uni-load-more/uni-load-more.vue'
	
	var _self;
	
	export default {
		components: {
			uniLoadMore
		},
		computed: {
			...mapState(['hasLogin', 'loginProvider','nickname','avatar','receiveMessage','sendMessageResponse']),
			emojiList: {
				get: function() {
					return this.imUtils.emojiList
				},
				set: function() {}
			},
		},
		data() {
			return {
				//文字消息
				textMsg:'',
				//消息列表
				isHistoryLoading:false,
				scrollAnimation:false,
				scrollTop:0,
				scrollToView:'',
				msgList:[],
				msgImgList:[],
				myuid:"",
				loadHistoryLimit:10,// 每次加载历史记录条数
				getMsgListLimit:10,	// 初始化记录的条数
				chartUser: {}, 		// 聊天对象的相关信息
				offset: 0, 			// 从第几条开始，每获取过一条，+1
				ifHaveMore:true,	// 是否还有更多
				loadingText:{
					contentdown: '上拉显示更多',
					contentrefresh: '', // 发送消息以后，loading出现，不需要文字
					contentnomore: '没有更多数据了'
				},
				//录音相关参数
				// #ifndef H5
				//H5不能录音
				RECORDER:uni.getRecorderManager(),
				// #endif
				isVoice:false,
				voiceTis:'按住 说话',
				recordTis:"手指上滑 取消发送",
				recording:false,
				willStop:false,
				initPoint:{identifier:0,Y:0},
				recordTimer:null,
				recordLength:0,
				
				//播放语音相关参数
				AUDIO:uni.createInnerAudioContext(),
				playMsgid:null,
				VoiceTimer:null,
				// 抽屉参数
				popupLayerClass:'',
				// more参数
				hideMore:true,
				//表情定义
				hideEmoji:true,
			};
		},
		onLoad(option) {
			_self = this;
			
			// 赋值聊天对象的username，nickname等信息
			// #ifdef APP-PLUS
			
				// 设置标题
				if (!option.title) {
					uni.showModal({
						title: '错误',
						content: '缺少用户信息',
						showCancel: false,
						cancelText: '',
						confirmText: '好的'
					});
					return;
				}
				
				var fromUser = JSON.parse(option.fromUser);
				console.log(fromUser)
				this.title = option.title;
				this.chartUser = fromUser;
				uni.setNavigationBarTitle({
					title: option.title
				});
				// 重置会话消息未读数
				this.jpushIM.resetUnreadMessageCount({"type":"single","username":this.chartUser.username});
				
				// 如果没有登录
				if(!this.hasLogin){
					// 检测当前IM是否登录，如果已经已经登录，则调用登录方法
					this.$store.dispatch("checkCurrentIMUser").then(response => {
						uni.showToast({
							title: '自动登录中..',
							icon:'none'
						});
						this.login(response.username);
						
						this.getMsgList();
						this.myuid = this.loginProvider;
						// console.log("重新登录，当前登录用户：" + this.loginProvider);
					}, response => {
						uni.showToast({
							title: response,
							icon:'none'
						});
					})
				}else{
					
					this.getMsgList();
					this.myuid = this.loginProvider;
					console.log(333)
					console.log(this.myuid)
				}
			// #endif
			
			// #ifdef H5
			this.getMockMsgList();
			// #endif
			
			//语音自然播放结束
			this.AUDIO.onEnded((res)=>{
				this.playMsgid=null;
			});
			// #ifndef H5
			//录音开始事件
			this.RECORDER.onStart((e)=>{
				this.recordBegin(e);
			})
			//录音结束事件
			this.RECORDER.onStop((e)=>{
				this.recordEnd(e);
			})
			// #endif
			
		},
		onShow(){
			this.scrollTop = 9999999;
		},
		methods:{
			...mapMutations(['login','logout']),
			getMockMsgList(){
				let list = [
					{type:"user",msg:{id:1,type:"text",time:"12:56",userinfo:{uid:0,username:"大黑哥",face:"/static/img/face.jpg"},content:{text:"为什么温度会相差那么大？"}}},
					{type:"user",msg:{id:2,type:"text",time:"12:57",userinfo:{uid:1,username:"售后客服008",face:"/static/img/im/face/face_2.jpg"},content:{text:"这个是有偏差的，两个温度相差十几二十度是很正常的，如果相差五十度，那即是质量问题了。"}}},
					{type:"user",msg:{id:3,type:"voice",time:"12:59",userinfo:{uid:1,username:"售后客服008",face:"/static/img/im/face/face_2.jpg"},content:{url:"/static/voice/1.mp3",length:"00:06"}}},
					{type:"user",msg:{id:4,type:"voice",time:"13:05",userinfo:{uid:0,username:"大黑哥",face:"/static/img/face.jpg"},content:{url:"/static/voice/2.mp3",length:"00:06"}}},
				]
				list.sort(this.imUtils.compareAscSort("timestamp")); // 按指定字段排序
				// 获取消息中的图片,并处理显示尺寸
				for(let i=0;i<list.length;i++){
					if(list[i].type=='user'&&list[i].msg.type=="img"){
						list[i].msg.content = this.setPicSize(list[i].msg.content);
						this.msgImgList.push(list[i].msg.content.url);
					}
				}
				this.msgList = list;
				// 滚动到底部
				this.$nextTick(function() {
					//进入页面滚动到底部
					this.scrollTop = 9999;
					this.$nextTick(function() {
						this.scrollAnimation = true;
					});
				});
				// 如果长度不足10条，就表示没有下一页了
				if(list.length < this.getMsgListLimit){
					this.ifHaveMore = false;
				}
			},
			// 接受消息(筛选处理)
			screenMsg(msg){
				console.log(222)
				console.log(msg)
				// 调用IM发送消息方法，进行筛选处理
				if(msg.type=='system'){
					// 系统消息
					switch (msg.msg.type){
						case 'text':
							this.addSystemTextMsg(msg);
							break;
						case 'redEnvelope':
							this.addSystemRedEnvelopeMsg(msg);
							break;
					}
				}else if(msg.type=='user'){
					// 用户消息
					switch (msg.msg.type){
						case 'text':
							// 文字消息
							this.addTextMsg(msg);
							break;
						case 'voice':
							this.addVoiceMsg(msg);
							break;
						case 'img':
							// 图片消息
							this.addImgMsg(msg);
							break;
						case 'redEnvelope':
							this.addRedEnvelopeMsg(msg);
							break;
					}
					this.$nextTick(function() {
						// 滚动到底
						this.scrollToView = msg.msg.msgId
					});
					// console.log('用户消息');
					//非自己的消息震动
					if(msg.msg.userinfo.uid!=this.myuid){
						// console.log('振动');
						uni.vibrateLong();
					}
				}
				
			},
			
			//触发滑动到顶部(加载历史信息记录)
			loadHistory(e){
				if(this.isHistoryLoading){
					return ;
				}
				if(this.ifHaveMore == false){
					return;
				}
				this.isHistoryLoading = true;//参数作为进入请求标识，防止重复请求
				this.scrollAnimation = false;//关闭滑动动画
				
				let Viewid = this.msgList[0].msg.msgId;//记住第一个信息ID
				//请求历史记录效果
				setTimeout(()=>{
					var params = {
						"type":"single",
						"username": _self.chartUser.username,
						"from": _self.offset, // 从第几条开始
						"limit": _self.loadHistoryLimit, // 历史记录每次加载10条
					};
					// console.log("JMessagePlugin getHistoryMessages获取历史消息记录传参：" + JSON.stringify(params));
					_self.jpushIM.getHistoryMessages(params, (res) => {
						if(res.errorCode == 0){
							var list = _self.setList(res.data);
							// console.log("JMessagePlugin getHistoryMessages处理过的消息体：" + JSON.stringify(list));
							// 获取消息中的图片,并处理显示尺寸
							for(let i=0;i<list.length;i++){
								if(list[i].type=='user'&&list[i].msg.type=="img"){
									list[i].msg.content = _self.setPicSize(list[i].msg.content);
									_self.msgImgList.unshift(list[i].msg.content.url);
								}
								_self.msgList.unshift(list[i]);
							}
							//这段代码很重要，不然每次加载历史数据都会跳到顶部
							_self.$nextTick(function() {
								_self.scrollToView = Viewid;//跳转上次的第一行信息位置
								_self.$nextTick(function() {
									_self.scrollAnimation = true;//恢复滚动动画
								});
							});
							// 如果长度不足10条，就表示没有下一页了
							if(list.length < _self.loadHistoryLimit){
								_self.ifHaveMore = false;
							}
							_self.isHistoryLoading = false;
							
						}else{
							_self.ifHaveMore = false;
							_self.isHistoryLoading = false;
						}
						
					})
					
				},1000)
			},
			// 加载初始页面消息
			getMsgList(){
				// 消息列表
				var params = {
					"type":"single",
					"username": this.chartUser.username,
					"from": this.offset, // 从第几条开始
					"limit": this.loadHistoryLimit, // 历史记录每次加载10条
				};
				// console.log("JMessagePlugin getHistoryMessages初始化传参：" + JSON.stringify(params));
				this.jpushIM.getHistoryMessages(params, (res) => {
					if(res.errorCode == 0){
						// console.log(res.data);
						if(res.data.length<1){
							// 没有历史记录
							this.ifHaveMore = false;
							return false;
						}
						var list = this.setList(res.data);
						list.sort(this.imUtils.compareAscSort("timestamp")); // 按指定字段排序
						// 获取消息中的图片,并处理显示尺寸
						for(let i=0;i<list.length;i++){
							if(list[i].type=='user'&&list[i].msg.type=="img"){
								list[i].msg.content = this.setPicSize(list[i].msg.content);
								this.msgImgList.push(list[i].msg.content.url);
							}
						}
						this.msgList = list;
						console.log(this.msgList)
						// 滚动到底部
						this.$nextTick(function() {
							//进入页面滚动到底部
							this.scrollTop = 9999;
							this.$nextTick(function() {
								this.scrollAnimation = true;
							});
						});
						// 如果长度不足10条，就表示没有下一页了
						if(list.length < this.getMsgListLimit){
							this.ifHaveMore = false;
						}
						
					}else{
						this.ifHaveMore = false;
						uni.showToast({
							title: res.errorMsg,
							icon: 'none'
						});
					}
				})
			},
			//处理图片尺寸，如果不处理宽高，新进入页面加载图片时候会闪
			setPicSize(content){
				// 让图片最长边等于设置的最大长度，短边等比例缩小，图片控件真实改变，区别于aspectFit方式。
				let maxW = uni.upx2px(350);//350是定义消息图片最大宽度
				let maxH = uni.upx2px(350);//350是定义消息图片最大高度
				if(content.w>maxW||content.h>maxH){
					let scale = content.w/content.h;
					content.w = scale>1?maxW:maxH*scale;
					content.h = scale>1?maxW/scale:maxH;
				}
				return content;
			},
			// 设置列表，items是sdk返回来的列表
			setList: function(items) {
				var newItems = [];
				items.forEach((e) => {
					if (e) {
						this.offset++;
						var item = this.setSingItem(e,"user");
						// console.log("JMessagePlugin 消息体为： " + JSON.stringify(item));
						newItems.push(item);
					}
				});
				return newItems;
			},
			/**
			 * 处理单条sdk的message消息转为遍历中规定的消息体
			 * @param {Object} item 完整的item对象，sdk的message格式
			 * @param {Object} type 需要处理类型，支持user / system
			 */
			setSingItem:function(item,type){
				var content = {};
				var today = new Date().getTime();
				if(item.messageType == "text"){
					// 文字消息
					content = {
						text:_self.imUtils.replaceEmoji(item.messageString),
					}
				}else if(item.messageType == "img"){
					// 图片消息
					content = {
						url:item.messageString,
						w:item.extras.w,	// 这里的附加数是在upload的时候就带上去的
						h:item.extras.h,
					}
				}else if(item.messageType == "voice"){
					content = {
						url:item.messageString,
						length:item.extras.length,	// 这里的附加数是在upload的时候就带上去的
					}
				}
				var time;
				if((today - item.timestamp) < 86400000){
					time = this.dateUtils.formatDateTime((item.timestamp), "H:i:s");
				}else{
					time = this.dateUtils.formatDateTime((item.timestamp), "str");
				};
				return {
					type:type,
					timestamp:item.timestamp,
					msg:{
						id:item.serverMessageId,	// 服务器端对应的消息 Id
						msgId:item.msgId,			// msgId Android中做过处理
						messageId:item.messageId,	// 本地数据库中的消息 Id。
						type:item.messageType,
						status:item.status,
						flagString:item.flagString,
						time:time,
						userinfo:{
							uid:item.fromUser.username,
							username:item.fromUser.nickname,
							face:item.fromUser.avatar?item.fromUser.avatar:"/static/img/face.jpg",// 聊天人的头像
						},
						content:content,
					},
				}
			},
			//更多功能(点击+弹出) 
			showMore(){
				this.isVoice = false;
				this.hideEmoji = true;
				if(this.hideMore){
					this.hideMore = false;
					this.openDrawer();
				}else{
					this.hideDrawer();
				}
			},
			// 打开抽屉
			openDrawer(){
				this.popupLayerClass = 'showLayer';
			},
			// 隐藏抽屉
			hideDrawer(){
				this.popupLayerClass = '';
				setTimeout(()=>{
					this.hideMore = true;
					this.hideEmoji = true;
				},150);
			},
			// 选择图片发送
			chooseImage(){
				this.getImage('album');
			},
			//拍照发送
			camera(){
				this.getImage('camera');
			},
			//选照片 or 拍照
			getImage(type){
				this.hideDrawer();
				uni.chooseImage({
					sourceType:[type],
					sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
					success: (res)=>{
						for(let i=0;i<res.tempFilePaths.length;i++){
							uni.getImageInfo({
								src: res.tempFilePaths[i],
								success: (image)=>{
									// console.log(image.width);
									// console.log(image.height);
									let msg = {url:res.tempFilePaths[i],w:image.width,h:image.height};
									this.sendMsg(msg,'img');
								}
							});
						}
					}
				});
			},
			// 选择表情
			chooseEmoji(){
				this.hideMore = true;
				if(this.hideEmoji){
					this.hideEmoji = false;
					this.openDrawer();
				}else{
					this.hideDrawer();
				}
			},
			//添加表情
			addEmoji(em){
				this.textMsg+=em.alt;
			},
			
			//获取焦点，如果不是选表情ing,则关闭抽屉
			textareaFocus(){
				if(this.popupLayerClass=='showLayer' && this.hideMore == false){
					this.hideDrawer();
				}
			},
			// 发送文字消息
			sendText(){
				this.hideDrawer();//隐藏抽屉
				if(!this.textMsg){
					return;
				}
				// let content = this.replaceEmoji(this.textMsg);
				let content = this.textMsg;
				let msg = {text:content}
				this.sendMsg(msg,'text');
				this.textMsg = '';//清空输入框
			},
			// 发送消息
			sendMsg(content,type){
				var params = {};
				switch (type){
					case "text":
						params = {
							"msgType":type,
							"type":"single",	// 消息类型，'single' / 'group' / 'chatRoom'
							"username":this.chartUser.username, // 接收人
							"text":content.text, // 文字内容
						};
						// console.log("文本消息传参：" + JSON.stringify(params));
						break;
					case "img":
						params = {
							"msgType":type,
							"type":"single",	// 消息类型，'single' / 'group' / 'chatRoom'
							"username":this.chartUser.username,// 接收人
							"path":content.url,
							"extras":{"w":content.w,"h":content.h},// 附加字段，宽度/高度
						};
						// console.log("图片消息传参：" + JSON.stringify(params));
						break;
					case "voice":
						// 语音消息
						params = {
							"msgType":type,
							"type":"single",	// 消息类型，'single' / 'group' / 'chatRoom'
							"username":this.chartUser.username,// 接收人
							"path":content.url,
							"extras":{"length":content.length,"duration":content.duration},// 语音长度
						};
						break;
					default:
						break;
				}
				this.$store.dispatch("submitChatMsg", params).then(response => {
					// 成功
					console.log('成功')
					console.log(response)
					var msg = this.setSingItem(response,"user");
					// if(type == "text"){
					// 	// 如果是文字，替换一下表情
					// 	content.text = _self.imUtils.replaceEmoji(msg.msg.content.text);
					// };
					msg.msg.content = content; // 这里一定要加，是因为刚发出去的图片消息是是异步上传
					
					// 发送消息
					this.screenMsg(msg);
				}, response => {
					// 失败
					console.log('失败')
					uni.showModal({
						title: '发送失败',
						content: response,
						showCancel: false,
						cancelText: '',
						confirmText: '关闭',
					});
					console.log("JMessagePlugin 发送消息失败：" + JSON.stringify(response));
				})
			},
			
			// 添加文字消息到列表
			addTextMsg(msg){
				console.log(111)
				console.log(msg)
				this.msgList.push(msg);
			},
			// 添加语音消息到列表
			addVoiceMsg(msg){
				this.msgList.push(msg);
			},
			// 添加图片消息到列表
			addImgMsg(msg){
				msg.msg.content = this.setPicSize(msg.msg.content);
				this.msgImgList.push(msg.msg.content.url);
				this.msgList.push(msg);
			},
			addRedEnvelopeMsg(msg){
				this.msgList.push(msg);
			},
			// 添加系统文字消息到列表
			addSystemTextMsg(msg){
				this.msgList.push(msg);
			},
			// 添加系统红包消息到列表
			addSystemRedEnvelopeMsg(msg){
				this.msgList.push(msg);
			},
			
			sendSystemMsg(content,type){
				let lastid = this.msgList[this.msgList.length-1].msg.id;
				lastid++;
				let row = {type:"system",msg:{id:lastid,type:type,content:content}};
				this.screenMsg(row)
			},
			//领取详情
			toDetails(rid){
				uni.navigateTo({
					url:'HM-details/HM-details?rid='+rid
				})
			},
			// 预览图片
			showPic(msg){
				uni.previewImage({
					indicator:"none",
					current:msg.content.url,
					urls: this.msgImgList
				});
			},
			// 播放语音
			playVoice(msg){
				// console.log("播放语音文件:" + JSON.stringify(msg));
				this.playMsgid=msg.id;
				this.AUDIO.src = msg.content.url;
				this.$nextTick(function() {
					this.AUDIO.play();
				});
			},
			// 录音开始
			voiceBegin(e){
				if(e.touches.length>1){
					return ;
				}
				this.initPoint.Y = e.touches[0].clientY;
				this.initPoint.identifier = e.touches[0].identifier;
				this.RECORDER.start({format:"mp3"});//录音开始,
			},
			//录音开始UI效果
			recordBegin(e){
				this.recording = true;
				this.voiceTis='松开 结束';
				this.recordLength = 0;
				this.recordTimer = setInterval(()=>{
					this.recordLength++;
				},1000)
			},
			// 录音被打断
			voiceCancel(){
				this.recording = false;
				this.voiceTis='按住 说话';
				this.recordTis = '手指上滑 取消发送'
				this.willStop = true;//不发送录音
				this.RECORDER.stop();//录音结束
			},
			// 录音中(判断是否触发上滑取消发送)
			voiceIng(e){
				if(!this.recording){
					return;
				}
				let touche = e.touches[0];
				//上滑一个导航栏的高度触发上滑取消发送
				if(this.initPoint.Y - touche.clientY>=uni.upx2px(100)){
					this.willStop = true;
					this.recordTis = '松开手指 取消发送'
				}else{
					this.willStop = false;
					this.recordTis = '手指上滑 取消发送'
				}
			},
			// 结束录音
			voiceEnd(e){
				if(!this.recording){
					return;
				}
				this.recording = false;
				this.voiceTis='按住 说话';
				this.recordTis = '手指上滑 取消发送'
				this.RECORDER.stop();//录音结束
			},
			//录音结束(回调文件)
			recordEnd(e){
				clearInterval(this.recordTimer);
				if(!this.willStop){
					let msg = {
						length:0,
						url:e.tempFilePath,
						duration:this.recordLength,// 【**必传】，语音内容的持续时长. 单位是秒
					}
					let min = parseInt(this.recordLength/60);
					let sec = this.recordLength%60;
					min = min<10?'0'+min:min;
					sec = sec<10?'0'+sec:sec;
					msg.length = min+':'+sec;
					
					// console.log("发送语音: " + JSON.stringify(msg));
					this.sendMsg(msg,'voice');
				}else{
					console.log('取消发送录音');
				}
				this.willStop = false;
			},
			// 切换语音/文字输入
			switchVoice(){
				this.hideDrawer();
				this.isVoice = this.isVoice?false:true;
			},
			discard(){
				return;
			}
		},
		watch: {
			receiveMessage(res) {
				// console.log("监听新消息事件");
				if (res.fromUser.username == this.chartUser.username) {
					// 监听有收到新消息，并且接收人是当前用户
					// 重置会话消息未读数
					this.jpushIM.resetUnreadMessageCount({"type":"single","username":this.chartUser.username});
					
					// 在收到消息后更新
					var msg = this.setSingItem(res,"user");
					this.screenMsg(msg);
					
					// 消息设为已读
					this.jpushIM.setMessageHaveRead({
						"id":res.messageId,
						"type":"single",
						"username":res.fromUser.username,
					}, (res) => {
						console.log("JS setMessageHaveRead:" + JSON.stringify(res))
					})
					
				}
			},
			sendMessageResponse(res){
				// 监听消息发送结果事件
				// console.log(res);
				if (res.toUser.username == this.chartUser.username) {
					var list = this.msgList;
					for(let i=0;i<list.length;i++){
						if(list[i].type=='user' && list[i].msg.messageId == res.messageId){
							list[i].msg.status = res.status;		// 状态变更
							list[i].msg.messageId = res.messageId;	// 本地数据库中的消息 Id。
							list[i].msg.id = res.serverMessageId;	// 服务器端对应的消息 Id
							// var msg = _self.setSingItem(res,"user");
							// list[i] = msg;
						}
					}
				}
			}
		},
	}
</script>
<style>
	page {
	  background-color: #e5e5e5;
	}
	
	@font-face {
	  font-family: "HMfont-home";
	  src: url("data:application/x-font-woff2;charset=utf-8;base64,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") format("woff2");
	}
	.icon {
	  font-family: "HMfont-home" !important;
	  font-size: 56upx;
	  font-style: normal;
	  color: #333;
	}
	.icon.biaoqing:before {
	  content: "\e797";
	}
	.icon.jianpan:before {
	  content: "\e7b2";
	}
	.icon.yuyin:before {
	  content: "\e805";
	}
	.icon.tupian:before {
	  content: "\e639";
	}
	.icon.chehui:before {
	  content: "\e904";
	}
	.icon.luyin:before {
	  content: "\e905";
	}
	.icon.luyin2:before {
	  content: "\e677";
	}
	.icon.other-voice:before {
	  content: "\e667";
	}
	.icon.my-voice:before {
	  content: "\e674";
	}
	.icon.hongbao:before {
	  content: "\e626";
	}
	.icon.tupian2:before {
	  content: "\e674";
	}
	.icon.paizhao:before {
	  content: "\e63e";
	}
	.icon.add:before {
	  content: "\e655";
	}
	.icon.close:before {
	  content: "\e607";
	}
	.icon.to:before {
	  content: "\e675";
	}
	
	.hidden {
	  display: none !important;
	}
	
	.popup-layer {
	  transition: all 0.15s linear;
	  width: 96%;
	  height: 42vw;
	  padding: 20upx 2%;
	  background-color: #f3f3f3;
	  border-top: solid 1upx #ddd;
	  position: fixed;
	  z-index: 20;
	  top: 100%;
	}
	.popup-layer.showLayer {
	  transform: translate3d(0, -42vw, 0);
	}
	.popup-layer .emoji-swiper {
	  height: 40vw;
	}
	.popup-layer .emoji-swiper swiper-item {
	  display: flex;
	  align-content: flex-start;
	  flex-wrap: wrap;
	}
	.popup-layer .emoji-swiper swiper-item view {
	  width: 12vw;
	  height: 12vw;
	  display: flex;
	  justify-content: center;
	  align-items: center;
	}
	.popup-layer .emoji-swiper swiper-item view image {
	  width: 8.4vw;
	  height: 8.4vw;
	}
	.popup-layer .more-layer {
	  width: 100%;
	  height: 42vw;
	}
	.popup-layer .more-layer .list {
	  width: 100%;
	  display: flex;
	  flex-wrap: wrap;
	}
	.popup-layer .more-layer .list .box {
	  width: 18vw;
	  height: 18vw;
	  border-radius: 20upx;
	  background-color: #fff;
	  display: flex;
	  justify-content: center;
	  align-items: center;
	  margin: 0 3vw 2vw 3vw;
	}
	.popup-layer .more-layer .list .box .icon {
	  font-size: 70upx;
	}
	
	.input-box {
	  width: 98%;
	  min-height: 100upx;
	  padding: 0 1%;
	  background-color: #f2f2f2;
	  display: flex;
	  position: fixed;
	  z-index: 20;
	  bottom: -2upx;
	  text-indent: 6upx;
	  transition: all 0.15s linear;
	  border-bottom: solid 1upx #ddd;
	}
	.input-box.showLayer {
	  transform: translate3d(0, -42vw, 0);
	}
	.input-box .voice, .input-box .more {
	  flex-shrink: 0;
	  width: 90upx;
	  height: 100upx;
	  display: flex;
	  justify-content: center;
	  align-items: center;
	}
	.input-box .send {
	  /* #ifdef H5 */
	  margin-left: 20upx;
	  /* #endif */
	  flex-shrink: 0;
	  width: 100upx;
	  height: 100upx;
	  display: flex;
	  align-items: center;
	}
	.input-box .send .btn {
	  width: 90upx;
	  height: 56upx;
	  display: flex;
	  justify-content: center;
	  align-items: center;

	  background: linear-gradient(to right, #276ace, #29bdd9);
	  color: #fff;
	  border-radius: 6upx;
	  font-size: 24upx;
	}
	.input-box .textbox {
	  width: 100%;
	  min-height: 70upx;
	  margin-top: 15upx;
	}
	.input-box .textbox .voice-mode {
	  width: calc(100% - 2upx);
	  height: 68upx;
	  border-radius: 70upx;
	  border: solid 1upx #cdcdcd;
	  display: flex;
	  justify-content: center;
	  align-items: center;
	  font-size: 28upx;
	  background-color: #fff;
	  color: #555;
	}
	.input-box .textbox .voice-mode.recording {
	  background-color: #e5e5e5;
	}
	.input-box .textbox .text-mode {
	  width: 100%;
	  min-height: 70upx;
	  display: flex;
	  background-color: #fff;
	  border-radius: 40upx;
	}
	.input-box .textbox .text-mode .box {
	  width: 100%;
	  padding-left: 30upx;
	  min-height: 70upx;
	  display: flex;
	  align-items: center;
	}
	.input-box .textbox .text-mode .box textarea {
	  width: 100%;
	}
	.input-box .textbox .text-mode .em {
	  flex-shrink: 0;
	  width: 80upx;
	  padding-left: 10upx;
	  height: 70upx;
	  display: flex;
	  justify-content: center;
	  align-items: center;
	}
	
	.record {
	  width: 40vw;
	  height: 40vw;
	  position: fixed;
	  top: 55%;
	  left: 30%;
	  background-color: rgba(0, 0, 0, 0.6);
	  border-radius: 20upx;
	}
	.record .ing {
	  width: 100%;
	  height: 30vw;
	  display: flex;
	  justify-content: center;
	  align-items: center;
	}
	@keyframes volatility {
	  0% {
	    background-position: 0% 130%;
	  }
	  20% {
	    background-position: 0% 150%;
	  }
	  30% {
	    background-position: 0% 155%;
	  }
	  40% {
	    background-position: 0% 150%;
	  }
	  50% {
	    background-position: 0% 145%;
	  }
	  70% {
	    background-position: 0% 150%;
	  }
	  80% {
	    background-position: 0% 155%;
	  }
	  90% {
	    background-position: 0% 140%;
	  }
	  100% {
	    background-position: 0% 135%;
	  }
	}
	.record .ing .icon {
	  background-image: linear-gradient(to bottom, #f09b37, #fff 50%);
	  background-size: 100% 200%;
	  animation: volatility 1.5s ease-in-out -1.5s infinite alternate;
	  -webkit-background-clip: text;
	  -webkit-text-fill-color: transparent;
	  font-size: 150upx;
	  color: #f09b37;
	}
	.record .cancel {
	  width: 100%;
	  height: 30vw;
	  display: flex;
	  justify-content: center;
	  align-items: center;
	}
	.record .cancel .icon {
	  color: #fff;
	  font-size: 150upx;
	}
	.record .tis {
	  width: 100%;
	  height: 10vw;
	  display: flex;
	  justify-content: center;
	  font-size: 28upx;
	  color: #fff;
	}
	.record .tis.change {
	  color: #f09b37;
	}
	
	.content {
	  width: 100%;
	}
	.content .msg-list {
	  width: 96%;
	  padding: 0 2%;
	  position: absolute;
	  top: 0;
	  bottom: 100upx;
	}
	.content .msg-list .loading {
	  display: flex;
	  justify-content: center;
	}
	@keyframes stretchdelay {
	  0%, 40%, 100% {
	    transform: scaleY(0.6);
	  }
	  20% {
	    transform: scaleY(1);
	  }
	}
	.content .msg-list .loading .spinner {
	  margin: 20upx 0;
	  width: 60upx;
	  height: 100upx;
	  display: flex;
	  align-items: center;
	  justify-content: space-between;
	}
	.content .msg-list .loading .spinner view {
	  background-color: #f06c7a;
	  height: 50upx;
	  width: 6upx;
	  border-radius: 6upx;
	  animation: stretchdelay 1.2s infinite ease-in-out;
	}
	.content .msg-list .loading .spinner .rect2 {
	  animation-delay: -1.1s;
	}
	.content .msg-list .loading .spinner .rect3 {
	  animation-delay: -1s;
	}
	.content .msg-list .loading .spinner .rect4 {
	  animation-delay: -0.9s;
	}
	.content .msg-list .loading .spinner .rect5 {
	  animation-delay: -0.8s;
	}
	.content .msg-list .row {
	  padding: 20upx 0;
	}
	.content .msg-list .row .system {
	  display: flex;
	  justify-content: center;
	}
	.content .msg-list .row .system view {
	  padding: 0 30upx;
	  height: 50upx;
	  display: flex;
	  justify-content: center;
	  align-items: center;
	  background-color: #c9c9c9;
	  color: #fff;
	  font-size: 24upx;
	  border-radius: 40upx;
	}
	.content .msg-list .row .system .red-envelope image {
	  margin-right: 5upx;
	  width: 30upx;
	  height: 30upx;
	}
	.content .msg-list .row:first-child {
	  margin-top: 20upx;
	}
	.content .msg-list .row .my .left, .content .msg-list .row .other .right {
	  width: 100%;
	  display: flex;
	}
	.content .msg-list .row .my .left .bubble, .content .msg-list .row .other .right .bubble {
	  max-width: 70%;
	  min-height: 50upx;
	  border-radius: 10upx;
	  padding: 15upx 20upx;
	  display: flex;
	  align-items: center;
	  font-size: 32upx;
	  word-break: break-word;
	}
	.content .msg-list .row .my .left .bubble.img, .content .msg-list .row .other .right .bubble.img {
	  background-color: transparent;
	  padding: 0;
	  overflow: hidden;
	}
	.content .msg-list .row .my .left .bubble.img image, .content .msg-list .row .other .right .bubble.img image {
	  max-width: 350upx;
	  max-height: 350upx;
	}
	.content .msg-list .row .my .left .bubble.red-envelope, .content .msg-list .row .other .right .bubble.red-envelope {
	  background-color: transparent;
	  padding: 0;
	  overflow: hidden;
	  position: relative;
	  justify-content: center;
	  align-items: flex-start;
	}
	.content .msg-list .row .my .left .bubble.red-envelope image, .content .msg-list .row .other .right .bubble.red-envelope image {
	  width: 250upx;
	  height: 313upx;
	}
	.content .msg-list .row .my .left .bubble.red-envelope .tis, .content .msg-list .row .other .right .bubble.red-envelope .tis {
	  position: absolute;
	  top: 6%;
	  font-size: 26upx;
	  color: #9c1712;
	}
	.content .msg-list .row .my .left .bubble.red-envelope .blessing, .content .msg-list .row .other .right .bubble.red-envelope .blessing {
	  position: absolute;
	  bottom: 14%;
	  color: #e9b874;
	  width: 80%;
	  text-align: center;
	  overflow: hidden;
	  display: -webkit-box;
	  -webkit-box-orient: vertical;
	  -webkit-line-clamp: 2;
	}
	.content .msg-list .row .my .left .bubble.voice .icon, .content .msg-list .row .other .right .bubble.voice .icon {
	  font-size: 40upx;
	  display: flex;
	  align-items: center;
	}
	.content .msg-list .row .my .left .bubble.voice .icon:after, .content .msg-list .row .other .right .bubble.voice .icon:after {
	  content: " ";
	  width: 53upx;
	  height: 53upx;
	  border-radius: 100%;
	  position: absolute;
	  box-sizing: border-box; 
	}
	.content .msg-list .row .my .left .bubble.voice .length, .content .msg-list .row .other .right .bubble.voice .length {
	  font-size: 28upx;
	}
	.content .msg-list .row .my .right, .content .msg-list .row .other .left {
	  flex-shrink: 0;
	  width: 80upx;
	  height: 80upx;
	}
	.content .msg-list .row .my .right image, .content .msg-list .row .other .left image {
	  width: 80upx;
	  height: 80upx;
	  border-radius: 10upx;
	}
	.content .msg-list .row .my {
	  width: 100%;
	  display: flex;
	  justify-content: flex-end;
	}
	.content .msg-list .row .my .left {
	  min-height: 80upx;
	  align-items: center;
	  justify-content: flex-end;
	}
	.content .msg-list .row .my .left .bubble {
	  background-color: #f06c7a;
	  color: #fff;
	}
	.content .msg-list .row .my .left .bubble.voice .icon {
	  color: #fff;
	}
	.content .msg-list .row .my .left .bubble.voice .length {
	  margin-right: 20upx;
	}
	@keyframes my-play {
	  0% {
	    transform: translateX(80%);
	  }
	  100% {
	    transform: translateX(0%);
	  }
	}
	.content .msg-list .row .my .left .bubble.play .icon:after {
	  border-left: solid 10upx rgba(240, 108, 122, 0.5);
	  animation: my-play 1s linear infinite;
	}
	.content .msg-list .row .my .right {
	  margin-left: 15upx;
	}
	.content .msg-list .row .other {
	  width: 100%;
	  display: flex;
	}
	.content .msg-list .row .other .left {
	  margin-right: 15upx;
	}
	.content .msg-list .row .other .right {
	  flex-wrap: wrap;
	}
	.content .msg-list .row .other .right .username {
	  width: 100%;
	  height: 45upx;
	  font-size: 24upx;
	  color: #999;
	  display: flex;
	}
	.content .msg-list .row .other .right .username .name {
	  margin-right: 50upx;
	}
	.content .msg-list .row .other .right .bubble {
	  background-color: #fff;
	  color: #333;
	}
	.content .msg-list .row .other .right .bubble.voice .icon {
	  color: #333;
	}
	.content .msg-list .row .other .right .bubble.voice .length {
	  margin-left: 20upx;
	}
	@keyframes other-play {
	  0% {
	    transform: translateX(-80%);
	  }
	  100% {
	    transform: translateX(0%);
	  }
	}
	.content .msg-list .row .other .right .bubble.play .icon:after {
	  border-right: solid 10upx rgba(255, 255, 255, 0.8);
	  animation: other-play 1s linear infinite;
	}
	
	.windows .mask {
	  position: fixed;
	  top: 100%;
	  width: 100%;
	  height: 100%;
	  z-index: 1000;
	  background-color: rgba(0, 0, 0, 0.6);
	  opacity: 0;
	  transition: opacity 0.2s ease-out;
	}
	.windows .layer {
	  position: fixed;
	  width: 80%;
	  height: 70%;
	  left: 10%;
	  z-index: 1001;
	  border-radius: 20upx;
	  overflow: hidden;
	  top: 100%;
	  transform: scale3d(0.5, 0.5, 1);
	  transition: all 0.2s ease-out;
	}
	.windows.show {
	  display: block;
	}
	.windows.show .mask {
	  top: 0;
	  opacity: 1;
	}
	.windows.show .layer {
	  transform: translate3d(0, -85vh, 0) scale3d(1, 1, 1);
	}
	.windows.hide {
	  display: block;
	}
	.windows.hide .mask {
	  top: 0;
	  opacity: 0;
	}
	.open-redenvelope {
	  width: 100%;
	  height: 70vh;
	  background-color: #cf3c35;
	  position: relative;
	}
	.open-redenvelope .top {
	  width: 100%;
	  background-color: #fe5454;
	  display: flex;
	  justify-content: center;
	  flex-wrap: wrap;
	  border-radius: 0 0 100% 100%;
	  box-shadow: inset 0 -20upx 0 #9c1712;
	  margin-bottom: 65upx;
	}
	.open-redenvelope .top .close-btn {
	  width: 100%;
	  height: 80upx;
	  display: flex;
	  justify-content: flex-end;
	  margin-bottom: 30upx;
	}
	.open-redenvelope .top .close-btn .icon {
	  color: #9c1712;
	  margin-top: 10upx;
	  margin-right: 10upx;
	}
	.open-redenvelope .top image {
	  width: 130upx;
	  height: 130upx;
	  border: solid 12upx #cf3c35;
	  border-radius: 100%;
	  margin-bottom: -65upx;
	}
	.open-redenvelope .from, .open-redenvelope .blessing, .open-redenvelope .money, .open-redenvelope .showDetails {
	  width: 90%;
	  padding: 5upx 5%;
	  display: flex;
	  justify-content: center;
	  font-size: 32upx;
	  color: #fff;
	}
	.open-redenvelope .money {
	  font-size: 100upx;
	  color: #f8d757;
	  display: flex;
	  padding-top: 20upx;
	}
	.open-redenvelope .showDetails {
	  position: absolute;
	  bottom: 20upx;
	  align-items: center;
	  font-size: 28upx;
	  color: #f8d757;
	}
	.open-redenvelope .showDetails .icon {
	  font-size: 26upx;
	  color: #f8d757;
	}
</style>
