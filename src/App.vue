<template>
  <div id="app">
    <Header
      :count="count"
      :firstFactor="firstFactor"
      :action="action"
      :state="state"
      @changeOpt="changeOpt"
    />
    <SelectAction :state="state" @sendAction="getAction" />
    <SelectAnswerType :state="state" @sendAnswerType="getAnswerType" />
    <SelectNumber
      :numbers="numbers"
      :state="state"
      @getNumber="getFirstFactor"
    />
    <Expression
      :answerType="answerType"
      :firstFactor="firstFactor"
      :secondFactor="secondFactor"
      :action="action"
      :state="state"
      :answerOptArr="answerOptArr"
      @sendAnswer="sendAnswer"
    />
    <Result
      :firstFactor="firstFactor"
      :secondFactor="secondFactor"
      :action="action"
      :state="state"
      :answer="answer"
      :success="success"
      :count="count"
      @getExpression="getExpression"
    />
  </div>
</template>

<script>
import SelectNumber from '@/components/SelectNumber.vue';
import SelectAction from '@/components/SelectAction.vue';
import Expression from '@/components/Expression.vue';
import Result from '@/components/Result.vue';
import Header from '@/components/Header.vue';
import {
  getRndNum,
  getMultiple,
  getDivide,
  shuffle,
} from '@/assets/js/functions';
import SelectAnswerType from './components/SelectAnswerType.vue';

export default {
  name: 'App',
  components: {
    Result,
    Expression,
    SelectAction,
    SelectNumber,
    Header,
    SelectAnswerType,
  },
  data() {
    return {
      firstFactor: null,
      secondFactor: null,
      answersArr: [],
      answerOptArr: [],
      prevFactors: [],
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
      answer: null,
      answerType: null,
      success: false,
    };
  },
  methods: {
    getAction(action) {
      this.action = action;
      this.state = 'answer';
    },
    getAnswerType(answerType) {
      this.answerType = answerType;
      this.state = 'selectNumber';
    },
    getExpression() {
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
      this.getExpression();
    },
    getSecondFactor() {
      if (this.action === 'multiple') {
        this.secondFactor = getRndNum(1, 10);
      }
      if (this.action === 'divide') {
        this.secondFactor = this.answersArr[
          getRndNum(0, this.answersArr.length - 1)
        ];
      }
      if (this.prevFactors.includes(this.secondFactor)) {
        this.getSecondFactor();
      } else if (this.prevFactors.length <= 5) {
        this.prevFactors.unshift(this.secondFactor);
      } else {
        this.prevFactors.pop();
        this.prevFactors.unshift(this.secondFactor);
      }
    },
    getAnswers() {
      this.answersArr.length = 0;
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
    sendAnswer(res) {
      if (res === this.rightAnswer()) {
        this.success = true;
        this.count += 1;
      } else {
        this.count -= 1;
      }
      this.success = res === this.rightAnswer();
      this.state = 'result';
    },
    rightAnswer() {
      if (this.action === 'multiple') {
        this.answer = getMultiple(this.firstFactor, this.secondFactor);
      }
      if (this.action === 'divide') {
        this.answer = getDivide(this.secondFactor, this.firstFactor);
      }
      return this.answer;
    },
    changeOpt() {
      this.state = 'action';
      this.firstFactor = null;
      this.secondFactor = null;
      this.prevFactors.length = 0;
      this.count = 0;
    },
  },
};
</script>

<style lang="scss">
@import 'src/assets/styles/variables';
@import 'src/assets/styles/mixins';
@import 'src/assets/styles/scaffolding';

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
