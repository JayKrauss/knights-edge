<template>
    <div id="equipment" class="main-screen">
        <span id="equipment-header">EQUIPMENT</span>
    <table id="equipment-pane">
        <tr>
        <td></td>
        <td class="slot"><div id="helm-slot" class="gear-preview"></div></td>
        <td></td>
        </tr>
        <tr>
        <td class="slot"><div id="shoulder-slot" class="gear-preview"></div></td>
        <td class="slot"><div id="chest-slot" class="gear-preview"></div></td>
        <td class="slot"><div id="neck-slot" class="gear-preview"></div></td>
        </tr>
        <tr>
        <td class="slot"><div id="mainhand-slot" class="gear-preview"></div></td>
        <td class="slot"><div id="legs-slot" class="gear-preview"></div></td>
        <td class="slot"><div id="offhand-slot" class="gear-preview"></div></td>
        </tr>
        <tr>
        <td></td>
        <td class="slot"><div id="feet-slot" class="gear-preview"></div></td>
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
  ],
  mounted(){
    this.fillSlots();
  },
  data() {
    return {
      helm : {},
      chest : {},
      shoulder : {},
      neck : {},
      mainhand : {},
      legs : {},
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
          case "legs":
            this.legs = this.equippedItemsArray[i];
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
    updateImages() {
      if (!Object.keys(this.helm).length == 0){document.querySelector("#helm-slot").style.backgroundImage = `url(${this.helm.image})`};
      if (!Object.keys(this.chest).length == 0){document.querySelector("#chest-slot").style.backgroundImage = `url(${this.chest.image})`};
      if (!Object.keys(this.shoulder).length == 0){document.querySelector("#shoulder-slot").style.backgroundImage = `url(${this.shoulder.image})`};
      if (!Object.keys(this.neck).length == 0){document.querySelector("#neck-slot").style.backgroundImage = `url(${this.neck.image})`};
      if (!Object.keys(this.mainhand).length == 0){document.querySelector("#mainhand-slot").style.backgroundImage = `url(${this.mainhand.image})`};
      if (!Object.keys(this.legs).length == 0){document.querySelector("#legs-slot").style.backgroundImage = `url(${this.legs.image})`};
      if (!Object.keys(this.offhand).length == 0){document.querySelector("#offhand-slot").style.backgroundImage = `url(${this.offhand.image})`};
      if (!Object.keys(this.feet).length == 0){document.querySelector("#feet-slot").style.backgroundImage = `url(${this.feet.image})`};
    }
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
  background-size: cover;
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
#legs-slot{
  background-image: url("../../assets/images/CharacterWindow_Slot_Pants.png");  
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
