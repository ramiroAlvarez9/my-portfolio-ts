import { useGlobalState, setGlobalState } from "../global-state";

//--CONTACTO COMPONENT--//

function ocultarContacto(): void {
  if (window.screen.width < 1200) {
    setGlobalState("transformMenuValue", 0);
    setGlobalState("transformContactoValue", 100);
  } else {
    setGlobalState("transformMenuValueDesktop", 0);
    setGlobalState("transformContactoValue", 100);
  }
}
//--END CONTACTO COMPONENT--//

//--APP COMPONENT--//
//handling windows and routes
function mostrarPagina(transformPagina: any): void {
  if (window.screen.width > 1200) {
    setGlobalState("transformMenuValueDesktop", 100);
    setGlobalState(transformPagina, 0);
  } else {
    setGlobalState("transformMenuValue", -100);
    setGlobalState(transformPagina, 0);
  }
}

function handlingWindowsAndRoutes() {
  if (window.location.href.includes("/inicio")) {
    mostrarPagina("transformInicioValue");
  } else if (window.location.href.includes("/proyectos")) {
    mostrarPagina("transformProyectosValue");
  } else if (window.location.href.includes("/tecnologias")) {
    mostrarPagina("transformTecnologiasValue");
  } else if (window.location.href.includes("/contacto")) {
    mostrarPagina("transformContactoValue");
  }
}
//--END APP COMPONENT--//

//--TECNOLOGIAS COMPONENT--//
function ocultarTecnologias(): void {
  if (window.screen.width < 1200) {
    setGlobalState("transformMenuValue", 0);
    setGlobalState("transformTecnologiasValue", 100);
  } else {
    setGlobalState("transformMenuValueDesktop", 0);
    setGlobalState("transformTecnologiasValue", 100);
  }
}
//--END CONTACTO COMPONENT--//

//--INICIO COMPONENT--//
function ocultarInicio(): void {
  if (window.screen.width < 1200) {
    setGlobalState("transformMenuValue", 0);
    setGlobalState("transformInicioValue", 100);
  } else {
    setGlobalState("transformMenuValueDesktop", 0);
    setGlobalState("transformInicioValue", 100);
  }
}
//--END INICIO COMPONENT--//

//--PROYECTOS     COMPONENT--//
function ocultarProyectos() : void {
  if (window.screen.width < 1200) {
    setGlobalState("transformMenuValue", 0);
    setGlobalState("transformProyectosValue", 100);
  } else {
    setGlobalState("transformMenuValueDesktop", 0);
    setGlobalState("transformProyectosValue", 100);
  }
}

//--END PROYECTOS COMPONENT--//

export {
  ocultarContacto,
  mostrarPagina,
  handlingWindowsAndRoutes,
  ocultarTecnologias,
  ocultarInicio,
  ocultarProyectos
};
