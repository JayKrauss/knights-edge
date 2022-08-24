<template>
  <div id="character" class="modified-screen col-12">
      <br><br><br><br><br>
      <div id="player-stats">
        <br>
        <h3>Name: {{ characterName }} </h3> 
        <span class='stat-span'>Level: {{ characterLevel }}</span><br/><br/>
        <span class='stat-span'>Strength: {{ characterStrength }}</span><br/><br/>
        <span class='stat-span'>Constitution: {{ characterConstitution }}</span><br/><br/>
        <span class='stat-span'>Dexterity: {{ characterDexterity }}</span><br/><br/>
        <span class='stat-span'>Charisma: {{ characterCharisma }}</span><br/><br/>
        <span class='stat-span'>Intellect: {{ characterIntellect }}</span><br/><br/>
        <span class='stat-span'>XP: {{ characterXP }} / {{ toLevel }}</span><br/><br/>
        <span class='stat-span'>Unassigned Attribute Points: {{ attributePoints }}</span><br/><br/>
        <button v-if="attributePoints>0" @click="levelUp" id="level-up" class="shop-button">Level Up</button>
      </div>
  </div>
</template>

<script>
export default {
  name: "Character",
  props: [
    "characterName",
    "characterLevel",
    "characterStrength",
    "characterConstitution",
    "characterDexterity",
    "characterCharisma",
    "characterIntellect",
    "characterXP",
    "toLevel",
    "attributePoints",
  ],
  data() {
    return {
     
    }
  },
  methods: {
    levelUp() {
      this.$emit('openPane', 'levelUp');
    }
  }
};

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
 #player-stats{
     margin-left: auto;
     margin-right: auto;
     color: white;
     list-style: none;
     background-image: url("../../assets/images/Poster6.png");
     background-size:cover;
  }
 #inventory-item{
     background: gray;
 }
 #level-up:disabled{
     opacity: .5;
 }
.stat-span{
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;
}
</style>