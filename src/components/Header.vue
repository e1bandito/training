<template>
  <header class="header">
    <Counter
      :count="count"
      :countText="'Очков:'"
    />
    <Btn
      :text="'Изменить цифру/действие'"
      :classes="'header__btn'"
      @clickBtn="clickBtn"
    />
  </header>
</template>

<script>
import Counter from '@/components/Counter.vue';
import Btn from '@/components/Btn.vue';

export default {
  name: 'Header',
  components: { Btn, Counter },
  props: {
    count: Number,
  },
  methods: {
    clickBtn() {
      this.$emit('changeOpt');
    },
  },
};
</script>

<style scoped>

</style>
