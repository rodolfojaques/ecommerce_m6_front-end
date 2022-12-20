import HomeStl from "./styles";
import Header from "../../components/Header";

import { useContext } from "react";
import { MainContext } from "../../providers/main";
import { Button } from "../../components/Button";
import CardProduct from "../../components/CardProduct/index";
import CardAuction from "../../components/CardAuction";

function Home () {

  const {stringEx} = useContext(MainContext);
  

    return(
        <HomeStl>
          <Header />
          <h2>HOME</h2>
          <CardAuction />
        </HomeStl>

    )
};

export default Home