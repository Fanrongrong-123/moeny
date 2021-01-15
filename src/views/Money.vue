<template>
  <Layout class-prefix="layout">
    {{ record }}
    <NumberPad @update:value="onUpdateAmount"/>
    <Notes @update:value="onUpdateNotes"/>
    <Tags v-model:data-source="tags" @update:selected="onUpdateTags"/>
<!--    <Types :value="record.type" @update:value="onUpdateType"/>-->
    <Types v-model:value="record.type"/>

  </Layout>
</template>

<script>
import Layout from '@/components/Layout.vue'
import NumberPad from '@/components/money/NumberPad.vue'
import Notes from '@/components/money/Notes.vue'
import Tags from '@/components/money/Tags.vue'
import Types from '@/components/money/Types.vue'

export default {
  name: 'Money',
  components: {Types, Tags, Notes, NumberPad, Layout},


  data() {
    return {
      tags: ['衣', '食', '住', '行'],
      record: {notes: '', tags: [], type: '-', amount: 0},
    }
  },
  methods: {
    onUpdateTags(value) {
      this.record.tags = value
      console.log(value)
    },
    onUpdateNotes(value) {
      this.record.notes = value
      console.log(value)

    },
    // onUpdateType(value) {
    //   this.record.type = value
    // },
    onUpdateAmount(value) {
      this.record.amount = parseFloat(value)
    }
  }
}
</script>

<style lang="scss">
.layout-content {
  display: flex;
  flex-direction: column-reverse;
}
</style>

