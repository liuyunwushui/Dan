<template>  
  <ul class="reg-box">
    <li class="f-18 t-c">商家注册</li>
    <li>
      <input type="text" v-model.trim="name" placeholder="请输入用户名">
    </li>
    <li>
      <input type="text" v-model.trim="password" placeholder="请输入密码">
    </li>
    <li>
      <input type="text" v-model.trim="password2" placeholder="请确认密码">
    </li>
    <li>
      <input type="text" v-model.trim="qq" placeholder="请输入QQ">
    </li>
    <li class="reg-btn">
      注册
    </li>
  </ul>
</template>

<script>
export default {
  name: 'reg',
  data () {
    return {
      name:'',
      password:'',
      password2:'',
      qq:''
    }
  }
}
</script>

<style lang="scss" scoped>
@import 'static/css/common.scss';
.reg-box{
  width: 360px;
  margin: 50px auto;

  li{
    margin-bottom:10px;
  }
  
  input{
    width: 100%;
    height: 36px;
    line-height: 36px;
    padding:0 8px;
    box-sizing: border-box;
    border:1px solid #ddd;
    border-radius:3px;
  }

  .reg-btn{
    height: 36px;
    line-height: 36px;
    margin-top:30px;
    border-radius:3px;
    background:#06f;
    color:#fff;
    text-align: center;
    cursor: pointer;
  }
}
</style>
