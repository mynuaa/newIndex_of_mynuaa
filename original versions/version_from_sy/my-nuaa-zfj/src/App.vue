<template>
  <div id="app">
    <first-page/>    
  </div>
</template>

<script>
import FirstPage from './components/first-page.vue'

export default {
  name: 'app',
  components: {
    FirstPage
  }
}
</script>

<style>
#app {
  margin: 0;
  padding: 0;
  text-align: center;
  color: #2c3e50;
}
</style>
