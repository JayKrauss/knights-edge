
<template>
<!-- Here lives the playfield, built with many, MANY components that Im calling Panes. -->
<!-- Onions have layers? Games have layers. Just roll with it. -->
<div id="playfield">
  <div v-if="statusPane">
    <StatusBar 
      :level="this.level" 
      :xp="this.xp" 
      :toLevel="this.toLevel" 
      :gold="this.gold" 
      :currentHP="this.currentHP" 
      :maxHP="this.maxHP"
      @openPane="openPane"
    />
  </div>
  <div v-if="loginPane">
    <LogIn @openShops="openPane"/>
  </div>
  <div v-if="createCharacterPane">
    <CreateCharacter 
      @createCharacter="createCharacter"
      @openPane="openPane"
    />
  </div>
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
      :attributePoints="this.attributePoints"
      @openPane="openPane"
    />
  </div>
  <div v-if="characterLandingPane">
    <CharacterLanding 
      :characterName="this.characterName"
      :characterStrength="this.characterStrength"
      :characterConstitution="this.characterConstitution"
      :characterDexterity="this.characterDexterity"
      :characterCharisma="this.characterCharisma"
      :characterIntellect="this.characterIntellect"
      :characterXP="this.xp"
      :toLevel="this.toLevel"
      :characterLevel="this.level"
      :attributePoints="this.attributePoints"
      @generateQuest="generateQuest"
    />
  </div>
  <div v-if="levelUpPane">
    <LevelUp 
      :characterName="this.characterName"
      :characterStrength="this.characterStrength"
      :characterConstitution="this.characterConstitution"
      :characterDexterity="this.characterDexterity"
      :characterCharisma="this.characterCharisma"
      :characterIntellect="this.characterIntellect"
      :attributePoints="this.attributePoints"
      @openPane="openPane"
      @modifyPlayerStats="modifyPlayerStats"
      @updateStats="updateStats"
    />
  </div>
  <div v-if="questInfoPane">
    <QuestInfo 
      :questName="this.questName"
      :questText="this.questInfo"
      :questRewards="this.questRewards"
      @openPane="openPane"
      @addQuestToList="addQuestToList"
    />
  </div>
  <div v-if="shopsPane">
    <Shops 
      @openPane="openPane" 
    />
  </div>
  <div v-if="equipmentPane">
    <Equipment />
  </div>
  <div v-if="inventoryPane">
    <Inventory 
      :currentInventoryObjects="this.currentInventoryObjects"
    />
  </div>
  <div v-if="adventurePane">
    <Adventure 
      @openPane="openPane" 
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
      @openPane="openPane"
      @collatePlayerStats="collatePlayerStats"
    />
  </div>
  <div v-if="mountainsPane">
    <Mountains />
  </div>
  <div v-if="travelQuestsPane">
    <TravelQuests />
  </div>
  <div v-if="randomCombatPane">
    <RandomCombat 
      :playerCurrentHP="this.currentHP"
      :playerMaxHP="this.maxHP"
      :playerDamage="this.totalPlayerDamage"
      :playerArmor="this.totalPlayerArmor"
      @modifyPlayerStats="modifyPlayerStats"
      @playerVictory="playerVictory"
      @healToFull="healToFull"
    />
  </div>
  <div v-if="victoryPane">
    <Victory 
      :opponentName="this.opponentName"
      :opponentLevel="this.opponentLevel"
      :opponentXPGain="this.opponentXPGain"
      :opponentGoldGain="this.opponentGoldGain"
      :characterXP="this.xp"
      :toLevel="this.toLevel"
      @checkLevel="checkLevel"
    />
  </div>
  <div v-if="townButtonsPane">
  <TownButtons 
    @openPane="openPane" 
  />
  </div>
  <div v-if="adventureButtonsPane">
    <AdventureButtons 
    @openPane="openPane"  
  />
  </div>
</div>
</template>

<script>
import StatusBar from "./components/Status Panes/StatusBar.vue";
import LogIn from "./components/Main Panes/LogIn.vue";
import Character from "./components/Character/Character.vue";
import CreateCharacter from "./components/Character/CreateCharacter.vue";
import CharacterLanding from "./components/Character/CharacterLanding.vue";
import LevelUp from "./components/Character/LevelUp.vue";
import QuestInfo from "./components/Main Panes/QuestInfo.vue";
import Shops from "./components/Main Panes/Shops.vue";
import TownButtons from "./components/Status Panes/TownButtons.vue";
import Equipment from "./components/Character/Equipment.vue";
import Inventory from "./components/Character/Inventory.vue";
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
import Victory from "./components/Combat/Victory.vue";

import { default as equipmentList } from "./datafiles/items/equipment.js";
import { default as gearList } from "./datafiles/items/gear.js";
import { default as standardQuests } from "./datafiles/quests/standardQuests.js";

import getPlayers from  "./database/firebaseGetPlayer.js";
import standardEnemies from './datafiles/enemies/standardEnemies';

export default {
  name: "App",
  components: {
    LogIn,
    StatusBar,
    Character,
    CreateCharacter,
    CharacterLanding,
    LevelUp,
    QuestInfo,
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
    Victory,
  },
  mounted(){
    this.collatePlayerStats();
    this.buildInventory();
  },
  data() {
    //Data store persistent
    return {
      playerList : [],
      serverCharacter : {},
      //flags for which pane(s) should be active
      statusPane : false,
      loginPane : false,
      characterPane : false,
      createCharacterPane : true,
      characterLandingPane : false,
      levelUpPane : false,
      questInfoPane : false,
      equipmentPane : false,
      inventoryPane : false,
      shopsPane : false,
      adventurePane : false,
      blacksmithPane : false,
      clothierPane : false,
      generalStorePane : false,
      innPane : false,
      forestPane : false,
      mountainsPane : false,
      travelQuestsPane : false,
      townButtonsPane : false,
      adventureButtonsPane : false,
      randomCombatPane : false,
      victoryPane : false,

      //Player statistics, to be moved to the server once authentication is live
      characterName : "Adventurer",
      level : 0,
      xp : 0,
      toLevel : 100,
      gold : 0,
      currentHP : 0,
      maxHP : 0,
      attributePoints : 0,
      characterStrength : 0,
      characterConstitution : 0,
      characterDexterity : 0,
      characterCharisma : 0,
      characterIntellect : 0,

      openQuests : [],
      completedQuests : [],

      //objects to hold equipped weapons and armor so that attack and defend values may be calculated. Passed to collatePlayerStats()
      equippedWeapons : [
        "mhid001",
      ],
      equippedArmor : [
        "lcu001",
      ],

      //bounces current item being pulled from the datasheet, to be used in other functions.
      currentItem : {},

      //calculated by collatePlayerStats(), damage and defense values to be passed to Combat components to determine outcomes
      totalPlayerDamage : 0,
      totalPlayerArmor : 0,

      //inventory array with objects holding all items in the player's inventory, to be passed to the Inventory component
      currentInventoryIDs : [
        [ "agt001" , 5 ],
        [ "agr001" , 3 ],
        [ "agr002" , 2 ],
        [ "agw001" , 5 ],
        [ "bhp001" , 3 ],
      ],
      currentInventoryObjects : [

      ],

      //quest variables
      questName : "",
      questInfo : "",
      questRewards : [],

      //victory variables
      opponentName : "",
      opponentLevel : 0,
      opponentXPGain : 0,
      opponentGoldGain : 0,
    }
  },
  methods: {
    getPlayerList(){
      this.playerList = getPlayers();
    },
    checkLevel() {
      if (this.xp >= this.toLevel){
        this.level += 1;
        this.toLevel = this.toLevel * 2;
        this.attributePoints += 1;
      }
    },
    //collects and modifies the combat stats for the player based on their equipment and stats
    collatePlayerStats() {
      var playerDamage = 0;
      var playerArmor = 0;

      for (var i=0; i<this.equippedWeapons.length; i++){
        this.retrieveByID("equipment", this.equippedWeapons[i]);
        playerDamage += this.currentItem.damage;
      }
      for (var j=0; j<this.equippedArmor.length; j++){
        this.retrieveByID("equipment", this.equippedArmor[j]);
        playerArmor += this.currentItem.armor;
      }
      this.totalPlayerDamage = playerDamage * (1 + (this.characterStrength / 10));
      this.totalPlayerArmor = playerArmor * (1 + (this.characterDexterity / 10));
      console.log("Player Damage: " + this.totalPlayerDamage);
      console.log("Player Armor: " + this.totalPlayerArmor);
    },
    //allows for stat modification
    modifyPlayerStats(stat, amount, direction) {
      console.log("changing stats")
      switch (stat){
        case "health":
          if (direction == "-"){
            this.currentHP -= amount;
            break;
          }
          else{
            this.currentHP += amount;
            break;
          }
        case "xp":
          if (direction == "-"){
            this.xp -= amount;
            break;
          }
          else{
            this.xp += amount;
            break;
          }
        case "gold":
          if (direction == "-"){
            this.gold -= amount;
            break;
          }
          else{
            this.gold += amount;
            break;
          }
        case "level":
          if (direction == "-"){
            this.level -= amount;
            break;
          }
          else{
            this.level += amount;
            break;
          }
        case "attributePoints":
          if (direction == "-"){
            this.attributePoints -= amount;
            break;
          }
          else{
            this.attributePoints += amount;
            break;
          }
        case "strength":
          if (direction == "-"){
            this.characterStrength -= amount;
            break;
          }
          else{
            this.characterStrength += amount;
            break;
          }
        case "constitution":
          if (direction == "-"){
            this.characterConstitution -= amount;
            break;
          }
          else{
            this.characterConstitution += amount;
            this.maxHP += 5;
            break;
          }
        case "dexterity":
          if (direction == "-"){
            this.characterDexterity -= amount;
            break;
          }
          else{
            this.characterDexterity += amount;
            break;
          }
        case "charisma":
          if (direction == "-"){
            this.characterCharisma -= amount;
            break;
          }
          else{
            this.characterCharisma += amount;
            break;
          }
        case "intellect":
          if (direction == "-"){
            this.characterIntellect -= amount;
            break;
          }
          else{
            this.characterIntellect += amount;
            break;
          }
          default:
            console.log("You broke it. Well done.");
            break;
      }
    },
    healToFull(){
      this.currentHP = this.maxHP;
    },
    //update HP and combat stats after leveling up
    updateStats(points){
      this.maxHP += (5 * points);
      this.currentHP = this.maxHP;

      this.collatePlayerStats();
    },
    //pass info to create the quest dialog. Rewards are passed as an array of objects.
    generateQuest(name, info, rewards){
      this.questName = name;
      this.questInfo = info;
      this.questRewards = rewards;

      this.openPane('questInfo');
    },
    addQuestToList(name, text, rewards, trigger) {
      console.log(name, text, rewards, trigger)
    },
    //takes in data from createCharacter pane to build the local character to be uploaded to the server
    createCharacter(name, level, xp, strength, constitution, dexterity, charisma, intellect, attributePoints) {
      this.characterName = name;
      this.level = level;
      this.xp = xp;
      this.gold = charisma * 5;
      this.maxHP = constitution * 5;
      this.currentHP = this.maxHP;
      this.characterStrength = strength;
      this.characterConstitution = constitution;
      this.characterDexterity = dexterity;
      this.characterCharisma = charisma;
      this.characterIntellect = intellect;
      this.attributePoints = attributePoints;
      this.openPane('characterLanding');
      console.log("Welcome to the game.");
    },
    //In the off chance the player kills something
    playerVictory(name, level, xp, gold) {
      this.opponentName = name;
      this.opponentLevel = level;
      this.opponentXPGain = xp;
      this.opponentGoldGain = gold;
      
      this.openPane('victory');

      console.log("Oh look, you survived.")
    },
    //This does the heavy lifting for switching between panes based on button press and other factors. Vue Router doesnt make sense here, unfortunately.
    openPane(pane){
      this.statusPane = false;
      this.loginPane = false;
      this.characterPane = false;
      this.createCharacterPane = false;
      this.characterLandingPane = false;
      this.levelUpPane = false;
      this.questInfoPane = false
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
      this.townButtonsPane = false;
      this.adventureButtonsPane = false;
      this.randomCombatPane = false;
      this.victoryPane = false;

      switch (pane){
        case "login":
          this.loginPane = true;
          break;
        case "character":
          this.statusPane = true;
          this.characterPane = true;
          this.townButtonsPane = true;
          break;
        case "createCharacter":
          this.createCharacterPane = true;
          break;
        case "characterLanding":
          this.characterLandingPane = true;
          break;
        case "levelUp":
          this.levelUpPane = true;
          break;
        case "questInfo":
          this.questInfoPane = true;
          break;
        case "equipment":
          this.statusPane = true;
          this.equipmentPane = true;
          this.townButtonsPane = true;
          break;
        case "inventory":
          this.statusPane = true;
          this.inventoryPane = true;
          this.townButtonsPane = true;
          break;
        case "shops":
          this.statusPane = true;
          this.shopsPane = true;
          this.townButtonsPane = true;
          break;
        case "adventure":
          this.statusPane = true;
          this.adventurePane = true;
          this.adventureButtonsPane = true;
          break;
        case "blacksmith":
          this.statusPane = true;
          this.blacksmithPane = true;
          this.townButtonsPane = true;
          break;
        case "generalstore":
          this.statusPane = true;
          this.generalStorePane = true;
          this.townButtonsPane = true;
          break;
        case "clothier":
          this.statusPane = true;
          this.clothierPane = true;
          this.townButtonsPane = true;
          break;
        case "inn":
          this.statusPane = true;
          this.innPane = true;
          this.townButtonsPane = true;
          break;
        case "forest":
          this.statusPane = true;
          this.forestPane = true;
          this.adventureButtonsPane = true;
          break;
        case "mountains":
          this.statusPane = true;
          this.mountainsPane = true;
          this.adventureButtonsPane = true;
          break;
        case "travelQuests":
          this.statusPane = true;
          this.travelQuestsPane = true;
          this.adventureButtonsPane = true;
          break;
        case "randomCombat":
          this.statusPane = true;
          this.randomCombatPane = true;
          this.adventureButtonsPane = true;
          break;
        case "victory":
          this.statusPane = true;
          this.victoryPane = true;
          this.adventureButtonsPane = true;
          break;
        default:
          break;
      }
    }, 
    //allows for retrieval of objects from data storage by ID- pass in the name of the datasheet and the ID.
    retrieveByID(datasheet, id) {
      switch (datasheet) {
        case "standardEnemies":
          this.retrieveFromDatasheet(standardEnemies["standardEnemies"], id);
          break;
        case "equipment":
          this.retrieveFromDatasheet(equipmentList["equipment"], id);
          break;
        case "adventuringGear":
          this.retrieveFromDatasheet(gearList["adventuringGear"], id);
          break;
        case "standardQuests":
          this.retrieveFromDatasheet(standardQuests["standardQuests"], id);
          break;
      }
    },
    retrieveFromDatasheet(sheet, id){
      for (var i=0 ; i < sheet.length ; i++)
          {
              if (sheet[i]["id"] == id) {
                console.table(sheet[i])
                  this.currentItem = sheet[i];
              }
          }
    },
    buildInventory(){
      for (var k=0; k<this.currentInventoryIDs.length; k++){
        this.retrieveByID("adventuringGear", this.currentInventoryIDs[k][0]);
        console.log(this.currentItem)
        var item = {};
        item.name = this.currentItem.name;
        item.id = this.currentItem.id;
        item.amount = this.currentInventoryIDs[k][1];
        item.value = this.currentItem.value;
        item.description = this.currentItem.description;
        this.currentInventoryObjects.push(item);
      }
      console.table(this.currentInventoryObjects);
    },
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
