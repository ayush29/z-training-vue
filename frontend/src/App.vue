<template>
  <div id="app">
    <ReviewsContainer />
  </div>
</template>

<script>
import ReviewsContainer from './components/reviews/reviewsContainer.vue'

export default {
  name: 'App',
  components: {
    ReviewsContainer,
  }
}
</script>

<style>
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
</style>
