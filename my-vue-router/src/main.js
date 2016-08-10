import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

var router = new VueRouter();

import List from './components/List'
import Detail from './components/Detail'
// import Hello from './components/Hello'

var Root = Vue.extend({});

router.map({
	'/index' : {
		name : 'index',
		component : App,
	},
	'/list' : {
		name : 'list',
		component : List
	},
	'/detail/:id' : {
		name : 'detail',
		component : Detail
	}
});

router.redirect({
	"*" : "/index"
})

router.start(Root, '#app')
