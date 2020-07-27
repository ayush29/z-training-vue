<template>
<div class="overviewForMain">
    <imagetab v-bind:menu_image=restaurant.menu_image @close-imagetab ="inImageTab = false" v-show="inImageTab"></imagetab>
    <div class="check" v-show="!inImageTab">
        <left v-on:change-to-image = "inImageTab = true" v-bind:restaurant="restaurant"></left>
        <right></right>
    </div>
</div> 
</template>


<script>
import right from './right.vue'
import left from './left.vue'
import imagetab from './imagetab.vue'

export default {
    components:{
        right,
        left,
        imagetab,
    },
    props:{
        restaurant:Object,
    },
    data(){return{
        inImageTab:false,
    }
    },
}
</script>


<style scoped>
.check{
    display: flex;
    -webkit-box-pack: justify;
    justify-content: space-between;
    margin-left: 4rem;
    margin-right: 4rem;
    
}
  .overviewForMain .overview_similar_image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transform: none;
    opacity: 1;
    will-change: transform, opacity;
    border-radius: inherit;
    transition: opacity 0.25s ease 0s, transform 0.25s ease 0s;
}
</style>