<template>
    <section id="embedHere">
        <!-- emebed html elements here, replace this div dynamically(default:overview)-->
        <div :key="selectedTab">
            <component :is="Tabs[selectedTab]" :restid="rid"></component>
        </div>
    </section>
</template>

<script>
import eventBus from '../EventBus.js'
import OnlineOrder from '../onlineOrder/Online_order.vue'
import Photos from '../photos/Photos.vue'
import Menu from '../menu/Menu.vue'
import ReviewsContainer from '../reviews/reviewsContainer.vue'
import Overview from '../overview/Overview.vue'
export default {
  name: 'Embed',
  data(){
      return {
          Tabs: [Overview, OnlineOrder, ReviewsContainer, Menu, Photos],
          selectedTab: 0,
          rid : Number
      }
  },
//   props : {rid :Number},
  mounted: function(){
      eventBus.$on('embed-selected-section',(tabIndex)=>{this.selectedTab=tabIndex;});
  },
  components:{
      OnlineOrder,
      Photos,
      Overview,
      ReviewsContainer,
      Menu
  },
  created(){
      this.rid = Number.parseInt(JSON.parse(localStorage.getItem('selectedRestaurant')));
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* #embedHere div{
    background-color: lightgray;
}
*{
    box-sizing: border-box;
} */
/* section{
    display: block;
}
div{
    display: block;
    justify-content: center;
    width:100%;
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
} */
</style>
