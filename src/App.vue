<template>
  <div>
    <navbar @search-movie="getResult"></navbar>
    <div class="container mt-4">
      <div class="row mt-4 justify-content-center">
        <movie-list 
          v-for="result in results" 
          :key="result.id" 
          :title="result.title" 
          :poster="result.poster_path"
          :release="result.release_date"
          ></movie-list>
      </div> 
    </div>
  </div>
</template>

<script>
  import MovieList from './components/MovieList'

  export default {
    data() {
      return {
        keyword: '',
        results: '',
      }
    },
    methods: {
      getResult(keyword) {
        fetch('https://api.themoviedb.org/3/search/movie?api_key=9436950aed01e5d0f8d81b8672c7a6be&language=en-US&query=' + keyword +'&page=1&include_adult=false')
        .then(response => response.json())
        .then(response => {
          console.log(response)
          this.results = response.results
        })
      }
    },
    components: {
      MovieList
    }
  }
</script>

<style>
  body {
    color: white;
    background-color: #23272a;
  }

  input[type=text] {
    border: none;
    color: white;
    background-color: #494d53;
  }

  input[type=text]:focus {
    color: white;
    background-color: #494d53;
  }

</style>
