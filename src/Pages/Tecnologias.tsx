import "../global.scss";
import { useGlobalState, setGlobalState } from "../global-state";
import BackButtonMenu from "../components/BackButtonMenu";
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

  function ocultarTecnologias(): void {
    if (window.screen.width < 1200) {
      setGlobalState("transformMenuValue", 0);
      setGlobalState("transformTecnologiasValue", 100);
    } else {
      setGlobalState("transformMenuValueDesktop", 0);
      setGlobalState("transformTecnologiasValue", 100);
    }
  }

  return (
    <>
      <section className="main__pages" style={main__pages.styles}>
        <div className="main__pages--container tecnologias">
          <BackButtonMenu ocultar={ocultarTecnologias} />

          <div className="info__Container">
            <h1
              className="info__Container--title tecnologiasTitle"
              id="tecnologia__title"
            >
              Tecnologias y Experiencia
            </h1>

            <section className="tecnologiasBarYExperiencia">
              <div className="tecnologiasBarYExperiencia__container">
                <div className="tecnologiasBar__container">
                  <TecnologiasBar />
                </div>
                
                <div className="info__Container--experiencia">
                <div className="info__Container--experiencia--1">
                    <h3 className="info__Container--experiencia--1--title">
                      Ultimo proyecto (2024 - act)
                    </h3>
                    <p className="info__Container--experiencia--1--paragraph">
                      Desempeño como front-end developer consumiendo la api de
                      ART INSTITUTE OF CHICAGO.
                      <br />
                      Ver el resultado en:
                      <a
                        href="https://art-institute-of-chicago-app.netlify.app/"
                        target="_blank"
                        rel="noreferrer"
                      > 
                      <br />
                      https://art-institute-of-chicago-app.netlify.app/
                      </a>
                    </p>
                  </div>
                  <div className="info__Container--experiencia--1">
                    <h3 className="info__Container--experiencia--1--title">
                      Mcardin diseño (2022 - 2022)
                    </h3>
                    <p className="info__Container--experiencia--1--paragraph">
                      Trabajo freelance. Desarrollo de cookies para la joyeria
                      Chronos.
                      <br />
                      Ver el resultado en:{" "}
                      <a href="" target="_blank" rel="noreferrer">
                        chronosba.com
                      </a>
                      <a
                        href="https://mcardin.com.ar"
                        target="_blank"
                        rel="noreferrer"
                      ></a>
                    </p>
                  </div>

                  <div className="info__Container--experiencia--1">
                    <h3 className="info__Container--experiencia--1--title">
                      Javascript Tutor en Coderhouse(2021 - 2022)
                    </h3>
                    <p className="info__Container--experiencia--1--paragraph">
                      Asistencia practica, mentoria, clases online de
                      javascript, desarrollo web, arreglo de bugs y creación de
                      proyectos.
                    </p>
                  </div>
       
                </div>
              </div>
            </section>
          </div>
        </div>
      </section>
    </>
  );
};

export default Tecnologias;
