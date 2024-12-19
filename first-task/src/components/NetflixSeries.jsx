import seriesData from "../api/series.json";
import { SeriesCard } from "./SeriesCard";
import './Series.css';
import './NetflixSeries.css'

function NetflixSeries() {
  return (
    <>
    <h1>List of Best Netflix Series</h1>
      <ul>
        {seriesData.map((currentElement) => {
           return <SeriesCard key={currentElement.id} data = {currentElement} />;
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
