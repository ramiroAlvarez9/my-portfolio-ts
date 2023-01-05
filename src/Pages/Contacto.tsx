import { useState } from "react";
import "./estilos-generales.scss";
import { useGlobalState, setGlobalState } from "../global-state";
import { Link, BrowserRouter } from "react-router-dom";
import { Icon } from "@iconify/react";
import ContactoForm from '../components/ContactoForm';
import './contacto.scss';

const Contacto = () => {

  let contactoTranslateValue: number = useGlobalState(
    "transformContactoValue"
  )[0];

  const [mensajeEnviado, setMensajeEnviado] = useState<boolean>(false);

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

  function mostrarCartelDeMensajeEnviado(): void {

    setMensajeEnviado(true);

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
          {
            mensajeEnviado ?

              <div className="mensaje__container">
                <Icon icon="mdi:message-check-outline" color="#fafafa" width="60" height="60" />
                <h1 className="mensaje__container--title">Mensaje enviado con exito</h1>
              </div>

              :

              <div className="info__Container">
                <h1 className="info__Container--title" id="tecnologia__title">
                  Contacto
                </h1>
                <p className="info__Container--paragraph">
                  Podemos contactarnos.<br />
                  Recordá dejar tu mail en el campo correspondiente, <br />
                  así, en la brevedad, <br /> podré responderte.
                </p>

                <ContactoForm

                  mostrarCartelDeMensajeEnviado={mostrarCartelDeMensajeEnviado}

                />


              </div>

          }

        </div>
      </main>
    </>
  );
};

export default Contacto;
