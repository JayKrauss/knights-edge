<template>
  <!-- Here lives the playfield, built with many, MANY components that Im calling Panes. -->
  <!-- Onions have layers? Games have layers. Just roll with it. -->
  <div id="playfield">
    <br />
    <br />
    <br />
    <div v-if="landingPane">
      <Landing @openPane="openPane" />
    </div>
    <div v-if="signUpPane">
      <SignUp @signUp="signUpRequest" />
    </div>
    <div v-if="statusPane">
      <StatusBar
        :level="this.player.level"
        :xp="this.player.xp"
        :toLevel="this.player.toLevel"
        :gold="this.player.gold"
        :currentHP="this.player.currentHP"
        :maxHP="this.player.maxHP"
        :levelChange="this.levelChange"
        :xpChange="this.xpChange"
        :goldChange="this.goldChange"
        :hpChange="this.hpChange"
        @openPane="openPane"
        @saveCharacter="saveCharacter"
      />
    </div>
    <div v-if="topSpacerPane">
      <TopSpacer />
    </div>
    <div v-if="loginPane">
      <LogIn @sendLoginRequest="sendLoginRequest" />
    </div>
    <div v-if="createCharacterPane">
      <CreateCharacter @createCharacter="createCharacter" @openPane="openPane" />
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
      <Shops @openPane="openPane" />
    </div>
    <div v-if="equipmentPane">
      <Equipment
        :equippedItemsArray="this.player.equippedItemsObjects"
        :playerDamage="this.player.totalPlayerDamage"
        :playerArmor="this.player.totalPlayerArmor"
        :playerKills="this.player.kills"
        :playerDeaths="this.player.deaths"
        @unequipItem="unequipItem"
      />
    </div>
    <div v-if="inventoryPane">
      <Inventory
        :currentInventoryObjects="this.player.currentInventoryObjects"
        @equipItem="equipItem"
      />
    </div>
    <div v-if="adventurePane">
      <Adventure @openPane="openPane" />
    </div>
    <div v-if="blacksmithPane">
      <Blacksmith @openPane="openPane" />
    </div>
    <div v-if="blacksmithBuyPane">
      <BlacksmithBuy
        @buyItem="buyGear"
        :blacksmithInventoryObjects="this.blacksmithInventoryObjects"
      />
    </div>
    <div v-if="blacksmithSellPane">
      <BlacksmithSell
        @sellGear="sellGear"
        @openPane="openPane"
        :currentInventoryObjects="this.player.currentInventoryObjects"
        :currentInventoryIDs="this.player.currentInventoryIDs"
      />
    </div>
    <div v-if="clothierPane">
      <Clothier @openPane="openPane" />
    </div>
    <div v-if="clothierBuyPane">
      <ClothierBuy @buyItem="buyGear" :clothierInventoryObjects="this.clothierInventoryObjects" />
    </div>
    <div v-if="clothierSellPane">
      <ClothierSell
        @sellGear="sellGear"
        @openPane="openPane"
        :currentInventoryObjects="this.player.currentInventoryObjects"
        :currentInventoryIDs="this.player.currentInventoryIDs"
      />
    </div>
    <div v-if="generalStorePane">
      <GeneralStore @openPane="openPane" />
    </div>
    <div v-if="generalStoreBuyPane">
      <GeneralStoreBuy
        @buyItem="buyItem"
        :generalStoreInventoryObjects="this.generalStoreInventoryObjects"
      />
    </div>
    <div v-if="generalStoreSellPane">
      <GeneralStoreSell
        @sellItem="sellItem"
        @openPane="openPane"
        :currentInventoryObjects="this.player.currentInventoryObjects"
        :currentInventoryIDs="this.player.currentInventoryIDs"
      />
    </div>
    <div v-if="innPane">
      <Inn
        @modifyPlayerStats="modifyPlayerStats"
        @healToFull="healToFull"
        :playerLevel="this.player.level"
        :playerHealth="this.player.currentHP"
        :playerMaxHealth="this.player.maxHP"
      />
    </div>
    <div v-if="forestPane">
      <Forest @openPane="openPane" />
    </div>
    <div v-if="mountainsPane">
      <Mountains @openPane="openPane" />
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
        :playerLevel="this.player.level"
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
      <TownButtons @openPane="openPane" />
    </div>
    <div v-if="adventureButtonsPane">
      <AdventureButtons @openPane="openPane" />
    </div>
    <div v-if="adventureButtonsContinuePane">
      <AdventureButtonsContinue @openPane="openPane" />
    </div>
    <div v-if="bottomSpacerPane">
      <BottomSpacer />
    </div>
  </div>
</template>

<script>
  import Landing from "./components/Main Panes/Landing.vue";
  import SignUp from "./components/Main Panes/SignUp.vue";
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
  import BlacksmithBuy from"./components/Shops/Shop Panes/Blacksmith Panes/BlacksmithBuy.vue";
  import BlacksmithSell from"./components/Shops/Shop Panes/Blacksmith Panes/BlacksmithSell.vue";
  import Clothier from "./components/Shops/Clothier.vue";
  import ClothierBuy from"./components/Shops/Shop Panes/Clothier Panes/ClothierBuy.vue";
  import ClothierSell from"./components/Shops/Shop Panes/Clothier Panes/ClothierSell.vue";
  import GeneralStore from "./components/Shops/GeneralStore.vue";
  import GeneralStoreBuy from "./components/Shops/Shop Panes/General Store Panes/GeneralStoreBuy.vue";
  import GeneralStoreSell from "./components/Shops/Shop Panes/General Store Panes/GeneralStoreSell.vue";
  import Inn from "./components/Shops/Inn.vue";
  import Forest from "./components/Adventures/Forest.vue";
  import Mountains from "./components/Adventures/Mountains.vue";
  import TravelQuests from "./components/Adventures/Quests.vue";
  import AdventureButtons from "./components/Status Panes/AdventureButtons.vue";
  import AdventureButtonsContinue from "./components/Status Panes/AdventureButtonsContinue.vue";
  import RandomCombat from "./components/Combat/Random Combat/RandomCombat.vue";
  import Victory from "./components/Combat/Victory.vue";
  import BottomSpacer from "./components/Status Panes/BottomSpacer.vue";
  import firebase from 'firebase';
  import { default as equipmentList } from "./datafiles/items/equipment.js";
  import { default as gearList } from "./datafiles/items/gear.js";
  import { default as standardQuests } from "./datafiles/quests/standardQuests.js";
  // import { default as playerList } from "./datafiles/player/player.js";
  import standardEnemies from './datafiles/enemies/standardEnemies';

export default {
  name: "App",
  components: {
    Landing,
    SignUp,
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
    AdventureButtonsContinue,
    Equipment,
    Inventory,
    Adventure,
    Blacksmith,
    BlacksmithBuy,
    BlacksmithSell,
    Clothier,
    ClothierBuy,
    ClothierSell,
    GeneralStore,
    GeneralStoreBuy,
    GeneralStoreSell,
    Inn,
    Forest,
    Mountains,
    TravelQuests,
    RandomCombat,
    Victory,
    BottomSpacer,
  },
  mounted(){
    this.openPane('landing');
    this.levelShopInventory("blacksmith");
    this.levelShopInventory("clothier");
    this.buildShopInventory("general");
    this.buildShopInventory("blacksmith");
    this.buildShopInventory("clothier");
    this.removeShopDuplicates(this.blacksmithInventoryIDs)
    this.removeShopDuplicates(this.clothierInventoryIDs)
  },
  data() {
    //Data store persistent
    return {
      playerList : [],
      serverCharacter : "",
      //flags for which pane(s) should be active
      topSpacerPane : false,
      statusPane : false,
      landingPane : false,
      loginPane : false,
      characterPane : false,
      createCharacterPane : false,
      characterLandingPane : false,
      levelUpPane : false,
      questInfoPane : false,
      equipmentPane : false,
      inventoryPane : false,
      shopsPane : false,
      adventurePane : false,
      blacksmithPane : false,
      blacksmithBuyPane : false,
      blacksmithSellPane : false,
      clothierPane : false,
      clothierBuyPane : false,
      clothierSellPane : false,
      generalStorePane : false,
      generalStoreBuyPane : false,
      generalStoreSellPane : false,
      innPane : false,
      forestPane : false,
      mountainsPane : false,
      travelQuestsPane : false,
      townButtonsPane : false,
      adventureButtonsPane : false,
      adventureButtonsContinuePane : false,
      randomCombatPane : false,
      victoryPane : false,
      bottomSpacerPane : false,

      //Player statistics, to be moved to the server 
      player :{
        characterName : "",
        password : "",
        level : 0,
        kills : 0,
        deaths : 0,
        xp : 0,
        toLevel : 100,
        gold : 0,
        currentHP : 0,
        maxHP : 0,
        healthBuff : 0,
        profession : " ",
        attributePoints : 0,
        characterStrength : 0,
        characterConstitution : 0,
        characterDexterity : 0,
        characterCharisma : 0,
        characterIntellect :0 ,

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
        equippedAccessories : [

        ],

        //calculated by collatePlayerStats(), damage and defense values to be passed to Combat components to determine outcomes
        totalPlayerDamage : 0,
        totalPlayerArmor : 0,

        //inventory array with objects holding all items in the player's inventory, to be passed to the Inventory component
        currentInventoryIDs : [
        
        ],
        currentInventoryObjects : [
        
        ],
      },
      
      //shop inventories
      blacksmithInventoryIDs : [

      ],
      blacksmithInventoryObjects : [

      ],
      clothierInventoryIDs : [

      ],
      clothierInventoryObjects : [

      ],
      generalStoreInventoryIDs : [
        "agt001",
        "agr001",
        "agf002",
        "agw001",
        "bhp001",
      ],
      generalStoreInventoryObjects : [

      ],

      //bounces current item being pulled from the datasheet, to be used in other functions.
      currentItem : {},
      currentOpponent : "",
      opponentDeathImage : "",

      //quest variables
      questName : "",
      questID : "",
      questInfo : "",
      questRewards : [

      ],

      //victory variables
      opponentName : "",
      opponentLevel : 0,
      opponentXPGain : 0,
      opponentGoldGain : 0,

      goldChange : 0,
      healthChange : 0,
      xpChange : 0,
      levelChange : 0,
    }
  },
  methods: {
    //Sends request to log into existing player model on server
    async sendLoginRequest(email, password){
      console.log(email, password)
      await firebase.auth().signInWithEmailAndPassword(email, password).then(
        user => {
          var serverPlayerData = firebase.database().ref('users/' + user.user.uid);
          serverPlayerData.on('value', (snapshot) => {
          const data = snapshot.val();
          this.player = data;
          console.log(this.player);
          this.collatePlayerStats();
          this.buildInventory();
          this.addQuestToObjectList();
          this.buildEquippedItemArray();
          this.serverCharacter = user.user.uid;
          this.openPane('character');
          });
        },
        err => {
          console.log(err)
        }
        );
    },
    //Sends request to server for new (blank) player model
    signUpRequest(email, password) {
        firebase.auth().createUserWithEmailAndPassword(email, password).then(
        user => {
          console.log(user)
          firebase.database().ref('users/' + user.user.uid).set({
            email : email,
            characterName : "",
            level : 0,
            kills : 0,
            deaths : 0,
            xp : 0,
            toLevel : 0,
            gold : 0,
            currentHP : 0,
            maxHP : 0,
            healthBuff : 0,
            characterProfession : "",
            profession : "",
            attributePoints : 0,
            characterStrength : 0,
            characterConstitution : 0,
            characterDexterity : 0,
            characterCharisma : 0,
            characterIntellect : 0,
            totalPlayerDamage : 0,
            totalPlayerArmor : 0,
            openQuestsIDs : [
              "",
            ],
            openQuestObjects : [
              "",
            ],
            completedQuestIDs : [
              "",
            ],
            completedQuestObjects : [
              "",
            ],
            equippedItemsIDs : [
              "",
            ],
            equippedItemsObjects : [
              "",
            ],
            equippedWeapons : [
              "",
            ],
            equippedArmor : [
              "",
            ],
            equippedAccessories : [
              "",        
            ],
            currentInventoryIDs : [
              "",
            ],
            currentInventoryObjects : [
              "",
            ],
          });
          this.serverCharacter = user.user.uid;
          this.openPane('createCharacter');
        },
        err => {
          if (err == 'auth/email-already-in-use'){
            alert("Email already in use. Please log in.");
          }
          console.log(err)
        }
        )
    },
    //Updates serverside player model with current statistics
    updateServerData(){
      if (this.serverCharacter != ""){
        console.table(this.player)
          firebase.database().ref('users/' + this.serverCharacter).update({
          characterName : this.player.characterName,
          level : this.player.level,
          xp : this.player.xp,
          kills : this.player.kills,
          deaths : this.player.deaths,
          toLevel : this.player.toLevel,
          gold : this.player.gold,
          currentHP : this.player.currentHP,
          maxHP : this.player.maxHP,
          healthBuff : this.player.healthBuff,
          profession : this.player.characterProfession,
          attributePoints : this.player.attributePoints,
          characterStrength : this.player.characterStrength,
          characterConstitution : this.player.characterConstitution,
          characterDexterity : this.player.characterDexterity,
          characterCharisma : this.player.characterCharisma,
          characterIntellect : this.player.characterIntellect,
          openQuestsIDs : [""],
          completedQuestIDs : [""],
          equippedAccessories : this.player.equippedAccessories,
          equippedItemsIDs : this.player.equippedItemsIDs,
          equippedWeapons : this.player.equippedWeapons,
          equippedArmor : this.player.equippedArmor,
          currentInventoryIDs : this.player.currentInventoryIDs,
        })
      }
      else{
        console.log(this.serverCharacter + "not found");
      }
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
      console.table(this.player);
      for (var i=0; i<this.player.equippedWeapons.length; i++){
        if (this.player.equippedWeapons[i] != ""){
          this.retrieveByID("equipment", this.player.equippedWeapons[i]);
        playerDamage += this.currentItem.damage;
        }
      }
      for (var j=0; j<this.player.equippedArmor.length; j++){
        if (this.player.equippedArmor[j] != ""){
          this.retrieveByID("equipment", this.player.equippedArmor[j]);
        playerArmor += this.currentItem.armor;
        }
      }
      for (var w=0; w<this.player.equippedAccessories.length; w++){
        if (this.player.equippedAccessories[w] != ""){
           this.retrieveByID("equipment", this.player.equippedAccessories[j]);
           console.log(this.currentItem.health);
        }
      }
      
      //modify the player's damage by strength stat and armor by dexterity stat
      this.player.totalPlayerDamage = playerDamage * (1 + (this.player.characterStrength / 10));
      this.player.totalPlayerArmor = playerArmor * (1 + (this.player.characterDexterity / 10));
      console.log("Player Damage: " + this.player.totalPlayerDamage);
      console.log("Player Armor: " + this.player.totalPlayerArmor);
    },
    //builds array of objects for equipped items
    buildEquippedItemArray() {
      if (this.player.equippedItemsIDs){
        this.player.equippedItemsObjects = [];
      for (var i=0; i<this.player.equippedItemsIDs.length; i++){
        this.retrieveByID('equipment', this.player.equippedItemsIDs[i]);
        this.player.equippedItemsObjects.push(this.currentItem);
      }
      }
    },
    //equips an item and updates player stats
    equipItem(id) {
      this.retrieveByID('equipment', id);
      var passedItem = this.currentItem;
      console.table(passedItem);
      var passedSlot = passedItem.slot;
      var slotFilled = false;
      var existingItem = {};

      for(var i=0; i<this.player.equippedItemsObjects.length; i++){
        if(this.player.equippedItemsObjects[i].slot === passedSlot){
          console.log("Slot full. Swapping.");
          slotFilled = true;
          existingItem = this.player.equippedItemsObjects[i];
        }
      }

      if (slotFilled === false){
        console.log('Slot empty');
        this.player.equippedItemsIDs.push(passedItem.id);
        if (passedItem.slot === "mainhand"){
          console.log("Item swapped.");
          this.player.equippedWeapons.push(passedItem.id);
        }
        else if(passedItem.slot === "neck") {
          this.player.equippedAccessories.push(passedItem.id);
        }
        else {
          this.player.equippedArmor.push(passedItem.id);
        }

        for (var k=0; k<this.player.currentInventoryIDs.length; k++){
          if (passedItem.id == this.player.currentInventoryIDs[k][0]){
            this.player.currentInventoryIDs.splice(k, 1);
          }
        }
        this.buildEquippedItemArray();
        this.buildInventory();
        this.collatePlayerStats();
        this.openPane('equipment');
      }
      else {
        console.log("SWAPPING ITEMS TO INVENTORY")
        console.log("ID: " + existingItem.id)
        for (var l=0; l<this.player.equippedItemsIDs.length; l++){
          console.log(this.player.equippedItemsIDs[l]);
          if (this.player.equippedItemsIDs[l] === existingItem.id){
            this.player.equippedItemsIDs.splice(l, 1);
          }
        }
        for (var y=0; y<this.player.currentInventoryIDs.length; y++){
          if (passedItem.id === this.player.currentInventoryIDs[y][0]){
            this.player.currentInventoryIDs.splice(y, 1);
            // var pushedItem = [];
            // pushedItem.push(existingItem.id);
            // pushedItem.push(1);
            // pushedItem.push('equipment');
            // this.player.currentInventoryIDs.push(pushedItem);
          }
        }
        if (existingItem.slot === "mainhand"){
          for (var h=0; h<this.player.equippedWeapons.length; h++){
            if (existingItem.id === this.player.equippedWeapons[h]){
              this.player.equippedWeapons.splice(h, 1);
            }
          }
          this.player.equippedWeapons.push(passedItem.id)
          this.player.currentInventoryIDs.push(
            [existingItem.id, 1, 'equipment']
          )
        }
        else{
          for (var g=0; g<this.player.equippedArmor.length; g++){
            if (existingItem.id === this.player.equippedArmor[g]){
              this.player.equippedArmor.splice(h, 1);
              this.player.currentInventoryIDs.push(
            [existingItem.id, 1, 'equipment']
          )
            }
          }
          this.player.equippedArmor.push(passedItem.id);
        }
        this.player.equippedItemsIDs.push(passedItem.id);
        this.buildEquippedItemArray();
        this.buildInventory();
        this.collatePlayerStats();
        this.openPane('equipment');
      }
      ;
    },
    //unequips an item and updates player stats
    unequipItem(id){
      console.log(id)
      for (var a=0;a<this.player.equippedItemsIDs.length; a++){
        if (this.player.equippedItemsIDs[a] == id){
          this.player.equippedItemsIDs.splice(a, 1);
        }
      }
      for (var b=0;b<this.player.equippedWeapons.length; b++){
        if (this.player.equippedWeapons[b] == id){
          this.player.equippedWeapons.splice(b, 1);
          this.collatePlayerStats();
        }
      }
      for (var c=0;c<this.player.equippedArmor.length; c++){
        if (this.player.equippedArmor[c] == id){
          this.player.equippedArmor.splice(c, 1);
          this.collatePlayerStats();
        }
      }
      for (var d=0;d<this.player.equippedArmor.length; d++){
        if (this.player.equippedAccessories[d] == id){
          this.player.equippedAccessories.splice(d, 1);
          this.collatePlayerStats();
        }
      }
      this.player.currentInventoryIDs.push(
        [id, 1, "equipment"]
      );
      this.buildEquippedItemArray();
      this.openPane('inventory');
    },
    //allows for stat modification
    modifyPlayerStats(stat, amount, direction) {
      console.log("changing stats");
      switch (stat){
        case "health":
          if (direction == "-"){
            this.player.currentHP -= amount;
            this.hpChange = "-" + amount.toFixed(2);
            if (this.player.currentHP <= 0){
              this.playerDeath();
            }
            // setTimeout(function() {this.hpChange = 0;}, 250)
            break;
          }
          else{
            this.player.currentHP += amount;
            this.hpChange = "+" + amount.toFixed(2);
            // setTimeout(function() {this.hpChange = 0;}, 250)
            break;
          }
        case "xp":
          if (direction == "-"){
            this.player.xp -= amount;
            this.xpChange = "-" + amount;
            // setTimeout(function() {this.xpChange = 0;}, 250)
            break;
          }
          else{
            this.player.xp += amount;
            this.xpChange = "+" + amount;
            // setTimeout(function() {this.xpchange = 0;}, 250)
            break;
          }
        case "gold":
          if (direction == "-"){
            this.player.gold -= amount;
            if (this.player.gold <= 0){
              this.player.gold = 0;
            }
            this.goldChange = "-" + amount;
            // setTimeout(function() {this.goldChange = 0;}, 250)
            break;
          }
          else{
            this.player.gold += amount;
            this.goldChange = "+" + amount;
            // setTimeout(function() {this.goldChange = 0}, 250)
            break;
          }
        case "level":
          if (direction == "-"){
            this.player.level -= amount;
            this.levelChange = "-" + amount;
            // setTimeout(function() {this.levelChange = 0;}, 250)
            break;
          }
          else{
            this.player.level += amount;
            this.levelChange = "+" + amount;
            // setTimeout(function() {this.levelChange = 0;}, 250)
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
    //Woops, player died
    playerDeath() {
      this.player.deaths++;
      this.openPane('inn');
      this.healToFull();
      this.modifyPlayerStats("gold", this.player.level * 5, "-");
      this.saveCharacter();
      alert("You have been found unconcious outside of town. You were brought to the Inn to rest. Gold has been deducted to pay for the doctor fees.")
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
        this.player.openQuestObjects.push(this.currentItem);
      }
      console.table(this.player.openQuestObjects);
    },
    //takes in data from createCharacter pane to build the local character to be uploaded to the server
    createCharacter(name, profession, level, xp, strength, constitution, dexterity, charisma, intellect, attributePoints) {
      this.player.characterName = name;
      this.player.characterProfession = profession;
      this.player.level = level;
      this.player.xp = xp;
      this.player.kills = 0;
      this.player.deaths = 0;
      this.player.gold = charisma * 5;
      this.player.maxHP = constitution * 5;
      this.player.healthBuff = 0;
      this.player.currentHP = this.player.maxHP;
      this.player.characterStrength = strength;
      this.player.characterConstitution = constitution;
      this.player.characterDexterity = dexterity;
      this.player.characterCharisma = charisma;
      this.player.characterIntellect = intellect;
      this.player.attributePoints = attributePoints;
      this.player.equippedWeapons = [
        "",
      ]
      this.player.equippedArmor = [
        "",
      ]
      this.player.equippedAccessories = [
        "",
      ],
      this.player.equippedItemsIDs = [
        "",
      ]
      this.player.currentInventoryIDs = [
            [ "agt001" , 5 , "gear" ],
            [ "agr001" , 3 , "gear" ],
            [ "agf002" , 2 , "gear" ],
            [ "agw001" , 5 , "gear" ],
            [ "bhp001" , 3 , "gear" ],
            [ "lvcu001" , 1, "equipment" ],
            [ "mhid001", 1, "equipment" ],
            [ "lfsu001", 1, "equipment" ],
            [ "hlshu001", 1, "equipment" ],
          ],
      this.buildInventory();
      this.addQuestToObjectList();
      this.buildEquippedItemArray();
      this.collatePlayerStats();
      this.updateServerData();
      this.openPane('characterLanding');
      console.log("Welcome to the game.");
    },
    //Easier calling of the server update function
    saveCharacter() {
      this.updateServerData();
    },
    //In the off chance the player kills something
    playerVictory(name, level, xp, gold, deathImage) {
      this.opponentName = name;
      this.opponentLevel = level;
      this.opponentXPGain = xp;
      this.opponentGoldGain = gold;
      this.opponentDeathImage = deathImage;
      
      this.openPane('victory');

      console.log("Oh look, you survived.");
    },
    //Pulls a random enemy from the database
    generateRandomEnemy() {
      var pickedEnemy = standardEnemies["standardEnemies"][Math.floor(Math.random() * standardEnemies["standardEnemies"].length)];
      console.log(pickedEnemy)
      this.currentOpponent = pickedEnemy.id;
    },
    //This does the heavy lifting for switching between panes based on button press and other factors. Vue Router doesnt make sense here, unfortunately.
    openPane(pane){
      this.landingPane = false;
      this.signUpPane = false;
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
      this.blacksmithBuyPane = false;
      this.blacksmithSellPane = false;
      this.clothierPane = false;
      this.clothierBuyPane = false;
      this.clothierSellPane = false;
      this.generalStorePane = false;
      this.generalStoreBuyPane = false;
      this.generalStoreSellPane = false;
      this.innPane = false;
      this.forestPane = false;
      this.mountainsPane = false;
      this.travelQuestsPane = false;
      this.townButtonsPane = false;
      this.adventureButtonsPane = false;
      this.adventureButtonsContinuePane = false;
      this.randomCombatPane = false;
      this.victoryPane = false;
      this.bottomSpacerPane = false;

      switch (pane){
        case "landing":
          this.landingPane = true;
          this.bottomSpacerPane = true;
          break;
        case "signUp":
          this.signUpPane = true;
          this.bottomSpacePane = true;
          break;
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
          this.levelShopInventory("blacksmith");
          this.levelShopInventory("clothier");
          this.buildShopInventory("general");
          this.buildShopInventory("blacksmith");
          this.buildShopInventory("clothier");
          this.statusPane = true;
          this.blacksmithPane = true;
          this.townButtonsPane = true;
          break;
        case "blacksmithBuy":
          this.statusPane = true;
          this.blacksmithBuyPane = true;
          this.townButtonsPane = true;
          break;
        case "blacksmithSell":
          this.statusPane = true;
          this.blacksmithSellPane = true;
          this.townButtonsPane = true;
          break;
        case "generalstore":
          this.levelShopInventory("blacksmith");
          this.levelShopInventory("clothier");
          this.buildShopInventory("general");
          this.buildShopInventory("blacksmith");
          this.buildShopInventory("clothier");
          this.statusPane = true;
          this.generalStorePane = true;
          this.townButtonsPane = true;
          break;
        case "generalStoreBuy" :
          this.statusPane = true;
          this.generalStoreBuyPane = true;
          this.townButtonsPane = true;
          break;
        case "generalStoreSell" :
          this.statusPane = true;
          this.generalStoreSellPane = true;
          this.townButtonsPane = true;
          break;
        case "clothier":
          this.levelShopInventory("blacksmith");
          this.levelShopInventory("clothier");
          this.buildShopInventory("general");
          this.buildShopInventory("blacksmith");
          this.buildShopInventory("clothier");
          this.statusPane = true;
          this.clothierPane = true;
          this.townButtonsPane = true;
          break;
        case "clothierBuy" :
          this.statusPane = true;
          this.clothierBuyPane = true;
          this.townButtonsPane = true;
          break;
        case "clothierSell":
          this.statusPane = true;
          this.clothierSellPane = true;
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
          this.generateRandomEnemy();
          this.retrieveByID("standardEnemies", this.currentOpponent);
          this.statusPane = true;
          this.randomCombatPane = true;
          this.adventureButtonsPane = true;
          }
          break;
        case "victory":
          this.player.kills++;
          this.statusPane = true;
          this.victoryPane = true;
          this.adventureButtonsContinuePane = true;
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
        if(this.currentItem.armor){
          item.armor = (this.currentItem.armor * (1 + (this.player.characterDexterity / 10))).toFixed(2);
        }
        if(this.currentItem.damage){
          item.damage = (this.currentItem.damage * (1 + (this.player.characterStrength / 10))).toFixed(2);
        }
        if(this.currentItem.health){
          item.health = (this.currentItem.health * (1 + (this.player.characterIntellect / 10))).toFixed(2);
        }
        item.type = this.currentItem.type;
        item.slot = this.currentItem.slot;
        this.player.currentInventoryObjects.push(item);
      }
    },
    //build shop inventory object arrays
    buildShopInventory(store){
      switch (store){
        case "general":
          console.log("General Store Loading..")
          this.generalStoreInventoryObjects = [];
          for (var k=0; k<this.generalStoreInventoryIDs.length; k++){
              this.retrieveByID("adventuringGear", this.generalStoreInventoryIDs[k]);
              var gsitem = {};
              gsitem.name = this.currentItem.name;
              gsitem.id = this.currentItem.id;
              gsitem.value = this.currentItem.value;
              gsitem.description = this.currentItem.description;
               if(this.currentItem.armor){
                  gsitem.armor = (this.currentItem.armor * (1 + (this.player.characterDexterity / 10))).toFixed(2);
               }
                if(this.currentItem.damage){
                  gsitem.damage = (this.currentItem.damage * (1 + (this.player.characterStrength / 10))).toFixed(2);
               }
                if(this.currentItem.health){
                  gsitem.health = (this.currentItem.health * (1 + (this.player.characterIntellect / 10))).toFixed(2);
               }
              gsitem.type = this.currentItem.type;
              gsitem.slot = this.currentItem.slot;
              this.generalStoreInventoryObjects.push(gsitem);
          }
          console.table(this.generalStoreInventoryObjects)
          break;

          case "blacksmith":
          console.log("Blacksmith Loading..")
          this.blacksmithInventoryObjects = [];
          for (var o=0; o<this.blacksmithInventoryIDs.length; o++){
              this.retrieveByID("equipment", this.blacksmithInventoryIDs[o]);
              var bsitem = {};
              bsitem.name = this.currentItem.name;
              bsitem.id = this.currentItem.id;
              bsitem.value = this.currentItem.value;
              bsitem.damage = this.currentItem.damage;
              bsitem.description = this.currentItem.description;
              if(this.currentItem.armor){
                  bsitem.armor = (this.currentItem.armor * (1 + (this.player.characterDexterity / 10))).toFixed(2);
               }
                if(this.currentItem.damage){
                  bsitem.damage = (this.currentItem.damage * (1 + (this.player.characterStrength / 10))).toFixed(2);
               }
                if(this.currentItem.health){
                  bsitem.health = (this.currentItem.health * (1 + (this.player.characterIntellect / 10))).toFixed(2);
               }
              bsitem.type = this.currentItem.type;
              bsitem.slot = this.currentItem.slot;
              this.blacksmithInventoryObjects.push(bsitem);
          }
          console.table(this.blacksmithInventoryObjects)
          break;

          case "clothier":
          console.log("Clothier Loading..")
          this.clothierInventoryObjects = [];
          for (var p=0; p<this.clothierInventoryIDs.length; p++){
              this.retrieveByID("equipment", this.clothierInventoryIDs[p]);
              var chitem = {};
              chitem.name = this.currentItem.name;
              chitem.id = this.currentItem.id;
              chitem.value = this.currentItem.value;
              chitem.armor = this.currentItem.armor;
              chitem.description = this.currentItem.description;
              if(this.currentItem.armor){
                  chitem.armor = (this.currentItem.armor * (1 + (this.player.characterDexterity / 10))).toFixed(2);
               }
                if(this.currentItem.damage){
                  chitem.damage = (this.currentItem.damage * (1 + (this.player.characterStrength / 10))).toFixed(2);
               }
                if(this.currentItem.health){
                  chitem.health = (this.currentItem.health * (1 + (this.player.characterIntellect / 10))).toFixed(2);
               }
              chitem.type = this.currentItem.type;
              chitem.slot = this.currentItem.slot;
              this.clothierInventoryObjects.push(chitem);
          }
          console.table(this.clothierInventoryObjects);
          break;

        default:
          console.log("Incorrect shop input");
          break;
      }
    },
    //sets up the shop inventory ID arrays based on player level
    levelShopInventory(store){
      console.table(equipmentList);
      if (store == "blacksmith"){
        this.blacksmithInventoryIDs = [];
      }
      else if (store == "clothier"){
        this.clothierInventoryIDs = [];
      }
      for (var l=0; l<equipmentList["equipment"].length; l++){
        this.retrieveByID('equipment', equipmentList["equipment"][l].id);
        if (this.player.level >= 0 && this.player.level < 6){
          if (this.currentItem.levelRange == 1){
            if (store == "blacksmith" && this.currentItem.slot == "mainhand"){
              this.blacksmithInventoryIDs.push(this.currentItem.id);
            }
            else if (store == "clothier" && this.currentItem.slot != "mainhand") {
              this.clothierInventoryIDs.push(this.currentItem.id);
            }
          }
        }
        else if (this.player.level > 5 && this.player.level < 11){
          if (this.currentItem.levelRange == 1 || this.currentItem.levelRange == 2){
            if (store == "blacksmith" && this.currentItem.slot == "mainhand"){
              this.blacksmithInventoryIDs.push(this.currentItem.id);
            }
            else if (store == "clothier" && this.currentItem.slot != "mainhand") {
              this.clothierInventoryIDs.push(this.currentItem.id);
            }
          }
        }
        else if (this.player.level > 10 && this.player.level < 16){
          if (this.currentItem.levelRange == 1 || this.currentItem.levelRange == 2 || this.currentItem.levelRange == 3){
            if (store == "blacksmith" && this.currentItem.slot == "mainhand"){
              this.blacksmithInventoryIDs.push(this.currentItem.id);
            }
            else if (store == "clothier" && this.currentItem.slot != "mainhand") {
              this.clothierInventoryIDs.push(this.currentItem.id);
            }
          }
        }
        else if (this.player.level > 15 && this.player.level < 21){
          if (this.currentItem.levelRange == 2 || this.currentItem.levelRange == 3 || this.currentItem.levelRange == 4){
            if (store == "blacksmith" && this.currentItem.slot == "mainhand"){
              this.blacksmithInventoryIDs.push(this.currentItem.id);
            }
            else if (store == "clothier" && this.currentItem.slot != "mainhand") {
              this.clothierInventoryIDs.push(this.currentItem.id);
            }
          }
        }
        else if (this.player.level > 20 && this.player.level < 26){
          if (this.currentItem.levelRange == 3 || this.currentItem.levelRange == 4 || this.currentItem.levelRange == 5){
            if (store == "blacksmith" && this.currentItem.slot == "mainhand"){
              this.blacksmithInventoryIDs.push(this.currentItem.id);
            }
            else if (store == "clothier" && this.currentItem.slot != "mainhand") {
              this.clothierInventoryIDs.push(this.currentItem.id);
            }
          }
        }
        else if (this.player.level > 25 && this.player.level < 31){
          if (this.currentItem.levelRange == 3 || this.currentItem.levelRange == 4 || this.currentItem.levelRange == 5 || this.currentItem.levelRange == 6){
            if (store == "blacksmith" && this.currentItem.slot == "mainhand"){
              this.blacksmithInventoryIDs.push(this.currentItem.id);
            }
            else if (store == "clothier" && this.currentItem.slot != "mainhand") {
              this.clothierInventoryIDs.push(this.currentItem.id);
            }
          }
        }
        else if (this.player.level > 30 && this.player.level < 36){
          if (this.currentItem.levelRange == 4 || this.currentItem.levelRange == 5 || this.currentItem.levelRange == 6 || this.currentItem.levelRange == 7){
            if (store == "blacksmith" && this.currentItem.slot == "mainhand"){
              this.blacksmithInventoryIDs.push(this.currentItem.id);
            }
            else if (store == "clothier" && this.currentItem.slot != "mainhand") {
              this.clothierInventoryIDs.push(this.currentItem.id);
            }
          }
        }
        else{
          console.log("How did you get here?");
        }
      }
    },
    //removes duplicate items from shop sell inventory
    removeShopDuplicates(arr){
      var uniques = [];
      var itemsFound = {};
      for(var i = 0, l = arr.length; i < l; i++) {
          var stringified = JSON.stringify(arr[i]);
          if(itemsFound[stringified]) { continue; }
          uniques.push(arr[i]);
          itemsFound[stringified] = true;
      }
      return uniques;
    },
    //sells a piece of adventuring gear to player
    buyItem(id){
      var existing = false;
      var existingItemIndex = {};
      for (var r=0; r<this.player.currentInventoryIDs.length; r++){
        if (this.player.currentInventoryIDs[r][0] == id){
         existing = true;
         existingItemIndex = r;
        }
      }
      this.retrieveByID('adventuringGear', id);
      if (this.player.gold - this.currentItem.value >= 0){
        if (existing){
        this.player.currentInventoryIDs[existingItemIndex][1]++;
        console.log(this.currentItem.value)
        this.modifyPlayerStats('gold', this.currentItem.value, "-");
        this.buildInventory();
        }
        else{
          this.player.currentInventoryIDs.push(
            [id, 1, 'gear']
          );
          this.modifyPlayerStats('gold', this.currentItem.value, "-");
          this.buildInventory();
        }
      }
      else{
        alert("You cannot afford this.");
      }
    },
    //buys a piece of adventuring gear from players
    sellItem(id){
        var existingSellIndex;
        var playerHas = false
        for(var y=0; y<this.player.currentInventoryIDs.length; y++){
          if (this.player.currentInventoryIDs[y][0] == id){
            existingSellIndex = y;
            playerHas = true;
            console.log(playerHas);
          }
        }
        if (playerHas){
          this.retrieveByID('adventuringGear', id);
          this.player.currentInventoryIDs[existingSellIndex][1]--;
          if (this.player.currentInventoryIDs[existingSellIndex][1] == 0){
            console.table(this.player.currentInventoryObjects);
            console.log("Zeroed")
            this.player.currentInventoryIDs.splice(existingSellIndex, 1);
            this.buildInventory();
            console.table(this.player.currentInventoryObjects);
          }
          this.modifyPlayerStats('gold', (this.currentItem.value / 2), "+");
          this.buildInventory();
          console.table(this.player.currentInventoryObjects);
        }
        else{
          return;
        }  
    },
    //sells a piece of equipment to player
    buyGear(id){
      var existing = false;
      var existingItemIndex = {};
      for (var r=0; r<this.player.currentInventoryIDs.length; r++){
        if (this.player.currentInventoryIDs[r][0] == id){
         existing = true;
         existingItemIndex = r;
        }
      }
      this.retrieveByID('equipment', id);
      if (this.player.gold - this.currentItem.value >= 0){
        if (existing){
        this.player.currentInventoryIDs[existingItemIndex][1]++;
        console.log(this.currentItem.value);
        this.modifyPlayerStats('gold', this.currentItem.value, "-");
        this.buildInventory();
        }
        else{
          this.player.currentInventoryIDs.push(
            [id, 1, 'equipment']
          );
          this.modifyPlayerStats('gold', this.currentItem.value, "-");
          this.buildInventory();
        }
      }
      else{
        alert("You cannot afford this.");
      }
    },
    //buys a piece of equipment from player
    sellGear(id){
       var existingSellIndex;
        var playerHas = false
        for(var y=0; y<this.player.currentInventoryIDs.length; y++){
          if (this.player.currentInventoryIDs[y][0] == id){
            console.log("Has");
            existingSellIndex = y;
            playerHas = true;
            console.log(playerHas);
          }
        }
        if (playerHas){
          console.log("Selling")
          this.retrieveByID('equipment', id);
          this.player.currentInventoryIDs[existingSellIndex][1]--;
          if (this.player.currentInventoryIDs[existingSellIndex][1] == 0){
            console.table(this.player.currentInventoryObjects);
            console.log("Zeroed");
            this.player.currentInventoryIDs.splice(existingSellIndex, 1);
            this.buildInventory();
            console.table(this.player.currentInventoryObjects);
          }
          this.modifyPlayerStats('gold', (this.currentItem.value / 2), "+");
          this.buildInventory();
          console.table(this.player.currentInventoryObjects);
        }
        else{
          return;
        }
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
