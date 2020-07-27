<template>
    <section class = "overview_left">
            <div class="zomato_gold">
                <div class="zomato_gold_offer">
                    <p>GET {{ restaurant.offer}}% OFF</p>
                </div>
                <p>Become a Zomato Gold member and enjoy {{ restaurant.offer }} Off every time at {{restaurant.name}}. Know more.</p>
                <P style="color:red;">Know more</p>
            </div>
            
            <div class="about_place">
                <h1>About this place</h1>    
                <div class="a_p_content">
                    <section class="about_place_con" v-for="(x, index) in [0 , 0 , 0]" :key="index">
                        <img src="https://b.zmtcdn.com/data/o2_assets/ebd42529c3342bdaf8b624a63a571fcc1585754330.png"
                        style = "width:3rem; height:3rem;">
                        <section>
                            <p  class="about_place_p_con1">RESTAURANT SAFETY MEASURE</p>
                            <p  class="about_place_p_con2">Well Sanitized Kitchen</p>
                        </section>
                    </section>
                </div>
                
            </div>
    
            <div class="overviewMenu" @click="$emit('change-to-image')">
                <h2> Menu </h2>
                <img src="https://b.zmtcdn.com/data/menus/995/312995/762c598d5b4906728c37c32acbb644bd.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A">
                <h2 style="margin:0rem;">Food Menu</h2>
                <p style="margin:0rem;">page n</p>
            </div>
            
            <div class="cuisines" >
                <h2>Cuisines</h2>
                <div class="cuisines_type" v-for="(cuisine,index) in restaurant.cuisines" :key="index">
                    <p>{{ cuisine }}</p>
                </div>
            </div>
    
            <div class="top_dish">
                <h1>Top Dishes People Order</h1>
                <p ><span v-for="(dish, index) in restaurant.topDishOrder" :key="index">{{dish}},</span></p>
            </div>
    
            <div class="people_liked">
                <h1>People Liked</h1>
                <p>Prompt Service, Decor</p>
            </div>
    
            <div class="cost">
                <h1>Average Cost</h1>
                <p>Rs. {{restaurant.costForTwo}} for two people (approx.)<br>
    
                    Exclusive of applicable taxes and charges, if any <br>
                    
                    How do we calculate cost for two?<br>
                    
                    Cash and Cards accepted Digital payments accepted<br>
                </p>
            </div>
    
            <div>
                <h1>More Info</h1>
                <div class="more_info_item" v-for="(info,index) in restaurant.more_info" :key="index">
                    <p>{{info}}</p>
                </div>
            </div>
    
            <div>
                <h1>Featured In</h1>
                <img alt="Brilliant Biryanis" src="https://b.zmtcdn.com/data/collections/ecec46ffb5bc20bebe0857c47f630fc5_1535354925.jpg" class="image_biryani">
            </div>
        
        </section>
</template>
<script>
export default {
    props:{
        restaurant: Object,
    }

}
</script>

<style scoped>
.zomato_gold_offer{
    width: max-content;
    font-size: 1.2rem;
    color: rgb(255, 255, 255);
    background: rgb(237, 90, 107);
    border-radius: 0.6rem;
    padding: 1px 3px;
}
.zomato_gold{
    font-size: 1.2rem;
    background: rgb(250, 250, 250);
    border-radius: 0.6rem;
    padding: 0.4rem 0.6rem;
}
.about_place_p_con1{
    font-size: 0.6rem;
    line-height: 1.5;
    color: rgb(156, 156, 156);
    margin: 0px;
}
.about_place_p_con2{
    font-size: 0.8rem;
    line-height: 1.5;
    color: rgb(28, 28, 28);
    margin: 0.2rem 0px 0px;
}
.about_place_con{
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    box-shadow: rgba(0, 0, 0, 0.06) 1px 0px 4px;
    cursor: pointer;
    margin-right: 1rem;
    border-radius: 8px;
    padding: 0.9rem 0.7rem;
    border-width: 1px;
    border-style: solid;
    border-color: rgb(232, 232, 232);
    border-image: initial;
}
.overview_left {
    width: 85rem;
}

.cuisines_type{
    box-shadow: rgba(54, 54, 54, 0.06) 0px 1px 2px;
    display: inline-flex;
    cursor: pointer;
    color: rgb(17, 145, 153);
    font-size: 1rem;
    line-height: 1.2;
    border-width: 1px;
    border-style: solid;
    border-color: rgb(207, 207, 207);
    border-image: initial;
    border-radius: 59px;
    padding: 0.8rem;
    margin: 0px 1rem 1rem 0px;
    text-decoration: unset;
}
.more_info_item{
    display: inline-flex;
    margin-right:100px;
}
.image_biryani{
    width: 12rem;
    height: 12rem;
    border-radius: 0.6rem;
    background: linear-gradient(0deg, rgba(0, 0, 0, 0.9) 0%, rgba(0, 0, 0, 0.05) 50%, rgba(0, 0, 0, 0.05) 85%);
}.overviewMenu{
    width: 13rem   
}
.a_p_content{
    display: flex;
}
</style>