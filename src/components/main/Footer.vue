<template>
    <footer>
        <div>
            <!-- Add Footer here  -->
            <FooterComp/>
        </div>
    </footer>
</template>



<script>
import FooterComp from '../photos/Footer.vue'


export default {
  name: 'Footer',
  components:{
      FooterComp
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
footer div{
    background-color: lightgray;
}
</style>
