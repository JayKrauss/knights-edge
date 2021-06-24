<template>
    <div id="equipment">
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
        <td class="slot"></td>
        <td></td>
        <td class="slot"></td>
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
  width: 500px;
  height: 700px;
  margin-left: auto;
  margin-right: auto;
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
