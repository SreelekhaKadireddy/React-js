import React, { useState } from "react";
import Axios from "axios";
const CreateProduct=()=>{
    let [product,setProduct]=useState({name:"",price:"",img:"",qty:"",info:""})

    let updateHandler=(event)=>{
        setProduct({
            ...product,
            [event.target.name]:event.target.value
        })
    }
    let updateImage=(event)=>{
        let imageFile=event.target.files[0]
        let reader=new FileReader()
        reader.readAsDataURL(imageFile)
        reader.addEventListener("load",()=>{
            if(reader.result){
                setProduct({...product,img:reader.result})
            }
            else{
                console.log("unable to convert")
            }
        })
    }
    let submitHandler=(event)=>{
        event.preventDefault()
        Axios.post('http://127.0.0.1:8080/api/products',product)
        .then(()=>{
            //get the result
           })
           .catch(()=>{
            //display error
           })
    }
    return(
        <>
        <h1>Product Form</h1>
        <pre>{JSON.stringify(product)}</pre>
        <form onSubmit={submitHandler}>
            Name:<input type="text" name="name" onChange={updateHandler}/><br/><br/>
            Price:<input type="number" name="price" onChange={updateHandler}/><br/><br/>
            Image:<input type="file" name="img" onChange={updateImage}/><br/><br/>
            QTY:<input type="number" name="qty" onChange={updateHandler}/><br/><br/>
            Info:<input type="text" name="info" onChange={updateHandler}/><br/><br/>
            <input type="submit" value="upload"/>
        </form>
        </>
    )
}
export default CreateProduct