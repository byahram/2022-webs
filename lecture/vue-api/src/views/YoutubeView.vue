<template>
  <HeaderCont />
  <TitleCont name1="youtube" name2="Api" />
  <div class="youtube__cont">
    <div class="container">
      <div class="youtube__inner">
        <div class="youtube__search">
          <form @submit.prevent="SearchYoutubes()">
            <div class="container">
              <h2>검색하기</h2>
              <input
                type="search"
                id="search"
                placeholder="검색하세요."
                v-model="search"
              />
              <button type="submit">검색</button>
            </div>
          </form>
        </div>
        <div class="youtube__list">
          <ul>
            <li v-for="youtube in youtubes" :key="youtube.id.videoId">
              <a href="">
                <img
                  :src="youtube.snippet.thumbnails.medium.url"
                  :alt="youtube.snippet.title"
                />
                <p>{{ youtube.snippet.title }}</p>
              </a>
            </li>
          </ul>
        </div>
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
    const youtubes = ref([]);
    const search = ref("day6");

    const SearchYoutubes = () => {
      fetch(
        `https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=${search.value}&key=AIzaSyAakHZ_FjmDH4JN6VZ05ECPU81uH6oSbmU&maxResults=28&type=video`
      )
        .then((response) => response.json())
        .then((data) => {
          youtubes.value = data.items;
          search.value = "";
          console.log(youtubes);
        })
        .catch((error) => console.log("error", error));
    };
    SearchYoutubes();

    return {
      youtubes,
      search,
      SearchYoutubes,
    };
  },
};
</script>

<style scoped lang="scss">
.youtube__cont {
  background-color: var(--black);
}
.youtube__list {
  ul {
    display: flex;
    flex-wrap: wrap;

    li {
      flex: 1 1 23%;
      margin: 1%;

      img {
        border-radius: 0.4em;
      }
      p {
        color: var(--white);
        font-family: var(--subKor_font);
        padding-top: 10px;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
      }
    }
  }
}

.youtube__search {
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

@media (max-width: 800px) {
  .youtube__list ul li {
    flex: 1 1 43%;
  }
}

// 애니메이션
// .youtube__search,
// .youtube__list {
//   opacity: 0;
//   transform: translateY(100px);
// }
</style>
