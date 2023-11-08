/*useState- used to track the state(data or properties that need to be tracked in the applicaion) of a functional component
-accepts 2 values :initial state, function to update the state
-we can create multiple state hooks to track individual values
*/
import react, { useState } from "react";
function App(){
    const[count,setCount]=useState(0)
    const [theme,setTheme]=useState("blue")
    
    function decrementCount(){
        setCount(prevCount=>prevCount-1)
        setTheme("red")
    }
    function incrementCount(){
        setCount(prevCount=>prevCount+1)
        setTheme("green")
    }
    return (
        <>
        <button onClick={decrementCount}>-</button>
        <span>{count}</span>
        <span>{theme}</span>
        <button onClick={incrementCount}>+</button>
        </>
    )
}
export default App;