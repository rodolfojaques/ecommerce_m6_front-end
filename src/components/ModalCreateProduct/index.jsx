import { Button } from "../Button"
import { FormCreateProductStyle } from "./styles"

function FormCreateProduct(){
    return(
        <FormCreateProductStyle>
            <form className="form_cont">
                <div className="title_form">
                    <p className="text_title">
                        Criar anúncio
                    </p>
                    <span className="button_x">X</span>
                </div>
                <div className="type_ann">
                    <p className="ttl_type">
                        Tipo de anúncio
                    </p>
                    <div className="btn_type">
                        <Button 
                        background={"var(--color-brand-1)"}
                        color="#FFFFFF"
                        border={"var(--color-brand-1)"}>Venda</Button>
                        <Button 
                        background="#FFFFFF"
                        color={"var(--color-grey-0)"}
                        border={"var(--color-grey-0)"}>Leilão</Button>
                    </div>
                </div>
                <p className="ttl_type">Informações do veículo</p>
                <div className="inputs">
                    <label htmlFor="title" className="label">Título</label>
                    <input 
                    type="text" 
                    name="title" 
                    id="title_ann" 
                    className="title_ann"
                    placeholder="Digitar título"/>
                </div>
                <div className="triple_container">
                    <div className="doble_inputs">
                        <div className="inputs">
                            <label htmlFor="year" className="label">Ano</label>
                            <input 
                            type="text" 
                            name="year" 
                            id="year_ann" 
                            className="title_ann"
                            placeholder="2018"/>
                        </div>
                        <div className="inputs">
                            <label htmlFor="km" className="label">Quilometragem</label>
                            <input 
                            type="text" 
                            name="km" 
                            id="km_ann" 
                            className="title_ann"
                            placeholder="0"/>
                        </div>
                    </div>
                    <div className="inputs">
                        <label htmlFor="price" className="label">Preço</label>
                        <input 
                        type="text" 
                        name="price" 
                        id="price_ann" 
                        className="title_ann"
                        placeholder="50.000,00"/>
                    </div>                   
                </div> 
                <div className="inputs">
                    <label htmlFor="description" className="label">Descrição</label>
                    <input 
                    type="text" 
                    name="description" 
                    id="description_ann" 
                    className="title_ann"
                    placeholder="Digitar descrição"/>
                </div>
                <div className="type_ann">
                    <p className="ttl_type">
                        Tipo de veículo
                    </p>
                    <div className="btn_type">
                        <Button 
                        background={"var(--color-brand-1)"}
                        color="#FFFFFF"
                        border={"var(--color-brand-1)"}>Carro</Button>
                        <Button 
                        background="#FFFFFF"
                        color={"var(--color-grey-0)"}
                        border={"var(--color-grey-0)"}>Moto</Button>
                    </div>
                </div>
                <div className="inputs">
                    <label htmlFor="img" className="label">Imagem da capa</label>
                    <input 
                    type="text" 
                    name="img" 
                    id="img_ann" 
                    className="title_ann"
                    placeholder="https://image.com"/>
                </div>
                <div className="inputs">
                    <label htmlFor="img_galery" className="label">{"1"}° Imagem da galeria</label>
                    <input 
                    type="text" 
                    name="img_galery" 
                    id="img_galery_ann" 
                    className="img_galery_ann"
                    placeholder="https://image.com"/>
                </div>
                <div className="inputs">
                    <label htmlFor="img_galery" className="label">{"2"}° Imagem da galeria</label>
                    <input 
                    type="text" 
                    name="img_galery" 
                    id="img_galery_ann" 
                    className="img_galery_ann"
                    placeholder="https://image.com"/>
                </div>
                <span className="add_camp_img">
                    Adicionar campo para a imagem da galeria
                </span>
                <div className="btn_type">
                    <Button 
                    background={"var(--color-grey-6)"}
                    color={"var(--color-grey-0)"}
                    border={"var(--color-grey-6)"}>Cancelar</Button>
                    <Button 
                    background={"var(--color-brand-3)"}
                    color="#FFFFFF"
                    border={"var(--color-brand-3)"}>Criar anúncio</Button>
                </div>                
            </form>

        </FormCreateProductStyle>
    )
}

export default FormCreateProduct