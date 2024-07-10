import React from "react";
import Home from "./Pages/Home";
import BsState from "./Context/BsState";
import "../src/App.css";

const App = () => {
  return (
    <div className="nm">
      <BsState>
        <Home />
      </BsState>
    </div>
  );
};
export default App;
