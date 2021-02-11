<template>
  <div id="app">
    <Counter
      :count="count"
    />
    <SelectAction
      @sendAction="getAction"
      :state="state"
    />
    <SelectNumber
      :numbers="numbers"
      @getNumber="getFirstFactor"
      :state="state"
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
      firstFactor: null,
      secondFactor: null,
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
      state: 'action',
      action: null,
    };
  },
  methods: {
    getAction(action) {
      this.action = action;
      this.state = 'selectNumber';
    },
    getFirstFactor(index) {
      this.numbers.forEach((element) => {
        // eslint-disable-next-line no-param-reassign
        element.selected = false;
      });
      this.numbers[index].selected = true;
      this.firstFactor = this.numbers[index].value;
      this.state = 'expression';
    },
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
