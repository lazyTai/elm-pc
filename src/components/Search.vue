<template>
  <div class="search">
    <div class="q1">
      <div class="q1-1 c-g">当前位置:</div>
      <div class="q1-2">荔湾区1850创意园</div>
      <div class="q1-3"><a href="">[切换地址]</a></div>
    </div>
    <div class="q2">
      <input type="text" value="搜索美食，商家">
      <svg class="icon search-icon" aria-hidden="true">
        <use xlink:href="#icon-fangdajing1"></use>
      </svg>
    </div>
  </div>
</template>
<script>
  export default{
    components: {}
  }
</script>
<style scoped>
  .search-icon {
    position: relative;
    left: -30px
  }

  .search {
    padding-top: 20px;
    display: flex;
    justify-content: space-between;
  }

  .q2 {
    position: relative
  }

  .q2 input {
    height: 25px;
    border: 1px solid #bfbfbf;
    color: #7a7a7a;
    background: #eee;
    padding: 5px;
    text-indent: 10px;
    outline: 0;
  }

  .q2 input:focus {
    box-shadow: none;
    animation: being-long .3s;
    animation-timing-function: ease-in-out;
    animation-fill-mode: forwards;

  }

  @keyframes being-long {
    0% {
      width: 200px;
    }
    50% {
      width: 200px;
    }
    100% {
      width: 300px;
    }
  }

  .c-g {
    color: #bebebe;
  }

  .q1 {
    display: flex;
    font-size: small;
    line-height: 30px;
  }

  .q1-2 {
    padding: 0 20px
  }

  .q1-3 a {
    text-decoration: none
  }
</style>
