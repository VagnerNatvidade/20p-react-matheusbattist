import React, { useState } from "react";

import { Frases } from "./components/frases";
import { frases } from "./data";

export function App() {
  const [index, setIndex] = useState(0);

  const nextFrase = () => {
    setIndex((currentIndex) => (currentIndex + 1) % frases.length);
  };

  return (
    <>
      <Frases text={frases[index].texto} author={frases[index].autor} />
      <button className="btn btn-success mt-2" onClick={nextFrase}>
        Próxima citação
      </button>
    </>
  );
}
