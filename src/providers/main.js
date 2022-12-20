import { CardsProvider } from "./cards";


export function MainProvider({children}){
  return (
    <CardsProvider>{children}</CardsProvider>
  )
};