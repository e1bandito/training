<template>
  <div class="select-number" v-if="state === 'selectNumber'">
    <h2 class="select-number__title">Выбери цифру, для тренировки</h2>
    <ul class="select-number__list">
      <li
        tabindex="0"
        class="select-number__item"
        v-for="(item, index) in numbers"
        :key="index"
        @keydown.enter="setNum($event)"
        @click="setNum($event)"
      >
        {{ item.value }}
      </li>
    </ul>
    <button class="btn" type="button" @click="setRnd()">Случайная цифра</button>
  </div>
</template>

<script>
export default {
  name: "SelectNumber",
  props: {
    numbers: Array,
    state: {
      type: String,
      default: "default"
    }
  },
  data() {
    return {
      value: null
    };
  },
  methods: {
    setNum(e) {
      this.$emit("setValue", +e.target.innerText);
    },
    setRnd() {
      this.$emit("setValue", "random");
    }
  }
};
</script>

<style lang="scss">
@import "src/assets/styles/variables";
@import "src/assets/styles/mixins";

.select-number {
  padding: 30px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.select-number__inner {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.select-number__title {
  font-style: normal;
  font-weight: bold;
  font-size: 40px;
  line-height: 1.15;
  text-align: center;
  color: $dark-blue;
  margin: 0 0 75px 0;

  @include max($lg) {
    font-size: 30px;
  }

  @include max(500) {
    font-size: 26px;
    margin-bottom: 30px;
  }
}

.select-number__list {
  max-width: 525px;
  width: 100%;
  margin: 0 auto 30px;
  list-style: none;
  padding: 0;
  display: grid;
  gap: 40px;
  grid-template-columns: repeat(4, 1fr);

  @include max(500) {
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
  }
}

.select-number__item {
  font-weight: bold;
  font-size: 100px;
  line-height: 1.2;
  text-align: center;
  color: $red;
  transition: background-color 0.3s, color 0.3s;

  @include max(500) {
    font-size: 60px;
  }

  &--active {
    background-color: $dark-blue;
    color: $white;
  }

  &:hover {
    background-color: $dark-blue;
    color: $white;
    cursor: pointer;
  }
}
</style>
