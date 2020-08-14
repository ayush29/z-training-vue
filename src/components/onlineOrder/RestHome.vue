<template>
    <div>
        <div  v-if="rid == 0" id = "app1">
            <div class = "restplace">
                <div v-for="restaurant in restaurants" :key="restaurant.id" @click="navto(restaurant.id)" @mouseover="descp = restaurant.rdesc" class="rest"> <h1> {{restaurant.rname}} <span>{{restaurant.rrate}}</span> </h1></div>
            </div>
            <div class = "illutrator"> <h1>{{descp}}</h1></div>
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
            rid : 0,
            descp : String
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
    .restplace{
        
        position: sticky;
        top: 0;
        height: fit-content;
        width: 30rem;
        margin-right: 10px;
        border-right: 3px solid;
        border-image:linear-gradient(transparent, rgb(200,200,200), transparent) 2;
    }
    .rest{
        padding: 10px;
    }
    .rest:hover{
        font-size: 120%;
        border-right: 3px solid red;
        padding: 10px;
        background-Image : linear-gradient(to right, rgba(255,0,0,0), rgba(255,0,0,0.1));
    }
    .illutrator{
        width : 100%;
        float: right;
        justify-content: right;
    }
    #app1 {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: #2c3e50;
        padding-top: 20px;
        display: flex;
        -webkit-box-pack: justify;
        justify-content: space-between;
        width: 100%;
        /* height: fit-content; */
    }
</style>