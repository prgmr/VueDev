import Vue from 'vue'
import store from './store/index'
import router from './router/index'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App),
}).$mount('#app')
