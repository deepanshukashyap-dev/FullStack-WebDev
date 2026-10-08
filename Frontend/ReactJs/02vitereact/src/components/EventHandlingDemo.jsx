import { useState } from "react";

// Day-33: React Event Handling - Handling user interactions

// 1. Basic Click Event
function ClickDemo() {
  const [message, setMessage] = useState("Click the button!");

  const handleClick = () => {
    setMessage("Button was clicked! 🎉");
  };

  const handleClickWithEvent = (e) => {
    console.log("Event type:", e.type);
    console.log("Target:", e.target);
    setMessage(`Clicked at (${e.clientX}, ${e.clientY})`);
  };

  return (
    <div style={{ padding: "16px" }}>
      <h3>Click Events</h3>
      <p>{message}</p>
      <button onClick={handleClick} style={{ margin: "4px", padding: "8px 16px" }}>
        Simple Click
      </button>
      <button onClick={handleClickWithEvent} style={{ margin: "4px", padding: "8px 16px" }}>
        Click with Event Info
      </button>
    </div>
  );
}

// 2. Form Events
function FormDemo() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page reload!
    console.log("Form submitted:", formData);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div>
        <h3>✅ Form Submitted!</h3>
        <pre>{JSON.stringify(formData, null, 2)}</pre>
        <button onClick={() => { setSubmitted(false); setFormData({ name: "", email: "", message: "" }); }}>
          Submit Another
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} style={{ padding: "16px", maxWidth: "400px" }}>
      <h3>Contact Form - Form Events</h3>
      <div style={{ marginBottom: "12px" }}>
        <label>Name:</label><br />
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          style={{ width: "100%", padding: "8px" }}
        />
      </div>
      <div style={{ marginBottom: "12px" }}>
        <label>Email:</label><br />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          style={{ width: "100%", padding: "8px" }}
        />
      </div>
      <div style={{ marginBottom: "12px" }}>
        <label>Message:</label><br />
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={3}
          style={{ width: "100%", padding: "8px" }}
        />
      </div>
      <button type="submit" style={{ padding: "10px 20px" }}>Submit</button>
    </form>
  );
}

// 3. Keyboard Events
function KeyboardDemo() {
  const [keyLog, setKeyLog] = useState([]);
  const [inputVal, setInputVal] = useState("");

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      setKeyLog(prev => [...prev, `Enter pressed! Value: "${inputVal}"`]);
      setInputVal("");
    } else if (e.key === "Escape") {
      setInputVal("");
    }
  };

  return (
    <div style={{ padding: "16px" }}>
      <h3>Keyboard Events</h3>
      <p>Type and press Enter to log, Escape to clear:</p>
      <input
        value={inputVal}
        onChange={(e) => setInputVal(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="Type here..."
        style={{ padding: "8px", width: "200px" }}
      />
      <ul>
        {keyLog.map((log, i) => <li key={i}>{log}</li>)}
      </ul>
    </div>
  );
}

// 4. Mouse Events + Event Delegation
function MouseEvents() {
  const [hovered, setHovered] = useState(null);
  const items = ["React", "JavaScript", "HTML", "CSS", "Node.js"];

  return (
    <div style={{ padding: "16px" }}>
      <h3>Mouse Events & Event Delegation</h3>
      <p>Hovered: <strong>{hovered || "Nothing"}</strong></p>
      <div
        onMouseOver={(e) => setHovered(e.target.dataset.item || null)}
        onMouseOut={() => setHovered(null)}
      >
        {items.map(item => (
          <span
            key={item}
            data-item={item}
            style={{
              display: "inline-block",
              margin: "4px",
              padding: "6px 12px",
              background: hovered === item ? "#007bff" : "#e0e0e0",
              color: hovered === item ? "white" : "black",
              borderRadius: "4px",
              cursor: "pointer",
              transition: "all 0.2s"
            }}
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

export { ClickDemo, FormDemo, KeyboardDemo, MouseEvents };
export default FormDemo;
