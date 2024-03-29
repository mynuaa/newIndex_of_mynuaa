import Vue from 'vue'
import App from './App.vue'

import 'normalize.css'
import './style/fonts.css'
import './style/common.scss'

import {   Carousel,
  CarouselItem, } from 'element-ui'

Vue.use(Carousel)
Vue.use(CarouselItem)

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
