
var isReady=false;var onReadyCallbacks=[];
var __uniConfig = {"pages":["pages/index/index","pages/product/product","pages/goodHouse/goodHouse","pages/productList/productList","pages/rentalHouse/rentalHouse","pages/rentalHouse/viewfrom/viewfrom","pages/rentalHouse/datafrom/datafrom","pages/rentalHouse/photofrom/photofrom","pages/rentalHouse/infofrom/infofrom","pages/rentalHouse/adressfrom/adressfrom","pages/beingCustodian/beingCustodian","pages/myInfo/myInfo","pages/login/login","pages/login/forget","pages/login/register","pages/message/message","pages/im-chat/im-list","pages/im-chat/im-chat"],"window":{"navigationBarTextStyle":"black","navigationBarTitleText":"凉安租房","navigationBarBackgroundColor":"#F8F8F8","backgroundColor":"#F8F8F8"},"tabBar":{"list":[{"pagePath":"pages/index/index","text":"首页","iconPath":"static/images/home.png","selectedIconPath":"static/images/home-selected.png"},{"pagePath":"pages/im-chat/im-list","text":"消息","iconPath":"static/images/message.png","selectedIconPath":"static/images/message-selected.png"},{"pagePath":"pages/goodHouse/goodHouse","text":"我的房源","iconPath":"static/images/house.png","selectedIconPath":"static/images/house-selected.png"},{"pagePath":"pages/myInfo/myInfo","text":"我的","iconPath":"static/images/myInfo.png","selectedIconPath":"static/images/myInfo-selected.png"}],"selectedColor":"#1296db"},"renderer":"auto","splashscreen":{"alwaysShowBeforeRender":true,"autoclose":false},"appname":"凉安租房","compilerVersion":"2.6.16","entryPagePath":"pages/index/index","networkTimeout":{"request":60000,"connectSocket":60000,"uploadFile":60000,"downloadFile":60000}};
var __uniRoutes = [{"path":"/pages/index/index","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"凉安租房"}},{"path":"/pages/product/product","meta":{},"window":{}},{"path":"/pages/goodHouse/goodHouse","meta":{"isQuit":true,"isTabBar":true},"window":{}},{"path":"/pages/productList/productList","meta":{},"window":{}},{"path":"/pages/rentalHouse/rentalHouse","meta":{},"window":{}},{"path":"/pages/rentalHouse/viewfrom/viewfrom","meta":{},"window":{}},{"path":"/pages/rentalHouse/datafrom/datafrom","meta":{},"window":{}},{"path":"/pages/rentalHouse/photofrom/photofrom","meta":{},"window":{}},{"path":"/pages/rentalHouse/infofrom/infofrom","meta":{},"window":{}},{"path":"/pages/rentalHouse/adressfrom/adressfrom","meta":{},"window":{}},{"path":"/pages/beingCustodian/beingCustodian","meta":{},"window":{}},{"path":"/pages/myInfo/myInfo","meta":{"isQuit":true,"isTabBar":true},"window":{}},{"path":"/pages/login/login","meta":{},"window":{}},{"path":"/pages/login/forget","meta":{},"window":{}},{"path":"/pages/login/register","meta":{},"window":{}},{"path":"/pages/message/message","meta":{},"window":{}},{"path":"/pages/im-chat/im-list","meta":{"isQuit":true,"isTabBar":true},"window":{}},{"path":"/pages/im-chat/im-chat","meta":{},"window":{}}];
__uniConfig.onReady=function(callback){if(__uniConfig.ready){callback()}else{onReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"ready",{get:function(){return isReady},set:function(val){isReady=val;if(!isReady){return}const callbacks=onReadyCallbacks.slice(0);onReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
service.register("uni-app-config",{create(a,b,c){if(!__uniConfig.viewport){var d=b.weex.config.env.scale,e=b.weex.config.env.deviceWidth,f=Math.ceil(e/d);Object.assign(__uniConfig,{viewport:f,defaultFontSize:Math.round(f/20)})}return{instance:{__uniConfig:__uniConfig,__uniRoutes:__uniRoutes,global:void 0,window:void 0,document:void 0,frames:void 0,self:void 0,location:void 0,navigator:void 0,localStorage:void 0,history:void 0,Caches:void 0,screen:void 0,alert:void 0,confirm:void 0,prompt:void 0,fetch:void 0,XMLHttpRequest:void 0,WebSocket:void 0,webkit:void 0,print:void 0}}}});