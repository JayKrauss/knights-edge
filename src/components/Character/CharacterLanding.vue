<template>
<div class="modified-screen col-12">
<br><br><br><br><br>
  <div id="character">
      <br><br><br><br>
      <div id="player-stats">
        <br>
        <span id="character-name">Name: {{ characterName }} </span><br/><br/>
        <span class='stat-span'>Level: {{ characterLevel }}</span><br/><br/>
        <span class='stat-span'>Strength: {{ characterStrength }}</span><br/><br/>
        <span class='stat-span'>Constitution: {{ characterConstitution }}</span><br/><br/>
        <span class='stat-span'>Dexterity: {{ characterDexterity }}</span><br/><br/>
        <span class='stat-span'>Charisma: {{ characterCharisma }}</span><br/><br/>
        <span class='stat-span'>Intellect: {{ characterIntellect }}</span><br/><br/>
        <span class='stat-span'>XP: {{ characterXP }} / {{ toLevel }}</span><br/><br/>
        <span class='stat-span'>Unassigned Attribute Points: {{ attributePoints }}</span><br/>

        <button @click="acceptCharacter" id="accept-character" class="shop-button">Get Going!</button>
      </div>
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
    acceptCharacter() {
        console.log("clicked")
        this.$emit(
            'generateQuest', 
            'Welcome Wagon', 
            'sqsqww001',
            'Welcome to town! Welcome to town! You should check out your inventory- we left you a few gifts!',
            [{ name: "Leather Vest", amount : 1 }, { name : "Leather Gloves", amount : 1 }, { name : "Leather Boots", amount : 1}, { name : "Iron Dagger", amount : 1 }, { name : "Starting Gear" , amount : 1 }]
            )
    }
  }
};

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
 #character{
     background-image: url("../../assets/images/Poster5.png");
     background-size: cover;
     background-position: center;
     min-height: 600px;
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
 #character-name{
   font-size: 30px;
   font-weight: bold;
 }
 #inventory-item{
     background: gray;
 }
.stat-span{
  font-size: 14px;
  font-weight: bold;
  margin-bottom: 10px;
}
</style>