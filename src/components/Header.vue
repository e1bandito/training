<template>
  <header class="header" v-if="headerVisible">
    <div class="container">
      <div class="header__inner">
        <div class="header__wrap">
          <Counter :count="count" :countText="'Очки:'" />
          <span class="header__errors"
            >Промахи:
            <span class="header__errors-value">{{ errorsCount }}</span></span
          >
        </div>
        <h1 class="header__title">{{ getAction }} на {{ firstFactor }}</h1>
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
    action: String,
    firstFactor: Number,
    state: String,
    errorsCount: Number,
  },
  methods: {
    clickBtn() {
      this.$emit('changeOpt');
    },
  },
  computed: {
    getAction() {
      let actionValue;
      if (this.action === 'multiple') {
        actionValue = 'Умножаем';
      }
      if (this.action === 'divide') {
        actionValue = 'Делим';
      }
      return actionValue;
    },
    headerVisible() {
      let headerVisible;
      if (this.firstFactor && this.action) {
        headerVisible = true;
      }
      return headerVisible;
    },
  },
};
</script>

<style lang="scss">
@import 'src/assets/styles/variables';
@import 'src/assets/styles/mixins';
.header {
  padding: 10px 0;

  .header__btn {
    font-size: 16px;
    padding: 10px 15px;
    width: 170px;
    min-width: auto;
    background-color: $white;
    color: $blue;
    border: 2px solid $blue;
    transition: background-color 0.3s, color 0.3s;
    justify-self: end;

    @include max(500) {
      width: 160px;
      padding: 7px 10px;
    }

    &:hover {
      background-color: $blue;
      color: $white;
    }
  }
}
.header__inner {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  justify-items: center;
  align-items: center;
  gap: 15px;

  @include max($md) {
    grid-template-columns: 1fr 1fr;
  }

  @include max(500) {
    grid-template-columns: 1fr;
  }
}

.header__wrap {
  justify-self: start;
}

.header__errors {
  color: $grey;
}

.header__errors-value {
  color: $red;
}

.header__title {
  font-size: 40px;
  color: $dark-blue;
  margin: 0;

  @include max($lg) {
    font-size: 30px;
  }

  @include max($md) {
    order: 1;
    grid-column: 1 / 3;
  }
}
</style>
