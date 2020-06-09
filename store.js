import jpushIM from './static/js/im.js'
import imUtils from './static/js/imTools.js'

import Vuex from 'vuex'
import Vue from 'vue'
Vue.use(Vuex)
const store = new Vuex.Store({
	state: {
		addresslist1: {}, //地址信息
		houseinfolist1: {}, //房源概况信息
		PhotoInfolist1: {}, //房源图片信息
		datainfolist1: {}, //预订设置信息
		viewinfolist1: {}, //房东须知信息
		allList: {}, //所有列表信息

		addresslistOK: false,
		houseinfolistOK: false,
		PhotoInfolistOK: false,
		datainfolistOK: false,
		viewinfolist: false,
		userInfo: {},
		userid: '',
		hasLogin: false,
		productlist: [],

		loginProvider: "", // 用户名或其他唯一值
		nickname: "", // 昵称
		signature: "", // 签名
		avatar: "/static/images/preview.jpg", // 头像
		gender: "", // 性别，0未知，1男，2女
		openid: null,
		testvuex: false,
		graceIMMsgs: {},
		graceIMScTop: 0,
		receiveMessage: {}, // 接收新消息
		loginStateChanged: {}, // 登录状态变更
		sendMessageResponse: {}, // 消息发送结果回执
		friendInvitiaon: [], // 好友事件本地存储
		newFriendInvitiaon: 0, // 待处理的好友事件数量
	},
	mutations: {
		login(state, provider) { //改变登录状态  		
			state.loginProvider = provider.phone
			state.hasLogin = true
			state.userInfo = provider
			state.userid = provider.userId
			uni.setStorage({ //将用户信息保存在本地  
				key: 'userInfo',
				data: provider
			})
			// uni.getStorage({
			// 	key: ""
			// })
		},

		//退出登录    务必清除登录状态 以及 本地用户信息，防止下次打开app重现、以及出现不正确状态
		logout(state) {
			state.hasLogin = false
			state.uerInfo = {}
			uni.removeStorage({
				key: 'uerInfo'
			})
		},
		saveAdresslist(state, provider) {
			state.addresslist1 = provider
			state.addresslistOK = true
		},
		saveHouseInfolist(state, provider) {
			state.houseinfolist1 = provider
			state.houseinfolistOK = true
		},
		savePhotoInfolist(state, provider) {
			state.PhotoInfolist1 = provider
			state.PhotoInfolistOK = true
		},
		saveDataInfolist(state, provider) {
			state.datainfolist1 = provider
			state.datainfolistOK = true
		},
		saveViewInfolist(state, provider) {
			// state.viewinfolist1 = provider
			state.viewinfolistOK = true
		},
		saveAllList(state, provider) {
			state.allList = provider
		},
		saveProductlist(state, provider) {
			state.productlist = provider
		},
			
		setOpenid(state, openid) {
			state.openid = openid
		},
		setNickname(state, val) {
			// console.log("setNickname：" + val);
			state.nickname = val
		},
		// 赋值性别
		setGender(state, val) {
			state.gender = val
		},
		// 赋值个人签名
		setSignature(state, val) {
			state.signature = val
		},
		// 赋值头像
		setAvatar(state, val) {
			state.avatar = val
		},
		// 赋值接收到的消息
		setReceiveMessage(state, param) {
			console.log(param)
			state.receiveMessage = param;
		},
		// 用户登录状态
		setLoginStateChanged(state, param) {
			state.loginStateChanged = param;
		},
		// 消息发送结果回执
		setSendMessageResponse(state, param) {
			state.sendMessageResponse = param;
		},
		// 新增好友消息事件
		addFriendInvitiaonChange(state, param) {
			state.newFriendInvitiaon++;
			var items = state.friendInvitiaon;
			items.unshift(param); // 保存在缓存中,此处应该配合API存在服务器上
			items = imUtils.combineObjectInList(items, "fromUsername"); // 数组去除重复，item为重复判定项
			state.friendInvitiaon = items; // 去重,重新赋值
		},
		setNewFriendInvitiaon(state, num) {
			state.newFriendInvitiaon = num; // 设置需要处理的好友数量
		},
		setFriendInvitiaon(state, param) {
			state.friendInvitiaon = param;
			state.newFriendInvitiaon = param.length;
		}
	},
	actions: {
		// 提交聊天文字信息
		submitChatMsg: async function({
			commit,
			state,
			rootState
		}, params) {
			return await new Promise((resolve, reject) => {
				if (!state.hasLogin) {
					reject("请先登录")
				} else {
					console.log(params)
					switch (params.msgType) {
						case "text":
							// 文本消息
							delete(params["msgType"]);
							// console.log("JMessagePlugin 文本消息传参：" + JSON.stringify(params));
							jpushIM.sendTextMessage(params, (res) => {
								console.log(777)
								console.log(res)
								if (res.errorCode == 0) {
									uni.showModal({
										title: '发送消息返回',
										content: '',
										showCancel: false,
										cancelText: '',
										confirmText: '',
										success: res => {},
										fail: () => {},
										complete: () => {}
									});
									resolve(res.data);
								} else {
									reject(res.errorMsg);
								}
							})
							break;
						case "img":
							// 图片消息
							// 将本地URL路径转换成绝对路径
							params.path = plus.io.convertLocalFileSystemURL(params.path);
							delete(params["msgType"]);
							jpushIM.sendImageMessage(params, (res) => {
								if (res.errorCode == 0) {
									resolve(res.data);
								} else {
									reject(res.errorMsg);
								}
							});
							break;
						case "voice":
							// 语音消息
							params.path = plus.io.convertLocalFileSystemURL(params.path);
							delete(params["msgType"]);
							console.log("JMessagePlugin 发送语音消息:" + JSON.stringify(params));
							jpushIM.sendVoiceMessage(params, (res) => {
								if (res.errorCode == 0) {
									resolve(res.data);
								} else {
									reject(res.errorMsg);
								}
							});
							break;
						default:
							break;
					}

				}
			})
		},
		// 获取当前IM用户信息是否存在，存在则登录commit, state,rootState
		// 不用传参
		checkCurrentIMUser: async function({
			dispatch,
			commit
		}, params) {
			return await new Promise((resolve, reject) => {
				jpushIM.getMyInfo((res) => {
					if (res.errorCode == 0) {
						// console.log(res);
						var data = res.data;
						commit('setLoginProvider', data.username);
						commit('setNickname', data.nickname);
						commit('setGender', data.gender);
						commit('setSignature', data.signature);
						commit('setAvatar', data.avatar);
						resolve(data);
					} else {
						reject(res.errorMsg);
					}
				})
			})
		},
		/**
		 * 更新我的头像
		 * @param {object} params = {
		 *  imgPath: string // 相册/拍照后的图片路径。
		 * }
		 * @param {function} callback = function ({'errorCode': '错误码', 'errorMsg': '错误信息',data:null}) {}
		 */
		updateMyAvatar: async function({
			commit,
			state,
			rootState
		}, params) {
			return await new Promise((resolve, reject) => {
				var origin = params.imgPath;
				if (origin) {
					// 将本地URL路径转换成平台绝对路径
					params.imgPath = plus.io.convertLocalFileSystemURL(params.imgPath);
				}
				jpushIM.updateMyAvatar(params, (res) => {
					if (res.errorCode == 0) {
						// var path = plus.io.convertAbsoluteFileSystem(params.imgPath);
						commit('setAvatar', origin);
						resolve(res);
					} else {
						reject(res.errorMsg);
					}
				})
			})
		}
	}

})

export default store


// <script>  
//     import {  
//         mapMutations  
//     } from 'vuex';  
//     export default {  
//         methods: {  
//             bindLogin(e) {  
//                 let name = e.detail.value.nameValue,  
//                     password = e.detail.value.passwordValue;  
//                 uni.request({  
//                     url: `${this.$serverUrl}/login.php`,  
//                     header: {  
//                         "Content-Type": "application/x-www-form-urlencoded"  
//                     },  
//                     data: {  
//                         "username": name,  
//                         "password": password  
//                     },  
//                     method: "POST",  
//                     success: (e) => {  
//                         if (e.data.code === 0) {//登录成功后改变vuex的状态，并退出登录页面  
//                             this.login(e.data)  
//                             uni.navigateBack()  
//                         }  
//                     }  
//                 })  
//             },  
//             ...mapMutations(['login'])  
//         }  
//     }  
// </script>
