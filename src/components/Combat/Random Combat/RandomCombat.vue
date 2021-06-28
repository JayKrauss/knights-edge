<template>
  <div id="random-combat" class="main-screen">
    <br><br>
    <div class="random-combat-text"><strong>{{ randomCombatText }}</strong></div>
    <br>
    <img id="combat-image" src="../../../assets/images/rodentofsize.png"><br>
    <span id="enemy-chat"><strong>"What the fu- I mean.. Squeak?"</strong></span>
    <h5 id="enemy-hp-bar">HP: {{ opponentCurrentHP }} / {{ opponentMaxHP }}</h5>
    <button class="shop-button" @click="playerAttack">Attack</button>
    <button class="shop-button">Defend</button>
    <button class="shop-button">Heal</button>

  </div>
</template>

<script>
// import standardEnemies from "../../../datafiles/enemies/standardEnemies.js"

export default {
  name: "RandomCombat",
//   enemy : standardEnemies.forestEnemies.forestRodent,
  props: [
      "playerCurrentHP",
      "playerMaxHP",
      "playerDamage",
      "playerArmor",
  ],
  data() {
    return{
      randomCombatText : "You come upon a rodent of unusual size.",
      opponentName : "Rodent of Unusual Size",
      opponentLevel : 1,
      opponentMaxHP : 10,
      opponentCurrentHP : 10,
      opponentDamage : 2,
      opponentXPValue : 10,
      opponentGoldValue : 5,
      localCurrentHP : this.playerCurrentHP,
    }
  },
  methods: {
      playerAttack() {
          Math.round(this.opponentCurrentHP -= this.playerDamage);
          if (this.playerDamage > this.opponentCurrentHP){
              this.opponentCurrentHP = 0;
              this.combatWon();
          }
          else{
              this.opponentAttack();
          }
      },
      playerDefend() {
          
      },
      opponentAttack() {
          this.$emit('modifyPlayerStats', "health", this.opponentDamage, "-");
      },
      playerVictory() {
          this.$emit("playerVictory", this.opponentName, this.opponentLevel, this.opponentXPValue, this.opponentGoldValue);
      },
      combatWon() {
          this.$emit('modifyPlayerStats', "xp", this.opponentXPValue, "+");
          this.$emit('modifyPlayerStats', "gold", this.opponentGoldValue, "+");
          this.playerVictory();
      },
  }
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