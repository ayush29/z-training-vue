<template>
  <div id="root">
    <Login/>
    <Header/>
    <!-- <Main/> -->
    <!-- <Resthome/> -->
    <router-view></router-view>
    <Footer/>    
  </div>
</template>

<script>
import Login from './components/main/Login.vue'
import Header from './components/main/Header.vue'
// import Main from './components/main/Main.vue'
import Footer from './components/main/Footer.vue'
// import Resthome from './components/onlineOrder/RestHome.vue'

export default {
  name: 'App',
  components: {
    Login,
    Header,
    // Main,
    Footer,
    // Resthome
  }
}
</script>

<style>
@font-face {
    font-family: metropolis;
    src: url(../public/metropolis.regular.otf);
}

#root {
  /*font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;*/

  font-family: metropolis, Helvetica, sans-serif;
  /* font-family: Okra,Helvetica,sans-serif; */
  font-size: 62.5%;
  font-weight: 300;
  /* box-sizing: border-box; */
  /* margin: auto; */
  padding: 0px;
}
</style>
