import React from "react";
import "./estilos-generales.scss";

interface Props {
  valorTransform : number;
  ocultarPagina  : () => void;
}

const Inicio = ({ valorTransform, ocultarPagina }: Props) => {

  const main__pages = {
    styles: {
      transform: `translate(${valorTransform}%)`,
      transition: "0.5s",
      transitionDelay: "0.1s",
    },
  } as const;

  return (
    <>
      <main className="main__pages" style={main__pages.styles}>
        <div className="main__pages--container">
          <h1>Inicio</h1>
          <button onClick = {ocultarPagina}></button>
        </div>
      </main>
    </>
  );
};

export default Inicio;
