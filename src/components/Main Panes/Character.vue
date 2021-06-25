<template>
  <div id="character" class="main-screen">
      <br><br><br><br>
      <div id="player-stats">
        <br>
        <h4>Name: {{ characterName }} - Level: {{ characterLevel }}</h4>
        <h4>Strength: {{ characterStrength }}</h4>
        <h4>Constitution: {{ characterConstitution }}</h4>
        <h4>Dexterity: {{ characterDexterity }}</h4>
        <h4>Charisma: {{ characterCharisma }}</h4>
        <h4>Intellect: {{ characterIntellect }}</h4>
        <h4>XP: {{ characterXP }} / {{ toLevel }}</h4>
        <button id="level-up" class="shop-button" disabled>Level Up</button>
        <br><br>
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
  ] 
};

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
 #character{
     background-image: url("../../assets/images/characterparchment.jpg");
     background-size: cover;
     background-position: center;
 }
 #player-stats{
     width: 300px;
     min-height: 200px;
     margin-left: auto;
     margin-right: auto;
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

</style>