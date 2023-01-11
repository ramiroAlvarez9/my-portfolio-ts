import { useEffect } from "react";
import "./App.scss";
import "./reset.min.css";
import Menu from "./components/Menu";
import Header from "./components/Header";
import Index from "./components/Index";
import { setGlobalState } from "./global-state";

function App() {

  type GlobalTransformType = "transformInicioValue" | "transformProyectosValue" | "transformTecnologiasValue" | "transformContactoValue"

  useEffect( () => {

    function mostrarPagina(transformPagina: GlobalTransformType): void 
    {
      if (window.screen.width > 1200) {
        setGlobalState("transformMenuValueDesktop", 100);
        setGlobalState(transformPagina, 0);
      } else {
        setGlobalState("transformMenuValue", -100);
        setGlobalState(transformPagina, 0);
      }
    }
  
    if (window.location.href.includes("/inicio")) 
    {
      mostrarPagina("transformInicioValue");
    } 
    else if (window.location.href.includes("/proyectos")) 
    {
      mostrarPagina("transformProyectosValue");
    } 
    else if (window.location.href.includes("/tecnologias")) 
    {
      mostrarPagina("transformTecnologiasValue");
    } 
    else if (window.location.href.includes("/contacto")) 
    {
      mostrarPagina("transformContactoValue");
    }
  }, []) ;

  return (
    <>
      <Menu />

      <Header />

      <Index /> {/* <-- All pages from ./Pages are  in this component*/}

      
    </>
  );
}

export default App;
