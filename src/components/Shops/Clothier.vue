<template>
  <div id="clothier" class="main-screen col-12">
    <br><br>
    <div class="shop-text"><strong>{{ clothierText }}</strong></div>
    <div id="clothier-image"></div><span id='clothier-greeting' class="shop-text">Greetings. Buy something.</span>
    <div id='clothier-buttons'>
      <button @click="openBuy" class="shop-button">Buy</button>
      <button @click="openSell" class="shop-button">Sell</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Clothier",
  props: [],
  data(){
    return{
      clothierText : "You enter the Clothier shop. All over the large room are mannequins displaying an assortment of clothing and armor sets for all occations. The shop owner can be seen fitting a customer for a set of leather armor."
    }
  },
  methods: {
    openBuy() {
      this.$emit('openPane', 'clothierBuy');
    },
    openSell() {
      this.$emit('openPane', 'clothierSell');
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#clothier{
     background-image: url("../../assets/images/clothier.jpg");
     background-size: cover;
}
#clothier-text{
  background: rgba(0,0,0,.6);
  padding: 20px;
  color: white;
  text-align: center;
  font-size: 16px;
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
#clothier-image{
  margin-top: 30px;
  width: 250px;
  height: 320px;
  margin-left: 10px;
  background-image: url('../../assets/images/npcimages/clothieridle.png');
  background-size: cover;
  background-position: center;
  animation: fadeIn 1.5s;
  -webkit-animation: fadeIn 1.5s;
  -moz-animation: fadeIn 1.5s;
  -o-animation: fadeIn 1.5s;
  -ms-animation: fadeIn 1.5s;
}
#clothier-greeting{
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