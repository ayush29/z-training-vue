<template>
    <div class="dropdown-and-arrow" @click="toggleList">
        <div :id='obj.name'>
            <span>{{ curVal }}</span>
            <div class="dropdown-content">
                <a href="#" v-for='(val, index) in obj.options' 
                @click='changeCurVal(val)' :key='index' 
                :class='{ chosen: curVal === val}'>{{ val }}</a>
            </div>
        </div>
        <div class="dropdown-arrow">
            <span><i size="14" color="#B5B5B5" data-darkreader-inline-color=""
                style="--darkreader-inline-color:#d3ccc1;">
                <svg xmlns="http://www.w3.org/2000/svg" fill="#B5B5B5" width="14" height="14"
                    viewBox="0 0 20 20"
                    aria-labelledby="icon-svg-title-DownTriangle icon-svg-desc-DownTriangle" role="img"
                    data-darkreader-inline-fill=""
                    style="--darkreader-inline-fill:#d3ccc1;">
                    <linearGradient :id="'arrow_svg' + obj.num" x1="0" x2="100%" y1="0" y2="0">
                        <stop offset="0" stop-color="#B5B5B5"></stop>
                        <stop offset="100%" stop-color="#B5B5B5"></stop>
                    </linearGradient>
                    <title id="icon-svg-title-DownTriangle">Down Triangle icon</title>
                    <desc id="icon-svg-desc-DownTriangle">It is an icon with title Down Triangle</desc>
                    <path d="M20 5.42l-10 10-10-10h20z" :style="{fill: 'url(\'#arrow_svg\'' + obj.num + ')'}"></path>
                </svg></i></span>
        </div>
    </div>
</template>

<script>
import EventBus from "../../reviewEventBus";
import rootEventBus from "../EventBus";
export default {
    name: 'ReviewDropDown',
    props: {
        obj: {
            type: Object,
            required: true,
        },
    },
    data() {
        return {
            curVal: this.obj.options[0],
        }
    },
    methods: {
        toggleList() {
            let list = document.querySelector(`#${this.obj.name} > .dropdown-content`);
            list.classList.toggle('hide-section');
        },
        changeCurVal(val) {
            this.curVal = val;
            EventBus.$emit('changedOption', {
                name: this.obj.name,
                option: val.split(' ').join(''),
            });
        }
    },
    mounted() {
        let list = document.querySelector(`#${this.obj.name} > .dropdown-content`);
        list.classList.add('hide-section');
        rootEventBus.$on('logout-event', () => {
            this.changeCurVal(this.obj.options[0]);
        });
        EventBus.$on('revertAllReviewsDropDown', () => {
            if(this.obj.name === 'filter-dropdown')
            this.changeCurVal(this.obj.options[0]);
        });
        
    },
}
</script>

<style scoped>
.dropdown-and-arrow {
    display: flex;
    width:fit-content;
    align-items: center;
    justify-content: flex-start;
    cursor: pointer;
    border-radius: 0.6rem;
    padding-bottom: 1rem;
}

.dropdown-arrow {
    margin-left: 10px;
}

.dropdown-content.hide-section {
    display: none;
}

.dropdown-content {
    display: block;
    margin-top: 1vh;
    position: absolute;
    z-index: 1;
    background-color: white;
    border-radius: 5px;
    box-shadow: 1px 1px 5px 1px #8888885b;
}

.dropdown-content a {
    color: rgb(54, 54, 54);
    padding: 0.5rem 1rem;
    text-decoration: none;
    display: block;
    overflow: hidden;
    line-height: 1.5;
}

.dropdown-content a:hover {
    background-color: rgba(140, 157, 158, 0.1);
}

.dropdown-content a.chosen {
    background-color: rgba(134, 208, 211, 0.3);
}
</style>