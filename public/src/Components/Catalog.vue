<template>
  <div class="App">
    <h1>Каталог</h1>
    <div class="Catalog">
      <CatalogItem v-for="id in getItemsOnPage" :id="id" :key="id" />
      <!--p>Сумма = {{ getFullPrice }}</p-->
    </div>
  </div>
</template>

<script>
console.log("Загрузился Catalog");
import { mapMutations, mapGetters, mapActions } from "vuex";
import CatalogItem from "./CatalogItem.vue";
export default {
  components: {
    CatalogItem,
  },
  methods: {
    ...mapActions(["requestData"]),
  },
  computed: {
    ...mapGetters(["getItemsOnPage", "getFullPrice"]),
    myState() {
      return this.$store.getters.getData;
    },
  },
  created() {
    this.requestData(1);
  },
};
</script>

<style>
</style>