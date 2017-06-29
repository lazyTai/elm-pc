<template>
  <div class="shop">
    <div class="body1">
      <ShopItem v-for="(item,index) in lists" :item="item" :key="index"></ShopItem>
    </div>
    <ButtonMore></ButtonMore>
  </div>
</template>
<script>
  import ShopItem from './shopItem.vue';
  import ButtonMore from './ButtonMore.vue';
  import ImageFatory from '../utils/image.js';


  function scrollImage() {
    var images = $('[data-src]')
    $.each(images, function (index, item) {
      ImageFatory(item)()
    })
  }


  export default{
    components: {ShopItem, ButtonMore},
    data: function () {
      return {
        lists: []
      }
    },
    mounted: function () {
      var self = this;
      $.get('static/shop1.json', function (res) {
        self.lists = res;
        self.$nextTick(function () {
          scrollImage()
        })

      })
    }
  }
</script>
<style scoped>
  .shop .body1 {
    margin-top: 25px;
    display: flex;
    flex-wrap: wrap;
    border: 2px solid #eee;
  }
</style>
