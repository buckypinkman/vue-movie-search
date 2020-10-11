<template>
    <div class="movie-card mt-4" style="width: 11rem">
        <div class="wrap">
            <img class="img-fluid rounded-lg" :src="'http://image.tmdb.org/t/p/w500'+ poster" :alt="title">
            <p class="overlay rounded">{{ title }} ({{ getYear }})</p>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            title: {
                type: String
            },
            poster: {
                type: String
            },
            release: {
                type: String,
            }
        },
        computed: {
            getYear() {
                return this.release.split('-',1).join()
            }
        }
    }
</script>

<style scoped>
    img {
        cursor: pointer;
    }

    .wrap {
        position: relative;
    }

    img{
        box-shadow: 0 1px 8px rgba(0,0,0,.4)
    }
    
    .overlay {
        font-size: 0.9rem;
        position: absolute;
        bottom: -7%;
        left: 0;
        background: rgb(0, 0, 0);
        background: linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(0,0,0,.8) 38%, rgba(0,0,0,.7) 63%, rgba(0,0,0,0) 100%);
        width: 100%;
        transition: .4s ease;
        opacity: 0;
        color: white;
        padding: .7rem;
        text-align: center;
        cursor: pointer;
    }

        /* When you mouse over the container, fade in the overlay title */
    .wrap:hover .overlay {
        opacity: 1;
        border-radius: .25rem;
    }
</style>