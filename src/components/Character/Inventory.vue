<template>
  <div id="inventory" class="main-screen">
      <br><br>
      <ul id="inventory-list">
        <br>
          <li class="inventory-item" v-for="(item, index) in currentInventory" :key="index">
              <p>{{ item.name }} - {{item.amount}}</p>
          </li>
          <br>
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
     background-image: url("../../assets/images/inventory.jpg");
     background-size: cover;
     background-position: center;
 }
 #inventory-list{
     width: 300px;
     min-height: 200px;
     margin-left: auto;
     margin-right: auto;
     background: rgba(0,0,0,.7);
     color: white;
     list-style: none;
     justify-content: space-evenly;
 }
 #inventory-item{
     background: gray;
 }

</style>