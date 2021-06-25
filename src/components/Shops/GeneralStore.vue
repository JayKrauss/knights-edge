<template>
  <div id="general-store" class="main-screen">
    <br><br><br>
    <div class="shop-text"><strong>{{ generalStoreText }}</strong></div>
    <br><br>
    <button class="shop-button">Buy</button>
    <button class="shop-button">Sell</button>
    <button class="shop-button">Talk</button>
  </div>
</template>

<script>
export default {
  name: "GeneralStore",
  props: [],
  data(){
    return{
      generalStoreText : "You walk into the General Store. In boxes and crate, on shelves and hung from hooks are all manner of tools an equipment for every adventurer. Boxes of perserved rations and empty bottles stand next to stacks of health potions and climbing gear."
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#general-store{
     background-image: url("../../assets/images/generalstore.png");
     background-size: cover;
}
</style>