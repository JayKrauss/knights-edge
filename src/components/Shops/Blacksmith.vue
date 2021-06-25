<template>
  <div id="blacksmith" class="main-screen">
    <br><br><br>
    <div class="shop-text"><strong>{{ blacksmithText }}</strong></div>
      <br><br>
  <button class="shop-button">Buy</button>
  <button class="shop-button">Sell</button>
  <button class="shop-button">Work</button>
  </div>
</template>

<script>
export default {
  name: "Blacksmith",
  props: [],
  data() {
    return{
      blacksmithText : "You enter a busy blacksmith shop. Around you is an array of weapons and tools across every wall and surface. Behind the counter, you can see the smith and his apprentices working a hot bar of steel, the smith barking orders as the others strike."
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#blacksmith{
     background-image: url("../../assets/images/blacksmithshop.jpg");
     background-size: cover;
 }
</style>