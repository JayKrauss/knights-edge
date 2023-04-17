<template>
  <div id="town-buttons" class="col-12">
      <button @click="openEquipment" class="town-button" >Equipment</button>
      <button @click="openInventory" class="town-button" >Inventory</button>
      <button @click="openShops" class="town-button" >Shops</button>
      <button @click="openAdventure" class="town-button" >Adventure</button>
  </div>
</template>

<script>
export default {
  name: "TownButtons",
  props: [],
  methods: {
    openEquipment() {
      this.$emit("openPane", "equipment")
    },
    openInventory() {
      this.$emit("openPane", "inventory")
    },
    openShops() {
      this.$emit("openPane", "shops")
    },
    openAdventure() {
      this.$emit("openPane", "adventure")
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
 #town-buttons{
     position: fixed;
     bottom:0;
     min-width: 100%;
     height: 70px;
     background: black;
     margin-left: auto;
     margin-right: auto;
     border-top: gray 3px solid;
     background: url("../../assets/images/concrete_wall.png");
     display: flex;
     align-items: center;
     justify-content: center;
 }
</style>