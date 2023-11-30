import React,{useRef} from "react";
const ReistrationForm=()=>{
    let btnRef=useRef(null)
    let tchandler=(event)=>{
        btnRef.current.disabled=!event.target.checked
    }
    return(
        <>
        <h2>useRef Hook Example</h2>
        <form>
            <label>Email Id:</label>
            <input type="text"/><br/><br/>
            <label>Phone no:</label>
            <input type="number"/><br/><br/>
            <label>Password:</label>
            <input type="password"/><br/><br/>
            <input type="checkbox" onClick={tchandler}/>Accept terms and Conditions
            <br/>
            <input type="submit" value="Register" disabled ref={btnRef}/>
        </form>
        </>
    )

}
export default ReistrationForm