<template>
  <div class="money">
    <div class="nav-wrap">money.vue</div>
    <Nav/>
  </div>
</template>

<script lang="ts">
import Nav from '@/views/Nav.vue';

export default {
  name: 'Money',
  components: {Nav},
};
</script>

<style lang="scss" scoped>
.money {
  border: 1px solid green;
  display: flex;
  flex-direction: column;
  height: 100vh;
}
.nav-wrap{
  flex-grow: 1;
  overflow: auto;
}

</style>