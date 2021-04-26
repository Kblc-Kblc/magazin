<template>
  <div class="v-cart-item">
    <img
      class="v-catalog-item__image"
      :src="require('../../assets/images/' + cart_item_data.image)"
      alt="img"
    />
    <div class="v-cart-item__info">
      <p>{{ cart_item_data.name }}</p>
      <p>{{ cart_item_data.price | toFix | priseFormat }}</p>
      <p>{{ cart_item_data.article }}</p>
    </div>
    <div class="v-cart-item__quantity">
      <p>quantity</p>
      <span>
        <span @click="decrementItem">-</span>
        {{ cart_item_data.quantity  }}
        <span @click="incrementItem">+</span>
      </span>
    </div>
    <button @click="deleteFromCart">delete</button>
  </div>
</template>

<script>
import toFix from "../../filters/toFix";
import priseFormat from "../../filters/prise-format";

export default {
  name: "v-cart-item",
  props: {
    cart_item_data: {
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
    decrementItem() {
      this.$emit("decrement");
    },
    incrementItem() {
      this.$emit("increment");
    },
    deleteFromCart() {
      this.$emit("deleteFromCart");
    },
  },
  mounted() {
    this.$set(this.cart_item_data, "quantity", 1);
  },
};
</script>

<style>
</style>