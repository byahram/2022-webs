// Show "arrow" button when scrolling down
const arrowUp = document.querySelector(".arrow-up");
const save = document.querySelector("#nav");
const saveHeight = save.getBoundingClientRect().height;

document.addEventListener("scroll", () => {
      if (window.scrollY > saveHeight) {
        arrowUp.classList.add("visible");
      } else {
        arrowUp.classList.remove("visible");
      }
});

// handle click on the "arrow up" button
arrowUp.addEventListener("click", () => {
    const scrollTo = document.querySelector("#nav");
      scrollTo.scrollIntoView({ behavior: "smooth" });
});

//scrollIntoView
document.querySelectorAll("a[href^='#']").forEach(el => {
    el.addEventListener("click", (event) => {
        event.preventDefault();
        document.querySelector(el.getAttribute("href")).scrollIntoView({
            behavior: "smooth",
            block: "center",
        })
    });
});

// when click 'view the result'
document.querySelectorAll(".result").forEach(el => {
    el.querySelector("summary").addEventListener("click", () => {
        el.classList.toggle("active");
    })
});
