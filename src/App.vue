<template>
  <div id="app23">
    <div class="boxxed">
      <leftbar v-if="chosen_tab==1"></leftbar>
      <div v-else>
        <h1>Section Under Maintenance</h1>
    </div>
    </div>
  </div>
</template>

<script>

import leftbar from './components/leftbar.vue'
export default {
  name: 'App',
  components: {
    leftbar
  },
  data() {
      return{
        chosen_tab : 1,
      }
    },
}
</script>

<style scoped>

</style>
