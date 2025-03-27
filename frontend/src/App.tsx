import { useState } from "react";

import "./App.css";
import Navbar from "./assets/Nav/Navbar";
import Input from "./assets/UserInput/Input";
import Result from "./assets/Result/Result";

function App() {
  return (
    <>
      <Navbar />
      <Input />
      <Result />
    </>
  );
}

export default App;
