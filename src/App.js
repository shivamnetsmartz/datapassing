import React, {useState } from "react";
import './App.css';
import CComponent from "./components/CComponent";
import FComponent from "./components/FComponent";

function App() {

 const [counter, setCounter] = useState(0);
 const increment =() =>{
   setCounter(counter + 1);
 };
 const decrement = () =>{
   setCounter(counter - 1);
 };
  return (
    <div className="App border">
      <h1>App Component</h1>
      <h2>{counter}</h2>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <hr></hr>
      <FComponent counter = {counter}/>
      <hr></hr>
      <CComponent counter = {counter}/>

    </div>
  );
}

export default App;
