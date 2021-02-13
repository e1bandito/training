<template>
  <div class="counter">
    {{ countText }} {{ count }}
  </div>
</template>

<script>
export default {
  name: 'Counter',
  props: {
    count: Number,
    countText: String,
  },
};
</script>

<style lang="scss">

</style>
