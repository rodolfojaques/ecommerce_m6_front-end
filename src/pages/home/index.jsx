import HomeStl from "./styles";
import Header from "../../components/Header";

import { useContext } from "react";
import { MainContext } from "../../providers/main";
import { Button } from "../../components/Button";

function Home () {

  const {stringEx} = useContext(MainContext);
  

    return(
        <HomeStl>
          <Header />
          <h2>HOME</h2>
          <Button 
            //background={"var(--color-grey-1)"}
            border={"var(--color-grey-0)"}
            color={"var(--color-grey-0)"}
          >
            Cadastrar
          </Button>
        </HomeStl>

    )
};

export default Home