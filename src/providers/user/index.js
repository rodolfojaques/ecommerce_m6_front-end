import axios from "axios";
import { createContext, useEffect, useState } from "react";

const UserContext = createContext([]);

function UserProvider ({children}){
    const [carsUser, setCarsUser] = useState([]);
    const [motocyclesUser, setMotocyclesUser] = useState([]);
    const [user, setUser] = useState([]);

    const userLoged = JSON.parse(localStorage.getItem("User_local"))

    useEffect(()=>{
        axios.get("http://localhost:3001/products")
        .then((resp)=>{
            const a = []
            const b = []
            if(!!resp.data[0]){
                resp.data.forEach((veicle)=> {
                    if(veicle.isCar === true && veicle.userId === userLoged.userId){
                        a.push(veicle)
                    }else if(veicle.isCar === false && veicle.userId === userLoged.userId){
                        b.push(veicle)
                    }
  
                })
            setCarsUser(a)
            setMotocyclesUser(b)
            }
        })
        .catch((err)=> console.log(err))       
    },[])

    useEffect(()=>{
        if(!!userLoged.userId){
            axios.get("http://localhost:3001/users/", {
                headers: {
                  'Authorization': `token ${userLoged.token}`
                }
            })
            .then(resp => setUser(resp.data))
            .catch(err => err)
        }
    },[])

    return(
        <UserContext.Provider value={{ user, carsUser, setCarsUser, motocyclesUser, setMotocyclesUser}}> 
            {children}
        </UserContext.Provider>
    )
}

export { UserContext, UserProvider }