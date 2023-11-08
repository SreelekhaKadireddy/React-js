/*useEffect-

*/
import react, { useEffect , useState }  from "react";

export default function App(){
    const [resourceType,setresourceType]=useState("posts")
    return (
        <>
        <div>
            <button onClick={()=>setresourceType("posts")}>posts</button>
            <button onClick={()=>setresourceType("users")}>users</button>
            <button onClick={()=>{setresourceType("components")}}>components</button>
        </div>
        <h2>{resourceType}</h2>
        </>
        

    )
}