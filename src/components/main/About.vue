<template>
    <section>
        <section id ="aboutRestro" title="about restaurant">
            <h1 id="Name">{{restid}}</h1>
            <section>
                <div>
                    <a href="https://www.zomato.com/ncr/casual-dining" title="View all Casual Dining in Delhi NCR">Casual Dining</a>
                    <span> - </span>
                    <a href="https://www.zomato.com/ncr/restaurants/biryani/">Biryani</a>
                    <span>, </span>
                    <a href="https://www.zomato.com/ncr/restaurants/mughlai/">Mughlai</a>
                    <span>, </span>
                    <a href="https://www.zomato.com/ncr/restaurants/kebab/">Kebab</a>
                    <span>, </span>
                    <a href="https://www.zomato.com/ncr/restaurants/hyderabadi/">Hyderabadi</a>
                </div>
                <a href="https://www.zomato.com/ncr/sector-135-restaurants">Sector 135, Noida</a>
            </section>
            <section >
                <span>Open now</span><span> 10am – 11pm (Today)</span>
            </section>
        </section>
        <!--add some buttons-->
        <section class="restroConnect">
            <button type="button" class="reviewButton" @click="addReview">
                Add Review
            </button>
            <a href="https://www.google.com/maps/dir/?api=1&destination=28.4963316452,77.4021812528" target="_blank" style="z-index: -1;">
                <button type="button" class="connectButton">
                    Direction
                </button>
            </a>
            <button type="button" class="connectButton" @click="saveBookmark">
                <span v-if="isBookmarked"> Bookmarked</span>
                <span v-else> Bookmark</span>
            </button>
            <button type="button" class="connectButton">
                Share
            </button>
        </section>
    </section>
</template>

<script>
import eventBus from '../EventBus.js'
import BookmarkService from '../service/BookmarkService.js'
export default {
  name: 'About',
  data(){
      return{
          authenticatedUser: null,
          isBookmarked: false
      }

  },
  props : {rrid :Number},
  methods: {
      checkBookmark(){
          if(this.authenticatedUser!= null)
          {
              //todo :hardcoded restro id as 2 for now
              BookmarkService.find(this.authenticatedUser.id,rrid).then((res)=>{
                  this.isBookmarked = res.data;
              }).catch(()=>{
                  //doing nothing
                  }); 
          }
          else
          {
              this.isBookmarked = false;
          }
      },
      saveBookmark(){
          if(this.authenticatedUser == null){
              eventBus.$emit('login-modal-event');
          }
          else{
            //   alert('Feature coming soon!');
              //if is bookmarked then delete bookmark else add bookmark
              if(this.isBookmarked)
              {
                  BookmarkService.delete(this.authenticatedUser.id,rrid); //todo :hardcoded restro id as 2 for now
                  this.isBookmarked = false;
              }
              else
              {
                  BookmarkService.add(this.authenticatedUser.id,rrid);//todo :hardcoded restro id as 2 for now)
                  this.isBookmarked = true;
              }
          }
      },
      addReview(){
          if(this.authenticatedUser == null){
              eventBus.$emit('login-modal-event');
          }
          else{
              //switch to reviews tab
              eventBus.$emit('action-tab-selection',2);
              setTimeout(() => {  eventBus.$emit('clickWriteReviewModal');}, 50);
              
              
            //   alert('Feature coming soon!');
          }
      }
  },
//   beforeCreate: function(){
//       if(localStorage.isLoggedIn)
//       {
//           this.authenticatedUser = JSON.parse(localStorage.getItem('authenticatedUser'));
//       }
//   },
  mounted: function(){
    //   if(this.$session.exists() && this.$session.get('isUserLoggedIn')) //if session initialised and user is currently logged in
    //   {
    //       this.authenticatedUser = this.$session.get('authenticatedUser');
    //   }
    //   else{
    //       this.authenticatedUser = null;
    //   }
      eventBus.$on('success-auth',(res)=>{
          this.authenticatedUser = res;
          this.checkBookmark();
          });
      eventBus.$on('logout-event',()=>{
          this.authenticatedUser = null;
          this.checkBookmark();
          });
      if(localStorage.isLoggedIn)
      {
          this.authenticatedUser = JSON.parse(localStorage.getItem('authenticatedUser'));
      }
      
      fetch(`http://localhost:8080/api/restaurants/${this.rid}`)
                .then(response => response.json())
                .then(result => this.restid = result.rname);

      eventBus.$on('scroll-to-about-section',()=>{
          document.getElementById('aboutRestro').scrollIntoView();
      });
      this.checkBookmark();
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#aboutRestro {
    position: sticky;
    position: -webkit-sticky;
    top: 0%;
    background-color: white;
}
#Name{
    font-size: xx-large;
}

.restroConnect{
    display: flex;
    align-items: left;
    z-index: -1;
    /* justify-content: space-between; */
    justify-items: flex-start;
    margin: 1rem 0px 1rem;
}

.connectButton{
    border-radius: 0.5rem;
    margin: 0.5rem;
    background-color: white;
    padding: 0.5rem;
    border-width: 0.5px;
    cursor: pointer;
}
.reviewButton{
    border-radius: 0.5rem;
    margin: 0.5rem 0px 0.5rem 0.5rem;
    background-color: lightpink;
    color: white;
    padding: 0.5rem;
    border-width: 0.5px;
    border-color: lightpink;
    cursor: pointer;
}
.reviewButton:hover{
    background-color: rgb(231, 140, 155);
}
.connectButton:hover{
    background-color: rgb(226, 222, 222);
}

*{
    box-sizing: border-box;
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
