<template>
	<view>

		<view class="input_wrap">
			<text style="margin-bottom: 30upx;display: block;">您是否以前出租过房源？</text>
			<checkbox-group @change="checkboxChangeQ1">
				<view class="" v-for="(item,index) in Q1" :key="index" style="margin: 10upx auto;">
					<view>
						<checkbox :value="item.value" :checked="item.checked" />
						<text>{{item.value}}</text>
					</view>
				</view>
			</checkbox-group>
		</view>

		<view class="input_wrap">
			<text style="margin-bottom: 30upx;display: block;">您希望多久接待一次房客？</text>
			<checkbox-group @change="checkboxChangeQ2">
				<view class="" v-for="(item,index) in Q2" :key="index" style="margin: 10upx auto;">
					<view>
						<checkbox :value="item.value" :checked="item.checked" />
						<text>{{item.value}}</text>
					</view>
				</view>
			</checkbox-group>
		</view>

		<view class="input_wrap">
			<text style="margin-bottom: 30upx;display: block;">预订后最早入住时间？</text>
			<checkbox-group @change="checkboxChangeQ3">
				<view class="" v-for="(item,index) in Q3" :key="index" style="margin: 10upx auto;">
					<view>
						<checkbox :value="item.value" :checked="item.checked" />
						<text>{{item.value}}</text>
					</view>
				</view>
			</checkbox-group>
		</view>

		<view class="input_wrap lianluo">
			<text>联络方式（请尽可能保持联络方式畅通）</text>
			<view style="margin-top: 30upx;">姓名：<input  placeholder="例如: 李先生" @input="inpownerName" :value="ownerName" /></view>
			<view>手机号码：<input type="number" maxlength="11" placeholder="例如: 176****4301" @input="inpownerPhone" :value="ownerPhone" /></view>
			<view>QQ：<input type="number"  placeholder="例如: 1433****85" @input="inpownerQQ" :value="ownerQQ" /></view>
			<view>微信：<input  placeholder="例如: A130******" @input="inpownerWechat" :value="ownerWechat" /></view>
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
				Q1: [{
						value: '我有出租经验',
						checked: false
					},
					{
						value: '这方面我是新手',
						checked: false
					}
				],
				Q2: [{
						value: '尽可能多点',
						checked: false
					},
					{
						value: '部分时间',
						checked: false
					},
					{
						value: '我还不确定',
						checked: false
					}
				],
				Q3: [{
						value: '即刻入住',
						checked: false
					},
					{
						value: '与我沟通联络',
						checked: false
					}
				],
				ownerName: '',
				ownerPhone: '',
				ownerQQ: '',
				ownerWechat: '',
				currentQ1asw: '', //当前Q1选择
				currentQ2asw: '', //当前Q2选择
				currentQ3asw: '' //当前Q3选择
			}
		},
		onLoad() {

		},
		onShow() {

		},
		methods: {
			save(){
				var data = {}
				data.currentQ1asw = this.currentQ1asw
				data.currentQ2asw = this.currentQ2asw
				data.currentQ3asw = this.currentQ3asw
				data.ownerName = this.ownerName
				data.ownerPhone = this.ownerPhone
				data.ownerQQ = this.ownerQQ
				data.ownerWechat = this.ownerWechat
				console.log(data)
				this.saveDataInfolist(data)
				uni.navigateBack()
			},
			...mapMutations(['saveDataInfolist']),
			inpownerName(e) {
				this.ownerName = e.detail.value
			},
			inpownerPhone(e) {
				this.ownerPhone = e.detail.value
			},
			inpownerQQ(e) {
				this.ownerQQ = e.detail.value
			},
			inpownerWechat(e) {
				this.ownerWechat = e.detail.value
			},
			checkboxChangeQ1(e) {
				var items = this.Q1,
					values = e.detail.value;
				for (var i = 0, lenI = items.length; i < lenI; ++i) {
					const item = items[i]
					if (values.includes(item.value)) {
						this.$set(item, 'checked', true)
					} else {
						this.$set(item, 'checked', false)
					}
				}
				
				this.currentQ1asw = e.detail.value[0]
			},
			checkboxChangeQ2(e) {
				var items = this.Q2,
					values = e.detail.value;
				for (var i = 0, lenI = items.length; i < lenI; ++i) {
					const item = items[i]
					if (values.includes(item.value)) {
						this.$set(item, 'checked', true)
					} else {
						this.$set(item, 'checked', false)
					}
				}
				this.currentQ2asw = e.detail.value[0]
			},
			checkboxChangeQ3(e) {
				var items = this.Q3,
					values = e.detail.value;
				for (var i = 0, lenI = items.length; i < lenI; ++i) {
					const item = items[i]
					if (values.includes(item.value)) {
						this.$set(item, 'checked', true)
					} else {
						this.$set(item, 'checked', false)
					}
				}
				this.currentQ3asw = e.detail.value[0]
			}
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


	.input_wrap>text {
		font-size: 40upx;
	}

	.lianluo>view {
		/* 		height: 50upx;
		line-height: 50upx; */
		border-bottom: 1upx solid rgba(0, 0, 0, 0.5);
	}
</style>
