import React, { useEffect, useState } from "react";
import "./App.css";

import { Button, Canva, Circle, ContainerButtons } from "./Components";

function App() {
  const [circles, setCircles] = useState<{ x: number; y: number }[]>([]);

  const [undo, setUndo] = useState<{ x: number; y: number }[]>([]);
  const [redo, setRedo] = useState<{ x: number; y: number }[]>([]);

  const [disabledUndo, setDisabledUndo] = useState(false);
  const [disabledRedo, setDisabledRedo] = useState(false);

  const getCordinates = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const { clientX, clientY } = e;
    const { left, top } = e.currentTarget.getBoundingClientRect();
    const x = clientX - left;
    const y = clientY - top;
    return { x, y };
  };

  const handleUndo = () => {
    if (circles.length > 0) {
      const lastCircle = circles[circles.length - 1];
      setUndo([...undo, lastCircle]);
      setCircles(
        circles.filter((circle, index) => index !== circles.length - 1)
      );
    }
  };

  const handleRedo = () => {
    if (undo.length > 0) {
      const lastCircle = undo[undo.length - 1];
      setRedo([...redo, lastCircle]);
      setUndo(undo.filter((circle, index) => index !== undo.length - 1));
      setCircles([...circles, lastCircle]);
    }
  };

  useEffect(() => {
    circles.length === 0 ? setDisabledUndo(true) : setDisabledUndo(false);
    undo.length === 0 ? setDisabledRedo(true) : setDisabledRedo(false);
  }, [circles]);

  return (
    <>
      <ContainerButtons>
        <Button onClick={handleUndo} disabled={disabledUndo}>
          Desfazer
        </Button>
        <Button onClick={handleRedo} disabled={disabledRedo}>
          Refazer
        </Button>
      </ContainerButtons>
      <Canva onClick={(e) => setCircles([...circles, getCordinates(e)])}>
        {circles.map((circle, index) => (
          <Circle key={index} x={circle.x} y={circle.y} />
        ))}
      </Canva>
    </>
  );
}

export default App;
