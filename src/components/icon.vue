<template>
  <svg>
    <use :xlink:href="'#'+name"/>
  </svg>
</template>

<script lang="ts">

const importAll = (requireContext: __WebpackModuleApi.RequireContext) => requireContext.keys().forEach(requireContext);
try {importAll(require.context('../assets/icons', true, /\.svg$/));} catch (error) {console.log(error);} //引入所有svg文件

export default {
  props: ['name'],
  name: 'icon'
};
</script>

<style lang="scss" scoped>

</style>