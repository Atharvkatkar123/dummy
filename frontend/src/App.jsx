import { useState } from "react";

function App() {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [result, setResult] = useState(null);

  const calculate = async (operator) => {
    const res = await fetch("http://localhost:8000/calculate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        num1: Number(num1),
        num2: Number(num2),
        operator
      }),
    });

    const data = await res.json();
    setResult(data.result);
  };

  return (
    <div>
      <h3>Python Calculator</h3>
      <input value={num1} onChange={e => setNum1(e.target.value)} />
      <input value={num2} onChange={e => setNum2(e.target.value)} />
      <br />
      <button onClick={() => calculate("+")}>+</button>
      <button onClick={() => calculate("-")}>-</button>
      <button onClick={() => calculate("*")}>*</button>
      <button onClick={() => calculate("/")}>/</button>
      <h4>Result: {result}</h4>
    </div>
  );
}

export default App;
