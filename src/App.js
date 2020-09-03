import React, { useState } from "react";
import Tasbeeh from "./Tasbeeh";
import Prayertime from "./Prayer";
import "./App.css";

function App() {
  let [count, setcount] = useState(0);
  let [isTime, setprayer] = useState(true);
  return (
    <div className={`${isTime ? "fajr" : "isha"}`}>
      <Prayertime time={isTime} />
      <Tasbeeh counter={count} />
      <button className="Btn1" onClick={() => setcount(++count)}>
        +
      </button>
      <button className="Btn2" onClick={() => setcount(0)}>
        Reset
      </button>
      <button className="Btn3" onClick={() => setprayer(!isTime)}>
        Display Prayer
      </button>
    </div>
  );
}

export default App;
