import { Dispatch } from "redux"
import { ActtionType } from "../constants/ActionsTypes"
import { Action, IProduct  } from "../actions"

export const setAllProduct = (products: IProduct[]) =>{
    return (dispatch :Dispatch<Action>) => {
        dispatch({
            type :ActtionType.ALL_PRODUCTS,
            products: products
        })
      
    }
}