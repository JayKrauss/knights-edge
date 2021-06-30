<template>
  <div id="inventory" class="main-screen">
      <br><br>
      <span id='inventory-title'>INVENTORY</span>
      <ul id="inventory-list"></ul>
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
        let item = `<li class="inventory-item">${this.currentInventoryObjects[i].name} - ${this.currentInventoryObjects[i].amount} </li>`
          document.getElementById("inventory-list").innerHTML += item 
      }
    },
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
 #inventory-list{
     width: 300px;
     min-height: 200px;
     margin-left: auto;
     margin-right: auto;
     padding-top: 40px;
     background: rgba(0,0,0,.7);
     color: white;
     list-style: none;
     justify-content: space-evenly;
 }
#inventory-title{
  width: 100%;
  font-size: 40px;
  color: white;
  background: rgba(0,0,0,.7);
  padding: 15px;
}
</style>