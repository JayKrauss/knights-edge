<template>
  <div id="adventure-buttons">
      <button @click="openShops">Retreat</button>
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
 #adventure-buttons{
     bottom:0;
     width: 500px;
     height: 70px;
     background: black;
     margin-left: auto;
     margin-right: auto;
     border-top: gray 3px solid;
     background: url("../../assets/images/concrete_wall.png");
 }
 button{
     height: 50px;
     width: 105px;
     margin: 10px;
     color: white;
     border-radius: 5px;
     background: url("../../assets/images/buttonStock1.png");
     background-size: inherit;
     background-position: center;
     background-repeat: no-repeat;
 }
</style>