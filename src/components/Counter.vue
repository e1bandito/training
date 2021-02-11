<template>
  <div class="counter">
    Очков: {{ count }}
  </div>
</template>

<script>
export default {
  name: 'Counter',
  props: {
    count: Number,
  },
};
</script>

<style lang="scss">

</style>
