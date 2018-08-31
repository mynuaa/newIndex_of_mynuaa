<template>
    <div class="footer">
        <div class="boxs">
            <div class="box">
                <img src="../assets/zfjqrcode.jpg"/>
                <p>纸飞机微信公众号<br> "nuaazfj"</p>
            </div>
            <div class="box">
                <img src="../assets/2008fjn.jpg" />
                <p>可爱的飞机娘！</p>
            </div>
            <a href="http://my.nuaa.edu.cn/forum.php" target="_blank">
                <div class="box">
                    <img src="../assets/discuz.png" />
                    <p>论坛（登陆后使用）</p>
                </div>
            </a>
            <a href="/welcomeh5/" target="_blank">
                <div class="box">
                    <img src="../assets/welcome.jpg" />
                    <!--<p>招新季·欢迎加入纸飞机！</p>-->
                </div>
            </a>
        </div>

        <div class="copyright">© 2008-2018 纸飞机南航青年网络社区 ( 苏ICP备05070685号-1 )</div>

    </div>
</template>

<script>

export default {
    name: 'Footer',
    props: {

    },
    methods: {
    }
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


<style scoped lang="scss">
.footer{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.copyright{
    align-self: flex-end;
}
.boxs{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
}

.box{
    box-shadow: 2px 5px 20px 0px rgba(0, 0, 0, 0.16);
    background: linear-gradient(to bottom, #fff 60%, #B2D9E8 40%);
    width: 12rem;
    height: 12rem;
    margin: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    border-radius: 4px;
    img{
        width: 80%;
        margin: auto;
    }
    p{
        text-align: center;
    }
}

</style>
