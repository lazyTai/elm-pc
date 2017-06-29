<style scoped>

  .c-g {
    color: #9b9b9b
  }

  .f-s {
    font-size: small
  }

  .shopitem {
    display: flex;
  }

  .r1 img {
    size: 80px;
  }

  .r1-2 {
    text-align: center;
    margin-top: 13px;
  }

  .r2-1 {

  h4 {
    padding: 0;
    margin: 10px 0;
    cursor: pointer;
  }

  }
  .r2-2 {
    display: flex;
    padding: 5px 0px;
  }

  .star5 {
    padding-right: 10px
  }

  .r2-4 {
    padding: 1px;
    border: 1px solid #979797;
    width: 20px;
    text-align: center;
    border-radius: 5px;
    margin: 5px 0;
  }

  .r2 {
    padding: 0 10px
  }

  .shopitem {
    position: relative;
    width: calc(1 / 4 * 100)%;
    background: #fff;
    padding: 15px;
    margin-bottom: 1px;
    box-sizing: border-box;

  &
  :hover {
    background: #ebebeb;
  }

  }
  @media (max-width: 960px){
    .shopitem {
      width: calc(1 / 3 * 100)%;
    }
  }
</style>

<template>
  <div class="shopitem">


    <div class="r1">
      <img
        :data-src="item.img"
        alt="">
      <div class="c-g f-s r1-2">40&nbsp;&nbsp;分钟</div>

    </div>


    <div class="r2">
      <div class="r2-1"><h4 class="tipH4" @mouseenter.stop="hoverH4in"
                            @mouseleave.stop="hoverH4out"
      >{{item.title}}</h4></div>

      <div class="r2-2">
        <Star5 :num="5"></Star5>
        <div class="r2-2-2 f-s c-g"><span>月售566单</span></div>
      </div>

      <div class="r2-3 f-s c-g">配送费¥9</div>

      <div class="r2-4  c-g">票</div>
    </div>

    <AlertTip v-show="show" ref='alertTip'></AlertTip>
  </div>
</template>
<script>
  import Star5 from './star5.vue';
  import AlertTip from './alertTip.vue'

  export default{
    components: {Star5, AlertTip},
    props: ['item'],
    data: function () {
      return {
        show: false
      }
    },
    mounted: function () {
    },
    methods: {
      hoverH4out: function () {
        this.show = false;
      },
      hoverH4in: function () {
        var offsetLeft = this.$el.offsetLeft;
        var allwidth = document.body.offsetWidth / 2;
        if (offsetLeft > allwidth) {/*zuo*/
          this.show = true;
          var offleft = this.$el.offsetLeft;
          var alertTip = this.$refs.alertTip.$el;
          alertTip.style.top = -10 + 'px';
          alertTip.style.left = -350 + 'px';
          alertTip.style.width = 300 + 'px'
          alertTip.style.zIndex = 2;
        } else {/*you*/
          this.show = true;
          var offleft = this.$el.offsetLeft;
          var alertTip = this.$refs.alertTip.$el;
          alertTip.style.top = -10 + 'px';
          alertTip.style.left = 350 + 'px';
          alertTip.style.width = 300 + 'px'
          alertTip.style.zIndex = 2;
        }
      }
    }
  }

</script>

