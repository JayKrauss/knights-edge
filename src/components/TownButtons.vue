<template>
  <div id="town-buttons">
      <button @click="openEquipment">Equipment</button>
      <button @click="openInventory">Inventory</button>
      <button @click="openShops">Shops</button>
      <button @click="openAdventure">Adventure</button>
  </div>
</template>

<script>
export default {
  name: "TownButtons",
  props: [],
  methods: {
    openEquipment() {
      this.$emit("openEquipment")
    },
    openInventory() {
      this.$emit("openInventory")
    },
    openShops() {
      this.$emit("openShops")
    },
    openAdventure() {
      this.$emit("openAdventure")
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
 #town-buttons{
     bottom:0;
     width: 500px;
     height: 60px;
     background: black;
     margin-left: auto;
     margin-right: auto;
 }
 button{
     height: 40px;
     width: 105px;
     margin: 10px;
     color: white;
     border-radius: 5px;
     background: url("../assets/images/buttonStock1.png");
     background-size: inherit;
     background-position: center;
     background-repeat: no-repeat;
 }
</style>