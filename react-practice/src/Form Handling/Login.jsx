import React,{useState} from "react";
const Login=()=>{
    let [user,setUser]=useState({email:"",password:""})
    let emailHandler=(event)=>{
        setUser({...user,[event.target.name]: event.target.value});
    
    }
    let passwordHandler=(event)=>{
        setUser({...user,[event.target.name]: event.target.value});
        };
    let submitHandler=(event)=>{
        alert("You are logged in")
        event.preventDefault()
        console.log(user)
    }
    return(
        <>
        <h3>Login Component</h3>
        <pre>{JSON.stringify(user)}</pre>
        <form onSubmit={submitHandler}>
            <label>Email</label>
            <input type="email" name="email" onChange={emailHandler}/><br/>

            <label>Password</label>
            <input type="password" name="password" onChange={passwordHandler}/><br/>

            <input type="submit" value="Login"/>
        </form>
        </>
    )
}
export default Login