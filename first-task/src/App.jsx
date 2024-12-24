import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import NetflixSeries from './components/NetflixSeries'
import Flags from './components/Flags'
import EventHandling from './components/EventHandling'
import EventProps from './components/EventProps';
import EventPropagation from './components/EventPropagation';
import {State} from './hooks/State';
// import {State, SiblingComponent} from './hooks/State';
import DerivedState  from './hooks/DerivedState'
import LiftingStateUp  from './hooks/LiftingStateUp'
import ToggleSwitch  from './projects/ToggleSwitch/ToggleSwitch';

//Default Import
// import StrangerThings from './components/NetflixSeries' 

// Named Import
// import { StrangerThings, MoneyHeist } from './components/NetflixSeries'



export default function App(){
  return (
    <>
    <ToggleSwitch />
    {/* <LiftingStateUp /> */}
    {/* <DerivedState  /> */}
    {/* <State /> */}
    {/* <SiblingComponent /> */}
    {/* <EventPropagation /> */}
    {/* <EventProps /> */}
    {/* <EventHandling/> */}
    {/* <Flags/> */}
      {/* <NetflixSeries/> */}
      {/* <StrangerThings/>
      <MoneyHeist/> */}
    </>
  )
}
// export default function App(){
//   return(
//     <>
//     <h1>Welcome to my app</h1>
//     <MyButton />
//     </>
//   )
// }

// const MyButton = () => {
//   return(
//     <button>Click Me!</button>
//   )
// }

// export default function App() {
//   return (
//   <> 
//   <NetflixSeries/>
//   <NetflixSeries/>
//   </>
//   )
 
// }

// const NetflixSeries = () => {
//   const name = "STRANGER THINGS";
//   const rating = 3.568;
//   const summary = "In a small town where everyone knows everyone, a peculiar incident starts a chain of events that leads to disappereance of child - which begins to tear at the fabric of an otherwise peaceful community...";

//   const returnGenre = () => {
//     const genre = "RomCom";
//     return genre;
//   }

//   const age = 22;
//   // let canWatch = "NOT AVAILABLE";
//   // if(age>=18){
//   //   canWatch = "WATCH NOW";}

//   function canWatch(){
//     if(age>=18) return "WATCH NOW";
//     else return "NOT AVAILABLE";
//   }

//   return (
//     <> 
//     <div>
//       <img src='StrangerThings.jpg' alt='StrangerThings' />
//     </div>
//     <h2>Name: {name}</h2>
//     <h3>Ratings: {rating}</h3>
//     <p>Summary: {summary}</p>
//     <p>Genre: {returnGenre()}</p>
//     {/* <button>{age>=18 ? "WATCH NOW" : "NOT AVAILABLE" }</button> */}
//     {/* <button>{canWatch}</button> */}
//     <button>{canWatch()}</button>
//     </>
//     )
// }


