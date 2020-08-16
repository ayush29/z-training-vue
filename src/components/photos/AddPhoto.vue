<template>
  <div>
        <button id="uploadPhoto" class="dXXDbl biDcRr" @click="showModal()">
        
        <span class="krzOCY addphotos">
        <span class="dkwpEa">Add Photo</span>
        </span>
                    
        </button>

        <!-- The Modal -->
        <div id="uploadPhotoModal" class="modalBG hide">

            <!-- Modal content -->
            <div class="modal-content">
                <span class="close" @click="hideModal()">&times;</span>
                <form id="upload-photo-form" @submit.prevent="processForm">
                <input type="file" accept="image/*" @change="uploadImage($event)" id="file-input">
                    <label>Choose a Category:  </label>
                    <select id="photo" name="photo" v-model="uploadCat">
                        <option v-for="cat in imageCategories" :value="cat.categoryCode" :key="cat.categoryId">
                            {{ cat.categoryName }}
                        </option>
                        
                    </select>
                    <input type="submit">
                </form>
                
            </div>

        </div>

  </div>
</template>

<script>

import PhotosDataService from '../service/PhotosDataService';
import eventBus from '../EventBus.js'

// import { mapState } from 'vuex'

// import Vue from 'vue';
// Vue.forceUpdate();

export default {
  name: 'AddPhoto',
//   computed: mapState({
//             authenticatedUser: state => state.account.authenticatedUser
//   }),
  data: function () {
      return {
        authenticatedUser: null,
        imageCategories: [
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
          uploadedImage:null,
          uploadCat:'food',
          userUUID:0,
          rid:null
    
        
      }
    },
    methods: {
        showModal(){
            // alert("click add photo");

            // photosModal = document.querySelector(".modalBG");
            // if(!(this.userUUID == null))
            if(!(this.authenticatedUser == null))
            {
                // console.log(this.authenticatedUser);
                // alert("click add photo");
                document.querySelector(".modalBG").classList.remove('hide');
            }
            else{
                eventBus.$emit('login-modal-event');
            }
        },
        hideModal(){
            // photosModal = document.querySelector(".modalBG");
            document.querySelector(".modalBG").classList.add('hide');
        },
        uploadImage(event) {

            let data = new FormData();
            data.append('name', 'my-picture');
            data.append('file', event.target.files[0]);            
            this.uploadedImage = data
        },

        processForm() {
            // console.log({ name: this.name, email: this.email });
            // alert('Processing!');
            // alert(this.uploadCat);
            if(!(this.uploadedImage == null))
            {
                let config = {
                    header : {
                        'Content-Type' : 'image/png'
                    }
                }
                this.userUUID = this.authenticatedUser.id;
                this.uploadedImage.append('category', this.uploadCat);
                this.uploadedImage.append('restID', this.rid);            
                this.uploadedImage.append('userID', this.userUUID);
                PhotosDataService.sendPhoto(this.uploadedImage, config) //HARDCODED
                    .then(result => {
                          console.log('success', result);
                          this.$emit('refresh-photos');
                     }).catch(error => {
                            alert("Error Uploading Image! Please retry.");
                            console.log(error.response);
                });
            }
            else{
                alert("Add an Image First");
            }

        },
        // login() {
        //         this.$store.commit('login', res)
        //     },
        //     logout() {
        //         this.$store.commit('logout')
        //     }
      },
      mounted: function(){
    //   if(this.$session.exists() && this.$session.get('isUserLoggedIn')) //if session initialised and user is currently logged in
    //   {
    //       this.authenticatedUser = this.$session.get('authenticatedUser');
    //   }
    //   else{
    //       this.authenticatedUser = null;
    //   }
      this.rid = JSON.parse(localStorage.getItem('selectedRestaurant'));
      
      eventBus.$on('success-auth',(res)=>{this.authenticatedUser = res;});
      eventBus.$on('logout-event',()=>{this.authenticatedUser = null;});
      if(localStorage.isLoggedIn)
      {
          this.authenticatedUser = JSON.parse(localStorage.getItem('authenticatedUser'));
      }
      eventBus.$on('add-photos-event',()=>{this.showModal();});
    },
    // computed: {
    //     imagesList(){
    //         return currentImgList
    //         // return this.currentImgList = this.imageCategories[this.selectedCategory].categoryImages
    //     }
    // },
    // created() {
    //     // this.refreshPhotos(this.CATEGORY);
    //     eventBus.$on('success-auth',(res)=>{this.$store.commit('login', res);});
        
    // }

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



.addphotos{
    margin-top: 0px;
}

.dmqZyt {
    position: relative;
    width: 100%;
    -webkit-box-flex: 0;
    flex-grow: 0;
    flex-shrink: 0;
    max-width: 20%;
    padding: 0px 2.4px 12px 7.2px;
}

.hJwSen {
    position: relative;
    max-width: 100%;
    width: 100%;
    height: 20rem;
    overflow: hidden;
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

/* The Modal (background) */
.modalBG {
  /*display: none;*/ /* Hidden by default */
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: rgb(0,0,0); /* Fallback color */
  background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
}

/* Modal Content/Box */
.modal-content {
  background-color: #fefefe;
  margin: 15% auto; /* 15% from the top and centered */
  padding: 20px;
  border: 1px solid #888;
  width: 50%; /* Could be more or less, depending on screen size */
  
}

/* The Close Button */
.close {
  position: absolute;
  top: 15px;
  right: 35px;
  color: rgb(255, 250, 250);
  font-size: 40px;
  font-weight: bold;
}

.close:hover,
.close:focus {
  color: black;
  text-decoration: none;
  cursor: pointer;
}

</style>-->
