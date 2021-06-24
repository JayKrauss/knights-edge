<template>
    <div id="equipment" class="main-screen">
        <br><br><br><br>
    <table id="equipment-pane">
        <tr>
        <td></td>
        <td class="slot"></td>
        <td></td>
        </tr>
        <tr>
        <td class="slot"></td>
        <td class="slot"></td>
        <td class="slot"></td>
        </tr>
        <tr>
        <td class="slot"></td>
        <td class="slot"></td>
        <td class="slot"></td>
        </tr>
        <tr>
        <td></td>
        <td class="slot"></td>
        <td></td>
        </tr>
    </table>
    </div>
</template>

<script>
export default {
  name: "Equipment",
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#equipment{
  background-image: url("../assets/images/tumblr_ovlwvoWy2i1qmh1uqo1_500.png");
  background-size: cover;
}
table{
  margin-left: auto;
  margin-right: auto;
}
tr {
  width: 400px;
  margin: 20px auto;
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.slot {
  width: 80px;
  height: 80px;
  border: 4px black dotted;
  border-radius: 20px;
  background: rgba(0,0,0,.35)
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
