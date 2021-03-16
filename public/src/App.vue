<template>
  <div>
    <Catalog />
    <Cart />
    <List />
  </div>
</template>

<script>
import Catalog from "./Components/Catalog.vue";
import Cart from "./Components/Cart.vue";
import List from "./Components/List.vue";

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


