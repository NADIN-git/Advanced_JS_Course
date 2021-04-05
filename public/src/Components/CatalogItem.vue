<template>
  <div class="CatalogItem">
    {{ getItemData.name }}
    <br />
    Цена: {{ getItemData.price }}
    <br />
    <div class="btns">
      <Button @clicked="addGood">Добавить товар в корзину</Button>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import Button from "./Button.vue";
console.log("Загрузился CatalogItem");
export default {
  components: {
    Button,
  },
  props: {
    id: String,
  },
  computed: {
    ...mapGetters(["getData"]),

    getItemData() {
      return this.getData[this.id];
    },
  },
  methods: {
    ...mapActions(["addItem"]),
    addGood() {
      const goodToAdd = {
        name: this.getItemData.name,
        price: this.getItemData.price,
        img: "",
      };
      console.log(goodToAdd);
      this.addItem(goodToAdd);
    },
  },
};
</script>

<style>
</style>