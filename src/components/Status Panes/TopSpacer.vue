<template>
  <div id="status-bar" class="col-12">
  </div>
</template>

<script>
export default {
  name: "TopSpacer",
  props: [

  ],
  methods: {

  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#status-bar{
  top:0;
  width: 100%;
  height: 50px;
  background: black;
  margin-left: auto;
  margin-right: auto;
  color: white;
  font-size: 15px;
  font-weight: bold;
  background-image: url("../../assets/images/concrete_wall.png");
  border-bottom: gray 3px solid;
}

</style>