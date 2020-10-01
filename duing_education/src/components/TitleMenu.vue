<template>
  <div class="title-menu">
    <Item>
      <div class="inner">
        <div class="left">發現頻道</div>
        <div class="right">></div>
      </div>
    </Item>
  </div>
</template>

<script>
import Item from "./Item";
export default {
  components: {
    Item,
  },
  props:{
        isActive:{
            type: Boolean, // 約束isActive類型
            // required: true, // 約束isActive是否為必填，必須要傳遞
            default:false // 傳遞的默認值
        }
    },
};
</script>

<style lang="scss" scoped>
.title-menu {
  width: 100%;
  height: 46px;
  line-height: 46px;
}
.inner {
  padding: 0 20px;
}
.left {
  float: left;
  color: #212121;
  font-weight: 500;
}
.right {
  float: right;
  font-size: 12px;
  color: #999;
}
</style>