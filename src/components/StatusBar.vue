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
  height: 50px;
  background: black;
  margin-left: auto;
  margin-right: auto;
  color: white;
  font-size: large;
  font-weight: bold;
  background-image: url("../assets/images/concrete_wall.png");
  border-bottom: gray 3px solid;
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