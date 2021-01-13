<template>
    <Layout class-prefix="layout">
      <NumberPad/>
      <Notes/>
      <Tags/>
      <Types :mmm="1"/>
    </Layout>
</template>

<script lang="ts">
import Layout from '@/components/Layout.vue';
import NumberPad from '@/components/money/NumberPad.vue';
import Notes from '@/components/money/Notes.vue';
import Tags from '@/components/money/Tags.vue';
import Types from '@/components/money/Types.vue';

export default {
  name: 'Money',
  components: {Types, Tags, Notes, NumberPad, Layout},
};
</script>

<style lang="scss">
.layout-content {
  display: flex;
  flex-direction: column-reverse;
}
</style>
