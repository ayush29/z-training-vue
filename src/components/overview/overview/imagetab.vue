<template>
    <div class="overview_photo">
        <div class="overviewSlideShow">
            <div class="boxed" v-for="(i, index) in menu_image" v-bind:key = index>
                <img :src=i.image style="width:100%" v-show="(+whichImage)==index" >
            </div>
            <a class="overviewPrev" @click="updateWhichImage(-1)">&#10094;</a>
            <a class="overviewNext" @click="updateWhichImage(1)">&#10095;</a>    
        </div>
        
        <div style="margin-left: 48%;">
            <button  @click="$emit('close-imagetab')" ><h3> Close </h3></button>
        </div>
        <form @submit="addImage" style="margin-left: 42%;">
            <input type="text" v-model="m_image" name ="image" placeholder="Add image link here ...">
            <input type="submit" value="submit">
        </form>
        
        
    </div>
</template>
<script>
export default {
    props:{
        'menu_image':Array,
    }    
    ,
    data(){return{
         whichImage: 0,
         m_image : "",
    }
    },
    methods:{
        updateWhichImage(val){
            this.whichImage= ((+this.whichImage) + val + this.menu_image.length)%this.menu_image.length;
            console.log(this.whichImage);
        },
        addImage(e){
            e.preventDefault();
            const newImage = {
                image:this.m_image,
            }
            this.$emit('add-image' , newImage);
            console.log(newImage.image);
            this.m_image = "";
        }
    }  
}
</script>
<style  scoped>
 .overview_photo{
    position: fixed;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    background-color: rgb(28, 28, 28);

}.overviewPrev, .overviewNext{
    cursor: pointer;
    position: absolute;
    top: 50%;
    width: auto;
    margin-top: -22px;
    padding: 16px;
    color: white;
    font-weight: bold;
    font-size: 18px;
    transition: 0.6s ease;
    border-radius: 0 3px 3px 0;
    user-select: none;
}
.overviewNext {
    right: 0;
    border-radius: 3px 0 0 3px;
}
.overviewSlideShow{
    max-width: 300px;
    margin-top: 5%;
    margin-left: auto;
    margin-right: auto;
    position: relative;
} 

</style>