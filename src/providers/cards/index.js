import { createContext, useState } from "react";

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


const CardsContext = createContext([]);

function CardsProvider ({children}){
    const [cars, setCars] = useState(baseCars);

    return(
        <CardsContext.Provider value={{cars, setCars}}> 
            {children}
        </CardsContext.Provider>
    )
}

export { CardsContext, CardsProvider }