<template>
    <div>
        <div id= "login" v-show="loginShow && authenticatedUser===null" class="modal">
            <div class="modalContent">
                <div id ="modalHeader">
                    <h2>Login</h2>
                    <span class="close" @click="modalClose">&times;</span>
                </div>
                <button id="continueWithGoogle">Continue with Google</button>
                <hr>
                <form id="loginForm" @submit="loginSubmit">
                <input type="text" id="loginEmailInput" v-model="existingUserCred.email" placeholder="Email">
                <input type="password" id="loginPasswordInput" v-model="existingUserCred.password" placeholder="******">
                <input type="submit" value="Login">
                </form>
                <hr>
                <div>New to Zomato?<span id="newAccount" @click="signupDisplay">Create Account</span></div>
            </div>
        </div>
        <div id="signup" v-show="signupShow && authenticatedUser===null" class="modal">
            <div class="modalContent">
                <div id="modalHeader">
                    <h2>Signup</h2>
                    <span class="close" @click="modalClose">&times;</span>
                </div>
                <form id="signupForm" @submit="signupSubmit">
                <input type="text" id="fullnameInput" v-model="newUser.name" placeholder="Full Name">
                <input type="text" id="signupEmailInput" v-model="newUser.email" placeholder="Email">
                <input type="tel" id="signupPhoneInput" v-model="newUser.phone" placeholder="Phone">
                <input type="password" id="signupPasswordInput" v-model="newUser.password" placeholder="******">
                <input type="submit" value="Create Account">
                </form>
                <hr>
                <button id="continueWithGoogle">Continue with Google</button>
                <hr>
                <div>Already have an account?<span id="haveAccount" @click="loginDisplay">Login</span></div>
            </div>
        </div>
    </div>
</template>

<script>
import eventBus from '../EventBus.js'
import AuthService from '../service/AuthService.js'

export default {
  name: 'Login',
  data() { 
      return{
          loginShow: false,
          signupShow: false,
          authenticatedUser: null,
          newUser: {
              name: '',
              email: '',
              phone: '',
              password: ''
          },
          existingUserCred: {
              email: '',
              password: ''
          }

        }
      
  },
  methods:{
      modalClose() {
          this.loginShow = false;
          this.signupShow = false;
      },
      loginDisplay() {
          this.signupShow = false;
          this.loginShow = true;
      },
      signupDisplay() {
          this.loginShow = false;
          this.signupShow = true;
      },
      loginSubmit(){
          AuthService.logIn(this.existingUserCred).then((res)=>{
              this.authenticatedUser = res.data;
              eventBus.$emit('success-auth',this.authenticatedUser);
              alert('Welcome '+this.authenticatedUser.name);
          });
          
          //need to reset form data binding variables
        //   this.resetForm();
        //   alert('after reset!');
          this.loginShow = false;
          this.signupShow = false;
        //   if(this.authenticatedUser==null)
        //   {
        //       alert('Login Failed!');
        //   }
        //   else{          
                // eventBus.$emit('success-auth',this.authenticatedUser);
        //   }
      },
      signupSubmit(){
          AuthService.signUp(this.newUser).then((res)=>{
              this.authenticatedUser = res.data;
              eventBus.$emit('success-auth',this.authenticatedUser);
              alert('Welcome '+this.authenticatedUser.name);
          });
          
          //need to reset form data binding variables
        //   this.resetForm();
          this.loginShow = false;
          this.signupShow = false;
        //   if(this.authenticatedUser==null)
        //   {
        //       alert('SignUp Failed!');
        //   }
        //   else{
                // eventBus.$emit('success-auth',this.authenticatedUser);
        //   }          
      },
      resetForm(){
          for(let property in this.newUser)
          {
              property = '';
          }
          for(let property in this.existingUserCred)
          {
              property = '';
          }
      }
  },
  mounted: function(){
      eventBus.$on('login-modal-event',()=>{this.loginDisplay();});
      eventBus.$on('signup-modal-event',()=>{this.signupDisplay();});
      eventBus.$on('logout-event',()=>{this.authenticatedUser=null;});
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
form{
    display: flex;
    flex-flow: column;
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
