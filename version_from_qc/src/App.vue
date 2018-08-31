<template>
  <div id="app">
    <Head/>
    <Body/>
  </div>
</template>

<script>
import Head from './components/Head.vue'
import Body from './components/Body.vue'
export default {
  name: 'app',
  components: {
    Head,Body
  }
}
</script>

<style>
#app {
  font-family: "Arial","Microsoft YaHei","黑体","宋体",sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  width:calc(100%-10px);
  max-width: 1300px;
  margin:auto;
  color: grey;
}
</style>
