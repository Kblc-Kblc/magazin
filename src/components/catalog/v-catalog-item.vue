<template>
  <div class="v-catalog-item">
    <vPopup
      v-if="isInfoPopupVisible"
      @closePopup="closeInfoPopup"
      rightBtnTitle="Добавить в  корзину"
      :popupTitle="product_data.name"
      @rightBtnAction="addToCart"
    >
      <img
        class="v-catalog-item__image"
        :src="require('../../assets/images/' + product_data.image)"
        alt="img"
      />
      <div>
        <p class="v-catalog-item__name">{{ product_data.name }}</p>
        <p class="v-catalog-item__price">
          {{ product_data.price | toFix | priseFormat }}
        </p>
        <p class="">{{ product_data.category }}</p>
      </div>
    </vPopup>

    <img
      class="v-catalog-item__image"
      :src="require('../../assets/images/' + product_data.image)"
      alt="img"
    />
    <p class="v-catalog-item__name">{{ product_data.name }}</p>
    <p class="v-catalog-item__price">
      {{ product_data.price | toFix | priseFormat }}
    </p>
    <button class="v-catalog-item__show-info" @click="showPopupInfo">
      Показать инфо
    </button>
    <button class="v-catalog-item__btn" @click="addToCart">add to cart</button>
  </div>
</template>

<script>
import toFix from "../../filters/toFix";
import priseFormat from "../../filters/prise-format";
import vPopup from "../popup/v-popup";
export default {
  name: "v-catalog-item",
  data() {
    return {
      isInfoPopupVisible: false,
    };
  },
  components: {
    vPopup,
  },
  props: {
    product_data: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  filters: {
    toFix,
    priseFormat,
  },
  methods: {
    closeInfoPopup() {
      this.isInfoPopupVisible = false;
    },
    showPopupInfo() {
      this.isInfoPopupVisible = true;
    },
    addToCart() {
      this.$emit("addToCart", this.product_data);
    },
  },
};
</script>

<style lang="scss">
.v-catalog-item {
  flex: 0 0 25%;
  box-shadow: 0 0 8px 0 #000;
  padding: 16px 16px;
  margin: 16px 16px;
  text-align: center;
}
</style>