<template>
  <div class="type">
    <div class="q1">
      商家分类:
    </div>
    <div class="q2">
      <span class="active">全部商家</span>
      <span>美食</span>
      <span>快餐便当</span>
      <span>特色菜系</span>
      <span>异国料理</span>
      <span>小吃夜宵</span>
      <span>甜品饮品</span>
      <span>果蔬生鲜</span>
      <span>鲜花蛋糕</span>
      <span>商店超市</span>
      <span>早餐</span>
      <span>正餐优选</span>
      <span>下午茶</span>
      <span>夜宵</span>
    </div>
  </div>
</template>
<script>
  export default{
    components: {}
  }
</script>
<style scoped>
  .type {
    margin-top: 100px;
    display: flex;
    background: #fff;
    border: 1px solid #eee;
    border-top: 2px solid #eee;
    padding: 10px 25px;
  }

  .q1 {
    color: #8f8f8f;
    padding-top: 10px;
    width: 100px;
  }

  .q2 {
    display: flex;
    flex-wrap: wrap;
  }

  .q2 span {
    display: block;
    padding: 10px 25px;
    cursor: pointer;
  }
  .q2 span.active{background: #f3f3f3
  }
</style>
