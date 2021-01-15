<template>
  <Layout class-prefix="layout">
    <NumberPad @update:value="onUpdateAmount" @submit="saveRecord"/>
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
      record: {notes: '', tags: [], type: '-', amount: 0, create: Date || undefined},
      recordList: JSON.parse(window.localStorage.getItem(this.recordList)) || []
    }
  },
  methods: {
    onUpdateTags(value) {
      this.record.tags = value
    },
    onUpdateNotes(value) {
      this.record.notes = value
    },
    // onUpdateType(value) {
    //   this.record.type = value
    // },
    onUpdateAmount(value) {
      this.record.amount = parseFloat(value)
    },
    saveRecord() {
      const record2 = JSON.parse(JSON.stringify(this.record)) //深拷贝，做一个this.record的副本
      record2.create = new Date() //同步时间
      this.recordList.push(record2)
      window.localStorage.setItem('recordList', JSON.stringify(this.recordList))
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

