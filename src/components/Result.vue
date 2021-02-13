<template>
  <section class="result"
    v-if="state === 'result'"
  >
    <div class="container">
      <div class="result__inner">
        <p class="result__text result__text--success"
          v-if="success"
        >В ТОЧКУ!</p>
        <p class="result__text result__text--error"
          v-else
        >МИМО!</p>
        <p class="result__exp-text">правильный ответ:</p>
        <p class="result__exp-val">
          {{ secondFactor }} {{ actionValue }} {{ firstFactor }} = {{ answer }}
        </p>
        <Counter
          :count="count"
          :countText="'Очков набрано:'"
        />
        <Btn
          text="Дальше!"
          classes="btn--result"
          @clickBtn="clickBtn"
        />
      </div>
    </div>
  </section>
</template>

<script>
import Counter from '@/components/Counter.vue';
import Btn from '@/components/Btn.vue';

export default {
  name: 'Result',
  components: { Counter, Btn },
  props: {
    firstFactor: Number,
    secondFactor: Number,
    state: String,
    action: String,
    answer: Number,
    success: Boolean,
    count: Number,
  },
  methods: {
    clickBtn() {
      this.$emit('getExpression');
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
.result {
  padding: 30px 0;

  & .counter {
    margin-bottom: 30px;
  }

  @include max(500) {
    padding: 10px 0;
  }
}
.result__inner {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.result__text {
  color: $grey;
  margin: 0 0 30px 0;
  font-size: 80px;
  text-align: center;
  font-weight: 700;
  @include max(500) {
    font-size: 40px;
    margin-bottom: 10px;
  }
  &--success {
    color: $green;
  }
  &--error {
    color: $red;
  }
}
.result__exp-text {
  text-align: center;
  color: $grey;
  margin: 0;
  font-size: 30px;
  font-weight: 700;
  @include max(500) {
    font-size: 20px;
  }
}
.result__exp-val {
  color: $red;
  text-align: center;
  margin: 0 0 30px 0;
  font-size: 50px;
  font-weight: 700;
  @include max(500) {
    margin-bottom: 10px;
    font-size: 36px;
  }
}
.result__counter-text {
  text-align: center;
  margin: 0;
  font-size: 30px;
  color: $grey;
  font-weight: 700;
}
.result__counter-val {
  text-align: center;
  color: $grey;
  margin: 0 0 20px 0;
  font-size: 140px;
  font-weight: 700;
  @include max(500) {
    margin-bottom: 20px;
    font-size: 50px;
  }
  &--sub {
    color: $red;
  }
  &--up {
    color: $green;
  }
}
</style>
