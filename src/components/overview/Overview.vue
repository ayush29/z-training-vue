<template>
  <div id="app">
    <!-- <p v-for="(x, index) in restaurantData.menu_image" :key="index" >{{x.id}}
    </p> -->
    <overview v-bind:restaurant="restaurantData" @add-image="addImage"></overview>
    
  </div>
</template>

<script>
import overview from './overview/overview.vue';
//import axios from 'axios';
export default {
  name: 'Overview',
  components: {
    overview,
  },
  data(){return{
    restaurantData:{
        name: "Biriyani by Kilo",
        offer: "20",
        inImageTab: false,
        costForTwo: 700,
        whichImage:0,
        menu_image:[]//"",
        //"https://b.zmtcdn.com/data/collections/ecec46ffb5bc20bebe0857c47f630fc5_1535354925.jpg",
        //"https://b.zmtcdn.com/data/pictures/chains/2/18363082/0b157d9edcbc932632582f9b91fa6936_featured_v2.jpg",
        //"https://b.zmtcdn.com/data/pictures/chains/2/18349892/c2033a3d75f4c54fad6b35410f583e5b_featured_v2.jpg"
        ,
        cuisines:[
            "Biryani" , 
            "Mughlai" ,
            "Kebab",
            "Hyderabadi"
        ],
        topDishOrder:[
            "Phirni", 
            "Veg Hyderabadi Biryani",
            "Galauti Kebab",
            "Nawabi Paneer",
            "Burani Raita",
            "Mutton Pepper Fry", 
            "Rumali Roti",
        ],
        more_info:[
            "Home Delivery",
            "Indoor Seating"
        ],
        address:"dekhna padega",
        todos:[{
          id: "naman",
        }],
      },
    todos:[]
  } 

  },
  created(){
    // done with get
    fetch('http://localhost:8080/restaurant/menu_image')
    .then(response => response.json())
    .then(json => {
      this.restaurantData.menu_image = json;
      console.log(json);
      return json;
    });

    
  },
    
  methods:{
    //done with post
    addImage(newImage){
      console.log(newImage.image + "top");
          const requestOptions = {
          method: "POST",
          headers:{"content-Type":"application/json"},
          body: JSON.stringify(newImage) 
        };

        fetch('http://localhost:8080/restaurant/menu_image' , requestOptions)
        .then(response => response.json())
        .then(json => {
          this.restaurantData.menu_image.push(json);
          console.log("it called");
          console.log(json);
          return json;
        });
        
    }
  },
   

}
</script>

<style scoped>
#app {
  margin-left: 20px;
  margin-right: 20px; 
}
</style>
