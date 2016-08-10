<template>
  <div>
    <h1>Vuejs</h1>
    <p>
      <a v-link="{ name: 'list' }">查看列表</a>
      <a v-link="{ name: 'index' }">返回首页</a>
    </p>
    <hello></hello>
    <!-- <router-view></router-view> -->
  </div>
</template>

<script>
import Hello from './components/Hello'

  export default {
      components:{
          Hello//若还有更多的组件，只需要在import的情况下，以逗号分割，继续注册就好
      },
      methods :{
          goIndex () {//方法，定义路由跳转，注意这里必须使用this，不然报错
              this.$route.router.go({name:"index"});
          }
      }
  }
</script>


<style>
html {
  height: 100%;
}

body {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}

#app {
  color: #2c3e50;
  margin-top: -100px;
  font-family: Source Sans Pro, Helvetica, sans-serif;
  text-align: center;
}

#app a {
  color: #42b983;
  text-decoration: none;
}

.logo {
  width: 100px;
  height: 100px
}
</style>
