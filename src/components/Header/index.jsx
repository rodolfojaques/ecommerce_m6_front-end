import HeaderStl from "./style";

import navIcon from "../../assets/bars.png"
import logoIcon from "../../assets/Motors_shop.png"

import { useEffect, useState } from "react";
import { Button } from "../Button";
import { Menu } from "../Menu";

function Header () {

  const [isMobile, setIsMobile] = useState(true);
  const [loged, setLoged] = useState(false)
  const [showMenu, setShowMenu] = useState(false);

  const handleMenu = () => {
    setShowMenu(!showMenu);
  };

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
          <div className="options_mobile" onClick={handleMenu}>
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
              <Button 
                color="var(--color-grey-0)"
                border="var(--color-grey-4)"
                
              >
                Cadastrar
              </Button>
            </div>
                    
          }         
        </section>
      }
      <Menu 
        handleMenu={handleMenu} 
        showMenu={showMenu}
      />
      </HeaderStl>
  )
};

export default Header