<template>
	<view>
		<view style="font-size: 50upx;font-weight: bold;margin: 30upx auto;width: 30%;">房东须知</view>
		
		<view style="font-size: 30upx;font-weight: bold;margin: 30upx auto;width: 90%;">请花两分钟时间了解适用您的房源的本地法律法规，以确保您的出租经历更流畅！</view>

		<view  style="font-size: 30upx;font-weight: bold;margin: 30upx auto;width: 90%;">数据披露</view>
		
		<view style="font-size: 30upx;margin: 30upx auto;width: 90%;">作为中国公民，您的相关信息将由凉安租房按照中国的相关法律法规存储，使用和处理。点击下面的“我同意”按钮即表示您同意凉安租房向客户披露您的信息而不向您提供进一步的通知。</view>
		
		<view @tap="openurl1" style="font-size: 30upx;margin: 30upx auto;width: 90%;color: #007AFF;">了解更多</view>
		
		<view style="font-size: 30upx;font-weight: bold;margin: 30upx auto;width: 90%;">您当地的法律与税费</view>
		
		<view style="font-size: 30upx;margin: 30upx auto;width: 90%;">
			大多数城市都有共享住宿方面的法律法规，许多地区还可能制定具体的法律和条例（如区划条例、建筑条例、许可条例或税收条例等）。在大多数地区，发布房源或接待房客之前，您必须先登记、获得许可证或执照。您可能还要负责汇缴特定的税费。在有些地区，短租可能被完全禁止
		</view>
		
		<view style="font-size: 30upx;font-weight: bold;margin: 30upx auto;width: 90%;">
			您需要对自己发布房源或预订住宿的决定负责。因此在爱彼迎发布房源之前，您应当先了解适用的法律和法规。为了帮助您尽快了解，我们在“您城市的法律”一栏中提供了一些有用信息供您参考。
		</view>
		
		<!-- <view><a href="https://www.airbnb.cn/help/article/1396" style="color: #007AFF;">进一步了解房东义务</a></view> -->
	
		<view @tap="openurl2" style="font-size: 30upx;margin: 30upx auto;width: 90%;color: #007AFF;">进一步了解房东义务</view>
		
		<view style="font-size: 30upx;font-weight: bold;margin: 30upx auto;width: 90%;">接受我们的服务条款并发布您的房源即代表您保证遵守适用的法律法规。</view>
		
		<view style="display: flex;justify-content: center;align-items: center;margin-top: 70upx;">
			<evan-checkbox v-model="checked">同意</evan-checkbox>
		</view>
		
		<button style="background: #007AFF;color: #FFFFFF;width: 90%;border-radius: 20upx;margin: 40upx auto;" @click="save">保存</button>
	</view>
	
	
</template>

<script>
	import {
		mapMutations
	} from 'vuex';
	import EvanCheckbox from '../../../components/evan-checkbox/evan-checkbox.vue'
	export default {
		data() {
			return {
				checked: false
			}
		},
		components:{
			EvanCheckbox
		},
		onShow() {
			

		},
		onLoad(){
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
		},
		methods: {
			// #ifdef APP-PLUS
			openurl1(){
				 plus.runtime.openWeb('https://www.airbnb.cn/help/article/1626');
			},
			 openurl2(){
				  plus.runtime.openWeb('https://www.airbnb.cn/help/article/1396');
			 },
			// #endif
			save(){
				if(this.checked == true){
					this.saveViewInfolist()
					uni.navigateBack()
				}
			},
			...mapMutations(['saveViewInfolist']),
		}
	}
</script>
	
<style>
	*{
		margin: 0;
		padding: 0;
	}
</style>
