import { useState } from "react";
const LiftingStateUp = () => {
    const [inputValue, setInputValue] = useState("");
  return (
    <>
      <InputComponent inputValue={inputValue} setInputValue={setInputValue} />
      <DisplayComponent inputValue={inputValue}/>
    </>
  );
};

export default LiftingStateUp;

const InputComponent = ({inputValue, setInputValue}) => {
  
  return (
    <>
      <input
        type="text"
        placeholder="Enter your name"
        value={inputValue}
        onChange={(event) => setInputValue(event.target.value)}
      ></input>
    </>
  );
};

const DisplayComponent = ({inputValue}) => {
  return (
    <>
      <p>The current input value : {inputValue} </p>
    </>
  );
};
