import { Button } from "../Button"
import { FormCreateProductStyle } from "./styles"

import * as yup from 'yup';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { useState } from "react";

import { useContext } from "react";
import { UserContext } from "../../providers/user";
import axios from "axios";

function FormCreateProduct({setOpenModalCreate}){

    const [typeTransaction, setTypeTransaction] = useState("Venda")
    const [typeVeicle, setTypeVeicle] = useState("Carro")

    const user = JSON.parse(localStorage.getItem("User_local"))

    const schema = yup.object().shape({
        title: yup.string().required("Título é um campo obrigatório*"),
        year: yup.string().required("Ano é um campo obrigatório"),
        mileage: yup.string().required("Quilometragem é um campo obrigatório*"),
        price: yup.string().required("Preço é um campo obrigatório*"),
        description: yup.string().required("Descrição é um campo obrigatório*"),
        image: yup.string().required("Imagem é um campo obrigatório*"),
        image1: yup.string(),
        image2: yup.string(),
    })
  
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    })
  
    
    const formSchema = async data => {
        const imgsArray = []

        !!data.image1? imgsArray.push(data.image1):<></>
        !!data.image2? imgsArray.push(data.image2):<></>
        !!data.image3? imgsArray.push(data.image3):<></>
        !!data.image4? imgsArray.push(data.image4):<></>
        !!data.image5? imgsArray.push(data.image5):<></>
        !!data.image6? imgsArray.push(data.image6):<></>
        
        const newData = {
            auction: false,
            vehicleModel: data.title,
            year: data.year,
            km: Number(data.mileage),
            price: Number(data.price.slice(0,data.price.length - 3).replace('.', '')),
            description: data.description,
            isCar: typeVeicle === "Carro",
            mainImage: data.image,
            images: imgsArray
        }
        console.log(newData);
        
        axios.post("http://localhost:3001/products", newData, {
            headers:{
                Authorization: `token ${user.token}`
            }
        })
        .then(res => setOpenModalCreate(false))
        .catch(err => console.log(err))
    };

    return(
        <FormCreateProductStyle>
            <form onSubmit={handleSubmit(formSchema)} className="form_cont">
                <div className="title_form">
                    <p className="text_title">
                        Criar anúncio
                    </p>
                    <span onClick={()=>setOpenModalCreate(false)} className="button_x">X</span>
                </div>
                <div className="type_ann">
                    <p className="ttl_type">
                        Tipo de anúncio
                    </p>
                    <div className="btn_type">
                        <Button type="Button"
                        onClick={()=> setTypeTransaction("Venda")} 
                        background={"var(--color-brand-1)"}
                        color="#FFFFFF"
                        border={"var(--color-brand-1)"}>Venda</Button>
                        <Button  type="Button"
                        onClick={()=> setTypeTransaction("Leilão")} 
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
                    placeholder="Digitar título"
                    {...register("title")}/>
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
                            <label htmlFor="km" className="label">Quilometragem</label>
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
                    name="description" 
                    id="description_ann" 
                    className="title_ann"
                    placeholder="Digitar descrição"
                    {...register("description")}/>
                </div>
                <div className="type_ann">
                    <p className="ttl_type">
                        Tipo de veículo
                    </p>
                    <div className="btn_type">
                        <Button type="Button"
                        onClick={()=> setTypeVeicle("Carro")} 
                        background={"var(--color-brand-1)"}
                        color="#FFFFFF"
                        border={"var(--color-brand-1)"}>Carro</Button>
                        <Button type="Button"
                        onClick={()=> setTypeVeicle("Moto")} 
                        background="#FFFFFF"
                        color={"var(--color-grey-0)"}
                        border={"var(--color-grey-0)"}>Moto</Button>
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
                    placeholder="https://image.com"
                    {...register("image1")}/>
                </div>
                <div className="inputs">
                    <label htmlFor="img_galery" className="label">{"2"}° Imagem da galeria</label>
                    <input 
                    type="text" 
                    name="img_galery" 
                    id="img_galery_ann" 
                    className="img_galery_ann"
                    placeholder="https://image.com"
                    {...register("image2")}/>
                </div>
                <span className="add_camp_img">
                    Adicionar campo para a imagem da galeria
                </span>
                <div className="btn_type">
                    <Button type="Button"
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