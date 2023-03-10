import "./estilos-generales.scss";
import "./proyectos.scss";
import { useGlobalState, setGlobalState } from "../global-state";
import BackButtonMenu from "../components/BackButtonMenu";
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

    function ocultarProyectos(): void {
      if (window.screen.width < 1200) {
        setGlobalState("transformMenuValue", 0);
        setGlobalState("transformProyectosValue", 100);
      }
      else{
        setGlobalState("transformMenuValueDesktop", 0); 
        setGlobalState("transformProyectosValue", 100);
      }
    }

    return (
      <>
        <section className="main__pages" style={main__pages.styles}>
          <div className="main__pages--container">
            
            
            <BackButtonMenu 
            
              ocultar = {ocultarProyectos}

            />

            <div className="info__Container">
              <h1 className="info__Container--title proyectosTitle">Proyectos</h1>

            <ProyectosGallery
            />


          </div>
          </div>
        </section>
      </>
    );
  };

export default Proyectos;
