<template>
  <div>
    <label class="notes">
      <span class="name">备注：</span>
      <input type="text" placeholder="在这里输入备注"
             v-model="value">
    </label>
  </div>
</template>

<script>
export default {
  name: 'Notes',
  data() {
    return {
      value: ''
    };
  },
  watch:{
    value(){
      this.$emit('update:value',this.value)
    }
  }
};
</script>

<style lang="scss" scoped>
.notes {
  font-size: 14px;
  background: #f5f5f5;
  padding-left: 16px;
  display: flex;
  align-items: center;

  .name {
    padding-right: 16px;
  }

  input {
    height: 64px;
    flex-grow: 1;
    background: transparent;
    border: none;
    padding-right: 16px;
  }
}

</style>