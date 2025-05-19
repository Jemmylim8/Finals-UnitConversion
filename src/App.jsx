import { use } from "react";
import { useState } from "react";

export default function App() {
  const [selectedValue, setSelectedValue] = useState("");
  const [input, setInput] = useState();
  const [showHeights, setShowHeights] = useState(true);
  const [showWeights, setShowWeights] = useState(true);
  const [choice, setChoice] = useState("");

  //HEIGHT
  const [feet, setFeet] = useState();
  const [cm,setCm] = useState();
  const [meter,setMeter] = useState();
  const [inches,setInches] = useState();
  //WEIGHT
  const [pounds,setPounds]=useState();
  const [kilos,setKilos]=useState();
  const [grams,setGrams]=useState();
  const [ounce,setOunce]=useState();
  function handleTypeChange(event) {
    setSelectedValue(event.target.value);
    if (selectedValue == "Height") {
      setShowWeights(false);
      setShowHeights(true);
    }
    if (selectedValue == "Weight") {
      setShowWeights(true);
      setShowHeights(false);
    }
  }
 function updateValues()=>{
    if (!input) return;
    
    if (selectedValue === "Height") {
      if (choice === "feet") {
        setMeter(input * 0.3048);
        setCm(input * 30.48);
        setInches(input * 12);
      } else if (choice === "cm") {
        setMeter(input / 100);
        setFeet(input / 30.48);
        setInches(input / 2.54);
      }
    }
   if (selectedValue === "Weight") {
      if (choice === "Pounds") {
        setKilos(input * 0.453592);
        setGrams(input * 453.592);
        setOunce(input * 16);
      } else if (choice === "Kilos") {
        setPounds(input * 2.20462);
        setGrams(input * 1000);
        setOunce(input * 35.274);
      }
    }
  }
  }

  function handleWeightChange(event) {
    setChoice(event.target.value);
    
  }

  function handleHeightChange(event) {
    setChoice(event.target.value);
  }

  

  return (
    <>
      <h1>UNIT CONVERSION</h1>
      <select id="dropdown" onChange={handleTypeChange}>
        <option value="Height">Height</option>
        <option value="Weight">Weight</option>
      </select>

      <select id="dropdownWeight" onChange={handleWeightChange} hidden={showWeights}>
        <option value="Pounds">Lbs</option>
        <option value="Kilos">Kilos</option>
        <option value="Grams">Grams</option>
        <option value="Ounces">Ounces</option>
      </select>

      <select id="dropdownHeight" onChange={handleHeightChange} hidden={showHeights}>
        <option value="feet">Feet</option>
        <option value="cm">Cm</option>
        <option value="meters">Meters</option>
        <option value="inches">Inches</option>
      </select>

      <button onClick={() => alert(`You selected: ${selectedValue}`)}>Submit</button>
      <p>You selected: {selectedValue} in {choice}</p>
      <input placeholder="Input Number to Convert" onChange={(e) =>{ setInput(e.target.value);updateValues();}}></input>
      <p>{input} {choice}</p>

      <div hidden ={showHeights}>
        <p>{input} {choice} = feet </p>
        <p>{input} {choice} = {cm}cm </p>
        <p>{input} {choice} = {meter}meters</p>
        <p>{input} {choice} = {inches}inches</p>
      </div>
      <div hidden ={showWeights}>
        <p>{input} {choice} = </p>
        <p>{input} {choice} = </p>
        <p>{input} {choice} = </p>
        <p>{input} {choice} = </p>
      </div>
    </>
  );
}



// import { useState } from "react";

// export default function App() {
//   const [selectedValue, setSelectedValue] = useState("");
//   const [input ,setInput] = useState("");
//   const [showHeights,setShowHeights] =useState(true);
//   const [showWeights,setShowWeights] =useState(true);
//   const [choice ,setChoice] = useState("");
  
//   function handleTypeChange(event) {
//     setSelectedValue(event.target.value);
//     if(selectedValue=="Height"){
//         setShowWeights(false);
//         setShowHeights(true);
//     }
//     if(selectedValue=="Weight"){
//         setShowWeights(true);
//         setShowHeights(false);
//     }
//   }
//   function handleWeightChange(event) {
//     setChoice(event.target.value);
//   }
//   function handleHeightChange(event) {
//     setChoice(event.target.value);
//   }
//   const showChoices = ()=>{
    
//   }

//   return (
//     <>
//       <h1>UNIT CONVERSION</h1>
//       <select id="dropdown" onChange={handleTypeChange}>
//         <option value="Height">Height</option>
//         <option value="Weight">Weight</option>
//       </select>
//      <select id="dropdownHeight" onChange={handleWeightChange} hidden={showWeights}>
//         <option value="Pounds">Lbs</option>
//         <option value="Kilos">Kilos</option>
//      </select>
//      <select id="dropdownHeight" onChange={handleHeightChange} hidden={showHeights}>
//         <option value="feet">in</option>
//         <option value="cm">Cm</option>
//      </select>
//       <button onClick={() => alert(`You selected: ${selectedValue}`)}>Submit</button>
//       <p>You selected: {selectedValue} in {choice}</p>
//       <input placeholder="Input Number to Convert" 
//       onChange={(e)=> {setInput(e.target.value);}}></input>
//       <p>{input} {choice}</p>
//     </>
//   );
// }