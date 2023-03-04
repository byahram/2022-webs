// rfec
import React from "react";

function DotWrap(props) {
  return (
    <a href="/" className={props.class}>
      <span className="blind">{props.text}</span>
    </a>
  );
}
const dotText = [
  { class: "dot active", text: "1" },
  { class: "dot", text: "2" },
  { class: "dot", text: "3" },
  { class: "play", text: "플레이" },
  { class: "stop", text: "정지" },
];

function ArrowWrap(props) {
  return (
    <a href="/" className={props.class}>
      <span className="blind">{props.text}</span>
    </a>
  );
}
const arrowText = [
  { class: "left", text: "이전 이미지" },
  { class: "right", text: "다음 이미지" },
];

function SliderWrap(props) {
  return (
    <div className="desc">
      <span>{props.loc}</span>
      <h3>{props.name}</h3>
      <p>
        {props.desc[0]}
        <br />
        {props.desc[1]}
      </p>
      <div className="btn">
        <a href="/">{props.btn[0]}</a>
        <a href="/" className="black">
          {props.btn[1]}
        </a>
      </div>
    </div>
  );
}
const sliderText = [
  {
    loc: "Idaho",
    name: "Bogus Basin",
    desc: [
      "The Treasure Valley's year-round destination for mountain recreation, education, and community.",
      "Operated by the Bogus Basin Recreation Association",
    ],
    btn: ["VIEW MORE", "GO TO SITE"],
  },
  /*{
    loc: "Idaho",
    name: "Bogus Basin",
    desc: [
      "The Treasure Valley's year-round destination for mountain recreation, education, and community.",
      "Operated by the Bogus Basin Recreation Association",
    ],
    btn: ["VIEW MORE", "GO TO SITE"],
  },
  {
    loc: "Idaho",
    name: "Bogus Basin",
    desc: [
      "The Treasure Valley's year-round destination for mountain recreation, education, and community.",
      "Operated by the Bogus Basin Recreation Association",
    ],
    btn: ["VIEW MORE", "GO TO SITE"],
  },*/
];

function Slider(props) {
  return (
    <section id="sliderType" className={`slider__wrap ${props.skill[0]}`}>
      <h2 className="blind">{`${props.skill[1]}`}</h2>
      <div className="slider__inner">
        <div className="slider">
          <div className="slider__img">
            {sliderText.map((txt) => (
              <SliderWrap
                key={txt.name}
                loc={txt.loc}
                name={txt.name}
                desc={txt.desc}
                btn={txt.btn}
              />
            ))}
          </div>
          <div className="slider__arrow">
            {arrowText.map((txt) => (
              <ArrowWrap key={txt.class} class={txt.class} text={txt.text} />
            ))}
          </div>
          <div className="slider__dot">
            {dotText.map((txt) => (
              <DotWrap key={txt.text} class={txt.class} text={txt.text} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Slider;
