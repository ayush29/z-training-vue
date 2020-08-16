<template>
    <div class = "cartview">
        <div class="Checkout">
            <h1>Secure Checkout</h1>
        </div>
        <div class = "mainbox">
            <div class = "leftt">
                <div class = "boxed padd"> 
                <h1>Zatin Meraz  <span style="font-size: 17px;">(meraz.zatin@gmail.com)</span></h1> 
                <span style="font-size: 13px;">You are securely logged in</span>
                <br> <br>
                </div>
                <br>
                <div class="boxed">
                <h1 class="padd">Delivery Address</h1>
                <div class="addbar">
                    Address_Type<br>
                    user_Address
                </div>
                <hr style="color: grey; margin: 0;">
                <div class="addbar">
                    Address_Type <br>
                    user_Address <br>
                </div>
                    <div class="coupon">  +  Add new address</div>
                </div>
                <br>
                <div class="boxed padd">
                <h2>Select Payment Method</h2>
                <span>Select delivery address to select payment method</span>
                <br> <br>
                </div>
            </div>
            <div class ="rightt">
                <h1>Summary</h1>
                <div class="boxed">
                    <div class="padd rrest">
                        <br>
                        <span style="font-size:17px">ORDER FROM</span> <br> 
                        <h3>Restaurant_name</h3>
                        <span>Restaurant_det</span>
                        <br> <br>
                    </div>
                    <div v-for=" citem in cartitem" :key="citem.item_name">
                        <div class="cart">
                            <div>
                                <h1>{{citem.item_name}}</h1> 
                                <h2>{{citem.rate}}</h2>
                            </div>
                            <div>
                                <button class="qntbtn">
                                    <button class = "livik" @click="addthisitem(citem.item_id, -1)" >-</button>
                                    {{citem.quant}} 
                                    <button class = "livik"  @click="addthisitem(citem.item_id, +1)" >+</button>
                                </button> 
                                <br>
                                <h2>{{citem.tcost}}</h2>
                            </div>
                        </div>
                    </div>
                    <div class="coupon" > 
                        <span> + </span> Apply Promo Code 
                    </div>
                    <div class = "bill">
                        <div class = "billitem">
                            <h2>Subtotal</h2>
                            <h2>{{tprice}}</h2>
                        </div>
                        <div class = "billitem">
                            <h2>Taxes & restaurant charges</h2>
                            <h2>{{taxes}}</h2>
                        </div>
                        <div class = "billitem">
                            <h2>Grand Total</h2>
                            <h2>{{gt}}</h2>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name : "Cart",
    data(){
        return {
            userid : JSON.parse(localStorage.getItem('authenticatedUser')).id,
            cartitem : [],
            tprice : Number,
            taxes : 25,
            gt : Number
        }
    },
    methods : {
        async addthisitem(itemid, qt){
            var bdata = {
                "itemid" : itemid,
                "userid" : this.userid,
                "quantity": qt
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
            await fetch("http://localhost:8080/api/mycart/", requestOptions);
            
            this.launcher();
        },
        async launcher(){
            await fetch(`http://localhost:8080/api/usercart/${this.userid}`)
                .then(response => response.json())
                .then(result => this.cartitem = result);
            this.tprice=0;
            this.gt=0;
            console.log(this.cartitem);
            for(let i=0;i<this.cartitem.length; i++)
            {
                this.tprice += Number.parseInt(this.cartitem[i].tcost);
            }
            this.taxes = 0.05*this.tprice;
            this.gt = this.taxes + this.tprice;
        }
    },
    created() {
        this.launcher();
    },
}
</script>

<style scoped>
    .livik{
        color: rgb(237, 90, 107);
        font-size: 22px;
        border-style: none;
        border-radius: 4px
    }
    .livik :focus{
        outline:0 !important;
    }
    .qntbtn{
        border-radius: 5px;
        border: 0.5px solid;
        background-color: white;
        padding: 0;
        width: fit-content;
    }
    .cartview{
        position: relative;
        width: 75rem;
        max-height: initial;
        padding-bottom: 2rem;
        margin: 0px auto;
    }
    h1{
        font-size: 220%;
        font-weight: 20;
        font-family: Arial, Helvetica, sans-serif;
    }
    h2, h3{
        font-family: Arial, Helvetica, sans-serif;
        font-weight: 70;
        padding: 0;
    }
    .mainbox{
        display: flex;
        -webkit-box-pack: justify;
        justify-content: space-between;
    }
    .boxed{
        /* width: 99.9%; */
        border: 1px solid #e3e3e3;
        border-radius: 10px;
        background-color: white;
    }
    .padd{
        padding-left: 15px;
    }
        .addbar{
        background-color: rgb(226, 224, 224); 
        margin: 0; 
        padding: 22px;
    }
    .cart{
        padding: 13px 25px 10px 25px;
        display: flex;
        -webkit-box-pack: justify;
        justify-content: space-between;
        border-bottom: 0.5px solid #e3e3e3;
        background-color: white;
    }
    .bill{
        padding: 15px;
        background-color: rgb(235, 235, 235);
    }
    .billitem{
        display: flex;
        -webkit-box-pack: justify;
        justify-content: space-between;
        border-bottom: 0.5px solid #e3e3e3;
    }
    .rrest{
        border-bottom: 0.5px solid #e3e3e3;
    }
    .leftt{
        width: 57%;
    }
    .rightt{
        width: 39%;
    }
    .coupon{
        border-bottom: 0.5px solid #e3e3e3;
            color: rgb(237, 90, 107);
            font-size: 18px;
            padding: 15px;
    }
</style>