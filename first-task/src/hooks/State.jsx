import {useState} from "react"
const State = () => {
//   let value = 0;
//   const handleIncrementButton = () => {
//     value++;
//     console.log(value);
//   }

let [count, setCount] = useState(0);

const handleIncrementButton = () => {
    setCount(() => count++);
}
    return(
        <>
        <h2 className="text-5xl font-bold">{count}</h2>
        <button onClick={handleIncrementButton} className="bg-teal-600 text-white mt-4 text-2xl">Increment</button>
        </>
    )
}

export default State;
