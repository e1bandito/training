<template>
  <div class="select-number"
    v-if="state === 'selectNumber'"
  >
    <h2 class="select-number__title">Выбери цифру, для тренировки</h2>
    <ul class="select-number__list">
      <li class="select-number__item"
        v-for="(item, index) in numbers"
        :key="index"
        @click="getNumber(index)"
      >{{ item.value }} - {{ index }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'SelectNumber',
  props: {
    numbers: Array,
    state: {
      type: String,
      default: 'default',
    },
  },
  methods: {
    getNumber(index) {
      this.$emit('getNumber', index);
    },
  },
};
</script>

<style lang="scss">

</style>
