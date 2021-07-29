<template>
  <div id="blacksmith-store-sell" class="main-screen col-12">
    <br>
    <ul @click="sellItem" id="gear-shop-list"></ul>
    <div id="blacksmithsell-image"></div><span id='blacksmithsell-greeting' class="shop-text">What can I do for you?</span>
    <div id="coin-spin"></div>
  </div>
</template>

<script>
export default {
  name: "BlacksmithSell",
  props: [
      "currentInventoryObjects",
      "currentInventoryIDs"
  ],
  watch: { 
    currentInventoryObjects: function() { 
        this.buildInventory()
    }
  },
  data(){
    return{

    }
  },
  methods: {
      buildInventory() {
        document.getElementById("gear-shop-list").innerHTML = "";
        for (var i=0; i<this.currentInventoryObjects.length; i++){
            var matchingID;
            for(var q=0; q<this.currentInventoryIDs.length; q++){
                if (this.currentInventoryObjects[i].id == this.currentInventoryIDs[q][0]){
                    matchingID = this.currentInventoryIDs[q]
                }
            }
            if (matchingID[1] > 0){
                if (this.currentInventoryObjects[i].type == "equipment" && this.currentInventoryObjects[i].slot == "mainhand" || this.currentInventoryObjects[i].slot == "offhand"){
                    let gearItem = `
                    <li class="inventory-item" :key="${this.currentInventoryObjects}">
                    <span class='left-side-item'>${this.currentInventoryObjects[i].name}</span>
                    <button class="sell-button right-side-item" value="${this.currentInventoryObjects[i].id}">Sell</button>
                    <span class='center-item'>${(this.currentInventoryObjects[i].value / 2).toFixed(2)}GP</span>
                    <span class='center-item'>${matchingID[1]}</span>                
                    </li>
                    `
                    document.getElementById("gear-shop-list").innerHTML += gearItem   
                }
            }   
        }
    },
    sellItem(e){
      if (e.target.matches('.sell-button')) {
        this.coinSpin();
        var itemID = e.target.value;
        this.$emit('sellGear', itemID);
        this.$emit('openPane', 'blacksmithSell');
        this.buildInventory();
      }
    },
    coinSpin(){
      var coin = document.getElementById("coin-spin");
      coin.classList.add('show');
      setTimeout(function() { coin.classList.remove('show'); }, 250);
    },

  },
  mounted(){
        this.buildInventory();
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#blacksmith-store-sell{
     background-image: url("../../../../assets/images/blacksmithshop.jpg");
     background-size: cover;
}
#blacksmith-text{
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
#blacksmithsell-image{
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
#blacksmithsell-greeting{
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
#blacksmithsell-buttons{
  margin-top: 20px;
}
button{
  margin: 5px;
}
</style>