import React from "react";
import "./menu.css";
import LogoImg from "../../images/logo.jpg"

const Menu = () => {
  return (
    <div>
      <header></header>
      <section className="menu">
        <div className="headercontainer">
          <img className="logo" src={LogoImg} alt="logo" />
          <p className="texto">CoronaVirus Site</p>
        </div>
      </section>
    </div>
  );
};

export default Menu;
