<template>
  <div>
        <div class="sc-kMBllD fyERxd">
            <div class="sc-hCbubC ctpOJr">
                <button v-for="(category) in imageCategories" :key="category.categoryId" class="sc-1kx5g6g-1 dXXDbl sc-hgzKov biDcRr" role="button" tabindex="0" aria-disabled="false" @click="refreshPhotos(category.categoryCode)">
                    <span tabindex="-1" class="sc-1kx5g6g-2 krzOCY All">
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
        <div id="showPhotoModal" class="modalShowPhoto hide">

            <div class="modalBoxContainer">

                <!-- Modal content -->
                <span class="close" @click="hideModal()">&times;</span>
                    
                    <img alt="Gallery Image" :src="popupImage" loading="lazy" class="modalPhoto">
                    <!-- <figcaption>Caption goes here</figcaption> -->
                    <p class="imageCaption">Showing image {{openImageIndex+1}} of {{currentImgList.length}}</p>

            </div>
                


        </div>

  </div>
</template>

<script>

import PhotosDataService from '../service/PhotosDataService';
import AddPhoto from './AddPhoto.vue'

export default {
  name: 'Photos',
  components: {
    AddPhoto
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
          popupImage: null
        
      }
    },
    methods: {
        refreshPhotos(catcode) {
            this.CATEGORY = catcode
            PhotosDataService.retrieveAllPhotos(this.CATEGORY) //HARDCODED
                .then(response => {
                this.currentImgList = response.data;
                // console.log(response.data);
                });
        },
        emitRefreshPhotos () {
            this.$emit('refresh-photos-main');
        },
        showModal(imgLink, pIndex){
                this.popupImage = imgLink;
                this.openImageIndex = pIndex;
                document.querySelector(".modalShowPhoto").classList.remove('hide');
        },
        hideModal(){
            // photosModal = document.querySelector(".modalPhoto");
            document.querySelector(".modalShowPhoto").classList.add('hide');
        },
      },
    
    // computed: {
    //     imagesList(){
    //         return currentImgList
    //         // return this.currentImgList = this.imageCategories[this.selectedCategory].categoryImages
    //     }
    // },
    created() {
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

.hide{
    display:none;
}

.modalBoxContainer{
    padding: 5%;
}

.imageCaption{
    
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
  display: flex;
  height: fit-content;
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
    padding-bottom: 20px;
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
    font-size: 1.4rem;
    font-weight: 300;
    color: rgb(255, 255, 255);
    opacity: 1;
    background: border-box rgb(237, 90, 107);
    border-color: rgb(237, 90, 107);
    border-width: 0px;
    border-style: solid;
    border-radius: 0.6rem;
    padding: 0px 1.6rem;
    transition: transform 0.25s ease 0s, opacity 0.25s ease 0s, box-shadow 0.25s ease 0s;
    outline: none !important;
}

.krzOCY:hover {
background-color: rgb(220, 37, 54);
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
    margin-top: 3.5rem;
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
