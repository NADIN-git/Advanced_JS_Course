<template>
  <div class="CartItem">В корзине нет товаров</div>
</template>

<script>
export default {
  name: "CartItem",
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
    console.log("Загрузился CartItem");
  },
};
</script>

<style>
</style>