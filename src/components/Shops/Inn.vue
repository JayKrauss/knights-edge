<template>
  <div id="inn" class="main-screen col-12">
    <br><br>
    <div class="shop-text"><strong>{{ innText }}</strong></div>
    <div id="innkeeper-image"></div><span id='innkeeper-greeting' class="shop-text">Food? Drink? Or a place to rest?</span>
    <div id='inn-buttons'>
      <button @click="restUp" class="shop-button">Rest</button>
      <button class="shop-button" disabled>Drink</button>
      <button class="shop-button" disabled>Quests</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Inn",
  props: [
    "playerLevel",
    "playerHealth",
    "playerMaxHealth"
  ],
  data(){
    return{
      innText : "You open the front door to a blast of music and voices. The main floor of the inn serves as a bar and restaurant to travellers and townsfolk alike. Rooms are available upstairs for rent. A quest board stands against a far wall with fliers for jobs that need to be done."
    }
  },
  methods: {
    restUp(){
      console.log(this.playerHealth)
      if (this.playerHealth < this.playerMaxHealth){
        this.$emit('modifyPlayerStats', "gold", (this.playerLevel * 1), "-");
        this.$emit('healToFull');
      }
      else{
        alert("You are already at full health.")
      }
      
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
 #inn{
     background-image: url("../../assets/images/inn.jpg");
     background-size: cover;
 }
 @keyframes fadeIn {
  0% {opacity:0;}
  100% {opacity:1;}
}

@-moz-keyframes fadeIn {
  0% {opacity:0;}
  100% {opacity:1;}
}

@-webkit-keyframes fadeIn {
  0% {opacity:0;}
  100% {opacity:1;}
}
#innkeeper-image{
  width: 250px;
  height: 250px;
  margin-left: 10px;
  margin-bottom: 10px;
  background-image: url('../../assets/images/npcimages/innkeeperidle.png');
  background-size: cover;
  background-position: center;
  animation: fadeIn 1.5s;
  -webkit-animation: fadeIn 1.5s;
  -moz-animation: fadeIn 1.5s;
  -o-animation: fadeIn 1.5s;
  -ms-animation: fadeIn 1.5s;
}
#innkeeper-greeting{
 z-index: 100;
  animation: fadeIn 1.5s;
  -webkit-animation: fadeIn 1.5s;
  -moz-animation: fadeIn 1.5s;
  -o-animation: fadeIn 1.5s;
  -ms-animation: fadeIn 1.5s;
}
button{
  margin: 5px;
}
</style>