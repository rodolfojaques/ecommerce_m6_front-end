
import { Button } from "../../components/Button"
import Header from "../../components/Header"
import ListCardsAuctionFake from "../../components/ListCardsAuctionFake"
import ListCardsProfile from "../../components/ListCardsProfile"
import { PageProfileStyle } from "./styles"

import { useContext, useState } from "react"
import { UserContext } from "../../providers/user"
import FormCreateProduct from "../../components/ModalCreateProduct"

function PageProfile() {
	const { user } = useContext(UserContext);

  const [ openModalCreate, setOpenModalCreate ] = useState(false)

  const initial = () => {
    if(user?.id){
      return  user?.fullName[0]
    }
  }
  
  return(
    <>
    <Header user={user} log={true}/>
    <PageProfileStyle>
      <section className="sec_head">
        <div className="backcolor backcolor_a"></div>
        <div className="backcolor backcolor_b"></div>
        <div className="card_user">
          <div className="user_name_p">
            <div className="img_profile_card_p">
              <p className="initials_card_p">{initial()}</p>
            </div>
            <p className="name_p">{user.fullName} <span>Anunciante</span></p>
          </div> 
          <p className="description_p">{user.description}</p>
          <Button onClick={() => setOpenModalCreate(true)}
          color="var(--color-grey-1)"
          border="var(--color-grey-1)"
          >Criar anúncio</Button>
        </div>

      </section>
      <ListCardsAuctionFake typeCard="auction" />
      <ListCardsProfile typeCard={"cars"}></ListCardsProfile>  
      <ListCardsProfile typeCard={"motocycle"}></ListCardsProfile>        
    </PageProfileStyle>  
    {
      openModalCreate
      ?
      <FormCreateProduct setOpenModalCreate={setOpenModalCreate}/>
      :<></>
    }
    </>
  )
}

export default PageProfile