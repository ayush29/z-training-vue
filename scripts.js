// 'use strict'

// var app = new Vue({
//     el: '#app',
//     data: {
//       message: 'Hello Vue!'
//     }
//   })

  Vue.component('showimages', {
    data: function () {
      return {
        selectedCategory: 0,
        imageCategories: [
            {
              categoryId: 101,
              categoryName: 'All (32)',
              categoryImages:  [
                'https://b.zmtcdn.com/data/pictures/8/18821448/ba2cfa97650efd45b2307afb33813ee2.jpg', 
                'https://b.zmtcdn.com/data/pictures/8/18821448/ba2cfa97650efd45b2307afb33813ee2.jpg'
              ]
            },
            {
                categoryId: 102,
                categoryName: 'Safety Practices (14)',
                categoryImages:  [
                    'https://b.zmtcdn.com/data/pictures/8/18821448/ba2cfa97650efd45b2307afb33813ee2.jpg', 
                    'https://b.zmtcdn.com/data/pictures/chains/5/312995/2b7841a8c6d16b673ac23e656a3d18f1.jpg'
                ]
            },
            {
                categoryId: 103,
                categoryName: 'Food (15)',
                categoryImages:  [
                    'https://b.zmtcdn.com/data/pictures/8/18821448/89e2e6f99fe72551f96244f11f2bc815.jpg', 
                    'https://b.zmtcdn.com/data/pictures/chains/5/312995/469d424f1ae11a6686a5407f0ce15a55.jpg'
                ]
            },
            {
                categoryId: 104,
                categoryName: 'Ambience (3)',
                categoryImages:  [
                    'https://b.zmtcdn.com/data/pictures/8/18821448/609ee6f4a29e404dfb33d707174e7729.jpg', 
                    'https://b.zmtcdn.com/data/pictures/chains/5/312995/f72610f79f6479f5dd970b860661a54b.jpg',
                    'https://b.zmtcdn.com/data/pictures/chains/5/312995/f72610f79f6479f5dd970b860661a54b.jpg'
                ]
            }
          ],
          currentImgList: []
    
        
      }
    },
    
    template: `
    <div>
        <div class="sc-kMBllD fyERxd">
            <div class="sc-hCbubC ctpOJr">
                <button v-for="(category,index) in imageCategories" :key="category.categoryId" class="sc-1kx5g6g-1 dXXDbl sc-hgzKov biDcRr" role="button" tabindex="0" aria-disabled="false" @click="updateCategory(index)">
                    <span tabindex="-1" class="sc-1kx5g6g-2 krzOCY All">
                        <span class="sc-1kx5g6g-3 dkwpEa">{{category.categoryName}}</span>
                    </span>
                </button>
            </div>
        </div>

        <div class="sc-bLJvFH jbzhIw">
            <div class="bke1zw-0 cMipmx">
                <div v-for="image in imagesList" class="bke1zw-1 dmqZyt pSafety">
                    <div height="20rem" width="100%" class="s1isp7-0 hJwSen sc-hjRWVT sc-hZeNU kzbTkW ">
                        <div src="" class="s1isp7-2 dBjfsr"></div>
                        <img alt="Gallery Image" :src="image + '?fit=around%7C200%3A200&amp;crop=200%3A200%3B%2A%2C%2A'" loading="lazy" class="s1isp7-4 bBALuk">
                    </div>
                </div>
            </div>
        </div>
    </div>


    
    `,
    methods: {
        updateCategory: function(index) {  
            this.selectedCategory = index
        }
      }
    ,
    computed: {

        imagesList(){
            return this.currentImgList = this.imageCategories[this.selectedCategory].categoryImages
        }
    }
  })

  var app = new Vue({
    el: '#app'
  });

// function openPage(evt, cityName) {
//     var i, tabcontent, tablinks;
//     // tabcontent = document.getElementsByClassName("sc-dTLGrV");
//     tabcontent = document.querySelectorAll(".sc-dTLGrV");


//     for (i = 0; i < tabcontent.length; i++) {
//     // tabcontent[i].style.display = "none";
//         tabcontent[i].classList.add('hide');
//     }

//     // tablinks = document.getElementsByClassName("gmWmay");
//     tablinks = document.querySelectorAll(".gmWmay");

//     for (i = 0; i < tablinks.length; i++) {
//         // tablinks[i].className = tablinks[i].className.replace(" active", "");
//         tablinks[i].classList.remove('active');
//     }

//     document.querySelector("#" + cityName).classList.remove('hide');
//     // document.getElementById(cityName).style.display = "block";
//     evt.currentTarget.classList.add("active");
//     // alert("clicked " + cityName);
// }

// function scrollElement(evt, secID){

//     // console.log("secId:" + secID)
//     var menuSec, navItem;

//     document.querySelector(".rlist").scrollTop=0;

//     menuSec = document.getElementById(secID);
//     // menuSec.scrollTop = 600;

//     var elemTop = menuSec.getBoundingClientRect().top;

//     // alert(elemTop);

//     document.querySelector(".rlist").scrollTop=elemTop-500;

//     // document.documentElement.scrollTop = elemTop+10;

//     // menuSec = document.querySelectorAll(".slist li");
//     // for (let i = 0; i < menuSec.length; i++) {
//     //     menuSec[i].classList.remove('active');
//     // }

//     // evt.currentTarget.className += " active";


// }


// function filterPhotos(evt, className) {
//     var i, photosC, tablinks;
//     photosC = document.querySelectorAll(".bke1zw-1");

//     for (i = 0; i < photosC.length; i++) {
//         photosC[i].classList.add('hide');
//     }

//     if(className == 'All')
//     {
//         for (i = 0; i < photosC.length; i++) {
//             photosC[i].classList.remove('hide');
//         }
//     }
//     else
//     {
//         photosC = document.querySelectorAll(".p" + className);
//         for (i = 0; i < photosC.length; i++) {
//             photosC[i].classList.remove('hide');
//         }
//     }

//     tablinks = document.querySelectorAll("span.sc-1kx5g6g-2");

//     for (i = 0; i < tablinks.length; i++) {
//         tablinks[i].classList.remove('krzOCY');
//         tablinks[i].classList.remove('jgGYJH');

//         tablinks[i].classList.add('jgGYJH');

//     }

//     tablinks = document.querySelector("span." + className);
//     tablinks.classList.add('krzOCY');
//     tablinks.classList.remove('jgGYJH');
// }



// // -------------------------------------
// // ----------OVERVIEW-------------------
// // ------------------------------------


// let overviewMenuIndex = 1;
// function overviewRightCopy(){
//     alert("Address copied to the clipboard");
// }
// function overviewShowMenu(){
//     let checkNode = document.querySelector(".check");
//     checkNode.classList.add('hide');
//     let overviewPhoto = document.querySelector(".overview_photo");
//     overviewPhoto.classList.remove('hide');
//     overviewShowSlide(overviewMenuIndex);

// }
// function overviewShowMain(){
//     let checkNode = document.querySelector(".check");
//     checkNode.classList.remove('hide');
//     let overviewPhoto = document.querySelector(".overview_photo");
//     overviewPhoto.classList.add('hide');

// }

// function overviewChangeSlide(n) {
//     overviewShowSlide(overviewMenuIndex += n);
// }
// function overviewShowSlide(n) {
//   let i;
//   let slides = document.getElementsByClassName("overviewMenuPhoto");
//   if (n > slides.length) {overviewMenuIndex = 1}
//   if (n < 1) {overviewMenuIndex = slides.length}
//   for (i = 0; i < slides.length; i++) {
//       slides[i].style.display = "none";
//   }
//   slides[overviewMenuIndex-1].style.display = "block";
// }



// // -------------------------------------
// // ----------REVIEWS--------------------
// // ------------------------------------

// //hides dropdowns when user clicks not on lists.
// document.onclick = function (e) {
//     let list = document.querySelector(`#filter_dropdown > .dropdown_content`);
//     if (!ancestor(e.target, document.getElementById('filter_dropdown'))) {
//         list.style.display = "none";
//     }
//     list = document.querySelector(`#sort_dropdown > .dropdown_content`);
//     if (!ancestor(e.target, document.getElementById('sort_dropdown'))) {
//         list.style.display = "none";
//     }
// }

// // helper function to hide dropdowns.
// function ancestor(e, target) {
//     if (!e) return false;
//     else {
//         if (e === target) return true;
//         else return ancestor(e.parentNode, target);
//     }
// }

// // ---------------toggle dropdown list-----------------
// function toggleList(listIDName) {
//     let list = document.querySelector(`#${listIDName} > .dropdown_content`);
//     if (list.style.display === "none") {
//         list.style.display = "block";
//     } else {
//         list.style.display = "none";
//     }
// }

// //makes chosen option as the visible option in dropdown
// function changeListHead(e) {
//     let head = e.innerText;
//     let curHeadElem = e.parentElement.previousElementSibling;
//     curHeadElem.innerText = head;
// }

// // ---------------Pagination------------------
// var curPage = 2;
// var list = [1, 2, 3, 4];
// var curList = [];
// var reviewsPerPage = 2;
// var totalPages = Math.ceil(list.length/2);
// loadReviews();

// //loads next page of reviews
// function reviewsNextPage() {
//     curPage = Math.min(totalPages, curPage+1);
//     loadReviews();
// }

// //loads prev page of reviews
// function reviewsPrevPage() {
//     curPage = Math.max(1, curPage-1);
//     loadReviews();
// }

// // loads the exact num page
// function reviewsNumPage(num) {
//     // alert("reviews");
//     curPage = num;
//     loadReviews();
// }

// function HideReviews() {

//     var count = list.length;

//     for(var i = 0; i < count; i++) {
//         var revNum = list[i];

//         // alert('review_' + revNum)


//         let elem = document.getElementById('review_' + revNum);

//         if (elem != null)
//         {
//             elem.style.display = "none";

//         }
//     }
    
//     // for (var revNum in list) {
//     //     alert('review_' + revNum)

//     //     // let elem = document.getElementById('review_' + revNum);
//     //     // elem.style.display = "none";
//     // }
//     // alert("loadReviews");

// }

// function loadReviews() {

//     HideReviews();
    
//     let start = (curPage - 1) * reviewsPerPage;
//     // curList = list.slice(start, start+reviewsPerPage);

//     for(var i = start; i < start+reviewsPerPage; i++) {
//         // alert(i)
//         var revNum = list[i];

//         let elem = document.getElementById('review_' + revNum);
//         if (elem != null)
//         {
//             elem.style.display = "block";
//         }
//     }
//     checkPageButtons();
// }

// function checkPageButtons() {
//     let prevButton = document.getElementById("reviewPrevPageButton");
//     let nextButton = document.getElementById("reviewNextPageButton");

//     if(prevButton != null && nextButton != null)
//     {
//         if(curPage === 1) prevButton.style.visibility= "hidden";
//         else prevButton.style.visibility = "visible";
//         if(curPage === totalPages ) nextButton.style.visibility= "hidden";
//         else nextButton.style.visibility = "visible";
//     }
    
    
// }
