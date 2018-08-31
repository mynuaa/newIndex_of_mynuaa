<template>
    <div>
        <div class="slider">
            <img class="posters" src="./mainposter.png">
        </div>
        <p class="slogan" id="sloganu">纸飞机</p>
        <p class="slogan" id="slogand">离梦想最近的地方</p>
    </div>
    
</template>

<script>

export default {
  name: 'mainPoster',
  
}
</script>

<style>
.slider{
    position: relative;
    top: 20px;
    width: 90%;
    text-align: center;
    left: 5%;
}
.posters{
    width: 100%;
}
.slogan{
    display: block;
    position: relative;
    font-size: 24px;
    text-align: left;
    font-weight: lighter;
    left: calc(12% + 0.8rem);
    text-shadow: 3px 3px 5px rgba(0, 0, 0, 0.51);
}
#sloganu{
    color: white;
    top: -45px;
    
    animation: breath 4.5s ease 0s infinite;
}
#slogand{
    color: black;
    top: -60px;
    animation: breath 4.5s ease 0s infinite;
}

@keyframes breath {
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
@media screen and (max-width: 1024px) {
    .slider{
        z-index: -10;
    }
    
}
@media screen and (max-width: 640px) {
    .posters{
        text-align: center;
    }
    .slogan{
        text-align: center;
        color: black;
        left: 0;
        top: -20px;
    }
}
</style>