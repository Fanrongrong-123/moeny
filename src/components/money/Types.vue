<template>
  <div>
    <ul class="types">
      <li :class="type==='-' && 'selected'" @click="selectType('-')">支出</li>
      <li :class="type==='+' && 'selected'" @click="selectType('+')">收入</li>
    </ul>
  </div>
</template>

//用ts写的type
<script lang="ts">
import Vue from 'vue';
import {Component, Prop} from 'vue-property-decorator';

@Component
export default class Types extends Vue {

  type = '-';

  selectType(type: string) {
    if (type !== '-' && type !== '+') {
      throw new Error('type is known');
    }
    this.type = type;
  }

  @Prop(Number) mmm: number | undefined;

  mounted() {
    if (this.mmm === undefined) {
      console.log(this.mmm);
    } else {
      console.log(this.mmm.toString());
    }
  }

}

</script>

//用js写的type
<!--<script>-->
<!--export default {-->
<!--  name: 'Types',-->
<!--  data() {-->
<!--    return {-->
<!--      type: '-'  //'-'为支出 '+'为收入，type只能是其中之一-->
<!--    }-->
<!--  },-->
<!--  methods: {-->
<!--    selectType(type) {-->
<!--      if (type !== '-' && type !== '+') {-->
<!--        throw new Error('type is unknown')-->
<!--      }-->
<!--      return this.type = type-->
<!--    }-->
<!--  }-->

<!--}-->
<!--</script>-->

<style lang="scss" scoped>
.types {
  background: #c4c4c4;
  display: flex;
  text-align: center;
  font-size: 24px;

  > li {
    width: 50%;
    height: 64px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;

    &.selected::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 4px;
      background: #333;
    }
  }
}

</style>