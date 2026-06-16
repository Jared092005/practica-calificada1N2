import "./index.css";
import Crew from "../components/crew";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  return (
    <>
      <Crew></Crew>
      <button
        onClick={() => setCount(count + 1)}
        className="bg-slate-400 h-20 w-20"
      ></button>
      <button
        onClick={() => setCount(count - 1)}
        className="bg-slate-800 h-20 w-20"
      ></button>
      <div>{count}</div>
    </>
  );
}

export default App;
