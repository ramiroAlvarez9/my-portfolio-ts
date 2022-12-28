import React from "react";
import "./estilos-generales.scss";
import "./tecnologias.scss";
import { useGlobalState, setGlobalState } from "../global-state";
import { Link, BrowserRouter } from "react-router-dom";
import { Icon } from "@iconify/react";
import TecnologiasBar from "../components/TecnologiasBar";

const Tecnologias = () => {
  let tecnologiasTranslateValue: number = useGlobalState(
    "transformTecnologiasValue"
  )[0];

  const main__pages = {
    styles: {
      transform: `translate(${tecnologiasTranslateValue}%)`,
      transition: "0.5s",
      transitionDelay: "0.1s",
    },
  } as const;
  const linkStyle = {
    styles: {
      textDecoration: "none",
      WebkitTapHighlightColor: "transparent",
    },
  } as const;

  function ocultarTecnologias(): void {
    setGlobalState("transformMenuValue", 0);
    setGlobalState("transformTecnologiasValue", 100);
  }

  return (
    <>
      <main className="main__pages" style={main__pages.styles}>
        <div className="main__pages--container">
          <BrowserRouter>
            <Link to="/" onClick={ocultarTecnologias} style={linkStyle.styles}>
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
            <h1 className="info__Container--title" id="tecnologia__title">
              Tecnologias y Experiencia
            </h1>

            <TecnologiasBar />

            <div className="info__Container--experiencia">
              
              <div className="info__Container--experiencia--1">
                <h3 className="info__Container--experiencia--1--title">
                  Mcardin diseño (2022 - act)
                </h3>
                <p className="info__Container--experiencia--1--paragraph">
                  Trabajo freelance. Desarrollo de cookies para la joyeria
                  Chronos. 
                  <br/>Ver el resultado en: chronosba.com referencia:{" "}
                  <a href="https://mcardin.com.ar" target="_blank"> mcardin.com.ar </a>
                </p>
              </div>

              <div className="info__Container--experiencia--1">
                <h3 className="info__Container--experiencia--1--title">
                  Javascript Tutor en Coderhouse(2021 - act)
                </h3>
                <p className="info__Container--experiencia--1--paragraph">
                  Asistencia practica, mentoria, clases online de javascript,
                  desarrollo web, arreglo de bugs y creación de proyectos.
                </p>
              </div>



            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Tecnologias;
