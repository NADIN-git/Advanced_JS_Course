<template>
  <div class="CatalogItem">
    <!--img :src="require('../img/' + product_data.img)" alt="img" ) />-->
    <p class="CatalogItemName">{{ product_data.name }}</p>
    <p class="CatalogItemPrice">Цена: {{ product_data.price }}</p>
    <button class="CatalogItemAddToCart" @click="SendDataToParent">
      Добавить в корзину
    </button>
  </div>
</template>

<script>
export default {
  name: "CatalogItem",
  props: {
    product_data: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  components: {},

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
    SendDataToParent() {
      this.$emit("sendArticle", this.product_data.name);
    },
  },
  mounted() {
    console.log("Загрузился CatalogItem");
  },
};
</script>

<style>
</style>