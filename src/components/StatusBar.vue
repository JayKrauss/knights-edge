<template>
  <div id="status-bar">
      <table>
          <tr>
              <td>
                  Level: {{ level }}
              </td>
              <td>
                  XP: {{ xp }}/ {{ toLevel }}
              </td>
              <td>
                  Gold: {{ gold }}gp
              </td>
              <td>
                  HP: {{ currentHP }}/{{ maxHP }}
              </td>
          </tr>
      </table>
  </div>
</template>

<script>
export default {
  name: "StatusBar",
  props: [
    "level",
    "xp",
    "toLevel",
    "gold",
    "currentHP",
    "maxHP"
  ],
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#status-bar{
  top:0;
  width: 500px;
  height: 40px;
  background: black;
  margin-left: auto;
  margin-right: auto;
  color: white;
  font-weight: bold;
  background-image: url("../assets/images/buttonStock1d.png");
  background-size: cover;
}
table{
  margin-left: auto;
  margin-right: auto;
}
tr {
  width: 400px;
  margin: 20x auto;
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>