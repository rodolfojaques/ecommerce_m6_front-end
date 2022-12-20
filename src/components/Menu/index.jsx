import { Line, StyledMenu } from "./style";
import { RiAuctionFill } from "react-icons/ri";
import { BiLogIn } from "react-icons/bi";
import { AiFillCar } from "react-icons/ai"
import { FaMotorcycle } from "react-icons/fa";
import { useState } from "react";
import { useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { Button } from "../Button";

function Menu ({ showMenu, handleMenu }) {
  const [closeMenu, setCloseMenu] = useState(true);

  useEffect(() => {
    if (!showMenu) {
      setTimeout(() => {
        setCloseMenu(true);
      }, 250);
    } else {
      setCloseMenu(false);
      setTimeout(() => {
        setCloseMenu(false);
      }, 240);
    }
  }, [showMenu]);

  //const history = useHistory();

  return (
    <StyledMenu closeMenu={closeMenu} showMenu={showMenu}>
        <>
          <div>
            <Link to="/carros">
              <AiFillCar/>
              <p>Carros</p>
              <span></span>
            </Link>
          </div>
          <div>
            <a href="/motos" onClick={handleMenu}>
              <FaMotorcycle />
              <p>Motos</p>
              <span></span>
            </a>
          </div>
          <div>
            <Link to="/leilao">
              < RiAuctionFill/>
              <p>Leilão</p>
              <span></span>
            </Link>
          </div>
          <Line/>
          <div>
            <Link to="/login">
              <BiLogIn/>
              <p>Fazer Login</p>
              <span></span>
            </Link>
          </div>
          <div className="button">
            <Link to="/cadastro">
              <Button 
                border="var(--color-grey-4)"
                width="80%"
                color="var(--color-grey-0)"
              >
                Cadastrar 
              </Button>
            </Link>
          </div>
        </>
    </StyledMenu>
  );
};

export { Menu };