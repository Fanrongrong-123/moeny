<template>
  <div class="money">
    <div class="nav-wrap">
      <slot></slot>
    </div>
    <Nav/>
  </div>
</template>

<script lang="ts">
import Nav from '@/components/Nav.vue';
export default {
  name: 'Layout',
  components: {Nav}
};
</script>

<style scoped>
.money {
  border: 1px solid green;
  display: flex;
  flex-direction: column;
  height: 100vh;
}

.nav-wrap {
  flex-grow: 1;
  overflow: auto;
}
</style>