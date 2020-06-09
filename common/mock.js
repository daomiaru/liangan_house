// 会话列表
var imList = [{
	"latestMessage": {
		"extras": {},
		"messageId": "msgId_1577684322559568",
		"fromUser": {
			"avatar": "",
			"gender": "unknown",
			"nickname": "我是三号",
			"isFriend": false,
			"username": "Yoyo03",
			"type": "user",
			"isNoDisturb": false,
			"isInBlackList": false
		},
		"messageString": "[微笑][微笑][笑][笑]",
		"timestamp": 1577684323888,
		"messageType": "text",
		"isReceived": false,
		"toUser": {
			"avatar": "",
			"gender": "unknown",
			"nickname": "我是三号",
			"isFriend": false,
			"username": "Yoyo03",
			"type": "user",
			"isNoDisturb": false,
			"isInBlackList": false
		},
		"fromName": "(null)",
		"statusString": "消息发送成功",
		"flag": 0,
		"serverMessageId": "5861455066",
		"isReceivedString": "发送",
		"flagString": "已读",
		"msgId": "msgId_1577684322559568",
		"status": 5
	},
	"title": "我是三号",
	"conversationType": "single",
	"unreadCount": 0,
	"target": {
		"avatar": "http://img4.imgtn.bdimg.com/it/u=2805911121,3247155779&fm=26&gp=0.jpg", // 头像
		"gender": "unknown",
		"nickname": "我是三号",
		"isFriend": false,
		"username": "Yoyo03",
		"type": "user",
		"isNoDisturb": false,
		"isInBlackList": false
	}
}, {
	"latestMessage": {
		"extras": {},
		"messageId": "msgId_1577684310345144",
		"fromUser": {
			"avatar": "",
			"gender": "unknown",
			"nickname": "我是三号",
			"isFriend": false,
			"username": "Yoyo03",
			"type": "user",
			"isNoDisturb": false,
			"isInBlackList": false
		},
		"messageString": "234",
		"timestamp": 1577684310391,
		"messageType": "text",
		"isReceived": false,
		"toUser": {
			"avatar": "",
			"gender": "unknown",
			"nickname": "我是二号",
			"isFriend": false,
			"username": "Yoyo02",
			"type": "user",
			"isNoDisturb": false,
			"isInBlackList": false
		},
		"fromName": "(null)",
		"statusString": "消息发送成功",
		"flag": 0,
		"serverMessageId": "5861453840",
		"isReceivedString": "发送",
		"flagString": "已读",
		"msgId": "msgId_1577684310345144",
		"status": 5
	},
	"title": "我是二号",
	"conversationType": "single",
	"unreadCount": 0,
	"target": {
		"avatar": "http://img3.imgtn.bdimg.com/it/u=2922618769,3783189426&fm=26&gp=0.jpg",
		"gender": "unknown",
		"nickname": "我是二号",
		"isFriend": false,
		"username": "Yoyo02",
		"type": "user",
		"isNoDisturb": false,
		"isInBlackList": false
	}
}, {
	"latestMessage": {
		"extras": {},
		"messageId": "msgId_1577684300808264",
		"fromUser": {
			"avatar": "http://img5.imgtn.bdimg.com/it/u=263351484,3972010013&fm=26&gp=0.jpg",
			"gender": "unknown",
			"nickname": "我是三号",
			"isFriend": false,
			"username": "Yoyo03",
			"type": "user",
			"isNoDisturb": false,
			"isInBlackList": false
		},
		"messageString": "123",
		"timestamp": 1577684300870,
		"messageType": "text",
		"isReceived": false,
		"toUser": {
			"avatar": "https://fmedia.im.jiguang.cn/qiniu/image/i/90A2970645F63D5C9F4A3CB5E756E81F.jpg",
			"gender": "unknown",
			"nickname": "我是一号",
			"isFriend": false,
			"username": "Yoyo01",
			"type": "user",
			"isNoDisturb": false,
			"isInBlackList": false
		},
		"fromName": "(null)",
		"statusString": "消息发送成功",
		"flag": 0,
		"serverMessageId": "5861452922",
		"isReceivedString": "发送",
		"flagString": "已读",
		"msgId": "msgId_1577684300808264",
		"status": 5
	},
	"title": "我是一号",
	"conversationType": "single",
	"unreadCount": 0,
	"target": {
		"avatar": "https://fmedia.im.jiguang.cn/qiniu/image/i/90A2970645F63D5C9F4A3CB5E756E81F.jpg",
		"gender": "unknown",
		"nickname": "我是一号",
		"isFriend": false,
		"username": "Yoyo01",
		"type": "user",
		"isNoDisturb": false,
		"isInBlackList": false
	}
}];

var friendList = [{
	"isInBlackList": false,
	"avatar": "",
	"gender": "unknown",
	"nickname": "我是六号",
	"isFriend": true,
	"username": "Yoyo06",
	"noteName": "",
	"type": "user",
	"isNoDisturb": false,
	"noteText": ""
}, {
	"isInBlackList": false,
	"avatar": "",
	"gender": "female",
	"nickname": "我是三号",
	"signature": "",
	"isFriend": true,
	"username": "Yoyo03",
	"noteName": "",
	"type": "user",
	"isNoDisturb": false,
	"noteText": ""
}, {
	"isInBlackList": false,
	"avatar": "https://fmedia.im.jiguang.cn/qiniu/image/i/90A2970645F63D5C9F4A3CB5E756E81F.jpg",
	"gender": "unknown",
	"nickname": "我是一号",
	"isFriend": true,
	"username": "Yoyo01",
	"noteName": "",
	"type": "user",
	"isNoDisturb": false,
	"noteText": ""
}, {
	"isInBlackList": false,
	"avatar": "",
	"gender": "female",
	"nickname": "我是二号",
	"signature": "我是二号的个性签名？女^_^",
	"isFriend": true,
	"username": "Yoyo02",
	"noteName": "",
	"type": "user",
	"isNoDisturb": false,
	"noteText": ""
}];

// 好友通知
var friendInvitiaon = [{
	"fromUser": {
		"avatar": "../../static/chat_icon.png",
		"gender": "unknown",
		"nickname": "我是七号",
		"isFriend": false,
		"username": "Yoyo07",
		"type": "user",
		"isNoDisturb": false,
		"isInBlackList": false,
		"name": "我是七号"
	},
	"fromUsername": "Yoyo07",
	"reason": "你好，我是我是七号",
	"type": "invite_received",
	"fromUserAppKey": "3f50783b415517bada4d3ef5",
	// "time": "2020-01-08 10:45:58",
	"title": "请求添加为好友"
}, {
	"fromUser": {
		"extras": {},
		"type": "user",
		"avatar": "../../static/chat_icon.png",
		"address": "",
		"signature": "",
		"birthday": "1970-01-01",
		"region": "",
		"username": "Yoyo05",
		"isNoDisturb": false,
		"nickname": "我是五号",
		"isFriend": false,
		"isInBlackList": false,
		"gender": "unknown",
		"name": "我是五号"
	},
	"fromUsername": "Yoyo05",
	"reason": "测试拒绝！",
	"type": "invite_declined",
	"fromUserAppKey": "3f50783b415517bada4d3ef5",
	// "time": "2020-01-08 10:45:03",
	"title": "拒绝了你的好友邀请"
}, {
	"fromUser": {
		"avatar": "../../static/chat_icon.png",
		"gender": "female",
		"nickname": "我是三号",
		"signature": "",
		"isFriend": true,
		"username": "Yoyo03",
		"type": "user",
		"isNoDisturb": false,
		"isInBlackList": false,
		"name": "我是三号"
	},
	"fromUsername": "Yoyo03",
	"reason": "",
	"type": "invite_accepted",
	"fromUserAppKey": "3f50783b415517bada4d3ef5",
	// "time": "2020-01-08 10:43:56",
	"title": "接受了你的好友邀请"
}];

module.exports = {
	"imList": imList, // IM聊天列表
	friendList, // 通讯录
	friendInvitiaon, // 好友事件
}
