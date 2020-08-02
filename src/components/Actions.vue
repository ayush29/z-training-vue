<template>
    <section class="actionNavigator">
        <div class="actionTab" title="Overview" @click="tabSelected(0)">
            Overview
        </div>
        <div class="actionTab" title="Order" @click="tabSelected(1)">
            Order Online
        </div>
        <!-- <div class="actionTab" title="Reviews" @click="tabSelected(2)">
            Reviews
        </div> -->
        <router-link to='/reviews'>Reviews</router-link>
        <div class="actionTab" title="Menu" @click="tabSelected(3)">
            Menu
        </div>
        <div class="actionTab" title="Photos" @click="tabSelected(4)">
            Photos
        </div>
    </section>
</template>

<script>
import eventBus from '../EventBus.js'
export default {
  name: 'Actions',
  methods:{
      tabSelected(tabIndex){
          eventBus.$emit('action-tab-selection',tabIndex);
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.actionNavigator{
    display: flex;
    align-items: left;
    justify-items: flex-start;
    margin: 1rem 0px 1rem;
    border-style: outset; 
    border-width: 1px;
    border-right: 0px;
    border-left: 0px;
    border-top: 0px;
}
.actionTab{
    /* margin: 1rem; */
    padding: 1rem;
    color: gray;
    text-align: center;
    transition: 0.3s;
}
.actionTab:hover{
    /* color: lightpink; */
    background-color: rgb(243, 211, 216);
    cursor: pointer;
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
