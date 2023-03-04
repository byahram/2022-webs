import React from "react";

function ImageWrap(props) {
  return (
    <article className={`image ${props.class}`}>
      <h3 className="image__title">{props.title}</h3>
      <p className="image__desc">{props.desc}</p>
      <a className="image__btn" href="/">
        {props.btn}
      </a>
    </article>
  );
}
const imageText = [
  {
    class: "img1",
    title: "Spirit of Boise Balloon",
    desc: "This annual event can be recognized as one of Boise’s final summer events. It will held this year from August 31st through September 4th.",
    btn: "view more",
  },
  {
    class: "img2",
    title: "Western Idaho Fair",
    img: "img2",
    desc: "This event is a celebration of agriculture, ranching, and life in the state of Idaho. Tickets are available Starting August 19, 2022.",
    btn: "view more",
  },
];
const titleText = {
  main: "2022 Upcoming Events in Idaho",
  sub: [
    "Looking for things to do in Idaho?",
    "Whether you're a local, new in town or just cruising through we've got loads of great tips and events.",
  ],
};

function Image(props) {
  return (
    <section
      id="imageType"
      className={`image__wrap ${props.skill[0]} ${props.skill[1]}`}
    >
      <h2>{titleText.main}</h2>
      <p>
        {titleText.sub[0]}
        <br />
        {titleText.sub[1]}
      </p>
      <div className="image__inner container">
        {imageText.map((txt) => (
          <ImageWrap
            key={txt.title}
            class={txt.class}
            title={txt.title}
            desc={txt.desc}
            btn={txt.btn}
          />
        ))}
      </div>
    </section>
  );
}

export default Image;
