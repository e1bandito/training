<template>
  <div class="select-action"
    v-if="state === 'action'"
  >
    <h2 class="select-action__title">Выбери действие для тренировки</h2>
    <Btn
      @clickBtn="clickBtn"
      :action="'multiple'"
      :text="'Умножение'"
    />
    <Btn
      @clickBtn="clickBtn"
      :action="'divide'"
      :text="'Деление'"
    />
  </div>
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

</style>
