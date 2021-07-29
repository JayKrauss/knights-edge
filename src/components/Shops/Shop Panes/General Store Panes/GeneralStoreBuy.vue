<template>
  <div id="general-store-buy" class="main-screen col-12">
    <br>
    <ul @click="buyItem" id="gear-shop-list"></ul>
    <div id="generalstorebuy-image"></div><span id='generalstorebuy-greeting' class="shop-text">Heres what I've got.</span>
    <div id="coin-spin"></div>
  </div>
</template>

<script>
export default {
  name: "GeneralStoreBuy",
  props: [
      "generalStoreInventoryObjects"
  ],
  data(){
    return{
      generalStoreText : "You walk into the General Store. In boxes and crate, on shelves and hung from hooks are all manner of tools an equipment for every adventurer. Boxes of perserved rations and empty bottles stand next to stacks of health potions and climbing gear."
    }
  },
  methods: {
      buildInventory() {
        for (var i=0; i<this.generalStoreInventoryObjects.length; i++){
            let gearItem = `
                <li class="inventory-item">
                <span class='left-side-item'>${this.generalStoreInventoryObjects[i].name}</span>
                <span class='center-item'>${this.generalStoreInventoryObjects[i].value}GP</span>
                <button class="buy-button right-side-item" value="${this.generalStoreInventoryObjects[i].id}">Buy</button>
                </li>
            `
            document.getElementById("gear-shop-list").innerHTML += gearItem     
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
      setTimeout(function() { coin.classList.remove('show'); }, 500);
    }
  },
  mounted(){
        this.buildInventory();
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#general-store-buy{
     background-image: url("../../../../assets/images/generalstore.png");
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
#generalstorebuy-image{
  margin-top: 30px;
  width: 250px;
  height: 250px;
  background-image: url('../../../../assets/images/npcimages/storekeeperidle.png');
  background-size: cover;
  background-position: center;
  animation: fadeIn 1.5s;
  -webkit-animation: fadeIn 1.5s;
  -moz-animation: fadeIn 1.5s;
  -o-animation: fadeIn= 1.5s;
  -ms-animation: fadeIn 1.5s;
}
#generalstorebuy-greeting{
 z-index: 100;
  animation: fadeIn 1.5s;
  -webkit-animation: fadeIn 1.5s;
  -moz-animation: fadeIn 1.5s;
  -o-animation: fadeIn 1.5s;
  -ms-animation: fadeIn 1.5s;
}
 #gear-shop-list{
     width: 400px;
     height: 250px;
     overflow-y: scroll; 
     margin-left: auto;
     margin-right: auto;
     background: rgba(0,0,0,.7);
     color: white;
     list-style: none;
     padding: 5px;
     border: solid gray 5px;
 }
#gear-shop-list::-webkit-scrollbar { width: 0 !important }
#inventory-title{
  width: 100%;
  font-size: 40px;
  color: white;
  background: rgba(0,0,0,.7);
  padding: 15px;
}
#generalstorebuy-buttons{
  margin-top: 20px;
}
button{
  margin: 5px;
}
</style>