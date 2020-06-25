import Vue from 'vue'
import App from './App.vue'
import { BootstrapVue } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import router from "./components/Root";
import store from "./components/store/Store";

Vue.use(BootstrapVue)
Vue.config.productionTip = false

new Vue({
    store,
    router,
    render: h => h(App),
}).$mount('#app')
