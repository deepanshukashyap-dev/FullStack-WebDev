import { useState } from "react";

// Day-31: React useState Hook - Managing component state

function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const reset = () => setCount(0);

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h2>Counter App - useState Demo</h2>
      <p style={{ fontSize: "48px", fontWeight: "bold" }}>{count}</p>
      <div>
        <button onClick={decrement} style={{ margin: "5px", padding: "8px 16px" }}>-</button>
        <button onClick={reset} style={{ margin: "5px", padding: "8px 16px" }}>Reset</button>
        <button onClick={increment} style={{ margin: "5px", padding: "8px 16px" }}>+</button>
      </div>
    </div>
  );
}

function ToggleTheme() {
  const [isDark, setIsDark] = useState(false);

  return (
    <div style={{
      background: isDark ? "#1a1a1a" : "#ffffff",
      color: isDark ? "#ffffff" : "#000000",
      padding: "20px",
      borderRadius: "8px",
      transition: "all 0.3s ease"
    }}>
      <h3>Theme: {isDark ? "Dark 🌙" : "Light ☀️"}</h3>
      <button onClick={() => setIsDark(!isDark)}>Toggle Theme</button>
    </div>
  );
}

function InputTracker() {
  const [name, setName] = useState("");

  return (
    <div style={{ padding: "20px" }}>
      <h3>Input Tracker - Controlled Component</h3>
      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        style={{ padding: "8px", margin: "8px" }}
      />
      {name && <p>Hello, <strong>{name}</strong>! 👋</p>}
    </div>
  );
}

export { Counter, ToggleTheme, InputTracker };
export default Counter;
