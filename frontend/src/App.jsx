import { useState } from "react";

function App() {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [result, setResult] = useState(null);

  const calculate = (operator) => {
    const n1 = Number(num1);
    const n2 = Number(num2);
    
    if (isNaN(n1) || isNaN(n2)) {
      setResult("Please enter valid numbers");
      return;
    }
    
    let res;
    switch (operator) {
      case "+":
        res = n1 + n2;
        break;
      case "-":
        res = n1 - n2;
        break;
      case "*":
        res = n1 * n2;
        break;
      case "/":
        if (n2 === 0) {
          setResult("Cannot divide by zero");
          return;
        }
        res = n1 / n2;
        break;
      default:
        setResult("Invalid operator");
        return;
    }
    
    setResult(res);
  };

  return (
    <div>
      <h3>Python Calculator (Now Independent)</h3>
      <input 
        value={num1} 
        onChange={e => setNum1(e.target.value)} 
        placeholder="First number"
        type="number"
      />
      <input 
        value={num2} 
        onChange={e => setNum2(e.target.value)} 
        placeholder="Second number"
        type="number"
      />
      <br />
      <button onClick={() => calculate("+")}>+</button>
      <button onClick={() => calculate("-")}>-</button>
      <button onClick={() => calculate("*")}>*</button>
      <button onClick={() => calculate("/")}>/</button>
      <h4>Result: {result ?? ""}</h4>
    </div>
  );
}

export default App;
