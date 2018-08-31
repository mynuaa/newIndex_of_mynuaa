<template>
<div id="first">
  <img src="../assets/zfjqrcode.jpg" alt="">
  <div class="background1"></div>
</div>
</template>

<script>
export default {
  name: 'Button'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .first{
      width: 400px;
      height:400px;
      position: relative;
    }
    img{
       width: 300px;
      height:300px;
    }
    .background1{
      background-color:#B1D8E7;
      height:200px;
      width:388px;
      position: relative;
      top:-147px;
      left: 530px;
      z-index: -5;
    }
</style>