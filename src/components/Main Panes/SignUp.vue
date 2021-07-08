<template>
  <div id="log-in" class="main-screen">
    <br><br><br>
    <div class="shop-text"><strong>{{ logInText }}</strong></div>
    <br><br>
    <h4>Tell us your Email.</h4>
    <input type="text" id="email-input"><br>
    <h4>Tell us your passcode.</h4>
    <input type="text" id="password-input"><br>
    <button class="shop-button" @click="signUp">Sign Up</button>
  </div>
</template>

<script>
export default {
  name: "SignUp",
  props: [],
  data(){
    return{
      logInText : "Welcome to town, adventurer.",
    }
  },
  methods: {
    signUp(){
      var email = document.getElementById("email-input").value;
      var password = document.getElementById("password-input").value;
      this.$emit('signUp', email, password);
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