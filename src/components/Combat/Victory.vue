<template>
<div class="modified-screen col-12">
  <br><br><br><br><br>
  <div id="victory">
      <div id="victory-stats">
        <br>
        <span id="win-text">You Won!</span><br>
        <img id="death-image" v-bind:src="opponentDeathImage"><br>
        <span class="victory-text">You defeated a {{ opponentName }}</span><br>
        <span class="victory-text">You gain: </span><br>
        <span class="victory-text">{{ opponentXPGain }} XP</span><br>
        <span class="victory-text">{{ opponentGoldGain }} GP</span><br>
        <span class="victory-text">Remaining to next level:</span><br>
        <span class="victory-text">XP: {{ characterXP }} / {{ toLevel }}</span>
        <br><br>
      </div>
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
     
 }
 #death-image{
   background-size: cover;
     width: 180px;
     height: 150px;
     margin-left: auto;
     margin-right: auto;
 }
 #victory-stats{
  background-image: url("../../assets/images/Poster1.png");
     background-size: contain;
     background-position: center;
     background-repeat: no-repeat;
     width: 100%;
     padding: 70px;
     margin-left: auto;
     margin-right: auto;
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