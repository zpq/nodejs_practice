import Vue from 'vue'
import App from './components/app.vue'
import store from './vuex/store'

new Vue({
    store,
    el : "body",
    components : { App : App }
})
