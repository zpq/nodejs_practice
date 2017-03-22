<template>
  <div id="wrapper">
    <nav class="navbar navbar-default">
      <div class="container">
        <a href="#" class="navbar-brand">
          <i class="glyphicon glyphicon-item"></i>
          plan repository
        </a>
        <ul class="nav navbar-nav">
          <li>
            <router-link to="/home">home</router-link>
            </li>
          <li>
            <router-link to="/time-entries">plans</router-link>
          </li>
        </ul>
      </div>
    </nav>
    <div class="container">
      <div class="col-sm-3">
        <sidebar></sidebar>
      </div>
      <div class="col-sm-9">
        <router-view></router-viewer>
      </div>
    </div>
  </div>
</template>

<script>
  import sidebar from './components/Sidebar.vue'
  export default {
    name: 'app',
    components: {
      sidebar
    }
  }
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
