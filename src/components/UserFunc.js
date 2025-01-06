import { useEffect, useState } from "react";


const UserFunc = (props) => {
    const [count, setCount] = useState(0);
    const [count2] = useState(1);
//     useEffect(async () => {
//         const response = await fetch("https://api.github.com/users/snehlatasingh123");
//         const json = await response.json();
//         console.log("useEffectJSON",json);
//     }, []);
//     useEffect must not return anything besides a function, which is used for clean-up.

// It looks like you wrote useEffect(async () => ...) or returned a Promise. Instead, write the async function inside your effect and call it immediately:
    
    return (
        <div>
            <p>This is a functional component</p>
            <h2>{props.name}</h2>
            <h3>Count: {count}</h3>
            <button onClick={()=>{
                setCount(count+1)
            }} >Count Increment</button>
            <h3>Count2: {count2}</h3>
        </div>
    )
}
export default UserFunc;