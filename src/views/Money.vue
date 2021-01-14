<template>
  <Layout class-prefix="layout">
    <NumberPad/>
    <Notes/>
    <Tags :data-source="tags"/>
    <Types/>
  </Layout>
</template>

<script>
import Layout from '@/components/Layout.vue';
import NumberPad from '@/components/money/NumberPad.vue';
import Notes from '@/components/money/Notes.vue';
import Tags from '@/components/money/Tags.vue';
import Types from '@/components/money/Types.vue';

export default {
  name: 'Money',
  components: {Types, Tags, Notes, NumberPad, Layout},
  data() {
    return {
      tags: ['衣', '食', '住', '行','吃','喝','玩','乐']
    };
  }
};
</script>

<style lang="scss">
.layout-content {
  display: flex;
  flex-direction: column-reverse;
}
</style>
