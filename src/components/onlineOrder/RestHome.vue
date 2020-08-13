<template>
    <div></div>
</template>

<script>
export default {
    name : "Rest_home",
    components:{

    },
    data(){
        return {
            restaurants : Object
        }
    },
    methods : {
        
    },
    created() {
        var myHeaders = new Headers();
            myHeaders.append("Content-Type", "application/json");
            var raw = JSON.stringify(bdata);
            var requestOptions = {
                method: 'GET',
                headers: myHeaders,
                redirect: 'follow'
            };
            
            fetch("http://localhost:9090/api/mycart/usercart", requestOptions)
                .then(response => response.json())
                .then(result => this.cartitem = result);

    }
}
</script>

<style lang="stylus" scoped>

</style>