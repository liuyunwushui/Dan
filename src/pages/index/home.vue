<template>
  <div id="home">    
      <header class="t-r home-top">
          <div class="body-auto">
              您好：
              <router-link to="/reg"  class="col-06f f-12 ml-10">1233333 进入后台</router-link>
          </div>
      </header>

      <div class="body-auto f-16">

        <p class="logo">
          <img width="220" src="https://img.alicdn.com/imgextra/i4/708378796/TB2gmAibxXkpuFjy0FiXXbUfFXa_!!708378796.png">
        </p>

        <div class="home-info">
          <ul>
            <li class="clearfix">
              <i class="user-avatar left" :style="{'background-image':'url('+userInfo.avatar+')'}"></i>
              <div class="user-info" v-if = "isLogin">
                <p v-text="userInfo.name"></p>
                <p class="col-555">
                  当前余额：<i class="col-f00">{{userInfo.balance}}</i> 元  
                  <router-link class="col-06f" to="/">用户充值</router-link>
                  </p>
                <p class="col-555">
                  手机号：{{userInfo.telNum}}
                </p>
              </div>
              <div class="user-info" v-else>
                <router-link class="col-06f" to="/login">用户登录</router-link><br>
                <router-link class="col-06f mt-10" to="/reg">快速注册</router-link>
              </div>
            </li>
            <li class="link-shortcut t-c mt-30">
              <router-link to="/task">发布试用任务</router-link>
              <router-link to="/task">发布人气任务</router-link>
            </li>
          </ul>
          <ul class="shortcut-list t-c">
            <li>
              <router-link to="/task">发布试用任务</router-link>
            </li>
            <li>
              <router-link to="/task">发布流量任务</router-link>
            </li>
            <li>
              <router-link to="/">用户登录</router-link>
            </li>
            <li>
              <router-link to="/">任务审核</router-link>
            </li>
            <li>
              <router-link to="/">用户充值</router-link>
            </li>
            <li>
              <router-link to="/">发布试用任务</router-link>
            </li>
          </ul>
        </div>

        <h1 class="title-h1 f-16 mt-20 fw-n ">
          <i class="f-24">任务进展</i>
          下方如有提示请点击操作，超过48小时未操作，平台自动确认
        </h1>
        <p class="task-info mt-10">
          <router-link to="/">人气任务（{{task.renQ}}）</router-link> |
          <router-link to="/">试客任务（{{task.shiK}}）</router-link> |
          <router-link to="/">买家秀任务（{{task.mJiaX}}）</router-link>
        </p>

        <div class="task-show t-c mt-20">
          <ul>
            <li class="mb-10">
              <i class="task-tb tb1"></i>
            </li>
            <li class="mb-10">
              人气任务
            </li>
            <li>
              提升店铺人气权重搜索反馈
            </li>
            <li class="link-shortcut t-c mt-50">
              <router-link to="/">立即发布</router-link>
              <router-link to="/">管理任务</router-link>
            </li>
          </ul>
          <ul>
            <li class="mb-10">
              <i class="task-tb tb2"></i>
            </li>
            <li class="mb-10">
              试客任务
            </li>
            <li>
              使用提升店铺搜索权重和销量人气
            </li>
            <li class="link-shortcut t-c mt-50">
              <router-link to="/">立即发布</router-link>
              <router-link to="/">管理任务</router-link>
            </li>
          </ul>
          <ul>
            <li class="mb-10">
              <i class="task-tb tb1"></i>
            </li>
            <li class="mb-10">
              买家秀任务
            </li>
            <li>
              展示产品细节提升新客户转化和喜好度反馈
            </li>
            <li class="link-shortcut t-c mt-50">
              <router-link to="/">立即发布</router-link>
              <router-link to="/">管理任务</router-link>
            </li>
          </ul>
        </div>
      </div>   
      <p class="home-bottom t-c mt-50">
        这一刻，您的竞争对手正在使用<br>
        <router-link to="/" class="bottom-btn f-24 mt-30 col-fff">立即发布</router-link>
      </p>   
    <router-view/>
  </div>
</template>

<script>

export default {
  name: 'home',
  data(){
    return{
      userInfo: '',
      task: '',
      isLogin:false
    }
  },
  methods: {
    getData() {      

      this.$axios.get('static/json/home.json', {})
      .then((response) => {     
        this.userInfo = response.data.userInfo
        this.task = response.data.task
      })
      .catch(function (error) {
        console.log(error);
      });      
    }
  },
  mounted(){
    
  },
  created(){
    this.getData()
  }
}

</script>

<style lang="scss" scoped>
@import 'static/css/common.scss';
.home-top {
  height: 32px;
  line-height: 32px;
  background:#f2f2f2;
  border-bottom:1px solid #eee
}
.logo {
    margin:30px;
  }
.home-info {
  display: flex;
  border-top:5px solid #eee;
  border-bottom:5px solid #eee;

  ul{
    flex: 1;
    padding:30px;
    &:first-child {
      border-right:5px solid #eee;
    }
  }
  .user-avatar {
    width:100px;
    height: 100px;
    border-radius:50%;
    background: no-repeat center;
    background-size:contain;
  }
  .user-info {
    margin-left:110px;
    padding-top:10px;
    p + p {
        margin-top:10px;
      }
  }
  
  .shortcut-list {
    // display: flex;
    columns:2;
    li {      
      a {
        display: block;
        height: 36px;
        line-height: 36px;
        color: #555;
        transition: .3s;
        &:hover {
          color:#06f;
          // background:#fafafa;
        }
      }
    }
  }
}
.link-shortcut {    
  a {
    min-width: 100px;
    height: 36px;
    line-height: 36px;
    padding:0 10px;
    border-radius:5px;
    background:#0078e7;
    color:#fff;
    transition: .3s;
    &:hover {
      background:#09f;
    }
  }
  a+a {
    margin-left:20px
  }
}
.task-info {
  height: 36px;
  line-height: 36px;
  padding:0 10px;
  background:#f2f2f2;
}
.task-show {
  display: flex;
  border:5px solid #eee;
  border-right:none;

  ul {
    flex:1;
    padding:20px 10px;
    border-right:5px solid #eee;
  }
  .task-tb {
    width: 100px;
    height: 100px;
    border-radius:50%;
    background: no-repeat center;
    background-size:50% auto;

    &.tb1 {
      background-color:  #EE9A49;
      background-image:url(http://www.fubei.org/img/admin-icon1.png);
    }
    &.tb2 {
      background-color:  #3CB371;
      background-image:url(http://www.fubei.org/img/admin-icon2.png);
    }
    &.tb3 {
      background-color:  #436EEE;
      background-image:url(http://www.fubei.org/img/admin-icon3.png);
    }
  }
}
.home-bottom {
  padding:50px 0;
  background:#247bc8;
  color:#fff;
  font-size:48px;

  .bottom-btn {
    width: 300px;
    height: 50px;
    line-height: 50px;
    border:2px solid #fff;
    border-radius:50px;
  }
}
</style>
