<template>
    <div class="bottom">
        <div class="loading-box">
			  <div class="loading-line" id="loading-line-1"></div>
			  <div class="loading-line" id="loading-line-2"></div>
			  <div class="loading-line" id="loading-line-3"></div>
			  <div class="loading-line" id="loading-line-4"></div>
			  <div class="loading-line" id="loading-line-5"></div>
		</div> 
        <div class="aboutUs">
            <img src="./logo-text.png" class="logoText">
        </div>
        <div class="copyright">© 2008-2018 纸飞机南航青年网络社区 ( 苏ICP备05070685号-1 )</div>
    </div>
    
</template>

<script>

export default {
  name: 'bottom',
  
}
</script>

<style>
.bottom{
    width: 100%;
    height: 120px;
    background-color: #323643;
    position: relative;
    display: flex;

}
.loading-box {
	position: relative;
    top: 25px;
    left: 10%;
    z-index: 5;
	-webkit-transform: rotate(-40deg);
	-moz-transform: rotate(-40deg);
	-o-transform: rotate(-40deg);
	transform: rotate(-40deg);
	-webkit-animation: loading-animate 5s linear infinite;
	-moz-animation: loading-animate 5s linear infinite;
	-o-animation: loading-animate 5s linear infinite;
	animation: loading-animate 5s linear infinite;
}
.loading-line {
	border-radius: 10px;
	width: 100px;
	height: 20px;
	position: absolute;
	top: 0;
	left: 0;
	-webkit-transform-origin: 10px 10px;
	-moz-transform-origin: 10px 10px;
	-o-transform-origin: 10px 10px;
	transform-origin: 10px 10px;
	-webkit-animation: nop 5s ease-in-out infinite;
	-moz-animation: nop 5s ease-in-out infinite;
	-o-animation: nop 5s ease-in-out infinite;
	animation: nop 5s ease-in-out infinite;
}
.aboutUs{
    position: relative;
    top: 40px;
    width: 300px;
    left: calc( 15% + 100px );
}
.logoText{
    position: relative;
    width: 100%;
    height: auto;
    z-index: 5;
}
.copyright{
    position: relative;
    height: 20px;
    color: #fff;
    text-align: right;
    align-self: flex-end;
    right: calc( 650px - 90% );
}
@-webkit-keyframes line-1-animate {
	0% { opacity: 0; width: 20px; }
	5% { opacity: 1; width: 20px; }
	8% { width: 45px; }
	90% { opacity: 1; }
	100% { opacity: 0; }
}
@-webkit-keyframes line-2-animate {
	0% { opacity: 0; }
	7.25% { opacity: 0; }
	7.5% { opacity: 1; width: 20px; }
	10% { width: 60px; }
	90% { opacity: 1; }
	100% { opacity: 0; }
}
@-webkit-keyframes line-3-animate {
	0% { opacity: 0; width: 20px; }
	9.25% { opacity: 0; }
	9.5% { opacity: 1; width: 20px; }
	14% { width: 109px; }
	90% { opacity: 1; }
	100% { opacity: 0; }
}
@-webkit-keyframes line-4-animate {
	0% { opacity: 0; width: 20px; }
	13% { opacity: 0; }
	13.25% { opacity: 1; width: 20px; }
	17% { width: 109px; }
	90% { opacity: 1; }
	100% { opacity: 0; }
}
@-webkit-keyframes line-5-animate {
	0% { opacity: 0; width: 20px; }
	16.25% { opacity: 0; }
	16.5% { opacity: 1; width: 20px; }
	20% { width: 35px; }
	90% { opacity: 1; }
	100% { opacity: 0; }
}
@-webkit-keyframes loading-animate {
	0% { -webkit-transform: rotate(-40deg); }
	20% { -webkit-transform: rotate(-37deg); }
	21% { -webkit-transform: rotate(-43deg); }
	22% { -webkit-transform: rotate(-37deg); }
	23% { -webkit-transform: rotate(-43deg); }
	24% { -webkit-transform: rotate(-40deg); }
}
@-moz-keyframes line-1-animate {
	0% { opacity: 0; width: 20px; }
	5% { opacity: 1; width: 20px; }
	8% { width: 45px; }
	90% { opacity: 1; }
	100% { opacity: 0; }
}
@-moz-keyframes line-2-animate {
	0% { opacity: 0; }
	7.25% { opacity: 0; }
	7.5% { opacity: 1; width: 20px; }
	10% { width: 60px; }
	90% { opacity: 1; }
	100% { opacity: 0; }
}
@-moz-keyframes line-3-animate {
	0% { opacity: 0; width: 20px; }
	9.25% { opacity: 0; }
	9.5% { opacity: 1; width: 20px; }
	14% { width: 109px; }
	90% { opacity: 1; }
	100% { opacity: 0; }
}
@-moz-keyframes line-4-animate {
	0% { opacity: 0; width: 20px; }
	13% { opacity: 0; }
	13.25% { opacity: 1; width: 20px; }
	17% { width: 109px; }
	90% { opacity: 1; }
	100% { opacity: 0; }
}
@-moz-keyframes line-5-animate {
	0% { opacity: 0; width: 20px; }
	16.25% { opacity: 0; }
	16.5% { opacity: 1; width: 20px; }
	20% { width: 35px; }
	90% { opacity: 1; }
	100% { opacity: 0; }
}
@-moz-keyframes loading-animate {
	0% { -moz-transform: rotate(-40deg); }
	20% { -moz-transform: rotate(-37deg); }
	21% { -moz-transform: rotate(-43deg); }
	22% { -moz-transform: rotate(-37deg); }
	23% { -moz-transform: rotate(-43deg); }
	24% { -moz-transform: rotate(-40deg); }
}
@-o-keyframes line-1-animate {
	0% { opacity: 0; width: 20px; }
	5% { opacity: 1; width: 20px; }
	8% { width: 45px; }
	90% { opacity: 1; }
	100% { opacity: 0; }
}
@-o-keyframes line-2-animate {
	0% { opacity: 0; }
	7.25% { opacity: 0; }
	7.5% { opacity: 1; width: 20px; }
	10% { width: 60px; }
	90% { opacity: 1; }
	100% { opacity: 0; }
}
@-o-keyframes line-3-animate {
	0% { opacity: 0; width: 20px; }
	9.25% { opacity: 0; }
	9.5% { opacity: 1; width: 20px; }
	14% { width: 109px; }
	90% { opacity: 1; }
	100% { opacity: 0; }
}
@-o-keyframes line-4-animate {
	0% { opacity: 0; width: 20px; }
	13% { opacity: 0; }
	13.25% { opacity: 1; width: 20px; }
	17% { width: 109px; }
	90% { opacity: 1; }
	100% { opacity: 0; }
}
@-o-keyframes line-5-animate {
	0% { opacity: 0; width: 20px; }
	16.25% { opacity: 0; }
	16.5% { opacity: 1; width: 20px; }
	20% { width: 35px; }
	90% { opacity: 1; }
	100% { opacity: 0; }
}
@-o-keyframes loading-animate {
	0% { -o-transform: rotate(-40deg); }
	20% { -o-transform: rotate(-37deg); }
	21% { -o-transform: rotate(-43deg); }
	22% { -o-transform: rotate(-37deg); }
	23% { -o-transform: rotate(-43deg); }
	24% { -o-transform: rotate(-40deg); }
}
@keyframes text-animate {
	0% { transform: translateX(-20px); opacity: 0; }
	70% { transform: translateX(-20px); opacity: 0; }
	100% { transform: translateX(0); opacity: 1; }
}
@keyframes line-1-animate {
	0% { opacity: 0; width: 20px; }
	5% { opacity: 1; width: 20px; }
	8% { width: 45px; }
	90% { opacity: 1; }
	100% { opacity: 0; }
}
@keyframes line-2-animate {
	0% { opacity: 0; }
	7.25% { opacity: 0; }
	7.5% { opacity: 1; width: 20px; }
	10% { width: 60px; }
	90% { opacity: 1; }
	100% { opacity: 0; }
}
@keyframes line-3-animate {
	0% { opacity: 0; width: 20px; }
	9.25% { opacity: 0; }
	9.5% { opacity: 1; width: 20px; }
	14% { width: 109px; }
	90% { opacity: 1; }
	100% { opacity: 0; }
}
@keyframes line-4-animate {
	0% { opacity: 0; width: 20px; }
	13% { opacity: 0; }
	13.25% { opacity: 1; width: 20px; }
	17% { width: 109px; }
	90% { opacity: 1; }
	100% { opacity: 0; }
}
@keyframes line-5-animate {
	0% { opacity: 0; width: 20px; }
	16.25% { opacity: 0; }
	16.5% { opacity: 1; width: 20px; }
	20% { width: 35px; }
	90% { opacity: 1; }
	100% { opacity: 0; }
}
@keyframes loading-animate {
	0% { transform: rotate(-40deg); }
	20% { transform: rotate(-37deg); }
	21% { transform: rotate(-43deg); }
	22% { transform: rotate(-37deg); }
	23% { transform: rotate(-43deg); }
	24% { transform: rotate(-40deg); }
}
@keyframes text-animate {
	0% { transform: translateX(-20px); opacity: 0; }
	70% { transform: translateX(-20px); opacity: 0; }
	100% { transform: translateX(0); opacity: 1; }
}

#loading-line-1 {
	background: rgba(128, 171, 249, 0.8);
	-webkit-animation-name: line-1-animate;
	-moz-animation-name: line-1-animate;
	-o-animation-name: line-1-animate;
	animation-name: line-1-animate;
	width: 45px;
	-webkit-transform: rotate(90deg) translateX(70px) translateY(-55px);
	-moz-transform: rotate(90deg) translateX(70px) translateY(-55px);
	-o-transform: rotate(90deg) translateX(70px) translateY(-55px);
	transform: rotate(90deg) translateX(70px) translateY(-55px);
	z-index: 5;
}
#loading-line-2 {
	background: rgba(106, 232, 153, 0.8);
	-webkit-animation-name: line-2-animate;
	-moz-animation-name: line-2-animate;
	-o-animation-name: line-2-animate;
	animation-name: line-2-animate;
	width: 60px;
	-webkit-transform: rotate(180deg) translateX(-55px) translateY(-95px);
	-moz-transform: rotate(180deg) translateX(-55px) translateY(-95px);
	-o-transform: rotate(180deg) translateX(-55px) translateY(-95px);
	transform: rotate(180deg) translateX(-55px) translateY(-95px);
	z-index: 4;
}
#loading-line-3 {
	background: rgba(255, 101, 119, 0.8);
	-webkit-animation-name: line-3-animate;
	-moz-animation-name: line-3-animate;
	-o-animation-name: line-3-animate;
	animation-name: line-3-animate;
	width: 109px;
	-webkit-transform: rotate(-63.43494882deg) translateX(-78.2px) translateY(55.9px);
	-moz-transform: rotate(-63.43494882deg) translateX(-78.2px) translateY(55.9px);
	-o-transform: rotate(-63.43494882deg) translateX(-78.2px) translateY(55.9px);
	transform: rotate(-63.43494882deg) translateX(-78.2px) translateY(55.9px);
	z-index: 3;
}
#loading-line-4 {
	background: rgba(255, 219, 93, 0.8);
	-webkit-animation-name: line-4-animate;
	-moz-animation-name: line-4-animate;
	-o-animation-name: line-4-animate;
	animation-name: line-4-animate;
	width: 109px;
	-webkit-transform: rotate(63.43494882deg) translateX(38.5px) translateY(-42.5px);
	-moz-transform: rotate(63.43494882deg) translateX(38.5px) translateY(-42.5px);
	-o-transform: rotate(63.43494882deg) translateX(38.5px) translateY(-42.5px);
	transform: rotate(63.43494882deg) translateX(38.5px) translateY(-42.5px);
	z-index: 2;
}
#loading-line-5 {
	background: rgba(224, 153, 242, 0.8);
	-webkit-animation-name: line-5-animate;
	-moz-animation-name: line-5-animate;
	-o-animation-name: line-5-animate;
	animation-name: line-5-animate;
	width: 35px;
	-webkit-transform: rotate(180deg) translateX(-95px) translateY(-95px);
	-moz-transform: rotate(180deg) translateX(-95px) translateY(-95px);
	-o-transform: rotate(180deg) translateX(-95px) translateY(-95px);
	transform: rotate(180deg) translateX(-95px) translateY(-95px);
	z-index: 1;
}
@media screen and (max-width: 1024px) {
    
    
}
@media screen and (max-width: 640px) {
    
}
</style>