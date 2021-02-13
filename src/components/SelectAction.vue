<template>
  <section class="select-action"
    v-if="state === 'action'"
  >
    <div class="container">
      <div class="select-action__inner">
        <h2 class="select-action__title">Выбери действие для тренировки</h2>
        <Btn
          @clickBtn="clickBtn"
          :class="'select-action__btn'"
          :action="'multiple'"
          :text="'Умножение'"
        />
        <Btn
          @clickBtn="clickBtn"
          :class="'select-action__btn'"
          :action="'divide'"
          :text="'Деление'"
        />
      </div>
    </div>
  </section>
</template>

<script>
import Btn from '@/components/Btn.vue';

export default {
  name: 'SelectAction',
  components: {
    Btn,
  },
  props: {
    state: {
      type: String,
      default: 'default',
    },
  },
  methods: {
    clickBtn(action) {
      this.$emit('sendAction', action);
    },
  },
};
</script>

<style lang="scss">
@import "src/assets/styles/variables";
@import "src/assets/styles/mixins";
@import "src/assets/styles/scaffolding";

.select-action {
  padding: 30px 0;

  & .select-action__btn {
    font-size: 18px;
    padding: 20px 25px;
    width: 220px;
    min-width: auto;
    background-color: $white;
    color: $blue;
    border: 2px solid $blue;
    transition: background-color 0.3s, color 0.3s;
    justify-self: end;
    margin-bottom: 20px;

    &:hover {
      background-color: $blue;
      color: $white;
    }

    &:last-of-type {
      margin-bottom: 0;
    }
  }
}

.select-action__inner {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.select-action__title {
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
</style>
