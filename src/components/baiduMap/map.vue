<template>
  <div id="baiduMap"></div>
</template>
<script>
  export  default{
    mounted: function () {
      var map = new BMap.Map("baiduMap");          // 创建地图实例
      var point = new BMap.Point(116.404, 39.915);  // 创建点坐标
      map.centerAndZoom(point, 15);
      window.setTimeout(function () {
        map.panTo(new BMap.Point(116.409, 39.918));
      }, 2000);
    }
  }
</script>
<style scoped="true">
  #baiduMap {
    width: 300px;
    height: 300px
  }
</style>
