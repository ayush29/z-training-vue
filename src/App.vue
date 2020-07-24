<template>
  <div id="root">
    <Login/>
    <Header/>
    <Main/>
    <Footer/>    
  </div>
</template>

<script>
import Login from './components/Login.vue'
import Header from './components/Header.vue'
import Main from './components/Main.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'App',
  components: {
    Login,
    Header,
    Main,
    Footer
  }
}
</script>

<style>
#root {
  /*font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;*/

  font-family: Okra,Helvetica,sans-serif;
  display: block;
  overflow: auto;
  font-size: 62.5%;
  font-weight: 300;
  box-sizing: border-box;
  margin: auto;
  padding: 0px;

}
</style>
