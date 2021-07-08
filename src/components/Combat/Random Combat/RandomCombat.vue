<template>
  <div id="random-combat" class="main-screen">
    <br>
    <div v-show="mounted">
    <div><span id="opponent-name">{{ opponentName }}</span></div><br>
    <div class="intro-text"><strong>{{ randomCombatText }}</strong></div>
    <br>
    <img id="combat-image" v-bind:src="opponentImage"><div id="attack-animation"></div><br>
    <span id="enemy-chat"><strong>{{ opponentSpeech }}</strong></span><br>
    <span id="enemy-hp-bar">HP: {{ opponentCurrentHP.toFixed(2) }} / {{ opponentMaxHP.toFixed(2) }}</span><br/><br/>
    <div id="status-pane">
    <span id="status-text">{{ statusText }}</span><br/>
    <span id="status-text2">{{ statusText2 }}</span><br/>
    </div>
    <button @click="playerAttack" class="shop-button" id="attackbutton">Attack</button>
    <button class="shop-button" disabled>Defend</button>
    <button @click="playerHeal" class="shop-button">Heal</button>
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
      "playerLevel",
      "opponent",
      "opponentImage",
      "opponentDeathImage",
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
      opponentSpeech : "",
      deathImage : "",
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
        this.opponentName = this.opponent.name;
        this.opponentLevel = this.opponent.level;
        this.opponentMaxHP = 7 * this.playerLevel;
        this.opponentCurrentHP = 7 * this.playerLevel;
        this.opponentDamage = ((1.5 * this.playerLevel) - (this.playerArmor / 100));
        this.opponentXPValue = 10 * this.playerLevel;
        this.opponentGoldValue = 2 * this.playerLevel;
        this.opponentSpeech = this.opponent.speech;
        this.randomCombatText = this.opponent.introduction;
        this.deathImage = this.opponentDeathImage;
        this.mounted = true;
      },
      // getImage(opponent){
      //   return require(opponent.image);
      // },
      playerAttack() {
        if (this.playerDamage > this.opponentCurrentHP){
          this.opponentCurrentHP = 0;
          this.combatWon();
        }
        else{
          this.attackAnimation()
          this.opponentCurrentHP -= this.playerDamage
          this.statusText = "";
          this.statusText += `You swing your weapon and do ${this.playerDamage.toFixed(2)} damage to ${this.opponentName}. `
          this.opponentAttack();
        }
      },
      playerDefend() {
          
      },
      attackAnimation(){
        document.getElementById("attackbutton").disabled = true;
        document.getElementById("attack-animation").style.display = "block";
        setTimeout(function(){
          document.getElementById("attackbutton").disabled = false;
          document.getElementById("attack-animation").style.display = "none";
          this.attacking = false;
        }, 1000);
      },
      opponentAttack() {
        this.statusText2 = "";
        this.statusText2 += `${this.opponentName} hits you for ${this.opponentDamage.toFixed(2)} damage.\n`
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
        this.$emit("playerVictory", this.opponentName, this.opponentLevel, this.opponentXPValue, this.opponentGoldValue, this.deathImage);
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
     background-image: url("../../../assets/images/game_background_3.png");
     background-size: cover;
 }
 .random-combat-text{
   color: white;
 }
 #opponent-name{
   color: white;
   font-size: 34px;
 }
 #attack-animation{
   background-image: url("../../../assets/images/ezgif.com-gif-maker (2).gif");
   background-size: cover;
   width: 200px;
   height: 200px;
   z-index: 100;
   position: absolute;
   top: 22%;
   left: 45%;
   display: none;
 }
 #combat-image{
    background-size: cover;
     width: 200px;
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
   font-size: 14px;
   font-weight: bold;
 }
</style>