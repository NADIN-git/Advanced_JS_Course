<template>
  <div>
    <Catalog />
    <!--Cart v-if="CART.length" :cartData="CART" />-->
    <List />
  </div>
</template>

<script>
import Catalog from "./Components/Catalog.vue";
import Cart from "./Components/Cart.vue";
import List from "./Components/List.vue";
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      msg: "My Header From app.vue",
      counter: 0,
    };
  },
  components: {
    Catalog,
    Cart,
    List,
  },
  computed: {
    ...mapGetters(["CART"]),
  },
  methods: {
    changeMsg() {
      this.msg = "My new mesasge from app.vue";
    },
    onButtonCounterClick({ cnt }) {
      this.counter = cnt;
    },
  },
};
</script>

<style module>
.Catalog {
  max-width: 900px;
  margin: auto;
}
</style>


