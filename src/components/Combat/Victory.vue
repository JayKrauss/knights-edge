<template>
  <div id="victory" class="modified-screen">
      <br><br><br><br><br><br>
      <div id="victory-stats">
        <br>
        <h3>You Won!</h3>
        <h4>You defeated a {{ opponentName }} <br/> Level: {{ opponentLevel }}</h4>
        <h4>You gain: </h4>
        <h4>{{ opponentXPGain }} XP</h4>
        <h4>{{ opponentGoldGain }} GP</h4>
        <h4>Remaining to next level:</h4>
        <h4>XP: {{ characterXP }} / {{ toLevel }}</h4>
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
 #victory-stats{
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