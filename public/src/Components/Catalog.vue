<template>
  <div class="Catalog">
    <h1>Каталог</h1>
    <div class="CatalogList">
      <!-- {{ getData }}-->
      <CatalogItem
        v-for="product in PRODUCTS"
        :key="product.name"
        :product_data="product"
      />
    </div>
  </div>
</template>

<script>
//import CatalogItem from "./CatalogItem.vue";
import { mapMutations, mapGetters, mapActions } from "vuex";
export default {
  methods: {
    //   ...mapMutations(["setData"]),
    //...mapActions(["requestData"]),
    ...mapActions(["GET_PRODUCTS_FROM_API"]),
  },
  computed: {
    //...mapGetters(["getData", "getFullPrice"]),
    ...mapGetters(["PRODUCTS"]),
  },
  created() {
    this.GET_PRODUCTS_FROM_API(1);
  },

  // mounted() {
  //console.log("Загрузился CatalogItem");
  // this.GET_PRODUCTS_FROM_API();
  //},
};
</script>

<style>
</style>