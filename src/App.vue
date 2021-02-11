<template>
  <div id="app">
    <Counter
      :count="count"
    />
  </div>
</template>

<script>

import Counter from '@/components/Counter.vue';

export default {
  name: 'App',
  components: {
    Counter,
  },
  data() {
    return {
      count: 0,
    };
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
