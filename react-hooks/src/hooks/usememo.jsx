import React,{useMemo,useState} from "react";
const Factorial=()=>{
    let [qty,setQty]=useState(1)
    let [num,setNum]=useState(5)
    let result=useMemo(()=>{return fact(num)},[num])
    return (
        <>
        <h2>useMemo Hook Example</h2>
        <h3>Qty:{qty}</h3>
        <h3>Factorial of {num}:{result}</h3>
        <button onClick={()=>{setQty(qty+1)}}>Qty</button>
        <button onClick={()=>{setNum(num+1)}}>Factorial</button>
        </>
    )

}
let fact=(num)=>{
     let result=1;
    for(let i=1;i<=num;i++){
        result*=i;
    }
    return result
}
export default Factorial