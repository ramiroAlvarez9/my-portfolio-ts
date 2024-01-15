
import proyecto1 from "../assets/1.png";
import proyecto2 from "../assets/2.png";
import proyecto3 from "../assets/3.png";
import proyecto4 from "../assets/4.png";
import proyecto5 from "../assets/5.png";
import proyecto6 from "../assets/6.png";
import '../global.scss';


interface Props {
  projects : object;

}

const ProyectosGallery = () => {
  
  const linkStyle = {
    styles: {
      textDecoration: "none",
      WebkitTapHighlightColor: "transparent",
    },
  } as const;

  return (
    <>
      <div className="info__Container--gallery">
        <a
          href="https://chronosba.com/"
          target="_blank"
          style={linkStyle.styles}
          className = "info__Container--gallery--a"
          rel="noopener noreferrer"
        >
          <div className="info__Container--gallery--imgContainer">
            <img
              className="info__Container--gallery--img"
              src={proyecto1}
              alt="src"
            />
            <h3 className="info__Container--gallery--title">
              Cookies ChronosBA
            </h3>
          </div>
        </a>

        <a
          href="https://aura-music.netlify.app/"
          target="_blank"
          style={linkStyle.styles}
          className = "info__Container--gallery--a"
          rel="noopener noreferrer"
        >
          <div className="info__Container--gallery--imgContainer">
            <img
              className="info__Container--gallery--img"
              src={proyecto2}
              alt="src"
            />
            <h3 className="info__Container--gallery--title">AuraMusic app</h3>
          </div>
        </a>

        <a
          href="https://keen-fermi-4af4db.netlify.app/"
          target="_blank"
          style={linkStyle.styles}
          className = "info__Container--gallery--a"
          rel="noopener noreferrer"
        >
          <div className="info__Container--gallery--imgContainer">
            <img
              className="info__Container--gallery--img"
              src={proyecto4}
              alt="src"
            />
            <h3 className="info__Container--gallery--title">
              Book Launcher app
            </h3>
          </div>
        </a>

        <a
          href="https://mis-tareas-withjs.netlify.app/"
          target="_blank"
          style={linkStyle.styles}
          className = "info__Container--gallery--a"
          rel="noopener noreferrer"
        >
          <div className="info__Container--gallery--imgContainer">
            <img
              className="info__Container--gallery--img"
              src={proyecto3}
              alt="src"
            />
            <h3 className="info__Container--gallery--title">TodoList app</h3>
          </div>
        </a>

        <a
          href="https://github.com/ramiroAlvarez9/txt-generator-electronjs"
          target="_blank"
          style={linkStyle.styles}
          className = "info__Container--gallery--a"
          rel="noopener noreferrer"
        >
          <div className="info__Container--gallery--imgContainer">
            <img
              className="info__Container--gallery--img"
              src={proyecto5}
              alt="src"
            />
            <h3 className="info__Container--gallery--title">
              txt.generator .exe
            </h3>
          </div>
        </a>

        <a
          href="https://marbp2021.github.io/the-paper-news/"
          target="_blank"
          style={linkStyle.styles}
          className = "info__Container--gallery--a"
          rel="noopener noreferrer"
        >
          <div className="info__Container--gallery--imgContainer">
            <img
              className="info__Container--gallery--img"
              src={proyecto6}
              alt="src"
            />
            <h3 className="info__Container--gallery--title">
              The PaperNews app
            </h3>
          </div>
        </a>
      </div>
    </>
  );
};

export default ProyectosGallery;
