<template>
  <div class="select-action">
    <h2 class="select-action__title">Выбери действие для тренировки</h2>
    <ul class="select-action__list">
      <li class="select-action__item"
        v-for="(item, index) in actions"
        :key="index"
      >{{ item.name }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'SelectAction',
  props: {
    actions: Array,
  },
};
</script>

<style lang="scss">

</style>
