<template>
<div class="overviewForMain">
    <imagetab v-bind:menu_image=restaurant.menu_image @close-imagetab ="inImageTab = false" 
    @add-image="addImage" 
    v-show="inImageTab" v-bind:isadmin = isadmin ></imagetab>
    <div class="check" v-show="!inImageTab">
        <left v-on:change-to-image = "gotoimage" v-bind:restaurant="restaurant"></left>
    </div>
</div> 
</template>


<script>
//$emit('add-image', newImage)
import left from './left.vue'
import imagetab from './imagetab.vue'

export default {
    components:{
        left,
        imagetab,
    },
    props:{
        restaurant:Object,
    },
    data(){return{
        inImageTab:false,
        isadmin:false,
    }
    },
    methods:{
        addImage(newImage){
            console.log(newImage.image +  "from");
            this.$emit("add-image" , newImage);
        },
        gotoimage(){
            this.inImageTab = true;
            let authenticatedUser = null;
            if(localStorage.isLoggedIn){
                authenticatedUser = JSON.parse(localStorage.getItem('authenticatedUser'));
                var idx = authenticatedUser.email.indexOf('@zomato.com');
                if (idx > -1) {
                    this.isadmin = true;
                }
            }else{
                this.isadmin = false;
            }   
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