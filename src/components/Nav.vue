<template>
  <nav>
    <router-link to="/Labels" class="item" active-class="selected">
      <Icon name="label"/>
      标签
    </router-link>
    <router-link to="/Money" class="item" active-class="selected">
      <Icon name="money"/>
      记账
    </router-link>
    <router-link to="/Statistics" class="item" active-class="selected">
      <Icon name="statistics"/>
      统计
    </router-link>
  </nav>
</template>

<script lang="ts">

import Icon from '@/components/icon.vue';

console.log(Icon);

export default {
  name: 'Nav',
  components: {Icon}
};
</script>

<style lang="scss" scoped>
@import "~@/assets/style/helper.scss";

nav {
  @extend %outerShadow;
  display: flex;
  flex-direction: row;
  font-size: 12px;

  > .item {
    display: flex;
    padding: 2px 0;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 33.333%;

    .icon {
      width: 32px;
      height: 32px;
    }
  }

  > .item.selected {
    color: $color-highlight;
  }
}
</style>