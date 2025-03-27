import { useState } from "react";

import "./App.css";
import Navbar from "./assets/Nav/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <p>This is the start</p>
      <button className="btn btn-primary">Click me</button>
    </>
  );
}

export default App;
