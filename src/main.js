// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
//解决移动端3s点击延迟问题
import fastClick from 'fastclick'
//初始化样式
import './assets/styles/reset.css'
//一像素边框解决方案
import './assets/styles/border.css'
// 引入字体图标   简化路径：在build中配置了'styles':resolve('src/assets/styles'),
import 'styles/iconfont.css'
Vue.config.productionTip = false
fastClick.attach(document.body)
    /* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    components: { App },
    template: '<App/>'
})