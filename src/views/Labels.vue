<template>
  <div>
    <Layout>
      <div>
        <ol class="tag">
          <li>
            <span>衣</span>
            <Icon name="right"/>
          </li>
          <li>
            <span>食</span>
            <Icon name="right"/>
          </li>
          <li>
            <span>住</span>
            <Icon name="right"/>
          </li>
          <li>
            <span>行</span>
            <Icon name="right"/>
          </li>
        </ol>
      </div>
      <div class="addTags">
        <button>新增标签</button>
      </div>
    </Layout>
  </div>
</template>

<script lang="ts">
import Layout from '@/components/Layout.vue';
import Icon from '@/components/icon.vue';

export default {
  name: 'labels',
  components: {Icon, Layout},
};
</script>

<style lang="scss">
.tag {
  border: 1px solid green;

  > li {
    border: 1px solid red;

    > .icon {
      border: 1px solid red;
    }
  }
}
</style>