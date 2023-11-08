/*useEffect-useEffect runs on every render. 
That means that when the count changes, a render happens, which then triggers another effect.
*/
import react, { useEffect , useState }  from "react";



export default function Useeffect_ex(){
    const [count,setCount]=useState(0)
    const [calculation,setCalculation]=useState(0)
    
    useEffect(()=>{
        setCalculation(count*3);
        
    },[count])
   
   
    return (
        <>
       <div>count:{count}</div>
       <button onClick={() => setCount((c) => c + 1)}>+</button>
       <div>Calculation:{calculation}</div>
        </>
    )
}
