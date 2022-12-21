import React from "react";

interface Props {
  valorTransformProyectos : number;
  ocultarPaginaProyectos  : () => void;
}

const Proyectos = ({ valorTransformProyectos, ocultarPaginaProyectos }: Props) => {
  const main__pages = {
    styles: {
      transform: `translate(100%)`,
      transition: "0.5s",
      transitionDelay: "0.1s",
    },
  } as const;

  return (
    <>
      <main className="main__pages" style={main__pages.styles}>
        <div className="main__pages--container">
          <h1>Proyectos</h1>
          <button onClick={ocultarPaginaProyectos}></button>
        </div>
      </main>
    </>
  );
};

export default Proyectos;
