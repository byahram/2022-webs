import React from "react";

const bannerText = {
  title: "WELCOME TO IDAHO",
  desc: "You can get more information via following page:",
  goto: "https://visitidaho.org/",
  gotoTitle: "유튜브 페이지 이동",
};

function Banner(props) {
  return (
    <section
      id="bannerType"
      className={`banner__wrap ${props.skill[0]} ${props.skill[1]}`}
    >
      <h2 className="blind">{`${props.skill[3]}`}</h2>
      <div className="banner__inner">
        <h3 className="title">{bannerText.title}</h3>
        <p className="desc">
          {bannerText.desc}
          <a href={bannerText.goto} title={bannerText.gotoTitle}>
            {bannerText.goto}
          </a>
        </p>
      </div>
    </section>
  );
}

export default Banner;
