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
        <p class="result__counter-text">очков набрано:</p>
        <Counter/>
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

<style scoped>

</style>
