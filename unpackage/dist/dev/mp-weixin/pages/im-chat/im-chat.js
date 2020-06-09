(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["pages/im-chat/im-chat"],{

/***/ 160:
/*!******************************************************************************!*\
  !*** E:/2016171102李冠儒毕设源码/凉安租房/main.js?{"page":"pages%2Fim-chat%2Fim-chat"} ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(createPage) {__webpack_require__(/*! uni-pages */ 4);__webpack_require__(/*! @dcloudio/uni-stat */ 5);

var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 2));
var _imChat = _interopRequireDefault(__webpack_require__(/*! ./pages/im-chat/im-chat.vue */ 161));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
createPage(_imChat.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["createPage"]))

/***/ }),

/***/ 161:
/*!***********************************************************!*\
  !*** E:/2016171102李冠儒毕设源码/凉安租房/pages/im-chat/im-chat.vue ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _im_chat_vue_vue_type_template_id_276cc827___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./im-chat.vue?vue&type=template&id=276cc827& */ 162);
/* harmony import */ var _im_chat_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./im-chat.vue?vue&type=script&lang=js& */ 164);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _im_chat_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _im_chat_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _im_chat_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./im-chat.vue?vue&type=style&index=0&lang=css& */ 166);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 23);

var renderjs





/* normalize component */

var component = Object(_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _im_chat_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _im_chat_vue_vue_type_template_id_276cc827___WEBPACK_IMPORTED_MODULE_0__["render"],
  _im_chat_vue_vue_type_template_id_276cc827___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null,
  false,
  _im_chat_vue_vue_type_template_id_276cc827___WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

/* hot reload */
if (false) { var api; }
component.options.__file = "2016171102李冠儒毕设源码/凉安租房/pages/im-chat/im-chat.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 162:
/*!******************************************************************************************!*\
  !*** E:/2016171102李冠儒毕设源码/凉安租房/pages/im-chat/im-chat.vue?vue&type=template&id=276cc827& ***!
  \******************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_im_chat_vue_vue_type_template_id_276cc827___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./im-chat.vue?vue&type=template&id=276cc827& */ 163);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_im_chat_vue_vue_type_template_id_276cc827___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_im_chat_vue_vue_type_template_id_276cc827___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_im_chat_vue_vue_type_template_id_276cc827___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_im_chat_vue_vue_type_template_id_276cc827___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),

/***/ 163:
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!E:/2016171102李冠儒毕设源码/凉安租房/pages/im-chat/im-chat.vue?vue&type=template&id=276cc827& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components = {
  "uni-load-more": () =>
    __webpack_require__.e(/*! import() | components/uni-load-more/uni-load-more */ "components/uni-load-more/uni-load-more").then(__webpack_require__.bind(null, /*! @/components/uni-load-more/uni-load-more.vue */ 233))
}
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ 164:
/*!************************************************************************************!*\
  !*** E:/2016171102李冠儒毕设源码/凉安租房/pages/im-chat/im-chat.vue?vue&type=script&lang=js& ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_im_chat_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./im-chat.vue?vue&type=script&lang=js& */ 165);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_im_chat_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_im_chat_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_im_chat_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_im_chat_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_im_chat_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 165:
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!E:/2016171102李冠儒毕设源码/凉安租房/pages/im-chat/im-chat.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;































































































































































var _vuex = __webpack_require__(/*! vuex */ 10);function _objectSpread(target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i] != null ? arguments[i] : {};var ownKeys = Object.keys(source);if (typeof Object.getOwnPropertySymbols === 'function') {ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {return Object.getOwnPropertyDescriptor(source, sym).enumerable;}));}ownKeys.forEach(function (key) {_defineProperty(target, key, source[key]);});}return target;}function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}var uniLoadMore = function uniLoadMore() {return __webpack_require__.e(/*! import() | components/uni-load-more/uni-load-more */ "components/uni-load-more/uni-load-more").then(__webpack_require__.bind(null, /*! @/components/uni-load-more/uni-load-more.vue */ 233));};






var _self;var _default =

{
  components: {
    uniLoadMore: uniLoadMore },

  computed: _objectSpread({},
  (0, _vuex.mapState)(['hasLogin', 'loginProvider', 'nickname', 'avatar', 'receiveMessage', 'sendMessageResponse']), {
    emojiList: {
      get: function get() {
        return this.imUtils.emojiList;
      },
      set: function set() {} } }),


  data: function data() {
    return {
      //文字消息
      textMsg: '',
      //消息列表
      isHistoryLoading: false,
      scrollAnimation: false,
      scrollTop: 0,
      scrollToView: '',
      msgList: [],
      msgImgList: [],
      myuid: "",
      loadHistoryLimit: 10, // 每次加载历史记录条数
      getMsgListLimit: 10, // 初始化记录的条数
      chartUser: {}, // 聊天对象的相关信息
      offset: 0, // 从第几条开始，每获取过一条，+1
      ifHaveMore: true, // 是否还有更多
      loadingText: {
        contentdown: '上拉显示更多',
        contentrefresh: '', // 发送消息以后，loading出现，不需要文字
        contentnomore: '没有更多数据了' },

      //录音相关参数

      //H5不能录音
      RECORDER: uni.getRecorderManager(),

      isVoice: false,
      voiceTis: '按住 说话',
      recordTis: "手指上滑 取消发送",
      recording: false,
      willStop: false,
      initPoint: { identifier: 0, Y: 0 },
      recordTimer: null,
      recordLength: 0,

      //播放语音相关参数
      AUDIO: uni.createInnerAudioContext(),
      playMsgid: null,
      VoiceTimer: null,
      // 抽屉参数
      popupLayerClass: '',
      // more参数
      hideMore: true,
      //表情定义
      hideEmoji: true };

  },
  onLoad: function onLoad(option) {var _this = this;
    _self = this;

    // 赋值聊天对象的username，nickname等信息
























































    //语音自然播放结束
    this.AUDIO.onEnded(function (res) {
      _this.playMsgid = null;
    });

    //录音开始事件
    this.RECORDER.onStart(function (e) {
      _this.recordBegin(e);
    });
    //录音结束事件
    this.RECORDER.onStop(function (e) {
      _this.recordEnd(e);
    });


  },
  onShow: function onShow() {
    this.scrollTop = 9999999;
  },
  methods: _objectSpread({},
  (0, _vuex.mapMutations)(['login', 'logout']), {
    getMockMsgList: function getMockMsgList() {
      var list = [
      { type: "user", msg: { id: 1, type: "text", time: "12:56", userinfo: { uid: 0, username: "大黑哥", face: "/static/img/face.jpg" }, content: { text: "为什么温度会相差那么大？" } } },
      { type: "user", msg: { id: 2, type: "text", time: "12:57", userinfo: { uid: 1, username: "售后客服008", face: "/static/img/im/face/face_2.jpg" }, content: { text: "这个是有偏差的，两个温度相差十几二十度是很正常的，如果相差五十度，那即是质量问题了。" } } },
      { type: "user", msg: { id: 3, type: "voice", time: "12:59", userinfo: { uid: 1, username: "售后客服008", face: "/static/img/im/face/face_2.jpg" }, content: { url: "/static/voice/1.mp3", length: "00:06" } } },
      { type: "user", msg: { id: 4, type: "voice", time: "13:05", userinfo: { uid: 0, username: "大黑哥", face: "/static/img/face.jpg" }, content: { url: "/static/voice/2.mp3", length: "00:06" } } }];

      list.sort(this.imUtils.compareAscSort("timestamp")); // 按指定字段排序
      // 获取消息中的图片,并处理显示尺寸
      for (var i = 0; i < list.length; i++) {
        if (list[i].type == 'user' && list[i].msg.type == "img") {
          list[i].msg.content = this.setPicSize(list[i].msg.content);
          this.msgImgList.push(list[i].msg.content.url);
        }
      }
      this.msgList = list;
      // 滚动到底部
      this.$nextTick(function () {
        //进入页面滚动到底部
        this.scrollTop = 9999;
        this.$nextTick(function () {
          this.scrollAnimation = true;
        });
      });
      // 如果长度不足10条，就表示没有下一页了
      if (list.length < this.getMsgListLimit) {
        this.ifHaveMore = false;
      }
    },
    // 接受消息(筛选处理)
    screenMsg: function screenMsg(msg) {
      console.log(222);
      console.log(msg);
      // 调用IM发送消息方法，进行筛选处理
      if (msg.type == 'system') {
        // 系统消息
        switch (msg.msg.type) {
          case 'text':
            this.addSystemTextMsg(msg);
            break;
          case 'redEnvelope':
            this.addSystemRedEnvelopeMsg(msg);
            break;}

      } else if (msg.type == 'user') {
        // 用户消息
        switch (msg.msg.type) {
          case 'text':
            // 文字消息
            this.addTextMsg(msg);
            break;
          case 'voice':
            this.addVoiceMsg(msg);
            break;
          case 'img':
            // 图片消息
            this.addImgMsg(msg);
            break;
          case 'redEnvelope':
            this.addRedEnvelopeMsg(msg);
            break;}

        this.$nextTick(function () {
          // 滚动到底
          this.scrollToView = msg.msg.msgId;
        });
        // console.log('用户消息');
        //非自己的消息震动
        if (msg.msg.userinfo.uid != this.myuid) {
          // console.log('振动');
          uni.vibrateLong();
        }
      }

    },

    //触发滑动到顶部(加载历史信息记录)
    loadHistory: function loadHistory(e) {
      if (this.isHistoryLoading) {
        return;
      }
      if (this.ifHaveMore == false) {
        return;
      }
      this.isHistoryLoading = true; //参数作为进入请求标识，防止重复请求
      this.scrollAnimation = false; //关闭滑动动画

      var Viewid = this.msgList[0].msg.msgId; //记住第一个信息ID
      //请求历史记录效果
      setTimeout(function () {
        var params = {
          "type": "single",
          "username": _self.chartUser.username,
          "from": _self.offset, // 从第几条开始
          "limit": _self.loadHistoryLimit // 历史记录每次加载10条
        };
        // console.log("JMessagePlugin getHistoryMessages获取历史消息记录传参：" + JSON.stringify(params));
        _self.jpushIM.getHistoryMessages(params, function (res) {
          if (res.errorCode == 0) {
            var list = _self.setList(res.data);
            // console.log("JMessagePlugin getHistoryMessages处理过的消息体：" + JSON.stringify(list));
            // 获取消息中的图片,并处理显示尺寸
            for (var i = 0; i < list.length; i++) {
              if (list[i].type == 'user' && list[i].msg.type == "img") {
                list[i].msg.content = _self.setPicSize(list[i].msg.content);
                _self.msgImgList.unshift(list[i].msg.content.url);
              }
              _self.msgList.unshift(list[i]);
            }
            //这段代码很重要，不然每次加载历史数据都会跳到顶部
            _self.$nextTick(function () {
              _self.scrollToView = Viewid; //跳转上次的第一行信息位置
              _self.$nextTick(function () {
                _self.scrollAnimation = true; //恢复滚动动画
              });
            });
            // 如果长度不足10条，就表示没有下一页了
            if (list.length < _self.loadHistoryLimit) {
              _self.ifHaveMore = false;
            }
            _self.isHistoryLoading = false;

          } else {
            _self.ifHaveMore = false;
            _self.isHistoryLoading = false;
          }

        });

      }, 1000);
    },
    // 加载初始页面消息
    getMsgList: function getMsgList() {var _this2 = this;
      // 消息列表
      var params = {
        "type": "single",
        "username": this.chartUser.username,
        "from": this.offset, // 从第几条开始
        "limit": this.loadHistoryLimit // 历史记录每次加载10条
      };
      // console.log("JMessagePlugin getHistoryMessages初始化传参：" + JSON.stringify(params));
      this.jpushIM.getHistoryMessages(params, function (res) {
        if (res.errorCode == 0) {
          // console.log(res.data);
          if (res.data.length < 1) {
            // 没有历史记录
            _this2.ifHaveMore = false;
            return false;
          }
          var list = _this2.setList(res.data);
          list.sort(_this2.imUtils.compareAscSort("timestamp")); // 按指定字段排序
          // 获取消息中的图片,并处理显示尺寸
          for (var i = 0; i < list.length; i++) {
            if (list[i].type == 'user' && list[i].msg.type == "img") {
              list[i].msg.content = _this2.setPicSize(list[i].msg.content);
              _this2.msgImgList.push(list[i].msg.content.url);
            }
          }
          _this2.msgList = list;
          // 滚动到底部
          _this2.$nextTick(function () {
            //进入页面滚动到底部
            this.scrollTop = 9999;
            this.$nextTick(function () {
              this.scrollAnimation = true;
            });
          });
          // 如果长度不足10条，就表示没有下一页了
          if (list.length < _this2.getMsgListLimit) {
            _this2.ifHaveMore = false;
          }

        } else {
          _this2.ifHaveMore = false;
          uni.showToast({
            title: res.errorMsg,
            icon: 'none' });

        }
      });
    },
    //处理图片尺寸，如果不处理宽高，新进入页面加载图片时候会闪
    setPicSize: function setPicSize(content) {
      // 让图片最长边等于设置的最大长度，短边等比例缩小，图片控件真实改变，区别于aspectFit方式。
      var maxW = uni.upx2px(350); //350是定义消息图片最大宽度
      var maxH = uni.upx2px(350); //350是定义消息图片最大高度
      if (content.w > maxW || content.h > maxH) {
        var scale = content.w / content.h;
        content.w = scale > 1 ? maxW : maxH * scale;
        content.h = scale > 1 ? maxW / scale : maxH;
      }
      return content;
    },
    // 设置列表，items是sdk返回来的列表
    setList: function setList(items) {var _this3 = this;
      var newItems = [];
      items.forEach(function (e) {
        if (e) {
          _this3.offset++;
          var item = _this3.setSingItem(e, "user");
          // console.log("JMessagePlugin 消息体为： " + JSON.stringify(item));
          newItems.push(item);
        }
      });
      return newItems;
    },
    /**
        * 处理单条sdk的message消息转为遍历中规定的消息体
        * @param {Object} item 完整的item对象，sdk的message格式
        * @param {Object} type 需要处理类型，支持user / system
        */
    setSingItem: function setSingItem(item, type) {
      var content = {};
      var today = new Date().getTime();
      if (item.messageType == "text") {
        // 文字消息
        content = {
          text: _self.imUtils.replaceEmoji(item.messageString) };

      } else if (item.messageType == "img") {
        // 图片消息
        content = {
          url: item.messageString,
          w: item.extras.w, // 这里的附加数是在upload的时候就带上去的
          h: item.extras.h };

      } else if (item.messageType == "voice") {
        content = {
          url: item.messageString,
          length: item.extras.length // 这里的附加数是在upload的时候就带上去的
        };
      }
      var time;
      if (today - item.timestamp < 86400000) {
        time = this.dateUtils.formatDateTime(item.timestamp, "H:i:s");
      } else {
        time = this.dateUtils.formatDateTime(item.timestamp, "str");
      };
      return {
        type: type,
        timestamp: item.timestamp,
        msg: {
          id: item.serverMessageId, // 服务器端对应的消息 Id
          msgId: item.msgId, // msgId Android中做过处理
          messageId: item.messageId, // 本地数据库中的消息 Id。
          type: item.messageType,
          status: item.status,
          flagString: item.flagString,
          time: time,
          userinfo: {
            uid: item.fromUser.username,
            username: item.fromUser.nickname,
            face: item.fromUser.avatar ? item.fromUser.avatar : "/static/img/face.jpg" // 聊天人的头像
          },
          content: content } };


    },
    //更多功能(点击+弹出) 
    showMore: function showMore() {
      this.isVoice = false;
      this.hideEmoji = true;
      if (this.hideMore) {
        this.hideMore = false;
        this.openDrawer();
      } else {
        this.hideDrawer();
      }
    },
    // 打开抽屉
    openDrawer: function openDrawer() {
      this.popupLayerClass = 'showLayer';
    },
    // 隐藏抽屉
    hideDrawer: function hideDrawer() {var _this4 = this;
      this.popupLayerClass = '';
      setTimeout(function () {
        _this4.hideMore = true;
        _this4.hideEmoji = true;
      }, 150);
    },
    // 选择图片发送
    chooseImage: function chooseImage() {
      this.getImage('album');
    },
    //拍照发送
    camera: function camera() {
      this.getImage('camera');
    },
    //选照片 or 拍照
    getImage: function getImage(type) {var _this5 = this;
      this.hideDrawer();
      uni.chooseImage({
        sourceType: [type],
        sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
        success: function success(res) {var _loop = function _loop(
          i) {
            uni.getImageInfo({
              src: res.tempFilePaths[i],
              success: function success(image) {
                // console.log(image.width);
                // console.log(image.height);
                var msg = { url: res.tempFilePaths[i], w: image.width, h: image.height };
                _this5.sendMsg(msg, 'img');
              } });};for (var i = 0; i < res.tempFilePaths.length; i++) {_loop(i);

          }
        } });

    },
    // 选择表情
    chooseEmoji: function chooseEmoji() {
      this.hideMore = true;
      if (this.hideEmoji) {
        this.hideEmoji = false;
        this.openDrawer();
      } else {
        this.hideDrawer();
      }
    },
    //添加表情
    addEmoji: function addEmoji(em) {
      this.textMsg += em.alt;
    },

    //获取焦点，如果不是选表情ing,则关闭抽屉
    textareaFocus: function textareaFocus() {
      if (this.popupLayerClass == 'showLayer' && this.hideMore == false) {
        this.hideDrawer();
      }
    },
    // 发送文字消息
    sendText: function sendText() {
      this.hideDrawer(); //隐藏抽屉
      if (!this.textMsg) {
        return;
      }
      // let content = this.replaceEmoji(this.textMsg);
      var content = this.textMsg;
      var msg = { text: content };
      this.sendMsg(msg, 'text');
      this.textMsg = ''; //清空输入框
    },
    // 发送消息
    sendMsg: function sendMsg(content, type) {var _this6 = this;
      var params = {};
      switch (type) {
        case "text":
          params = {
            "msgType": type,
            "type": "single", // 消息类型，'single' / 'group' / 'chatRoom'
            "username": this.chartUser.username, // 接收人
            "text": content.text // 文字内容
          };
          // console.log("文本消息传参：" + JSON.stringify(params));
          break;
        case "img":
          params = {
            "msgType": type,
            "type": "single", // 消息类型，'single' / 'group' / 'chatRoom'
            "username": this.chartUser.username, // 接收人
            "path": content.url,
            "extras": { "w": content.w, "h": content.h } // 附加字段，宽度/高度
          };
          // console.log("图片消息传参：" + JSON.stringify(params));
          break;
        case "voice":
          // 语音消息
          params = {
            "msgType": type,
            "type": "single", // 消息类型，'single' / 'group' / 'chatRoom'
            "username": this.chartUser.username, // 接收人
            "path": content.url,
            "extras": { "length": content.length, "duration": content.duration } // 语音长度
          };
          break;
        default:
          break;}

      this.$store.dispatch("submitChatMsg", params).then(function (response) {
        // 成功
        console.log('成功');
        console.log(response);
        var msg = _this6.setSingItem(response, "user");
        // if(type == "text"){
        // 	// 如果是文字，替换一下表情
        // 	content.text = _self.imUtils.replaceEmoji(msg.msg.content.text);
        // };
        // msg.msg.content = content; // 这里一定要加，是因为刚发出去的图片消息是是异步上传

        // 发送消息
        _this6.screenMsg(msg);
      }, function (response) {
        // 失败
        console.log('失败');
        uni.showModal({
          title: '发送失败',
          content: response,
          showCancel: false,
          cancelText: '',
          confirmText: '关闭' });

        console.log("JMessagePlugin 发送消息失败：" + JSON.stringify(response));
      });
    },

    // 添加文字消息到列表
    addTextMsg: function addTextMsg(msg) {
      console.log(111);
      console.log(msg);
      this.msgList.push(msg);
    },
    // 添加语音消息到列表
    addVoiceMsg: function addVoiceMsg(msg) {
      this.msgList.push(msg);
    },
    // 添加图片消息到列表
    addImgMsg: function addImgMsg(msg) {
      msg.msg.content = this.setPicSize(msg.msg.content);
      this.msgImgList.push(msg.msg.content.url);
      this.msgList.push(msg);
    },
    addRedEnvelopeMsg: function addRedEnvelopeMsg(msg) {
      this.msgList.push(msg);
    },
    // 添加系统文字消息到列表
    addSystemTextMsg: function addSystemTextMsg(msg) {
      this.msgList.push(msg);
    },
    // 添加系统红包消息到列表
    addSystemRedEnvelopeMsg: function addSystemRedEnvelopeMsg(msg) {
      this.msgList.push(msg);
    },

    sendSystemMsg: function sendSystemMsg(content, type) {
      var lastid = this.msgList[this.msgList.length - 1].msg.id;
      lastid++;
      var row = { type: "system", msg: { id: lastid, type: type, content: content } };
      this.screenMsg(row);
    },
    //领取详情
    toDetails: function toDetails(rid) {
      uni.navigateTo({
        url: 'HM-details/HM-details?rid=' + rid });

    },
    // 预览图片
    showPic: function showPic(msg) {
      uni.previewImage({
        indicator: "none",
        current: msg.content.url,
        urls: this.msgImgList });

    },
    // 播放语音
    playVoice: function playVoice(msg) {
      // console.log("播放语音文件:" + JSON.stringify(msg));
      this.playMsgid = msg.id;
      this.AUDIO.src = msg.content.url;
      this.$nextTick(function () {
        this.AUDIO.play();
      });
    },
    // 录音开始
    voiceBegin: function voiceBegin(e) {
      if (e.touches.length > 1) {
        return;
      }
      this.initPoint.Y = e.touches[0].clientY;
      this.initPoint.identifier = e.touches[0].identifier;
      this.RECORDER.start({ format: "mp3" }); //录音开始,
    },
    //录音开始UI效果
    recordBegin: function recordBegin(e) {var _this7 = this;
      this.recording = true;
      this.voiceTis = '松开 结束';
      this.recordLength = 0;
      this.recordTimer = setInterval(function () {
        _this7.recordLength++;
      }, 1000);
    },
    // 录音被打断
    voiceCancel: function voiceCancel() {
      this.recording = false;
      this.voiceTis = '按住 说话';
      this.recordTis = '手指上滑 取消发送';
      this.willStop = true; //不发送录音
      this.RECORDER.stop(); //录音结束
    },
    // 录音中(判断是否触发上滑取消发送)
    voiceIng: function voiceIng(e) {
      if (!this.recording) {
        return;
      }
      var touche = e.touches[0];
      //上滑一个导航栏的高度触发上滑取消发送
      if (this.initPoint.Y - touche.clientY >= uni.upx2px(100)) {
        this.willStop = true;
        this.recordTis = '松开手指 取消发送';
      } else {
        this.willStop = false;
        this.recordTis = '手指上滑 取消发送';
      }
    },
    // 结束录音
    voiceEnd: function voiceEnd(e) {
      if (!this.recording) {
        return;
      }
      this.recording = false;
      this.voiceTis = '按住 说话';
      this.recordTis = '手指上滑 取消发送';
      this.RECORDER.stop(); //录音结束
    },
    //录音结束(回调文件)
    recordEnd: function recordEnd(e) {
      clearInterval(this.recordTimer);
      if (!this.willStop) {
        var msg = {
          length: 0,
          url: e.tempFilePath,
          duration: this.recordLength // 【**必传】，语音内容的持续时长. 单位是秒
        };
        var min = parseInt(this.recordLength / 60);
        var sec = this.recordLength % 60;
        min = min < 10 ? '0' + min : min;
        sec = sec < 10 ? '0' + sec : sec;
        msg.length = min + ':' + sec;

        // console.log("发送语音: " + JSON.stringify(msg));
        this.sendMsg(msg, 'voice');
      } else {
        console.log('取消发送录音');
      }
      this.willStop = false;
    },
    // 切换语音/文字输入
    switchVoice: function switchVoice() {
      this.hideDrawer();
      this.isVoice = this.isVoice ? false : true;
    },
    discard: function discard() {
      return;
    } }),

  watch: {
    receiveMessage: function receiveMessage(res) {
      // console.log("监听新消息事件");
      if (res.fromUser.username == this.chartUser.username) {
        // 监听有收到新消息，并且接收人是当前用户
        // 重置会话消息未读数
        this.jpushIM.resetUnreadMessageCount({ "type": "single", "username": this.chartUser.username });

        // 在收到消息后更新
        var msg = this.setSingItem(res, "user");
        this.screenMsg(msg);

        // 消息设为已读
        this.jpushIM.setMessageHaveRead({
          "id": res.messageId,
          "type": "single",
          "username": res.fromUser.username },
        function (res) {
          console.log("JS setMessageHaveRead:" + JSON.stringify(res));
        });

      }
    },
    sendMessageResponse: function sendMessageResponse(res) {
      // 监听消息发送结果事件
      // console.log(res);
      if (res.toUser.username == this.chartUser.username) {
        var list = this.msgList;
        for (var i = 0; i < list.length; i++) {
          if (list[i].type == 'user' && list[i].msg.messageId == res.messageId) {
            list[i].msg.status = res.status; // 状态变更
            list[i].msg.messageId = res.messageId; // 本地数据库中的消息 Id。
            list[i].msg.id = res.serverMessageId; // 服务器端对应的消息 Id
            // var msg = _self.setSingItem(res,"user");
            // list[i] = msg;
          }
        }
      }
    } } };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["default"]))

/***/ }),

/***/ 166:
/*!********************************************************************************************!*\
  !*** E:/2016171102李冠儒毕设源码/凉安租房/pages/im-chat/im-chat.vue?vue&type=style&index=0&lang=css& ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_im_chat_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../HBuilderX/plugins/uniapp-cli/node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-1!../../../../HBuilderX/plugins/uniapp-cli/node_modules/css-loader??ref--6-oneOf-1-2!../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!../../../../HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--6-oneOf-1-3!../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./im-chat.vue?vue&type=style&index=0&lang=css& */ 167);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_im_chat_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_im_chat_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_im_chat_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_im_chat_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_im_chat_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 167:
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-1!./node_modules/css-loader??ref--6-oneOf-1-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!E:/2016171102李冠儒毕设源码/凉安租房/pages/im-chat/im-chat.vue?vue&type=style&index=0&lang=css& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

},[[160,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/im-chat/im-chat.js.map