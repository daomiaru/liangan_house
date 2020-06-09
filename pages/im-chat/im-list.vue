<template>
	<view>
		<!-- 通用搜索 -->
<!-- 		<view class="common-search-form">
			<view class="input-view">
				<uni-icons type="search" size="18" color="#999" style="margin-left: 20upx;" />
				<input confirm-type="search" class="input" type="text" placeholder="请输入关键词" placeholder-style="color:#999;font-size:26upx;" />
			</view>
		</view> -->

		<!-- 聊天列表 -->
		<view class="chat-list uni-padding-wrap" >

<!-- 			<navigator url="../friend-invitiaon/friend-invitiaon">
				<uni-list-item title="好友通知" thumb="https://img-cdn-qiniu.dcloud.net.cn/new-page/uni.png" :badge-text="String(newFriendInvitiaon)"
				 :show-badge="newFriendInvitiaon?true:false" />
			</navigator> -->

			<uni-swipe-action >
				
				<uni-swipe-action-item class="scroll-do" v-for="(item,index) in lists" :key="index" :options="options2" @click="bindClick(item)">
					
				<view class="uni-flex uni-row items" @click.stop="chatDetail(item)" style="display: flex;">
					<view class="flex-item image">
						<image class="img" src="../../static/images/chat_icon.png" mode="aspectFill"></image>
						<view class="badge" v-if="item.unreadCount != ''">{{item.unreadCount}}</view>
					</view>
					<view class="flex-item contents">
						<view class="title">
							{{item.title}}
							<text>{{item.lastMessageTime}}</text>
						</view>
						<view class="text-small">{{item.lastMessageText}}</view>
					</view>
				</view>
				</uni-swipe-action-item>
			</uni-swipe-action>
			<!-- </view> -->
		</view>

	</view>
</template>

<script>
	import {
		mapState,
		mapMutations
	} from 'vuex'
	import uniListItem from '@/components/uni-list-item/uni-list-item.vue'

	// #ifdef H5
	import mock from "@/common/mock.js"
	// #endif

	import uniIcons from '@/components/uni-icons/uni-icons.vue'
	import uniBadge from '@/components/uni-badge/uni-badge.vue'
	import uniSwipeAction from '@/components/uni-swipe-action/uni-swipe-action.vue'
	import uniSwipeActionItem from '@/components/uni-swipe-action-item/uni-swipe-action-item.vue'
	var _self;
	export default {
		components: {
			uniIcons,
			uniBadge,
			uniListItem,
			uniSwipeAction,
			uniSwipeActionItem
		},
		computed: {
			...mapState(['hasLogin', 'loginProvider', 'nickname', 'avatar', 'receiveMessage', 'newFriendInvitiaon']),
		},
		data() {
			return {
				lists: [],
				options2: [{
					text: '删除',
					style: {
						backgroundColor: '#FF3A30'
					}
				}],
			}
		},
		onShow() {
			_self = this;
			this.getList();
		},
		onPullDownRefresh() {
			// 下拉刷新
			this.getList();
		},
		watch: {
			receiveMessage(res) {
				console.log("监听到新消息，更新列表");
				this.getList();
			}
		},
		methods: {
			bindClick(item) {
				// console.log(item);
				// 删除
				var params = {
					"type": "single",
					"username": item.target.username
				};
				this.jpushIM.deleteConversation(params, (res) => {
					if (res.errorCode == 0) {
						this.getList();
					} else {
						uni.showModal({
							title: '删除失败',
							content: "原因：" + res.errorMsg,
							showCancel: false,
							cancelText: '',
							confirmText: '关闭'
						});
					}
				})
			},
			// 从本地数据库中获取会话列表，默认按照会话的最后一条消息的时间，降序排列
			getList: function() {
				uni.stopPullDownRefresh();
				// #ifdef APP-PLUS
				this.jpushIM.getConversations((callback) => {
					var list = this.setList(callback);
					this.lists = list;
					
				})
				// #endif

				// #ifdef H5
				// 在H5下模拟数据用于调试页面显示样式，这段mock可以删除
				var list = this.setList(mock.imList);
				this.lists = list;
				// #endif

			},
			setList: function(items) {
				var newItems = [];
				items.forEach((e) => {
					if (e) {
						if (e.latestMessage) {
							if (e.latestMessage.messageType == "img") {
								e.lastMessageText = "[图片]";
							} else if (e.latestMessage.messageType == "voice") {
								e.lastMessageText = "[语音]";
							} else {
								e.lastMessageText = e.latestMessage.messageString;
							}
							e.lastMessageTime = this.dateUtils.formatDateTime((e.latestMessage.timestamp), "str");
						} else {
							e.lastMessageText = "";
							e.lastMessageTime = "";
						}
						e.avatar = e.target.avatar ? e.target.avatar : "../../static/chat_icon.png";
						newItems.push(e);
					}
				});
				return newItems;
			},
			chatDetail(e) {
				var fromUser = {
					"username": e.target.username,
					"nickname": e.target.nickname,
					"avatar": e.target.avatar,
				}
				// console.log("JMessagePlugin chatDetail传参：" + JSON.stringify(e.target));
				uni.navigateTo({
					url: 'im-chat?title=' + e.title + '&fromUser=' + JSON.stringify(fromUser)
				});
			}
		}
	}
</script>

<style>
	page {
		background-color: #fff;
	}

	.common-search-form {
		position: fixed;
		z-index: 10;
		left: 0;
		top: 88upx;
		/* #ifdef APP-PLUS */
		top: 0;
		/* #endif */
	}

	.chat-list {
		/* padding-top: 106upx; */
	}

	.scroll-do .items {
		padding: 20rpx 0;
		border-bottom: 1px solid #EEEEEE;
	}

	.scroll-do .items>.image {
		width: 90rpx;
		height: 90rpx;
		margin-right: 30rpx;
		font-size: 0;
		position: relative;
	}

	.scroll-do .items>.image .img,
	.scroll-do .items>.image image {
		width: 90rpx;
		height: 90rpx;
		border-radius: 90rpx;
	}

	.scroll-do .items>.contents {
		margin-right: 30rpx;
		-webkit-flex: 1;
		flex: 1;
	}

	.scroll-do .items>.contents>.title {
		display: flex;
		flex-wrap: nowrap;
		justify-content: space-between;
		font-size: 28rpx;
		color: #333333;
	}

	.scroll-do .items>.contents>.title>text {
		color: #999;
		font-size: 22rpx;
	}

	.scroll-do .items>.contents>view {
		line-height: 1.8em !important;
	}

	.scroll-do .btn {
		background: #FF3A30;
		color: #FFF;
		width: 130rpx;
		height: 130rpx;
		line-height: 130rpx;
		justify-content: center;
		text-align: center;
		margin: 0;
		overflow: hidden;
		display: inline-flex;
	}

	.scroll-do .btn-first {
		background: #3688FF;
	}

	.scroll-do .badge {
		border-radius: 30rpx;
		width: 30rpx;
		height: 30rpx;
		padding: 0;
		line-height: 30rpx;
		text-align: center;
		font-size: 16rpx;
		background: #FF0036;
		position: absolute;
		right: 0;
		top: 2px;
		z-index: 1;
		background: #FF0036;
		color: #FFFFFF;
	}

	.scroll-do .text-small {
		width: 560rpx;
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
	}
</style>
