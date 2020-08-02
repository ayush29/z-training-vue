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

<style scoped>
#root {
    display: block;
    overflow: auto;
    box-sizing: border-box;
    margin: auto;
    padding: 0px;
}
</style>
