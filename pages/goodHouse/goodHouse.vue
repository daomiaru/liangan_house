<template>
	<view>
		<view class="houselist_wrap" style="width: 100%;">
			<view class="house_wrap" v-for="(item,index) in houselist" :key="index" style="width: 96%;margin: 10upx;border: 1upx solid rgba(0,0,0,0.2);border-radius: 20upx;">
				<view v-if="!item.houseOK" style="position: absolute;z-index: 999999;color: #FFFFFF;background: rgba(0,0,0,0.2);">审核中</view>
				<view v-if="item.houseOK" style="position: absolute;z-index: 999999;color: #FFFFFF;background: rgba(0,0,0,0.2);">审核通过</view>
				<view style="border: 1upx solid rgba(0,0,0,0.2); border-radius: 20upx;">
				<image :src="imgSrc[index]" mode="widthFix" style="width: 85%;height: 50upx;border-radius: 20upx;"></image>
				<image src="../../static/images/trash.png" style="width: 5%;position: relative;right: -5%;top:-200upx" mode="widthFix" @tap="del(index)"></image>
				</view>
				<view class="title">{{item.PhotoInfolist.houseTitle}}</view>
				<view class="account">{{item.PhotoInfolist.houseAccount}}</view>
				<view class="price">￥{{item.houseinfolist.Price}}</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				userid: '',
				houselist: [],
				imgSrc: []
			}
		},
		onShow() {
			var _this = this
			this.userid = this.$store.state.userid
			console.log(this.userid)
			// this.userid = 176713343012
			console.log(this.$store.state.userid)
			uni.request({
				url: this.$baseUrl.baseUrl + '/getmyHouse',
				data: {
					userid: this.userid
				},
				success: (res) => {
					console.log(res.data.data)
					_this.houselist = res.data.data
					for(var i=0;i<_this.houselist.length;i++){
						_this.imgSrc.push(_this.$baseUrl.baseUrl + _this.houselist[i].newProductimg[0].newimgSrc)	
					}				
				}
			})
		},
		onLoad() {
			console.log(111)
			// uni.loadFontFace({
			// 	family: 'yueyuan',
			// 	// 本地字体路径需转换为平台绝对路径
			// 	source: `url(${plus.io.convertLocalFileSystemURL('_www/static/yueyuan.otf')})`,
			// 	success() {
			// 	},
			// 	fail(e) {
			// 		console.log('fail')
			// 	}
			// })
			var _this = this
			this.userid = this.$store.state.userid
			console.log(this.userid)
			// this.userid = 176713343012
			console.log(this.$store.state.userid)
			uni.request({
				url: this.$baseUrl.baseUrl + '/getmyHouse',
				data: {
					userid: this.userid
				},
				success: (res) => {
					console.log(res.data.data)
					_this.houselist = res.data.data
					for(var i=0;i<_this.houselist.length;i++){
						_this.imgSrc.push(_this.$baseUrl.baseUrl + _this.houselist[i].newProductimg[0].newimgSrc)	
					}				
				}
			})
		},
		methods: {
			del(index){
				var _this = this
				console.log("删除第" + index + "条数据")
				var producid = this.houselist[index].productid
				uni.showModal({
					title: "提示",
					content: "确定要下架该房源吗？",
					showCancel: true,
					success: function(e){
						console.log(e)
						if(e.confirm){
							uni.request({
								url: _this.$baseUrl.baseUrl + '/deleteProduct',
								data: {
									productid: producid
								},
								success: (res) => {
									uni.showToast({
										title: '下架成功',
										type: 'success'
									})
								}
							})
						}
					}
				})
			}
		}
	}
</script>

<style scoped>
	.title{
		margin: 10upx 30upx;
		font-size: 45upx;
		font-weight: bold;
		font-family: 'yueyuan';
	}
	.account{
		margin: 10upx 30upx;
		font-family: 'yueyuan';
	}
	.price{
		margin: 10upx 30upx;
		font-size: 30upx;
		color: #F06C7A;
		font-family: 'yueyuan';
	}
</style>
