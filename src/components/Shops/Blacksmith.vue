<template>
  <div id="blacksmith" class="main-screen">
    <br><br>
    <div class="shop-text"><strong>{{ blacksmithText }}</strong></div>
    <div id="blacksmith-image"></div><span id='blacksmith-greeting' class="shop-text">What brings you to my shop?</span>
  <div id='blacksmith-buttons'>
  <button class="shop-button">Buy</button>
  <button class="shop-button">Sell</button>
  <button class="shop-button">Work</button>
  </div>
  </div>
</template>

<script>
export default {
  name: "Blacksmith",
  props: [],
  data() {
    return{
      blacksmithText : "You enter a busy blacksmith shop. Around you is an array of weapons and tools across every wall and surface. Behind the counter, you can see the smith and his apprentices working a hot bar of steel, the smith barking orders as the others strike."
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#blacksmith{
  background-image: url("../../assets/images/blacksmithshop.jpg");
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
#blacksmith-image{
  width: 250px;
  height: 320px;
  margin-left: 10px;
  background-image: url('../../assets/images/npcimages/blacksmithidle.png');
  background-size: cover;
  background-position: center;
  animation: fadeIn 1.5s;
  -webkit-animation: fadeIn 1.5s;
  -moz-animation: fadeIn 1.5s;
  -o-animation: fadeIn 1.5s;
  -ms-animation: fadeIn 1.5s;
}
#blacksmith-greeting{
  z-index: 100;
  animation: fadeIn 1.5s;
  -webkit-animation: fadeIn 1.5s;
  -moz-animation: fadeIn 1.5s;
  -o-animation: fadeIn 1.5s;
  -ms-animation: fadeIn 1.5s;
}
#blacksmith-buttons{
  margin-top: 50px;
}
button{
  margin: 5px;
}
</style>