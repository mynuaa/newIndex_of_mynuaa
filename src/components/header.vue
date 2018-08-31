<template>
    <div class="header">
        <!--<a href="/" class="logo"></a>-->
        <a class="logowrap" href="/">
            <div class="logoFrame"  v-bind:class="{ swing : isselected }"> 
                <img class="logo" @mouseover="select" src="../assets/logo.png">
            </div>
        </a>
        <!--<a href="/">预约维修</a>-->
        <a href="/xiaohongmao">小红帽</a>
        <a href="/evaluation">五四评优</a>
        <a href="/blog">技术博客</a>
        <a href="/office">办公系统</a>
        <a href="/sso/?page=login&redirect_uri=L3hpYW9ob25nbWFvL2luZGV4LnBocA==" class="login">登录<br>login</a>
    </div>

</template>

<script>
export default {
    name: 'Header',
    props: {

    },
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
        select (event){
            if (window.outerWidth > 640){
                this.isselected = true
            }
            setTimeout(() => {
                this.isselected = false
            }, 1500);
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.header{
    align-self: space-around;
    
    height: 100px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    a{
        padding: 0 2px;
        font-family: 'ZHSRXT-GBK';
        flex:1;
        font-size: 1.3rem;
        text-align: center;
        $main: #000;
        $blue: #b2d9e8;
        color: $main;
        text-decoration: none;

        &:visited, &:link{
            color: $main;
        }
        &:hover{
            color: $blue;
        }
        &.login{
            color: $blue;
            font-size: 1.6rem;
            font-family: 'ZHSCNMT-GBK';
        }
    }

    .logoFrame{
        padding: 5px 0 0 6px;
        //margin:  25px 0 0 calc(50% - 480px);
        width: 80px;
        height: 80px;
        border-radius: 100%;
        box-shadow: 0px 0px 5px 0.5px grey;
        background-color: #fff;
        z-index: 999;
    }
    .logo{
        width: 80px;
        height: 80px;
    }
    .logowrap{
        flex: 1;
        display: flex;
        flex-direction: row;
        justify-content: flex-end;
        margin-top: 2rem;
    }

    @keyframes swing {
        20% {
            transform: rotate3d(0, 0, 1, 15deg);
        }

        40% {
            transform: rotate3d(0, 0, 1, -10deg);
        }

        60% {
            transform: rotate3d(0, 0, 1, 5deg);
        }

        80% {
            transform: rotate3d(0, 0, 1, -5deg);
        }

        to {
            transform: rotate3d(0, 0, 1, 0deg);
        }
    }

        .swing {
        -webkit-transform-origin: top center;
        transform-origin: top center;
        animation: swing 1500ms linear;
        }
/*
    .logo{
        height: 100%;
        background-image: url('../assets/logo.png');
        flex: 2;
        background-position: center;
        background-size: contain;
        background-repeat: no-repeat;
    }

    @media screen and (max-width: 640px) {
        .logo{
            background-image:url('../assets/logo.small.png');
            flex: 0.8;
            margin-right: 16px;
            
        }
        a{
            //font-size: 0.9rem;
        }
    }
*/


}

</style>
