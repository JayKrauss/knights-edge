<template>
  <div id="quests" class="main-screen">
    <br><br><br>
    <div class="shop-text"><strong>{{ questText }}</strong></div>
      <br><br>

  </div>
</template>

<script>
export default {
  name: "TravelQuests",
  props: [],
  data() {
    return{
      questText : "Here are your active quests:"
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#quests{
     background-image: url("../../assets/images/knightsfighting.png");
     background-size: cover;
 }
</style>