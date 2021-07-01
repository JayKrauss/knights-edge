<template>
<!-- Here lives the playfield, built with many, MANY components that Im calling Panes. -->
<!-- Onions have layers? Games have layers. Just roll with it. -->
<div id="playfield">
  <div v-if="statusPane">
    <StatusBar 
      :level="this.player.level" 
      :xp="this.player.xp" 
      :toLevel="this.player.toLevel" 
      :gold="this.player.gold" 
      :currentHP="this.player.currentHP" 
      :maxHP="this.player.maxHP"
      @openPane="openPane"
    />
  </div>
  <div v-if="topSpacerPane">
    <TopSpacer />
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
      :characterName="this.player.characterName"
      :characterStrength="this.player.characterStrength"
      :characterConstitution="this.player.characterConstitution"
      :characterDexterity="this.player.characterDexterity"
      :characterCharisma="this.player.characterCharisma"
      :characterIntellect="this.player.characterIntellect"
      :characterXP="this.player.xp"
      :toLevel="this.player.toLevel"
      :characterLevel="this.player.level"
      :attributePoints="this.player.attributePoints"
      @openPane="openPane"
    />
  </div>
  <div v-if="characterLandingPane">
    <CharacterLanding 
      :characterName="this.player.characterName"
      :characterStrength="this.player.characterStrength"
      :characterConstitution="this.player.characterConstitution"
      :characterDexterity="this.player.characterDexterity"
      :characterCharisma="this.player.characterCharisma"
      :characterIntellect="this.player.characterIntellect"
      :characterXP="this.player.xp"
      :toLevel="this.player.toLevel"
      :characterLevel="this.player.level"
      :attributePoints="this.player.attributePoints"
      @generateQuest="generateQuest"
    />
  </div>
  <div v-if="levelUpPane">
    <LevelUp 
      :characterName="this.player.characterName"
      :characterStrength="this.player.characterStrength"
      :characterConstitution="this.player.characterConstitution"
      :characterDexterity="this.player.characterDexterity"
      :characterCharisma="this.player.characterCharisma"
      :characterIntellect="this.player.characterIntellect"
      :attributePoints="this.player.attributePoints"
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
      :questID="this.questID"
      @openPane="openPane"
      @addQuestToIDList="addQuestToIDList"
      @addQuestToObjectList="addQuestToObjectList"
    />
  </div>
  <div v-if="shopsPane">
    <Shops 
      @openPane="openPane" 
    />
  </div>
  <div v-if="equipmentPane">
    <Equipment 
      :equippedItemsArray="this.player.equippedItemsObjects"
    />
  </div>
  <div v-if="inventoryPane">
    <Inventory 
      :currentInventoryObjects="this.player.currentInventoryObjects"
      @equipItem="equipItem"
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
    />
  </div>
  <div v-if="mountainsPane">
    <Mountains 
      @openPane="openPane"
    />
  </div>
  <div v-if="travelQuestsPane">
    <TravelQuests />
  </div>
  <div v-if="randomCombatPane">
    <RandomCombat 
      :playerCurrentHP="this.player.currentHP"
      :playerMaxHP="this.player.maxHP"
      :playerDamage="this.player.totalPlayerDamage"
      :playerArmor="this.player.totalPlayerArmor"
      :opponent="this.currentItem"
      :opponentImage="this.currentItem.image"
      :opponentDeathImage="this.currentItem.deathImage"
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
      :opponentDeathImage="this.opponentDeathImage"
      :characterXP="this.player.xp"
      :toLevel="this.player.toLevel"
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
  <div v-if="bottomSpacerPane">
    <BottomSpacer />
  </div>
</div>
</template>

<script>
import StatusBar from "./components/Status Panes/StatusBar.vue";
import TopSpacer from "./components/Status Panes/TopSpacer.vue";
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
import BottomSpacer from "./components/Status Panes/BottomSpacer.vue";

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
    TopSpacer,
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
    BottomSpacer,
  },
  mounted(){
    this.collatePlayerStats();
    this.buildInventory();
    this.addQuestToObjectList();
    this.buildEquippedItemArray()
  },
  data() {
    //Data store persistent
    return {
      playerList : [],
      serverCharacter : {},
      //flags for which pane(s) should be active
      statusPane : false,
      topSpacerPane : false,
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
      bottomSpacerPane : false,

      //Player statistics, to be moved to the server once authentication is live
      player :{
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

        //to hold quest IDs that can then be pulled and displayed, or completed
        openQuestsIDs : [],
        openQuestObjects : [],
        completedQuestIDs : [],
        completedQuestObjects : [],

        //objects to hold equipped weapons and armor IDs so that attack and defend values may be calculated. Passed to collatePlayerStats()
        equippedItemsIDs : [

        ],
        equippedItemsObjects : [

        ],
        equippedWeapons : [
          
        ],
        equippedArmor : [

        ],

        //calculated by collatePlayerStats(), damage and defense values to be passed to Combat components to determine outcomes
        totalPlayerDamage : 0,
        totalPlayerArmor : 0,

        //inventory array with objects holding all items in the player's inventory, to be passed to the Inventory component
        currentInventoryIDs : [
          [ "agt001" , 5 , "gear" ],
          [ "agr001" , 3 , "gear" ],
          [ "agr002" , 2 , "gear" ],
          [ "agw001" , 5 , "gear" ],
          [ "bhp001" , 3 , "gear" ],
          [ "lhu001" , 1, "equipment" ],
          [ "lcu001" , 1, "equipment" ],
          [ "lsu001" , 1, "equipment" ],
          [ "mhiss001", 1, "equipment" ],
        ],
        currentInventoryObjects : [
          
        ],
      },
      
      //bounces current item being pulled from the datasheet, to be used in other functions.
      currentItem : {},
      currentOpponent : "serous001",
      opponentDeathImage : "",

      //quest variables
      questName : "",
      questID : "",
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
    //to be continued for databasing
    getPlayerList(){
      this.playerList = getPlayers();
    },
    //check if the player is ready to level up, and then give attribute points on true
    checkLevel() {
      if (this.player.xp >= this.player.toLevel){
        this.player.level += 1;
        this.player.toLevel = this.player.toLevel * 2;
        this.player.attributePoints += 1;
      }
    },
    //collects and modifies the combat stats for the player based on their equipment and stats
    collatePlayerStats() {
      var playerDamage = 0;
      var playerArmor = 0;

      for (var i=0; i<this.player.equippedWeapons.length; i++){
        this.retrieveByID("equipment", this.player.equippedWeapons[i]);
        playerDamage += this.currentItem.damage;
      }
      for (var j=0; j<this.player.equippedArmor.length; j++){
        this.retrieveByID("equipment", this.player.equippedArmor[j]);
        playerArmor += this.currentItem.armor;
      }
      //modify the player's damage by strength stat and armor by dexterity stat
      this.player.totalPlayerDamage = playerDamage * (1 + (this.player.characterStrength / 10));
      this.player.totalPlayerArmor = playerArmor * (1 + (this.player.characterDexterity / 10));
      console.log("Player Damage: " + this.player.totalPlayerDamage);
      console.log("Player Armor: " + this.player.totalPlayerArmor);
    },
    //builds array of objects for equipped items
    buildEquippedItemArray() {
      this.player.equippedItemsObjects = [];
      for (var i=0; i<this.player.equippedItemsIDs.length; i++){
              this.retrieveByID('equipment', this.player.equippedItemsIDs[i]);
              this.player.equippedItemsObjects.push(this.currentItem);
            }
    },
    equipItem(id) {
      this.retrieveByID('equipment', id);
      var passedItem = this.currentItem;
      var passedSlot = passedItem.slot;
      var slotFilled = false;
      var existingItem = {};

      for(var i=0; i<this.player.equippedItemsObjects.length; i++){
        if(this.player.equippedItemsObjects[i].slot == passedSlot){
          console.log("Slot full. Swapping.")
          slotFilled = true;
          existingItem = this.player.equippedItemsObjects[i];
        }
      }

      if (slotFilled == false){
        console.log('Slot empty')
        this.player.equippedItemsIDs.push(passedItem.id);
        if (passedItem.slot == "mainhand"){
          console.log("Item swapped.")
          this.player.equippedWeapons.push(passedItem.id);
        }
        else {
          console.log("Item swapped.")
          this.player.equippedArmor.push(passedItem.id);
        }

        for (var k=0; k<this.player.currentInventoryIDs.length; k++){
          if (passedItem.id == this.player.currentInventoryIDs[k][0]){
            this.player.currentInventoryIDs.splice(k, 1);
          }
        }
        this.buildEquippedItemArray()
        this.buildInventory();
        this.collatePlayerStats()
        this.openPane('equipment');
      }
      else {
        console.log("SWAPPING ITEMS TO INVENTORY")
        console.log("ID: " + existingItem.id)
        for (var l=0; l<this.player.equippedItemsIDs.length; l++){
          console.log(this.player.equippedItemsIDs[l])
          if (this.player.equippedItemsIDs[l] == existingItem.id){
            this.player.equippedItemsIDs.splice(l, 1);
          }
        }
        for (var y=0; y<this.player.currentInventoryIDs.length; y++){
          if (passedItem.id == this.player.currentInventoryIDs[y][0]){
            this.player.currentInventoryIDs.splice(y, 1);
            var pushedItem = [];
            pushedItem.push(existingItem.id);
            pushedItem.push(1);
            pushedItem.push('equipment');
            this.player.currentInventoryIDs.push(pushedItem);
          }
        }
        if (existingItem.slot == "mainhand"){
          for (var h=0; h<this.player.equippedWeapons.length; h++){
            if (existingItem.id == this.player.equippedWeapons[h]){
              this.player.equippedWeapons.splice(h, 1);
            }
          }
          this.player.equippedWeapons.push(passedItem.id)
        }
        else{
          for (var g=0; g<this.player.equippedArmor.length; g++){
            if (existingItem.id == this.player.equippedArmor[g]){
              console.log("removing helm")
              this.player.equippedArmor.splice(h, 1);
            }
          }
          this.player.equippedArmor.push(passedItem.id);
        }
        this.player.equippedItemsIDs.push(passedItem.id);
        this.buildEquippedItemArray()
        this.buildInventory();
        this.collatePlayerStats()
        this.openPane('equipment');
      }
      ;
    },
    //allows for stat modification
    modifyPlayerStats(stat, amount, direction) {
      console.log("changing stats")
      switch (stat){
        case "health":
          if (direction == "-"){
            this.player.currentHP -= amount;
            break;
          }
          else{
            this.player.currentHP += amount;
            break;
          }
        case "xp":
          if (direction == "-"){
            this.player.xp -= amount;
            break;
          }
          else{
            this.player.xp += amount;
            break;
          }
        case "gold":
          if (direction == "-"){
            this.player.gold -= amount;
            break;
          }
          else{
            this.player.gold += amount;
            break;
          }
        case "level":
          if (direction == "-"){
            this.player.level -= amount;
            break;
          }
          else{
            this.player.level += amount;
            break;
          }
        case "attributePoints":
          if (direction == "-"){
            this.player.attributePoints -= amount;
            break;
          }
          else{
            this.player.attributePoints += amount;
            break;
          }
        case "strength":
          if (direction == "-"){
            this.player.characterStrength -= amount;
            break;
          }
          else{
            this.player.characterStrength += amount;
            break;
          }
        case "constitution":
          if (direction == "-"){
            this.player.characterConstitution -= amount;
            break;
          }
          else{
            this.player.characterConstitution += amount;
            this.player.maxHP += 5;
            break;
          }
        case "dexterity":
          if (direction == "-"){
            this.player.characterDexterity -= amount;
            break;
          }
          else{
            this.player.characterDexterity += amount;
            break;
          }
        case "charisma":
          if (direction == "-"){
            this.player.characterCharisma -= amount;
            break;
          }
          else{
            this.player.characterCharisma += amount;
            break;
          }
        case "intellect":
          if (direction == "-"){
            this.player.characterIntellect -= amount;
            break;
          }
          else{
            this.player.characterIntellect += amount;
            break;
          }
          default:
            console.log("You broke it. Well done.");
            break;
      }
    },
    //heals to full to avoid over-healing
    healToFull(){
      this.player.currentHP = this.player.maxHP;
    },
    //update HP and combat stats after leveling up
    updateStats(points){
      this.player.maxHP += (5 * points);
      this.player.currentHP = this.player.maxHP;

      this.collatePlayerStats();
    },
    //pass info to create the quest dialog. Rewards are passed as an array of objects.
    generateQuest(name, id, info, rewards){
      this.questName = name;
      this.questID = id;
      this.questInfo = info;
      this.questRewards = rewards;

      this.openPane('questInfo');
    },
    //adds quest to player's quest list - WIP
    addQuestToIDList(id){
      this.player.openQuestsIDs.push(id);
    },
    //removes quest ID from "open" list and adds it to the "completed" list
    completeQuest(id){
      const index = this.player.openQuestsIDs.indexOf(id);
      this.player.openQuestsIDs.splice(index);
      this.player.completedQuestIDs.push(id);
    },
    //converts the ID array into an array of objects corresponding to those IDs
    addQuestToObjectList() {
      for (var i=0; i<this.player.openQuestsIDs.length; i++){
        this.retrieveByID('standardQuests', this.player.openQuestsIDs[i])
        console.log(this.currentItem);
        this.player.openQuestObjects.push(this.currentItem)
      }
      console.table(this.player.openQuestObjects)
    },
    //takes in data from createCharacter pane to build the local character to be uploaded to the server
    createCharacter(name, level, xp, strength, constitution, dexterity, charisma, intellect, attributePoints) {
      this.player.characterName = name;
      this.player.level = level;
      this.player.xp = xp;
      this.player.gold = charisma * 5;
      this.player.maxHP = constitution * 5;
      this.player.currentHP = this.player.maxHP;
      this.player.characterStrength = strength;
      this.player.characterConstitution = constitution;
      this.player.characterDexterity = dexterity;
      this.player.characterCharisma = charisma;
      this.player.characterIntellect = intellect;
      this.player.attributePoints = attributePoints;
      this.openPane('characterLanding');
      console.log("Welcome to the game.");
    },
    //In the off chance the player kills something
    playerVictory(name, level, xp, gold, deathImage) {
      this.opponentName = name;
      this.opponentLevel = level;
      this.opponentXPGain = xp;
      this.opponentGoldGain = gold;
      this.opponentDeathImage = deathImage;
      
      this.openPane('victory');

      console.log("Oh look, you survived.")
    },
    //This does the heavy lifting for switching between panes based on button press and other factors. Vue Router doesnt make sense here, unfortunately.
    openPane(pane){
      this.statusPane = false;
      this.loginPane = false;
      this.topSpacerPane = false;
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
      this.bottomSpacerPane = false;

      switch (pane){
        case "login":
          this.topSpacerPane = true;
          this.loginPane = true;
          this.bottomSpacerPane = true;
          break;
        case "character":
          this.statusPane = true;
          this.characterPane = true;
          this.townButtonsPane = true;
          break;
        case "createCharacter":
          this.topSpacerPane = true;
          this.createCharacterPane = true;
          this.bottomSpacerPane = true;
          break;
        case "characterLanding":
          this.topSpacerPane = true;
          this.characterLandingPane = true;
          this.bottomSpacerPane = true;
          break;
        case "levelUp":
          this.topSpacerPane = true;
          this.levelUpPane = true;
          this.bottomSpacerPane = true;
          break;
        case "questInfo":
          this.statusPane = true;
          this.questInfoPane = true;
          this.townButtonsPane = true;
          break;
        case "equipment":
          this.buildEquippedItemArray();
          this.statusPane = true;
          this.equipmentPane = true;
          this.townButtonsPane = true;
          break;
        case "inventory":
          this.buildInventory();
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
          this.collatePlayerStats()
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
          if (this.player.totalPlayerDamage < 1){
            alert("You should probably consider at least bringing something sharp with you out there.\nCheck your inventory.")
            this.openPane('inventory');
          }
          else{
          this.retrieveByID("standardEnemies", this.currentOpponent);
          this.statusPane = true;
          this.randomCombatPane = true;
          this.adventureButtonsPane = true;
          }
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
    //this is what actually finds the item and returns it
    retrieveFromDatasheet(sheet, id){
      for (var i=0 ; i < sheet.length ; i++)
          {
              if (sheet[i]["id"] == id) {
                  //bounce the item to "global" so that the calling functions can actually see it
                  this.currentItem = sheet[i];
              }
          }
    },
    //translates the ID set of items into objects with all item data
    buildInventory(){
      this.player.currentInventoryObjects = [];
      for (var k=0; k<this.player.currentInventoryIDs.length; k++){
        if (this.player.currentInventoryIDs[k][2] == "gear"){
           this.retrieveByID("adventuringGear", this.player.currentInventoryIDs[k][0]);
        }
        else if (this.player.currentInventoryIDs[k][2] == "equipment"){
          this.retrieveByID("equipment", this.player.currentInventoryIDs[k][0]);
        }
        var item = {};
        item.name = this.currentItem.name;
        item.id = this.currentItem.id;
        item.amount = this.player.currentInventoryIDs[k][1];
        item.value = this.currentItem.value;
        item.description = this.currentItem.description;
        item.type = this.currentItem.type;
        item.slot = this.currentItem.slot;
        this.player.currentInventoryObjects.push(item);
      }
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
