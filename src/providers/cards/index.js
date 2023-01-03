import axios from "axios";
import { createContext, useEffect, useState } from "react";

const baseCars = [
    {
        id: 1,
        type: "Venda",
        tytle: "New fiesta 1.0 2016",
        year: "2016",
        mileage: 150000,
        price: 26000,
        descryption: "Carro bem conservado aparencia de novo.",
        category: "Carro",
        image: "https://image.webmotors.com.br/_fotos/AnuncioUsados/gigante/2022/202212/20221219/ford-fiesta-1.6-se-hatch-16v-flex-4p-manual-wmimagem12453889344.jpg?s=fill&w=249&h=186&q=70",
    },
    {
        id: 2,
        type: "Venda",
        tytle: "New fiesta 1.0 2016",
        year: "2016",
        mileage: 150000,
        price: 26000,
        descryption: "Carro bem conservado aparencia de novo.",
        category: "Carro",
        image: "https://image.webmotors.com.br/_fotos/AnuncioUsados/gigante/2022/202212/20221219/ford-fiesta-1.6-se-hatch-16v-flex-4p-manual-wmimagem12453889344.jpg?s=fill&w=249&h=186&q=70",
    }
]
const baseMotocycles = [
    {
        id: 1,
        type: "Venda",
        tytle: "CB 500 X 500X",
        year: "2018",
        mileage: 41300,
        price: 37700,
        descryption: "Moto estado nova",
        category: "Moto",
        image: "https://http2.mlstatic.com/D_NQ_NP_627817-MLB52833618250_122022-O.webp",
    },
    {
        id: 2,
        type: "Venda",
        tytle: "CB 500 X 500X",
        year: "2018",
        mileage: 41300,
        price: 37700,
        descryption: "Moto estado nova",
        category: "Moto",
        image: "https://http2.mlstatic.com/D_NQ_NP_627817-MLB52833618250_122022-O.webp",
    },
]

const CardsContext = createContext([]);

function CardsProvider ({children}){
    const [cars, setCars] = useState([]);
    const [motocycles, setMotocycles] = useState([]);

    useEffect(()=>{
        axios.get("http://localhost:3001/products")
        .then((resp)=>{
            const a = []
            const b = []
            if(!!resp.data[0]){
                resp.data.forEach((veicle)=> {
                    if(veicle.isCar === true){
                        a.push(veicle)
                    }else if(veicle.isCar === false){
                        b.push(veicle)
                    }
  
                })
            setCars(a)
            setMotocycles(b)
            }
        })
        .catch((err)=> console.log(err))       
    },[])

    return(
        <CardsContext.Provider value={{cars, setCars, motocycles, setMotocycles}}> 
            {children}
        </CardsContext.Provider>
    )
}

export { CardsContext, CardsProvider }