import React from 'react'
import { IProduct } from '../state/actions';


interface ItemProps {
    products: IProduct[];
}


const ItemProduct: React.FC<ItemProps> = (props) => {
    return (
        <>{
            props.products.map((product, key) => {
                return (
                    <tr key={key}>
                        <td>{product.title}</td>
                        <td>{product.price}</td>
                        <td>
                            <img src={product.image} />
                        </td>
                    </tr>)
            })
        }</>
    )
}

export default ItemProduct