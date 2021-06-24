<template>
  <StatusBar :level="this.level" :xp="this.xp" :toLevel="this.toLevel" :gold="this.gold" :currentHP="this.currentHP" :maxHP="this.maxHP"/>
  <div v-if="shops"><Shops /></div>
  <div v-if="equipment"><Equipment /></div>
  <div v-if="inventory" :currentInventory="this.currentInventory"><Inventory /></div>
  <div v-if="adventure"><Adventure /></div>
  <TownButtons @openEquipment="openEquipment" @openInventory="openInventory" @openShops="openShops" @openAdventure="openAdventure"/>
</template>

<script>
import StatusBar from "./components/StatusBar.vue";
import Shops from "./components/Shops.vue";
import TownButtons from "./components/TownButtons.vue";
import Equipment from "./components/Equipment.vue";
import Inventory from "./components/Inventory.vue";
import Adventure from "./components/Adventure.vue";

export default {
  name: "App",
  components: {
    StatusBar,
    Shops,
    TownButtons,
    Equipment,
    Inventory,
    Adventure
  },
  data() {
    return {
      equipment : false,
      inventory : false,
      shops : true,
      adventure : false,
      level : 1,
      xp : 1,
      toLevel : 100,
      gold : 25,
      currentHP : 15,
      maxHP : 15,
      currentInventory : [
        {name : "Torch", amount : 4},
        {name : "Rope", amount : 2},
        {name : "Health Potion", amount : 10},
        {name : "Rations", amount : 2},
        {name : "Water", amount : 3},
      ]
    }
  },
  methods: {
    openEquipment() {
      this.equipment = true;
      this.inventory = false;
      this.shops = false;
      this.adventure = false;
      console.log("Opening Equipment.")
    },
    openInventory() {
      this.equipment = false;
      this.inventory = true;
      this.shops = false;
      this.adventure = false;
      console.log("Opening Inventory.")
    },
    openShops() {
      this.equipment = false;
      this.inventory = false;
      this.shops = true;
      this.adventure = false;
      console.log("Opening Shops.")
    },
    openAdventure() {
      this.equipment = false;
      this.inventory = false;
      this.shops = false;
      this.adventure = true;
      console.log("Opening Adventure.")
    }
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
