const EventProps = () => {
    return(
        <>
        <Toolbar 
        onPlayMovie = {() => alert('Playing')}
        onUploadingImage = {() => alert('Uploading')} />
        </>
    )

}
export default EventProps;

const Toolbar = ({onPlayMovie, onUploadingImage}) => {
    return(
        <>
        <Button onClick = {onPlayMovie}> Play Button </Button>
        <Button onClick = {onUploadingImage} >Upload Image</Button>
        </>
    )
}

const Button = ({onClick, children}) => {
    return (
        <>
        <button onClick={onClick}> {children}</button>
        </>
    )
}

// const Toolbar = () => {
//     return(
//         <>
//         <PlayButton movieName="Gunjan Saxena"/>
//         <UploadingButton />
//         </>
//     )
// }
// export default Toolbar;

// const PlayButton = ({movieName}) => {

//     const handlePlayButton = () => {
//         alert(`Playing ${movieName}`);
//     }
//     return(
//         <>
//         <button onClick={handlePlayButton} className="bg-pink-400 text-white">Play</button>
//         </>
//     )
// }

// const UploadingButton = () => {
//     const handleUploadingButton = () => {
//         alert('Uploading');
//     }
//     return(
//         <>
//         <button onClick={handleUploadingButton} className="bg-sky-600 text-white">Upload</button>
//         </>
//     )
// }
//  const EventProps = () => {

//     const handleWelcomeUser = (user) => {
//         alert(`Welcome, ${user}! `)
//     }
//     const handleHover = () => {
//         alert(`You are hovering me!`)
//     }
//   return (
//     <>
//       <WelcomeUser
//         onClick={() => handleWelcomeUser("Bhawna")}
//         onMouseEnter={() => handleHover()}
//       />
//     </>
//   );
// }
// export default EventProps;

// const WelcomeUser = (props) => {

//     const handleGreetings = () => {
//         console.log("Hello World!");
//         props.onClick();
//     }
//     return(
//         <>
//         <button onClick={props.onClick} className="bg-purple-300">Click Me</button>
//         <button onMouseEnter={props.onMouseEnter} className="bg-green-300">Hover </button>
//         <button onClick={handleGreetings} className="bg-pink-400">Greetings</button>
//         </>
//     )
// }
