<template>
  <div class="tags">
    <div class="new">
      <button @click="createTags">新增标签</button>
    </div>
    <!--tag存在于selectedTags，selected就为选中状态-->
    <ul class="current">
      <li v-for="tag in dataSource" :key="tag"
          :class="{selected: selectedTags.indexOf(tag)>=0}"
          @click="toggle(tag)">
        {{ tag }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Tags',
  props: ['dataSource'],
  data() {
    return {
      selectedTags: []
    }
  },
  methods: {
    toggle(tag) {
      const index = this.selectedTags.indexOf(tag)
      if (index >= 0) {
        this.selectedTags.splice(index, 1)
      } else {
        this.selectedTags.push(tag)
      }
      this.$emit('update:selected', this.selectedTags)
    },
    createTags() {
      const name = window.prompt('请输入你的标签名')
      if (name === '') {
        alert('标签名不能为空')
      } else {
        this.$emit('update:dataSource', [...this.dataSource, name])
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.tags {
  display: flex;
  flex-direction: column-reverse;
  font-size: 14px;
  padding: 16px;
  flex-grow: 1;

  > .current {
    display: flex;
    flex-wrap: wrap;
    margin-right: -12px;

    > li {
      $bg: #d9d9d9;
      background: $bg;
      $h: 24px;
      height: $h;
      line-height: $h;
      border-radius: $h/2;
      padding: 0 16px;
      margin-right: 12px;
      margin-top: 4px;

      &.selected {
        background: darken($bg, 50%);
        color: white;
      }
    }
  }

  > .new {
    padding-top: 16px;

    button {
      background: transparent;
      border: none;
      color: #999;
      border-bottom: 1px solid;
      padding: 0 4px;
    }
  }
}

</style>