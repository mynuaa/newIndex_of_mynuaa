<template>
  <div id='first-page'>
    <div class='header'>
      <ul>
        <li class='li_css' v-for="item in items" ><a href='{item.url}' v-html="item.label" v-bind:class="{login_css:item.isLogin}"></a></li>
      </ul>
    </div>
    <div class='body'>
      <div class='sidebar'>论坛入口</div>
      <img class='logo' src='../images/logo.png'></img>
      <div class='font-nochange'>纸飞机<br/>离梦想最近的地方</div>
    </div>
    <div class='footer'>
      <div class='QR-code'>
        <img class='QR-code-img' src='../images/QRCode.jpg'></img>
        <div class='block'></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "first-page",
  props: {
    src_path: String
  },
  data() {
    return {
      items: [
        {
          label: "维修预约",
          isLogin: false,
          url: "/"
        },
        {
          label: "小红帽",
          isLogin: false,
          url: "/xiaohongmao"
        },
        {
          label: "五四评优",
          isLogin: false,
          url: "/evaluation"
        },
        {
          label: "办公系统",
          isLogin: false,
          url: "/office"
        },
        {
          label: "登陆<br>login",
          isLogin: true,
          url: "/sso/?page=login&redirect_uri=L3hpYW9ob25nbWFvL2luZGV4LnBocA=="
        }
      ]
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.header {
  margin: 0;
  padding: 0;
}
#first-page {
  padding: 0;
  margin: 0;
  font-family: "微软雅黑";
}
.login_css {
  color: rgb(178, 217, 232);
  letter-spacing: 2px;
}
.sidebar {
  float: left;
  font-size: 15px;
  width: 15px;
  word-break: break-word;
  margin-left: 5px;
  margin-top: 15px;
  line-height: 24px;
}
.body {
  width: 100%;
  height: 361px;
  background-image: url("../images/bg-image.png");
  background-position: center;
  /* background-repeat: no-repeat; */
}
.bg_image {
  width: 100%;
  height: 461px;
}
.font-nochange {
  line-height: 30px;
  font-size: 18px;
  text-align: left;
  margin-left: 180px;
  padding-top: 330px;
  letter-spacing: 4px;
}
.logo {
  height: 100px;
  width: 100px;
  float: left;
  margin-left: 190px;
  margin-top: -60px;
}
.footer {
  width: 100%;
  padding-top: 30px;
}
.QR-code {
  margin-top: 25px;
  margin-left: 250px;
  height: 100px;
  width: 160px;
  /* background-image: url('../images/QRCode.jpg'); */
}
.QR-code-img {
  height: 100px;
  width: 100px;
}
.block {
  position: relative;
  bottom: 40px;
  height: 50%;
  width: 100%;
  background-color: rgb(178, 217, 232);
  z-index: -1;
}
ul {
  vertical-align: middle;
  height: 50px;
  list-style-type: none;
  padding: 0;
}
.li_css {
  vertical-align: middle;
  width: 120px;
  height: 50px;
  display: inline-block;
  margin: 0 10px;
}
a{
  text-decoration: none;
  a:visited {
    color: #000;
  }
  a:link {
    color: #000;
  }
  
  a:hover {
    color: #b2d9e8;
  }
}
</style>
