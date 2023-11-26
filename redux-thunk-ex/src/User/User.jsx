import React,{useEffect, useState} from "react";
import { user_Action } from "../redux/User/user.action";
import { useDispatch,useSelector } from "react-redux";
const User=()=>{
    let dispatch=useDispatch()
    let users=useSelector((state)=>{
        return state.users
    })
    let [user,setUser]=useState([])
    useEffect(()=>{
        dispatch(user_Action())
    },[]);
    return(
        <div>
            <h2>User Component</h2>
            <pre>{JSON.stringify(users)}</pre>
        </div>
    )
}
export default User