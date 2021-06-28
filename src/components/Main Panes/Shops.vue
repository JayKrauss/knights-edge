<template>
  <div id="shops" class="main-screen">
    <br><br><br>
    <div id="intro-text">
      <strong>{{ introText }}</strong>
    </div>
    <div id="shop-buttons">
      <button @click="enterBlacksmith">Blacksmith</button>
      <button @click="enterGeneralStore">General Store</button>
      <br/>
      <button @click="enterClothier">Clothier</button>
      <button @click="enterInn">Inn</button>
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
      introText : "You find yourself in a bustling town center, surrounded by merchants calling their wares out above the mid-morning crowds."
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
#intro-text{
  background: rgba(0,0,0,.6);
  padding: 20px;
  color: white;
  text-align: center;
  text-size: 16px;
}
#shop-buttons{
  margin-top: 90px;
}
button{
     height: 50px;
     width: 145px;
     margin: 30px;
     color: black;
     font-weight: bold;
     border-radius: 5px;
     background: url("../../assets/images/ravenna.png");
     background-size: inherit;
     background-position: center;
     background-repeat: no-repeat;
}
</style>