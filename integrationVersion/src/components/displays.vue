<template>
    <div>
        <div class="codeDisplay">
            <div class="codes" id="wxSubscription">
                <img class="code" src="./wx.jpg">
                <div class="codeSet"></div>    
                <p class="intro">南航纸飞机官方微信公众号</p>       
            </div>

            <div></div>
        </div>
        <div class="introduction">

        </div>
    </div>
</template>

<script>

export default {
  name: 'displays',
}

const s = `┌┬┐┬ ┬┌┐┌┬ ┬┌─┐┌─┐
│││└┬┘││││ │├─┤├─┤
┴ ┴ ┴ ┘└┘└─┘┴ ┴┴ ┴`
console.log(s)
console.log('%c', 'background:url(https://qzonestyle.gtimg.cn/qzone/em/e253.png)repeat-x;padding:15px 100% 20px 0;line-height:45px');

console.log('%c如果有小可爱看到这个 可以投递简历到yuwenjie66#126.com哦 欢迎来纸飞机一起玩呀~', 'font-size:14px;font-family:"PingFang SC",微软雅黑,"WenQuanYi Micro Hei"');
    var _hmt = _hmt || [];
    (function() {
        var hm = document.createElement("script");
        hm.src = "https://hm.baidu.com/hm.js?f7c0295778ddd27005fadba73644ae21";
        var s = document.getElementsByTagName("script")[0]; 
        s.parentNode.insertBefore(hm, s);
    })();
</script>

<style>
.codeDisplay{
    display: inline-block;
    flex-direction: row;
    flex-wrap: wrap;
}
.codes{
    margin-top: -40px;
    z-index: 25;
}
.code{
    display: inline-block;
    position: relative;
    width: 200px;
    height: 200px;
    z-index: 5;
}
.codeSet{
    position: relative;
    top: -80px;
    width: 280px;
    height: 140px;
    background-color: lightblue;
    z-index: 0;
}
.intro{
    position: relative;
    top:-140px;
}
</style>