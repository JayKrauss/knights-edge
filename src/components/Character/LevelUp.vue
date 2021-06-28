<template>
  <div id="level-up" class="main-screen">
      <br><br><br><br>
      <div id="player-stats">
        <br>
        <h3>Name: {{ characterName }} </h3> 
        <span class='stat-span'>Strength: {{ characterStrength }} <button @click="addStr" id="str-plus" class="level-up-button">+</button></span><br/>
        <span class='stat-span'>Constitution: {{ characterConstitution }} <button @click="addCon" id="con-plus" class="level-up-button">+</button></span><br/>
        <span class='stat-span'>Dexterity: {{ characterDexterity }} <button @click="addDex" id="dex-plus" class="level-up-button">+</button></span><br/>
        <span class='stat-span'>Charisma: {{ characterCharisma }} <button @click="addChr" id="chr-plus" class="level-up-button">+</button></span><br/>
        <span class='stat-span'>Intellect: {{ characterIntellect }} <button @click="addInt" id="int-plus" class="level-up-button">+</button></span><br/>
        <br>
        <span class='stat-span'>Unassigned Attribute Points: {{ attributePoints }}</span>
        <button @click="commitPoints" id="commit" class="shop-button">Commit</button>
      </div>
  </div>
</template>

<script>
export default {
  name: "LevelUp",
  props: [
    "characterName",
    "characterStrength",
    "characterConstitution",
    "characterDexterity",
    "characterCharisma",
    "characterIntellect",
    "attributePoints",
  ],
  data() {
    return {
     pointsSpent : 0,
    }
  },
  methods: {
      commitPoints() {
          if (this.attributePoints > 0){
            alert("You must assign all of your attribute points to continue.")
          }
          else{
            this.$emit('updateStats', this.pointsSpent);
            this.$emit('openPane', 'character');
          }
      },
      addStats(stat) {
            console.log(stat)
          if (this.attributePoints > 0){
              this.$emit('modifyPlayerStats', 'attributePoints', 1, '-');
              this.$emit('modifyPlayerStats', stat, 1, '+');
              this.pointsSpent++;
          }
          else{
              alert("You are out of attribute points. Please commit your changes.")
          }
      },
      addStr(){
          this.addStats("strength");
      },
      addCon(){
          this.addStats("constitution");
      },
      addDex(){
          this.addStats("dexterity");
      },
      addChr(){
          this.addStats("charisma");
      },
      addInt(){
          this.addStats("intellect");
      },
  }
};

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
 #level-up{
     background-image: url("../../assets/images/characterparchment.jpg");
     background-size: cover;
     background-position: center;
 }
 #player-stats{
     width: 300px;
     min-height: 200px;
     margin-left: auto;
     margin-right: auto;
     padding: 10px;
     background: rgba(0,0,0,.7);
     color: white;
     list-style: none;
     justify-content: space-evenly;
 }
 #inventory-item{
     background: gray;
 }
 #level-up:disabled{
     opacity: .5;
 }
.stat-span{
  display: flex;
  width: 290px;
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 5px;
  justify-content: space-between;
}
</style>