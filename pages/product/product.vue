<template>
	<view>
		<!-- 轮播图 -->
		<swiper :indicator-dots="false" :autoplay="true" :interval="3000" :duration="1000" style="width: 100%;height: 400upx;"
		 @change="changePhoto">
			<swiper-item v-for="(item,index) in productinfo.newProductimg" :key="index" style="width: 100%;height: 400upx;" @tap="previewImg(index)">
				<image :src="item" mode="widthFix" style="width: 100%;height: 500upx;"></image>
			</swiper-item>
		</swiper>
		<view class="dots1">{{currentPhotoindex + 1}}/{{productinfo.newProductimg.length}}</view>
		<!-- 分割线 -->
		<view style="width: 96%;height: 1upx;background-color: rgba(0,0,0,0.2);margin: 20upx auto;"></view>

		<view style="position: relative;">
			<!-- 价格 -->
			<view class="price">￥{{productinfo.houseinfolist.Price}}元/月</view>

			<view style="display: flex;position: absolute;right: 10upx;top:20upx">
				<image src="../../static/images/qian.png" style="width: 40upx;height: 40upx;"></image>
				<view style="color: #1296db;margin-left: 8upx;">咨询详情</view>
			</view>
			<!-- 房源标题 -->
			<view class="title">{{productinfo.PhotoInfolist.houseTitle}}</view>
			<!-- 房源介绍 -->
			<view class="acount">{{productinfo.PhotoInfolist.houseAccount}}</view>
		</view>

		<!-- 分割线 -->
		<view style="width: 96%;height: 2upx;background-color: rgba(0,0,0,0.2);margin: 20upx auto;"></view>

		<!-- 地址 -->
		<view style="display: flex; margin-left: 10upx;">
			<image src="../../static/images/adress1.png" style="height: 40upx;width: 40upx;"></image>
			<view style="margin-left: 10upx;color: #1296db;">{{adress}}</view>
		</view>

		<!-- 分割线 -->
		<view style="width: 96%;height: 2upx;background-color: rgba(0,0,0,0.2);margin: 20upx auto;"></view>

		<view style="margin-left: 30upx;font-size: 50upx;font-weight: bold;">房源简介</view>
		<!-- 房源简介 -->
		<view style="display: flex;justify-content: space-around;flex-wrap: wrap;margin: 20upx 0;">
			<view v-for="(item,index) in houseinfo" :key="index" style="width: 25%;text-align: center; margin-top: 20upx;"
			 :class="[item.isok == true?'no_ok':'ok']">
				<image mode="widthFix" :src="item.src" style="width: 25%;"></image>
				<view style="font-size: 27upx;">{{item.text}}</view>
			</view>
		</view>

		<!-- 分割线 -->
		<view style="width: 96%;height: 10upx;background-color: rgba(0,0,0,0.2);margin: 50upx auto 40upx;"></view>

		<view style="display: flex; margin-bottom: 50upx;justify-content: center;">
			<view @tap="star1" style="margin-left: 30upx;height: 60upx;line-height: 60upx;" :class="[star == true?'star':'']">收藏❤</view>
			<button style="width: 250upx;height: 60upx;background: #007AFF;line-height: 60upx;color: #FFFFFF;border-radius: 20upx;"
			 @tap="talk">在线咨询</button>
			<button style="width: 250upx;height: 60upx;background: #007AFF;line-height: 60upx;color: #FFFFFF;border-radius: 20upx;">电话咨询</button>
		</view>

		<!-- 分割线 -->
		<view style="width: 96%;height: 10upx;background-color: rgba(0,0,0,0.2);margin: 30upx auto 40upx;"></view>
		<view style="width: 80%;text-align: center;margin: 0 auto;font-size: 20upx;">
			<view>@copyRight: 李冠儒</view>
			<view>1433149685@qq.com</view>
			<view style="margin-bottom: 20upx;">阿儒出品</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				productID: '',
				productinfo: {},
				currentPhotoindex: 0,
				adress: '',
				star: false,


				houseinfo: [{
						text: '可以做饭',
						src: '../../static/images/COOK.png',
						isok: true
					},
					{
						text: '独立卫生间',
						src: '../../static/images/WASHROOM.png',
						isok: true
					},
					{
						text: '热水',
						src: '../../static/images/HOTWATER.png',
						isok: true
					},
					{
						text: '无线上网',
						src: '../../static/images/WIFI.png',
						isok: true
					},
					{
						text: '自助入住',
						src: '../../static/images/ZIZHU.png',
						isok: true
					},
					{
						text: '近地铁',
						src: '../../static/images/SUBWAY.png',
						isok: true
					},
					{
						text: '空调',
						src: '../../static/images/KONGTIAO.png',
						isok: true
					},
					{
						text: '周租月租',
						src: '../../static/images/YUE.png',
						isok: true
					}
				]
			}
		},
		onLoad(option) {
			// if (this.$store.state.hasLogin == false) {
			// 	uni.navigateTo({
			// 		url: '../login/login'
			// 	})
			// }

			var _this = this
			// this.productID = option.currentProductID
			this.productID = option.currentProductID
			uni.request({
				url: this.$baseUrl.baseUrl + '/currentProduct',
				//真坑，data中的数据不能直接赋值，必须以键值对的方式
				data: {
					productID: _this.productID
				},
				success: function(res) {
					// console.log(res.data.data)
					_this.productinfo = res.data.data
					_this.productinfo.newProductimg = res.data.data.newProductimg.map(function(item, index) {
						item.newimgSrc = _this.$baseUrl.baseUrl + item.newimgSrc
						return item.newimgSrc
						// item = _this.$baseUrl.baseUrl + item.newimgSrc
					})
					console.log(_this.productinfo)
					_this.adress = _this.productinfo.addresslist.province + _this.productinfo.addresslist.city + _this.productinfo.addresslist
						.district + _this.productinfo.addresslist.fulladress

					if (_this.productinfo.houseinfolist.houseTap.indexOf("可以做饭") != -1) {
						_this.houseinfo[0].isok = false
					}
					if (_this.productinfo.houseinfolist.houseTap.indexOf("独立卫生间") != -1) {
						_this.houseinfo[1].isok = false
					}
					if (_this.productinfo.houseinfolist.houseTap.indexOf("提供热水") != -1) {
						_this.houseinfo[2].isok = false
					}
					if (_this.productinfo.houseinfolist.houseTap.indexOf("wifi上网") != -1) {
						_this.houseinfo[3].isok = false
					}
					if (_this.productinfo.houseinfolist.houseTap.indexOf("自助入住") != -1) {
						_this.houseinfo[4].isok = false
					}
					if (_this.productinfo.houseinfolist.houseTap.indexOf("近地铁") != -1) {
						_this.houseinfo[5].isok = false
					}
					if (_this.productinfo.houseinfolist.houseTap.indexOf("空调") != -1) {
						_this.houseinfo[6].isok = false
					}
					if (_this.productinfo.houseinfolist.houseTap.indexOf("周租月租") != -1) {
						_this.houseinfo[7].isok = false
					}
				}
			})
		},
		methods: {
			talk() {
				var _this = this
				// let currentuserID = 
				console.log(999)
				// console.log(this.productinfo.toString().slice(0,11))
				var phone = this.productinfo.userid.toString().slice(0, 11)
				console.log(phone)
				// let currentuserID = this.productinfo.userid
				_this.skipToSingleChat(phone)
			},
			skipToSingleChat: function(currentuserID) {
				if (currentuserID) {
					// uni.showModal({
					// 	title: '提示',
					// 	content: '进入聊天',
					// 	showCancel: false,
					// 	cancelText: '确定',
					// 	confirmText: '关闭',
					// 	success: res => {
							var chatUser = currentuserID;
							this.jpushIM.skipToSingleChat(chatUser, (res) => {
								// console.log(JSON.stringify(res));
								var data = res.data;
								uni.navigateTo({
									url: '../im-chat/im-chat?title=' + data.title + '&fromUser=' + JSON.stringify(data.fromUser)
								});
							}, (err) => {
								uni.showToast({
									title: "创建会话失败:" + err.errorMsg,
									icon: "none"
								});
							})
						// },
						// fail: () => {},
						// complete: () => {}
					// });
				} else {

					var chatUser = this.array[this.index].username;
					this.jpushIM.skipToSingleChat(chatUser, (res) => {
						var data = res.data;
						uni.navigateTo({
							url: 'im-chat?title=' + data.title + '&fromUser=' + JSON.stringify(data.fromUser)
						});
					}, (err) => {
						uni.showToast({
							title: "创建会话失败:" + err.errorMsg,
							icon: "none"
						});
					})

				}

			},
			changePhoto(e) {
				this.currentPhotoindex = e.detail.current
			},
			star1() {
				this.star = !this.star
			},
			//图片预览
			previewImg(idx) {
				var currentSrc = []
				currentSrc[0] = this.productinfo.newProductimg[idx]
				uni.previewImage({
					urls: currentSrc,
					success: function() {
						console.log('成功')
					}
				})
			},
		}
	}
</script>

<style scoped>
	.dots1 {
		position: absolute;
		top: 340upx;
		right: 20upx;
		z-index: 999999;
		text-align: center;
		border-radius: 20upx;
		width: 100upx;
		font-size: 25upx;
		background: rgba(0, 0, 0, 0.5);
		color: #FFFFFF;
	}

	.price {
		color: #E80080;
		margin: 20upx 30upx;
		font-size: 50upx;
		font-weight: bold;
	}

	.title {
		color: #FFFFFF;
		margin: 20upx 30upx;
		font-size: 30upx;
		background: rgba(0, 0, 0, 0.5);
		border-radius: 10upx;
		width: 150upx;
		text-align: center;
	}

	.acount {
		color: #000000;
		margin: 20upx 30upx;
		font-size: 30upx;
	}

	.no_ok {
		opacity: 0.3;
	}

	.ok {
		opacity: 1;
	}

	.star {
		color: #EF4F4F;
	}
</style>
