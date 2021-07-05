<template>
  <button class="btn" :class="classes" @click="clickBtn(action)">
    {{ text }}
  </button>
</template>

<script>
export default {
  name: 'Btn',
  props: {
    text: {
      type: String,
      default: 'Я выбрал',
    },
    action: {
      type: String,
      default: '',
    },
    classes: {
      type: String,
      default: '',
    },
  },
  methods: {
    clickBtn(action) {
      this.$emit('clickBtn', action);
    },
  },
};
</script>

<style lang="scss">
@import 'src/assets/styles/variables';
@import 'src/assets/styles/mixins';

.btn {
  appearance: none;
  border: none;
  min-width: 300px;
  background-color: $blue;
  color: $white;
  font-weight: 700;
  font-size: 26px;
  cursor: pointer;
  padding: 24px;
  transition: background-color 0.3s;

  &:hover {
    background-color: darken($blue, 15%);
  }
}
</style>
