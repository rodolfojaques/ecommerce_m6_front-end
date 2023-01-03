import { useContext } from "react";
import { CardsContext } from "../../providers/cards";
import CardAuction from "../CardAuction";
import CardProduct from "../CardProduct";
import { StyleListCardsProfile } from "./style";

function ListCardsProfile ({typeCard}){
	const { cars, motocycles } = useContext(CardsContext);
	
	const list = typeCard === "cars" ? cars : motocycles;
	
	return(
		<StyleListCardsProfile>
			{typeCard === "cars" ? <h5>Carros</h5>: typeCard === "auction" ? <h5>Leilão</h5> : <h5>Motos</h5>}
			<ul>
				{typeCard !== "auction" ?
					list.map((el, index)=>
						<CardProduct 
							typeUser="userAdmin"
							key={index}
							id={el.id}
							type = {el.type}
							tytle = {el.vehicleModel}
							year = {el.year}
							mileage = {el.km}
							price = {el.price}
							descryption = {el.description}
							category = {el.category}
							image = {el.images[0].url}
						/>
					)
					:

					list.map((el, index)=>
						<CardAuction 
							typeUser="userAdmin"
							key={index}
							id={el.id}
							type = {el.type}
							tytle = {el.tytle}
							year = {el.year}
							mileage = {el.mileage}
							price = {el.price}
							descryption = {el.descryption}
							category = {el.category}
							image = {el.image}
						/>
					)
				}
			</ul>
		</StyleListCardsProfile>
)
}

export default ListCardsProfile;