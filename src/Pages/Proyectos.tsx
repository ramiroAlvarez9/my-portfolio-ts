import React from "react";
import "./estilos-generales.scss";
import "./proyectos.scss";
import { useGlobalState, setGlobalState } from "../global-state";
import { Link, BrowserRouter } from "react-router-dom";
import { Icon } from "@iconify/react";
import ProyectosGallery from "../components/ProyectosGallery";

const Proyectos = () => {

  let proyectosTranslateValue: number = useGlobalState(
    "transformProyectosValue"
  )[0];

  const main__pages = {
    styles: {
      transform: `translate(${proyectosTranslateValue}%)`,
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

    function ocultarProyectos(): void {
      setGlobalState("transformMenuValue", 0);
      setGlobalState("transformProyectosValue", 100);
    }

    return (
      <>
        <main className="main__pages" style={main__pages.styles}>
          <div className="main__pages--container">
            <h1>Proyectos</h1>

            <BrowserRouter>
              <Link to="/" onClick={ocultarProyectos} style={linkStyle.styles}>
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
              <h1 className="info__Container--title">Proyectos</h1>

            <ProyectosGallery
            />


          </div>
          </div>
        </main>
      </>
    );
  };

export default Proyectos;
