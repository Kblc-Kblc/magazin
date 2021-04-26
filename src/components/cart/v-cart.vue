<template>
  <div class="v-cart">
    <router-link :to="{ name: 'catalog' }">
      <div class="v-catalog__link-cart">Домой</div>
    </router-link>
    <h2>Cart</h2>
    <p v-if="!cart_data.length">Пусто</p>
    <vCartItem
      v-for="(item, index) in cart_data"
      :key="item.article"
      :cart_item_data="item"
      @deleteFromCart="deleteFromCart(index)"
      @increment="increment(index)"
      @decrement="decrement(index)"
    />
    <div class="v-cart__total">
      <p>Сумма:</p>
      <p>{{ cartTotalCost | toFix | priseFormat }}</p>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import vCartItem from "@/components/cart/v-cart-item";

import toFix from "../../filters/toFix";
import priseFormat from "../../filters/prise-format";
export default {
  name: "v-cart",
  components: {
    vCartItem,
  },
    filters: {
    toFix,
    priseFormat,
  },
  props: {
    cart_data: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  computed: {
    cartTotalCost() {
      let result = [];

      if (this.cart_data.length) {
        for (let item of this.cart_data) {
          result.push(item.price * item.quantity);
        }
        result = result.reduce(function (sum, el) {
          return sum + el;
        });
        return result;
      } else {
        return 0;
      }
    },
  },
  methods: {
    ...mapActions([
      "DELETE_FROM_CART",
      "INCREMENT_CART_ITEM",
      "DECREMENT_CART_ITEM",
    ]),
    deleteFromCart(index) {
      this.DELETE_FROM_CART(index);
    },
    increment(index){
      this.INCREMENT_CART_ITEM(index)
    },
    decrement(index){
      this.DECREMENT_CART_ITEM(index)
    },
  },
};
</script>

<style>
</style>