<template>
  <div class="star5">
    <svg class="icon" aria-hidden="true" v-for="(item,index) in num" :class="'active'">
      <use xlink:href="#icon-star"></use>
    </svg>
    <svg class="icon" aria-hidden="true" v-for="(item,index) in (5-num)">
      <use xlink:href="#icon-star"></use>
    </svg>

  </div>
</template>
<script>
  export default{
    props: ['num'],
    components: {},
    mounted: function () {
    }
  }
</script>
<style scoped>
  .star5 {
    line-height: 12px
  }

  .star5 .icon {
    font-size: 10px
  }

  .star5 .active {
    fill: #d8d800;
  }
</style>
