<template>
  <div id="landing" class="main-screen col-12">
    <br><br><br><br><br><br>
    <div class="shop-text"><strong>{{ logInText }}</strong></div>
    <br><br><br><br><br><br><br>
    <button class="shop-button" @click="createCharacter">Create Character</button><br><br>
    <button class="shop-button" @click="logIn">Login</button>
  </div>
</template>

<script>
export default {
  name: "Landing",
  props: [],
  data(){
    return{
      logInText : "Greetings! Are you new, or returning?"
    }
  },
  methods: {
    createCharacter(){
        this.$emit('openPane', 'signUp')
    },
    logIn(){
        this.$emit('openPane', 'login');
    }
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
 #landing{
     background-image: url("../../assets/images/DxRz37sXcAEQ6Cm.jpg");
     background-size: cover;
 }

</style>