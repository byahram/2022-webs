import React from "react";

function ListWrap(props) {
  return (
    <li>
      <a href="/">{props.spot}</a>
    </li>
  );
}
function MenuWrap(props) {
  return (
    <div>
      <h3>{props.city}</h3>
      <ul>
        {props.spot.map((txt) => (
          <ListWrap key={txt} spot={txt} />
        ))}
      </ul>
    </div>
  );
}
const menuText = [
  {
    city: "Boise",
    spot: [
      "Boise Train Depot",
      "Scavenger Hunt",
      "Bogus Basin",
      "Botanical Garden",
    ],
  },
  {
    city: "Idaho falls",
    spot: ["Shoshone Falls", "Jump Creek", "Auger Falls"],
  },
  {
    city: "Nampa",
    spot: ["Winery Tours", "Wilson Springs Ponds"],
  },
  {
    city: "Pocatello",
    spot: [
      "Old Town",
      "St.Joseph's Chapel",
      "Hot Spring",
      "Natural History Museum",
      "Swore Frams",
    ],
  },
  {
    city: "Twin Falls",
    spot: ["Perrine Bridge", "Snake River", "Dierkes Lake"],
  },
  {
    city: "Meridian",
    spot: ["The Village", "Settlers Park", "Wahooz"],
  },
];
const footerText = { text: ["2022 Ahram Kim.", "All rights reserved."] };

function Footer(props) {
  return (
    <footer
      id="footerType"
      className={`footer__wrap ${props.skill[0]} ${props.skill[1]} ${props.skill[2]}`}
    >
      <h2 className="blind">{`${props.skill[2]}`}</h2>
      <div className="footer__inner container">
        <div className="footer__menu">
          {menuText.map((txt) => (
            <MenuWrap key={txt.city} city={txt.city} spot={txt.spot} />
          ))}
        </div>
        <div className="footer__right">
          {footerText.text[0]}
          <br />
          {footerText.text[1]}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
