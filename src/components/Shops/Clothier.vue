<template>
  <div id="clothier" class="main-screen">
    <br><br><br>
    <div class="shop-text"><strong>{{ clothierText }}</strong></div>
    <br><br>
    <button class="shop-button">Buy</button>
    <button class="shop-button">Sell</button>
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
  text-size: 16px;
}
button{
     height: 50px;
     width: 145px;
     margin: 30px;
     color: black;
     font-weight: bold;
     border-radius: 5px;
     background: url("../../assets/images/ravenna.png");
     background-size: inherit;
     background-position: center;
     background-repeat: no-repeat;
}
</style>