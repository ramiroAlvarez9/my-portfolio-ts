import "../global.scss";
import { useGlobalState } from "../global-state";
import BackButtonMenu from "../components/BackButtonMenu";
import ProyectosGallery from "../components/ProyectosGallery";
import { ocultarProyectos } from "../customHooks/controlSlideComponents";

interface Props {
  projects: Array<object>;
}

const Proyectos = ({ projects }: Props) => {
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

  return (
    <>
      <section className="main__pages" style={main__pages.styles}>
        <div className="main__pages--container">
          <BackButtonMenu ocultar={ocultarProyectos} />
          <div className="info__Container">
            <h1 className="info__Container--title proyectosTitle">proyectos</h1>
            <ProyectosGallery projects={projects} />
          </div>
        </div>
      </section>
    </>
  );
};

export default Proyectos;
