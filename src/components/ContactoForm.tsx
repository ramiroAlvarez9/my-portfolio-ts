import React from "react";
import EmailJS from "@emailjs/browser";


const ContactoForm = () => {

  const sendEmail = (e:any) => {
    e.preventDefault();

    EmailJS.sendForm(
      "service_abf2ili",
      "template_oo7ns7b",
      e.target,
      "6AlvGGlMaW70ZKmsz"
    ).then(
      (result : any) => {
        console.log(result);
      },
      (error : any) => {
        console.log(error);
      }
    ); /* 
          .then(() => {
              setMessage({
                text: "Mensaje enviado con exito",
                type: "message message--success",
              })
              e.target.reset() // Clear HTML Form
            })
            .catch(() => {
              setMessage({
                text: "Error al enviar el mensaje",
                type: "message message--error",
              })
            })
            */
  };
  return (
    <>
      <div className="container">
        <main className="main">
          <section className="section section__contact">
            <h1 className="section__subtitle">Contacto</h1>

            <form className="form" onSubmit={sendEmail}>
              <input type="text" name="nombre" placeholder="Nombre" />
              <input type="email" name="email" placeholder="Email" />
              <input type="text" name="asunto" placeholder="Asunto" />
              <textarea
                className="textarea"
                name="mensaje"
                placeholder="Mensaje"
              ></textarea>

              <input
                type="submit"
                name="enviar"
                className="button"
                value="Send Message"
              />
            </form>
          </section>
        </main>
      </div>
    </>
  );
};



export default ContactoForm;