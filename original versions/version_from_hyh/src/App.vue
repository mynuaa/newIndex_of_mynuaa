<template>
  <div id="app">
    <logo id="Logo"></logo>
    <Head id="Head"></Head>
    <mid id="Mid"></mid>
    <Button id="Button"></Button>
    <txt id="Txt"></txt>
  </div>
</template>

<script>
import Head from './components/head.vue'
import mid from './components/mid.vue'
import Button from './components/button.vue'
import logo from './components/logo.vue'
import txt from './components/txt.vue'

export default {
  name: 'app',
  components: {
    Head,
    mid,
    Button,
    logo,
    txt
  }
}
</script>

<style>
#Logo{
  position: absolute;
  left:-16px;top:10px ;
  width: 550px;
}
#Mid{
  position: relative;
  width: 100%;
  left: 0%;top:100px ;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  height: 100%;
  width:100% ;
  position:absolute;
}
#Head{
   position: relative;
}
#Button{
  position: relative;
  top:150px;
  left:-30%;
}
#Txt{
  position:absolute;
  left:0px;
  top:625px;
  font-family: cursive;
}
</style>
