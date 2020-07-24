<template>
    <section id="embedHere">
        <!-- emebed html elements here, replace this div dynamically(default:overview)-->
        <div :key="Tabs[selectedTab]">
            Embed {{Tabs[selectedTab]}} content here            
        </div>
    </section>
</template>

<script>
import eventBus from '../EventBus.js'
export default {
  name: 'Embed',
  data(){
      return {
          Tabs: ['overview', 'order-online', 'reviews', 'menu', 'photos'],
          selectedTab: 0
      }
  },
  mounted: function(){
      eventBus.$on('action-tab-selection',(tabIndex)=>{this.selectedTab=tabIndex;});
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#embedHere div{
    background-color: lightgray;
}
*{
    box-sizing: border-box;
}
section{
    display: block;
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
