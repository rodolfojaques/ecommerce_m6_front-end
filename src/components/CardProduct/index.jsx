import { CardProdStyle } from "./styles";

import imgBase from "../../assets/Motors_shop.png";
import { Button } from "../Button";

function CardProduct({type="userSimple"}) {

    return (
        <>
        {
            type === "userAdmin"
            ?
            <CardProdStyle>
                <div className="container_img">
                    <img className="img_prod" src={imgBase} alt="" />
                </div>
                <h3>Product title stays here - max 1 line</h3>
                <p className="description">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem...
                </p> 
                <div className="foot_card">
                    <div className="container_infos">
                        <div className="infos">
                            0 KM
                        </div>
                        <div className="infos">
                            2019
                        </div>                    
                    </div>
                    <p className="price"><span>R$ </span>00.000,00</p>
                </div>
                <div className="buttons">
                    <Button color={"var('--color-grey-0')"}>Editar</Button>
                    <Button color={"var('--color-grey-0')"}>Ver como</Button>
                </div>
            </CardProdStyle>
            :
            <CardProdStyle>
                <div className="container_img">
                    <img className="img_prod" src={imgBase} alt="" />
                </div>
                <h3>Product title stays here - max 1 line</h3>
                <p className="description">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem...
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
                            0 KM
                        </div>
                        <div className="infos">
                            2019
                        </div>                    
                    </div>
                    <p className="price"><span>R$ </span>00.000,00</p>
                </div>
            </CardProdStyle>        
        }        
        </>

    )
}

export default CardProduct