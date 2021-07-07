<template>
  <div id="mountains" class="main-screen">
    <br><br><br>
    <div class="shop-text"><strong>{{ mountainText }}</strong></div>
      <br><br>
  <button class="shop-button" disabled>Gather</button><br>
  <button @click="randomCombat" class="shop-button">Fight</button>
  </div>
</template>

<script>
export default {
  name: "Mountains",
  props: [],
  data() {
    return{
      mountainText : "You go for a climb."
    }
  },
  methods:{
    randomCombat() {
      this.$emit("openPane", "randomCombat")
    },
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#mountains{
     background-image: url("../../assets/images/mountainbackground.png");
     background-size: cover;
 }
</style>