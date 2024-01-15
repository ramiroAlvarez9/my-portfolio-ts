import { useState } from "react";
import '../global.scss';
import { useGlobalState, setGlobalState } from "../global-state";
import { Icon } from "@iconify/react";
import ContactoForm from '../components/ContactoForm';
import BackButtonMenu from "../components/BackButtonMenu";

const Contacto = () => {
  
  const [mensajeEnviado, setMensajeEnviado] = useState<boolean>(false);

  let contactoTranslateValue: number = useGlobalState("transformContactoValue")[0];

  const main__pages = 
  {
    styles: {
      transform: `translate(${contactoTranslateValue}%)`,
      transition: "0.5s",
      transitionDelay: "0.1s",
    },
  } as const;


  function ocultarContacto(): void 
  {
    if (window.screen.width < 1200) 
    {
      setGlobalState("transformMenuValue", 0);
      setGlobalState("transformContactoValue", 100);
    }
    else 
    {
      setGlobalState("transformMenuValueDesktop", 0);
      setGlobalState("transformContactoValue", 100);
    }
  }

  function mostrarCartelDeMensajeEnviado(): void 
  {

    setMensajeEnviado(true);

  }

  return (
    <>
      <section className="main__pages" style={main__pages.styles}>
        <div className="main__pages--container">
          <BackButtonMenu
            ocultar={ocultarContacto}

          />
          {
            mensajeEnviado ?

              <div className="mensaje__container">
                <Icon icon="mdi:message-check-outline" color="#fafafa" width="60" height="60" />
                <h1 className="mensaje__container--title">Mensaje enviado con exito</h1>
              </div>

              :

              <div className="info__Container contacto">


                <div className="contacto__container--info">

                  <h1 className="info__Container--title" id="tecnologia__title">
                    Contacto
                  </h1>
                  <p className="info__Container--paragraph">
                    Podemos contactarnos.<br />
                    Recordá dejar tu mail en el campo correspondiente, <br />
                    así, en la brevedad, <br /> podré responderte.
                  </p>

                </div>
                <div className="contacto__container--form">
                  
                  <ContactoForm

                    mostrarCartelDeMensajeEnviado={mostrarCartelDeMensajeEnviado}

                  />
                </div>

              </div>

          }

        </div>
      </section>
    </>
  );
};

export default Contacto;
