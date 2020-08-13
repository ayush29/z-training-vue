<template>
    <div id="write-review-modal" class="review-modal">
        <div class="modal-content">
            <section class="headingContainer">
                <h2 class="heading">Write a Review</h2>
                <span class="close" @click="closeModal">&times;</span>
            </section>
            <section class="rating-body-container">
                <h6 class="rate-exp-text">Tap to rate your experience</h6>
                <section class="rating">	
                    <div class="rating-stars">	
                        <i v-for="ind in 5" :key="ind" @click="changeModalRating(ind)"
                        size="28" :style="{fill: ind > copyRating ? '#CFCFCF': '#1C1C1C'}" data-darkreader-inline-color=""
                            style="--darkreader-inline-color:#e8e2d9;">	
                            <svg xmlns="http://www.w3.org/2000/svg" :style="{fill: ind > copyRating ? '#CFCFCF': '#1C1C1C'}" width="28" height="28"
                                viewBox="0 0 20 20" aria-labelledby="icon-svg-title-StarEmpty icon-svg-desc-StarEmpty"	
                                role="img">	
                                <linearGradient :id="'rate-exp-star' + ind" x1="0" x2="100%" y1="0" y2="0">	
                                    <stop offset="0" :style="{'stop-color': ind > copyRating ? '#CFCFCF': '#1C1C1C'}"></stop>	
                                    <stop offset="100%" :style="{'stop-color': ind > copyRating ? '#CFCFCF': '#1C1C1C'}"></stop>	
                                </linearGradient>	
                                <title id="icon-svg-title-StarEmpty">Star Empty icon</title>	
                                <desc id="icon-svg-desc-StarEmpty">It is an icon with title Star Empty</desc>	
                                <title>star-empty</title>	
                                <path v-if="ind <= copyRating" d="M6.76 6.8l-6.38 0.96c-0.22 0.040-0.38 0.22-0.38 0.44 0 0.12 0.040 0.24 0.12 0.32v0l4.64 4.76-1.1 6.66c0 0.020 0 0.040 0 0.080 0 0.24 0.2 0.44 0.44 0.44 0.1 0 0.16-0.020 0.24-0.060v0l5.7-3.12 5.68 3.12c0.060 0.040 0.14 0.060 0.22 0.060 0.24 0 0.44-0.2 0.44-0.44 0-0.040 0-0.060 0-0.080v0l-1.1-6.66 4.64-4.76c0.080-0.080 0.12-0.2 0.12-0.32 0-0.22-0.16-0.4-0.36-0.44h-0.020l-6.38-0.96-2.96-6.18c-0.060-0.12-0.18-0.2-0.32-0.2s-0.26 0.080-0.32 0.2v0z"
                                    :style="{fill: 'url(\'#rate-exp-star\'' + ind + ')'}"></path>
                                <path v-else d="M10 3.28l1.9 4.12 0.32 0.7 0.76 0.1 4.5 0.68-3.3 3.38-0.46 0.54 0.1 0.7 0.78 4.66-3.9-2.14-0.7-0.36-0.7 0.38-3.88 2.1 0.76-4.66 0.1-0.68-0.5-0.52-3.3-3.38 5.26-0.8 0.32-0.7 1.94-4.12zM6.76 6.8l-6.38 0.96c-0.22 0.040-0.38 0.22-0.38 0.44 0 0.12 0.040 0.24 0.12 0.32v0l4.64 4.76-1.1 6.66c0 0.020 0 0.040 0 0.080 0 0.24 0.2 0.44 0.44 0.44 0.1 0 0.16-0.020 0.24-0.060v0l5.7-3.12 5.68 3.12c0.060 0.040 0.14 0.060 0.22 0.060 0.24 0 0.44-0.2 0.44-0.44 0-0.040 0-0.060 0-0.080v0l-1.1-6.66 4.64-4.76c0.080-0.080 0.12-0.2 0.12-0.32 0-0.22-0.16-0.4-0.36-0.44h-0.020l-6.38-0.96-2.96-6.18c-0.060-0.12-0.18-0.2-0.32-0.2s-0.26 0.080-0.32 0.2v0z"	
                                    :style="{fill: 'url(\'#rate-exp-star\'' + ind + ')'}"></path>
                            </svg>	
                        </i>	
                        <p class="review-rating-text">{{ ratingText }}</p>
                    </div>	
                    <a id="clear-rating-button" @click="changeModalRating(0)"><span>Clear</span></a>	
                </section>
                <section class="review-tags-container">
                    <h6 class="review-tags-text">What did you like? 🙂</h6>
                    <div class="review-tags">
                        <div class="review-tag-container" v-for="(obj, ind) in positiveReviewTags" :key="ind" @click="toggleReviewTag(obj)">
                            <ReviewTag :obj="obj" />
                        </div>
                    </div>
                    <h6 class="review-tags-text">What was not upto the mark? 😐</h6>
                    <div class="review-tags">
                        <div class="review-tag-container" v-for="(obj, ind) in negativeReviewTags" :key="ind" @click="toggleReviewTag(obj)">
                            <ReviewTag :obj="obj" />
                        </div>
                    </div>
                </section>
                <section class="review-text-container">
                    <div class="review-text-icon-container">
                        <img alt="image" src="https://b.zmtcdn.com/data/user_profile_pictures/a6d/30ff29866e236b8a8e34e3508f907a6d.jpg?fit=around%7C100%3A100&amp;crop=100%3A100%3B%2A%2C%2A" loading="lazy" class="review-text-icon">
                    </div>
                    <div class="review-textarea-container">
                        <textarea class="review-textarea" placeholder="Write your review" v-model="reviewText"></textarea>
                    </div>
                </section>
                <section class="review-submit-btn-container">
                    <button role="button" class="review-submit-btn" @click="submitReview"><span>Add Review</span></button>
                </section>
            </section>
        </div>
    </div>
</template>

<script>
import EventBus from "../../reviewEventBus";
import rootEventBus from '../EventBus.js'
import ReviewTag from "./reviewTag";
export default {
    name: 'WriteReview',
    components: {
        ReviewTag,
    },
    data() {
        return {
            copyRating: 0,
            ratingText: '',
            reviewText: '',
            positiveReviewTags: [{
                    text: 'great food', 
                    chosen: false,
                    type: 'positive'
                },
                {
                    text: 'terrific taste', 
                    chosen: false,
                    type: 'positive'
                },
                {
                    text: 'amazing hospitality', 
                    chosen: false,
                    type: 'positive'
                },
                {
                    text: 'family crowd', 
                    chosen: false,
                    type: 'positive'
                },
                {
                    text: 'good quantity', 
                    chosen: false,
                    type: 'positive'
                },
                {
                    text: 'value for money',
                    chosen: false,
                    type: 'positive'
                },
            ],
            negativeReviewTags: [{
                    text: 'no privacy', 
                    chosen: false,
                    type: 'negative'
                },
                {
                    text: 'wrong food served', 
                    chosen: false,
                    type: 'negative'
                },
                {
                    text: 'bland food', 
                    chosen: false,
                    type: 'negative'
                },
                {
                    text: 'squeezed into a smaller table despite reservation', 
                    chosen: false,
                    type: 'negative'
                },
                {
                    text: 'price vs portion size unfair', 
                    chosen: false,
                    type: 'negative'
                },
                {
                    text: 'delay in serving orders',
                    chosen: false,
                    type: 'negative'
                },
                ],
            chosenReviewTags: [],
        }
    },
    methods: {
        closeModal() {
            let el = document.getElementById('write-review-modal');
            el.style.display = 'none';
        },
        closeModalOutsideClick(event) {
            let el = document.getElementById('write-review-modal');
            if (event.target == el) {
                el.style.display = "none";
            }
        },
        changeModalRating(newRating) {
            this.copyRating = newRating;
            if(this.copyRating === 5) this.ratingText = 'Excellent';
            else if(this.copyRating === 4) this.ratingText = 'Good';
            else if(this.copyRating === 3) this.ratingText = 'Average';
            else if(this.copyRating === 2) this.ratingText = 'Bad';
            else if(this.copyRating === 1) this.ratingText = 'Horrible';
            else this.ratingText = '';
            EventBus.$emit('changedModalRating', this.copyRating, this.ratingText);
        },
        toggleReviewTag(obj) {
            obj.chosen = !obj.chosen;
            let index = this.chosenReviewTags.indexOf(obj);
            if(index >= 0)
                this.chosenReviewTags.splice(index, 1);
            else
                this.chosenReviewTags.push(obj);
        },
        submitReview() {
            let authenticatedUser = null;
            if(localStorage.isLoggedIn) {
                authenticatedUser = JSON.parse(localStorage.getItem('authenticatedUser'));
            }
            if(authenticatedUser === null) {
                rootEventBus.$emit('login-modal-event');
                return;
            }
            if(this.copyRating < 1 || this.copyRating > 5) {
                alert('the review rating should be in [1, 5]!!!');
                return;
            }
            let reviewObj = {
                rating: this.copyRating,
                user_id: authenticatedUser.id,
                text: this.reviewText,
                review_tags: this.chosenReviewTags,
            }
            fetch(`http://localhost:8080/reviews/restaurant/2`, {
                method: 'post',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(reviewObj),
            })
            .then(response => {
                if(response.ok) {
                    response.json()
                            .then(data => {
                                EventBus.$emit('submittedNewReview', data);
                                return data;
                            })
                } else {
                    response.json()
                            .then(data => {
                                alert(data.message);
                            })
                }
            })
            .catch(error => {
                alert("unknown error in write review", error);
            });
            this.reviewText = '';
            this.chosenReviewTags.forEach(element => {
                element.chosen = false;
            });
            this.changeModalRating(0);
            this.closeModal();
        }
    },
    mounted() {
        window.addEventListener('click', this.closeModalOutsideClick);
        EventBus.$on('changedRating', (newRating, newRatingText) => {
            this.copyRating = newRating;
            this.ratingText = newRatingText;
        });
    }
}
</script>

<style scoped>
.review-modal {
    display: none;
    position: fixed;
    padding-top: 50px;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    background-color: rgb(0,0,0);
    background-color: rgba(0,0,0,0.4);
}
.modal-content {
    width: max-content;
    min-width: 20rem;
    /* min-height: 150px; */
    transform: scale(1);
    box-shadow: rgba(28, 28, 28, 0.15) 0px 1.2rem 7rem;
    margin: auto;
    padding: 0px;
    border-radius: 0.6rem;
    transition: transform 0.25s ease 0s;
    background-color: rgb(255, 255, 255);
    height: max-content;
    opacity: 1;
    position: relative;
    z-index: 1;
    display: block;
}
.headingContainer {
    width: calc(100% - 4.6rem);
    display: flex;
    -webkit-box-pack: justify;
    justify-content: space-between;
    -webkit-box-align: center;
    align-items: center;
    /* margin: 2rem auto 0px; */
    /* margin: 2rem 2.2rem 0px 2.4rem; */
    margin: 2rem 1.2rem 0px 1.4rem;
}
.heading {
    font-size: 1.6rem;
    /* font-size: 2.4rem; */
    line-height: 2.8rem;
    font-weight: 400;
    color: rgb(28, 28, 28);
    margin-top: 1rem;
}
.close {
    color: #aaaaaa;
    font-size: 30px;
    font-weight: bold;
}
.close:hover, .close:focus {
    color: #000;
    text-decoration: none;
    cursor: pointer;
}
.rating-body-container {
    width: 35rem;
    /* width: 60rem; */
    margin: 0px 1.2rem 4rem 1.4rem;
    /* margin: 0px 2.2rem 4rem 2.4rem; */
    padding: 0px;
}
.rate-exp-text {
    font-size: 1.2rem;
    /* font-size: 1.8rem; */
    line-height: 1.2;
    font-weight: 400;
    color: rgb(28, 28, 28);
    margin: 0px 0px 0.8rem;
    /* margin: 0.8rem 0px 1.5rem; */
}
.rating {	
    width: 100%;
    display: flex;	
    -webkit-box-pack: justify;
    justify-content: space-between;
}	
.rating-stars {	
    display: flex;	
    align-items: center;	
    margin: 0px;	
}	
.rating-stars > i {	
    cursor: pointer;	
    margin-right: 0.5rem;	
}	
.review-rating-text {
    font-size: 1.2rem;
    line-height: 1.5;
    color: rgb(28, 28, 28);
    display: flex;
    flex-direction: column;
    -webkit-box-pack: center;
    justify-content: center;
    margin: 0px 0px 0px 1rem;
}
#clear-rating-button {	
    border-style: none;	
    min-width: auto;
    color: transparent;
    min-height: 36px;	
    display: inline-flex;	
    align-items: stretch;	
    border-radius: 0.6rem;
    background: transparent;
    border-color: transparent;
    outline: none !important;
    padding-right: 25px;	
    cursor: pointer;
}	
#clear-rating-button > span {	
    font-size: 1rem;	
    display: inline-flex;	
    align-items: center;	
    font-weight: 300;	
    color: rgb(237, 90, 107);	
}	
.review-tags-text{
    font-size: 1.2rem;
    /* font-size: 1.8rem; */
    line-height: 1.2;
    font-weight: 400;
    color: rgb(28, 28, 28);
    margin: 2rem 0px 1rem;
    /* margin: 4rem 0px 2rem; */
}
.review-tags{
    display: flex;
    flex-wrap: wrap;
    justify-content: left;
}
.review-text-container {
    margin-top: 1rem;
    display: flex;
    -webkit-box-pack: justify;
    justify-content: space-between;
}
.review-text-icon-container {
    width: 3rem;
    height: 3rem;
    border-radius: 50%;
    overflow: hidden;
}
.review-text-icon {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transform: none;
    opacity: 1;
    will-change: transform, opacity;
    border-radius: inherit;
    transition: opacity 0.25s ease 0s, transform 0.25s ease 0s;
}
.review-textarea-container {
    -webkit-box-flex: 1;
    flex-grow: 1;
    margin-left: 0.5rem;
}
.review-textarea {
    font-size: inherit;
    width: 98%;
    box-sizing: border-box;
    resize: none;
    color: rgb(28, 28, 28);
    padding: 0.8rem 1rem;
    /* background: rgb(255, 255, 255); */
    border-width: 0.1rem;
    border-style: solid;
    border-color: rgb(207, 207, 207);
    outline: none;
    border-radius: 0.6rem;
    overflow: auto;
}
.review-textarea:focus {
    border-color: rgb(17, 145, 153);
    border-width: 0.12rem;
}
.review-submit-btn-container {
    margin-top: 1rem;
    display: flex;
    -webkit-box-pack: end;
    justify-content: flex-end;
}
.review-submit-btn {
    min-width: auto;
    min-height: 36px;
    cursor: pointer;
    border-radius: 0.6rem;
    background: transparent;
    border-style: none;
    margin-bottom: 2rem;
}
.review-submit-btn span{
    font-size: 1.4rem;
    font-weight: 300;
    color: rgb(255, 255, 255);
    opacity: 1;
    background: border-box rgb(237, 90, 107);
    border-color: rgb(237, 90, 107);
    border-width: 0px;
    border-style: solid;
    border-radius: 0.6rem;
    padding: 0.8rem 1.4rem;
    outline: none !important;
    font-size: 0.9rem;
}
</style>