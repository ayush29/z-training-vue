<template>
    <div class="review-tag" :class="{'focus-tag': obj.chosen}">
        <span class="tag">{{ obj.text }}</span>
    </div>
</template>

<script>
export default {
    name: 'ReviewTag',
    props: {
        obj: {
            type: Object,
            required: true,
        },
    },
    data() {
        return {
        }
    },
    methods: {
    }
}
</script>

<style scoped>
.review-tag{
    box-shadow: rgba(54, 54, 54, 0.06) 0px 1px 2px;
    cursor: pointer;
    border-width: 1px;
    border-style: solid;
    border-color: rgb(207, 207, 207);
    border-radius: 59px;
    padding: 0.8rem;
    margin: 0px 1rem 1rem 0px;
}
.focus-tag {
    color:rgb(255, 255, 255);
    background-color: rgb(237, 90, 107);
}
</style>