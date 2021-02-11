<template>
  <div id="app">
    <Counter
      :count="count"
    />
    <SelectAction
      :actions="actions"
    />
    <SelectNumber
      :numbers="numbers"
    />
  </div>
</template>

<script>

import Counter from '@/components/Counter.vue';
import SelectNumber from '@/components/SelectNumber.vue';
import SelectAction from '@/components/SelectAction.vue';

export default {
  name: 'App',
  components: {
    SelectAction,
    SelectNumber,
    Counter,
  },
  data() {
    return {
      count: 0,
      numbers: [
        {
          value: 2,
          selected: false,
        },
        {
          value: 3,
          selected: false,
        },
        {
          value: 4,
          selected: false,
        },
        {
          value: 5,
          selected: false,
        },
        {
          value: 6,
          selected: false,
        },
        {
          value: 7,
          selected: false,
        },
        {
          value: 8,
          selected: false,
        },
        {
          value: 9,
          selected: false,
        },
      ],
      state: 'default',
      actions: [
        {
          name: 'Умножение',
          value: 'multiple',
          selected: false,
        },
        {
          name: 'Деление',
          value: 'divide',
          active: false,
        },
      ],
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
