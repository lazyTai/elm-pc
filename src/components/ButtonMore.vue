<template>
  <div class="ButtonMore">
    <button @click="more" v-show="show">
      点击加载更多商家...
    </button>
    <div v-show="!show" class="text">
      在加载ing...
    </div>
  </div>
</template>
<script>
  import ImageFatory from '../utils/image.js';
  function scrollImage() {
    var images = $('[data-src]')
    $.each(images, function (index, item) {
      ImageFatory(item)()
    })
  }

  export default{
    components: {},
    data: function () {
      return {
        show: true
      }
    },
    methods: {
      more: function () {
        this.show = false;
        var self = this;
        $.get('static/shop2.json', function (res) {
//          debugger
          self.$parent.lists=self.$parent.lists.concat(res);
          self.$nextTick(function () {
            scrollImage();
            self.show = true;
          })
        })
      }
    }
  }
</script>
<style scoped>
  .ButtonMore button {
    width: 100%;
    height: 60px;
    font-size: 20px;
    border: none;
    background: linear-gradient(#f5f5f5, #e1e1e1);
  }

  .text {
    width: 100%;
    height: 60px;
    font-size: 20px;
    border: none;
    background: #fff;
    text-align: center;
    line-height: 60px;
    color: #d9d9d9;
  }
</style>
