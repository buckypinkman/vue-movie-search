<template>
    <nav class="navbar bg-transparent">
        <div class="container">
            <a class="navbar-brand" href="#"><i class="fas fa-film"></i> Movie App</a>
            <form class="d-flex">
                <input 
                class="form-control form-control-sm pl-3 mr-2 rounded-pill" 
                type="search" 
                placeholder="&#xF002; Search movie" 
                style="font-family:Arial, FontAwesome" 
                aria-label="Search" 
                v-model="keyword" 
                @keyup="getResult">
            </form>
        </div>
    </nav>
</template>

<script>
    export default {
        data() {
            return {
                keyword: ''
            }
        },
        methods: {
            getResult() {
                this.$emit('search-movie', this.keyword)
            }
        }
    }


</script>

<style scoped>
    nav {
        border-bottom: 1px solid #4c596b;
    }

    nav a {
        color: white;
    }

    input[type=search] {
        border: none;
        color: white;
        background-color: #494d53;
    }

    input[type=search]:focus {
        color: white;
        background-color: #494d53;
    }

</style>