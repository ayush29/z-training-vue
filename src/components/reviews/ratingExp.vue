<template>	
    <section id="rating-exp">	
        <div class="rating-container">	
            <h5 id="rating-head">Tap to rate your experience</h5>	
            <!-- rating class has stars and clear button -->	
            <div class="rating">	
                <div class="rating-stars">	
                    <i v-for="ind in 5" :key="ind" @click="changeRating(ind)"
                    size="28" :style="{fill: ind > rating ? '#CFCFCF': '#1C1C1C'}" data-darkreader-inline-color=""
                        style="--darkreader-inline-color:#e8e2d9;">	
                        <svg xmlns="http://www.w3.org/2000/svg" :style="{fill: ind > rating ? '#CFCFCF': '#1C1C1C'}" width="28" height="28"
                            viewBox="0 0 20 20" aria-labelledby="icon-svg-title-StarEmpty icon-svg-desc-StarEmpty"	
                            role="img">	
                            <linearGradient :id="'rate-exp-star' + ind" x1="0" x2="100%" y1="0" y2="0">	
                                <stop offset="0" :style="{'stop-color': ind > rating ? '#CFCFCF': '#1C1C1C'}"></stop>	
                                <stop offset="100%" :style="{'stop-color': ind > rating ? '#CFCFCF': '#1C1C1C'}"></stop>	
                            </linearGradient>	
                            <title id="icon-svg-title-StarEmpty">Star Empty icon</title>	
                            <desc id="icon-svg-desc-StarEmpty">It is an icon with title Star Empty</desc>	
                            <title>star-empty</title>	
                            <path v-if="ind <= rating" d="M6.76 6.8l-6.38 0.96c-0.22 0.040-0.38 0.22-0.38 0.44 0 0.12 0.040 0.24 0.12 0.32v0l4.64 4.76-1.1 6.66c0 0.020 0 0.040 0 0.080 0 0.24 0.2 0.44 0.44 0.44 0.1 0 0.16-0.020 0.24-0.060v0l5.7-3.12 5.68 3.12c0.060 0.040 0.14 0.060 0.22 0.060 0.24 0 0.44-0.2 0.44-0.44 0-0.040 0-0.060 0-0.080v0l-1.1-6.66 4.64-4.76c0.080-0.080 0.12-0.2 0.12-0.32 0-0.22-0.16-0.4-0.36-0.44h-0.020l-6.38-0.96-2.96-6.18c-0.060-0.12-0.18-0.2-0.32-0.2s-0.26 0.080-0.32 0.2v0z"
                                :style="{fill: 'url(\'#rate-exp-star\'' + ind + ')'}"></path>
                            <path v-else d="M10 3.28l1.9 4.12 0.32 0.7 0.76 0.1 4.5 0.68-3.3 3.38-0.46 0.54 0.1 0.7 0.78 4.66-3.9-2.14-0.7-0.36-0.7 0.38-3.88 2.1 0.76-4.66 0.1-0.68-0.5-0.52-3.3-3.38 5.26-0.8 0.32-0.7 1.94-4.12zM6.76 6.8l-6.38 0.96c-0.22 0.040-0.38 0.22-0.38 0.44 0 0.12 0.040 0.24 0.12 0.32v0l4.64 4.76-1.1 6.66c0 0.020 0 0.040 0 0.080 0 0.24 0.2 0.44 0.44 0.44 0.1 0 0.16-0.020 0.24-0.060v0l5.7-3.12 5.68 3.12c0.060 0.040 0.14 0.060 0.22 0.060 0.24 0 0.44-0.2 0.44-0.44 0-0.040 0-0.060 0-0.080v0l-1.1-6.66 4.64-4.76c0.080-0.080 0.12-0.2 0.12-0.32 0-0.22-0.16-0.4-0.36-0.44h-0.020l-6.38-0.96-2.96-6.18c-0.060-0.12-0.18-0.2-0.32-0.2s-0.26 0.080-0.32 0.2v0z"	
                                :style="{fill: 'url(\'#rate-exp-star\'' + ind + ')'}"></path>
                        </svg>	
                    </i>	
                    <p class="review-rating-text">{{ ratingText }}</p>
                </div>	
                <button id="clear-rating-button" @click="changeRating(0)"><span>Clear</span></button>	
            </div>
            <a id="write-review-btn" @click="displayModal"><span>Write a review</span></a>
        </div>
        <writeReview />
    </section>	
</template>	
<script>	
import EventBus from "../../reviewEventBus";
import WriteReview from './writeReview';
export default {
    name: 'RatingExp',
    components: {
        WriteReview,
    },
    data() {	
        return {
            rating: 0,
            ratingText: '',
        }
    },
    methods: {
        changeRating(rating) {
            this.rating = rating;
            if(this.rating === 5) this.ratingText = 'Excellent';
            else if(this.rating === 4) this.ratingText = 'Good';
            else if(this.rating === 3) this.ratingText = 'Average';
            else if(this.rating === 2) this.ratingText = 'Bad';
            else if(this.rating === 1) this.ratingText = 'Horrible';
            else this.ratingText = '';
            EventBus.$emit('changedRating', this.rating, this.ratingText);
        },
        displayModal() {
            let el = document.getElementById('write-review-modal');
            el.style.display = 'block';
        },
    },
    mounted() {
        EventBus.$on('changedModalRating', (newRating, newRatingText) => {
            this.rating = newRating;
            this.ratingText = newRatingText;
        });
    }
}	
</script>
<style scoped>	
#rating-exp {	
    width: 38rem;	
    /* width: 55rem;	 */
    position: sticky;	
    top: 0;	
    height: max-content;	
    padding-left: 2rem;	
    margin-right: 5px;
    /* font-size: 1.6rem; */
}	
.rating-container {	
    box-sizing: border-box;	
    box-shadow: rgba(28, 28, 28, 0.12) 0px 2px 8px;	
    border: transparent;	
    padding: 0px 1rem 1rem;	
    margin: 0px;	
    border-width: 1px;	
    border-style: solid;	
    /* border-color: rgb(248, 248, 248); */	
    border-image: initial;	
    border-radius: 12px;	
}	
#rating-head {	
    width: 100%;	
    /* font-size: 2rem;	 */
    font-size: 1.2rem;	
    font-weight: 300;	
    margin-top: 1.5rem;	
    margin-bottom: 0.75rem;	
}	
.rating {	
    display: flex;	
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
    font-size: inherit;
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
    padding-right: 25px;	
    cursor: pointer;
    outline: none !important;
}	
#clear-rating-button > span {	
    /* font-size: 1.6rem;	 */
    font-size: 1rem;	
    display: inline-flex;	
    align-items: center;	
    font-weight: 300;	
    color: rgb(156, 156, 156);	
}	
#write-review-btn {	
    padding-top: 0.5rem;	
    text-decoration: none;	
    background-color: transparent;	
    font-weight: 300;	
    color: rgb(237, 90, 107);	
    display: inline-flex;	
}	
#write-review-btn > span {	
    cursor: pointer;	
    padding: 0.3rem;	
    /* border-width: 0.1rem;	
    border-style: solid;	
    border-color: transparent;	
    border-image: initial;	
    border-radius: 0.4rem; */	
}	
</style>