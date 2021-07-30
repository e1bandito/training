<template>
  <div class="modal" @click.self="modalOverlayClick" v-scroll-lock="showModal">
    <div class="modal__inner">
      <h2 class="modal__title" v-if="!getErrors">
        Отлично, ошибок нет!
      </h2>
      <h2 class="modal__title" v-if="getErrors">Примеры с ошибками:</h2>
      <ul class="modal__list" v-if="getErrors">
        <li class="modal__item" v-for="(item, idx) in errorsArray" :key="idx">
          {{ item.firstNum }} {{ item.action }} {{ item.secondNum }} =
          <span class="modal__item-res"> {{ item.result }}</span>
        </li>
      </ul>
      <button
        @click="modalBtnClick"
        title="close"
        class="modal__btn"
        type="button"
        aria-label="close"
      >
        <svg height="20" viewBox="0 0 329.269 329" width="20" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M194.8 164.77L323.013 36.555c8.343-8.34 8.343-21.825 0-30.164-8.34-8.34-21.825-8.34-30.164 0L164.633 134.605 36.422 6.391c-8.344-8.34-21.824-8.34-30.164 0-8.344 8.34-8.344 21.824 0 30.164l128.21 128.215L6.259 292.984c-8.344 8.34-8.344 21.825 0 30.164a21.266 21.266 0 0015.082 6.25c5.46 0 10.922-2.09 15.082-6.25l128.21-128.214 128.216 128.214a21.273 21.273 0 0015.082 6.25c5.46 0 10.922-2.09 15.082-6.25 8.343-8.34 8.343-21.824 0-30.164zm0 0"
          />
        </svg>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "ErrorModal",
  props: {
    errorsArray: Array,
    showModal: Boolean
  },
  data() {
    return {
      anyErrors: false
    };
  },
  methods: {
    modalBtnClick() {
      this.$emit("closeModal");
    },
    modalOverlayClick() {
      this.$emit("closeModal");
    }
  },
  computed: {
    getErrors() {
      return this.errorsArray.length > 0;
    }
  }
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
  padding: 20px;

  @media (max-width: 400px) {
    padding: 0;
  }
}

.modal__inner {
  position: relative;
  background-color: #ffffff;
  margin: auto;
  padding: 20px;
  border-radius: 10px;
  width: 100%;
  max-width: 400px;
  max-height: calc(100vh - 40px);
  display: flex;
  flex-direction: column;
}

.modal__title {
  margin: 0;
  color: $dark-blue;
}

.modal__list {
  list-style: none;
  margin: 10px 0 0 0;
  flex-grow: 1;
  overflow: auto;
  padding: 10px;
}

.modal__item {
  font-size: 40px;
  font-weight: 700;
  color: $blue;
  text-align: center;
}

.modal__item-res {
  color: $red;
}

.modal__btn {
  position: absolute;
  top: 20px;
  right: 15px;
  border: none;
  background-color: transparent;
  box-shadow: none;
  width: 28px;
  height: 28px;
  cursor: pointer;
  padding: 0;
  margin: 0;

  & svg {
    fill: $dark-blue;
    transition: fill 0.3s linear;
  }

  &:hover {
    & svg {
      fill: $blue;
    }
  }
}
</style>
