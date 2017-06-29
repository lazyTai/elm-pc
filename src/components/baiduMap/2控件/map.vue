<template>
  <div id="demo">
    <h1>
      向地图添加控件
    </h1>
    <div id="cantainer-2"></div>
  </div>
</template>
<script>
  export default {
    mounted: function () {
      var map = new BMap.Map('cantainer-2');
      map.centerAndZoom(new BMap.Point(116.404, 39.915), 11)
      map.addControl(new BMap.NavigationControl())
    }
  }
</script>
<style scroped>
  #cantainer-2 {
    width: 300px;
    height: 300px
  }
</style>
