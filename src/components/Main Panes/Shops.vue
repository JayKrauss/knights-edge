<template>
  <div id="shops" class="main-screen">
    <br><br><br>
    <div class="shop-text">
      <strong> {{ introText }} </strong>
    </div>
    <div id="shop-buttons">
      <button @click="enterBlacksmith" class="shop-button">Blacksmith</button>
      <button @click="enterGeneralStore" class="shop-button">General Store</button>
      <br/>
      <button @click="enterClothier" class="shop-button">Clothier</button>
      <button @click="enterInn" class="shop-button">Inn</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Shops",
  props: [

  ],
  data(){
    return{
      introText : "You find yourself in a bustling town center, surrounded by merchants calling out their wares above the mid-morning crowds."
    }
  },
  methods: {
    enterBlacksmith() {
      this.$emit("openPane", "blacksmith")
    },
    enterGeneralStore() {
      this.$emit("openPane", "generalstore")
    },
    enterClothier() {
      this.$emit("openPane", "clothier")
    },
    enterInn() {
      this.$emit("openPane", "inn")
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#shops{
     background-image: url("../../assets/images/DxRz37sXcAEQ6Cm.jpg");
     background-size: cover;
 }
#shop-buttons{
  margin-top: 90px;
}
</style>