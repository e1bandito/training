<template>
  <div class="expression"
    v-if="state === 'expression'"
  >
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
    />
  </div>
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
  methods: {
    getValue(item) {
      this.$emit('getAnswer', item);
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
