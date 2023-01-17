import { createContext, useState } from "react";
import { Data } from "../components/FlashDeals/Data";
import { Sdata } from "../components/shops/Sdata";

type UserProviderType = {
    cartItem: Array<any>,
    trackOrder: Boolean,
    setTrackOrder: (newState: Boolean) => void,
    setCartItem: (newState: Array<any>) => void,
    productItems: Array<any>,
    shopItems: Array<any>,
    addToCard: (poduct: any) => void,
    decreaseQty: (poduct: any) => void
}

interface UserProviderProps{
    children: JSX.Element|JSX.Element[],
}

const initialValue = {
    cartItem: [],
    trackOrder: false,
    setTrackOrder:  () => {},
    setCartItem:  () => {},
    productItems: Data.productItems,
    shopItems: Sdata.shopItems,
    addToCard: () => {},
    decreaseQty: () => {}
}

export const UserContext = createContext<UserProviderType>(initialValue);

export function UserProvider({children}: UserProviderProps){
    const productItems = initialValue.productItems;
    const shopItems = initialValue.shopItems;
    const [trackOrder, setTrackOrder] = useState<any>(initialValue.trackOrder);
    const [cartItem, setCartItem] = useState<any>(initialValue.cartItem);

    function addToCard(product: any) {
        const productExit = cartItem.find((item:any) => item.id === product.id)

        if(productExit){
            setCartItem(cartItem.map((item:any) =>
                item.id === product.id ? {...productExit, qty: productExit.qty + 1} : item 
            ))
        }else{
            setCartItem([...cartItem, {...product, qty: 1}])
        }
    }

    function decreaseQty(product: any){
        const productExit = cartItem.find((item:any) => item.id === product.id)
        
        if(productExit.qty === 1){
            setCartItem(cartItem.filter((item:any) => item.id !== product.id))
        }else{
            setCartItem(cartItem.map((item:any) =>
                item.id === product.id ? {...productExit, qty: productExit.qty - 1} : item )
            )
        }
    }

    return (
        <UserContext.Provider
        value={{cartItem, setCartItem, productItems, addToCard, decreaseQty, shopItems, trackOrder, setTrackOrder}}
        >
            {children}
        </UserContext.Provider>
    )
}