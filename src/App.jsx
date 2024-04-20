import { useState, useCallback, useEffect } from "react";

import "./App.css";

function App() {
  const [length, setlength] = useState(8);
  const [num, setnum] = useState(false);
  const [ch, setch] = useState(false);
  const [pass, setpass] = useState("");
  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIGKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (num) str += "123456789";
    if (ch) str += "!@#$%^*-_+=[]{}~";
    for (let i = 1; i <= length; i++) {
      let cha = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(cha);
    }
    setpass(pass)
  }, [length, num, ch, setpass]);
  useEffect(() => {
    passwordGenerator();
  }, [length, num, ch, passwordGenerator]);

  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4  py-3 my-8 text-orange-500 bg-gray-700">
        <h1 className="py-3">Password Generator</h1>
        <div className="flex  shadow rounded-lg overflow-hidden mb-4">
          <input
            type="text"
            placeholder="Password"
            value={pass}
            className="outline-none w-full py-1 px-3"
            readOnly
          />
          <button className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0">
            Copy
          </button>
        </div>
        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1">
            <input
              type="range"
              min={6}
              max={100}
              value={length}
              className="cursor-pointer"
              onChange={(e) => {
                setlength(e.target.value);
              }}
            />
            <label>Length: {length}</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={num}
              id="numberInput"
              onChange={(e) => {
                setnum((prev) => !prev);
              }}
            />
            <label htmlFor="numberInput">Number</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={ch}
              id="charInput"
              onChange={(e) => {
                setch((prev) => !prev);
              }}
            />
            <label htmlFor="charInput">Characters</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
