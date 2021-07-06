<template>
  <div id="inventory" class="main-screen">
      <br><br>
      <span id='inventory-title'>INVENTORY</span>
      <ul id="gear-inventory-list"></ul>
      <ul @click="equipItem" id="loot-inventory-list"></ul>
  </div>
</template>

<script>
export default {
  name: "Inventory",
  props: [
    "currentInventoryObjects",
  ],
  methods: {
    buildInventories() {
      for (var i=0; i<this.currentInventoryObjects.length; i++){
        if (this.currentInventoryObjects[i].type == "gear"){
          let gearItem = `
            <li class="inventory-item">
              <span class='left-side-item'>${this.currentInventoryObjects[i].name}</span>
              <span class='right-side-item'>${this.currentInventoryObjects[i].amount}</span>
            </li>
          `
          document.getElementById("gear-inventory-list").innerHTML += gearItem 
        }
        else if (this.currentInventoryObjects[i].type == "equipment"){
          let lootItem = `
            <li class="inventory-item">
              <span class='left-side-item'>${this.currentInventoryObjects[i].name}</span>
              <button class="equip-button center-item" value="${this.currentInventoryObjects[i].id}">EQUIP</button>
              <span class='right-side-item'>${this.currentInventoryObjects[i].amount}</span>
            </li>
          `
          document.getElementById("loot-inventory-list").innerHTML += lootItem 
        }
          
      }
    },
    equipItem(e){
      if (e.target.matches('.equip-button')) {
        var itemID = e.target.value
        this.$emit('equipItem', itemID)
        console.log(itemID)
      }
    }
  },
  mounted(){
    this.buildInventories();
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
 #gear-inventory-list, #loot-inventory-list{
     width: 350px;
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
#gear-inventory-list::-webkit-scrollbar { width: 0 !important }
#loot-inventory-list::-webkit-scrollbar { width: 0 !important }
#inventory-title{
  width: 100%;
  font-size: 40px;
  color: white;
  background: rgba(0,0,0,.7);
  padding: 15px;
}
</style>