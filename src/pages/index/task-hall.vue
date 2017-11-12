<template>
  <div id="task">    
      <header class="task-top mb-20">
          <div class="body-auto">
            <img width="220" src="https://img.alicdn.com/imgextra/i4/708378796/TB2gmAibxXkpuFjy0FiXXbUfFXa_!!708378796.png">
            <span class="nav f-18">
              <router-link to="/reg" class="on">任务大厅</router-link>
              <router-link to="/reg" >任务审核</router-link>
              <router-link to="/reg" >买家秀任务</router-link>
              <router-link to="/reg" >试用任务</router-link>
              <router-link to="/reg" >用户中心</router-link>
            </span>
            <span class="t-r right">              
              <router-link to="/login"  class="col-555">退出</router-link>
              <i>客服</i><br>
              账户余额：<i class="col-f00">￥888</i>
            </span>              
          </div>
      </header>

      <div class="body-auto f-16">
        <p class="issue-btn">
          发布:
          <router-link to="/reg" >淘宝任务</router-link>
          <router-link to="/reg" >聚划算提醒任务</router-link>
          <router-link to="/reg" >微信投票点赞</router-link>
          <router-link to="/reg" >问答任务</router-link>
          <router-link to="/reg" >自定义</router-link>
        </p>
        <p class="mt-20">
          <span>
            任务编号：
            <input type="text" placeholder="填写任务编号">
          </span>
          <span class="ml-20">
            宝贝ID：
            <input type="text" placeholder="填写任务编号">
          </span>
          <span class="ml-20">
            任务状态：
            <select>
              <option value="0">所有任务</option>
              <option value="1">未支付</option>
              <option value="2">进行中</option>
              <option value="3">部分完成</option>
              <option value="4">已完成</option>
              <option value="5">已取消</option>
            </select>
          </span>
          <span class="ml-20">
            任务类型：
            <select>
              <option value="0">淘宝任务</option>
              <option value="1">微信任务</option>
              <option value="2">问答任务</option>
              <option value="3">主播任务</option>
            </select>
          </span>
        </p>
      </div>
  </div>
</template>

<script>

export default {
  name: 'task',
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
.task-top {
  padding:15px;
  background:#f2f2f2;
  border-bottom:1px solid #eee
}
.nav {
  margin-left:30px;
  a {
    height: 42px;
    line-height: 42px;
    color:#333;
    &:hover {
      color:#999;
    }
  }
  a+a {
    margin-left:20px;
  }
  .on {
    border-bottom:2px solid #06f
  }
}
.issue-btn {
  a {
    min-width:50px;
    height: 30px;
    line-height: 30px;
    margin-left:10px;
    padding:0 10px;
    background:#3bd;
    color:#fbfbfb;
    font-size:14px;
    transition: .3s;
    text-align: center;
    &:hover {
      color:#fff;
      background:#29d;
    }
  }
}

</style>
