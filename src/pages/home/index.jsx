import HomeStl from "./styles";
import Header from "../../components/Header";

import { useContext } from "react";
import { MainContext } from "../../providers/main";

function Home () {

  const {stringEx} = useContext(MainContext);
  

    return(
      <HomeStl>
        <Header />
        <h2>HOME</h2>
      </HomeStl>

    )
};

export default Home