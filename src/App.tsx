import React, { useEffect, useState } from 'react';

import './App.css';
import {db} from './firebase/cofig'

import { useDispatch, useSelector } from 'react-redux';
import { actioCreator, State } from './state'
import { bindActionCreators } from 'redux';
import ItemProduct from './components/itemProduct'
import { collection, doc, getDocs } from 'firebase/firestore';
import { ICollection } from './state/actions';




function App() {
    const data: ICollection[]  = []
    const dispatch = useDispatch();
    const { setAllProduct } = bindActionCreators(actioCreator, dispatch)
    const dataCollectionRef = collection(db, 'products')
    useEffect(()=>{
        
        const getData = async () =>{
          
            const querySnapshot= await getDocs(dataCollectionRef)
            querySnapshot.forEach((doc)=>{
                data.push({id :`${doc.id}`,...doc.data()});
                console.log(data)
            })
            
            dispatch(setAllProduct(data))


        }
        
         getData()
    
    },[])


    const products = useSelector((state: State) => state.products)
    return (
        <div className="App">
            <h1>XE MOTOR</h1>

            <table>
                <tr>
                    <th>Tên: </th>
                    <th>Giá:</th>
                    <th>image</th>
                </tr>
                <ItemProduct {...products}/>
            </table>
        </div>
    );
}

export default App;
