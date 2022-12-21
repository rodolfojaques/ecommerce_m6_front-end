import { CardProdStyle } from "./styles";

import { Button } from "../Button";

function CardProduct(props) {
    const typeCard = "simpleCard"
    console.log(props)
    return (
        <>
        {
            typeCard === "userAdmin"
            ?
            <CardProdStyle>
                <div className="container_img">
                    <img className="img_prod" src={props.image} alt={props.tytle} />
                </div>
                <h3>{props.tytle}</h3>
                <p className="description">
                {props.descryption}
                </p> 
                <div className="foot_card">
                    <div className="container_infos">
                        <div className="infos">
                            {props.mileage}
                        </div>
                        <div className="infos">
                            {props.year}
                        </div>                    
                    </div>
                    <p className="price"><span>R$ </span>{props.price}</p>
                </div>
                <div className="buttons">
                    <Button color={"var('--color-grey-0')"}>Editar</Button>
                    <Button color={"var('--color-grey-0')"}>Ver como</Button>
                </div>
            </CardProdStyle>
            :
            <CardProdStyle>
                <div className="container_img">
                    <img className="img_prod" src={props.image} alt={props.tytle}/>
                </div>
                <h3>{props.tytle}</h3>
                <p className="description">
                    {props.descryption}
                </p>
                <div className="user_name">
                    <div className="img_profile_card">
                        <p className="initials_card">F</p>
                    </div>
                    <p className="name">Fulano</p>
                </div> 
                <div className="foot_card">
                    <div className="container_infos">
                        <div className="infos">
                            {props.mileage}
                        </div>
                        <div className="infos">
                            {props.year}
                        </div>                    
                    </div>
                    <p className="price">{
                        parseFloat(props.price).toLocaleString("pt-br", {
                            style: "currency",
                            currency: "BRL",
                        })}
                    </p>
                </div>
            </CardProdStyle>        
        }        
        </>

    )
}

export default CardProduct