<template>   
    <article class="overview_right">
        <h1>Call</h1>
        <h2>+0000000000</h2>
        <h1>Direction</h1>
        <img src="https://b.zmtcdn.com/data/menus/995/312995/762c598d5b4906728c37c32acbb644bd.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A">
        <p>address of the RESTAURANT</p>
        <section class="o_r">
            <button onclick="overviewRightCopy()"><h3>Copy</h3></button>
            <h3>map</h3>
        </section>
    </article>
</template>
<script>
export default {
    
}
</script>

<style scoped>
.overview_right{
    box-sizing: border-box;
    box-shadow: rgba(28, 28, 28, 0.12) 0px 2px 8px;
    margin-left: 3rem;
    width: 35rem;
    height: fit-content;
    position: sticky;
    top: 220px;
    background: rgb(255, 255, 255);
    border-width: 1px;
    border-style: solid;
    border-color: rgb(248, 248, 248);
    border-image: initial;
    border-radius: 12px;
    padding: 1.5rem;
}

</style>