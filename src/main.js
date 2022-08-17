import Vue from 'vue'
import App from './App.vue'
import './plugins/element'
import 'font-awesome/css/font-awesome.min.css'
// import axios from 'axios'
import router from './router/index'
import service from './service'
import echarts from 'echarts'

Vue.config.productionTip = false
// Vue.prototype.axios = axios
Vue.prototype.service = service
Vue.prototype.$echarts = echarts

// 路由导航守卫
router.beforeEach((to, from, next) => {
  if(!localStorage.getItem('username')) {
    if(to.path !== '/login') {
      next('/login')
    } else next()
  } next()
})

new Vue({
  render: h => h(App),
  router:router
}).$mount('#app')
