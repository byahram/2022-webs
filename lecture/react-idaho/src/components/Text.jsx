import React from "react";

function ContWrap(props) {
  return (
    <div className={`text ${props.class}`}>
      <h3 className="text__title">{props.title}</h3>
      <p className="text__desc">{props.desc}</p>
      <a className="text__btn" href="/">
        {props.btn}
      </a>
    </div>
  );
}

const contText = [
  {
    class: "t1",
    title: "Outdoors",
    desc: "If you crave the great outdoors, Idaho is the place for you! Hike, bike and paddle your way across Idaho’s spectacular landscapes and waterways.",
    btn: "more",
  },
  {
    class: "t2",
    title: "Family Fun",
    desc: "Need some inspiration for your next family trip? Check out these travel tips and discover family adventures fit for both kids and kids at heart.",
    btn: "more",
  },
  {
    class: "t3",
    title: "Seasonal",
    desc: "Whether you’re embarking on an unforgettable summer whitewater trip, cruising the road in search of stunning fall foliage or shredding some fresh powder at one of the state’s 18 ski resorts, Idaho has an adventure for you no matter the season.",
    btn: "more",
  },
  {
    class: "t4",
    title: "Arts & Culture",
    desc: "Visit Idaho and discover a rich and diverse arts & culture scene. Explore art museums, saunter through historical sites, sample Basque culture, or grab a seat to enjoy live music and theater performances.",
    btn: "more",
  },
  {
    class: "t5",
    title: "Itineraries",
    desc: "Whether you’re an outdoor adventurer or a culinary crusader, find an itinerary that best fits your vacation plans.",
    btn: "more",
  },
  {
    class: "t6",
    title: "Education",
    desc: "Boise State is Idaho's metropolitan research university, located in the state's capital city, a hub of government, business, the arts, health care, industry and technology.",
    btn: "more",
  },
];

const titleText = {
  sub: "If you plan to visit Idaho,",
  main: "TRAVEL TIPS",
};

function Text(props) {
  return (
    <section
      id="textType"
      className={`text__wrap ${props.skill[0]} ${props.skill[1]}`}
    >
      <span>{titleText.sub}</span>
      <h2 className="mb70">{titleText.main}</h2>
      <div className="text__inner container">
        {contText.map((txt) => (
          <ContWrap
            key={txt.class}
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

export default Text;
