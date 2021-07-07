<template>
    <div id="equipment" class="main-screen">
        <span id="equipment-header">EQUIPMENT</span>
        <br>
    <table id="equipment-pane" @mouseover="showUnequip" @click="unequipGear">
        <tr>
        <td><span class="player-stats">Damage: <span id="player-damage"></span></span></td>
        <td class="slot"><div value="" id="helm-slot" class="gear-preview"><span id="unequip-helm" class="unequip">UNEQUIP</span></div></td>
        <td><span class="player-stats">Armor: <span id="player-armor"></span></span></td>
        </tr>
        <tr>
        <td class="slot"><div value="" id="shoulder-slot" class="gear-preview"><span id="unequip-shoulder" class="unequip">UNEQUIP</span></div></td>
        <td class="slot"><div value="" id="chest-slot" class="gear-preview"><span id="unequip-chest" class="unequip">UNEQUIP</span></div></td>
        <td class="slot"><div value="" id="neck-slot" class="gear-preview"><span id="unequip-neck" class="unequip">UNEQUIP</span></div></td>
        </tr>
        <tr>
        <td class="slot"><div value="" id="mainhand-slot" class="gear-preview"><span id="unequip-mainhand" class="unequip">UNEQUIP</span></div></td>
        <td class="slot"><div value="" id="hands-slot" class="gear-preview"><span id="unequip-hands" class="unequip">UNEQUIP</span></div></td>
        <td class="slot"><div value="" id="offhand-slot" class="gear-preview"><span id="unequip-offhand" class="unequip">UNEQUIP</span></div></td>
        </tr>
        <tr>
        <td></td>
        <td class="slot"><div value="" id="feet-slot" class="gear-preview"><span id="unequip-feet" class="unequip">UNEQUIP</span></div></td>
        <td></td>
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
    "playerArmor"
  ],
  mounted(){
    this.fillSlots();
    this.updateStatDisplay();
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
    }
  },
  methods: {
    fillSlots() {
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
      this.updateImages()
    },
    unequipGear(e) {
      if (e.target.matches('.gear-preview')) {
        var itemID = "";
        itemID = e.target.value
        if (itemID != undefined){
           this.$emit('unequipItem', itemID);
        }
      }
    },
    updateImages() {
      if (!Object.keys(this.helm).length == 0){
        document.querySelector("#helm-slot").style.backgroundImage = `url(${this.helm.image})`
        document.querySelector("#helm-slot").value = this.helm.id;
        };
      if (!Object.keys(this.chest).length == 0){
        document.querySelector("#chest-slot").style.backgroundImage = `url(${this.chest.image})`
        document.querySelector("#chest-slot").value = this.chest.id;
        };
      if (!Object.keys(this.shoulder).length == 0){
        document.querySelector("#shoulder-slot").style.backgroundImage = `url(${this.shoulder.image})`
        document.querySelector("#shoulder-slot").value = this.shoulder.id;
        };
      if (!Object.keys(this.neck).length == 0){
        document.querySelector("#neck-slot").style.backgroundImage = `url(${this.neck.image})`
        document.querySelector("#neck-slot").value = this.neck.id;
        };
      if (!Object.keys(this.mainhand).length == 0){
        document.querySelector("#mainhand-slot").style.backgroundImage = `url(${this.mainhand.image})`
        document.querySelector("#mainhand-slot").value = this.mainhand.id;
        };
      if (!Object.keys(this.hands).length == 0){
        document.querySelector("#hands-slot").style.backgroundImage = `url(${this.hands.image})`
        document.querySelector("#hands-slot").value = this.hands.id;
        };
      if (!Object.keys(this.offhand).length == 0){
        document.querySelector("#offhand-slot").style.backgroundImage = `url(${this.offhand.image})`
        document.querySelector("#offhand-slot").value = this.offhand.id;
        };
      if (!Object.keys(this.feet).length == 0){
        document.querySelector("#feet-slot").style.backgroundImage = `url(${this.feet.image})`
        document.querySelector("#feet-slot").value = this.feet.id;
        };
    },
    updateStatDisplay() {
      document.querySelector("#player-damage").innerHTML = this.playerDamage.toFixed(2);
      document.querySelector("#player-armor").innerHTML = this.playerArmor.toFixed(2);
    },
    showUnequip(e){
      if (e.target.matches('.gear-preview')) {
        var itemID = "";
        itemID = e.target.value
        if (itemID != undefined){
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
#equipment{
  background-image: url("../../assets/images/equipmentbackground.png");
  background-position: center;
  background-size: cover;
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

 