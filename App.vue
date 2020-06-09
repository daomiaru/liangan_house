<script>
	import store from './store'
	import jpushIM from "./static/js/im.js"
	import Vue from 'vue'
	import {
		mapMutations
	} from 'vuex'

	export default {
		created() {

			
		},
		onLaunch: function() {
			var _this =this
			console.log(_this.$baseUrl.baseUrl)
			console.log('App Launch')
			//获取所有产品列表用以前端渲染
			var _this = this
			var list = []
			uni.request({
				url: _this.$baseUrl.baseUrl + '/getProductlist',
				method: 'GET',
				success: function(e){
					console.log(123)
					console.log(e)
					for(var i=0;i<e.data.data.length;i++){
						if(e.data.data[i].houseOK == true){
							list.push(e.data.data[i])
						}
					}
					_this.saveProductlist(list)					
				}
			})
			// #ifdef APP-PLUS
			// plus.navigator.closeSplashscreen();
			// 初始化一定要在APP刚启动的时候就调用，这里是示例按钮，用于注册接上消息事件
			jpushIM.init();
			// 点击通知栏，跳转链接，这里的跳转会保留当前页面
			jpushIM.addClickMessageNotificationListener(function (notification) {
				// console.log(notification);
				uni.navigateTo({
					url: './im-chat/im-chat?title=' + notification.fromName + '&fromUser=' + JSON.stringify(notification.fromUser),
				});
			})
			// 监听新消息
			jpushIM.addReceiveMessageListener(function (notification) {
				var _this = this
				// console.log(notification)
				var title = notification.fromName; // 如果用户没有昵称，fromName就是空的
				if(!title){
					title = notification.fromUser.username;
				}
				store.commit("setReceiveMessage",notification);
				// 长震动，实际项目上可开启
				// uni.vibrateLong({
				// 	success: function() {
						plus.nativeUI.toast("您有来自" + title + "的新消息");	
						// console.log('success');
					// }
				// });
			})
			
			//登录状态变更
			jpushIM.addLoginStateChangedListener(function (notification) {
				var _this = this
				// console.log("登录状态变更：" + JSON.stringify(notification))
				uni.showModal({
					title: '登录状态变更',
					content: JSON.stringify(notification),
					showCancel: false,
					cancelText: '',
					confirmText: '关闭'
				});
				// if(notification.status == 1){
					store.commit("logout");
				// }
				store.commit("setLoginStateChanged",notification);
			})
			
			
			// 消息发送结果回执
			jpushIM.addSendMessageResponseCallbackListener(function (notification) {
				// console.log("消息发送结果回执：" + JSON.stringify(notification))
				store.commit("setSendMessageResponse",notification);
			})
			
			// 监听好友事件
			jpushIM.addfriendInvitiaonChangeListener(function (notification) {
				var _this = this
				uni.showModal({
					title: '您有新的好友事件',
					content: JSON.stringify(notification),
					cancelText: '知道了',
					confirmText: '去查看',
					success: res => {
						if (res.confirm) {
							uni.navigateTo({
								url: '/pages/friend-invitiaon/friend-invitiaon',
							});
						}
					}
				});
				console.log(notification);
				store.commit("addFriendInvitiaonChange",notification);
			})
			// #endif 
			
			uni.getSystemInfo({
				success: function(e) {
					// #ifndef MP
					Vue.prototype.StatusBar = e.statusBarHeight;
					if (e.platform == 'android') {
						Vue.prototype.CustomBar = e.statusBarHeight + 50;
					} else {
						Vue.prototype.CustomBar = e.statusBarHeight + 45;
					};
					// #endif

					// #ifdef MP-WEIXIN
					Vue.prototype.StatusBar = e.statusBarHeight;
					let custom = wx.getMenuButtonBoundingClientRect();
					Vue.prototype.Custom = custom;
					Vue.prototype.CustomBar = custom.bottom + custom.top - e.statusBarHeight;
					// #endif		

					// #ifdef MP-ALIPAY
					Vue.prototype.StatusBar = e.statusBarHeight;
					Vue.prototype.CustomBar = e.statusBarHeight + e.titleBarHeight;
					// #endif
				}
			})
			uni.getStorage({ //获得保存在本地的用户信息
				key: 'userInfo',
				success: (e) => {
					uni.request({
						url: _this.$baseUrl.baseUrl + '/checklogin',
						sslVerify: false,
						header: {
							"Content-Type": "application/x-www-form-urlencoded",
							"Authorization": "Bearer"
						},
						data: {
							"userId": e.data.userId,
							"token": e.data.token
						},
						method: "POST",
						success: (e) => {
							console.log(e.data)
							if (e.data.err_code === 0) {
								console.log('更新登录状态')
								_this.login(e.data);
							}
						}
					})
				}
			})

		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		},
		methods: {
			...mapMutations(['login']),
			...mapMutations(['saveProductlist'])
		}
	}
</script>

<style>
	/*每个页面公共css */
/* 	@import '/common/family.css' */
/* 	@import "/wxcomponents/vant/common/index.wxss" */
</style>
