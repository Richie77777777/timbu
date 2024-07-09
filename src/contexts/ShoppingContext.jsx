import { createContext, useReducer } from "react"


export const ShoppingContext = createContext()


export const ShoppingProvider = ({children})=>{

const initialState = 0

const reducer =()=>{

}




 const [cart, dispatch] = useReducer(reducer, initialState)

 return(
    <ShoppingContext.Provider value={{cart, dispatch}}>
        {children}
    </ShoppingContext.Provider>
 )
}