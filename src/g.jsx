//  export default class Greeting {
//  g1() {
        
    
//     const animals = ["Lion", "Cow", "Snake", "Lizard"];

//   return (
//     <div>
//       <h1>Animals: </h1>
//       <ul>
//         {animals.map((animal) => {
//           return <li key={animal}>{animal}</li>;
//         })}
//       </ul>
//     </div>
//   );
//      }
//   }
  
  import  { useState } from "react";

  export default function Clock() {
    const [counter, setCounter] = useState(0);
  
    setTimeout(() => {
      setCounter(count => count + 1)
    }, 1000);
  
    return (
      <p>{counter} seconds have passed.</p>
    );
  }