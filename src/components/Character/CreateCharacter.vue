<template>
<div id="create-background">
<br><br><br>
  <div id="character" class="modified-screen">
      <br><br><br><br><br><br><br>
      <div id="character-create">

        <span id="welcome">Welcome!</span><br>
        <span class="welcome-text">This is the start of a great journey, but like any great journey, it starts simple.</span><br><br>
        <span class="welcome-text">Tell us your name.</span><br><br>
        <input type="text" id="name-input"><br><br>
        <span class="welcome-text">What did you do before coming to town?</span><br><br>
        <form id="way-selection">
            <select id="jobs">
                <option value="strength">I was a Blacksmith</option>
                <option value="constitution">I was a Stonemason</option>
                <option value="dexterity">I was a Thief</option>
                <option value="charisma">I was a Merchant</option>
                <option value="intellect">I was a Teacher</option>
            </select>
        </form>
        <button @click="giveCharacterStats" class="shop-button">Begin</button><br>
        <span class="welcome-text">Already in town?</span><br>
        <button @click="openLogIn" class="shop-button">Sign in.</button>
        <br><br>
      </div>
      <br><br>
  </div>
</div>
</template>

<script>
export default {
  name: "CharacterCreate",
  props: [ ],
  data() {
      return {
          characterName : "",
          characterLevel : 1,
          characterXP : 0,
          characterStrength : 5,
          characterConstitution : 4,
          characterDexterity : 3,
          characterCharisma : 4,
          characterIntellect : 3,
          attributePoints : 0,
          primaryStat : "",
      }
  },
  methods: {
      createCharacter() {
          this.$emit(
              'createCharacter', 
              this.characterName, 
              this.characterLevel, 
              this.characterXP, 
              this.characterStrength, 
              this.characterConstitution,
              this.characterDexterity,
              this.characterCharisma,
              this.characterIntellect,
              this.attributePoints,
            )
      },

      giveCharacterStats(){
        this.characterName = document.getElementById("name-input").value;
        this.characterStrength = 3, 
        this.characterConstitution = 3,
        this.characterDexterity = 3,
        this.characterCharisma = 3,
        this.characterIntellect = 3,
        this.primaryStat = document.getElementById("jobs").value;

        switch (this.primaryStat){
            case "strength":
                this.characterStrength += 3;
                this.characterConstitution += 2;
                break;
            case "constitution":
                this.characterConstitution += 3;
                this.characterStrength += 2;
                break;
            case "dexterity":
                this.characterDexterity += 3;
                this.characterCharisma += 2;
                break;
            case "charisma":
                this.characterCharisma += 3;
                this.characterIntellect += 2;
                break;
            case "intellect":
                this.characterIntellect += 3;
                this.characterCharisma += 2;
                break;
            default:
                console.log("You broke it again!")
                break;
        }
        this.createCharacter();
      },
      openLogIn() {
          this.$emit('openPane', "login");
      }
  }
};

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
 #character{
     background-image: url("../../assets/images/Poster1.png");
     background-size: 88%;
     background-repeat: no-repeat;
     background-position: center;
     margin-bottom: 100px;
 }
 #character-create{
     background-image: url("../../assets/images/staticbackground.png");
     width: 300px;
     min-height: 200px;
     margin-left: auto;
     margin-right: auto;
     padding: 20px;
     background: rgba(0,0,0,.7);
     color: white;
     list-style: none;
     justify-content: space-evenly;
 }
 #welcome{
     font-size: 40px;
     font-weight: bold;
 }
 .welcome-text{
     font-size: 18px;
 }
 #jobs {
     width: 250px;
     font-size: 14px;
     justify-content: center;
 }
 #inventory-item{
     background: gray;
 }
 #level-up:disabled{
     opacity: .5;
 }

</style>