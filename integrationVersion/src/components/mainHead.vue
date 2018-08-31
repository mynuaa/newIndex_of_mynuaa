<template>
    <nav class="navbar">
        <div class="logoFrame"  v-bind:class="{ swing : isselected }"> 
            <img class="logo" @mouseover="select" src="./logo.png">
        </div>
        <div class="navwords">
            <div class="navline">
                <div class="navitems" v-for="item in navitem" :key="item.mark" v-bind:id = "item.mark" >
                    <p @click="turnto(item.url)">{{item.title}}</p>
                </div>
                <div class="login navitems">
                    <div>登录</div>
                    <div>LOGIN</div>
                </div>
            </div>
        </div>
    </nav>
</template>

<script>

export default {
  name: 'mainHead',
  data(){
    return{
        navitem:[
            {title:"维修预约",mark:"repair",url:''},
            {title:"小红帽",mark:"xhm",url:'http://my.nuaa.edu.cn/xiaohongmao'},
            {title:"五四评优",mark:"wspy",url:'http://my.nuaa.edu.cn/evaluation'},
            {title:"办公系统",mark:"workshop",url:''},
            {title:"南航mall",mark:"mall",url:'http://my.nuaa.edu.cn/mall'},
            {title:"南航bottle",mark:"bottle",url:'http://my.nuaa.edu.cn/bottle'}
            ],
        
        isselected: false,
        }
    },
    methods: {
        turnto : function (url){
            window.open(url);
        },
        select : function (event){
            if (window.outerWidth > 640)
                this.isselected = true;
            setTimeout(() => {
                this.isselected = false;
            }, 1500);
        }
    }
    
}
</script>

<style>
.navbar{
    display: flex;
    flex-direction: row;
    width: 100%;
}
.logoFrame{
    display: flex;
    padding: 5px 0 0 6px;
    margin:  25px 0 0 calc(50% - 480px);
    width: 80px;
    height: 80px;
    border-radius: 100%;
    box-shadow: 0px 0px 5px 0.5px grey;
    background-color: #fff;
}
.logo{
    width: 80px;
    height: 80px;
}
.navline{
    display: block;
    border-bottom: 1px solid lightgray;
    display: flex;
    flex-direction: row;
    width: 100%;
}
.navitems{
    margin: 30px;
    margin-bottom: 10px;
    color: black;
    font-size: 16px;
}
.login{
    margin-top: 35px;
    margin-left: 50px;
    font-size: 18px;
    color: lightblue;
}
.navitems:hover{
    color: lightblue;
}

@-webkit-keyframes swing {
  20% {
    -webkit-transform: rotate3d(0, 0, 1, 15deg);
    transform: rotate3d(0, 0, 1, 15deg);
  }

  40% {
    -webkit-transform: rotate3d(0, 0, 1, -10deg);
    transform: rotate3d(0, 0, 1, -10deg);
  }

  60% {
    -webkit-transform: rotate3d(0, 0, 1, 5deg);
    transform: rotate3d(0, 0, 1, 5deg);
  }

  80% {
    -webkit-transform: rotate3d(0, 0, 1, -5deg);
    transform: rotate3d(0, 0, 1, -5deg);
  }

  to {
    -webkit-transform: rotate3d(0, 0, 1, 0deg);
    transform: rotate3d(0, 0, 1, 0deg);
  }
}

@keyframes swing {
  20% {
    -webkit-transform: rotate3d(0, 0, 1, 15deg);
    transform: rotate3d(0, 0, 1, 15deg);
  }

  40% {
    -webkit-transform: rotate3d(0, 0, 1, -10deg);
    transform: rotate3d(0, 0, 1, -10deg);
  }

  60% {
    -webkit-transform: rotate3d(0, 0, 1, 5deg);
    transform: rotate3d(0, 0, 1, 5deg);
  }

  80% {
    -webkit-transform: rotate3d(0, 0, 1, -5deg);
    transform: rotate3d(0, 0, 1, -5deg);
  }

  to {
    -webkit-transform: rotate3d(0, 0, 1, 0deg);
    transform: rotate3d(0, 0, 1, 0deg);
  }
}

.swing {
  -webkit-transform-origin: top center;
  transform-origin: top center;
  animation: swing 1500ms linear;
}

@media screen and (max-width: 1024px) {
    .navitems{
        display: none;
    }
    .logoFrame{
        margin: 0px;
        margin-left: calc( 20% - 80px);       
        box-shadow: none;
        background-color: transparent;
    }
}
@media screen and (max-width: 640px) {
    .logoFrame{
        margin-top: 5px;
    }
    
}
</style>