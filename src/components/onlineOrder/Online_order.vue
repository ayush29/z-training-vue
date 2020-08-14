<template>
<div id = "app1">
    <div class='leftt'>
        <ul class = 'slist'>
            <li class = 'litem' v-for="foodclass in foods" :key="foodclass.class_id" @click="nav_click(foodclass.class_id)" :class="{ active: (foodclass.class_id==cur_nav) }">{{foodclass.class_name}} ({{foodclass.item.length}})</li>
        </ul>
        <button class="cart" @click="showCart()" >Cart {{cartitem.length}}</button>
    </div>
    <div v-if = "contentview" class = 'rlist'>
        <div class = "obox" v-for="foodclass in foods" :key="foodclass.class_id">
          <div class="headline"><h2>{{foodclass.class_name}}</h2></div>
          <div class = "boxxer" v-for="itemm in foodclass.item" :key="itemm.item_id">
            <img class ="ig" :src="itemm.item_img" :alt="itemm.item_id">
            <div class = "info">
              <h3>{{itemm.item_name}}</h3>
              <span>★★★★☆ <span class = votes>(74 votes)</span> </span> <br>
              <span class = price>₹{{itemm.item_cost}}</span><br><br>
              <span class = press>{{itemm.descp}}</span>
            </div>
            <div class = "adder">
              <button class = "add_btn" @click = "addToCart(itemm.item_id)"> Add  <span class='rplus'> + </span></button><br>
              <span class = "rsm">customizable</span>
            </div>
          </div>
        </div>
    </div>
    <div v-else class = "cartview">
        <table style = "width:100%">
            <tr> <td><h3>Item</h3></td> <td><h3>Quantity</h3></td> <td><h3>Rate</h3></td> <td><h3>Total</h3></td></tr>
            <tr v-for="citem in cartitem" :key="citem.Item_name"><td>{{citem.item_name}}</td> <td>{{citem.quant}}</td> <td>{{citem.rate}}</td> <td>{{citem.tcost}}</td></tr>
             <tr> <td></td> <td></td> <td></td> <td></td></tr>
            <tr> <td><h3>Total</h3></td> <td>{{incart}}</td> <td>-</td> <td><h3>{{tprice}}</h3></td></tr>
        </table>
    </div>
</div>
</template>

<script>
import debounce from 'lodash/debounce';
import rootEventBus from "../EventBus";

export default {
    name: "OnlineOrder",
    
    data(){
        return {
            cur_nav : 0,
            x : [],
            y : [],
            foods : Object,
            contentview : true,
            cartitem : Object,
            incart : 0,
            tprice : 0,
            userid : 1,
            rid : this.restid,
        }
    },
    props : {
        restid : Number
    },
    methods: {
        addToCart(item){
            let authenticatedUser = null;
            if(localStorage.isLoggedIn) {
                authenticatedUser = JSON.parse(localStorage.getItem('authenticatedUser'));
            }
            if(authenticatedUser === null) {
                rootEventBus.$emit('login-modal-event');
                return;
            }
            this.userid = authenticatedUser.id;
            var bdata = {
                "itemid" : item,
                "userid" : this.userid,
                "quantity": 1
            };
            var myHeaders = new Headers();
            myHeaders.append("Content-Type", "application/json");
            var raw = JSON.stringify(bdata);
            var requestOptions = {
                method: 'POST',
                headers: myHeaders,
                body: raw,
                redirect: 'follow'
            };
            fetch("http://localhost:8080/api/mycart/", requestOptions);
            
            fetch(`http://localhost:8080/api/usercart/${this.userid}`)
                .then(response => response.json())
                .then(result => this.cartitem = result);

        },

        showCart(){
            let authenticatedUser = null;
            if(localStorage.isLoggedIn) {
                authenticatedUser = JSON.parse(localStorage.getItem('authenticatedUser'));
            }
            if(authenticatedUser === null) {
                rootEventBus.$emit('login-modal-event');
                return;
            }
            this.userid = authenticatedUser.id;
                        
            fetch(`http://localhost:8080/api/usercart/${this.userid}`)
                .then(response => response.json())
                .then(result => this.cartitem = result);

            this.incart = 0;     
            this.tprice = 0;       
            for(let i=0; i<this.cartitem.length; i++)
            {
                this.incart += this.cartitem[i].quant;
                this.tprice += this.cartitem[i].tcost;
            }
            

            if(this.contentview) this.contentview = false;
            else this.contentview = true;
        },

        handleScroll() {
            let i=1;
            for(i=1;i<4;i++)
            {
                let p = window.pageYOffset;
                console.log(i +" "+ p + ' ' + this.y[i]);
                if(p < this.y[i] && p > this.y[i-1])
                {
                    this.cur_nav = i-1;
                }
                else if(p > this.y[(this.y).length-1])
                    this.cur_nav = 3;
                else if(p==0) this.cur_nav = 0;
            }            
        },

        nav_click(ind){
            if(!this.contentview)
                this.contentview = true;
            this.cur_nav = ind;
            (this.x[ind]).scrollIntoView();
        },

        fn3() {
            this.x = document.getElementsByClassName('obox');
            for(let i=0;i<(this.x).length;i++)
                (this.y).push(this.x[i].offsetTop);
            for(let i=0;i<(this.y).length;i++)
                console.log(this.y[i]);
        },

        fn2(){  
            fetch(`http://localhost:8080/api/menus/${this.rid}`)
                .then(response => response.json())
                .then(result => this.foods = result);

            let authenticatedUser = null;
            if(localStorage.isLoggedIn) {
                authenticatedUser = JSON.parse(localStorage.getItem('authenticatedUser'));
            }
            if(!(authenticatedUser === null)) {
                this.userid = authenticatedUser.id;
            }
            fetch(`http://localhost:8080/api/usercart/${this.userid}`)
                .then(response => response.json())
                .then(result => this.cartitem = result);
        }
       
    },
    mounted() {
        this.fn3();
    },
    created() {   
        this.fn2();  
        this.fn3();  
        this.handleDebouncedScroll = debounce(this.handleScroll, 100);
        window.addEventListener('scroll', this.handleDebouncedScroll);
    },

    beforeDestroy() {
        window.removeEventListener('scroll', this.handleDebouncedScroll);
    },   
}

</script>

<style scoped>
    table, th, td {
        border: 1px solid black;
        border-collapse: collapse;
        padding: 8px;
    }

    .slist{
        list-style-type: none;
        font-size: medium;
        font-weight: 13px;
        float: left;
        margin-left: 0;
        padding-left: 0;
    }

    .cartview{
        width: 50%;
        padding-right: 40%;
    }

    .active{
        border-right: 3px solid red;
        background-Image : linear-gradient(to right, rgba(255,0,0,0), rgba(255,0,0,0.1));
    }

    .leftt{
        position: sticky;
        top: 0;
        height: fit-content;
        width: 22rem;
        margin-right: 10px;
        border-right: 3px solid;
        border-image:linear-gradient(transparent, rgb(200,200,200), transparent) 2;
    }

    li{
        margin: 0px;
        padding: 0.8rem 2rem;
        font-family: Okra,Helvetica,sans-serif;
        color: rgb(28, 28, 28);
        opacity: 80%;
        font-weight: bolder;
        cursor: pointer;
        justify-content: left;
    }

    .boxxer{
        padding-top: 0;
        display: flex;
        height: fit-content;
        margin: 10px 0;
        width: 100%;
        -webkit-box-pack: justify;
        justify-content: space-between;
    }

    .ig{
        margin: 5px 10px 0 5px;
        width: 125px;
        height: 125px;
        border-radius: 9px;
    }

    .rlist{
        width: 100%;
        /* position: sticky;
        top:260px */
    }

    .obox{
        margin-left: 30px;
        border-bottom: 3px solid grey;
    }

    .votes{
        color : silver;
    }
    .press{
        color : grey;
        font-size: 17px;
    }
    .adder{
        /* float: right; */
        margin-right: 18px;
    }
    .add_btn{
        width: 85px;
        height: 32px;
        border: 0.5px solid grey;
        background-color: white;
        border-radius: 9px;
    }
    .add_btn:focus{
    outline: none;
    }
    .rsm{
        color: red;
        font-size: small;
    }

    .rplus{
        display: inline;
        color: red;
        font-size: large;
    }
    .info{
        /* display: inline-block; */
        vertical-align: top;
        margin: 0 10px 10px 10px;
        width: 100%;
        padding: 0;
    }

    h3{
    padding: 0;
    margin: 0;
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

    @media screen and (max-width: 450px){
        .leftt{
            width: 25%;
        }
        .slist{
            font-size: smaller;
        }
    }
</style>
