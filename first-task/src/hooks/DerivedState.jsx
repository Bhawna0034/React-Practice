import {useState} from "react";
// Showing list with the help of useState()

const DerivedState = () => {
    const[users, setUsers] = useState([
        {name: "Alice", age:25},
        {name: "Bob", age: 30},
        {name: "Charlie", age: 35},
        {name: "Angles", age: 45}
    ]);

    // Derived State: count of Users
    const usersCount = users.length;

    // Derived State: average age of users
    const averageAge = users.reduce((accum, currentElement) => accum + currentElement.age, 0)/usersCount;
    return(
        <>
        <h2 className="text-2xl font-semibold">User's list</h2>
        <ul>
            {users.map((currentElement, index) => {
                return(
                    <li key={index} className="text-xl">{currentElement.name} - {currentElement.age} years old</li>
                )
            })}
        </ul>
        <p className="text-xl mt-2">Total Users: {usersCount}</p>
        <p className="text-xl mt-2">Average Age: {averageAge}</p>
    </> 
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

