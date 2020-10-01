<template>
  <div class="item" :class="{ active: isActive }" @click="handleClick">
    <slot> </slot>
  </div>
</template>

<script>
export default {
  // 定義子組件要給父組件傳遞data的屬性
  props: {
    isActive: {
      type: Boolean, // 約束isActive類型
      // required: true, // 約束isActive是否為必填，必須要傳遞
      default: false, // 傳遞的默認值
    },
  },
  methods: {
    handleClick() {
      // 向父組件拋出名為beClick的事件，後面參數為要傳遞的data
      this.$emit("beClick");
    },
  },
};
</script>

<style scoped>
.active {
  background: #e7e7e7;
}
.item {
  cursor: pointer;
  width: 100%;
  height: 100%;
  transition: 0.2s;
}
.item:hover {
  background: #f4f4f4;
}
</style>