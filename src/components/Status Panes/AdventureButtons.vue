<template>
  <div id="adventure-buttons" class="col-12">
    <button @click="openShops" class="town-button">Retreat</button>
  </div>
</template>

<script>
export default {
  name: "AdventureButtons",
  props: [],
  methods: {
    openShops() {
      this.$emit("openPane", "shops")
    },
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#adventure-buttons {
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 70px;
  background: black;
  margin-left: auto;
  margin-right: auto;
  border-top: gray 3px solid;
  background: url("../../assets/images/concrete_wall.png");
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>