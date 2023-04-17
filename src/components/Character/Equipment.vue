<template>
    <div id="equipment" class="main-screen col-12">
        <span id="equipment-header">EQUIPMENT</span>
        <br>
    <table id="equipment-pane" class="col-12" @mouseover="showUnequip" @click="unequipGear">
        <tr>
        <td><span class="player-stats">Damage: <span id="player-damage"></span>{{playerDamage.toFixed(2)}}</span></td>
        <td class="slot"><img :src=images.helmImage :alt=helm.id id="helm-slot" class="gear-preview"><span id="unequip-helm" class="unequip">UNEQUIP</span></td>
        <td><span class="player-stats">Armor: <span id="player-armor"></span>{{playerArmor.toFixed(2)}}</span></td>
        </tr>
        <tr>
        <td class="slot"><img :src=images.shoulderImage :alt=shoulder.id id="shoulder-slot" class="gear-preview"><span id="unequip-shoulder" class="unequip">UNEQUIP</span></td>
        <td class="slot"><img :src=images.chestImage :alt=chest.id id="chest-slot" class="gear-preview"><span id="unequip-chest" class="unequip">UNEQUIP</span></td>
        <td class="slot"><img :src=images.neckImage :alt=neck.id id="neck-slot" class="gear-preview"><span id="unequip-neck" class="unequip">UNEQUIP</span></td>
        </tr>
        <tr>
        <td class="slot"><img :src=images.mainhandImage :alt=mainhand.id id="mainhand-slot" class="gear-preview"><span id="unequip-mainhand" class="unequip">UNEQUIP</span></td>
        <td class="slot"><img :src=images.handsImage :alt=hands.id id="hands-slot" class="gear-preview"><span id="unequip-hands" class="unequip">UNEQUIP</span></td>
        <td class="slot"><img :src=images.offhandImage :alt=offhand.id id="offhand-slot" class="gear-preview"><span id="unequip-offhand" class="unequip">UNEQUIP</span></td>
        </tr>
        <tr>
        <td><span class="player-stats">Kills: <span id="player-kills"></span>{{playerKills}}</span></td>
        <td class="slot"><img :src=images.feetImage :alt=feet.id id="feet-slot" class="gear-preview"><span id="unequip-feet" class="unequip">UNEQUIP</span></td>
        <td><span class="player-stats">Deaths: <span id="player-deaths"></span>{{playerDeaths}}</span></td>
        </tr>
    </table>
    </div>
</template>

<script>
export default {
  name: "Equipment",
  props: [
    "equippedItemsArray",
    "playerDamage",
    "playerArmor",
    "playerKills",
    "playerDeaths"
  ],
  mounted(){
    this.clearImages();
    this.fillSlots();
    this.updateImages();
    console.log("Mounted equip");
    console.table(this.equippedItemsArray)
  },
  beforeUnmount() {
    this.clearImages();
  },
  watch: { 
    equippedItemsArray: function() { 
        this.fillSlots();
        this.updateImages();
    }
  },
  data() {
    return {
      helm : {},
      chest : {},
      shoulder : {},
      neck : {},
      mainhand : {},
      hands : {},
      offhand : {},
      feet : {},
      images: {
        helmImage: '',
        chestImage: '',
        shoulderImage: '',
        neckImage: '',
        mainhandImage: '',
        handsImage: '',
        offhandImage: '',
        feetImage: '',
      }
    }
  },
  methods: {
    fillSlots() {
      this.clearSlots();
      this.clearImages();
      for (var i=0; i<this.equippedItemsArray.length; i++){
        switch (this.equippedItemsArray[i].slot){
          case "helm":
            this.helm = this.equippedItemsArray[i];
            break;
          case "chest":
            this.chest = this.equippedItemsArray[i];
            break; 
          case "shoulder":
            this.shoulder = this.equippedItemsArray[i];
            break;
          case "neck":
            this.neck = this.equippedItemsArray[i];
            break;
          case "mainhand":
            this.mainhand = this.equippedItemsArray[i];
            break;
          case "hands":
            this.hands = this.equippedItemsArray[i];
            break;
          case "offhand":
            this.offhand = this.equippedItemsArray[i];
            break;
          case "feet":
            this.feet = this.equippedItemsArray[i];
            break;
          default:
            continue;
        }
      }
      this.updateImages();
    },
    unequipGear(e) {
      if (e.target.matches('.gear-preview')) {
        var itemID = "";
        itemID = e.target.alt;
        console.log(itemID)
        if (itemID != undefined && itemID != '') {
          this.clearImages();
          this.$emit('unequipItem', itemID);
          this.updateImages();
        }
      }
    },
    clearImages() {
      this.images = {
        helmImage: require('@/assets/images/HD_transparent_picture.png'),
        chestImage: require('@/assets/images/HD_transparent_picture.png'),
        shoulderImage: require('@/assets/images/HD_transparent_picture.png'),
        neckImage: require('@/assets/images/HD_transparent_picture.png'),
        mainhandImage: require('@/assets/images/HD_transparent_picture.png'),
        handsImage: require('@/assets/images/HD_transparent_picture.png'),
        offhandImage: require('@/assets/images/HD_transparent_picture.png'),
        feetImage: require('@/assets/images/HD_transparent_picture.png'),
      }
    },
    clearSlots() {
      this.helm = {};
      this.chest = {};
      this.shoulder = {};
      this.neck = {};
      this.mainhand = {};
      this.hands = {};
      this.offhand = {};
      this.feet = {};
    },
    updateImages() {
      this.clearImages();
      if (!Object.keys(this.helm).length == 0){
        this.images.helmImage = this.helm.image;
        };
      if (!Object.keys(this.chest).length == 0){
        this.images.chestImage = this.chest.image;
        };
      if (!Object.keys(this.shoulder).length == 0){
        this.images.shoulderImage = this.shoulder.image;
        };
      if (!Object.keys(this.neck).length == 0){
          this.images.neckImage = this.neck.image;
        };
      if (!Object.keys(this.mainhand).length == 0){
          this.images.mainhandImage = this.mainhand.image;
        };
      if (!Object.keys(this.hands).length == 0){
        this.images.handsImage = this.hands.image;
        };
      if (!Object.keys(this.offhand).length == 0){
        this.images.offhandImage = this.offhand.image;
        };
      if (!Object.keys(this.feet).length == 0){
        this.images.feetImage = this.feet.image;
        };
    },
  
    showUnequip(e){
      if (e.target.matches('.gear-preview')) {
        var itemID = "";
        itemID = e.target.alt
        if (itemID != undefined && itemID != ''){
          e.target.children[0].classList.add('show');
          setTimeout(function() { e.target.children[0].classList.remove('show'); }, 250);
        }
      }
    },
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#equipment-header{
  color: white;
  font-weight: bold;
  font-size: 40px;
  margin-bottom: -20px;
}
#equipment-pane{
  background-image: url("../../assets/images/equipmentbackground.png");
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
}
.player-stats{
  color: white;
  font-weight: bold;
  font-size: 18px;
}
#player-damage, #player-armor{
  color: white;
  font-weight: bold;
  font-size: 18px;
}
#helm-slot{
  background-image: url("../../assets/images/CharacterWindow_Slot_Head.png");
}
#shoulder-slot{
  background-image: url("../../assets/images/CharacterWindow_Slot_Shoulders.png");
}
#chest-slot{
  background-image: url("../../assets/images/CharacterWindow_Slot_Chest.png");
}
#neck-slot{
  background-image: url("../../assets/images/CharacterWindow_Slot_Necklace.png");
}
#mainhand-slot{
  background-image: url("../../assets/images/CharacterWindow_Slot_Weapon.png");  
}
#hands-slot{
  background-image: url("../../assets/images/CharacterWindow_Slot_Gloves.png");  
}
#offhand-slot{
  background-image: url("../../assets/images/CharacterWindow_Slot_Shield.png");  
}
#feet-slot{
  background-image: url("../../assets/images/CharacterWindow_Slot_Boots.png");  
}
.gear-preview{
    width: 100%;
    height: 100%;
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    opacity: 0.70;
    align-content: center;
}
.gear-preview:hover{
  border: solid red 3px;
  border-radius: 10px;
}
table{
  margin-left: auto;
  margin-right: auto;
}
tr {
  width: 400px;
  margin: 20px auto;
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.slot {
  width: 80px;
  height: 80px;
  border: 4px black dotted;
  border-radius: 20px;
  background: rgba(0,0,0,.55)
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>

 