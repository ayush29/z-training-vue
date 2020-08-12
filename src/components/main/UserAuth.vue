<template>
  <div class="user">
    <div v-if="authenticatedUser!==null" id="logoutOption">
        <div id="userImg"></div>
        <span>{{authenticatedUser.name}}</span>
        <a href="#" @click="logout">Logout</a>
    </div>
    <div v-else id="loginOptions">
        <a href="#" @click="login">Login</a>
        <a href="#" @click="signup">Signup</a>
    </div>   
  </div>
</template>

<script>

import eventBus from '../EventBus.js'
import AuthService from '../service/AuthService.js'

export default {
  name: 'UserAuth',
  data() {
      return{
          authenticatedUser : null
        //   {
        //       isLoggedIn : false,
        //       id : "",
        //       name : "",
        //       email: "",
        //       phone: "",
        //       imgUrl: "",
        //       details: '' //can it be a structured object?
        //   }
      }
  },
  methods: {
      login(){
          eventBus.$emit('login-modal-event');
      },
      signup(){
          eventBus.$emit('signup-modal-event');
      },
      logout(){
          AuthService.logOut(this.authenticatedUser.id);
        //   this.$session.destroy();
          this.authenticatedUser = null;
          eventBus.$emit('logout-event');
          this.closeLoginSession();
      },
      closeLoginSession(){
          localStorage.isLoggedIn = false;
          if(localStorage.getItem('authenticatedUser'))
          {
              localStorage.removeItem('authenticatedUser');
          }
      }
  },
//   beforeCreate: function(){
//       if(localStorage.isLoggedIn)
//       {
//           this.authenticatedUser = JSON.parse(localStorage.getItem('authenticatedUser'));
//       }
//   },
  mounted: function(){
      eventBus.$on('success-auth',(res)=>{this.authenticatedUser = res;});
      if(localStorage.isLoggedIn)
      {
          this.authenticatedUser = JSON.parse(localStorage.getItem('authenticatedUser'));
      }
    //   if(this.$session.exists() && this.$session.get('isUserLoggedIn')) //if session initialised and user is currently logged in
    //   {
    //       this.authenticatedUser = this.$session.get('authenticatedUser');
    //   }
    //   else{
    //       this.authenticatedUser = null;
    //   }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

#loginOptions{
    display: flex; 
    align-items: left; 
    justify-content: space-evenly;
}
#logoutOption{
    display: flex; 
    align-items: left; 
    justify-content: space-evenly;
}
#logoutOption a,span{
    padding-left: 2rem;
}
#loginOptions a{
    padding-left: 2rem;
}

#userImg{
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
    background-image: url("https://b.zmtcdn.com/images/user_avatars/wine_2x.png");
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;

}

img{
    max-width: 14rem;
}

div{
    display: block;
    justify-content: center;
}
div, p, span {
    font-size: 1rem;
}

a:link{
    text-decoration: none;    
}
a:visited{
    text-decoration: none;
}
a:hover{
    color: rgb(46, 45, 45);
}
a{
    text-decoration: none;
    color: #5a5858;
    opacity: 73%;
    transition: 0.2s;
}
</style>
