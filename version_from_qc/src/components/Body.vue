<template>
    <div class="app">
        <div class="block">
        </div>
        <img src="./11.png" class="picture">
        <div class="zfj">纸飞机</div>
        <div class="zfj1">离梦想最近的地方</div>
        <img class="qrcode" src="./qrcode.jpg">
    </div>
</template>



<!-- Add "scoped" attribute to limit CSS to this component only -->
<script>
export default {
    data () {
        return {
            item: 'Use Vue 2.0 Today!'
        }
  },
}
</script>

<style scoped>
.app{
    max-width: 1300px;
}
.picture{
    width: 100%;
    position:relative;
    display: inline-block;
}
.entrance{
    position: absolute;
    z-index: 999;
    color: grey;
    text-decoration: none;
    padding-top: 20px;
}
.zfj{
    position: absolute;
    z-index: 999;
}
.zfj1{
    position: absolute;
    z-index: 999;
}
a{
    text-decoration: none;
}
.qrcode{
    width:200px;
    height: 200px;
    margin:50px auto auto 0;
    z-index: 999;
}
@media all and (min-width: 300px) {
    .entrance{
        font-size: 35px;
        padding-left: 15px;
    }
    .zfj{
        font-size: 16px;
        margin-top: -25px;
        padding-left: 60px;
    }
    .zfj1{
        font-size: 16px;
        margin-top: 10px;
        padding-left: 60px;
    }
    .app{
        margin:300px auto;
    }
    .picture{
        width: 100%;
        height: 450px;
    }
}
@media all and (min-width: 400px) {
    .entrance{
        font-size:35px;
        padding-left: 15px;
    }
    .zfj{
        font-size: 18px;
        margin-top: -30px;
        padding-left: 70px;
    }
    .zfj1{
        font-size: 18px;
        margin-top: 10px;
        padding-left: 70px;
    }
    .app{
        margin:120px auto;
    }
}
@media all and (min-width: 600px) {
    .entrance{
        font-size: 25px;
        padding-left: 15px;
    }
   .zfj{
        font-size: 30px;
        margin-top: -50px;
        padding-left: 200px;
    }
    .zfj1{
        margin-top: 11px;
        padding-left: 200px;
        font-size: 30px;
    }

}
.el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 150px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
     background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
     background-color: #d3dce6;
  }
</style>
