<template>
	<view>
		<!-- 因为小程序中不同于vue可以使用双向数据绑定语法。这里我们可以利用onChange事件实时改变value的值。达到动态数据绑定的效果 -->
		<!-- 搜索框 -->
		<van-search :value="value" placeholder="你想住在哪？" use-action-slot="true" use-left-icon-slot="true" @change="onChange">
			<view slot="action" @tap="position" style="height: 45upx;">
				<image src="../../static/images/dingwei.png" style="width: 40upx;line-height: 45upx;" mode="widthFix"></image>
			</view>
			<view slot="label" style="position: relative; top: 8upx; left: -10upx;">
				<view @click="checkcity" style="font-family: Pacifico;font-size: 30upx;" class="adress">地址</view>
			</view>
		</van-search>

		<!-- 分割线 -->
		<view style="width: 90%;height: 1upx;background:rgba(50,50,50,0.2);margin: 0 auto;"></view>

		<!-- 日期选择 -->
		<data></data>

		<!-- 搜索房源按钮 -->
		<button style="width: 90%;  background: #007AFF;color: #FFFFFF;font-family: Pacifico;font-size: 30upx;font-weight: bold;"
		 @click="onSearch">搜索房源</button>
		<!-- 地址弹出层 -->
		<van-popup :show="show" position="bottom">
			<van-area :area-list="areaList" @confirm="getAdress" />
		</van-popup>

		<!-- 活动轮播图 -->
		<!-- 	<swiper autoplay="true" interval="2000" circular="true" indicator-dots="true" indicator-color="rgba(255,255,255,0.5)"
		 indicator-active-color="rgba(255,255,255,1)">
			<swiper-item v-for="(item,index) in hbimgUrl" :key="index" @click="checkActive(index)">
				<image :src="item" mode="widthFix" style="width: 800upx;"></image>
			</swiper-item>
		</swiper> -->

		<!-- 轮播图 -->
		<view class="">
			<!-- 轮播 -->
			<swiper class="swiper" indicator-color="rgba(255, 255, 255, 0.6)" indicator-active-color="rgba(255, 255, 255, 1)"
			 :autoplay="true" :interval="3000" :duration="1000" :current="swiperCurrent" @change="changeSwiper">
				<swiper-item v-for="(item,index) in hbimgUrl" :key="index" @click="checkActive(index)">
					<image class="swiper-item" :src="item" mode="widthFix"></image>
				</swiper-item>
			</swiper>

			<!-- #ifdef APP-PLUS -->
			<!-- 轮播指示点样式修改 -->
			<view class="dots">
				<block v-for="(item,index) in hbimgUrl.length" :key="index">
					<view class="dot" :class="index==swiperCurrent ? ' active' : ''"></view>
				</block>
			</view>
			<!-- #endif -->
		</view>






		<view class="product-middle" style="margin-top: 20upx;">
			<view class="product-middle1 middle">
				<image src="../../static/images/zuofan.png" mode="widthFix" style="width: 50%;font-weight: bold;">
					<view style="font-size: 30rpx;font-weight: bold;font-family:yueyuan;">可以做饭</view>
				</image>
			</view>
			<view class="product-middle2 middle">
				<image src="../../static/images/fangzi.png" mode="widthFix" style="width: 50%;font-weight: bold;">
					<view style="font-size: 30rpx;font-weight: bold;font-family:yueyuan;">整个房源</view>
				</image>
			</view>
			<view class="product-middle3 middle">
				<image src="../../static/images/zhangdan.png" mode="widthFix" style="width: 50%;font-weight: bold;">
					<view style="font-size: 30rpx;font-weight: bold;font-family:yueyuan;">周租月租</view>
				</image>
			</view>
			<view class="product-middle4 middle">
				<image src="../../static/images/yaoshi.png" mode="widthFix" style="width: 50%;font-weight: bold;">
					<view style="font-size: 30rpx;font-weight: bold;font-family:yueyuan;">自助入住</view>
				</image>
			</view>
		</view>

		<view style="margin-top: 50upx;margin-left: 45upx;font-weight: bold;font-size: 50upx;font-family: yueyuan;">新春特价房源</view>
		<view style="margin-top: 20upx;margin-left: 45upx;font-size: 30upx;color: #888888;font-family: yueyuan;">特惠房源低至7折</view>

		<!-- 热门城市选择列表 -->
		<scroll-view class="select-city" scroll-x="true" style="margin-left: 15upx;">
			<view style="font-family: yueyuan;" v-for="(item,index) in hostcity_list" :key="index" :class="[index == currentcity_index?'hostcity_name_selected':'hostcity_name']"
			 @click="hostcitycheck(index)">
				{{item.city}}
			</view>
		</scroll-view>

		<!-- <view @click="top">点击回到顶部</view> -->
		<!-- 热门城市对应展示 -->

		<view v-for="(item,index) in hostcity_list" :key="index" v-if="index == currentcity_index" class="hostcity_wrap"
		 style="position: relative;">
			<view v-for="(item1,index1) in item.houselist" :key="index1" class="wrap" @tap="checkProduct(index1)">
				<view style="position: absolute;" :class="[item1.star== true ?'star':'nostar','seamclass']" @click="getStar(item1)">♡</view>
				<image :src="item1.imgSrc" class="hostcity_product" mode="widthFix" style="border-radius: 10upx;"></image>
				<view class="house_title" style="font-weight: bold;font-size: 28upx;margin-top: 10upx;">{{item1.title}}</view>
				<view class="info" style="overflow: hidden;text-overflow: ellipsis; display: -webkit-box;-webkit-line-clamp: 2;-webkit-box-orient: vertical;margin-top: 10upx;font-weight: 500;font-size: 30upx;font-family: yueyuan;">{{item1.info}}</view>
				<view class="price" style="color: #000000;font-size: 35upx;font-weight: bold;margin-top: 10upx;margin-bottom: 10upx;font-family: yueyuan;color: #F06C7A;">￥{{item1.price}}<text
					 style="color: rgba(0,0,0,0.3);font-family: yueyuan;">/月</text></view>
			</view>
		</view>

		<button style="width: 90%;  color: #007AFF;font-family: Pacifico;font-size: 30upx;font-weight: bold;border: 1upx solid #007AFF;margin: 20upx auto;"
		 class="findmore" @click="getmore">显示更多房源</button>
	</view>
</template>

<script>
	import arealist from '../../static/js/arealist.js'
	import data from '../../components/data.vue'
	// import hostcity_list from '../../static/js/hostcity.js'
	// import productlist  from '../../components/uni-product-list/uni-product-list'
	export default {
		data() {
			return {
				none: true,
				current: 0,
				mode: 'default',
				swiperCurrent: 0,
				// seachval: {
				// 	province: '',
				// 	city: '',
				// 	district: ''
				// },

				value: '', //搜索值
				areaList: '', //地址区域列表
				// hostcity_list: '',//热门城市列表
				show: false, //弹出地址选择组件
				currentAdress: '', //当前地址
				currentcity_index: 0, //当前热门城市选择
				product_show: true, //产品是否展示
				hbimgUrl: [
					'../../static/images/haibao1.png',
					'../../static/images/haibao2.png',
					'../../static/images/haibao3.png',
					'../../static/images/haibao4.png'
				], //海报路径 
				hostcity_list: [{
					'city': '北京',
					'houselist': [{
						'imgSrc': '',
						'title': '',
						'info': '',
						'price': 0,
						'star': true,
						'productId': ''
					}, {
						'imgSrc': '',
						'title': '',
						'info': '',
						'price': 0,
						'star': false,
						'productId': ''
					}, {
						'imgSrc': '',
						'title': '',
						'info': '',
						'price': 0,
						'star': false,
						'productId': ''
					}, {
						'imgSrc': '',
						'title': '',
						'info': '',
						'price': 0,
						'star': false,
						'productId': ''
					}]
				}, {
					'city': '上海',
					'houselist': [{
						'imgSrc': '../../static/product_images/beijing_product1.jpg',
						'title': '整套公寓【北京】',
						'info': '消毒防疫&通风良好&百万保障金&绿色通道&长租特惠新天地50米/K11/商旅/旅行优选',
						'price': 514,
						'star': true,
						'productId': '000'
					}, {
						'imgSrc': '../../static/product_images/beijing_product2.jpg',
						'title': '单间公寓【北京】',
						'info': '【南京西路】新房特惠/带投影/上海展览馆/静安寺/美签馆',
						'price': 227,
						'star': false,
						'productId': '001'
					}, {
						'imgSrc': '../../static/product_images/beijing_product3.jpg',
						'title': '整套房子【北京】',
						'info': '消毒防疫&通风良好&百万保障金&绿色通道&长租特惠新天地150米外滩田子坊一室一厅一厨一卫60平整套',
						'price': 520,
						'star': false,
						'productId': '002'
					}, {
						'imgSrc': '../../static/product_images/beijing_product4.jpg',
						'title': '整套公寓【北京】',
						'info': '【设计北京】静享苏州河/人民广场/南京西路/中央空调/阳光安静/商务出行/整套/烘干洗衣机',
						'price': 485,
						'star': false,
						'productId': '003'
					}]
				}, {
					'city': '广州',
					'houselist': [{
						'imgSrc': '../../static/product_images/beijing_product1.jpg',
						'title': '整套公寓【北京】',
						'info': '消毒防疫&通风良好&百万保障金&绿色通道&长租特惠新天地50米/K11/商旅/旅行优选',
						'price': 514,
						'star': true,
						'productId': '000'
					}, {
						'imgSrc': '../../static/product_images/beijing_product2.jpg',
						'title': '单间公寓【北京】',
						'info': '【南京西路】新房特惠/带投影/上海展览馆/静安寺/美签馆',
						'price': 227,
						'star': false,
						'productId': '001'
					}, {
						'imgSrc': '../../static/product_images/beijing_product3.jpg',
						'title': '整套房子【北京】',
						'info': '消毒防疫&通风良好&百万保障金&绿色通道&长租特惠新天地150米外滩田子坊一室一厅一厨一卫60平整套',
						'price': 520,
						'star': false,
						'productId': '002'
					}, {
						'imgSrc': '../../static/product_images/beijing_product4.jpg',
						'title': '整套公寓【北京】',
						'info': '【设计北京】静享苏州河/人民广场/南京西路/中央空调/阳光安静/商务出行/整套/烘干洗衣机',
						'price': 485,
						'star': false,
						'productId': '003'
					}]
				}, {
					'city': '重庆',
					'houselist': [{
						'imgSrc': '../../static/product_images/beijing_product1.jpg',
						'title': '整套公寓【北京】',
						'info': '消毒防疫&通风良好&百万保障金&绿色通道&长租特惠新天地50米/K11/商旅/旅行优选',
						'price': 514,
						'star': true,
						'productId': '000'
					}, {
						'imgSrc': '../../static/product_images/beijing_product2.jpg',
						'title': '单间公寓【北京】',
						'info': '【南京西路】新房特惠/带投影/上海展览馆/静安寺/美签馆',
						'price': 227,
						'star': false,
						'productId': '001'
					}, {
						'imgSrc': '../../static/product_images/beijing_product3.jpg',
						'title': '整套房子【北京】',
						'info': '消毒防疫&通风良好&百万保障金&绿色通道&长租特惠新天地150米外滩田子坊一室一厅一厨一卫60平整套',
						'price': 520,
						'star': false,
						'productId': '002'
					}, {
						'imgSrc': '../../static/product_images/beijing_product4.jpg',
						'title': '整套公寓【北京】',
						'info': '【设计北京】静享苏州河/人民广场/南京西路/中央空调/阳光安静/商务出行/整套/烘干洗衣机',
						'price': 485,
						'star': false,
						'productId': '003'
					}]
				}, {
					'city': '成都',
					'houselist': [{
						'imgSrc': '../../static/product_images/beijing_product1.jpg',
						'title': '整套公寓【北京】',
						'info': '消毒防疫&通风良好&百万保障金&绿色通道&长租特惠新天地50米/K11/商旅/旅行优选',
						'price': 514,
						'star': true,
						'productId': '000'
					}, {
						'imgSrc': '../../static/product_images/beijing_product2.jpg',
						'title': '单间公寓【北京】',
						'info': '【南京西路】新房特惠/带投影/上海展览馆/静安寺/美签馆',
						'price': 227,
						'star': false,
						'productId': '001'
					}, {
						'imgSrc': '../../static/product_images/beijing_product3.jpg',
						'title': '整套房子【北京】',
						'info': '消毒防疫&通风良好&百万保障金&绿色通道&长租特惠新天地150米外滩田子坊一室一厅一厨一卫60平整套',
						'price': 520,
						'star': false,
						'productId': '002'
					}, {
						'imgSrc': '../../static/product_images/beijing_product4.jpg',
						'title': '整套公寓【北京】',
						'info': '【设计北京】静享苏州河/人民广场/南京西路/中央空调/阳光安静/商务出行/整套/烘干洗衣机',
						'price': 485,
						'star': false,
						'productId': '003'
					}]
				}, {
					'city': '厦门',
					'houselist': [{
						'imgSrc': '../../static/product_images/beijing_product1.jpg',
						'title': '整套公寓【北京】',
						'info': '消毒防疫&通风良好&百万保障金&绿色通道&长租特惠新天地50米/K11/商旅/旅行优选',
						'price': 514,
						'star': true,
						'productId': '000'
					}, {
						'imgSrc': '../../static/product_images/beijing_product2.jpg',
						'title': '单间公寓【北京】',
						'info': '【南京西路】新房特惠/带投影/上海展览馆/静安寺/美签馆',
						'price': 227,
						'star': false,
						'productId': '001'
					}, {
						'imgSrc': '../../static/product_images/beijing_product3.jpg',
						'title': '整套房子【北京】',
						'info': '消毒防疫&通风良好&百万保障金&绿色通道&长租特惠新天地150米外滩田子坊一室一厅一厨一卫60平整套',
						'price': 520,
						'star': false,
						'productId': '002'
					}, {
						'imgSrc': '../../static/product_images/beijing_product4.jpg',
						'title': '整套公寓【北京】',
						'info': '【设计北京】静享苏州河/人民广场/南京西路/中央空调/阳光安静/商务出行/整套/烘干洗衣机',
						'price': 485,
						'star': false,
						'productId': '003'
					}]
				}]
			}
		},
		components: {
			// productlist
			data
		},
		onReady: function() {
			// console.log(this.$store.state.productlist)
			//数组过滤
			var _this = this
			console.log(_this.$store.state.productlist)
			var promise = new Promise(function(resolve) {
				var beijing = _this.$store.state.productlist.filter(function(item, index) {
					return (item.addresslist.province == "北京市")
				})
				console.log(beijing)
				resolve(beijing)
			})
			promise.then(function(beijing) {
				for (var i = 0; i < 4; i++) {
					_this.hostcity_list[0].houselist[i].imgSrc = _this.$baseUrl.baseUrl + beijing[i].newProductimg[i].newimgSrc
					_this.hostcity_list[0].houselist[i].title = beijing[i].PhotoInfolist.houseTitle
					_this.hostcity_list[0].houselist[i].info = beijing[i].PhotoInfolist.houseAccount
					_this.hostcity_list[0].houselist[i].price = beijing[i].houseinfolist.Price
					_this.hostcity_list[0].houselist[i].productId = beijing[i].productid
				}
			
			})
		},
		onShow: function() {
			this.areaList = arealist
			// this.hostcity_list = hostcity_list
			// console.log(this.hostcity_list)
		},
		onLoad() {
			// #ifdef APP-PLUS
			uni.loadFontFace({
				family: 'yueyuan',
				// 本地字体路径需转换为平台绝对路径
				source: `url(${plus.io.convertLocalFileSystemURL('_www/static/yueyuan.otf')})`,
				success() {
					console.log(555)
					console.log('success' + 123)
				},
				fail(e) {
					console.log('fail')
				}
			})
			// #endif 
		},
		methods: {
			//加载更多
			getmore(){
				uni.showLoading({
					title: '加载更多'
				})
				setTimeout(()=>{
					var list = []
					list = this.hostcity_list[0].houselist
					list.map((item)=>{
						this.hostcity_list[0].houselist.push(item)
					})
				 uni.hideLoading()	
				},3000)
			},
			position() {
				console.log('定位')
			},
			checkcity() {
				this.show = true
				console.log(this.areaList)

			},
			getStar(item1) {
				item1.star = !item1.star
				if (item1.star) {
					uni.showToast({
						icon: 'none',
						position: 'bottom',
						'title': '编号' + item1.productId + '被收藏'
					})
				} else {
					uni.showToast({
						icon: 'none',
						position: 'bottom',
						'title': '编号' + item1.productId + '被取消收藏'
					})
				}
			},
			hostcitycheck(index) {
				this.currentcity_index = index
				// this.product_show = false
				// setTimeout(()=>{
				// 	this.product_show = true
				// },2000)
			},
			checkProduct(index1) {
				//拿当前
				let currentProductID = this.hostcity_list[0].houselist[index1].productId
				// console.log(currentProductID)
				uni.navigateTo({
					url: '../product/product?currentProductID=' + currentProductID
				})
			},
			onSearch(e) {
				if (this.value == '') {
					uni.showToast({
						icon: 'none',
						position: 'bottom',
						'title': '请选择地址搜索'
					})
				} else {
					// console.log(this.seachval)
					var val = this.value
					uni.navigateTo({
						url: '../productList/productList?seachval=' + val
					})

				}
			},
			onChange(e) {
				this.value = e.detail
			},
			//确定选择城市
			getAdress(e) {
				// this.seachval.province = e.detail.values[0].name
				// this.seachval.city = e.detail.values[1].name
				// this.seachval.district = e.detail.values[2].name
				// console.log(e.detail.values[0].name + "," + e.detail.values[1].name + "," + e.detail.values[2].name)
				this.value = e.detail.values[0].name + "/" + e.detail.values[1].name + "/" + e.detail.values[2].name
				console.log(222)
				console.log(this.value)
				this.show = false //关闭弹框
			},
			//取消选中城市
			onCancel() {
				this.show = false
				this.$refs.myArea.reset() // 重置城市列表
			},
			checkActive(index) {
				uni.showToast({
					icon: 'none',
					position: 'bottom',
					'title': '点击了第' + index + '张海报'
				})
			},
			changeSwiper(e) {
				this.swiperCurrent = e.detail.current;
			}
		}
	}
</script>

<style lang="scss">
	.adress::after {
		content: '丨';
		corlor: #007AFF;
	}

	.adress {
		color: #007AFF;
	}

	.product-middle {
		display: flex;
		width: 100%;
		justify-content: space-around;
	}

	.middle {
		text-align: center;
		width: 20%;
	}

	.select-city {
		/* height: 80upx; */
		margin-top: 25upx;
		white-space: nowrap;
	}

	.select-city view {
		text-align: center;
		width: 130upx;
		height: 80upx;
		line-height: 80upx;
		display: inline-block;
		box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.5);
	}

	.hostcity_name {
		/* box-shadow: 10 10 1 100upx #000000; */
		border-radius: 10upx;
		border: 2upx solid #888888;
		color: #000000;
		font-size: 30upx;
		font-weight: bold;
		/* background: #007AFF; */
		margin: 20upx;
	}

	.hostcity_name_selected {
		box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.5);
		border-radius: 10upx;
		border: 2upx solid #888888;
		color: #FFFFFF;
		font-size: 30upx;
		font-weight: bold;
		background: #007AFF;
		margin: 20upx;
	}

	// 轮播样式
	.swiper {
		width: 700rpx;
		height: 300rpx;
		border-radius: 16rpx;
		overflow: hidden;
		margin-top: 16rpx;
		position: relative;
		margin-left: 26rpx;

		.swiper-item {
			width: 700rpx;
			height: 300rpx;
			border-radius: 16rpx;
		}

	}

	.dots {
		position: absolute;
		top: 570rpx;
		left: 8%;
		transform: translate(-50% 0);
		z-index: 4;
		display: flex;
		justify-content: center;

		.dot {
			width: 30rpx;
			height: 8rpx;
			transition: all .6s;
			background: rgba(0, 0, 0, .3);
			margin-right: 10rpx;
		}

		.active {
			width: 34rpx;
			height: 8rpx;
			background: rgba(255, 255, 255, .8);
		}
	}

	.hostcity_wrap {
		display: flex;
		width: 100%;
		justify-content: space-around;
		flex-wrap: wrap;
		// transition: opacity 2000 ease;
		// opacity: 1;
		animation: hide 1s ease;
	}

	.wrap {
		display: inline-block;
		width: 40%;
		margin-top: 30upx;
	}

	.hostcity_product {
		width: 100%;
	}

	.star {
		color: #DD524D;
	}

	.nostar {
		color: #808080;
	}

	// .findmore:hover{
	// 	background: #007AFF;
	// 	color: #F1F1F1;
	// }

	@keyframes hide {
		0% {
			opacity: 0;
		}

		100% {
			opacity: 1;
		}
	}
</style>
