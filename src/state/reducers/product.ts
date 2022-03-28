import { Action } from "../actions";
import { ActtionType } from "../constants/ActionsTypes";

var initialState = {
    products :[],
} 


const productReducer = (state = initialState , action: Action) =>{
    switch(action.type) {
        case ActtionType.ALL_PRODUCTS:   
            return {...state , products : action.products};
        default:
            return state;
    }
} 

export default productReducer;  