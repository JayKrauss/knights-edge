<template>
  <div id="random-combat" class="main-screen">
    <br><br>
    <div v-if="mounted">
    <div class="random-combat-text"><strong>{{ randomCombatText }}</strong></div>
    <br>
    <img id="combat-image" src="../../../assets/images/rodentofsize.png"><br>
    <span id="enemy-chat"><strong>"What the fu- I mean.. Squeak?"</strong></span>
    <h5 id="enemy-hp-bar">HP: {{ opponentCurrentHP }} / {{ opponentMaxHP }}</h5>
    <button @click="playerAttack" class="shop-button">Attack</button>
    <button class="shop-button">Defend</button>
    <button @click="playerHeal" class="shop-button">Heal</button>
    </div>
    <div v-else>
      <h4>Kicking grass..</h4>
    </div>

  </div>
</template>

<script>
import standardEnemies from "../../../datafiles/enemies/standardEnemies.js"

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
      mounted : false,
      randomCombatText : "",
      opponentName : "",
      opponentLevel : 0,
      opponentMaxHP : 0,
      opponentCurrentHP : 0,
      opponentDamage : 0,
      opponentXPValue : 0,
      opponentGoldValue : 0,
    }
  },
  mounted(){
    this.generateOpponent();
  },
  methods: {
      generateOpponent(){
        this.opponentName = standardEnemies.standardEnemies.forestEnemies.forestRodent.name;
        this.opponentLevel = standardEnemies.standardEnemies.forestEnemies.forestRodent.level;
        this.opponentMaxHP = standardEnemies.standardEnemies.forestEnemies.forestRodent.maxHP;
        this.opponentCurrentHP = standardEnemies.standardEnemies.forestEnemies.forestRodent.maxHP;
        this.opponentDamage = standardEnemies.standardEnemies.forestEnemies.forestRodent.attack;
        this.opponentXPValue = standardEnemies.standardEnemies.forestEnemies.forestRodent.xpValue;
        this.opponentGoldValue = standardEnemies.standardEnemies.forestEnemies.forestRodent.goldValue;
        this.randomCombatText = standardEnemies.standardEnemies.forestEnemies.forestRodent.introduction;
        this.mounted = true;
      },
      playerAttack() {
        if (this.playerDamage > this.opponentCurrentHP){
          this.opponentCurrentHP = 0;
          this.combatWon();
        }
        else{
          this.opponentCurrentHP -= this.playerDamage
          this.opponentAttack();
        }
      },
      playerDefend() {
          
      },
      opponentAttack() {
        this.$emit('modifyPlayerStats', "health", this.opponentDamage, "-");
      },
      playerHeal() {
        this.$emit('modifyPlayerStats', "health", 5, "+");
      },
      playerVictory() {
        this.$emit("playerVictory", this.opponentName, this.opponentLevel, this.opponentXPValue, this.opponentGoldValue);
        this.opponentAttack();
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