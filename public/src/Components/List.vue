<template>
  <div>
    <div class="List">
      <h1>Отладка</h1>
      {{ getData }}
      <br />
      {{ getFullPrice }}
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
    ...mapGetters(["getData", "getFullPrice"]),
  },
  created() {
    this.requestData(1);
  },
};
</script>

<style module>
</style>



