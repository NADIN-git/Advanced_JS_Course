<template>
  <div class="CartItem">
    {{ dobItemData.name }}
    <br />
    Цена: {{ dobItemData.price }}
    <br />
    <button>Удалить из корзины</button>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
console.log("Загрузился CartItem");
export default {
  props: {
    id: String,
  },
  computed: {
    ...mapGetters(["redData"]),

    dobItemData() {
      return this.redData[this.id];
    },
  },
};
</script>

<style>
</style>


