<template>
  <div id="status-bar">
      <table>
          <tr>
              <td>
                <button @click="openCharacter">📜</button>
              </td>
              <td>
                  Level: <span id="player-level">{{ level }}</span>
              </td>
              <td>
                  XP: <span id="current-xp">{{ xp }}</span>/ <span id="to-level">{{ toLevel }}</span>
              </td>
              <td>
                  Gold: <span id="gold-amount">{{ gold }}</span>
              </td>
              <td>
                  HP: <span id="current-HP">{{ currentHP }}</span>/<span id="max-HP">{{ maxHP }}</span>
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
  methods: {
    openCharacter() {
      this.$emit("openCharacter")
    },
  }
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
  background-image: url("../../assets/images/concrete_wall.png");
  border-bottom: gray 3px solid;
}
#player-level{
  color: lightblue;
}
#current-xp, #to-level{
  color: green;
}
#gold-amount{
  color: gold;
}
#current-HP, #max-HP{
  color: red;
}
table{
  margin-left: auto;
  margin-right: auto;
}
tr {
  width: 400px;
  margin: 20x auto;
  padding: 10px 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>