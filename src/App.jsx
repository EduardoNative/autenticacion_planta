import { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { SingUp } from "./components/SingUp";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <SingUp />
    </>
  );
}

export default App;
