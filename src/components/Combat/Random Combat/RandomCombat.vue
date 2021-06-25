<template>
  <div id="random-combat" class="main-screen">
    <br><br>
    <div class="random-combat-text"><strong>{{ randomCombatText }}</strong></div>
    <br>
    <img id="combat-image" src="../../../assets/images/rodentofsize.png"><br>
    <span id="enemy-chat"><strong>"What the fu- I mean.. Squeak?"</strong></span>
    <h5 id="enemy-hp-bar">HP: {{ opponentCurrentHP }} / {{ opponentMaxHP }}</h5>
    <button class="shop-button">Attack</button>
    <button class="shop-button">Defend</button>
    <button class="shop-button">Heal</button>

  </div>
</template>

<script>
export default {
  name: "RandomCombat",
  props: [
      "playerCurrentHP",
      "playerMaxHP",
      "playerDamage",
      "playerArmor",
  ],
  data() {
    return{
      randomCombatText : "You come upon a rodent of unusual size.",
      opponentMaxHP : 10,
      opponentCurrentHP : 10,
    }
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#random-combat{
     background-image: url("../../../assets/images/randomcombat.jpg");
     background-size: cover;
 }
 #combat-image{
     width: 150px;
     height: 200px;
     margin-left: auto;
     margin-right: auto;
 }
 #enemy-chat{
     color: darkblue;
 }
 #enemy-hp-bar{
     color: red;
 }
</style>