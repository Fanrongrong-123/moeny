<template>
  <div class="numberPad">
    <div class="output">{{ output }}</div>
    <div class="buttons">
      <button @click="add">1</button>
      <button @click="add">2</button>
      <button @click="add">3</button>
      <button @click="remove">删除</button>
      <button @click="add">4</button>
      <button @click="add">5</button>
      <button @click="add">6</button>
      <button @click="clear">清空</button>
      <button @click="add">7</button>
      <button @click="add">8</button>
      <button @click="add">9</button>
      <button class="ok" @click="ok">OK</button>
      <button class="zero" @click="add">0</button>
      <button @click="add">.</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'numberPad',
  data() {
    return {
      output: '0'
    };
  },
  methods: {
    add(e) {
      const input = e.target.textContent;
      if (this.output.length === 15) {return;}
      if (this.output === '0') {
        if ('0123456789'.indexOf(input) >= 0) {
          this.output = input;
        } else {
          this.output += input;
        }
        return;
      }
      if (input === '.' && this.output.indexOf('.') >= 0) {return;} else {
        return this.output += input;
      }
    },
    remove() {
      if (this.output.length === 1) {
        this.output = '0';
      } else {
        this.output = this.output.slice(0, -1);
      }
    },
    clear() {
      this.output='0'
    },
    ok(){
      this.$emit('update:value',this.output)
    }
  }
};
</script>

<style lang="scss" scoped>
@import "~@/assets/style/helper.scss";

.numberPad {
  > .output {
    @extend %innerShadow;
    font-size: 36px;
    font-family: Consolas, monospace; //编程字体
    padding: 0 16px;
    text-align: right;
    height: 54px;
  }

  .buttons {
    @extend %clearFix;

    > button {
      width: 25%;
      height: 36px;
      float: left;
      background: transparent;
      border: none;

      &.ok {
        height: 36*2px;
        float: right;
      }

      &.zero {
        width: 25*2%;
      }

      $bg: #f2f2f2;

      &:nth-child(1) {
        background: $bg;
      }

      &:nth-child(2), &:nth-child(5) {
        background: darken($bg, 4%);
      }

      &:nth-child(3), &:nth-child(9), &:nth-child(6) {
        background: darken($bg, 4*2%);
      }

      &:nth-child(4), &:nth-child(7), &:nth-child(10), &:nth-child(13) {
        background: darken($bg, 4*3%);
      }

      &:nth-child(8), &:nth-child(11) {
        background: darken($bg, 4*4%);
      }

      &:nth-child(14) {
        background: darken($bg, 5*4%);
      }

      &:nth-child(12) {
        background: darken($bg, 6*4%);
      }
    }
  }
}

</style>