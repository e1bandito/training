<template>
  <div class="radio">
    <input
      type="radio"
      name="radio-answer"
      class="radio__field visually-hidden"
      :id="'radio-' + index"
      :value="item"
      @change="getValue(item)"
    />
    <label :for="'radio-' + index" class="radio__label">{{ item }}</label>
  </div>
</template>

<script>
export default {
  name: "Radio",
  props: {
    item: Number,
    index: Number
  },
  methods: {
    getValue(item) {
      this.$emit("getValue", item);
    }
  }
};
</script>

<style lang="scss">
@import "src/assets/styles/variables";

.radio {
  display: flex;
  justify-content: center;
}

.radio__label {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  padding-left: 25px;
  font-size: 26px;
  font-weight: 700;
  color: $grey;
  transition: color 0.3s;
  min-width: 70px;

  &::before {
    content: "";
    width: 22px;
    height: 22px;
    border-radius: 100%;
    border: 3px solid $red;
    margin-right: 5px;
    position: absolute;
    top: 4px;
    left: 0;
  }

  &::after {
    content: none;
    width: 10px;
    height: 10px;
    background-color: $red;
    border-radius: 100%;
    position: absolute;
    top: 10px;
    left: 6px;
  }

  &:hover {
    color: $dark-blue;
  }
}

.radio__field:checked + .radio__label::after {
  content: "";
}

.radio__field:focus + .radio__label {
  outline: 1px solid $blue;
}
</style>
