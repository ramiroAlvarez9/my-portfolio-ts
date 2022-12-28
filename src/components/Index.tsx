import React from "react";
import "./index.scss";

import "../Pages/estilos-generales.scss";

import Inicio      from "../Pages/Inicio";
import Proyectos   from "../Pages/Proyectos";
import Tecnologias from "../Pages/Tecnologias";
import Blog        from "../Pages/Blog";
import Contacto    from "../Pages/Contacto";


import { BrowserRouter } from "react-router-dom";


const Index = () => {
  return (
    <>
      <main className="main">
      
        <Inicio/>
        <Proyectos />
        <Tecnologias/>
        <Blog/>
        <Contacto/>
      
      </main>
    </>
  );
};

export default Index;
