<template>
  <HeaderCont />
  <TitleCont name1="portfolio" name2="Api" />
  <section class="port__cont">
    <div class="container">
      <div class="port__inner">
        <article class="port__item" v-for="port in ports" :key="port.id">
          <figure class="img">
            <a :href="port.link">
              <img :src="port.image" :alt="port.title" />
            </a>
          </figure>
          <div class="text">
            <h3>{{ port.title }}</h3>
            <p>{{ port.category }}</p>
          </div>
        </article>
      </div>
    </div>
  </section>
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
    const ports = ref([]);

    const portfolios = () => {
      var requestOptions = {
        method: "GET",
        redirect: "follow",
      };

      fetch(
        "https://webstoryboy.github.io/dothome1/portfolio.json",
        requestOptions
      )
        .then((response) => response.json())
        .then((data) => (ports.value = data.data.ports))
        .catch((error) => console.log("error", error));
    };
    portfolios();
    console.log(ports);

    return {
      ports,
      portfolios,
    };
  },
};
</script>

<style scoped lang="scss">
// port__cont
.port__cont {
  background-color: var(--black);
}
.port__inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
}
.port__item {
  flex: 1 1 30%;
  margin: 1%;

  .text {
    padding: 1.4rem;
    background-color: var(--light_border);

    h3 {
      color: var(--white);
      font-family: var(--main_font);
      font-size: 2.6rem;
      line-height: 1;
      padding-top: 0.2em;
      text-transform: uppercase;
    }
    p {
      color: var(--white);
      font-family: var(--sub_font);
    }
  }
}

//애니메이션
// .port__inner {
//   opacity: 0;
//   transform: translateY(50px);
// }
</style>
