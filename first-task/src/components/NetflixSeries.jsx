import seriesData from "../api/series.json";

function NetflixSeries() {
  return (
    <>
      <ul>
        {seriesData.map((currentElement) => {
             return (<li>
             <div>
               <img src={currentElement.image_url} alt="StrangerThings" width="50%"/>
             </div>
             <h2>Title: {currentElement.title}</h2>
             <h3>Rating: {currentElement.rating}</h3>
             <p>Summary: {currentElement.description}</p>
             <h3>Cast: {currentElement.cast}</h3>
             <h3>Genre: {currentElement.genre}</h3>
             <a href={currentElement.watch_url} target="_blank">
               <button>Watch Now</button>
             </a>
           </li>)
        })}
       
      </ul>
    </>
  );
}
export default NetflixSeries;
// function StrangerThings() {
//     const title = "STRANGER THINGS";
//     const rating = 8.7;
//     const summary = "In a small town where everyone knows everyone, a peculiar incident starts a chain of events that leads to disappereance of child - which begins to tear at the fabric of an otherwise peaceful community...";

//     let age = 22;
//     function canWatch() {
//         if (age >= 18)
//             return "WATCH NOW";

//         else
//             return "NOT AVAILABLE";
//     }

//     return (
//         <>
//             <div>
//                 <img
//                     src=" StrangerThings.jpg"
//                     alt="Stranger Things" />
//             </div>
//             <h2>Title: {title} </h2>
//             <h3>Rating: {rating}</h3>
//             <p>Summary: {summary}</p>
//             <button>{canWatch()}</button>
//         </>
//     );
// }

// const MoneyHeist = () => {
//     const title = "MONEY HEIST";
//     const rating = 8.3;
//     const summary = "Eight thieves take hostages and lock themselves in the Royal Mint of Spain as a criminal mastermind manipulates the police to carry out his plan.";

//     let age = 22;
//     function canWatch() {
//         if (age >= 18)
//             return "WATCH NOW";

//         else
//             return "NOT AVAILABLE";
//     }

//     return (
//         <>
//             <div>
//                 <img
//                   src= "MoneyHeist.jpg"
//                   alt= "Money Heist"
//                 />
//             </div>
//             <h2>Title: {title}</h2>
//             <h3>Rating: {rating}</h3>
//             <p>Summary: {summary}</p>
//             <button>{canWatch()}</button>
//         </>
//     )

// }

// Default import and export
// export default StrangerThings;

// Named import and export
// export {StrangerThings, MoneyHeist};