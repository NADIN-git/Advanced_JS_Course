<template>
  <div>
    <Catalog :message="msg" />
    <Cart />
  </div>
</template>

<script>
console.log("Запустила App.vue");
import Catalog from "./Components/Catalog.vue";
import Cart from "./Components/Cart.vue";
export default {
  data() {
    return {
      msg: "My Header From app.vue",
      counter: 0,
    };
  },
  dataout() {
    return {
      msg: "My Header From app.vue",
      counter: 0,
    };
  },
  components: {
    Catalog,
    Cart,
  },
  methods: {
    changeMsg() {
      this.msg = "My new mesasge from app.vue";
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


