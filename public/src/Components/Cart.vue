<template>
  <div class="Cart">
    <h1>Корзина</h1>
    <div class="CatalogList">
      <CartItem />
      <!--CartItem
        v-for="product in products"
        :key="product.name"
        :product_data="product"
        @sendArticle="showChildArticleInConsole"
      />-->
    </div>
  </div>
</template>

<script>
import CartItem from "./CartItem.vue";
export default {
  components: {
    CartItem,
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
    console.log("Загрузился Cart");
  },
};
</script>

<style>
</style>