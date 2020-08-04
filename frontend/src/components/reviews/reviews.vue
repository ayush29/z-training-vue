<template>
    <section>
        <div class="detailed-reviews">
            <Review v-for="rev in reviewsList" :key='rev.id' :rev='rev'/>
        </div>
        <div class="pagination">
            <div class="page-btn" id="rev-prev-page-btn" @click="reviewsPrevPage">
                <a href="#" class="arrow">
                    <i class="prev-arrow" color="#1C1C1C" size="20"><svg xmlns="http://www.w3.org/2000/svg"
                                fill="#1C1C1C" width="20" height="20" viewBox="0 0 20 20"
                                aria-labelledby="icon-svg-title-ChevronLeft icon-svg-desc-ChevronLeft" role="img"
                                class="arrow-svg">
                                <linearGradient id="left-arrow" x1="0" x2="100%" y1="0" y2="0">
                                    <stop offset="0" stop-color="#1C1C1C"></stop>
                                    <stop offset="100%" stop-color="#1C1C1C"></stop>
                                </linearGradient>
                                <title id="icon-svg-title-ChevronLeft">Chevron Left icon</title>
                                <desc id="icon-svg-desc-ChevronLeft">It is an icon with title Chevron Left</desc>
                                <title>chevron-left</title>
                                <path
                                    d="M13.040 4.88c0.28 0.3 0.28 0.78 0 1.060l-4.48 4.48 4.48 4.46c0.28 0.3 0.28 0.78 0 1.060s-0.78 0.3-1.060 0l-5-5c-0.3-0.28-0.3-0.76 0-1.060l5-5c0.28-0.28 0.76-0.28 1.060 0z"
                                    fill="url(#left-arrow)"></path>
                            </svg></i>
                </a>
            </div>
            <div class="page-num"
                v-for="(pageNum, ind) in paginationPages"
                :key="ind"
                @click="reviewsNumPage(pageNum)" 
                :class="{'active-page-num': pageNum === curPage}">
                <a href="#"><span>{{ pageNum }}</span></a>
            </div>
            <div class="page-btn" id="rev-next-page-btn" @click="reviewsNextPage">
                <a href="#" class="arrow">
                    <i class="next-arrow" color="#1C1C1C" size="20"><svg xmlns="http://www.w3.org/2000/svg"
                            fill="#1C1C1C" width="20" height="20" viewBox="0 0 20 20"
                            aria-labelledby="icon-svg-title-ChevronRight icon-svg-desc-ChevronRight" role="img"
                            class="arrow-svg">
                            <linearGradient id="right-arrow" x1="0" x2="100%" y1="0" y2="0">
                                <stop offset="0" stop-color="#1C1C1C"></stop>
                                <stop offset="100%" stop-color="#1C1C1C"></stop>
                            </linearGradient>
                            <title id="icon-svg-title-ChevronRight">Chevron Right icon</title>
                            <desc id="icon-svg-desc-ChevronRight">It is an icon with title Chevron Right</desc>
                            <title>chevron-right</title>
                            <path
                                d="M6.98 15.94c-0.3-0.28-0.3-0.76 0-1.060l4.46-4.46-4.46-4.48c-0.3-0.28-0.3-0.76 0-1.060s0.76-0.28 1.060 0l5 5c0.28 0.3 0.28 0.78 0 1.060l-5 5c-0.3 0.3-0.78 0.3-1.060 0z"
                                fill="url(#right-arrow)"></path>
                        </svg></i>
                </a>
            </div>
        </div>
    </section>
</template>

<script>
import EventBus from "../../reviewEventBus";
import Review from './review';

export default {
    name: 'Reviews',
    components: {
        Review,
    },
    data() {
        return {
            sortOption: 'NewestFirst',
            curPage: 1,
            reviewsList: [],
            reviewsPerPage: 2,
            maxNumPages: 0,
        }
    },
    created() {
        this.getReviews();
        this.updateNumPages();
    },
    computed: {
        paginationPages() {
            let paginationOptionsList = [];
            if(this.curPage <= 1) {
                for(let i = 1; i <= Math.min(3, this.maxNumPages); i++)
                    paginationOptionsList.push(i);
            } else if(this.curPage+1 > this.maxNumPages) {
                for(let i = Math.max(this.maxNumPages-2, 1); i <= this.maxNumPages; i++)
                    paginationOptionsList.push(i);
            } else {
                for(let i = this.curPage-1; i <= this.curPage+1; i++)
                    paginationOptionsList.push(i);
            }
            return paginationOptionsList;
        }
    },
    methods: {
        updateNumPages() {
            fetch(`http://localhost:8080/reviews/numReviews`)
            .then(response => {
                return response.json();
            })
            .then(data => {
                this.maxNumPages = Math.ceil(data/this.reviewsPerPage);
            });
        },
        getReviews() {
            fetch(`http://localhost:8080/reviews/sort/${this.sortOption}/${this.curPage}`)
            .then(response => {
                return response.json();
            })
            .then(data => {
                this.reviewsList = data;
                this.updateNumPages();
                this.checkPageButtons();
            });
        },
        checkPageButtons() {
            let prevButton = document.getElementById("rev-prev-page-btn");
            let nextButton = document.getElementById("rev-next-page-btn");
            if (this.curPage === 1) prevButton.style.visibility = "hidden";
            else prevButton.style.visibility = "visible";
            if (this.curPage === this.maxNumPages) nextButton.style.visibility = "hidden";
            else nextButton.style.visibility = "visible";
        },
        reviewsNextPage() {
            this.curPage = Math.min(this.maxNumPages, this.curPage + 1);
            this.getReviews();
        },
        //loads prev page of reviews
        reviewsPrevPage() {
            this.curPage = Math.max(1, this.curPage - 1);
            this.getReviews();
        },
        // loads the exact num page
        reviewsNumPage(num) {
            this.curPage = Math.min(this.maxNumPages, Math.max(1, num));
            this.getReviews();
        },
    },
    mounted() {
        EventBus.$on('changedOption', dataObj => {
            if(dataObj.name === 'sort-dropdown') {
                this.sortOption = dataObj.option;
                this.getReviews();
            }
            //TODO: filter dropdown options
        })
    }
}
</script>

<style scoped>
.detailed-reviews {
    margin-top: 20px;
}

.pagination {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    margin-top: 2vh;
}

.pagination div {
    margin: 0.5vw;
}

.arrow {
    box-sizing: border-box;
    position: relative;
    z-index: -1;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    width: 2vw;
    height: 2vw;
    text-decoration: none;
    border-radius: 50%;
    border-width: 0.2rem;
    border-style: solid;
    border-color: rgb(17, 145, 153);
    border-image: initial;
}

.page-btn {
    cursor: pointer;
}

.prev-arrow, .next-arrow {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    cursor: inherit
}

.page-num {
    cursor: pointer;
}

.page-num.active-page-num {
    width: 1.5vw;
    height: 1.5vw;
    cursor: pointer;
    box-sizing: border-box;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    background-color: rgb(17, 145, 153);
    flex-shrink: 0;
    -webkit-box-flex: 0;
    flex-grow: 0;
    border-radius: 50%;
}

.page-num.active-page-num > a {
    color: rgb(255, 255, 255);

}

.page-num > a {
    text-decoration: none;
}

.arrow-svg {
    display: inline-block;
    vertical-align: middle;
    line-height: 1;
    width: 20px;
    height: 20px;
}
</style>