(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/product/product"],{"0895":function(t,o,i){"use strict";i.r(o);var e=i("e36e4"),n=i("93fc");for(var s in n)"default"!==s&&function(t){i.d(o,t,function(){return n[t]})}(s);i("f778");var r,u=i("f0c5"),c=Object(u["a"])(n["default"],e["b"],e["c"],!1,null,"c5d2f436",null,!1,e["a"],r);o["default"]=c.exports},"74b7":function(t,o,i){},"8f52":function(t,o,i){"use strict";(function(t){i("7754"),i("921b");e(i("66fd"));var o=e(i("0895"));function e(t){return t&&t.__esModule?t:{default:t}}t(o.default)}).call(this,i("6e42")["createPage"])},"93fc":function(t,o,i){"use strict";i.r(o);var e=i("cedf"),n=i.n(e);for(var s in e)"default"!==s&&function(t){i.d(o,t,function(){return e[t]})}(s);o["default"]=n.a},cedf:function(t,o,i){"use strict";(function(t,i){Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0;var e={data:function(){return{productID:"",productinfo:{},currentPhotoindex:0,adress:"",star:!1,houseinfo:[{text:"可以做饭",src:"../../static/images/COOK.png",isok:!0},{text:"独立卫生间",src:"../../static/images/WASHROOM.png",isok:!0},{text:"热水",src:"../../static/images/HOTWATER.png",isok:!0},{text:"无线上网",src:"../../static/images/WIFI.png",isok:!0},{text:"自助入住",src:"../../static/images/ZIZHU.png",isok:!0},{text:"近地铁",src:"../../static/images/SUBWAY.png",isok:!0},{text:"空调",src:"../../static/images/KONGTIAO.png",isok:!0},{text:"周租月租",src:"../../static/images/YUE.png",isok:!0}]}},onLoad:function(o){var e=this;this.productID=o.currentProductID,t.request({url:this.$baseUrl.baseUrl+"/currentProduct",data:{productID:e.productID},success:function(t){e.productinfo=t.data.data,e.productinfo.newProductimg=t.data.data.newProductimg.map(function(t,o){return t.newimgSrc=e.$baseUrl.baseUrl+t.newimgSrc,t.newimgSrc}),i("log",e.productinfo," at pages\\product\\product.vue:148"),e.adress=e.productinfo.addresslist.province+e.productinfo.addresslist.city+e.productinfo.addresslist.district+e.productinfo.addresslist.fulladress,-1!=e.productinfo.houseinfolist.houseTap.indexOf("可以做饭")&&(e.houseinfo[0].isok=!1),-1!=e.productinfo.houseinfolist.houseTap.indexOf("独立卫生间")&&(e.houseinfo[1].isok=!1),-1!=e.productinfo.houseinfolist.houseTap.indexOf("提供热水")&&(e.houseinfo[2].isok=!1),-1!=e.productinfo.houseinfolist.houseTap.indexOf("wifi上网")&&(e.houseinfo[3].isok=!1),-1!=e.productinfo.houseinfolist.houseTap.indexOf("自助入住")&&(e.houseinfo[4].isok=!1),-1!=e.productinfo.houseinfolist.houseTap.indexOf("近地铁")&&(e.houseinfo[5].isok=!1),-1!=e.productinfo.houseinfolist.houseTap.indexOf("空调")&&(e.houseinfo[6].isok=!1),-1!=e.productinfo.houseinfolist.houseTap.indexOf("周租月租")&&(e.houseinfo[7].isok=!1)}})},methods:{talk:function(){var t=this;i("log",999," at pages\\product\\product.vue:183");var o=this.productinfo.userid.toString().slice(0,11);i("log",o," at pages\\product\\product.vue:186"),t.skipToSingleChat(o)},skipToSingleChat:function(o){var i=this;if(o)t.showModal({title:"提示",content:"如果填写了自定义用户名创建会话，则以自定用户名为主",showCancel:!1,cancelText:"确定",confirmText:"关闭",success:function(e){var n=o;i.jpushIM.skipToSingleChat(n,function(o){var i=o.data;t.navigateTo({url:"../im-chat/im-chat?title="+i.title+"&fromUser="+JSON.stringify(i.fromUser)})},function(o){t.showToast({title:"创建会话失败:"+o.errorMsg,icon:"none"})})},fail:function(){},complete:function(){}});else{var e=this.array[this.index].username;this.jpushIM.skipToSingleChat(e,function(o){var i=o.data;t.navigateTo({url:"im-chat?title="+i.title+"&fromUser="+JSON.stringify(i.fromUser)})},function(o){t.showToast({title:"创建会话失败:"+o.errorMsg,icon:"none"})})}},changePhoto:function(t){this.currentPhotoindex=t.detail.current},star1:function(){this.star=!this.star},previewImg:function(o){var e=[];e[0]=this.productinfo.newProductimg[o],t.previewImage({urls:e,success:function(){i("log","成功"," at pages\\product\\product.vue:247")}})}}};o.default=e}).call(this,i("6e42")["default"],i("0de9")["default"])},e36e4:function(t,o,i){"use strict";var e,n=function(){var t=this,o=t.$createElement;t._self._c},s=[];i.d(o,"b",function(){return n}),i.d(o,"c",function(){return s}),i.d(o,"a",function(){return e})},f778:function(t,o,i){"use strict";var e=i("74b7"),n=i.n(e);n.a}},[["8f52","common/runtime","common/vendor"]]]);