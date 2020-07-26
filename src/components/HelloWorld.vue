<template>
    <div class = 'rlist'>
        
        <div class = "obox" v-for="foodclass in foods" :key="foodclass.class_id">
          <div class="headline"><h2>{{foodclass.class_name}}</h2></div>
          <div class = "boxxer" v-for="item in foodclass.items" :key="item.id">
            <img class ="ig" :src="item.item_image" :alt="item.id">
            <div class = "info">
              <h3>{{item.name}}</h3>
              <span>★★★★☆ <span class = votes>(74 votes)</span> </span> <br>
              <span class = price>₹{{item.item_cost}}</span><br><br>
              <span class = press>{{item.desc}}</span>
            </div>
            <div class = "adder">
              <button class = "add_btn" @click = 'fn1(item.name, item.item_cost)'> Add  <span class='rplus'> + </span></button><br>
              <span class = "rsm">customizable</span>
            </div>
          </div>
        </div>
      </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    foods: {
      type: Array
    }
  },
  data(){
    return {
      total : 0,
      cart : [],
    }
  },
  methods: {
    fn1(item="defa", cost=0){
      if(confirm("clicked \n" + item + "\ncost = rs " + cost))
      {
        this.total += cost;
        this.cart.push(item + cost)
      }

      // alert("total cost = " + this.total)
      alert(this.cart );
    },   
  }
}
window.onscroll = function() {
  if(window.pageYOffset > 400)
    alert("scrolled enough");
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
    position: sticky;
    top:260px
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

.headline{
  position: sticky;
  top: 0px;
  width: 100%;
  padding: 2px 0;
  background-color: white;
}

@media screen and (max-width: 450px){
    .leftbar{
        width: 25%;
    }
    .slist{
        font-size: smaller;
    }
}
</style>
