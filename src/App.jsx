import { useState } from "react";

export default function App() {
  const [selectedValue, setSelectedValue] = useState("");
  const [input ,setInput] = useState("");
  const [showHeights,setShowHeights] =useState(true);
  const [showWeights,setShowWeights] =useState(true);
  const [choice ,setChoice] = useState("");
  function handleTypeChange(event) {
    setSelectedValue(event.target.value);
    if(selectedValue=="Height"){
        setShowWeights(false);
        setShowHeights(true);
    }
    if(selectedValue=="Weight"){
        setShowWeights(true);
        setShowHeights(false);
    }
  }
  function handleWeightChange(event) {
    setChoice(event.target.value);
  }
  function handleHeightChange(event) {
    setChoice(event.target.value);
  }
  const showChoices = ()=>{
    
  }

  return (
    <>
      <h1>UNIT CONVERSION</h1>
      <select id="dropdown" onChange={handleTypeChange}>
        <option value="Height">Height</option>
        <option value="Weight">Weight</option>
      </select>
     <select id="dropdownHeight" onChange={handleWeightChange} hidden={showWeights}>
        <option value="Pounds">Lbs</option>
        <option value="Kilos">Kilos</option>
     </select>
     <select id="dropdownHeight" onChange={handleHeightChange} hidden={showHeights}>
        <option value="feet">in</option>
        <option value="cm">Cm</option>
     </select>
      <button onClick={() => alert(`You selected: ${selectedValue}`)}>Submit</button>
      <p>You selected: {selectedValue} in {choice}</p>
      <input placeholder="Input Number to Convert"></input>
    </>
  );
}