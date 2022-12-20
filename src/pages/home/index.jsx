import HomeStl from "./styles";
import Header from "../../components/Header";
import ListCards from "../../components/ListCards";


function Home () {
    return(
        <HomeStl>
          <Header />
          <ListCards/>
        </HomeStl>

    )
};

export default Home