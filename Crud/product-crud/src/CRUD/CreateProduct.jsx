import React, { useState } from "react";
import {useNavigate} from "react-router-dom"
import Axios from "axios";
const CreateProduct=()=>{
    let navigate=useNavigate()
    let [submitted,setSubmitted]=useState(false)
    let [product,setProduct]=useState({name:"",price:"",img:"",qty:"",info:""})

    let updateHandler=(event)=>{
        setProduct({
            ...product,
            [event.target.name]:event.target.value
        })
    }
    let updateImage = (event)=>{
        let imageFile = event.target.files[0]
        let reader=new FileReader();
        reader.readAsDataURL(imageFile);
        reader.addEventListener("load",()=>{
          if(reader.result){
              
              setProduct({
                ...product, image:reader.result
              })
          }
          else{
            console.log("Unable to convert")
          }
      
        })
    }
    let submitHandler=(event)=>{
        event.preventDefault()
        Axios.post('http://127.0.0.1:8080/api/products',product)
        .then(()=>{
            alert("product created Successfully..")
            setSubmitted(true)
           })
           .catch(()=>{
            //display error
            alert("error")
           })
    }
    return(
        <>
        <div className="container">
            <pre>{JSON.stringify(product)}</pre>
            {
                submitted?navigate("/admin"):<>
                <div className="row">
                    <div className="col-md-">
                        <div className="card">
                            <div className="card-header"><h3>New Product</h3></div>
                            <div className="card-body">
                                <form onSubmit={submitHandler}>
                                    <div className="form-group">
                                        <input className="form-control" placeholder="Product Name" type="text" name="name" onChange={updateHandler} />
                                    </div>
                                    <div className="form-group">
                                        <input className="form-control" placeholder="Product Price" type="number" name="price" onChange={updateHandler} />
                                    </div>
                                    <div className="form-group">
                                        <input className="form-control" placeholder="Image" type="file" name="img" onChange={updateImage} />
                                    </div>
                                    <div className="form-group">
                                        <input className="form-control" placeholder="Qty" type="number" name="qty" onChange={updateHandler} />
                                    </div>
                                    <div className="form-group">
                                        <input className="form-control" placeholder="Product Info" type="text" name="info" onChange={updateHandler} />
                                    </div>
                                    <input type='submit' value="upload" className='btn btn-primary'/> 
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                </>
            }
        </div>
        </>
    )
}
export default CreateProduct