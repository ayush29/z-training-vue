<template>
    <div>
        <div id= "login" v-show="loginShow" class="modal">
            <div class="modalContent">
                <div id ="modalHeader">
                    <h2>Login</h2>
                    <span class="close" @click="modalClose">&times;</span>
                </div>
                <button id="continueWithGoogle">Continue with Google</button>
                <hr>
                <input type="text" id="loginEmailInput" placeholder="Email">
                <input type="submit" value="Login">
                <hr>
                <div>New to Zomato?<span id="newAccount" @click="signup">Create Account</span></div>
            </div>
        </div>
        <div id="signup" v-show="signupShow" class="modal">
            <div class="modalContent">
                <div id="modalHeader">
                    <h2>Signup</h2>
                    <span class="close" @click="modalClose">&times;</span>
                </div>
                <input type="text" id="fullnameInput" placeholder="Full Name">
                <input type="text" id="signupEmailInput" placeholder="Email">
                <input type="tel" id="signupPhoneInput" placeholder="Phone">
                <input type="submit" value="Create Account">
                <hr>
                <button id="continueWithGoogle">Continue with Google</button>
                <hr>
                <div>Already have an account?<span id="haveAccount" @click="login">Login</span></div>
            </div>
        </div>
    </div>
</template>

<script>
import eventBus from '../EventBus.js'

export default {
  name: 'Login',
  data() { 
      return{
          loginShow: false,
          signupShow: false
        }
      
  },
  methods:{
      modalClose() {
          this.loginShow = false;
          this.signupShow = false;
      },
      login() {
          this.signupShow = false;
          this.loginShow = true;
      },
      signup() {
          this.loginShow = false;
          this.signupShow = true;
      }
  },
  mounted: function(){
      eventBus.$on('login-event',()=>{this.login();});
      eventBus.$on('signup-event',()=>{this.signup();});
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.modal{
    /*display: none;*/
    position: fixed;
    z-index: 1;
    padding: 10px;
    overflow: hidden;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    background-color: rgba(0,0,0,0.4); /*transparency*/
}
.modal::-webkit-scrollbar{
    display: none;
}
.modalContent{
    background-color: white;
    margin: auto;
    display: flex;
    flex-flow: column;
    justify-content: space-between;
    padding: 30px;
    margin: 10rem 30rem 50rem;    
}

.close {
    color: #aaa;
    float: right;
    font-size: 28px;
    font-weight: bold;
  }

.close:hover,.close:focus {
    color: black;
    text-decoration: none;
    cursor: pointer;
  }


#modalHeader{
    display: flex;
    justify-content: space-between;
}

#newAccount{
    color: pink;
    cursor: pointer;
}

#haveAccount{
    color: pink;
    cursor: pointer;
}
</style>
