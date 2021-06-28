<template>
  <div id="inventory" class="main-screen">
      <br><br>
      <ul id="gear-inventory-list"></ul>
      <ul id="potion-inventory-list"></ul>
  </div>
</template>

<script>
export default {
  name: "Inventory",
  props: [
    "currentInventory",
  ],
  methods: {
    buildInventories() {
      for (var i=0; i<this.currentInventory.length; i++){
        if (this.currentInventory[i]["adventuringGear"]){
          document.getElementById("gear-inventory-list").append(this.currentInventory[i].gearList.gearList.adventuringGear["name"])
        }
        else if(this.currentInventory[i]["potions"]){
          document.getElementById("potions-inventory-list").append(this.currentInventory[i].gearList.gearList.potions["name"])
        }
      }
    }
  }
};



</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
 #inventory{
     background-image: url("../../assets/images/inventory.jpg");
     background-size: cover;
     background-position: center;
 }
 #inventory-list{
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

</style>