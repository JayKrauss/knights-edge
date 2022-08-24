<template>
  <div id="bottom-spacer" class="col-12">
     
  </div>
</template>

<script>
export default {
  name: "BottomSpacer",
  props: [],
  methods: {
   
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
 #bottom-spacer{
     bottom:0;
     width: 100%;
     height: 70px;
     background: black;
     margin-left: auto;
     margin-right: auto;
     border-top: gray 3px solid;
     background: url("../../assets/images/concrete_wall.png");
 }
</style>