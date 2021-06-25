<template>
  <div id="inn" class="main-screen">
    <br><br><br>
    <div class="shop-text"><strong>{{ innText }}</strong></div>
    <br><br>
    <button class="shop-button">Rest</button>
    <button class="shop-button">Drink</button>
    <button class="shop-button">Quests</button>
  </div>
</template>

<script>
export default {
  name: "Inn",
  props: [],
  data(){
    return{
      innText : "You open the front door to a blast of music and voices. The main floor of the inn serves as a bar and restaurant to travellers and townsfolk alike. Rooms are available upstairs for rent. A quest board stands against a far wall with fliers for jobs that need to be done."
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
 #inn{
     background-image: url("../../assets/images/inn.jpg");
     background-size: cover;
 }
</style>