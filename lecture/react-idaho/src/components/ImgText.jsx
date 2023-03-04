import React from "react";

const titleText = {
  sec: "EAT&DRINK",
  title: "Did you know..?",
  desc: "Visit Idaho and discover exquisite dining experiences, award-winning wineries and incredible craft beers.",
};

function ImgWrap(props) {
  return (
    <div className={props.class[0]}>
      <a href="/" className={props.class[1]}>
        {props.name}
      </a>
    </div>
  );
}
const imgText = [
  { class: ["img1", ""], name: "Boise Fry Company" },
  { class: ["img2", "blue"], name: "Idaho Breweries" },
];

function ListWrap(props) {
  return (
    <li>
      <a href="/">{props.info}</a>
    </li>
  );
}
const listText = [
  {
    info: "Idaho leads the nation in potato production producing nearly ⅓of all U.S. potatoes.",
  },
  {
    info: "Huckleberries, Idaho’s state fruit, can be found in a wide variety of delicacies across the state from pies to ice cream to vodka.",
  },
  {
    info: "One of Bear Island Brewing's uniquely Idaho brews is the Idaho Potato Ale, a balanced IPA made with Idaho Russets.",
  },
];

function ImgText(props) {
  return (
    <section
      id="imgTextType"
      className={`imgText__wrap ${props.skill[0]} ${props.skill[1]} ${props.skill[2]}`}
    >
      <h2 className="blind">{`${props.skill[3]}`}</h2>
      <div className="imgText__inner container">
        <div className="imgText__txt">
          <span className="small">{titleText.sec}</span>
          <h3 className="title">{titleText.title}</h3>
          <p className="desc">{titleText.desc}</p>
          <ul className="list">
            {listText.map((txt) => (
              <ListWrap key={txt.info} info={txt.info} />
            ))}
          </ul>
        </div>
        <div className="imgText__img">
          {imgText.map((txt) => (
            <ImgWrap key={txt.class} class={txt.class} name={txt.name} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default ImgText;
