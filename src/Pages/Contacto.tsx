import React from "react";
import "./estilos-generales.scss";
import { useGlobalState, setGlobalState } from "../global-state";
import { Link, BrowserRouter } from "react-router-dom";
import { Icon } from "@iconify/react";
import ContactoForm from '../components/ContactoForm';

const Contacto = () => {
  let contactoTranslateValue: number = useGlobalState(
    "transformContactoValue"
  )[0];

  const main__pages = {
    styles: {
      transform: `translate(${contactoTranslateValue}%)`,
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

  function ocultarContacto(): void {
    setGlobalState("transformMenuValue", 0);
    setGlobalState("transformContactoValue", 100);
  }

  return (
    <>
      <main className="main__pages" style={main__pages.styles}>
        <div className="main__pages--container">
          <BrowserRouter>
            <Link to="/" onClick={ocultarContacto} style={linkStyle.styles}>
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
          <ContactoForm />
        </div>

        

      </main>
    </>
  );
};

export default Contacto;
