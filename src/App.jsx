import { useState } from "react";
import "./App.css";
import PickCracker from "./components/PickCracker";
import CrackerPicked from "./components/CrackerPicked";
// import CrackerOpened from "./components/CrackerOpened";

function App() {
  const [stage, setStage] = useState("pick a cracker");
  const [color, setColor] = useState(null);
  return (
    <>
      {stage === "pick a cracker" ? (
        <PickCracker setStage={setStage} setColor={setColor} color={color} />
      ) : stage === "cracker picked" ? (
        <CrackerPicked setStage={setStage} color={color} />
      ) : null}
    </>
  );
}

export default App;