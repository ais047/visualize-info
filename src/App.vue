<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <SideBar/>
    <router-view></router-view>
  </div>
</template>

<script>
import SideBar from './components/SideBar.vue'

export default {
  name: 'app',
  components: {
    SideBar
  },
  data: () => ({
    active: true
  })
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
