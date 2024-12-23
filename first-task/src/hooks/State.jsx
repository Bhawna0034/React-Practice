import {useState} from "react"
const State = () => {
//   let value = 0;
//   const handleIncrementButton = () => {
//     value++;
//     console.log(value);
//   }

let [count, setCount] = useState(0);
console.log("Parent Component");
const handleIncrementButton = () => {
   
    setCount(() => count++);
}
    return(
        <>
        <h2 className="text-5xl font-bold">{count}</h2>
        <button onClick={handleIncrementButton} className="bg-teal-600 text-white mt-4 text-2xl">Increment</button>
        {/* <ChildComponent /> */}
        </>
    )
}

// const ChildComponent = () => {
//     console.log(`Child Component`);
//     return(
//         <h1>Child Component</h1>
//     );
// }

// const SiblingComponent = () => {
//     console.log("Sibling Component");
//     return(
//         <h2 className="text-4xl font-bold mt-2">Sibling Component</h2>
//     )
// };

// export {State, SiblingComponent};
export {State};
