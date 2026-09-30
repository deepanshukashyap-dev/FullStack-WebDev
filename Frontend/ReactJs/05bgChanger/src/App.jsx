import "./App.css";
import { useState } from "react";

function App() {
  const [color, setColor] = useState("black");
  return (
    <div
      className="w-full h-screen duration-200"
      style={{ backgroundColor: color }}
    >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-2xl bg-white px-4 py-2 rounded-xl">
          <button
            onClick={() => setColor("red")}
            className="px-4 py-2 outline-none text rounded-full bg-red-500 text-white"
          >
            Red
          </button>
          <button
            onClick={() => setColor("blue")}
            className="px-4 py-2 outline-none text rounded-full bg-blue-500 text-white"
          >
            Blue
          </button>
          <button
            onClick={() => setColor("green")}
            className="px-4 py-2 outline-none text rounded-full bg-green-600 text-white"
          >
            Green
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
