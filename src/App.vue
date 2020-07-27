<template>
  <div id="app">
    <overview v-bind:restaurant="restaurantData"></overview>
  </div>
</template>

<script>
import overview from './components/overview.vue'
export default {
  name: 'App',
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
        menu_image:["https://b.zmtcdn.com/data/menus/995/312995/762c598d5b4906728c37c32acbb644bd.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A",
        "https://b.zmtcdn.com/data/collections/ecec46ffb5bc20bebe0857c47f630fc5_1535354925.jpg",
        "https://b.zmtcdn.com/data/pictures/chains/2/18363082/0b157d9edcbc932632582f9b91fa6936_featured_v2.jpg",
        "https://b.zmtcdn.com/data/pictures/chains/2/18349892/c2033a3d75f4c54fad6b35410f583e5b_featured_v2.jpg"
        ],
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
      }
  } 
  }
}
</script>

<style>
#app {
  margin-left: 20px;
  margin-right: 20px;
  
 
}
</style>
