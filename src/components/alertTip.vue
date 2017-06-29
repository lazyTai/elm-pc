<style scoped>
  .alertTip {
    position: absolute;
    background: #fff;
    padding: 20px;
    border: 2px solid #eee;
  }
  .alertTip:before{

  }
  .title {
    border-bottom: 2px solid #eee
  }

  .row1 {
    line-height: 20px;
    margin: 5px 0;
    display: flex;

  .i {
    border: 2px solid #eee;
    border-radius: 3px;
    margin: 0 5px;
    width: 20px;
    text-align: center
  }

  }
  .f-s {
    font-size: small;
  }

  .row1-2 {
    padding-top: 3px
  }

  .row2 {
    display: flex;
    background: #eee;
    padding: 10px;
    height: 20px;

  div {
    text-align: center
  }

  }

  .row2 .line {
    width: 1px;
    margin: 0 10px;
    height: 100%;
    background: #d6d6d6;
  }

  .row3 {
    margin-top: 20px;
  }
</style>
<template>
  <div class="alertTip">
    <div class="title"><h4>必胜客宅急送（东漖北路店）</h4></div>


    <div CLASS="row1">
      <div class="i">票</div>
      <div class="f-s row1-2">支持票据，支持票据，支持票据</div>
    </div>


    <div CLASS="row2">
      <div>配送费 ￥9</div>
      <div class="line"></div>
      <div>平均配送时间 9分钟</div>
    </div>
    <div CLASS="row3">
      从即日起，“必胜宅急送”品牌正式更名为“必胜客宅急送”。
      感谢您一直以来的青睐与支持，我们将一如既往为您提供更优质、美味的产品，更快捷的服务。
      品牌“换”然一新，品质服务更用心。如您需要开发票，请在订单备注发票抬头，
      我们将为您提供电子发票提取码，您可以根据小票上的提示自行下载。
    </div>
  </div>
</template>
<script>
  export default{
    components: {}
  }
</script>

