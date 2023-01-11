import "./index.scss";
import "../Pages/estilos-generales.scss";
import Inicio      from "../Pages/Inicio";
import Proyectos   from "../Pages/Proyectos";
import Tecnologias from "../Pages/Tecnologias";
import Contacto    from "../Pages/Contacto";



const Index = () => {
  return (
    <>
      <main className="main">
      
        <Inicio/>
        <Proyectos />
        <Tecnologias/>
        <Contacto/>
      
      </main>
    </>
  );
};

export default Index;
