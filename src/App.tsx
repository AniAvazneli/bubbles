import React, { useState } from "react";
import "./App.css";
import Bubble from "../public/image0.png";

type TPoint = {
  x: number;
  y: number;
};

function App() {
  const [points, setPoints] = useState<TPoint>([]);
  const [popped, setPopped] = useState<TPoint>([]);
  function handlePlaceCircle(e: React.MouseEvent<HTMLDivElement>) {
    const { clientX, clientY } = e;
    setPoints([
      ...points,
      {
        x: clientX,
        y: clientY,
      },
    ]);
  }

  function handleUndo() {
    const newPoints = [...points];
    const poppedPoint = newPoints.pop();
    if (!poppedPoint) return;
    setPopped([...popped, poppedPoint]);
    setPoints(newPoints);
  }

  function handleRedo() {
    const newPopped = [...popped];
    const newPointsd = [...points];
    const poppedPoint = popped.pop();
    if (!poppedPoint) return;
    newPointsd.push(poppedPoint);
    setPoints(newPointsd);
    setPopped(newPopped);
  }

  return (
    <>
      <div className="buttonC">
        <button onClick={handleUndo}>Undo</button>
        <button onClick={handleRedo}>Redo</button>
        </div>
      <div className="App" onClick={handlePlaceCircle}>
        {points.map((point) => (
          <div
            className="point"
            key={Math.random()}
            style={{
              left: point.x - 25 + "px",
              top: point.y - 25 + "px",
            }}
          >
            <img src={Bubble} alt="bubble" className="bImage" />
          </div>
        ))}
        
      </div>
    </>
  );
}

export default App;


