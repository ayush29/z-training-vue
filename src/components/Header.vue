<template>
  <div>
    <header>
        <nav class="headerNav">
            <ul class="headerList">
                <li>
                    <a href = "https://zomato.com">
                        <img src="https://b.zmtcdn.com/data/bdddded729eec1881d992117920afa5f1553759845.png" alt="Zomato" >
                    </a>
                </li>
                <li>
                    <!--loc filter and search-->
                    <div class="searchBar">
                        <div>
                            <!--dropdown-->
                            Delhi NCR
                        </div>
                        <div>|</div>
                        <div>
                            <!--search-->
                            Search for restaurant, cuisine or a dish
                        </div>
                        <div id="searchButton" >
                            <!--search button-->
                            <a href="#">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="#FFFFFF" width="16" height="16" viewBox="0 0 20 20" aria-labelledby="icon-svg-title-Search icon-svg-desc-Search" role="img" class="rbbb40-0 kaLXAT"><linearGradient id="ckcndz3s102m23b6sv77qjpwb" x1="0" x2="100%" y1="0" y2="0"><stop offset="0" stop-color="#FFFFFF"></stop><stop offset="100%" stop-color="#FFFFFF"></stop></linearGradient><title id="icon-svg-title-Search">Search icon</title><desc id="icon-svg-desc-Search">It is an icon with title Search</desc><title>Search</title><path d="M19.78 19.12l-3.88-3.9c1.28-1.6 2.080-3.6 2.080-5.8 0-5-3.98-9-8.98-9s-9 4-9 9c0 5 4 9 9 9 2.2 0 4.2-0.8 5.8-2.1l3.88 3.9c0.1 0.1 0.3 0.2 0.5 0.2s0.4-0.1 0.5-0.2c0.4-0.3 0.4-0.8 0.1-1.1zM1.5 9.42c0-4.1 3.4-7.5 7.5-7.5s7.48 3.4 7.48 7.5-3.38 7.5-7.48 7.5c-4.1 0-7.5-3.4-7.5-7.5z" fill="url(#ckcndz3s102m23b6sv77qjpwb)"></path></svg>
                            </a>
                        </div>
                    </div>
                </li>
                <li>
                    <UserAuth/>                               
                </li>
            </ul>
        </nav>
    </header>
  </div>
</template>

<script>
import eventBus from '../EventBus.js'
import UserAuth from '../components/UserAuth.vue'

export default {
  name: 'Header',
  components:{
      UserAuth
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

header{
    width: 100%;
    max-width: 100%;
    display: block;
    position: static;
    height: 5rem;
    justify-content: space-between;
    align-items: center;
    border-style: outset; 
    border-width: 1px;
    border-right: 0px;
    border-left: 0px;
    border-top: 0px;
    /* border-bottom: 1px; */
}


.headerNav {
    width:100%;
    max-width: 110rem;
    height: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;
    position: relative;
    z-index: 0;
    margin-top: 0px;
    margin-bottom: 0px;
    margin-left: auto;
    margin-right: auto;
}
.headerList{
    list-style-type: none;
    display: flex;
    width: 100%;
    max-width: 100%;
    height: 72px;
    flex-wrap: nowrap;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    margin: 0px;
}

.searchBar{
    display: flex;
    align-items: center;
    height: 3.5rem;
    border-width: 1px;
    border-style: solid;
    border-color: rgb(232,232,232);
    border-radius: 0.8rem;
    box-shadow: rgba(28, 28, 28, 0.08) 0px 2px 8px;
}

.searchBar div{
    padding-left: 1rem;
}

#searchButton{
    padding: 1rem 1.5rem 1rem; 
    border-top-right-radius: 0.8rem; 
    border-bottom-right-radius: 0.8rem;
    margin-left: 0.5rem;
    background-color: lightpink;
}

img{
    max-width: 14rem;
}

div{
    display: block;
    justify-content: center;
}
div, p, span {
    font-size: 1.3rem;
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
