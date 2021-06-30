<template>
  <div id="general-store" class="main-screen">
    <br><br>
    <div class="shop-text"><strong>{{ generalStoreText }}</strong></div>
    <div id="generalstore-image"></div><span id='generalstore-greeting'>Welcome! Have a look around.</span>
    <div id='generalstore-buttons'>
    <button class="shop-button">Buy</button>
    <button class="shop-button">Sell</button>
    <button class="shop-button">Talk</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "GeneralStore",
  props: [],
  data(){
    return{
      generalStoreText : "You walk into the General Store. In boxes and crate, on shelves and hung from hooks are all manner of tools an equipment for every adventurer. Boxes of perserved rations and empty bottles stand next to stacks of health potions and climbing gear."
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
  color:black;
  font-weight: bold;
  position: absolute;
  top: 45%;
  right: 27%;
  background: white;
  padding: 10px;
  border-radius: 10px;
  animation: fadeIn 1.5s;
  -webkit-animation: fadeIn 1.5s;
  -moz-animation: fadeIn 1.5s;
  -o-animation: fadeIn 1.5s;
  -ms-animation: fadeIn 1.5s;
}
#generalstore-buttons{
  margin-top: 20px;
}
button{
  margin: 5px;
}
</style>