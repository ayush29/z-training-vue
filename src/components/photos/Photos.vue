<template>
  <div :key="photosRefreshKey">
        <div class="sc-kMBllD fyERxd">
            <div class="sc-hCbubC ctpOJr">
                <button v-for="(category) in imageCategories" :key="category.categoryId" class="sc-1kx5g6g-1 dXXDbl sc-hgzKov biDcRr" role="button" tabindex="0" aria-disabled="false" @click="refreshPhotos(category.categoryCode)">
                    <span tabindex="-1" class="sc-1kx5g6g-2 krzOCY All" :style="tabItemStyle(category.categoryCode)">
                        <span class="sc-1kx5g6g-3 dkwpEa">{{category.categoryName}}</span>
                    </span>
                </button>
            </div>
        </div>

        <div class="sc-bLJvFH jbzhIw">
            <div class="bke1zw-0 cMipmx">
                <div v-for="(image, index) in currentImgList" :key="image.id" class="bke1zw-1 dmqZyt pSafety">
                    <div height="20rem" width="100%" class="s1isp7-0 hJwSen sc-hjRWVT sc-hZeNU kzbTkW " @click="showModal(image.link, index)">
                        <div src="" class="s1isp7-2 dBjfsr"></div>
                        <img alt="Gallery Image" :src="image.link + '?fit=around%7C200%3A200&amp;crop=200%3A200%3B%2A%2C%2A'" loading="lazy" class="s1isp7-4 bBALuk">
                    </div>
                </div>
            </div>
        </div>
        
        <AddPhoto @refresh-photos="emitRefreshPhotos"/>
        
        <!-- The Modal -->
        <div id="showPhotoModal" class="modalShowPhoto hide" >

            <span class="close" @click="hideModal()">&times;</span>

            <div class="modalBoxContainer">

                <!-- Modal content -->
                
                    <span class="navButtons" @click="prevPhoto()">&lt;</span>
                    <img alt="Gallery Image" :src="popupImage" loading="lazy" class="modalPhoto">
                    <span class="navButtons" @click="nextPhoto()">&gt;</span>
                    <!-- <figcaption>Caption goes here</figcaption> -->

            </div>
            <div class="likeButtonDiv" :key="likesRefreshKey">
                <!--   -->

                <i class="likeIconI" @click="addLikeDislike('like')">
                <LikeIcon class="likeIcon"/> ({{likes}})
                </i>
                

                <i class="likeIconI" @click="addLikeDislike('dislike')">
                <LikeIcon class="dislikeIcon"/> ({{dislikes}})
                </i>

                <!-- <div @click="addLikeDislike('like')"> Like ({{likes}})</div>
            <div @click="addLikeDislike('dislike')"> Dislike ({{dislikes}})</div> -->
            </div>

            <p class="imageCaption">Showing image {{openImageIndex+1}} of {{currentImgList.length}}</p>
            <p class="imageCaption">Uploaded by {{currUserName}}</p>
            
        </div>

  </div>
</template>

<script>

import PhotosDataService from '../service/PhotosDataService';
import AddPhoto from './AddPhoto.vue';
import LikeIcon from './LikeIcon.vue';

// import VueLikeDislikeButtons from "vue-like-dislike-buttons";

export default {
  name: 'Photos',
  components: {
    AddPhoto,
    // VueLikeDislikeButtons,
    LikeIcon
  },
  data: function () {
      return {
        CATEGORY: 'all',
        imageCategories: [
            {
              categoryId: 101,
              categoryName: 'All',
              categoryCode:  'all'
            },
            {
                categoryId: 102,
                categoryName: 'Safety Practices',
                categoryCode:  'safety'
            },
            {
                categoryId: 103,
                categoryName: 'Food',
                categoryCode:  'food'
            },
            {
                categoryId: 104,
                categoryName: 'Ambience',
                categoryCode:  'ambience'
            }
          ],
          currentImgList: [],
          openImageIndex: 0,
          popupImage: null,
          photosRefreshKey: 0,
          likesRefreshKey: 0,
          currUserName:null,
          likes:0,
          dislikes:0,
          likeChecked: false,
          dislikeChecked: false,
          rid : null
      }
    },
    methods: {
        tabItemStyle(tabcategory) {
            var style = {};
            
            if (tabcategory == (this.CATEGORY)) {
                // style.fontWeight = 'bold';
                style.backgroundColor = 'rgb(237, 90, 107)';
                style.color = 'white';
                style.borderColor = 'rgb(237, 90, 107)';




            }
            
            return style;
        },
        refreshPhotos(catcode) {
            this.CATEGORY = catcode;
            PhotosDataService.retrieveAllPhotos(this.rid, this.CATEGORY) //HARDCODED
                .then(response => {
                this.currentImgList = response.data;
                // console.log(response.data);
                });
            
        },
        getUserName(userid) {
            // this.CATEGORY = catcode
            PhotosDataService.retrieveUserDetails(userid) //HARDCODED
                .then(response => {
                this.currUserName = response.data.name;
                // console.log(response.data);
                });

        },
        updateOpenImgData(){
            this.likesRefreshKey = !(this.likesRefreshKey);
            this.getUserName(this.currentImgList[this.openImageIndex].userID);
            this.getLikes();
            this.getDislikes();
            // alert("Likes:"+ this.likes + ", dislikes:" + this.dislikes);
        },
        getLikes(){
            // this.updateOpenImgData()
            this.likes =  this.currentImgList[this.openImageIndex].likes;
        },
        getDislikes(){
            // this.updateOpenImgData()
            this.dislikes = this.currentImgList[this.openImageIndex].dislikes;
        },

        addLikeDislike(button) {
            // this.CATEGORY = catcode
            PhotosDataService.updateLikesDislikes(this.currentImgList[this.openImageIndex].id, button) //HARDCODED
                .then(response => {
                    // console.log('success', response);
                    this.refreshPhotos(this.CATEGORY);
                    this.likes = response.data.likes;
                    this.dislikes = response.data.dislikes;
                    // this.updateOpenImgData();
                    
                    // alert("success");

                }).catch(error => {
                    alert("Error Updating likes/dislikes! Please retry.");
                    console.log(error.response);
                });    
                
                // this.$forceUpdate();
        },

        emitRefreshPhotos () {
            // this.$emit('refresh-photos-main');
            // this.forceRerender();
            this.photosRefreshKey = !(this.photosRefreshKey);
            this.refreshPhotos(this.CATEGORY);

        },
        showModal(imgLink, pIndex){
                this.popupImage = imgLink;
                this.openImageIndex = pIndex;
                document.querySelector(".modalShowPhoto").classList.remove('hide');
                this.updateOpenImgData();
        },
        hideModal(){
            // photosModal = document.querySelector(".modalPhoto");
            document.querySelector(".modalShowPhoto").classList.add('hide');
        },
        prevPhoto(){
            // photosModal = document.querySelector(".modalPhoto");
            this.openImageIndex = (this.openImageIndex-1)%(this.currentImgList.length);
            this.openImageIndex = (this.openImageIndex<0) ? (this.openImageIndex + this.currentImgList.length) : this.openImageIndex;
            this.popupImage = this.currentImgList[this.openImageIndex].link;
            this.updateOpenImgData();

        },
        nextPhoto(){
            // photosModal = document.querySelector(".modalPhoto");
            this.openImageIndex = (this.openImageIndex+1)%(this.currentImgList.length);
            this.popupImage = this.currentImgList[this.openImageIndex].link;
            this.updateOpenImgData();


        },
        reload() {
            this.$forceUpdate();
        }
        // forceRerender() {
        //     this.photosRefreshKey = !(this.photosRefreshKey);
        //     this.refreshPhotos(this.CATEGORY);
        //     // this.renderComponent = true;
        // }
        
    },
    
    // computed: {
    //     imagesList(){
    //         return currentImgList
    //         // return this.currentImgList = this.imageCategories[this.selectedCategory].categoryImages
    //     }
    // },
    created() {
        this.rid = JSON.parse(localStorage.getItem('selectedRestaurant'));
        this.refreshPhotos(this.CATEGORY);
        // this.updateOpenImgData();
    },
    mounted(){
        this.rid = JSON.parse(localStorage.getItem('selectedRestaurant'));
        this.refreshPhotos(this.CATEGORY);
    }
    

    // watch: {
    //     imagesList{
    //         return this.currentImgList = this.imageCategories[0].categoryImages
    //         // return this.currentImgList = this.imageCategories[this.selectedCategory].categoryImages
    //     }
    // }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

.likeIcon{
    /* size: 20; */
    fill:white;
}

.likeButtonDiv > i{
    margin:3%;
    color: white;
}

.likeButtonDiv > i:hover,
.likeButtonDiv > i:focus {
  cursor: pointer;
}

.dislikeIcon{
    /* size: 20; */
    fill:white;
    transform: scale(-1,-1);
}


.likeButtonDiv{
    display: flex;
    text-align: center;
    margin-left: 45%;
}

.like-dislike-buttons__btn{
    color: white;
    padding: 1%;
}

.hide{
    display:none;
}

.navButtons{
  color: rgb(255, 250, 250);
  font-size: 40px;
  font-weight: bold;

}


.navButtons:hover,
.navButtons:focus {
  text-decoration: none;
  cursor: pointer;
  color: rgb(116, 113, 113);

}

.modalBoxContainer{
    margin: auto;
    display: flex;
    padding: 2% 5% 0% 5%;
    justify-content: center;
    align-items: center;
    height: 75%; /* Full height */
    width: 75%; /* Full height */

}

.imageCaption{
    color: rgb(255, 250, 250);
}

.modalShowPhoto {
  /* display: block;  Hidden by default */
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  /* padding-top: 100px; */
  left: 0;
  top: 0;
  border-width: 5px;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: rgba(0,0,0,0.8); /* Black w/ opacity */
}

.modalPhoto {
  margin: auto;
  display: inline-flex;
  /* height: fit-content; */
  max-width: 70%;
  max-height: 80%;
  animation-name: zoom;
  animation-duration: 0.6s;
}

@keyframes zoom {
  from {transform:scale(0)}
  to {transform:scale(1)}
}

.fyERxd{
    padding-bottom: 0.5%;
}

.dXXDbl {
    min-width: auto;
    min-height: 36px;
    display: inline-flex;
    -webkit-box-align: stretch;
    align-items: stretch;
    cursor: pointer;
    border-radius: 0.6rem;
    background: transparent;
    padding: 0px;
    border-width: initial;
    border-style: none;
    border-color: initial;
    border-image: initial;
}

.biDcRr {
    margin-right: 1.5rem;
}

.krzOCY {
    display: inline-flex;
    vertical-align: middle;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    height: 100%;
    /* width: 100%; */
    min-width: auto;
    min-height: 36px;
    line-height: 36px;
    /* margin-top: 0px; */
    margin-left: 0px;
    white-space: nowrap;
    /* font-size: 1.4rem; */
    font-weight: 300;
    color: black;
    opacity: 1;
    /* background: border-box rgb(237, 90, 107); */
    border-color: black;
    border-width: 0.5px;
    border-style: solid;
    border-radius: 0.6rem;
    padding: 0px 1.6rem;
    transition: transform 0.25s ease 0s, opacity 0.25s ease 0s, box-shadow 0.25s ease 0s;
    outline: none !important;
}

.krzOCY:hover {
background-color: rgb(220, 37, 54);
border-color: rgb(220, 37, 54);
color: white;
}

.dkwpEa {
    display: inline-block;
    vertical-align: middle;
    line-height: normal;
    font-size: inherit;
    transition: transform 0.4s ease 0s;
}

.dmqZyt {
    position: relative;
    width: 100%;
    -webkit-box-flex: 0;
    flex-grow: 0;
    flex-shrink: 0;
    max-width: 24%;
    padding: 0px 2.4px 12px 7.2px;
}

.hJwSen {
    position: relative;
    max-width: 100%;
    width: 100%;
    height: 20rem;
    overflow: hidden;
}

.kzbTkW {
    cursor: pointer;
    border-radius: 0.6rem;
}



.kzbTkW img {
    filter: brightness(0.95);
    transition: transform 0.4s ease-in-out 0s, filter 0.4s ease 0s;
}

.dBjfsr {
    width: 100%;
    position: absolute;
    top: 0px;
    left: 0px;
    height: 100%;
    opacity: 0;
    will-change: opacity;
    background: linear-gradient(to right, rgb(248, 248, 248) 0%, rgb(255, 255, 255) 10%, rgb(248, 248, 248) 40%, rgb(248, 248, 248) 100%) no-repeat rgb(248, 248, 248);
    background-repeat: no-repeat;
    transition: opacity 0.25s ease-out 0s;
    border-radius: inherit;
    animation: 1.5s linear 0s infinite normal forwards running jCOzbu;
}

.bBALuk {
    transition: 0.3s;
    width: 100%;
    height: 100%;
    object-fit: cover;
    transform: none;
    opacity: 1;
    will-change: transform, opacity;
    border-radius: inherit;
    transition: opacity 0.25s ease 0s, transform 0.25s ease 0s;
}

.gmismd-first{
    width: 100%;
}

.gmismd {
    /* display: none; */
    width: 100%;
}

.foYMbJ {
    padding: 0px;
}

.eiutTL {
    font-size: 2.4rem;
    line-height: 1.2;
    color: rgb(28, 28, 28);
    margin-block-end: 0px;
    font-weight: 500;
    margin: 0px 0px 2.5rem;
}



.cMipmx {
    width: 100%;
    position: relative;
    display: flex;
    flex-wrap: wrap;
}


.jbzhIw {
    margin-top: 0.5rem;
}
.jCYPXs {
    position: absolute;
    height: 100%;
    width: 3.4rem;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    visibility: visible;
    opacity: 1;
    left: -4rem;
    right: unset;
    top: 0px;
}


</style>-->
