<template>
  <HeaderCont />
  <TitleCont name1="unsplash" name2="Api" />
  <div className="unsplash__cont">
    <div className="container">
      <div class="unsplash__search">
        <form @submit.prevent="SearchImages()">
          <div class="container">
            <div>
              <h2>검색하기</h2>
              <input
                type="search"
                id="search"
                placeholder="검색하세요"
                v-model="search"
              />
              <button type="submit">검색</button>
            </div>
          </div>
        </form>
      </div>
      <div className="unsplash__list">
        <ul>
          <li
            className="unsplash__item"
            v-for="image in images"
            :key="image.id"
          >
            <a :href="`https://unsplash.com/photos/${image.id}`">
              <img
                :src="image.urls.thumb"
                :alt="image.title"
                className="unsplash__img"
              />
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
    const images = ref([]);
    const search = ref("seoul");

    const SearchImages = () => {
      fetch(
        `https://api.unsplash.com/search/photos?query=${search.value}&client_id=jGbDbr4a56tzr3H7rOKt8zDwnzQ6Dv8eID5gzzL8t0s&per_page=30`
      )
        .then((response) => response.json())
        .then((data) => {
          images.value = data.results;
          search.value = "";
          console.log("1111", images);
        })
        .catch((error) => console.log("error", error));
    };
    SearchImages();

    return {
      images,
      search,
      SearchImages,
    };
  },
};
</script>

<style scoped lang="scss">
.unsplash__cont {
  background-color: var(--black);
}
.unsplash__list {
  width: 100%;
  columns: 4;
  column-gap: 20px;
}
.unsplash__img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  margin-bottom: 20px;
  border-radius: 5px;
  cursor: pointer;
  background: #f9f9f9;
}

.unsplash__search {
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
