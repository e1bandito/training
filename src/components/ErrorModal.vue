<template>
  <div class="modal" @click.self="modalOverlayClick">
    <div class="modal__inner">
      <h2 class="modal__title" v-if="getErrors">
        Маладэц! Ашипок нэт!!
      </h2>
      <h2 class="modal__title" v-if="!getErrors">Примеры с ошибками:</h2>
      <ul class="modal__list">
        <li
          class="modal__item"
          v-for="(item, idx) in errorsArray"
          :key="idx">
          {{item.firstNum}} {{item.action}} {{item.secondNum}} = {{item.result}}
        </li>
      </ul>
      <button
        @click="modalBtnClick"
        title="close"
        class="modal__btn"
        type="button"
        aria-label="close">
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ErrorModal',
  props: {
    errorsArray: Array,
  },
  data() {
    return {
      anyErrors: false,
    };
  },
  methods: {
    modalBtnClick() {
      this.$emit('closeModal');
    },
    modalOverlayClick() {
      this.$emit('closeModal');
    },
  },
  computed: {
    getErrors() {
      return !(this.errorsArray.length > 0);
    },
  },
};
</script>

<style lang="scss">
@import "src/assets/styles/variables";
.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.4);
  display: flex;
}

.modal__inner {
  position: relative;
  background-color: #ffffff;
  margin: auto;
  padding: 20px;
  border-radius: 10px;
  width: 100%;
  max-width: 400px;
}

.modal__title {
  margin: 0 0 30px 0;
  text-align: center;
  color: $dark-blue;
}

.modal__btn {
  position: absolute;
  top: 10px;
  right: 10px;
  border: none;
  background-color: transparent;
  box-shadow: none;
  width: 28px;
  height: 28px;
  cursor: pointer;

  &:hover {
    &::after {
      background-color: $dark-blue;
    }

    &::before {
      background-color: $dark-blue;
    }
  }

  &::after {
    content: "";
    position: absolute;
    top: 50%;
    left: 0;
    width: 28px;
    height: 2px;
    background-color: $blue;
    transform: rotate(-45deg) translateY(-50%);
    transition: background-color 0.3s linear;
  }

  &::before {
    content: "";
    position: absolute;
    top: 50%;
    left: 0;
    width: 28px;
    height: 2px;
    background-color: $blue;
    transform: rotate(45deg) translateY(-50%);
    transition: background-color 0.3s linear;
  }
}

</style>
