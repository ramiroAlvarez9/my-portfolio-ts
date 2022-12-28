import React from "react";
import "./estilos-generales.scss";
import "./inicio.scss";
import { useGlobalState, setGlobalState } from "../global-state";
import { Link, BrowserRouter } from "react-router-dom";
import { Icon } from "@iconify/react";

const Inicio = () => {
  let inicioTranslateValue: number = useGlobalState("transformInicioValue")[0];

  const linkStyle = {
    styles: {
      textDecoration: "none",
      WebkitTapHighlightColor: "transparent",
    },
  } as const;
  const main__pages = {
    styles: {
      transform: `translate(${inicioTranslateValue}%)`,
      transition: "0.5s",
      transitionDelay: "0.1s",
    },
  } as const;

  function ocultarInicio(): void {
    setGlobalState("transformMenuValue", 0);
    setGlobalState("transformInicioValue", 100);
  }
  function mostrarPaginaContacto(): void {
    setGlobalState("transformMenuValue", -100);
    setGlobalState("transformContactoValue", 0);
  }

  return (
    <>
      <main className="main__pages" style={main__pages.styles}>
        <div className="main__pages--container">
          <BrowserRouter>
            <Link to="/" onClick={ocultarInicio} style={linkStyle.styles}>
              <div className="main__pages--container--backButton">
                <div className="main__pages--container--backButton--container">
                  <Icon
                    icon="material-symbols:arrow-back-ios-new-rounded"
                    color="#fafafa"
                    width="30"
                    height="30"
                  />
                  VOLVER A MENU PRINCIPAL
                </div>
              </div>
            </Link>
          </BrowserRouter>

          <div className="info__Container">
            <h1 className="info__Container--title">¡Hola!</h1>
            <p className="info__Container--paragraph">
              Mi nombre es Ramiro Alejandro Alvarez,
              <br />y me dedico al Front-end development. Actualmente vivo en
              Argentina,
              <br /> y en esta, mi pagina web, vas a poder encontrar todo lo
              referente a mi trabajo. En la barra superior de la pagina, podes
              encontrar mis redes sociales, como tambien mi curriculum vitae. Si
              deseas tener un contacto más directo; podes{" "}
              <BrowserRouter>
                <Link
                  to="/contacto"
                  onClick={() => {
                    ocultarInicio();
                    mostrarPaginaContacto();
                  }}
                >
                  clickear aqui
                </Link>
              </BrowserRouter>
              
              <BrowserRouter>
             
                
                ,o  <Link to="/" onClick={ocultarInicio}>seguir navegando en la pagina.</Link>
                
              </BrowserRouter>
            </p>

            <div className="info__Container--end">
              
              <img
                src="https://avatars.githubusercontent.com/u/68313907?s=400&u=6235c6c02be4e9eb7a461ab085a9b55715bedebb&v=4"
                alt="perfil"
                className="info__Container--end--img"
              />

              <div className="titleSubtitleContainer">
                <h3 className="info__Container--end--title">
                  Ramiro Alejandro Alvarez
                </h3>
                <h4 className="info__Container--end--subtitle">
                  Front End Development
                </h4>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Inicio;
