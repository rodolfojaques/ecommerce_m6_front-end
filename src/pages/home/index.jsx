import HomeStl from "./styles";
import Header from "../../components/Header";
import ListCards from "../../components/ListCards";


function Home () {
    return(
        <HomeStl>
          <Header />
          <ListCards typeCard="cars"/>
          <ListCards typeCard="motocycles"/>
        </HomeStl>

    )
};

export default Home