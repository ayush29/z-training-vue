<template>
  <div id="app">
    <button @click="chosen_tab=1">overview</button>
    <button @click="chosen_tab=0">order-online</button>
    <button @click="chosen_tab=2">review</button>
    <button @click="chosen_tab=3">menu</button>
    <button @click="chosen_tab=3">photos</button>
    <div id="app">
      <leftbar :foods=foods v-if="chosen_tab==0"></leftbar>
      <div v-else>
        <h1>Section Under Maintenance</h1>
      </div>
    </div>
  </div>
</template>

<script>

import leftbar from './components/leftbar.vue'
import foodjson from './fooddata.json';
export default {
  name: 'App',
  components: {
    leftbar
  },
  data() {
      return{
        chosen_tab : 0,
        foods : foodjson
      }
    },
  methods: {
    fn2(){
      alert("clicked2");
    }
  }
}
</script>

<style scoped>

</style>
