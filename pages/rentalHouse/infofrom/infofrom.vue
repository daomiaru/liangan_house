<template>
	<view>
		<view class="input_wrap wrap1">
			<text>客户预定房源类型</text>
			<!-- <input type="text" value="" placeholder="例如: 湖北省" /> -->
			<view style="margin-top: 30upx;">
				<picker :range="houseType" :value="houseTypeindex" @change="ChangehouserType">
					<view>{{houseType[houseTypeindex]}}</view>
				</picker>
			</view>
		</view>

		<view class="input_wrap">
			<text style="margin-bottom: 30upx;display: block;">房源标签</text>
			<checkbox-group @change="checkboxChange">
				<view class="" v-for="(item,index) in houseTap" :key="index" style="margin: 10upx auto;">
					<view>
						<checkbox :value="item.value" :checked="item.checked" />
						<text>{{item.value}}</text>
					</view>
				</view>
			</checkbox-group>
		</view>

		<view class="input_wrap">
			<text>房间数</text>
			<input type="number" placeholder="例如: 10" @input="inpPersonNum" />
		</view>

		<view class="input_wrap">
			<text>价格(/月)</text>
			<input type="number" placeholder="例如: 1000" @input="inpPrice" />
		</view>

		<view class="input_wrap">
			<text>住房公约文件(仅限jpg,png格式)</text>
			<button style="background: #007AFF;color: #FFFFFF;width: 30%;border-radius: 20upx;margin: 20upx 10upx;" @click="upload">点击上传</button>
		</view>

		<button style="background: #007AFF;color: #FFFFFF;width: 90%;border-radius: 20upx;margin: 20upx auto;" @click="save">保存</button>
	</view>
</template>

<script>
	import {
		mapMutations
	} from 'vuex';
	export default {
		data() {
			return {
				houseType: ['整租', '合租'],
				currentHouseType: '整租',
				houseTypeindex: 0,
				pactImgFile: '',
				currentHouseTap: [],
				Price: 0,
				// houseNumShow: false,
				houseTap: [{
						value: '可以做饭',
						checked: false
					},
					{
						value: '提供热水',
						checked: false
					},
					{
						value: 'wifi上网',
						checked: false
					},
					{
						value: '独立卫生间',
						checked: false
					},
					{
						value: '近地铁',
						checked: false
					},
					{
						value: '周租月租',
						checked: false
					},
					{
						value: '自助入住',
						checked: false
					},
					{
						value: '空调',
						checked: false
					},
					{
						value: 'wifi上网',
						checked: false
					}
				],
				housePersonNum: ''
			}
		},
		onLoad() {

		},
		onShow() {

		},
		methods: {
			save() {
				var data = {}
				data.houseType = this.currentHouseType
				data.houseTap = this.currentHouseTap
				data.housePersonNum = this.housePersonNum
				data.Price = this.Price
				data.pactImgFile = this.pactImgFile
				console.log(data)
				this.saveHouseInfolist(data)
				uni.navigateBack()

			},
			upload() {
				var that = this
				uni.chooseImage({
					count: 1,
					sizeType: ['copressed'],
					success(res) {
						//因为有一张图片， 输出下标[0]， 直接输出地址
						that.pactImgFile = res.tempFilePaths[0]
					}
				})
			},
			checkboxChange: function(e) {
				var items = this.houseTap,
					values = e.detail.value;
				for (var i = 0, lenI = items.length; i < lenI; ++i) {
					const item = items[i]
					if (values.includes(item.value)) {
						this.$set(item, 'checked', true)
					} else {
						this.$set(item, 'checked', false)
					}
				}
				this.currentHouseTap = e.detail.value
			},
			ChangehouserType: function(e) {
				var that = this
				that.houseTypeindex = e.target.value
				that.currentHouseType = that.houseType[that.houseTypeindex]
			},
			inpPersonNum: function(e) {
				this.housePersonNum = e.detail.value
			},
			inpPrice: function(e) {
				this.Price = e.detail.value
			},
			...mapMutations(['saveHouseInfolist'])
		}
	}
</script>

<style scoped>
	.input_wrap {
		position: relative;
		width: 90%;
		border-bottom: 1upx solid rgba(0, 0, 0, 0.5);
		margin: 10upx auto;
		padding: 20upx;
	}

	.wrap1::after {
		content: '∨';
		font-size: 40upx;
		font-weight: bold;
		position: absolute;
		z-index: 999999;
		right: 60upx;
		top: 80upx;
	}

	.input_wrap>text {
		font-size: 40upx;
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
