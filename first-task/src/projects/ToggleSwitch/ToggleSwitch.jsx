import { useEffect, useState } from "react";
const ToggleSwitch = () => {
  const [isON, setIsON] = useState(false);
  const handleToggleSwitch = () => {
    setIsON(!isON);
    document.body.style.backgroundColor = isON ? "black" : "white";
  };

 
  return (
    <>
      <div
        id="toggle-switch"
        className={`border border-gray-200 px-6 py-2 rounded-full ml-[1000px] mb-[500px] ${
          isON ? "bg-black" : "bg-white"
        }`}
        onClick={handleToggleSwitch}
      >
        <div
          id="switch"
          className={`flex items-center justify-center h-8 w-8 rounded-full mr-12 ${
            isON ? "bg-blue-600 translate-x-12" : "bg-blue-600 translate-x-0"
          }`}
        ></div>
      </div>
    </>
  );
};

export default ToggleSwitch;
