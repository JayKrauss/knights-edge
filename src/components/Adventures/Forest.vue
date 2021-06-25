<template>
  <div id="forest" class="main-screen">
    <br><br><br>
    <div class="shop-text"><strong>{{ forestText }}</strong></div>
      <br><br>
    <button class="shop-button">Gather</button><br>
    <button class="shop-button" @click="randomCombat">Fight</button>
  </div>
</template>

<script>
export default {
  name: "Forest",
  props: [],
  data() {
    return{
      forestText : "You go for a walk in the woods."
    }
  },
  methods: {
    randomCombat() {
      this.$emit("randomCombat")
    },
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#forest{
     background-image: url("../../assets/images/forest.jpg");
     background-size: cover;
 }
</style>