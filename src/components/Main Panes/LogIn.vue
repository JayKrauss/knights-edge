<template>
  <div id="log-in" class="main-screen">
    <br><br><br>
    <div class="shop-text"><strong>{{ logInText }}</strong></div>
    <br><br>
    <h4>Tell us your name.</h4>
    <input type="text" id="username-input"><br>
    <h4>Tell us your passcode.</h4>
    <input type="text" id="userpassword-input"><br>
    <button class="shop-button" @click="logIn">Login</button>
  </div>
</template>

<script>
export default {
  name: "LogIn",
  props: [],
  data(){
    return{
      logInText : "Welcome back, adventurer."
    }
  },
  methods: {
    logIn(){
        this.$emit('openLogIn');
    }
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
 #log-in{
     background-image: url("../../assets/images/DxRz37sXcAEQ6Cm.jpg");
     background-size: cover;
 }

</style>