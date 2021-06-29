<template>
  <div id="random-combat" class="main-screen">
    <br><br>
    <div v-if="mounted">
    <div class="random-combat-text"><strong>{{ randomCombatText }}</strong></div>
    <br>
    <img id="combat-image" src="../../../assets/images/rodentofsize.png"><br>
    <span id="enemy-chat"><strong>{{ randomCombatText }}</strong></span><br>
    <span id="enemy-hp-bar">HP: {{ opponentCurrentHP.toFixed(2) }} / {{ opponentMaxHP.toFixed(2) }}</span><br/><br/>
    <div id="status-pane">
    <span id="status-text">{{ statusText }}</span><br/>
    <span id="status-text2">{{ statusText2 }}</span><br/>
    </div>
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
      statusText : "",
      statusText2 : "",
    }
  },
  mounted(){
    console.table(standardEnemies)
    this.generateOpponent();
  },
  methods: {
      generateOpponent(){
        this.opponentName = standardEnemies.standardEnemies[0].name;
        this.opponentLevel = standardEnemies.standardEnemies[0].level;
        this.opponentMaxHP = standardEnemies.standardEnemies[0].maxHP;
        this.opponentCurrentHP = standardEnemies.standardEnemies[0].maxHP;
        this.opponentDamage = standardEnemies.standardEnemies[0].attack;
        this.opponentXPValue = standardEnemies.standardEnemies[0].xpValue;
        this.opponentGoldValue = standardEnemies.standardEnemies[0].goldValue;
        this.randomCombatText = standardEnemies.standardEnemies[0].introduction;
        this.mounted = true;
      },
      playerAttack() {
        if (this.playerDamage > this.opponentCurrentHP){
          this.opponentCurrentHP = 0;
          this.combatWon();
        }
        else{
          this.opponentCurrentHP -= this.playerDamage
          this.statusText = "";
          this.statusText += `You swing your weapon and do ${this.playerDamage} damage to ${this.opponentName}. `
          this.opponentAttack();
        }
      },
      playerDefend() {
          
      },
      opponentAttack() {
        this.statusText2 = "";
        this.statusText2 += `${this.opponentName} hits you for ${this.opponentDamage} damage.\n`
        this.$emit('modifyPlayerStats', "health", this.opponentDamage, "-");
      },
      playerHeal() {
        if (this.playerCurrentHP < this.playerMaxHP){
          if ((this.playerCurrentHP + 5) <= this.playerMaxHP){
            this.$emit('modifyPlayerStats', "health", 5, "+");
          }
          else {
            this.$emit('healToFull');
          }
        }
        else {
          alert("You cannot heal above maximum.")
        }
        
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
    font-size: 18px;
    color: darkblue;
 }
 #enemy-hp-bar{
     color: red;
     font-size: 18px;
     font-weight: bold;
 }
 #status-pane{
   background: rgba(0,0,0,.5);
   color: white;
   font-weight: bold;
 }
</style>