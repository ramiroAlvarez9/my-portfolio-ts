import { useGlobalState } from "../global-state";
import BackButtonMenu from "../components/BackButtonMenu";
import TecnologiasBar from "../components/TecnologiasBar";
import { ocultarTecnologias } from "../customHooks/controlSlideComponents";
import ReactLoading from "react-loading";
import "../global.scss";

interface Props {
  experiences: Array<object>;
}

const Tecnologias = ({ experiences }: Props) => {
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
                  {/* info desde la API -*/}
                  {experiences[0] === undefined ? (
                     <div className="loading__component">
            
                     <ReactLoading
                       type="cubes"
                       color="#ffffff"
                       height= {667}
                       width = {375}
                     />
                     </div>
                  ) : (
                    experiences.map((element: any, key: number) => {
                      return (
                        <div
                          className="info__Container--experiencia--1"
                          key={key}
                        >
                          <h3 className="info__Container--experiencia--1--title">
                            {element["1"]}, {element["2"]}
                          </h3>
                          <p className="info__Container--experiencia--1--paragraph">
                            {element["3"]}
                          </p>
                          <br />
                          <a
                            href={element["4"]}
                            rel="noopener noreferrer"
                            target="_blank"
                          >
                            {element["4"]}
                          </a>
                        </div>
                      );
                    })
                  )}
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
