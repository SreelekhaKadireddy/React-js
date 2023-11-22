import React from "react";
import { useDispatch,useSelector } from "react-redux";
import {incrAction,decAction} from '../redux/Product/product.action';
const Product=()=>{
    let product=useSelector((state)=>{
        return state;
    })
    let dispatch=useDispatch()
    let incrHandler=()=>{
        dispatch(incrAction())
    }
    let decrHandler=()=>{
        dispatch(decAction())
    }
    return(
        <div>
            <h3>product Compoent</h3>
            <pre>{JSON.stringify(product)}</pre>
            <button onClick={decrHandler}>-</button>
            {product.qty}
            <button onClick={incrHandler}>+</button>
        </div>
    )
}
export default Product