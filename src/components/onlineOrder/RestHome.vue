<template>
    <div>
        <div v-if="rid == 0">
            <div v-for="restaurant in restaurants" :key="restaurant.id" @click="navto(restaurant.id)" > <h1 class="rest"> {{restaurant.rname}} {{restaurant.rrate}} {{restaurant.rdesc}} </h1></div>
        </div>
        <div v-else><Main :rid="rid"/></div>>
    </div>
</template>

<script>
import Main from "../main/Main.vue";
export default {
    name : "Resthome",
    components:{
        Main
    },
    data(){
        return {
            restaurants : Object,
            hoveredon : 0,
            rid : 0
        }
    },
    methods : {
        navto(id){
            this.rid = id;
        },
        fn2(id){
            this.hoveredon = id;
        }
    },
    created() {           
        fetch(`http://localhost:8080/api/restaurants`)
            .then(response => response.json())
            .then(result => this.restaurants = result);
    }
}
</script>

<style scoped>
    .rest:hover{
        background-color : yellow;
        width: fit-content;
    }
</style>