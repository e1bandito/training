<template>
  <div class="radio">
    <input type="radio"
           name="radio-answer"
           class="radio__field visually-hidden"
           :id="'radio-' + index"
           :value="item"
           @change="getValue(item)"
    >
    <label :for="'radio-' + index" class="radio__label">{{ item }}</label>
  </div>
</template>

<script>
export default {
  name: 'Radio',
  props: {
    item: Number,
    index: Number,
  },
  methods: {
    getValue(item) {
      this.$emit('getValue', item);
    },
  },
};
</script>

<style scoped>

</style>
