import baseUrl from 'common/utils.js'
// import Vuex from 'vuex'
import Vue from 'vue'
import dateUtils from "./static/js/date.js"
import imUtils from "./static/js/imTools.js"
import jpushIM from "./static/js/im.js"

import store from './store.js'

import App from './App'

Vue.prototype.$baseUrl = baseUrl

Vue.config.productionTip = false
Vue.prototype.dateUtils = dateUtils;
Vue.prototype.imUtils = imUtils;
Vue.prototype.jpushIM = jpushIM;

App.mpType = 'app'

const app = new Vue({
	...App,
	store
})
app.$mount()
