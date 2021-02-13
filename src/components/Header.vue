<template>
  <header class="header">
    <div class="container">
      <div class="header__inner">
        <Counter
          :count="count"
          :countText="'Очки:'"
        />
        <Btn
          :text="'Изменить цифру/действие'"
          :classes="'header__btn'"
          @clickBtn="clickBtn"
        />
      </div>
    </div>
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
