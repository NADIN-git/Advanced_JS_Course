<template>
  <div>
    <br />
    <div class="App">
      <h1>Корзина</h1>
      <div class="Cart">
        <CartItem v-for="id in getItemsInCart" :id="id" :key="id" />
      </div>
      <p>Итого товаров: {{ getFullCount }} на сумму {{ getFullPrice }} руб.</p>
    </div>
  </div>
</template>

<script>
console.log("Загрузился Cart");
import { mapMutations, mapGetters, mapActions } from "vuex";
import CartItem from "./CartItem.vue";
export default {
  components: {
    CartItem,
  },
  methods: {
    ...mapActions(["requestCart"]),
  },
  computed: {
    ...mapGetters(["getItemsInCart", "getFullPrice", "getFullCount"]),
    cartState() {
      return this.$store.getters.redData;
    },
  },
  created() {
    this.requestCart(3);
  },
};
</script>

<style>
</style>
