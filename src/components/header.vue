<template>
    <div class="header">
        <a href="/" class="logo"></a>
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
    methods: {
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


}

</style>
