<template>
  <div class="header">
    <div class="header-wrapper">
      <div class="q1">
        <span>饿了吗</span>
      </div>

      <div class="q2">
        <span class="active">首页</span>
        <span>我的订单</span>
        <span>加盟合作</span>
      </div>


      <div class="q4">
        <span>登录/注册</span>
      </div>


      <div class="q3">
        <span>服务中心</span>
        <span>规则中心</span>
        <span>手机应用</span>
      </div>




    </div>
  </div>
</template>
<script>
  import ImageFatory from '../utils/image'
  export default{
    components: {},
    mounted: function () {
    }
  }
</script>
<style scoped>
  .header {
    width: 100%;
    height: 60px;
    background: #1e89e0;
  }

  .header-wrapper {
    margin: 0 auto;
    width: 90%;
      &:after {
         content: ".";
         display: block;
         height: 0;
         clear: both;
         visibility: hidden;
      }
  }

  .q1, .q2{
    float: left;
  }
  .q3,.q4{float: right}

  .q1 span {
    font-size: 43px;
    width: 150px;
    color: #fff;
    padding-right: 15px;
  }

  .q2 span, .q3 span, .q4 span {
    font-size: 15px;
    color: #fff;
    display: inline-block;
    padding: 0px 30px;
    height: 100%;
    line-height: 60px;
  }

  .q2 {
    margin-right: 60px
  }

  .q2, .q3, .q4 {
    display: flex;
    flex-wrap: nowrap;
  }

  .q2 span.active, .q3 span.active, .q4 span.active {
    background: #1e6ab8;
  }

  @media (max-width: 960px){
    .q2 span:last-child{display: none}
    .q3 span:last-child{display: none}
  }
</style>
