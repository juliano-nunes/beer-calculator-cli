<template>
  <div id="app">
    <div class="container">
      <h1>Máquina Cervejeira</h1>
      <Home msg="Welcome to Your Vue.js App"/>
    </div>
  </div>
</template>

<script>
import Home from './components/Home.vue'

export default {
  name: 'app',
  components: {
    Home
  }
}
</script>

<style lang="scss">
  @import '../node_modules/materialize-css/sass/materialize.scss';

  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
