import CardStl from "./styles";
import { MainContext } from "../../providers/main";
import { useContext } from "react";

function Card (){
    

    const { stringEx } = useContext(MainContext);

    return(
        <CardStl>

        </CardStl>
    )
};

export default Card