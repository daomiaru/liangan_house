<template>
	<view>
		<view style="width: 90%;margin: 30upx auto;border: 1upx solid rgba(0,0,0,0.2);box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.5);padding: 30upx;">
			<view style="font-weight: bold;">提供准确的地址，不错失潜在订单</view>
			<view>准确的房源地址是精确搜索的必要条件。这将让正在计划租房的用户更快地搜索到您的房源，还能有效地避免因地址不准确而产生地客户投诉</view>
		</view>

		<view class="input_wrap">
			<text>省（直辖市、自治区）</text>
			<input type="text" :value="list.province" @input="inpprovince" placeholder="例如: 湖北省" />
		</view>

		<view class="input_wrap">
			<text>市</text>
			<input type="text" :value="list.city" @input="inpcity" placeholder="例如: 武汉市" />
		</view>

		<view class="input_wrap">
			<text>区</text>
			<input type="text" :value="list.district" @input="inpdistrict" placeholder="例如: 洪山市" />
		</view>

		<view class="input_wrap">
			<text>详细地址</text>
			<input type="text" :value="list.fulladress" @input="inpfulladress" placeholder="例如: 崂山国际花园一号楼2201" />
		</view>

		<button @tap="getAdress()" class="getadress">获取当前位置</button>
		<!-- 使用地图组件必须设置经纬度，如果不设置默认为北京的经纬度 -->
		<map name="map" :latitude="latitude" :longitude="longitude" style="width: 90%;margin: 20upx auto;height: 400upx;"
		 :markers="covers" :scale="scale"></map>

		<button style="background: #007AFF;color: #FFFFFF;width: 90%;border-radius: 20upx;margin: 20upx auto;" @click="save">保存</button>
	</view>
</template>

<script>
	import {
		mapMutations
	} from 'vuex';
	var QQMapWX = require('@/libs/qqmap-wx-jssdk.min.js')
	var qqmapsdk = new QQMapWX({
		key: 'LXCBZ-NNIKD-UZ64F-H6AFI-UNJLH-OCFGE'
	})
	export default {
		data() {
			return {
				// list: [],
				list: {
					province: '',
					city: '',
					district: '',
					fulladress: '',
				},
				latitude: 34.765422, //纬度
				longitude: 113.785168, //经度
				scale: 18,
				covers: [{
					longitude: 113.785168,
					latitude: 34.765422,
					iconPath: '../../../static/icons/icon_position.png',
					width: 40,
					height: 40
				}]
			}
		},
		onLoad() {

		},
		onShow() {

		},
		methods: {
			// searchList(n) {
			// 	var that = this
			// 	qqmapsdk.getSuggestion({
			// 		keyword: n,
			// 		success: res => {
			// 			console.log(res)

			// 		that.list =  res.data

			// 			console.log(that.list)
			// 		},
			// 		fail: err => {
			// 			console.log(err)
			// 		}
			// 	})
			// },
			// bindInput(e) {
			// 	let val = e.detail.value
			// 	this.searchList(val)
			// },
			getAdress() {
				var that = this
				uni.getLocation({
					type: 'gcj02',
					geocode: true,
					success: function(res) {
						console.log('当前位置的经度：' + res.longitude);
						console.log('当前位置的纬度：' + res.latitude);
						that.longitude = res.longitude
						that.latitude = res.latitude
						that.covers[0].longitude = res.longitude
						that.covers[0].latitude = res.latitude
						qqmapsdk.reverseGeocoder({
							success: function(res) {
								console.log(res)
								//如果是直辖市
								if (res.result.address_component.province == res.result.address_component.city) {
									that.list.province = res.result.address_component.city
									that.list.district = res.result.address_component.district
									that.list.fulladress = res.result.address_component.street_number
								}
								//如果不是直辖市
								else {
									that.list.province = res.result.address_component.province
									that.list.city = res.result.address_component.city
									that.list.district = res.result.address_component.district
									that.list.fulladress = res.result.address_component.street_number
								}
							}
						})
					}
				});
			},
			openMap() {
				uni.openLocation({
					latitude: this.latitude,
					longitude: this.longitude
					// name:"马鞍山市含山县",			
					// address: "马鞍山市含山县"

				})
			},
			inpprovince(e) {
				this.list.province = e.detail.value
			},
			inpcity(e) {
				this.list.city = e.detail.value
			},
			inpdistrict(e) {
				this.list.district = e.detail.value
			},
			inpfulladress(e) {
				// console.log(e)
				this.list.fulladress = e.detail.value
			},
			save() {
				var adresslist = {}
				adresslist.province = this.list.province
				adresslist.city = this.list.city
				adresslist.district = this.list.district
				adresslist.fulladress = this.list.fulladress
				this.saveAdresslist(adresslist)
				uni.navigateBack()

			},
			...mapMutations(['saveAdresslist'])
		}
	}
</script>

<style scoped>
	.input_wrap {
		width: 90%;
		border-bottom: 1upx solid rgba(0, 0, 0, 0.5);
		margin: 10upx auto;
		padding: 20upx;
	}

	.getadress {
		width: 35%;
		border-radius: 10upx;
		height: 50upx;
		line-height: 50upx;
		border: 2upx solid #007AFF;
		z-index: 999999;
		position: absolute;
		right: 45upx;
		top: 65vh;
	}
</style>
