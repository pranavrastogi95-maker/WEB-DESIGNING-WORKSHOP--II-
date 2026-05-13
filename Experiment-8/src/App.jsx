import React, {useState} from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  
  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };
   
  const reset = () => {
    setCount(0);
  };
  
  return (
    <div className="container">
      <h1>React Counter</h1>
      <h2>{count}</h2>
    <div className="Counter">
    <button onClick={increment}>increment</button>
    <button onClick={decrement}>decrement</button>
    <button onClick={reset}>reset</button>    
    
    </div>
    </div>
  );
}
  export default App;