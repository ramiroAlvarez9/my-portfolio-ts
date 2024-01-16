import EmailJS from "@emailjs/browser";
import '../global.scss';
import { useState } from 'react';

interface Props 
{

  mostrarCartelDeMensajeEnviado: () => void;

}

const ContactoForm = ({ mostrarCartelDeMensajeEnviado }: Props) => {

  const [opacityValue, setOpacityValue] = useState<number>(100);

  const sendEmail = (e: any) => {
    e.preventDefault();
    setOpacityValue(50)


    EmailJS.sendForm(
      "service_abf2ili",
      "template_oo7ns7b",
      e.target,
      "6AlvGGlMaW70ZKmsz"

    ).then(
      (result: any) => {
        mostrarCartelDeMensajeEnviado();
        console.log(result.target)
      },
      (error: any) => {
        console.log(error);
      }
    );
  };

  const formStyle = {
    styles: {
      opacity: `${opacityValue}%`,

    },
  } as const;

  return (
    <>

      <section className="section" style={formStyle.styles} >
        <h3 className="contacto__container--form--title"></h3>
        <form className="form" onSubmit={sendEmail}>

          <input type="text" name="nombre" placeholder="Nombre" className="form__inputs" />
          <input type="email" name="email" placeholder="Email" className="form__inputs" />
          <input type="text" name="asunto" placeholder="Asunto" className="form__inputs" />
          <textarea
            className="form__textarea"
            name="mensaje"
            placeholder="Mensaje"
          ></textarea>

          <div className="form__submitContainer">
            <input
              type="submit"
              name="enviar"
              value="Enviar"
              className="form__submit"
            />
          </div>
        </form>
      </section>



    </>

  );
};



export default ContactoForm;