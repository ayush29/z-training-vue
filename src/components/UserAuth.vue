
<template>
  <div class="user">
    <div v-if="authenticatedUser!==null" id="logoutOption">
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
          this.authenticatedUser = null;
          eventBus.$emit('logout-event');
      }
  },
  mounted: function(){
      eventBus.$on('success-auth',(res)=>{this.authenticatedUser = res;});
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
#logoutOption a{
    padding-left: 2rem;
}
#loginOptions a{
    padding-left: 2rem;
}

img{
    max-width: 14rem;
}

div{
    display: block;
    justify-content: center;
}
div, p, span {
    font-size: 1.3rem;
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
