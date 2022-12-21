import HomeStl from "./styles";
import Header from "../../components/Header";

import ListCards from "../../components/ListCards";
import { HeaderHome } from "../../components/HeaderHome";



function Home () {
    return(
        <HomeStl>
          <Header />

          <HeaderHome/>
          <ListCards typeCard="auction"/>
          <ListCards typeCard="cars"/>
          <ListCards typeCard="motocycles"/>

        </HomeStl>

    )
};

export default Home