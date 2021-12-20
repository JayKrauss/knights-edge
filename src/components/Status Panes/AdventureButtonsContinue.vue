<template>
  <div id="adventure-buttons-continue" class="col-12">
    <button @click="openShops" class="town-button">Retreat</button>
    <button @click="continueFighting" class="town-button">Fight On</button>
  </div>
</template>

<script>
export default {
  name: "AdventureButtonsContinue",
  props: [],
  methods: {
    openShops() {
      this.$emit("openPane", "shops")
    },
    continueFighting() {
      this.$emit("openPane", "randomCombat")
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#adventure-buttons-continue {
  bottom: 0;
  width: 500px;
  height: 70px;
  background: black;
  margin-left: auto;
  margin-right: auto;
  border-top: gray 3px solid;
  background: url("../../assets/images/concrete_wall.png");
}
</style>