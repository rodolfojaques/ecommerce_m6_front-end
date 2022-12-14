import HeaderStl from "./styles";

import navIcon from "../../assets/bars.png"
import logoIcon from "../../assets/Motors_shop.png"

import { useState } from "react";

function Header () {

  const [isMobile, setIsMobile] = useState(true);

  window.addEventListener("resize", () => {
    window.innerWidth > 800? setIsMobile(false): setIsMobile(true)
  })

  return (
    <HeaderStl>
      <section className="logo">
        <img src={logoIcon} alt="" />
      </section>
      {
        isMobile?
        <section className="nav_container">
          <div className="options_mobile">
            <img src={navIcon} alt="bars navegation" />
          </div>          
        </section>
        :
        <section className="nav_container">
          <div className="options_full">
            <p className="nav_btn">Carros</p>
            <p className="nav_btn">Motos</p>
            <p className="nav_btn">Leilão</p>
          </div>
          <p className="division">|</p>
          <div className="user_options">
            <p className="nav_btn">Fazer Login</p>
            <button className="nav_btn">Cadastrar</button>
          </div>          
        </section>
      }
      </HeaderStl>
  )
};

export default Header