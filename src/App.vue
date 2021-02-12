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
      @getNumber="getExpression"
      :state="state"
    />
    <Expression
      :firstFactor="firstFactor"
      :secondFactor="secondFactor"
      :action="action"
      :state="state"
      :answerOptArr="answerOptArr"
      @getAnswer="getAnswer"
    />
  </div>
</template>

<script>

import Counter from '@/components/Counter.vue';
import SelectNumber from '@/components/SelectNumber.vue';
import SelectAction from '@/components/SelectAction.vue';
import Expression from '@/components/Expression.vue';
import {
  getRndNum, getMultiple, getDivide, shuffle,
} from '@/assets/js/functions';

export default {
  name: 'App',
  components: {
    Expression,
    SelectAction,
    SelectNumber,
    Counter,
  },
  data() {
    return {
      firstFactor: null,
      secondFactor: 5,
      answersArr: [],
      answerOptArr: [],
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
    getExpression(index) {
      this.getFirstFactor(index);
      this.getAnswers();
      this.getSecondFactor();
      this.getAnswerOptions();
      this.state = 'expression';
    },
    getFirstFactor(index) {
      this.numbers.forEach((element) => {
        // eslint-disable-next-line no-param-reassign
        element.selected = false;
      });
      this.numbers[index].selected = true;
      this.firstFactor = this.numbers[index].value;
    },
    getSecondFactor() {
      if (this.action === 'multiple') {
        this.secondFactor = getRndNum(2, 9);
      } else if (this.action === 'divide') {
        this.secondFactor = this.answersArr[getRndNum(0, this.answersArr.length - 1)];
      }
    },
    getAnswers() {
      this.numbers.forEach((item) => {
        const num = item.value * this.firstFactor;
        this.answersArr.push(num);
      });
    },
    getAnswerOptions() {
      if (this.action === 'multiple') {
        this.answerOptArr.length = 0;
        const res = getMultiple(this.firstFactor, this.secondFactor);
        this.answerOptArr.push(res);
        while (this.answerOptArr.length < 4) {
          const num = getRndNum(1, 10) * this.firstFactor;
          if (!this.answerOptArr.includes(num)) {
            this.answerOptArr.push(num);
          }
        }
      }
      if (this.action === 'divide') {
        this.answerOptArr.length = 0;
        const res = getDivide(this.secondFactor, this.firstFactor);
        this.answerOptArr.push(res);
        while (this.answerOptArr.length < 4) {
          const num = getRndNum(2, 9);
          if (!this.answerOptArr.includes(num)) {
            this.answerOptArr.push(num);
          }
        }
      }
      shuffle(this.answerOptArr);
    },
    getAnswer(item) {
      console.log(item);
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
