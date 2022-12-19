import HeaderStl from "./styles";

import navIcon from "../../assets/bars.png"
import logoIcon from "../../assets/Motors_shop.png"

import { useEffect, useState } from "react";
import { Button } from "../Button";

function Header () {

  const [isMobile, setIsMobile] = useState(true);

  const [loged, setLoged] = useState(false)

  useEffect(()=>{
    window.innerWidth > 800? setIsMobile(false): setIsMobile(true)
  },[])

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
          {
            loged?
            <div className="user_options">
              <div className="img_profile">
                <p className="initials">NU</p>
              </div>
              <p className="nav_btn"> Name User</p>
            </div> 
            :
            <div className="user_options">
              <p className="nav_btn">Fazer Login</p>
              <Button color={"var('--color-grey-0')"} >Cadastrar</Button>
            </div>        
          }         
        </section>
      }
      </HeaderStl>
  )
};

export default Header