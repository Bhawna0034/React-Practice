 const EventProps = () => {

    const handleWelcomeUser = (user) => {
        alert(`Welcome, ${user}! `)
    }
    const handleHover = () => {
        alert(`You are hovering me!`)
    }
  return (
    <>
      <WelcomeUser
        onClick={() => handleWelcomeUser("Bhawna")}
        onMouseEnter={() => handleHover()}
      />
    </>
  );
}
export default EventProps;

const WelcomeUser = (props) => {

    const handleGreetings = () => {
        console.log("Hello World!");
        props.onClick();
    }
    return(
        <>
        <button onClick={props.onClick} className="bg-purple-300">Click Me</button>
        <button onMouseEnter={props.onMouseEnter} className="bg-green-300">Hover </button>
        <button onClick={handleGreetings} className="bg-pink-400">Greetings</button>
        </>
    )
}
