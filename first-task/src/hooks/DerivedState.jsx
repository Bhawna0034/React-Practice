import {useState} from "react";
// Showing list with the help of useState()

const DerivedState = () => {
    const[users, setUsers] = useState([
        {name: "Alice", age:25},
        {name: "Bob", age: 30},
        {name: "Charlie", age: 35},
        {name: "Angles", age: 45}
    ]);
    return(
        <>
        <h2 className="text-2xl font-semibold">User's list</h2>
        <ul>
            {users.map((currentElement, index) => {
                return(
                    <li key={index}>{currentElement.name} - {currentElement.age} years old</li>
                )
            })}
            </ul></>
    )
}
export default DerivedState;

// Without using useState()
// const users = [
//     {name: "Alice", age: 25},
//     {name: "Bob", age: 30},
//     {name: "Charlie", age: 35},
//     {name: "Angles", age: 45}
// ];

