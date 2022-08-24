<template>
  <div id="general-store" class="main-screen col-12">
    <br><br>
    <div class="shop-text"><strong>{{ generalStoreText }}</strong></div>
    <div id="generalstore-image"></div><span id='generalstore-greeting' class="shop-text">Welcome! Have a look around.</span>
    <div id='generalstore-buttons'>
    <button @click="openBuy" class="shop-button">Buy</button>
    <button @click="openSell" class="shop-button">Sell</button>
    <button class="shop-button" disabled>Talk</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "GeneralStore",
  props: [],
  data(){
    return{
      generalStoreText : "You walk into the General Store. In boxes and crates, on shelves and hung from hooks are all manner of tools an equipment for an adventurer."
    }
  },
  methods: {
    openBuy(){
      this.$emit('openPane', 'generalStoreBuy')
    },
    openSell(){
      this.$emit('openPane', 'generalStoreSell')
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#general-store{
     background-image: url("../../assets/images/generalstore.png");
     background-size: cover;
}
#generalstore-text{
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
#generalstore-image{
  margin-top: 30px;
  width: 250px;
  height: 320px;
  background-image: url('../../assets/images/npcimages/storekeeperidle.png');
  background-size: cover;
  background-position: center;
  animation: fadeIn 1.5s;
  -webkit-animation: fadeIn 1.5s;
  -moz-animation: fadeIn 1.5s;
  -o-animation: fadeIn= 1.5s;
  -ms-animation: fadeIn 1.5s;
}
#generalstore-greeting{
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