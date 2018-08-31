<template>
    <div class="body">
        <el-carousel :autoplay="true" indicator-position="outside" arrow="always" :interval="5000" :height="eh">
            <el-carousel-item v-for="item in 2" :key="item">
                <div class="body1 img">
                </div>
            </el-carousel-item>
        </el-carousel>
        <div class="slogan1 slogan">
            纸飞机
        </div>
        <div class="slogan2 slogan">
            离梦想最近的地方
        </div>
    </div>
</template>

<script>

export default {
    name: 'Body',
    props: {

    },
    data(){
        return{
        }
    },
    methods: {

    },
    computed:{
        eh(){
            if(window.innerHeight >= window.innerWidth) {//高>宽 竖屏
                return '30vh'
            }else {
                return (window.innerWidth > 1200 ? '50vh' : '45vh')//宽屏特判
            }
            
        }
    }
}
</script>


<style scoped lang="scss">
.body{
    width: 90%;
}
.img{
    height: 100%;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;

    @media screen and(min-width: 640px){
        margin: 0 50px;
    }

}
.body1{
    background-image: url('../assets/body.png');
}

.el-carousel{
    max-width: 90rem;
    margin: auto;
}
.slogan{
    z-index: 99;
    width: fit-content;
    position: relative;
    bottom: 4rem;
    font-size: 1.3rem;
    left: calc(12% + 0.8rem);
    font-family: 'ZHSRXT-GBK';
    text-shadow: 3px 3px 5px rgba(0, 0, 0, 0.51);
}

@keyframes breath {
    /*
    0% {
        transform: translate3d(0, 0, 0); 
    }
    50% {
        transform: translate3d(0, -20px, 0); 
    }
    100% {
        transform: translate3d(0, 0, 0); 
    } 
    */
    0% {
        transform: scale(1)
    }
    50% {
        transform: scale(0.9)
    }
    100% {
        transform: scale(1); 
    } 
    0%{

    }
}

.slogan1{
    bottom: 3.6rem;
    animation: breath 4.5s ease 0s infinite;
}
.slogan2{
    bottom: 2.5rem;
    animation: breath 4.5s ease 0s infinite;
}

</style>
