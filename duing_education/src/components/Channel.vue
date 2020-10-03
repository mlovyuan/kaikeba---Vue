<template>
  <div class="channel">
    <Item :isActive="isActive" @beActive="$emit('be-active')">
      <div class="inner">
        <span class="name"></span>
        <span class="number"></span>
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
  props: {
    isActive: {
      type: Boolean, // 約束isActive類型
      // required: true, // 約束isActive是否為必填，必須要傳遞
      default: false, // 傳遞的默認值
    },
    channelData: {
      type: Object,
      default: function () { // 當type為Object，默認需要以函數方式返回結果
        return {};
      },
    },
  },
};
</script>

<style lang="scss" scoped>
.channel {
  width: 100%;
  height: 40px;
  line-height: 40px;
}
.inner {
  padding: 0 20px;
}
.name {
  font-size: 14px;
  color: #212121;
}
.number {
  font-size: 12px;
  color: #999;
  margin-left: 8px;
}
.name .number {
  float: left;
}
</style>