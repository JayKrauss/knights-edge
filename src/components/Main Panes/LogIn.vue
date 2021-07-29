<template>
  <div id="log-in" class="main-screen col-12">
    <br><br><br>
    <div class="shop-text"><strong>{{ logInText }}</strong></div>
    <br><br>
    <div id="loading"></div>
    <span class="shop-text">Tell us your Email.</span><br><br><br>
    <input type="text" id="email-input"><br><br><br>
    <span class="shop-text">Tell us your passcode.</span><br><br><br>
    <input type="text" id="password-input"><br>
    <button class="shop-button" @click="logIn">Login</button>
  </div>
</template>

<script>
export default {
  name: "LogIn",
  props: [],
  data(){
    return{
      logInText : "Welcome back, adventurer.",
    }
  },
  methods: {
    logIn(){
      var email = document.getElementById("email-input").value;
      var password = document.getElementById("password-input").value;
      this.$emit('sendLoginRequest', email, password);
      document.querySelector("#loading").classList.add('show');
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