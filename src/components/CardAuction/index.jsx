import { CardAuctionStyle } from "./styles";
import { ContainerStyle } from "./styles";

import arrow from "../../assets/arrow.png"
import clock from "../../assets/clock.png"

import imgBase from "../../assets/Motors_shop.png";
import { Button } from "../Button";
import { FootButton } from "./styles";
import { FootButtonAdmin } from "./styles";

function CardAuction(props) {
 
    return (
        <>
        {
            props.typeUser === "userAdmin"
            ?
            <>
            <CardAuctionStyle>
                    <div className="container_img_l">
                        <img className="img_prod_l" src={imgBase} alt="" />
                    </div>                
                <ContainerStyle>
                    <div className="timeExp">
                        <img src={clock} alt="" className="clock" />
                        <p className="time">00:00:00</p>
                    </div>
                    <h3 className="title">Product title stays here</h3>
                    <p className="description_l">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem...
                    </p> 
                    <div className="foot_card_l">
                        <div className="container_infos_l">
                            <div className="infos_l">
                                0 KM
                            </div>
                            <div className="infos_l">
                                2019
                            </div>                    
                        </div>
                        <p className="price_l"><span>R$ </span>00.000,00</p>
                    </div>
                </ContainerStyle>
                <FootButtonAdmin>
                    <Button border={"var(--color-grey-10)"} color={"var(--color-grey-10)"}>Editar</Button>
                    <Button border={"var(--color-grey-10)"} color={"var(--color-grey-10)"}>Ver como</Button>
                </FootButtonAdmin>                 
            </CardAuctionStyle>
           
            </>
            :
            <>
            <CardAuctionStyle>
                <div className="container_img_l">
                    <img className="img_prod_l" src={imgBase} alt="" />
                </div>                
                <ContainerStyle>
                    <div className="timeExp">
                        <img src={clock} alt="" className="clock" />
                        <p className="time">00:00:00</p>
                    </div>
                    <h3 className="title">Product title stays here</h3>
                    <p className="description_l">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem...
                    </p>
                    <div className="user_name_l">
                        <div className="img_profile_card_l">
                            <p className="initials_card_l">F</p>
                        </div>
                        <p className="name_l">Fulano</p>
                    </div> 
                    <div className="foot_card_l">
                        <div className="container_infos_l">
                            <div className="infos_l">
                                0 KM
                            </div>
                            <div className="infos_l">
                                2019
                            </div>                    
                        </div>
                        <p className="price_l"><span>R$ </span>00.000,00</p>
                    </div>
                </ContainerStyle>
                <FootButton>
                    <p className="foot_txt">
                        Acessar a página do leilão
                    </p>
                    <img src={arrow} alt="seta" className="arrow" />                
                </FootButton>             
            </CardAuctionStyle> 
            </>       
        }        
        </>

    )
}

export default CardAuction