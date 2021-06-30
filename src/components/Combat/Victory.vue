<template>
  <div id="victory" class="modified-screen">
      <br><br><br><br><br>
      <div id="victory-stats">
        <br>
        <span id="win-text">You Won!</span><br>
        <img id="death-image" v-bind:src="opponentDeathImage"><br>
        <span class="victory-text">You defeated a {{ opponentName }}</span><br><br>
        <span class="victory-text">You gain: </span><br><br>
        <span class="victory-text">{{ opponentXPGain }} XP</span><br>
        <span class="victory-text">{{ opponentGoldGain }} GP</span><br><br>
        <span class="victory-text">Remaining to next level:</span><br><br>
        <span class="victory-text">XP: {{ characterXP }} / {{ toLevel }}</span>
        <br><br>
      </div>
  </div>
</template>

<script>
export default {
  name: "Victory",
  props: [
    "opponentName",
    "opponentLevel",
    "opponentXPGain",
    "opponentGoldGain",
    "characterXP",
    "toLevel",
    "opponentDeathImage",
  ],
  unmounted(){
    this.$emit('checkLevel')
  }
};

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
 #victory{
     background-image: url("../../assets/images/Poster4.png");
     background-size: 110%;
     background-position: center;
     background-repeat: no-repeat;
 }
 #death-image{
   background-size: cover;
     width: 250px;
     height: 150px;
     margin-left: auto;
     margin-right: auto;
 }
 #victory-stats{
     width: 380px;
     min-height: 200px;
     margin-left: auto;
     margin-right: auto;
     background: rgba(0,0,0,.7);
     color: white;
     list-style: none;
     justify-content: space-evenly;
 }
 #win-text{
   font-size: 20px;
   font-weight: bold;
 }
 .victory-text{
   font-size: 18px;
 }
 #inventory-item{
     background: gray;
 }
 #level-up:disabled{
     opacity: .5;
 }

</style>