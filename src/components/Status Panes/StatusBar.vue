<template>
  <div id="status-bar">
      <table>
          <tr>
              <td>
                <button @click="openCharacter">📜</button>
              </td>
              <td>
                  Level: <br>
                  <span id="player-level">{{ level }}<span id="level-change" class="shown-changes"></span></span>
              </td>
              <td>
                  XP: <br>
                  <span id="current-xp">{{ xp }}</span>/ <span id="to-level">{{ toLevel }}<span id="xp-change" class="shown-changes"></span></span>
              </td>
              <td>
                  Gold: <br>
                  <span id="gold-amount">{{ gold.toFixed(2) }}<span id="gold-change" class="shown-changes"></span></span>
              </td>
              <td>
                  HP: <br>
                  <span id="current-HP">{{ currentHP.toFixed(2) }}</span>/<span id="max-HP">{{ maxHP.toFixed(2) }}<span id="hp-change" class="shown-changes"></span></span>
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
    "maxHP",
    "levelChange",
    "xpChange",
    "goldChange",
    "hpChange",
  ],
  methods: {
    openCharacter() {
      this.$emit("openPane", "character")
    },
    showLevelChange() {
      var showingLevelChange = document.getElementById("level-change");
      showingLevelChange.innerHTML = this.levelChange;
      showingLevelChange.classList.add('show');
      setTimeout(function() { showingLevelChange.classList.remove('show'); }, 250);
    },
    showXPChange(){
      var showingXPChange = document.getElementById("xp-change");
      showingXPChange.innerHTML = this.xpChange;
      showingXPChange.classList.add('show');
      setTimeout(function() { showingXPChange.classList.remove('show'); }, 250);
    },
    showGoldChange() {
      var showingGoldChange = document.getElementById("gold-change");
      showingGoldChange.innerHTML = this.goldChange;
      showingGoldChange.classList.add('show');
      setTimeout(function() { showingGoldChange.classList.remove('show'); }, 250);
    },
    showHPChange() {
      var showingHPChange = document.getElementById("hp-change");
      showingHPChange.innerHTML = this.hpChange;
      showingHPChange.classList.add('show');
      setTimeout(function() { showingHPChange.classList.remove('show'); }, 250);
    }
  },
  watch: {
    levelChange: function() { 
        this.showLevelChange()
    },
    xpChange: function() { 
        this.showXPChange()
    },
    goldChange: function() { 
        this.showGoldChange()
    },
    hpChange: function() { 
        this.showHPChange()
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#status-bar{
  top:0;
  width: 500px;
  height: 60px;
  background: black;
  margin-left: auto;
  margin-right: auto;
  color: white;
  font-size: 15px;
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