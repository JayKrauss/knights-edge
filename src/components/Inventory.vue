<template>
  <div id="inventory" class="main-screen">
      <br><br>
      <ul id="inventory-list">
          <li class="inventory-item" v-for="(item, index) in currentInventory" :key="index">
              <p>{{ item.name }}</p>
          </li>
      </ul>
  </div>
</template>

<script>
export default {
  name: "Inventory",
  props: [
    "currentInventory",
  ] 
};

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
 #inventory{
     background-image: url("../assets/images/backpack.png");
     background-size: cover;
     background-position: center;
 }
 #inventory-list{
     width: 300px;
     min-height: 200px;
     margin-left: auto;
     margin-right: auto;
     background: rgba(0,0,0,.5);
 }
 #inventory-item{
     background: gray;
     color: white;
 }

</style>