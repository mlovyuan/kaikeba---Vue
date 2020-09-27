<template>
  <div class="item" :class="{active:true}">
    <slot> </slot>
  </div>
</template>

<script>
export default {
    props:{
        isActive:{
            type: Boolean, // 約束isActive類型
            // required: true, // 約束isActive是否為必填，必須要傳遞
            default:false // 傳遞的默認值
        }
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
}
.item:hover {
  background: #f4f4f4;
}
</style>