<template>
    <div id="equipment" class="main-screen">
        <br><br><br>
    <table id="equipment-pane">
        <tr>
        <td></td>
        <td class="slot"><div id="helm-slot" class="gear-preview"></div></td>
        <td></td>
        </tr>
        <tr>
        <td class="slot"><div id="bag-slot" class="gear-preview"></div></td>
        <td class="slot"><div id="chest-slot" class="gear-preview"></div></td>
        <td class="slot"><div id="neck-slot" class="gear-preview"></div></td>
        </tr>
        <tr>
        <td class="slot"><div id="mainhand-slot" class="gear-preview"></div></td>
        <td class="slot"><div id="greave-slot" class="gear-preview"></div></td>
        <td class="slot"><div id="offhand-slot" class="gear-preview"></div></td>
        </tr>
        <tr>
        <td></td>
        <td class="slot"><div id="sabaton-slot" class="gear-preview"></div></td>
        <td></td>
        </tr>
    </table>
    </div>
</template>

<script>
export default {
  name: "Equipment",
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#equipment{
  background-image: url("../../assets/images/tumblr_ovlwvoWy2i1qmh1uqo1_500.png");
  background-size: cover;

}
#helm-slot{
    background-image: url("../../assets/images/warrior-helmet-128x128-1512023.png");
}
#bag-slot{
    background-image: url("../../assets/images/horn-128x128-1512053.png");
}
#chest-slot{
    background-image: url("../../assets/images/armor-128x128-1512070.png");
}
#neck-slot{
    background-image: url("../../assets/images/necklace-128x128-1512042.png");
}
#mainhand-slot{
    background-image: url("../../assets/images/sword.png");
}
#greave-slot{
    background-image: url("../../assets/images/sabatons.png");
}
#offhand-slot{
    background-image: url("../../assets/images/shield-128x128-1512034.png");
}
#sabaton-slot{
    background-image: url("../../assets/images/armor-128x128-1512070.png");
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
