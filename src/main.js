import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'

import 'normalize.css/normalize.css'
import 'styles/index.scss'
import 'element-ui/lib/theme-chalk/index.css'
import 'styles/element-ui.scss'
import 'assets/icon/iconfont.css'

Vue.config.productionTip = false

Vue.use(ElementUI, { size: 'small' })

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})