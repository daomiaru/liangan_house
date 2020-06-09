// #ifdef APP-PLUS
// if(plus.os.name == 'iOS'){
const jpushIMWeexPlugin = uni.requireNativePlugin('YOYO-JPushIM');

var EventHandlers = {
	receiveMessage: [],
	receiptMessage: [],
	clickMessageNotification: [],
	loginStateChanged: [],
	sendMessageResponse: [], // 发送消息回调
	friendInvitiaonChange: [], // 好友事件回调
}

const jpushIM = {
	/**
	 * 初始化 , JPushIM 必须先初始化才能执行其他操作(比如接收事件传递)
	 */
	init: function() {
		// console.log('极光初始化')
		jpushIMWeexPlugin.setup(function(notification) {
			for (var index in EventHandlers.receiveMessage) {
				EventHandlers.receiveMessage[index].apply(undefined, [notification])
			}

		}, function(notification) {
			// 两种用法都可以
			console.log("JMessagePlugin 消息已读回执: " + JSON.stringify(notification));
			for (var index in EventHandlers.receiptMessage) {
				EventHandlers.receiptMessage[index].apply(undefined, [notification])
			}

		}, function(notification) {
			console.log("JMessagePlugin 点击通知栏消息事件: " + JSON.stringify(notification));
			for (var index in EventHandlers.clickMessageNotification) {
				EventHandlers.clickMessageNotification[index].apply(undefined, [notification])
			}

		}, function(notification) {
			// uni.$emit('loginStateChanged', notification)
			console.log("JMessagePlugin 登录状态变更: " + JSON.stringify(notification));
			for (var index in EventHandlers.loginStateChanged) {
				EventHandlers.loginStateChanged[index].apply(undefined, [notification])
			}
			// EventHandlers.loginStateChanged.apply([notification]);
		}, function(notification) {
			// console.log("JMessagePlugin 消息发送结果回执：" + JSON.stringify(notification));
			for (var index in EventHandlers.sendMessageResponse) {
				EventHandlers.sendMessageResponse[index].apply(undefined, [notification])
			}
		}, function(notification) {
			// console.log("JMessagePlugin 好友事件变更回调：" + JSON.stringify(notification));
			for (var index in EventHandlers.friendInvitiaonChange) {
				EventHandlers.friendInvitiaonChange[index].apply(undefined, [notification])
			}
		});
	},
	// 获取当前版本信息
	getVersion: function(callback) {
		jpushIMWeexPlugin.getVersion(callback);
	},
	/**
	 * 注册用户。
	 * @param {object} params = {
	 *  username: String,
	 *  password: String,
	 *  nickname: String,
	 *  ...
	 * }
	 * @param {function} callback = function ({'errorCode': '错误码', 'errorMsg': '错误信息',data:null}) {}
	 */
	userRegister: function(params, callback) {
		console.log(params)
		jpushIMWeexPlugin.userRegister(params, callback);
	},
	/**
	 * 用户登录
	 * @param {object} params = {
	 *  username: 'yourUsername',
	 *  password: 'yourPassword',
	 * }
	 * @param {function} callback = function ({'errorCode': '错误码', 'errorMsg': '错误信息',data:null}) {}
	 */
	userLogin: function(params, callback) {
		console.log(params)
		jpushIMWeexPlugin.userLogin(params, callback);
	},
	// 用户登录退出
	logout: function(callback) {
		jpushIMWeexPlugin.logout(callback);
	},
	/**
	 * 登录成功则返回用户信息，未登录则对应用户信息为空对象。
	 *
	 * @param {function} success = function (myInfo) {}
	 */
	getMyInfo: function(callback) {
		jpushIMWeexPlugin.getMyInfo(callback);
	},
	/**
	 * 获取用户信息，此接口可用来获取不同 appKey 下用户的信息，如果 appKey 为空，则默认获取当前 appKey 下的用户信息。
	 *
	 * @param {object} params = {'username': String, 'appKey': string}
	 * @param {function} callback = function ({'errorCode': '错误码', 'errorMsg': '错误信息',data:null}) {}
	 */
	getUserInfo: function(params, callback) {
		jpushIMWeexPlugin.getUserInfo(params, callback);
	},
	/**
	 * @param {object} params = {'oldPwd': String, 'newPwd': string}
	 */
	updateMyPassword: function(params, callback) {
		jpushIMWeexPlugin.updateMyPassword(params, callback);
	},
	/**
	 * 更新当前用户头像。
	 * @param {object} params = {
	 *  imgPath: string // 本地图片绝对路径。
	 * }
	 * 注意 Android 与 iOS 的文件路径是不同的：
	 *   - Android 类似：/storage/emulated/0/DCIM/Camera/IMG_20160526_130223.jpg
	 *   - iOS 类似：/var/mobile/Containers/Data/Application/7DC5CDFF-6581-4AD3-B165-B604EBAB1250/tmp/photo.jpg
	 */
	updateMyAvatar: function(params, callback) {
		jpushIMWeexPlugin.updateMyAvatar(params, callback);
	},
	/**
	 * 更新当前登录用户的信息。
	 *
	 * @param {object} params = {'field': '需要更新的字段值'}
	 *
	 *  field 包括：nickname（昵称）, birthday（生日）, signature（签名）, gender（性别）, region（地区）, address（具体地址），extras（附加字段）。
	 *  如：{
	 *    'birthday': Number,  // 生日日期的毫秒数
	 *    'gender': String,    // Android中为：'male' / 'female' / 'unknown' iOS为0男，1女
	 *    'extras': Object     // 附加字段 value 必须为 String
	 *    ...                  // 其余皆为 String 类型
	 *  }
	 * @param {function} callback = function ({'errorCode': '错误码', 'errorMsg': '错误信息'}) {}
	 */
	updateMyInfo: function(params, callback) {
		jpushIMWeexPlugin.updateMyInfo(params, callback);
	},
	/**
	 * 获取所有会话未读消息总数
	 * @param {function} callback = function([{count: number}])
	 */
	getAllUnreadCount: function(callback) {
		jpushIMWeexPlugin.getAllUnreadCount(callback);
	},
	/**
	 * 仅限iOS支持
	 * @param {Object} params
	 */
	setBadge: function(number) {
		if (plus.os.name == "iOS") {
			jpushIMWeexPlugin.setBadge(number);
		}
	},
	/**
	 * 设置消息已读
	 * @param {object} params = {
	 *   必填，不可为空
	 *  ‘type’: String  single/group/chatroom
	 *
	 *   type为single时,除了下面的其他值可缺省
	 *  'username': String
	 *  'appKey': String
	 *
	 *   type为group时,除了下面的其他值可缺省
	 *  'groupId': String
	 *
	 *   type为chatroom时,除了下面的其他值可缺省
	 *  'roomId': String
	 *
	 *    必填，不可为空
	 *   'id': String
	 *
	 * }
	 *  @param {function} success =  function () {}
	 *  @param {function} error =  function ({'errorCode': '错误码', 'errorMsg': '错误信息'}) {}
	 */
	setMessageHaveRead: function(params, callback) {
		jpushIMWeexPlugin.setMessageHaveRead(params, callback);
	},
	/**
	 * 发送文本消息
	 * @param {object} params = {
	 *  'type': String,                                // 'single' / 'group' / 'chatRoom'
	 *  'groupId': String,                             // 当 type 为 'group' 时，groupId 不能为空
	 *  'username': String,                            // 当 type 为 'single' 时，username 不能为空
	 *  'appKey': String,                              // 当 type 为 'single' 时，用于指定对象所属应用的 appKey。如果为空，默认为当前应用
	 *  'roomId': String,                              // 当 type 为 'chatRoom' 时，roomId 不能为空
	 *  'text': String,                                // 消息内容
	 *  'extras': Object,                              // Optional. 自定义键值对 = {'key1': 'value1'}
	 *  'messageSendingOptions': MessageSendingOptions // Optional. MessageSendingOptions 对象
	 * }
	 * @param {function} callback = function ({'errorCode': '错误码', 'errorMsg': '错误信息','data':{}}) {}
	 */
	sendTextMessage: function(params, callback) {
		jpushIMWeexPlugin.sendTextMessage(params, callback);
	},
	/**
	 * @param {object} params = {
	 *  'type': String,                                // 'single' / 'group' / 'chatRoom'
	 *  'groupId': String,                             // 当 type 为 'group' 时，groupId 不能为空
	 *  'username': String,                            // 当 type 为 'single' 时，username 不能为空
	 *  'appKey': String,                              // 当 type 为 'single' 时，用于指定对象所属应用的 appKey。如果为空，默认为当前应用
	 *  'roomId': String,                              // 当 type 为 'chatRoom' 时，roomId 不能为空
	 *  'path': String,                                // 本地图片绝对路径。
	 *  'extras': object,                              // Optional. 自定义键值对 = {'key1': 'value1'}
	 *  'messageSendingOptions': MessageSendingOptions // Optional. MessageSendingOptions 对象
	 * }
	 * 注意 Android 与 iOS 的文件路径是不同的：
	 *   - Android 类似：/storage/emulated/0/DCIM/Camera/IMG_20160526_130223.jpg
	 *   - iOS 类似：/var/mobile/Containers/Data/Application/7DC5CDFF-6581-4AD3-B165-B604EBAB1250/tmp/photo.jpg
	 * @param {function} callback = function ({'errorCode': '错误码', 'errorMsg': '错误信息','data':{}}) {}
	 */
	sendImageMessage: function(params, callback) {
		jpushIMWeexPlugin.sendImageMessage(params, callback);
	},
	/**
	 * @param {object} params = {
	 *  'type': String,                                // 'single' / 'group'
	 *  'groupId': String,                             // 当 type 为 'group' 时，groupId 不能为空
	 *  'username': String,                            // 当 type 为 'single' 时，username 不能为空
	 *  'appKey': String,                              // 当 type 为 'single' 时，用于指定对象所属应用的 appKey。如果为空，默认为当前应用。
	 *  'roomId': String,                              // 当 type 为 'chatRoom' 时，roomId 不能为空
	 *  'path': String,                                // 本地语音文件路径。
	 *  'extras': object,                              // Optional. 自定义键值对 = {'key1': 'value1'}
	 *  'messageSendingOptions': MessageSendingOptions // Optional. MessageSendingOptions 对象。
	 * }
	 * @param {function} callback = function ({'errorCode': '错误码', 'errorMsg': '错误信息','data':{}})
	 */
	sendVoiceMessage: function(params, callback) {
		jpushIMWeexPlugin.sendVoiceMessage(params, callback);
	},
	/**
	 * 从最新的消息开始获取历史消息。
	 * 当 limit = -1 而 from >= 0 时，返回从 from 开始余下的所有历史消息。如果 from 大于历史消息总数，则返回空数组。
	 * 例如：当 from = 0 && limit = -1 时，返回所有历史消息。
	 *
	 * @param {object} params = {
	 *  'type': String,            // 'single' / 'group' / 'chatRoom'
	 *  'groupId': String,         // 当 type 为 'group' 时，groupId 不能为空。
	 *  'username': String,        // 当 type 为 'single' 时，username 不能为空。
	 *  'appKey': String,          // 当 type 为 'single' 时，用于指定对象所属应用的 appKey。如果为空，默认为当前应用。
	 *  'roomId': String,          // 当 type 为 'chatRoom' 时，roomId 不能为空。
	 *  'from': Number,            // 开始的消息下标。
	 *  'limit': Number            // 要获取的消息数。比如当 from = 0, limit = 10 时，是获取第 0 - 9 的 10 条历史消息。
	 * }
	 * @param {function} callback = function ({'errorCode': '错误码', 'errorMsg': '错误信息',"data":messageArray}) {}
	 */
	getHistoryMessages: function(params, callback) {
		jpushIMWeexPlugin.getHistoryMessages(params, callback);
	},
	// 创建单聊会话，会检测该用户名是否有效
	skipToSingleChat: function(params, success, fail) {
		jpushIMWeexPlugin.skipToSingleChat(params, success, fail);
	},
	// 发送图片消息
	sendSingleImageMessage: function(params, callback) {
		jpushIMWeexPlugin.sendSingleImageMessage(params, callback);
	},
	// 获取本地数据库中的会话列表
	getConversations: function(callback) {
		jpushIMWeexPlugin.getConversations(callback);
	},
	/**
	 * 删除聊天会话，同时将删除本地聊天记录。
	 *
	 * @param {object} params = {
	 *  'type': String,            // 'single' / 'group' / 'chatRoom'
	 *  'groupId': String,         // 目标群组 id。
	 *  'username': String,        // 目标用户名。
	 *  'appKey': String,          // 目标用户所属 AppKey。
	 *  'roomId': String           // 目标聊天室 id。
	 * }
	 * @param {function} callback = function ({'errorCode': '错误码', 'errorMsg': '错误信息'}) {}
	 */
	deleteConversation: function(params, callback) {
		jpushIMWeexPlugin.deleteConversation(params, callback);
	},
	/**
	 * 重置单个会话的未读消息数。
	 *
	 * @param {object} params = {
	 *  'type': String,            // 'single' / 'group' / 'chatRoom'
	 *  'groupId': String,         // 目标群组 id。
	 *  'username': String,        // 目标用户名。
	 *  'appKey': String,          // 目标用户所属 AppKey。
	 *  'roomId': String           // 聊天室 id。
	 * }
	 * @param {function} success = function () {}
	 * @param {function} error = function ({'errorCode': '错误码', 'errorMsg': '错误信息'}) {}
	 */
	resetUnreadMessageCount: function(params, callback) {
		jpushIMWeexPlugin.resetUnreadMessageCount(params, callback);
	},
	/**
	 * 以参数形式返回好友对象数组
	 * @param {function} callback = function ({'errorCode': '错误码', 'errorMsg': '错误信息','data':{}}) {}
	 */
	getFriends: function(callback) {
		jpushIMWeexPlugin.getFriends(callback);
	},
	/**
	 * 发送好友请求。
	 *
	 * @param {object} params = {
	 *  username: String,   // 对方用户用户名。
	 *  appKey: String,     // 对方用户所属应用的 AppKey。
	 *  reason: String      // 申请原因。
	 * }
	 * @param {function} callback = function ({'errorCode': '错误码', 'errorMsg': '错误信息'}) {}
	 */
	sendInvitationRequest: function(params, callback) {
		jpushIMWeexPlugin.sendInvitationRequest(params, callback);
	},
	/**
	 * 接受申请好友请求，调用后对方会收到 friendInvitiaonChange 事件。
	 * @param {object} params = {
	 *  'username': String,   // 对方用户用户名。
	 *  'appKey': String,     // 对方用户所属应用的 AppKey。
	 * }
	 * @param {function} callback = function ({'errorCode': '错误码', 'errorMsg': '错误信息'}) {}
	 */
	acceptInvitation: function(params, callback) {
		jpushIMWeexPlugin.acceptInvitation(params, callback);
	},
	/**
	 * 拒绝申请好友请求，调用后对方会收到 friendInvitiaonChange 事件。
	 * @param {object} params = {
	 *  'username': String,   // 对方用户用户名。
	 *  'appKey': String,     // 对方用户所属应用的 AppKey。
	 *  'reason': string      // 拒绝原因。
	 * }
	 * @param {function} callback = function ({'errorCode': '错误码', 'errorMsg': '错误信息'}) {}
	 */
	declineInvitation: function(params, callback) {
		jpushIMWeexPlugin.declineInvitation(params, callback);
	},
	/**
	 * @param {object} params = {
	 *  'username': String,   // 好友用户名。
	 *  'appKey': String,     // 好友所属应用的 AppKey。
	 * }
	 * @param {function} callback = function ({'errorCode': '错误码', 'errorMsg': '错误信息'}) {}
	 */
	removeFromFriendList: function(params, callback) {
		jpushIMWeexPlugin.removeFromFriendList(params, callback);
	},
	/**
	 * @param {object} params = {
	 *  'username': String,   // 好友用户名。
	 *  'appKey': String,     // 好友所属应用的 AppKey。
	 *  'noteName': string    // 备注名。
	 * }
	 * @param {function} callback = function ({'errorCode': '错误码', 'errorMsg': '错误信息'}) {}
	 */
	updateFriendNoteName: function(params, callback) {
		jpushIMWeexPlugin.updateFriendNoteName(params, callback);
	},
	// 事件监听 - start
	/**
	 * 添加收到消息事件监听。
	 *
	 * @param {function} listener = function (message) {}  // 以参数形式返回消息对象。
	 * message = {
	 *  'id': String,
	 *  'from': object,    // 消息发送者信息对象。
	 *  'target': object,  // 消息接收方信息（可能为用户或者群组）。
	 *  'type': string     // 'text' / 'image' / 'voice' / 'location' / 'file' / 'custom' / 'event'
	 *  ...                // 不同消息类型还有其他对应的相关字段，具体可参考文档。
	 * }
	 */
	addReceiveMessageListener: function(listener) {
		// console.log(JSON.stringify(EventHandlers.receiveMessage));
		EventHandlers.receiveMessage.push(listener);
	},
	removeReceiveMessageListener: function(listener) {
		var handlerIndex = EventHandlers.receiveMessage.indexOf(listener);
		if (handlerIndex >= 0) {
			EventHandlers.receiveMessage.splice(handlerIndex, 1);
		}
	},
	/**
	 * 添加收到消息已读回执事件监听。
	 *
	 * @param {function} listener = function (message) {}  // 以参数形式返回消息对象。
	 * message = {
	 *  'id': String,
	 *  'from': object,    // 消息发送者信息对象。
	 *  'target': object,  // 消息接收方信息（可能为用户或者群组）。
	 *  'type': string     // 'text' / 'image' / 'voice' / 'location' / 'file' / 'custom' / 'event'
	 *  ...                // 不同消息类型还有其他对应的相关字段，具体可参考文档。
	 * }
	 */
	addReceiptMessageListener: function(listener) {
		EventHandlers.receiptMessage.push(listener);
	},
	removeReceiptMessageListener: function(listener) {
		var handlerIndex = EventHandlers.receiptMessage.indexOf(listener);
		if (handlerIndex >= 0) {
			EventHandlers.receiptMessage.splice(handlerIndex, 1);
		}
	},
	/**
	 * 添加点击通知栏消息通知事件监听。
	 * Note: Android only, (如果想要 iOS 端实现相同的功能，需要同时集成 极光推送SDK)
	 * @param {function} listener = function (message) {}  // 以参数形式返回消息对象。
	 */
	addClickMessageNotificationListener: function(listener) {
		EventHandlers.clickMessageNotification.push(listener);
	},
	removeClickMessageNotificationListener: function(listener) {
		var handlerIndex = EventHandlers.clickMessageNotification.indexOf(listener);
		if (handlerIndex >= 0) {
			EventHandlers.clickMessageNotification.splice(handlerIndex, 1);
		}
	},
	/**
	 * 添加登录状态变更事件监听。
	 *
	 * @param {function} listener = function (event) {}  // 以参数形式返回事件信息。
	 * event = {
	 *  'type': String, // 'user_password_change' / 'user_logout' / 'user_deleted' / 'user_login_status_unexpected'
	 * }
	 */
	addLoginStateChangedListener: function(listener) {
		EventHandlers.loginStateChanged.push(listener);
	},
	removeLoginStateChangedListener: function(listener) {
		var handlerIndex = EventHandlers.loginStateChanged.indexOf(listener);
		if (handlerIndex >= 0) {
			EventHandlers.loginStateChanged.splice(handlerIndex, 1);
		}
	},
	/**
	 * 添加会话消息资源异步下载结果监听。
	 * @param {function} listener = function (message) {}  // 以参数形式返回消息对象。
	 */
	addMessageDownloadCallbackListener: function(listener) {
		EventHandlers.messageDownload.push(listener);
	},
	removeAddMessageDownloadCallbackListener: function(listener) {
		var handlerIndex = EventHandlers.messageDownload.indexOf(listener);
		if (handlerIndex >= 0) {
			EventHandlers.messageDownload.splice(handlerIndex, 1);
		}
	},
	/**
	 * 添加会话消息发送结果回执事件监听。
	 * @param {function} listener = function (message) {}  // 以参数形式返回消息对象。
	 */
	addSendMessageResponseCallbackListener: function(listener) {
		EventHandlers.sendMessageResponse.push(listener);
	},
	removeSendMessageResponseCallbackListener: function(listener) {
		var handlerIndex = EventHandlers.sendMessageResponse.indexOf(listener);
		if (handlerIndex >= 0) {
			EventHandlers.sendMessageResponse.splice(handlerIndex, 1);
		}
	},
	/**
	 * 好友相关通知事件。
	 *
	 * @param {function} listener = function (event) {}  // 以参数形式返回事件信息。
	 * event = {
	 *  'type': String,            // 'invite_received' / 'invite_accepted' / 'invite_declined' / 'contact_deleted'
	 *  'reason': String,          // 事件发生的理由，该字段由对方发起请求时所填，对方如果未填则返回默认字符串。
	 *  'fromUsername': String,    // 事件发送者的 username。
	 *  'fromUserAppKey': string   // 事件发送者的 AppKey。
	 * }
	 */
	addfriendInvitiaonChangeListener: function(listener) {
		EventHandlers.friendInvitiaonChange.push(listener);
	},
	removefriendInvitiaonChangeListener: function(listener) {
		var handlerIndex = EventHandlers.friendInvitiaonChange.indexOf(listener);
		if (handlerIndex >= 0) {
			EventHandlers.friendInvitiaonChange.splice(handlerIndex, 1);
		}
	},
}
module.exports = jpushIM;

// #endif
