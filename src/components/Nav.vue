<template>
  <div class="nav">
    <router-link to="Labels">
      <Icon name="#label"/>
      标签
    </router-link>
    <router-link to="Money">
      <Icon name="#money"/>
      记账
    </router-link>
    <router-link to="Statistics">
      <Icon name="#statistics"/>
      统计
    </router-link>
  </div>
</template>

<script lang="ts">

import Icon from '@/components/icon.vue';

console.log(Icon);

export default {
  name: 'Nav',
  components: {Icon}
};
</script>

<style scoped>
.nav {
  border: 1px solid red;
}

</style>