<template>
  <section class="expression" v-if="state === 'expression'">
    <div class="container">
      <div class="expression__inner">
        <h2 class="expression__title">Сколько получится, если..</h2>
        <p class="expression__quest">
          {{ secondFactor }} {{ actionValue }} {{ firstFactor }} = ?
        </p>
        <template v-if="answerType === 'list'">
          <h3 class="expression__answer-title">Варианты ответов:</h3>
          <ul class="expression__list">
            <li
              class="expression__item"
              v-for="(item, index) in answerOptArr"
              :key="index"
            >
              <Radio :item="item" :index="index" @getValue="getValue" />
            </li>
          </ul>
        </template>
        <template v-if="answerType === 'input'">
          <h3 class="expression__answer-title">Введите ответ:</h3>
          <label class="expression__answer-label">
            <input
              class="expression__answer-field"
              type="number"
              v-model="answer"
            />
            <span class="expression__answer-error-msg" v-if="!valid"
              >error</span
            >
          </label>
        </template>
        <Btn :text="'Я выбрал!'" @clickBtn="clickBtn" />
      </div>
    </div>
  </section>
</template>

<script>
import Btn from '@/components/Btn.vue';
import Radio from '@/components/Radio.vue';

export default {
  name: 'Expression',
  components: { Radio, Btn },
  props: {
    firstFactor: Number,
    secondFactor: Number,
    action: String,
    state: String,
    answerOptArr: Array,
    answerType: String,
  },
  data() {
    return {
      answer: null,
      valid: true,
    };
  },
  methods: {
    clickBtn() {
      const res = Number(this.answer);
      this.$emit('sendAnswer', res);
      this.answer = '';
    },
    getValue(item) {
      this.answer = item;
    },
  },
  computed: {
    actionValue() {
      let actionValue;
      if (this.action === 'multiple') {
        actionValue = '*';
      } else {
        actionValue = '/';
      }
      return actionValue;
    },
  },
};
</script>

<style lang="scss">
@import 'src/assets/styles/variables';
@import 'src/assets/styles/mixins';
.expression {
  padding: 30px 0;
  @include max(500) {
    padding: 20px 0;
  }
}
.expression__inner {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.expression__title {
  color: $grey;
  margin: 0 0 30px 0;
  font-size: 30px;
  line-height: 1.5;
  text-align: center;
  font-weight: 700;
  @include max(500) {
    font-size: 20px;
    margin-bottom: 0;
  }
}
.expression__quest {
  color: $red;
  font-weight: 700;
  font-size: 100px;
  margin: 0 0 30px 0;
  @include max(500) {
    font-size: 40px;
    margin-bottom: 20px;
  }
}
.expression__answer-title {
  color: $grey;
  margin: 0 0 40px 0;
  font-size: 20px;
  text-align: center;
  font-weight: 700;
  @include max(500) {
    margin-bottom: 20px;
  }
}
.expression__list {
  @include lsr;
  max-width: 600px;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  margin: 0 auto 70px;
  align-items: center;
  justify-content: center;
  text-align: center;
  @include max(500) {
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
    margin-bottom: 30px;
  }
}

.expression__answer-label {
  position: relative;
  margin-bottom: 60px;

  @include max(500) {
    margin-bottom: 40px;
  }
}

.expression__answer-field {
  padding: 20px;
  font-size: 70px;
  max-width: 160px;
  text-align: center;
  border: 2px solid $grey;
  color: $dark-blue;
  font-weight: 700;

  &:focus {
    border-color: $blue;
    outline: none;
  }

  @include max(500) {
    padding: 15px;
    font-size: 50px;
    max-width: 120px;
  }
}

.expression__answer-error-msg {
  position: absolute;
  top: 105%;
  left: 0;
  color: $red;
}
</style>
