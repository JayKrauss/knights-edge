<template>
  <div id="blacksmith-buy" class="main-screen col-12">
    <br>
    <ul @click="buyItem" id="blacksmith-shop-list"></ul>
    <div id="blacksmithbuy-image"></div><span id='blacksmithbuy-greeting' class="shop-text">Heres what I've got.</span>
    <div id="coin-spin"></div>
  </div>
</template>

<script>
export default {
  name: "BlacksmithBuy",
  props: [
      "blacksmithInventoryObjects"
  ],
  data(){
    return{

    }
  },
  methods: {
      buildInventory() {
        for (var i=0; i<this.blacksmithInventoryObjects.length; i++){
          var itemAttr;
          if (this.blacksmithInventoryObjects[i].slot == "mainhand"){
            itemAttr = this.blacksmithInventoryObjects[i].damage + " dmg"
          }
          else if (this.currentInventoryObjects[i].slot == "neck"){
            itemAttr = this.blacksmithInventoryObjects[i].health + " hp"
          }
          else{
            itemAttr = this.blacksmithInventoryObjects[i].armor + " ac"
          }
            let gearItem = `
                <li class="inventory-item">
                <span class='left-side-item'>${this.blacksmithInventoryObjects[i].name}</span>
                <span class='right-side-item'>${this.blacksmithInventoryObjects[i].value}GP</span>
                <span class='center-item'>${itemAttr}</span>
                <button class="buy-button right-side-item" value="${this.blacksmithInventoryObjects[i].id}">Buy</button>
                </li>
            `
            document.getElementById("blacksmith-shop-list").innerHTML += gearItem     
        }
    },
    buyItem(e){
      if (e.target.matches('.buy-button')) {
        this.coinSpin();
        var itemID = e.target.value
        this.$emit('buyItem', itemID)
        console.log("Purchasing " + itemID)
      }
    },
    coinSpin(){
      var coin = document.getElementById("coin-spin");
      coin.classList.add('show');
      setTimeout(function() { coin.classList.remove('show'); }, 250);
    }
  },
  mounted(){
        this.buildInventory();
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#blacksmith-buy{
     background-image: url("../../../../assets/images/blacksmithshop.jpg");
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
#blacksmithbuy-image{
  margin-top: 30px;
  width: 250px;
  height: 250px;
  background-image: url('../../../../assets/images/npcimages/blacksmithidle.png');
  background-size: cover;
  background-position: center;
  animation: fadeIn 1.5s;
  -webkit-animation: fadeIn 1.5s;
  -moz-animation: fadeIn 1.5s;
  -o-animation: fadeIn= 1.5s;
  -ms-animation: fadeIn 1.5s;
}
#blacksmithbuy-greeting{
 z-index: 100;
  animation: fadeIn 1.5s;
  -webkit-animation: fadeIn 1.5s;
  -moz-animation: fadeIn 1.5s;
  -o-animation: fadeIn 1.5s;
  -ms-animation: fadeIn 1.5s;
}
 #blacksmith-shop-list{
     width: 400px;
     height: 50%;
     overflow-y: scroll; 
     margin-left: auto;
     margin-right: auto;
     background: rgba(0,0,0,.7);
     color: white;
     list-style: none;
     padding: 5px;
     border: solid gray 5px;
 }
#blacksmith-shop-list::-webkit-scrollbar { width: 0 !important }
#inventory-title{
  width: 100%;
  font-size: 40px;
  color: white;
  background: rgba(0,0,0,.7);
  padding: 15px;
}
#blacksmithbuy-buttons{
  margin-top: 20px;
}
button{
  margin: 5px;
}
</style>