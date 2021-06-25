<template>
  <StatusBar 
    :level="this.level" 
    :xp="this.xp" 
    :toLevel="this.toLevel" 
    :gold="this.gold" 
    :currentHP="this.currentHP" 
    :maxHP="this.maxHP"
    @openCharacter="openCharacter"
  />
  <div v-if="characterPane">
    <Character 
      :characterName="this.characterName"
      :characterStrength="this.characterStrength"
      :characterConstitution="this.characterConstitution"
      :characterDexterity="this.characterDexterity"
      :characterCharisma="this.characterCharisma"
      :characterIntellect="this.characterIntellect"
      :characterXP="this.xp"
      :toLevel="this.toLevel"
      :characterLevel="this.level"
    />
  </div>
  <div v-if="shopsPane">
    <Shops 
      @enterBlacksmith="enterBlacksmith"
      @enterClothier="enterClothier"
      @enterGeneralStore="enterGeneralStore"
      @enterInn="enterInn"
    />
  </div>
  <div v-if="equipmentPane">
    <Equipment />
  </div>
  <div v-if="inventoryPane">
    <Inventory 
      :currentInventory="this.currentInventory"
    />
  </div>
  <div v-if="adventurePane">
    <Adventure 
      @travelForest="travelForest"
      @travelMountains="travelMountains"
      @travelQuests="travelQuests"
    />
  </div>
  <div v-if="blacksmithPane">
    <Blacksmith />
  </div>
  <div v-if="clothierPane">
    <Clothier />
  </div>
  <div v-if="generalStorePane">
    <GeneralStore />
  </div>
  <div v-if="innPane">
    <Inn />
  </div>
  <div v-if="forestPane">
    <Forest 
      @randomCombat="randomCombat"
    />
  </div>
  <div v-if="mountainsPane">
    <Mountains />
  </div>
  <div v-if="travelQuestsPane">
    <TravelQuests />
  </div>
  <div v-if="randomCombatPane">
    <RandomCombat />
  </div>
  <div v-if="townButtonsPane">
  <TownButtons 
    @openEquipment="openEquipment" 
    @openInventory="openInventory" 
    @openShops="openShops" 
    @openAdventure="openAdventure" 
  />
  </div>
  <div v-if="adventureButtonsPane">
    <AdventureButtons 
    @openShops="openShops" 
  />
  </div>
</template>

<script>
import StatusBar from "./components/Status Panes/StatusBar.vue";
import Character from "./components/Main Panes/Character.vue";
import Shops from "./components/Main Panes/Shops.vue";
import TownButtons from "./components/Status Panes/TownButtons.vue";
import Equipment from "./components/Main Panes/Equipment.vue";
import Inventory from "./components/Main Panes/Inventory.vue";
import Adventure from "./components/Main Panes/Adventure.vue";
import Blacksmith from "./components/Shops/Blacksmith.vue";
import Clothier from "./components/Shops/Clothier.vue";
import GeneralStore from "./components/Shops/GeneralStore.vue";
import Inn from "./components/Shops/Inn.vue";
import Forest from "./components/Adventures/Forest.vue";
import Mountains from "./components/Adventures/Mountains.vue";
import TravelQuests from "./components/Adventures/Quests.vue";
import AdventureButtons from "./components/Status Panes/AdventureButtons.vue";
import RandomCombat from "./components/Combat/Random Combat/RandomCombat.vue";

// import equipmentList from "./assets/items/equipment.js";
// import gearList from "./assets/items/gear";

export default {
  name: "App",
  components: {
    StatusBar,
    Character,
    Shops,
    TownButtons,
    AdventureButtons,
    Equipment,
    Inventory,
    Adventure,
    Blacksmith,
    Clothier,
    GeneralStore,
    Inn,
    Forest,
    Mountains,
    TravelQuests,
    RandomCombat,
  },
  data() {
    //Data store persistent
    return {
      //flags for which pane(s) should be active
      characterPane : false,
      equipmentPane : false,
      inventoryPane : false,
      shopsPane : true,
      adventurePane : false,
      blacksmithPane : false,
      clothierPane : false,
      generalStorePane : false,
      innPane : false,
      forestPane : false,
      mountainsPane : false,
      travelQuestsPane : false,
      townButtonsPane : true,
      adventureButtonsPane : false,
      randomCombatPane : false,
      // currentPane : "shops",
      //Player statistics, to be moved to the server once authentication is live
      level : 1,
      xp : 0,
      toLevel : 100,
      gold : 25,
      currentHP : 15,
      maxHP : 15,
      characterName : "Adventurer",
      characterStrength : 1,
      characterConstitution : 1,
      characterDexterity : 1,
      characterCharisma : 1,
      characterIntellect : 1,
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
    //Working on passing in argument to run single function to determine panes to be active, probably based on the commented out flag above.
    //For now its the big ugly you see below. Works though.

    // openPane(pane){
    //   this.equipmentPane = false;
    //   this.inventoryPane = false;
    //   this.shopsPane = false;
    //   this.adventurePane = false;
    //   this.blacksmithPane = false;
    //   this.clothierPane = false;
    //   this.generalStorePane = false;
    //   this.innPane = false;

    //   switch (pane){
    //     case "equipment":
    //       this.equipmentPane = true;
    //       break;
    //     case "inventory":
    //       this.inventoryPane = true;
    //       break;
    //     case "shops":
    //       this.shopsPane = true;
    //       break;
    //     case "adventure":
    //       this.adventurePane = true;
    //       break;
    //     case "blacksmith":
    //       this.blacksmithPane = true;
    //       break;
    //     case "generalstore":
    //       this.generalStorePane = true;
    //       break;
    //     case "clothier":
    //       this.clothierPane = true;
    //       break;
    //     case "inn":
    //       this.innPane = true;
    //       break;
    //     default:
    //       break;
    //   }
    // },
    openCharacter() {
      this.characterPane = true;
      this.equipmentPane = false;
      this.inventoryPane = false;
      this.shopsPane = false;
      this.adventurePane = false;
      this.blacksmithPane = false;
      this.clothierPane = false;
      this.generalStorePane = false;
      this.innPane = false;
      this.forestPane = false;
      this.mountainsPane = false;
      this.travelQuestsPane = false;
      this.randomCombatPane = false;
      this.townButtonsPane = true;
      this.adventureButtonsPane = false;
      console.log("Opening Character Screen.")
    },
    openEquipment() {
      this.characterPane = false;
      this.equipmentPane = true;
      this.inventoryPane = false;
      this.shopsPane = false;
      this.adventurePane = false;
      this.blacksmithPane = false;
      this.clothierPane = false;
      this.generalStorePane = false;
      this.innPane = false;
      this.forestPane = false;
      this.mountainsPane = false;
      this.travelQuestsPane = false;
      this.randomCombatPane = false;
      this.townButtonsPane = true;
      this.adventureButtonsPane = false;
      console.log("Opening Equipment.")
    },
    openInventory() {
      this.characterPane = false;
      this.equipmentPane = false;
      this.inventoryPane = true;
      this.shopsPane = false;
      this.adventurePane = false;
      this.blacksmithPane = false;
      this.clothierPane = false;
      this.generalStorePane = false;
      this.innPane = false;
      this.forestPane = false;
      this.mountainsPane = false;
      this.travelQuestsPane = false;
      this.randomCombatPane = false;
      this.townButtonsPane = true;
      this.adventureButtonsPane = false;
      console.log("Opening Inventory.")
    },
    openShops() {
      this.characterPane = false;
      this.equipmentPane = false;
      this.inventoryPane = false;
      this.shopsPane = true;
      this.adventurePane = false;
      this.blacksmithPane = false;
      this.clothierPane = false;
      this.generalStorePane = false;
      this.innPane = false;
      this.forestPane = false;
      this.mountainsPane = false;
      this.travelQuestsPane = false;
      this.randomCombatPane = false;
      this.townButtonsPane = true;
      this.adventureButtonsPane = false;
      console.log("Opening Shops.")
    },
    openAdventure() {
      this.characterPane = false;
      this.equipmentPane = false;
      this.inventoryPane = false;
      this.shopsPane = false;
      this.adventurePane = true;
      this.blacksmithPane = false;
      this.clothierPane = false;
      this.generalStorePane = false;
      this.innPane = false;
      this.forestPane = false;
      this.mountainsPane = false;
      this.travelQuestsPane = false;
      this.randomCombatPane = false;
      this.townButtonsPane = true;
      this.adventureButtonsPane = false;
      console.log("Opening Adventure.")
    },
    enterBlacksmith() {
      this.characterPane = false;
      this.equipmentPane = false;
      this.inventoryPane = false;
      this.shopsPane = false;
      this.adventurePane = false;
      this.blacksmithPane = true;
      this.clothierPane = false;
      this.generalStorePane = false;
      this.innPane = false;
      this.forestPane = false;
      this.mountainsPane = false;
      this.travelQuestsPane = false;
      this.randomCombatPane = false;
      this.townButtonsPane = true;
      this.adventureButtonsPane = false;
      console.log("Entering Blacksmith Forge.")
    },
    enterGeneralStore() {
      this.characterPane = false;
      this.equipmentPane = false;
      this.inventoryPane = false;
      this.shopsPane = false;
      this.adventurePane = false;
      this.blacksmithPane = false;
      this.clothierPane = false;
      this.generalStorePane = true;
      this.innPane = false;
      this.forestPane = false;
      this.mountainsPane = false;
      this.travelQuestsPane = false;
      this.randomCombatPane = false;
      this.townButtonsPane = true;
      this.adventureButtonsPane = false;
      console.log("Entering General Store.")
    },
    enterClothier() {
      this.characterPane = false;
      this.equipmentPane = false;
      this.inventoryPane = false;
      this.shopsPane = false;
      this.adventurePane = false;
      this.blacksmithPane = false;
      this.clothierPane = true;
      this.generalStorePane = false;
      this.innPane = false;
      this.forestPane = false;
      this.mountainsPane = false;
      this.travelQuestsPane = false;
      this.randomCombatPane = false;
      this.townButtonsPane = true;
      this.adventureButtonsPane = false;
      console.log("Entering Clothier.")
    },
    enterInn() {
      this.characterPane = false;
      this.equipmentPane = false;
      this.inventoryPane = false;
      this.shopsPane = false;
      this.adventurePane = false;
      this.blacksmithPane = false;
      this.clothierPane = false;
      this.generalStorePane = false;
      this.innPane = true;
      this.forestPane = false;
      this.mountainsPane = false;
      this.travelQuestsPane = false;
      this.randomCombatPane = false;
      this.townButtonsPane = true;
      this.adventureButtonsPane = false;
      console.log("Entering Inn.")
    },
    travelForest() {
      this.characterPane = false;
      this.equipmentPane = false;
      this.inventoryPane = false;
      this.shopsPane = false;
      this.adventurePane = false;
      this.blacksmithPane = false;
      this.clothierPane = false;
      this.generalStorePane = false;
      this.innPane = false;
      this.forestPane = true;
      this.mountainsPane = false;
      this.travelQuestsPane = false;
      this.randomCombatPane = false;
      this.townButtonsPane = false;
      this.adventureButtonsPane = true;
      console.log("Traveling Forest.")
    },
    travelMountains() {
      this.characterPane = false;
      this.equipmentPane = false;
      this.inventoryPane = false;
      this.shopsPane = false;
      this.adventurePane = false;
      this.blacksmithPane = false;
      this.clothierPane = false;
      this.generalStorePane = false;
      this.innPane = false;
      this.forestPane = false;
      this.mountainsPane = true;
      this.travelQuestsPane = false;
      this.randomCombatPane = false;
      this.townButtonsPane = false;
      this.adventureButtonsPane = true;
      console.log("Traveling Mountains.")
    },
    travelQuests() {
      this.characterPane = false;
      this.equipmentPane = false;
      this.inventoryPane = false;
      this.shopsPane = false;
      this.adventurePane = false;
      this.blacksmithPane = false;
      this.clothierPane = false;
      this.generalStorePane = false;
      this.innPane = false;
      this.forestPane = false;
      this.mountainsPane = false;
      this.travelQuestsPane = true;
      this.randomCombatPane = false;
      this.townButtonsPane = false;
      this.adventureButtonsPane = true;
      console.log("Opening Quests.")
    },
    randomCombat() {
      this.characterPane = false;
      this.equipmentPane = false;
      this.inventoryPane = false;
      this.shopsPane = false;
      this.adventurePane = false;
      this.blacksmithPane = false;
      this.clothierPane = false;
      this.generalStorePane = false;
      this.innPane = false;
      this.forestPane = false;
      this.mountainsPane = false;
      this.travelQuestsPane = false;
      this.randomCombatPane = true;
      this.townButtonsPane = false;
      this.adventureButtonsPane = true;
      console.log("Spinning up Combat.")
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
