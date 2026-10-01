import { useState, useCallback, useEffect, useRef} from "react";
import "./App.css";
function App() {
  //useState state update karta hai DOM me 
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  //useRef Hook (for setting ref and provide in fields to access)create a mutable reference to a value or DOM element that persists across component renders
  const passRef = useRef(null)

  //-----------Generate Password------------
  const passwordGenerator = useCallback(() => { //performance optimization tool that memoizes a callback function, ensuring it is only recreated when its dependencies change
    //fn in cache , useCallback hook (fn,dependencies)
    let pass = ""; //here generated pass to be stored then by setPassword password me add kardenge
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"; //data for making pass

    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += "`~!@#$%^&*(){}][+=-_?:";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length);
      pass += str.charAt(char);
    }

    setPassword(pass); //stored in password
  }, [length, numberAllowed, charAllowed, setPassword]);

//------------copy password to clipboard
const copyPasswordToClipboard = useCallback(() => {//callback is only for the optimization(memory me yaad rakhta)
  passRef.current?.select()
  window.navigator.clipboard.writeText(password)
  alert("Password copied to clipboard")
},[password])


  useEffect(()=>{  //pehli bar run hota hai jab screen load hoti , fir agar dependencies me se kuch change hota hahi to dobara call hojata hai
    passwordGenerator()
  },[length, numberAllowed, charAllowed, passwordGenerator])//run the fn when changes happen on dependencies

  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-black ">
        <div className="w-full max-w-lg bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-8 shadow-2xl">
          <h1 className="text-3xl font-semibold text-white text-center mb-6">
            Password Generator
          </h1>

          {/* Password Box */}
          <div className="flex items-center bg-white/20 rounded-lg overflow-hidden">
            <input
              type="text"
              value={password}
              className="flex-1 bg-transparent px-4 py-3 text-white outline-none tracking-wider"
              placeholder="Generated password"
              readOnly 
              ref={passRef}
            />
            <button 
            onClick={copyPasswordToClipboard}
            className="px-4 py-3 bg-white/30 text-white text-sm font-medium hover:bg-white/40 transition">
              Copy
            </button>
          </div>

          <div className="flex items-center gap-4 text-white mt-5">
            {/* Slider */}
            <input
              type="range"
              min="0"
              max="40"
              value={length}
              onChange={(e) => setLength(e.target.value)}
              className="w-48 h-2 accent-green-500 cursor-pointer"
            />

            {/* Length Text */}
            <span className="text-green-400 font-medium">Length:{length}</span>

            {/* Checkbox */}
            <label className="flex items-center gap-2 text-green-400">
              <input
                type="checkbox"
                defaultChecked={numberAllowed}
                onChange={() => setNumberAllowed((prev) => !prev)}
                className="accent-green-500"
              />
              Number
            </label>
            <label className="flex items-center gap-2 text-green-400">
              <input
                type="checkbox"
                defaultChecked={charAllowed}
                onChange={() => setCharAllowed((prev) => !prev)}
                className="accent-green-500"
              />
              Character
            </label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
