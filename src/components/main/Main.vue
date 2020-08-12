<template>
    <main>
        <div id="main" class="main">
            <section id="dir" >
                <div>
                    <!--directory-->
                    <a href="https://www.zomato.com/" title="Home">Home</a><span>/</span>
                    <a href="https://www.zomato.com/india" title="India">India</a><span>/</span>
                    <a href="https://www.zomato.com/ncr/restaurants" title="Delhi NCR">Delhi NCR</a><span>/</span>
                    <a href="https://www.zomato.com/ncr/sector-135-restaurants" title="Sector 135">Sector 135</a><span>/</span>
                    <a href="https://www.zomato.com/ncr/biryani-by-kilo-sector-135-noida" title="Biryani By Kilo">Biryani By Kilo</a>
                </div>
            </section>
            <Gallery/>
            <About/>
            <Actions/>
            <Embed/>
            <div id="relatedInfo">
                <div>
                    <h4>Related to Biryani By Kilo, Sector 135</h4>
                    <div class="relatedLinks">
                        <a href="https://www.zomato.com/ncr">Restaurants in Noida, Noida Restaurants,</a>
                        <a href="https://www.zomato.com/ncr/sector-135-restaurants" >Sector 135 restaurants,</a>
                        <a href="https://www.zomato.com/ncr/sector-135-restaurants?sort=best">Best Sector 135 restaurants,</a>
                        <a href="https://www.zomato.com/ncr/noida-restaurants">Noida restaurants,</a>
                        <a href="https://www.zomato.com/ncr/casual-dining">Casual Dining in Delhi NCR,</a>
                        <a href="https://www.zomato.com/casual-dining-near-me">Casual Dining near me,</a>
                        <a href="https://www.zomato.com/ncr/noida-restaurants/casual-dining">Casual Dining in Noida,</a>
                        <a href="https://www.zomato.com/ncr/sector-135-restaurants/casual-dining">Casual Dining in Sector 135,</a>
                        <a href="https://www.zomato.com/ncr"> in Delhi NCR,</a>
                        <a href="https://www.zomato.com/restaurants-near-me"> near me,</a>
                        <a href="https://www.zomato.com/ncr/noida-restaurants"> in Noida,</a>
                        <a href="https://www.zomato.com/ncr/sector-135-restaurants"> in Sector 135,</a>
                        <a href="https://www.zomato.com/ncr"> in Delhi NCR,</a>
                        <a href="https://www.zomato.com/restaurants-near-me"> near me,</a>
                        <a href="https://www.zomato.com/ncr/noida-restaurants"> in Noida,</a>
                        <a href="https://www.zomato.com/ncr/sector-135-restaurants"> in Sector 135,</a>
                        <a href="https://www.zomato.com/ncr/biryani-by-kilo-sector-135-noida/menu">Biryani By Kilo Menu,</a>
                        <a href="https://www.zomato.com/ncr/sector-135-restaurants?order-online=1">Order food online in Sector 135, Noida,</a>
                        <a href="https://www.zomato.com/ncr/order-food-online">Order food online in Delhi NCR,</a>
                        <a href="https://www.zomato.com/ncr/noida-order-online">Order food online in Noida</a>
                        <a href="https://www.zomato.com/ncr/newyear" >New Year Parties in Delhi NCR,</a>
                        <a href="https://www.zomato.com/ncr/christmas">Christmas' Special in Delhi NCR,</a>
                    </div>
                </div>
                <div>
                    <h4>Restaurants around Sector 135</h4>
                    <div class="relatedLinks">
                        <a href="https://www.zomato.com/ncr/yakubpur-restaurants">Yakubpur restaurants, </a>
                        <a href="https://www.zomato.com/ncr/sector-83-noida-restaurants">Sector 83 restaurants,</a>
                        <a href="https://www.zomato.com/ncr/sector-132-noida-restaurants">Sector 132 restaurants,</a>
                        <a href="https://www.zomato.com/ncr/sector-93-noida-restaurants">Sector 93 restaurants,</a>
                    </div>
                </div>
                <div>
                    <h4>Frequent searches leading to this page</h4>
                    <div class="relatedLinks">
                        <a href="https://www.zomato.com/ncr/biryani-by-kilo-sector-135-noida" >noida sec 135,</a>
                        <a href="https://www.zomato.com/ncr/biryani-by-kilo-sector-135-noida" >zomato near me,</a>
                        <a href="https://www.zomato.com/ncr/biryani-by-kilo-sector-135-noida" >biryani by kilo contact sector 137,</a>
                        <a href="https://www.zomato.com/ncr/biryani-by-kilo-sector-135-noida" >khans kitchen biriyani 135,</a>
                        <a href="https://www.zomato.com/ncr/biryani-by-kilo-sector-135-noida" >biryani by kilo menu</a>
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>

<script>
import Gallery from './Gallery.vue'
import About from './About.vue'
import Actions from './Actions.vue'
import Embed from './Embed.vue'

export default {
  name: 'Main',
  components:{
      Gallery,
      About,
      Actions,
      Embed
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.main{
    position: relative;
    max-width: 110rem;
    max-height: initial;
    margin: 1rem 3rem 0px;
}

#dir{
    padding-top: 10px;
    padding-bottom: 10px;
}
#dir a {
    margin-right: 5px;
    margin-left: 5px;
    font-size: 0.7rem;
}
#dir span {
    font-size: 0.7rem;
    color: gray;

}
#relatedInfo{
    border-top: 1px solid lightgray; 
    margin-top: 2rem;
    position: relative;
    z-index: -1;
}

.relatedLinks a{
    color: gray;
    font-size: medium;
    transition: 0.2s;
}

.relatedLinks a:hover{
    color: rgb(65, 63, 63);
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
