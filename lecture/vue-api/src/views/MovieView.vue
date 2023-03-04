<template>
  <HeaderCont />
  <TitleCont name1="movie" name2="Api" />
  <div class="movie__cont">
    <div class="container">
      <div class="movie__search">
        <form @submit.prevent="SearchMovies()">
          <div class="container">
            <h2>검색하기</h2>
            <input
              type="search"
              id="search"
              placeholder="검색하세요"
              v-model="search"
            />
            <button type="submit">검색</button>
          </div>
        </form>
      </div>
      <div class="movie__list">
        <ul>
          <li v-for="movie in movies" :key="movie.id">
            <a :href="`https://www.themoviedb.org/movie/${movie.id}`">
              <img
                :src="`https://image.tmdb.org/t/p/w342${movie.poster_path}`"
                :alt="movie.title"
              />
              <span>{{ movie.title }}</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
  <ContactCont />
  <FooterCont />
</template>

<script>
import HeaderCont from "@/components/HeaderCont.vue";
import FooterCont from "@/components/FooterCont.vue";
import TitleCont from "@/components/TitleCont.vue";
import ContactCont from "@/components/ContactCont.vue";
import { ref } from "vue";

export default {
  components: {
    HeaderCont,
    FooterCont,
    TitleCont,
    ContactCont,
  },

  setup() {
    const movies = ref([]);
    const search = ref("family");

    const SearchMovies = () => {
      fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=11ddf22d9f842737f799d74032cf4628&query=${search.value}`
      )
        .then((response) => response.json())
        .then((data) => {
          movies.value = data.results;
          search.value = "";
          console.log("1111", movies);
        })
        .catch((error) => console.log("error", error));
    };
    SearchMovies();

    return {
      movies,
      search,
      SearchMovies,
    };
  },
};
</script>

<style scoped lang="scss">
.movie__cont {
  background-color: var(--black);
}
.movie__list ul {
  display: flex;
  flex-wrap: wrap;

  li {
    flex: 1 1 23%;
    margin: 1%;

    img {
      border-radius: 0.4em;
    }

    span {
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      color: #fff;
      color: var(--white);
      display: -webkit-box;
      font-family: SCoreDream;
      font-family: var(--subKor_font);
      overflow: hidden;
      padding-top: 10px;
      text-overflow: ellipsis;
    }
  }
}

.movie__search {
  background: var(--black);

  .container {
    position: relative;
  }

  h2 {
    color: var(--white);
    font-size: 40px;
    height: 0;
    text-indent: -9999px;
    width: 0;
  }

  input {
    background: var(--black);
    border: 2px solid var(--light_border);
    border-radius: 50px;
    color: #f0eeeb;
    color: var(--white);
    margin: 0 1% 5%;
    padding: 1rem 3rem 1rem 2rem;
    width: 98%;
  }
  button {
    background: var(--white);
    border: 0;
    border-radius: 50%;
    color: var(--black);
    font-family: var(--subKor_font);
    font-size: 12px;
    height: 40px;
    position: absolute;
    right: 22px;
    top: 9px;
    transition: opacity 0.3s ease;
    width: 40px;
  }
}
</style>
