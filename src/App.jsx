import { useState } from "react";

export default function App() {
  const [selectedValue, setSelectedValue] = useState("Height");
  const [input, setInput] = useState("");
  const [showHeights, setShowHeights] = useState(true);
  const [showWeights, setShowWeights] = useState(false);
  const [choice, setChoice] = useState("");

  // HEIGHT
  const [feet, setFeet] = useState();
  const [cm, setCm] = useState();
  const [meter, setMeter] = useState();
  const [inches, setInches] = useState();

  // WEIGHT
  const [pounds, setPounds] = useState();
  const [kilos, setKilos] = useState();
  const [grams, setGrams] = useState();
  const [ounce, setOunce] = useState();

  function handleTypeChange(event) {
    const value = event.target.value;
    setSelectedValue(value);
    if (value === "Height") {
      setShowWeights(false);
      setShowHeights(true);
    } else if (value === "Weight") {
      setShowWeights(true);
      setShowHeights(false);
    }
    setChoice(""); // Reset choice on change
    setInput("");
  }

  function updateValues(val) {
    const num = parseFloat(val);
    if (!num) return;

    if (selectedValue === "Height") {
      if (choice === "feet") {
        setMeter(num * 0.3048);
        setCm(num * 30.48);
        setInches(num * 12);
      } else if (choice === "cm") {
        setMeter(num / 100);
        setFeet(num / 30.48);
        setInches(num / 2.54);
      } else if (choice === "meters") {
        setFeet(num * 3.28084);
        setCm(num * 100);
        setInches(num * 39.3701);
      } else if (choice === "inches") {
        setFeet(num / 12);
        setCm(num * 2.54);
        setMeter(num * 0.0254);
      }
    }

    if (selectedValue === "Weight") {
      if (choice === "Pounds") {
        setKilos(num * 0.453592);
        setGrams(num * 453.592);
        setOunce(num * 16);
      } else if (choice === "Kilos") {
        setPounds(num * 2.20462);
        setGrams(num * 1000);
        setOunce(num * 35.274);
      } else if (choice === "Grams") {
        setPounds(num * 0.00220462);
        setKilos(num / 1000);
        setOunce(num * 0.035274);
      } else if (choice === "Ounces") {
        setPounds(num / 16);
        setKilos(num * 0.0283495);
        setGrams(num * 28.3495);
      }
    }
  }

  function handleWeightChange(event) {
    setChoice(event.target.value);
    updateValues(input);
  }

  function handleHeightChange(event) {
    setChoice(event.target.value);
    updateValues(input);
  }

  function handleInputChange(e) {
    const val = e.target.value;
    setInput(val);
    updateValues(val);
  }

  return (
    <>
      <h1>UNIT CONVERSION</h1>

      <select id="dropdown" onChange={handleTypeChange} value={selectedValue}>
        <option value="Height">Height</option>
        <option value="Weight">Weight</option>
      </select>

      {/* Weight dropdown */}
      <select
        id="dropdownWeight"
        onChange={handleWeightChange}
        hidden={!showWeights}
        value={choice}
      >
        <option value="">Select Unit</option>
        <option value="Pounds">Lbs</option>
        <option value="Kilos">Kilos</option>
        <option value="Grams">Grams</option>
        <option value="Ounces">Ounces</option>
      </select>

      {/* Height dropdown */}
      <select
        id="dropdownHeight"
        onChange={handleHeightChange}
        hidden={!showHeights}
        value={choice}
      >
        <option value="">Select Unit</option>
        <option value="feet">Feet</option>
        <option value="cm">Cm</option>
        <option value="meters">Meters</option>
        <option value="inches">Inches</option>
      </select>

      <input
        type="number"
        placeholder="Input Number to Convert"
        value={input}
        onChange={handleInputChange}
      />

      <p>You selected: {selectedValue} in {choice}</p>

      {/* Height result */}
      <div hidden={!showHeights || !choice}>
        <p hidden={choice==="feet"}>{input} {choice} = {feet?.toFixed(2)} feet</p>
        <p hidden={choice==="cm"}>{input} {choice} = {cm?.toFixed(2)} cm</p>
        <p hidden={choice==="meters"}>{input} {choice} = {meter?.toFixed(2)} meters</p>
        <p hidden={choice==="inches"}>{input} {choice} = {inches?.toFixed(2)} inches</p>
      </div>

      {/* Weight result */}
      <div hidden={!showWeights || !choice}>
        <p hidden={choice==="Pounds"}>{input} {choice} = {pounds?.toFixed(2)} pounds</p>
        <p hidden={choice==="Kilos"}>{input} {choice} = {kilos?.toFixed(2)} kilos</p>
        <p hidden={choice==="Grams"}>{input} {choice} = {grams?.toFixed(2)} grams</p>
        <p hidden={choice==="Ounces"}>{input} {choice} = {ounce?.toFixed(2)} ounces</p>
      </div>
    </>
  );
}


// import { use } from "react";
// import { useState } from "react";

// export default function App() {
//   const [selectedValue, setSelectedValue] = useState("");
//   const [input, setInput] = useState();
//   const [showHeights, setShowHeights] = useState(true);
//   const [showWeights, setShowWeights] = useState(true);
//   const [choice, setChoice] = useState("");

//   //HEIGHT
//   const [feet, setFeet] = useState();
//   const [cm,setCm] = useState();
//   const [meter,setMeter] = useState();
//   const [inches,setInches] = useState();
//   //WEIGHT
//   const [pounds,setPounds]=useState();
//   const [kilos,setKilos]=useState();
//   const [grams,setGrams]=useState();
//   const [ounce,setOunce]=useState();
//   function handleTypeChange(event) {
//     setSelectedValue(event.target.value);
//     if (selectedValue == "Height") {
//       setShowWeights(false);
//       setShowHeights(true);
//     }
//     if (selectedValue == "Weight") {
//       setShowWeights(true);
//       setShowHeights(false);
//     }
//   }
//  function updateValues() {
//     if (!input) return;
    
//     if (selectedValue === "Height") {
//       if (choice === "feet") {
//         setMeter(input * 0.3048);
//         setCm(input * 30.48);
//         setInches(input * 12);
//       } else if (choice === "cm") {
//         setMeter(input / 100);
//         setFeet(input / 30.48);
//         setInches(input / 2.54);
//       }
//     }
//    if (selectedValue === "Weight") {
//       if (choice === "Pounds") {
//         setKilos(input * 0.453592);
//         setGrams(input * 453.592);
//         setOunce(input * 16);
//       } else if (choice === "Kilos") {
//         setPounds(input * 2.20462);
//         setGrams(input * 1000);
//         setOunce(input * 35.274);
//       }
//     }
//   }

//   function handleWeightChange(event) {
//     setChoice(event.target.value);
    
//   }

//   function handleHeightChange(event) {
//     setChoice(event.target.value);
//   }

  

//   return (
//     <>
//       <h1>UNIT CONVERSION</h1>
//       <select id="dropdown" onChange={handleTypeChange}>
//         <option value="Height">Height</option>
//         <option value="Weight">Weight</option>
//       </select>

//       <select id="dropdownWeight" onChange={handleWeightChange} hidden={showWeights}>
//         <option value="Pounds">Lbs</option>
//         <option value="Kilos">Kilos</option>
//         <option value="Grams">Grams</option>
//         <option value="Ounces">Ounces</option>
//       </select>

//       <select id="dropdownHeight" onChange={handleHeightChange} hidden={showHeights}>
//         <option value="feet">Feet</option>
//         <option value="cm">Cm</option>
//         <option value="meters">Meters</option>
//         <option value="inches">Inches</option>
//       </select>

//       <button onClick={() => alert(`You selected: ${selectedValue}`)}>Submit</button>
//       <p>You selected: {selectedValue} in {choice}</p>
//       <input placeholder="Input Number to Convert" onChange={(e) =>{ setInput(e.target.value);updateValues();}}></input>
//       <p>{input} {choice}</p>

//       <div hidden ={showHeights}>
//         <p>{input} {choice} = feet </p>
//         <p>{input} {choice} = {cm}cm </p>
//         <p>{input} {choice} = {meter}meters</p>
//         <p>{input} {choice} = {inches}inches</p>
//       </div>
//       <div hidden ={showWeights}>
//         <p>{input} {choice} = </p>
//         <p>{input} {choice} = </p>
//         <p>{input} {choice} = </p>
//         <p>{input} {choice} = </p>
//       </div>
//     </>
//   );
// }



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