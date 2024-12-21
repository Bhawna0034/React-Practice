import { CiShoppingCart } from "react-icons/ci";

export default function button() {
  // function handleClickButton(){
  //     alert('You have added items in your cart');
  // }

  const handleClickButton = (event) => {
    console.log(event);
    console.log(event.target);
    console.log(event.type);
    alert("You have added items in your cart");
  };

  const handleWelcomeUser = (user) => {
    alert(`Hey ${user}, Welcome to React World!`);
  }
  return (
    <>
      <button
        onClick={handleClickButton}
        className="border bg-green-500 text-xl px-8  text-white">Add to Cart
      </button>
      <br />

      {/* Fat Arrow Function */}
      <button
        onClick={(event) => handleClickButton(event)}
        className="border bg-teal-800 text-xl  mt-4 text-white" >Buy now
      </button>
      <br />

      {/* Inline Event Handlers */}
      <button
        onClick={(event) => console.log(event)}
        className="border bg-pink-300 mt-4  text-white text-xl"
      >
    
        Inline Arrow Function
      </button>
      <br />

      {/* Function Component with Inline Arrow Function */}
      <button
        onClick={() => alert("Inline Arrow Function")}
        className="border  bg-purple-300 mt-4 text-white text-xl"
      >Inline Arrow Function 2
      </button>

        <br/>
      {/* Passing Arguments to Event Handlers */}
      <button onClick={() => handleWelcomeUser("Bhawna")}
        className="border bg-teal-500 mt-4">Login</button>
    </>
  );
}
