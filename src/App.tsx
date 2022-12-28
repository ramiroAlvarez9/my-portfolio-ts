import React, { useEffect } from "react";
import "./App.scss";
import "./reset.min.css";
import Menu from "./components/Menu";
import Header from "./components/Header";
import Index from "./components/Index";
import { setGlobalState } from "./global-state";

function App() {
  function mostrarPaginaInicio(): void {
    setGlobalState("transformMenuValue", -100);
    setGlobalState("transformInicioValue", 0);
  }
  function mostrarPaginaProyectos(): void {
    setGlobalState("transformMenuValue", -100);
    setGlobalState("transformProyectosValue", 0);
  }
  function mostrarPaginaTecnologias(): void {
    setGlobalState("transformMenuValue", -100);
    setGlobalState("transformTecnologiasValue", 0);
  }
  function mostrarPaginaBlog(): void {
    setGlobalState("transformMenuValue", -100);
    setGlobalState("transformBlogValue", 0);
  }
  function mostrarPaginaContacto(): void {
    setGlobalState("transformMenuValue", -100);
    setGlobalState("transformContactoValue", 0);
  }

  useEffect(() => {
    if (window.location.href.includes("/inicio")) {
      mostrarPaginaInicio();
    } else if (window.location.href.includes("/proyectos")) {
      mostrarPaginaProyectos();
    } else if (window.location.href.includes("/tecnologias")) {
      mostrarPaginaTecnologias();
    } else if (window.location.href.includes("/blog")) {
      mostrarPaginaBlog();
    } else if (window.location.href.includes("/contacto")) {
      mostrarPaginaContacto();
    }
  }, []);

  return (
    <>
      <Menu />

      <Header />

      <Index />

      {/* <-- All pages from ./ages are  in this component*/}
    </>
  );
}

export default App;
