import { Icon } from "@iconify/react";
import '../global.scss';
import { Link } from "react-router-dom";
import { createBrowserRouter, createRoutesFromElements, Route, BrowserRouter, RouterProvider } from "react-router-dom";
import { useGlobalState, setGlobalState } from "../global-state";


const Menu = () => {

  type GlobalTransformType = "transformInicioValue" | "transformProyectosValue" | "transformTecnologiasValue" | "transformContactoValue"

  //rutas 
  const router = createBrowserRouter(
    createRoutesFromElements(

      <Route path="/"        element=  {null}>
        <Route path="inicio" element={null} />
        <Route path="proyectos" element={null} />
        <Route path="tecnologias" element={null} />
        <Route path="blog" element={null} />
        <Route path="contacto" element={null} />
      </Route>
    )
  );

  function mostrarPagina(transformPagina: GlobalTransformType): void {

    if (window.screen.width > 1200) {
      setGlobalState("transformMenuValueDesktop", 100);
      setGlobalState(transformPagina, 0);
    } else {
      setGlobalState("transformMenuValue", -100);
      setGlobalState(transformPagina, 0);
    }
  }

  const menu__container = {
    styles: {
      transform: `translate( ${useGlobalState("transformMenuValue")[0]}%  , ${useGlobalState("transformMenuValueDesktop")[0]}% )`,
      transition: "0.1s",
    },
  } as const;

  const linkStyle = {
    styles: {
      textDecoration: "none",
      WebkitTapHighlightColor: 'transparent',
    },
  } as const;


  return (
    <>
      {/* all routes executing---> */} <RouterProvider router={router} />
      <div className="menuFlexContainer">
        <BrowserRouter>
          <div className="menu__container" style={menu__container.styles}>
            <div className="elementsContainer">
              <Link to="inicio" onClick={() => mostrarPagina("transformInicioValue")} style={linkStyle.styles}>
                <div className="elementsContainer__container ">
                  <Icon
                    icon="material-symbols:home"
                    className="elementsContainer__container--icon"
                    width="30"
                    height="30"
                  />
                  <h5 className="elementsContainer__container--title">Inicio</h5>
                </div>
              </Link>

              <Link
                to="proyectos"
                onClick={() => mostrarPagina("transformProyectosValue")}
                style={linkStyle.styles}
              >
                <div className="elementsContainer__container">
                  <Icon
                    icon="ant-design:project-outlined"
                    className="elementsContainer__container--icon"
                    width="30"
                    height="30"
                  />
                  <h5 className="elementsContainer__container--title">
                    Proyectos
                  </h5>
                </div>
              </Link>
              <Link
                to="tecnologias"
                onClick={() => mostrarPagina("transformTecnologiasValue")}
                style={linkStyle.styles}
              >
                <div className="elementsContainer__container">
                  <Icon
                    icon="grommet-icons:technology"
                    className="elementsContainer__container--icon"
                    width="30"
                    height="30"
                  />
                  <h5 className="elementsContainer__container--title">
                    Tecnologias
                  </h5>
                </div>
              </Link>

              <a href="https://medium.com/@ramiro.al.alvarez" target="_blank"
                style={linkStyle.styles}
                rel="noopener noreferrer"
              >
                <div className="elementsContainer__container">
                  <Icon
                    icon="carbon:blog"
                    className="elementsContainer__container--icon"
                    width="30"
                    height="30"
                  />
                  <h5 className="elementsContainer__container--title"> Blog</h5>
                </div>
              </a>

              <Link
                to="contacto"
                onClick={() => mostrarPagina("transformContactoValue")}
                style={linkStyle.styles}
              >
                <div className="elementsContainer__container">
                  <Icon
                    icon="material-symbols:contact-page-rounded"
                    className="elementsContainer__container--icon"
                    width="30"
                    height="30"
                  />
                  <h5 className="elementsContainer__container--title">
                    {" "}
                    Contacto{" "}
                  </h5>
                </div>
              </Link>
            </div>
          </div>

        </BrowserRouter>
      </div>
    </>
  );
};

export default Menu;
