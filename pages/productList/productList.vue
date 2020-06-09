<template>
	<view>
		<view v-if="productShow" style="margin-top: 100upx;margin-left: 80upx;font-size: 50upx;font-weight: bold;">对不起，该地区业务未开通</view>
		<view class="productlist_wrpa" style="width: 100%;">
			<view class="product_wrap" v-for="(item,index) in productlist" :key="index" style="width: 90%;position: relative;transform: translateX(-50%);left: 50%;text-align: center;border-radius: 20upx;border: 1upx solid rgba(0,0,0,0.2);margin-top: 20upx;"@tap="jump(index)">
				<image :src="imgSrc[index]" mode="widthFix" style="width: 100%;height: 100upx;border-radius: 20upx;"></image>
				<view class="title">{{item.PhotoInfolist.houseTitle}}</view>
				<view class="housetap">
				<text>{{item.houseinfolist.houseTap[0]}}</text>
				<text>{{item.houseinfolist.houseTap[1]}}</text>
				<text>{{item.houseinfolist.houseTap[2]}}</text>
				<text>{{item.houseinfolist.houseTap[3]}}</text>
				</view>
				<view class="account">{{item.PhotoInfolist.houseAccount}}</view>
				<view class="price">￥{{item.houseinfolist.Price}}/月</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				address: {},//地址
				dd: [],
				productlist: [],//产品表
				productShow: false,
				imgSrc: [],
				houseTap: [],
			}
		},
		onLoad(option) {
			var _this = this
			var ad = option.seachval.split('/')
			this.address.province = ad[0]
			this.address.city = ad[1]
			this.address.district = ad[2]
			// this.address.province = '北京市'
			// this.address.city = '北京市'
			// this.address.district = '朝阳区'
			uni.request({
				url: this.$baseUrl.baseUrl + '/seachProductList',
				data: {
					address:  this.address
				},
				success: (res) => {
					console.log(res)
					var list = [] 
					for(var i=0;i<res.data.data.length;i++){
						if(res.data.data[i].houseOK == true){
							list.push(res.data.data[i])
						}
					}
				
					_this.productlist = list.filter(function(item,index){
						if(item.addresslist.city == _this.address.city && item.addresslist.district == _this.address.district){
								return item
						}
					})
					if(_this.productlist.length == 0){
						this.productShow = true
					}
					for(var i=0;i< _this.productlist.length;i++){
						var src1 = _this.$baseUrl.baseUrl + _this.productlist[i].newProductimg[0].newimgSrc
						// console.log(_this.productlist[i].newProductimg[0])
						console.log(src1)
						_this.imgSrc.push(src1)
					}
					console.log(_this.imgSrc)
					console.log(_this.productlist)
				}
			})
		},
		methods: {
			jump(index){
				let currentProductID = this.productlist[index].productid
				// console.log(currentProductID)
				uni.navigateTo({
					url: '../product/product?currentProductID=' + currentProductID
				})
			}
		}
	}
</script>

<style scoped>
	.title{
		font-size: 45upx;
		font-weight: bold;
		margin: 10upx 30upx;
		text-align: left;
	}
	.account{
		font-size: 35upx;
		margin: 10upx 30upx;
		text-align: left;
	}
	.price{
		color: #E80080;
		margin: 20upx 30upx;
		text-align: left;
	}
	.housetap{
		display: flex;
		justify-content: flex-start;
	}
	.housetap>text{
		font-size: 28upx;
		background-color: #0C978D;
		color: #FFFFFF;
		border-radius: 5upx;
		display: inline-block;
		margin-left: 30upx;
	}
</style>
