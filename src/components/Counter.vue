<template>
  <div class="counter">
    {{ countText }}
    <span class="counter__val"
      :class="count > 0 ? 'counter__val--hi' : 'counter__val--low'"
    >{{ count }}</span>
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
@import "src/assets/styles/variables";
.counter {
  font-size: 24px;
  margin: 0;
  font-weight: 700;
  color: $grey;
  justify-self: start;
}

.counter__val {
  color: $dark-blue;

  &--hi {
    color: $green;
  }

  &--low {
    color: $red;
  }
}
</style>
