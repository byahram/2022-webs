<template>
  <HeaderCont />
  <TitleCont name1="reference" name2="Api" />
  <section className="refer__cont">
    <div className="container">
      <div className="refer__inner">
        <h2>CSS</h2>
        <ul className="refer__list">
          <li v-for="refer in refers" :key="refer.id">
            <a href="/">
              <span className="num">{{ refer.id }}</span>
              <span className="title">{{ refer.title }}</span>
              <span className="desc">{{ refer.desc }}</span>
              <span className="use">{{ refer.use }}</span>
            </a>
          </li>
        </ul>
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
    const refers = ref([]);

    const references = () => {
      var requestOptions = {
        method: "GET",
        redirect: "follow",
      };

      fetch(
        "https://webstoryboy.github.io/react2022/src/assets/json/refer.json",
        requestOptions
      )
        .then((response) => response.json())
        .then((data) => (refers.value = data.data.htmlRefer))
        .catch((error) => console.log("error", error));
    };
    references();
    console.log(refers);

    return {
      refers,
      references,
    };
  },
};
</script>

<style scoped lang="scss">
.refer__cont {
  background-color: var(--black);
  min-height: 100vh;
}
.refer__inner {
  h2 {
    color: var(--white);
    font-size: 2rem;
    margin-bottom: 1rem;
  }
}

.refer__list {
  border-top: 2px solid var(--white);
  border-bottom: 1px solid var(--white);

  a {
    display: block;
    color: var(--white);
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid var(--white);
    padding: 1.3rem 0;
    transition: all 0.3s;
    font-family: var(--subKor_font);

    &:hover {
      background: var(--light_bg);
      color: var(--black);
    }
    span {
      display: inline-block;
    }
    span:nth-child(1) {
      width: 6%;
      text-align: center;
    }
    span:nth-child(2) {
      width: 20%;
    }
    span:nth-child(3) {
      width: 64%;
    }
    span:nth-child(4) {
      width: 10%;
      text-align: center;
    }
  }
}

.refer__table {
  margin-top: 200px;
  color: var(--white);
  font-family: var(--subKor_font);

  h3 {
    font-size: 3rem;
  }
  p {
    background-color: var(--light_bg);
    color: var(--black);
    padding: 1.4em;
  }

  .table {
    color: var(--white);
    font-family: var(--subKor_font);
    border: 1px solid var(--light_bg);
    margin-top: 0.5em;

    th,
    td {
      font-weight: normal;
      padding: 1em;
      border-bottom: 1px solid var(--light_bg);
      border-left: 1px solid var(--light_bg);
    }
  }
}

.refer__cont.light {
  background-color: var(--light_bg);

  .refer__inner {
    h2 {
      color: var(--black);
    }

    table {
      border-color: var(--black);
      color: var(--black);

      td {
        border-color: var(--black);
      }
    }
  }
}

//애니메이션
// .refer__inner {
//     opacity: 0;
//     transform: translateY(50px);
// }
</style>
