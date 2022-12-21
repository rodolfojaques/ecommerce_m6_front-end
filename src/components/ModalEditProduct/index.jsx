import { Button } from "../Button"
import { FormEditProductStyle } from "./styles"

import * as yup from 'yup';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { useState } from "react";

function FormEditProduct(){

    const [typeTransaction, setTypeTransaction] = useState("Venda")
    const [typeVeicle, setTypeVeicle] = useState("Carro")

    const schema = yup.object().shape({
        tytle: yup.string().required("Título é um campo obrigatório*"),
        year: yup.string().required("Ano é um campo obrigatório"),
        mileage: yup.string().required("Quilometragem é um campo obrigatório*"),
        price: yup.string().required("Preço é um campo obrigatório*"),
        descryption: yup.string().required("Descrição é um campo obrigatório*"),
        image: yup.string().required("Imagem é um campo obrigatório*"),
    })
  
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    })
  
    
    const formSchema = async data => {
        const newData = {
            ...data,
            type: typeTransaction,
            category: typeVeicle
        }
        console.log(newData);
    };

    return(
        <FormEditProductStyle>
            <form onSubmit={handleSubmit(formSchema)} className="form_cont">
                <div className="title_form">
                    <p className="text_title">
                        Editar anúncio
                    </p>
                    <span className="button_x">X</span>
                </div>
                <div className="type_ann">
                    <p className="ttl_type">
                        Tipo de anúncio
                    </p>
                    <div className="btn_type">
                        <Button type="Button" 
                        background={"var(--color-brand-1)"}
                        color="#FFFFFF"
                        border={"var(--color-brand-1)"}>Venda</Button>
                        <Button type="Button" 
                        background="#FFFFFF"
                        color={"var(--color-grey-0)"}
                        border={"var(--color-grey-0)"}>Leilão</Button>
                    </div>
                </div>
                <p className="ttl_type">Informações do veículo</p>
                <div className="inputs">
                    <label htmlFor="tytle" className="label">Título</label>
                    <input 
                    type="text" 
                    name="tytle" 
                    id="title_ann" 
                    className="title_ann"
                    placeholder="Digitar título"
                    {...register("tytle")}/>
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
                            placeholder="2018"
                            {...register("year")}/>
                        </div>
                        <div className="inputs">
                            <label htmlFor="mileage" className="label">Quilometragem</label>
                            <input 
                            type="text" 
                            name="mileage" 
                            id="km_ann" 
                            className="title_ann"
                            placeholder="0"
                            {...register("mileage")}/>
                        </div>
                    </div>
                    <div className="inputs">
                        <label htmlFor="price" className="label">Preço</label>
                        <input 
                        type="text" 
                        name="price" 
                        id="price_ann" 
                        className="title_ann"
                        placeholder="50.000,00"
                        {...register("price")}/>
                    </div>                   
                </div> 
                <div className="inputs">
                    <label htmlFor="descryption" className="label">Descrição</label>
                    <input 
                    type="text" 
                    name="descryption" 
                    id="descryption_ann" 
                    className="title_ann"
                    placeholder="Digitar descrição"
                    {...register("descryption")}/>
                </div>
                <div className="type_ann">
                    <p className="ttl_type">
                        Tipo de veículo
                    </p>
                    <div className="btn_type">
                        <Button type="Button" 
                        background={"var(--color-brand-1)"}
                        color="#FFFFFF"
                        border={"var(--color-brand-1)"}>Carro</Button>
                        <Button type="Button" 
                        background="#FFFFFF"
                        color={"var(--color-grey-0)"}
                        border={"var(--color-grey-0)"}>Moto</Button>
                    </div>
                </div>
                <div className="type_ann">
                    <p className="ttl_type">
                        Publicado
                    </p>
                    <div className="btn_type">
                        <Button type="Button" 
                        background="#FFFFFF"
                        color={"var(--color-grey-0)"}
                        border={"var(--color-grey-0)"}>Sim</Button>                        
                        <Button type="Button" 
                        background={"var(--color-brand-1)"}
                        color="#FFFFFF"
                        border={"var(--color-brand-1)"}>Não</Button>
                    </div>
                </div>
                <div className="inputs">
                    <label htmlFor="image" className="label">Imagem da capa</label>
                    <input 
                    type="text" 
                    name="image" 
                    id="image_ann" 
                    className="title_ann"
                    placeholder="https://image.com"
                    {...register("image")}/>
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
                    <Button type="Button"
                    font_size="12px" 
                    background={"var(--color-grey-6)"}
                    color={"var(--color-grey-0)"}
                    border={"var(--color-grey-6)"}>Excluir anúncio</Button>
                    <Button
                    font_size="12px" 
                    background={"var(--color-brand-3)"}
                    color="#FFFFFF"
                    border={"var(--color-brand-3)"}>Salvar alterações</Button>
                </div>                
            </form>

        </FormEditProductStyle>
    )
}

export default FormEditProduct