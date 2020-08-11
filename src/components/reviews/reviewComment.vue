<template>
    <div class="comment-container">
        <div class="user-icon">
            <img alt="image" :src="comment.user.imgUrl" loading="lazy">
        </div>
        <div class="user-comment">
            <div class="comment-username">
                <a href="#"><span>{{ comment.user.name }}</span></a>
                <!-- <div class="comment-user-tag">{{ comment.userTag }}</div> -->
            </div>
            <div class="comment-content">
                <p>{{ comment.text }}</p>
            </div>
            <div class="review-time">
                <p>{{ simpleCommentTime }}</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ReviewComment',
    props: {
        comment: {
            type: Object,
            required: true,
        },
    },
    computed: {
        simpleCommentTime() {
            let revTime = Date.parse(this.comment.createdTime);
            let timeDiff = Date.now() - revTime;
            if(timeDiff < 60*1000) {
                return `${Math.floor(timeDiff/1000)} seconds ago`;
            } else if(timeDiff >= 60*1000 && timeDiff < 60*60*1000) {
                if(timeDiff < 2*60*1000) return `${Math.floor(timeDiff/60000)} minute ago`;
                else return `${Math.floor(timeDiff/60000)} minutes ago`;
            } else if(timeDiff >= 60*60*1000 && timeDiff < 24*60*60*1000) {
                if(timeDiff < 2*60*60*1000) return `${Math.floor(timeDiff/(60*60*1000))} hour ago`;
                else return `${Math.floor(timeDiff/(60*60*1000))} hours ago`;
            } else if(timeDiff >= 24*60*60*1000 && timeDiff < 30*24*60*60*1000){
                if(timeDiff < 2*24*60*60*1000) return `${Math.floor(timeDiff/(24*60*60*1000))} day ago`;
                else return `${Math.floor(timeDiff/(24*60*60*1000))} days ago`;
            }  else if(timeDiff >= 30*24*60*60*1000 && timeDiff < 12*30*24*60*60*1000){
                if(timeDiff < 2*30*24*60*60*1000) return `${Math.floor(timeDiff/(30*24*60*60*1000))} month ago`;
                else return `${Math.floor(timeDiff/(30*24*60*60*1000))} months ago`;
            } else {
                if(timeDiff < 2*12*30*24*60*60*1000) return `${Math.floor(timeDiff/(12*30*24*60*60*1000))} year ago`;
                else return `${Math.floor(timeDiff/(12*30*24*60*60*1000))} years ago`;
            }
        },
    }
}
</script>

<style scoped>
.comment-container {
    display: flex;
    margin-bottom: 0.5rem;
}

.comment-container .user-icon {
    width: 45px;
    height: 45px;
    margin-right: 1rem;
    flex-shrink: 0;
    border-radius: 50%;
    z-index: -1;
    overflow: hidden;
}

.comment-container .user-icon img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transform: none;
    opacity: 1;
    will-change: transform, opacity;
    border-radius: inherit;
    transition: opacity 0.25s ease 0s, transform 0.25s ease 0s;
}

.comment-container .user-comment {
    -webkit-box-flex: 1;
    flex-grow: 1;
}

.user-comment .comment-username {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
}

.comment-username > a {
    font-weight: bold;
    color: rgb(28, 28, 28);
    margin-bottom: 0.5rem;
    display: inline-block;
    text-decoration: none;
}

.comment-username .comment-user-tag {
    background-color: rgb(122, 205, 205);
    color: rgb(255, 255, 255);
    height: fit-content;
    font-size: 0.8rem;
    margin-left: 1.5rem;
    border-radius: 0.2rem;
    padding: 0px 15px;
}

.user-comment .comment-content > p {
    font-size: 1rem;
    color: rgb(54, 54, 54);
    margin: 0px;
}

.review-time {
    color: rgb(156, 156, 156);
    font-size: 0.85rem;
}

.review-time p {
    margin-bottom: 0px;
}
</style>