<template>
  <div class="v-popup-wrapper" ref="popup-wrapper">
    <div class="v-popup">
      <div class="v-popup__header">
        <span>{{ popupTitle }}</span>
        <span @click="closePopup"> Иконка выйти </span>
      </div>
      <div class="v-popup__content">
        <slot></slot>
      </div>
      <div class="v-popup__footer">
        <button
        @click="rightBtnAction"
        >{{ rightBtnTitle }}</button>
        <button @click="closePopup">закрыть</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "v-popup",
  props: {
    rightBtnTitle: {
      type: String,
      default: "ok",
    },
    popupTitle: {
      type: String,
      default: "Имя попапа",
    },
  },
  methods: {
     rightBtnAction(){
        this.$emit("rightBtnAction")
     },
    closePopup() {
      this.$emit("closePopup");
    },
  },
  mounted() {
    let vm = this;
    document.addEventListener("click", function (item) {
      if (item.target === vm.$refs["popup-wrapper"]) {
        vm.closePopup();
      }
    });
  },
};
</script>

<style lang="scss">
.v-popup-wrapper {
  background-color: rgba(64, 64, 64, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  right: 0;
  left: 0;
  top: 0;
  bottom: 0;
}
.v-popup {
  padding: 16px;
  position: fixed;
  top: 50px;
  right: 0;
  left: 50%;
  width: 600px;
  border: 3px solid red;
  background-color: greenyellow;
  z-index: 10;
  &__header,
  &__footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &__content {
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>