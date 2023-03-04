import React from "react";
import $ from "jquery";
import { FaBars, FaTimes } from "react-icons/fa";

function SigninWrap(props) {
  return <a href={props.goto}>{props.text}</a>;
}
const signinText = [
  { title: "Sign in", goto: "#" },
  { title: "Github", goto: "https://github.com/byahram/idaho-react-website" },
];

function MenuWrap(props) {
  return (
    <li>
      <a href={props.goto}>{props.text}</a>
    </li>
  );
}
const menuText = [
  { menu: "ABOUT", goto: "#" },
  { menu: "FOOD/DRINK", goto: "#" },
  { menu: "THINGS TO DO", goto: "#" },
  { menu: "TRAVEL TIPS", goto: "#" },
  { menu: "SIGN IN", goto: "#" },
  {
    menu: "GO TO GITHUB",
    goto: "https://github.com/byahram/idaho-react-website",
  },
];
const logoText = { txt: ["Idaho", "state"] };

function Header(props) {
  function showNav(e) {
    e.preventDefault();
    $(".header__menu").slideToggle();
  }

  return (
    <header id="headerType" className={`header__wrap ${props.fonts}`}>
      <div className="header__inner">
        <div className="header__logo">
          <a href="/">
            {logoText.txt[0]} <em>{logoText.txt[1]}</em>
          </a>
        </div>

        <nav className="header__menu">
          <ul>
            {menuText.map((txt) => (
              <MenuWrap text={txt.menu} key={txt.menu} goto={txt.goto} />
            ))}
          </ul>
        </nav>

        <button className="nav-btn" onClick={showNav}>
          <FaBars />
        </button>
        <button className="nav-btn nav-close-btn" onClick={showNav}>
          <FaTimes />
        </button>

        <div className="header__member">
          {signinText.map((txt) => (
            <SigninWrap text={txt.title} key={txt.title} goto={txt.goto} />
          ))}
        </div>
      </div>
    </header>
  );
}

export default Header;
