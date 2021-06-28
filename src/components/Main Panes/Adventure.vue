<template>
  <div id="adventure" class="main-screen">
    <br><br><br>
    <div class="shop-text"><strong>{{ adventureText }}</strong></div>
    <br><br>
    <button class="shop-button" @click="travelForest">Forest</button>
    <button class="shop-button" @click="travelMountains">Mountains</button>
    <button class="shop-button" @click="travelQuests">Quests</button>
  </div>
</template>

<script>
export default {
  name: "Adventure",
  props: [],
  data(){
    return{
      adventureText : "It's a lovely day for an adventure. Where do you want to go?"
    }
  },
  methods: {
    travelForest() {
      this.$emit("openPane", "forest")
    },
    travelMountains() {
      this.$emit("openPane", "mountains")
    },
    travelQuests() {
      this.$emit("openPane", "travelQuests")
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
 #adventure{
     background-image: url("../../assets/images/adventure.png");
     background-size: cover;
 }

</style>