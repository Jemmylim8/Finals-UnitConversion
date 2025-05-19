import { useState, useRef } from "react";
import "./App.css";


export default function App(){
  const inputNum1 = useRef(null);
  const inputNum2 = useRef(null);
  const [sum1,setSum1] = useState(0)
  const [num1,setNum1] = useState(0)
  const [num2,setNum2] = useState(0)
  const [sum,setSum] = useState(0)
  const prevResults = useRef([]);
  const [showHistory,setShowHistory] = useState(false);
  const [showPrev,setShowPrev] = useState(true);
const EnableInput = ()=>{
  inputNum1.current.disabled = false;
  inputNum1.current.focus();
  inputNum2.current.disabled = false;
};
const updateSum1 = (num1, num2) =>{
  setSum1(Number(num1) + Number(num2));
};
console.log(prevResults);
const calcSum = ()=>{
  setShowHistory(true);
  prevResults.current.push(String(num1) + " + " + String(num2) + " = " + String(sum1));
  const total=Number(num1)+Number(num2);
  setSum(total);
}
const seePrev = ()=>{
  setShowPrev(false);
}
return (
  <>
  <div>
    <h1>Addition Calculator</h1>
    <input ref={inputNum1} type="number" placeholder="Click The Button To Start" disabled
    onChange={(e)=> {setNum1(e.target.value); updateSum1(e.target.value, num2);}}/>
    <span> + </span>
    <input ref={inputNum2} type="number" placeholder="Click The Button To Start" disabled
    onChange={(e)=> {setNum2(e.target.value); updateSum1(e.target.value, num1);}}/>
    <br />
    <h1 style={{color:"red"}}>Total: {sum1}</h1>
    <button onClick={EnableInput}>Start</button>
  </div>
  
  <div>
    <h3>Num 1 : {num1}</h3>
    <h3>Num 2 : {num2}</h3>
    <h3>Sum : {sum}</h3>
    <button onClick={calcSum}>Calculate Sum</button>
  </div>
  <div>
  <button hidden={showHistory===false} onClick={seePrev }>Show History</button>
  
  <li hidden={showPrev}>
    <ol>
      {prevResults.current.map((item ,index) =>
      <p key={index}>{item}</p>
      )}
    </ol>

  </li>
</div>
  </>
)

}


// import { useState, useEffect } from "react";
// export default function Calculator() {
// const [time1,setTime1] = useState(50);
// const [time2,setTime2] = useState(50);
// const [clicked1,setClick1] = useState(false);
// const [clicked2,setClick2] = useState(false);
// const [lock1,setLock1] = useState(false);
// const [lock2,setLock2] = useState(false);
// const [firstClick,setFclick] = useState(0);


// useEffect(() => {
//   if(clicked1===true && time1>0){
//     const timer = setInterval(() =>{
//       setTime1((timer) =>  timer-1);
//       },1000);
//       return () => clearInterval(timer);
//     }
//   if(clicked2===true && time2>0){
//     const timer = setInterval(() =>{
//        setTime2((timer) =>  timer-1);
//        },1000);
//       return () => clearInterval(timer);
//     }
//   });
// const handleClick1 = () => {
//   if(firstClick==0 && clicked1===false && clicked2===false){
//     setFclick(1);
//     setLock2(true);
//     setClick1(true);
//   }
//   if(firstClick!=0 && clicked2 ==false){
//     setClick1(false);
//     setLock1(true);
//     setLock2(false);
//     setClick2(true);
//   }
  
// };
// const handleClick2 = () => {
//   if(firstClick==0 && clicked1===false && clicked2===false){
//     setFclick(1);
//     setLock1(true);
//     setClick2(true);
//   }
//   if(firstClick!=0 && clicked1 ==false){
//     setClick1(true);
//     setLock1(false);
//     setLock2(true);
//     setClick2(false);
//   }
// };
// const handleReset = () =>{
//   setClick1(false);
//   setClick2(false);
//   setFclick(0);
//   setLock1(false);
//   setLock2(false);
//   setTime1(0);
//   setTime2(0);
// }
// const butColors = {
//   stop:'red',
//   start:'green,'
// };


//     return (
//   <>
//   <input placeholder="Input Number" onChange={(e)=>{setTime1(e.target.value);setTime2(e.target.value);}}></input>
//   <button onClick={handleClick1} disabled={lock1===true} id="button1" style={{backgroundColor:lock1 ? "red" : "green"}}>Button 1:{time1}</button>
//   <button onClick={handleClick2} disabled={lock2===true} id="button2" style={{backgroundColor:lock2 ? "red" : "green"}}>Button 2:{time2}</button>
//   <button onClick={handleReset}>RESET</button>

//   </>
// )

// }

// import { useState, useEffect } from "react";

// export default function Calculator() {
//   const [num1, setNum1] = useState(0);
//   const [num2, setNum2] = useState(0);
//   const [operation, setOperation] = useState("add");
//   const [result1, setResult1] = useState(0);
//   const [result2, setResult2] = useState(null);

//   const calculate = () => {
//     switch (operation) {
//       case "add":
//         return num1 + num2;
//       case "subtract":
//         return num1 - num2;
//       case "multiply":
//         return num1 * num2;
//       case "divide":
//         return num2 !== 0 ? num1 / num2 : "Cannot divide by zero";
//       default:
//         return 0;
//     }
//   };

//   useEffect(() => {
//     setResult1(calculate());
//   }, [num1, num2, operation]);

//   const showResult2 = () => {
//     setResult2(calculate());
//   };

//   return (
//     <div className="flex flex-col items-center p-4 bg-gray-100 min-h-screen">
//       <h1 className="text-2xl font-bold mb-4">Simple Calculator</h1>
//       <div className="flex flex-col gap-2 p-4 bg-white shadow-lg rounded-xl w-80">
//         <input
//           type="number"
//           value={num1}
//           onChange={(e) => setNum1(parseFloat(e.target.value) || 0)}
//           className="border p-2 rounded-md"
//           placeholder="Enter first number"
//         />
//         <input
//           type="number"
//           value={num2}
//           onChange={(e) => setNum2(parseFloat(e.target.value) || 0)}
//           className="border p-2 rounded-md"
//           placeholder="Enter second number"
//         />
//         <select
//           value={operation}
//           onChange={(e) => setOperation(e.target.value)}
//           className="border p-2 rounded-md"
//         >
//           <option value="add">Add</option>
//           <option value="subtract">Subtract</option>
//           <option value="multiply">Multiply</option>
//           <option value="divide">Divide</option>
//         </select>
//         <div className="mt-4 p-2 bg-gray-200 rounded-md text-center">
//           <p className="text-lg">First Number: {num1}</p>
//           <p className="text-lg">Second Number: {num2}</p>
//           <p className="text-xl font-bold">Result1: {result1}</p>
//         </div>
//         <button
//           onClick={showResult2}
//           className="mt-2 p-2 bg-green-500 text-white rounded-md hover:bg-green-600"
//         >
//           Show Result 2
//         </button>
//         {result2 !== null && (
//           <div className="mt-4 p-2 bg-yellow-200 rounded-md text-center">
//             <p className="text-xl font-bold">Result2: {result2}</p>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }
