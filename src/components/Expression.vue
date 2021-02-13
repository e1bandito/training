<template>
  <section class="expression"
    v-if="state === 'expression'"
  >
    <div class="container">
      <div class="expression__inner">
        <h2 class="expression__title">Сколько получится, если..</h2>
        <p class="expression__quest">{{ secondFactor }} {{ actionValue }} {{ firstFactor }} = ?</p>
        <h3 class="expression__answer-title">Варианты ответов:</h3>
        <ul class="expression__list">
          <li class="expression__item"
              v-for="(item, index) in answerOptArr"
              :key="index"
          >
            <Radio
              :item="item"
              :index="index"
              @getValue="getValue"
            />
          </li>
        </ul>
        <Btn
          :text="'Я выбрал!'"
          @clickBtn="clickBtn"
        />
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
  },
  data() {
    return {
      answer: null,
    };
  },
  methods: {
    clickBtn() {
      const res = this.answer;
      this.$emit('sendAnswer', res);
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
@import "src/assets/styles/variables";
@import "src/assets/styles/mixins";
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
</style>
