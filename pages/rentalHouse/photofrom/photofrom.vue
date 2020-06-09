<template>
	<view>
		<view class="input_wrap">
			<text>房源标题（一个好的标题可以更好的吸引租户哦！）</text>
			<input type="text" placeholder="例如: 井上华亭(仅限最多4字)" maxlength="4" @input="inphouseTitle" :value="houseTitle" />
		</view>

		<view class="input_wrap">
			<text>房源简介</text>
			<input type="text" placeholder="例如: 天宫赐福,百无禁忌(仅限最多36字)" maxlength="36" @input="inphouseAccount" :value="houseAccount"/>
		</view>

		<view class="input_wrap">
			<view>房源图片上传（需保证真实有效,建议图片格式为1440*960）</view>
			<button style="background: #007AFF;color: #FFFFFF;width: 300rpx;border-radius: 20upx;margin: 20upx 10upx;display: inline-block;"
			 @click="upload">点击上传</button>
			<button style="background: #007AFF;color: #FFFFFF;width: 300rpx;border-radius: 20upx;margin: 20upx 10upx;display: inline-block;"
			 @click="addimg">添加图片</button>
			<view class="img_wrap">
				<view v-for="(item,index) in houseImgFiles" :key="index" @tap="previewImg(index)">
					<image :src="item" mode="widthFix" style="width: 100%;height: 500upx;"></image>
				</view>
			</view>
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
				houseTitle: '',//房源标题
				houseAccount: '',//房源简介
				houseImgFiles: '',//房源图片
				imgSrc: [
					'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1583163812602&di=054e10b69ea0c8cc8bc86a4bcd6a3c21&imgtype=0&src=http%3A%2F%2Fa.hiphotos.baidu.com%2Fzhidao%2Fpic%2Fitem%2Ff7246b600c3387442b4893a7500fd9f9d62aa058.jpg',
					'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1583163812602&di=054e10b69ea0c8cc8bc86a4bcd6a3c21&imgtype=0&src=http%3A%2F%2Fa.hiphotos.baidu.com%2Fzhidao%2Fpic%2Fitem%2Ff7246b600c3387442b4893a7500fd9f9d62aa058.jpg',
					'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1583163812602&di=054e10b69ea0c8cc8bc86a4bcd6a3c21&imgtype=0&src=http%3A%2F%2Fa.hiphotos.baidu.com%2Fzhidao%2Fpic%2Fitem%2Ff7246b600c3387442b4893a7500fd9f9d62aa058.jpg',
					'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1583163812602&di=054e10b69ea0c8cc8bc86a4bcd6a3c21&imgtype=0&src=http%3A%2F%2Fa.hiphotos.baidu.com%2Fzhidao%2Fpic%2Fitem%2Ff7246b600c3387442b4893a7500fd9f9d62aa058.jpg',
				]
			}
		},
		methods: {
			upload() {
				var that = this
				uni.chooseImage({
					count: 9,
					sizeType: ['copressed'],
					success(res) {
						//因为有一张图片， 输出下标[0]， 直接输出地址
						that.houseImgFiles = res.tempFilePaths
						console.log(that.houseImgFiles)
					}
				})
			},
			//图片预览
			previewImg(idx) {
				var currentSrc = []
				currentSrc[0] = this.houseImgFiles[idx]
				uni.previewImage({
					urls: currentSrc,
					success: function() {
						console.log('成功')
					}
				})
			},
			//添加图片
			addimg() {
				var that = this
				uni.chooseImage({
					count: 1,
					sizeType: ['copressed'],
					success(res) {
						//因为有一张图片， 输出下标[0]， 直接输出地址
						that.houseImgFiles.push(res.tempFilePaths[0])
						// that.houseImgFiles = res.tempFilePaths
						console.log(that.houseImgFiles)
					}
				})
			},
			inphouseTitle(e){
				// console.log(e.detail.value)
				this.houseTitle = e.detail.value
			},
			inphouseAccount(e){
				// console.log(e.detail.value)
				this.houseAccount = e.detail.value
			},	
			//保存
			save(){
				var data = {}
				data.houseImgFiles = this.houseImgFiles
				data.houseTitle = this.houseTitle
				data.houseAccount = this.houseAccount
				this.savePhotoInfolist(data)
				uni.navigateBack()
			},
			...mapMutations(['savePhotoInfolist'])
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

	.img_wrap {
		display: flex;
		width: 100%;
		justify-content: flex-start;
		flex-wrap: wrap;
		/* 	margin-left: 10upx; */
	}

	.img_wrap>view {
		width: 40%;
		margin-left: 40upx;
		margin-top: 30upx;
	}

	/* 	.image-view>view>image{
		width: 100%;
		height: 50%;
	} */
</style>
