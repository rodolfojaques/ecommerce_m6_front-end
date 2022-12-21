import { useContext } from "react";
import { CardsContext } from "../../providers/cards";
import CardAuction from "../CardAuction";
import CardProduct from "../CardProduct";
import { StyleListCards } from "./style";

function ListCards ({typeCard}){
	const { cars, motocycles } = useContext(CardsContext);
	
	const list = typeCard === "cars" || "auction" ? cars : motocycles;
	
	return(
		<StyleListCards>
			{typeCard === "cars" ? <h5>Carros</h5>: typeCard === "auction" ? <h5>Leilão</h5> : <h5>Motos</h5>}
			<ul>
				{typeCard !== "auction" ?
					list.map((el, index)=>
						<CardProduct 
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
					:
					list.map((el, index)=>
						<CardAuction 
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
		</StyleListCards>
)
}

export default ListCards;