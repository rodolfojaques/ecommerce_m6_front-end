import { useContext } from "react";
import { CardsContext } from "../../providers/cards";
import CardProduct from "../CardProduct";
import { StyleListCards } from "./style";

function ListCards (){
	const { cars } = useContext(CardsContext);
	
	return(
		<StyleListCards>
			<h5>Carros</h5>
			<ul>
				{
					cars.map((el, index)=>
						<CardProduct 
							key={index}
							id={el.id}
							type = {el.type}
							tytle = {el.tytle}
							year = {el.year}
							milage = {el.mileage}
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