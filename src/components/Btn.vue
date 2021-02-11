<template>
  <button
    class="btn"
    :classes="classes"
    @click="clickBtn(action)"
  >
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

<style scoped>

</style>
