import CardAuction from "../CardAuction";
import { StyleListCardsAuctionFake } from "./style";

function ListCardsAuctionFake ({typeCard}){
	
	return(
		<StyleListCardsAuctionFake>
			<h5>Leilão</h5>
			<ul>
				{typeCard === "auction" ?
					<>
						<CardAuction 
							typeUser="userAdmin"
						/>	
						<CardAuction 
							typeUser="userAdmin"
						/>					
					</>
					: <></>
					
				}
			</ul>
		</StyleListCardsAuctionFake>
)
}

export default ListCardsAuctionFake;