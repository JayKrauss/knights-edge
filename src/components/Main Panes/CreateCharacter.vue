<template>
  <div id="character" class="main-screen">
      <br><br><br><br>
      <div id="character-create">
        <br>
        <h3>Welcome!</h3>
        <h4>This is the start of a great journey, but like any great journey, it starts simple.</h4>
        <h4>Tell us your name.</h4>
        <input type="text" id="name-input"><br>
        <h4>What did you do before coming to town?</h4>
        <form id="way-selection">
            <select id="jobs">
                <option value="strength">I was a Blacksmith</option>
                <option value="constitution">I was a Stonemason</option>
                <option value="dexterity">I was a Thief</option>
                <option value="charisma">I was a Merchant</option>
                <option value="intellect">I was a Teacher</option>
            </select>
        </form>
        <button @click="giveCharacterStats" class="character-button">Begin</button>
        <button @click="openLogIn" class="character-button">Already in Town? Sign in.</button>
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
     background-image: url("../../assets/images/characterparchment.jpg");
     background-size: cover;
     background-position: center;
 }
 #character-create{
     width: 300px;
     min-height: 200px;
     margin-left: auto;
     margin-right: auto;
     background: rgba(0,0,0,.7);
     color: white;
     list-style: none;
     justify-content: space-evenly;
 }
 .character-button{
    height: 35px;
    width: 145px;
    margin: 20px;
    margin-top: 20px;
    margin-bottom: 10px;
    color: black;
    font-weight: bold;
    border-radius: 5px;
    background: url("../../assets/images/ravenna.png");
    background-size: inherit;
    background-position: center;
    background-repeat: no-repeat;
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