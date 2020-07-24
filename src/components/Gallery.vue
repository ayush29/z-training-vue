<template>
    <section id="gallerySection">
        <div class="gallery" >
            <div width="62.4%" class="galView1">
                <div height="100%" width="100%">
                    <img alt="image" src="https://b.zmtcdn.com/data/pictures/chains/5/312995/734d388d6aaa9937ff2cfca22aea42df.jpg">
                </div>
            </div>
            <section class="galView2">
                <div width="100%" class="galView2a">
                    <div width="100%" height="100%" class="galViewBase">
                        <img alt="image" src="https://b.zmtcdn.com/data/pictures/chains/5/312995/85d1e6a7f48b5dc09e4fcafd2152120e.jpg">
                    </div>
                </div>
                <div width="100%" class="galView2b">
                    <div width="100%" height="100%" class="galViewBase">
                        <img alt="image" src="https://b.zmtcdn.com/data/pictures/8/18821448/98c9161ed6d756b9fb2a16515aa74449.jpg">
                    </div>
                </div>
            </section>
            <section class="galView3">
                <div width="100%" class="galView3a">
                    <div width="100%" height="100%" class="galViewBase">
                        <img alt="image" src="https://b.zmtcdn.com/data/pictures/8/18821448/ba2cfa97650efd45b2307afb33813ee2.jpg">
                    </div>
                    <p class="galView3a1">View Gallery</p>
                </div>
                <section class="galView3b"><!--set some BG img-->
                    <section class="galView3b1">
                        <div>
                            <i size="20" color="#FFFFFF">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="#FFFFFF" width="20" height="20" viewBox="0 0 20 20" aria-labelledby="icon-svg-title-CameraAdd icon-svg-desc-CameraAdd" role="img" class="rbbb40-0 kIxlGM"><linearGradient id="ckcngoweo054d3b6sdzxnq9dr" x1="0" x2="100%" y1="0" y2="0"><stop offset="0" stop-color="#FFFFFF"></stop><stop offset="100%" stop-color="#FFFFFF"></stop></linearGradient><title id="icon-svg-title-CameraAdd">Camera Add icon</title><desc id="icon-svg-desc-CameraAdd">It is an icon with title Camera Add</desc><title>camera-add</title><path d="M8.82 7.32c-0.020 0-0.040 0-0.060 0-2.32 0-4.2 1.86-4.24 4.16v0c0.040 2.32 1.92 4.18 4.24 4.18 0.020 0 0.040 0 0.060 0v0c0 0 0.020 0 0.040 0 2.32 0 4.2-1.86 4.24-4.18v0c-0.040-2.3-1.92-4.16-4.24-4.16-0.020 0-0.040 0-0.060 0h0.020zM8.82 14.22c-0.020 0-0.020 0-0.020 0-1.52 0-2.78-1.2-2.84-2.74v0c0.040-1.52 1.26-2.74 2.8-2.74 0.020 0 0.040 0 0.060 0v0c0 0 0.020 0 0.040 0 1.54 0 2.78 1.22 2.8 2.74v0c-0.060 1.54-1.3 2.74-2.84 2.74 0 0 0 0 0 0v0zM16.66 10.42c-0.12 0-0.24 0.1-0.24 0.24v0 4.34c0 1.42-1.16 2.56-2.58 2.56 0 0 0 0 0 0h-9.82c0 0 0 0 0 0-1.42 0-2.58-1.14-2.6-2.56v-6.22c0.020-1.34 1.1-2.42 2.44-2.42 0.020 0 0.020 0 0.040 0v0h0.38c0.3 0 0.54-0.16 0.66-0.4v-0.020l0.94-1.98c0.2-0.4 0.58-0.68 1.060-0.68v0h2.32c0 0 0 0 0 0 0.48 0 0.88 0.28 1.080 0.68v0l0.94 1.98c0.12 0.26 0.36 0.42 0.66 0.42h0.44s0-0.84 0-1.080c0-0.24-0.060-0.46-0.16-0.66v0.020l-0.58-1.28c-0.42-0.9-1.34-1.52-2.38-1.52 0 0 0 0 0 0h-2.32c0 0 0 0 0 0-1.060 0-1.96 0.62-2.38 1.52v0l-0.74 1.58c-2.1 0.020-3.8 1.72-3.82 3.8v0 6.22c0 0 0 0.020 0 0.020 0 2.22 1.8 4 4.020 4 0 0 0 0 0 0h9.82c0 0 0 0 0 0 2.2 0 4-1.78 4-3.98v-4.34c0-0.14-0.1-0.24-0.22-0.24v0zM19.28 5.42h-1.9v-1.9c0-0.4-0.32-0.72-0.72-0.72s-0.7 0.32-0.7 0.72v0 1.9h-1.92c-0.38 0-0.7 0.32-0.7 0.7s0.32 0.72 0.7 0.72v0h1.92v1.9c0 0.4 0.32 0.72 0.7 0.72s0.72-0.32 0.72-0.72v0-1.9h1.9c0.4 0 0.72-0.32 0.72-0.72s-0.32-0.7-0.72-0.7v0z" fill="url(#ckcngoweo054d3b6sdzxnq9dr)"></path></svg>
                            </i>
                        </div>
                        Add Photos
                    </section>
                </section>
            </section>
        </div>
    </section>
</template>

<script>
export default {
  name: 'Gallery',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#gallerySection{
    position: relative; 
}

.gallery{
    display: flex;
    width: 100%;
    height: 37rem;
}

.galView1{
    min-width: 62.4%;
    max-width: 100%;
    width: 62.4%;
    height: 100%;
    position: relative;
    overflow: hidden;
    cursor: pointer;
}

.galView2, .galView3{
    width: 20%;
    height: 100%;
    display: flex;
    flex-direction: column;
    margin-left: 0.6rem;

}

.galView1 img, .galView2 img {
    filter: brightness(0.95);
    transition: transform 0.4s ease-in-out 0s, filter 0.4s ease 0s;
}


.galView2a, .galView2b, .galView3a{
    min-width: 62.4%;
    max-width: 100%;
    width: 100%;
    height: 100%;
    position: relative;
    cursor: pointer;
    overflow: hidden;
    margin: 0.3rem 0px 0.3rem
}

.galView3a1{
    font-size: inherit;
    line-height: 1.5;
    position: absolute;
    color: rgb(255, 255, 255);
    top: 8rem;
    left: 0px;
    width: 100%;
    text-align: center;
    margin: 0px;
}
.galView3b{
    background-image: url(https://b.zmtcdn.com/data/zomaland/a6750d1….jpeg);
    background-color: gray;
    background-size: cover;
    position: relative;
    width: 100%;
    height: 100%;
    cursor: pointer;
    background-repeat: no-repeat;
    margin: 0.3rem 0px 0.3rem;
}

.galView3b1{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: rgb(255, 255, 255);
    text-align: center;
}

.galViewBase{
    position: relative;
    max-width: 100%;
    max-height: 100%;
    width: 100%;
    height: 100%;
    overflow: hidden;
}
img{
    /* max-width: 100%;
    /* max-height: 100%; */
    object-fit: cover; 
    height: 100%;
    width: 100%;
}

</style>
