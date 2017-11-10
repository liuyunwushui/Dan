<template>  
  <div class="login-box">
    <nav class="body-auto">
        <img src="static/images/logo.jpg">
    </nav>
    <div class="login-info-box">
      <div class="body-auto">
        <img src="static/images/main_tu.jpg">
        <ul class="login-info">
          <li class="f-16">登录</li>
          <li>
            <input type="text" v-model.trim="name" placeholder="请输入用户名">
          </li>
          <li>
            <input type="text" v-model.trim="password" placeholder="请输入密码">
          </li>
          <li>
            <i class="login-btn">登录</i>
            <router-link to="/reg"  class="col-06f f-12 ml-10">注册帐号</router-link>
          </li>
        </ul>
      </div>
    </div>
      <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'login',
  data () {
    return {
      name:'',
      password:''
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import 'static/css/common.scss';
nav{
  padding:20*$px;
  background:#fff;
}
.login-info-box{
  padding:20*$px;
  background:#f2f2f2;
  >div {
    position: relative;
  }
}
.login-info{
  position: absolute;
  z-index: 9;
  top:20px;
  right:0;
  width:300*$px;
  padding:20*$px 15*$px;
  border-radius:15*$px;
  box-shadow: 0 0 15*$px rgba(0,0,0,.5);
  background: #fff;
  li + li{
    margin-top:15px;
  }
  input  {
    width: 100%;
    height: calc-px(30);
    padding:0 calc-px(5);
    border:1px solid #ddd;
    box-sizing: border-box;
  }
  .login-btn{
    width: 70px;
    height: 32px;
    line-height: 32px;
    border-radius:3px;
    background: #f50;
    color:#fff;
    text-align: center;
    cursor: pointer;
  }
}
</style>
