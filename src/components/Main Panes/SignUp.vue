<template>
  <div id="log-in" class="main-screen col-12">
    <br />
    <br />
    <br />
    <div class="shop-text">
      <strong>{{ logInText }}</strong>
    </div>
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <div id="loading"></div>
    <span class="shop-text">Tell us your Email.</span>
    <br />
    <br />
    <br />
    <input type="text" id="email-input" />
    <br />
    <br />
    <br />
    <span class="shop-text">Tell us your passcode.</span>
    <br />
    <br />
    <br />
    <input type="password" id="password-input" />
    <br />
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
      document.querySelector("#loading").classList.add('show');
    }
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#log-in {
  background-image: url("../../assets/images/DxRz37sXcAEQ6Cm.jpg");
  background-size: cover;
}
</style>