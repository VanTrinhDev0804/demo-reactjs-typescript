import { type } from "os";
import { ActtionType } from "../constants/ActionsTypes";

export interface IProduct{
    id?: string,
    title?: string,
    price?: string,
    image?: string
}
export interface All_Products {
    type: ActtionType.ALL_PRODUCTS
    products ? :IProduct[];
} 
export interface ICollection {
  id?: string
  title?: string
  price?: string
  image?: string

}

export type Action = All_Products