import { CiShoppingCart } from "react-icons/ci";

export default function button(){
    function handleClickButton(){
        alert('You have added items in your cart');
    }
    return(
        <>
        <button onClick={handleClickButton} className="flex gap-2 items-center justify-between border bg-green-500 text-xl text-white">
        <CiShoppingCart className="text-2xl" />
        Add to Cart</button>
        </>
    )
}