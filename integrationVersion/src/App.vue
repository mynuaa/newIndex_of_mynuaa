<template>
  <div id="app">
    <mainHead/>
    <mainPoster/>
    <displays/> 
    <bottom/>   
  </div>
</template>

<script>
import mainHead from './components/mainHead.vue'
import mainPoster from './components/mainPoster.vue'
import displays from './components/displays.vue'
import bottom from './components/bottom.vue'
export default {
  name: 'app',
  components:{
    mainHead,mainPoster,displays,bottom
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  width: 100%;
  overflow: hidden;
}

</style>
