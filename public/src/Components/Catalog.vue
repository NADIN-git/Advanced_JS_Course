<template>
  <div class="Catalog">
    <h1>Каталог</h1>
    <div class="CatalogList">
      <CatalogItem
        v-for="product in products"
        :key="product.name"
        :product_data="product"
        @sendArticle="showChildArticleInConsole"
      />
    </div>
  </div>
</template>

<script>
import CatalogItem from "./CatalogItem.vue";
export default {
  components: {
    CatalogItem,
  },
  props: {},
  data() {
    return {
      products: [
        {
          name: "Чай",
          price: 150,
          img: "tea.jpg",
        },
        {
          name: "Кофе",
          price: 150,
          img: "coffee.jpg",
        },
        {
          name: "Сладости",
          price: 150,
          img: "sweets.jpg",
        },
        {
          name: "Хлебобулочные изделия",
          price: 150,
          img: "bakeryproducts.jpg",
        },
        {
          name: "Орехи",
          price: 150,
          img: "nuts.jpg",
        },
        {
          name: "Сухофрукты",
          price: 150,
          img: "driedfruits.jpg",
        },
      ],
    };
  },
  computed: {},
  methods: {
    showChildArticleInConsole(data) {
      console.log(data);
    },
  },
  mounted() {
    console.log("Загрузился CatalogItem");
  },
};
</script>

<style>
</style>