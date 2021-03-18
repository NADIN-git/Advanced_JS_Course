<template>
  <div>
    <div class="List">
      <h1>Отладка</h1>
      {{ getData }}
      <br />
      <CatalogItem v-for="id in getData" :id="id" :key="id" />

      {{ getFullPrice }}
      {{ getItemsOnPage }}
      <!--CartItem v-for="id in productsArray" :id="id" />-->
    </div>
  </div>
</template>

<script>
import { mapMutations, mapGetters, mapActions } from "vuex";
export default {
  methods: {
    //   ...mapMutations(["setData"]),
    ...mapActions(["requestData"]),
  },
  computed: {
    ...mapGetters(["getData", "getFullPrice", "getItemsOnPage"]),
  },
  created() {
    this.requestData(2);
  },
};
</script>

<style module>
</style>



