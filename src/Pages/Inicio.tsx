import '../global.scss';
import { useGlobalState } from "../global-state";
import { Link, BrowserRouter } from "react-router-dom";
import AnimationBackground from "../components/AnimationBackground";
import { ocultarInicio, mostrarPagina } from '../customHooks/controlSlideComponents';

const Inicio = () => {

  let inicioTranslateValue: number = useGlobalState("transformInicioValue")[0];

  const main__pages = {
    styles: {
      transform: `translate(${inicioTranslateValue}%)`,
      transition: "0.5s",
      transitionDelay: "0.1s",
    },
  } as const;


  return (
    <>
    
      <section className="main__pages" style={main__pages.styles}>
      
        <AnimationBackground />

        <div className="main__pages--container">


          <div className="info__Container">
            <section className="inicio__container">
              <section className="paragraph">
                <h1 className="info__Container--title">¡Hola!</h1>
                <p className="info__Container--paragraph">
                  Mi nombre es Ramiro Alejandro Alvarez,
                  <br />y me dedico al Front-end development.
                  <br />Actualmente vivo en
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
                        mostrarPagina("transformContactoValue");
                      }}
                    >
                      clickear aqui
                    </Link>
                  </BrowserRouter>

                  <BrowserRouter>


                    ,o  <Link to="/" onClick={ocultarInicio}>seguir navegando en la pagina.</Link>

                  </BrowserRouter>
                </p>
              </section>
              <section className="end">
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
              </section>
            </section>
          </div>

        </div>
      </section>
    </>
  );
};

export default Inicio;
