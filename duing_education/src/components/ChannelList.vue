<template>
  <div class="channel-list">
      <div v-for="item in channels" :key="item.id" class="item">
          <Channel @be-active="$emit('be-active', item.id)" :isActive="item.id===activeId" :data="item">
      </div>
  </div>
</template>

<script>
import Channel from "./Channel";
import channelServ from "../services/channel";
export default {
  components: {
    Channel,
  },
  props: ["activeId"],
  data() {
    return {
      channels: [],
    };
  },
  async created() {
    let datas = await channelServ.getChannels();
    this.channels = datas.filter((item) => item.name !== "热门");
  },
};
</script>

<style scoped>
.channel-list {
  overflow: hidden;
}
.item {
  float: left;
  width: 50%;
}
</style>