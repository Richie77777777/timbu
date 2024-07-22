import { createContext, useContext, useReducer } from "react"
import prodycts from '../product.json'
import { cartReducer } from "./CartReducer"

export const ShoppingContext = createContext()


export const ShoppingProvider = ({children})=>{

const initialState = {
    products: prodycts,
    cart: [],
    wishlist: [],
    // compare: [],
    // filter: {
    //     search: "",
    //     category: "",
    //     rating: 0,
    //     price: [0, 1000],
    // },
    // sort: "",
    // view: "",
    // loading: true,
    // error: false,

}





 const [produce, dispatch] = useReducer(cartReducer, initialState)

 return(
    <ShoppingContext.Provider value={{produce, dispatch}}>
        {children}
    </ShoppingContext.Provider>
 )
}

export const CartState = ()=> useContext(ShoppingContext)