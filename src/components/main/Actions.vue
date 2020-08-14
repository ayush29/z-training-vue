<template>
    <section class="actionNavigator">
        <div class="actionTab" v-bind:class="{'selected':(selectedTab===0)}" title="Overview" @click="tabSelected(0)">
            <span>Overview</span>
        </div>
        <div class="actionTab" v-bind:class="{'selected':(selectedTab===1)}" title="Order" @click="tabSelected(1)">
            <span>Order Online</span>
        </div>
        <div class="actionTab" v-bind:class="{'selected':(selectedTab===2)}" title="Reviews" @click="tabSelected(2)">
            <span>Reviews</span>
        </div>
        <div class="actionTab" v-bind:class="{'selected':(selectedTab===3)}" title="Menu" @click="tabSelected(3)">
            <span>Menu</span>
        </div>
        <div class="actionTab" v-bind:class="{'selected':(selectedTab===4)}" title="Photos" @click="tabSelected(4)">
            <span>Photos</span>
        </div>
    </section>
</template>

<script>
import eventBus from '../EventBus.js'
export default {
  name: 'Actions',
  data(){
      return{
          selectedTab : 0
      }
  },
  methods:{
      tabSelected(tabIndex){
          this.selectedTab = tabIndex;
          eventBus.$emit('action-tab-selection',tabIndex);
          eventBus.$emit('scroll-to-about-section');
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.selected{
    border-bottom-style: solid;
    border-bottom-color: rgb(228, 99, 121);
}

.selected span{
    color: rgb(228, 99, 121);
}
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
}
</style>
