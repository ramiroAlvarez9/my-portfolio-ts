import "../global.scss";

interface Props {
  projects: any;
}

const ProyectosGallery = ({ projects }: Props) => {
  const linkStyle = {
    styles: {
      textDecoration: "none",
      WebkitTapHighlightColor: "transparent",
    },
  } as const;

  return (
    <>
      <div className="info__Container--gallery">
        {projects[0] === undefined ? (
          <h1>nada</h1>
        ) : (
          projects.map((element: any) => {
            return (
              <a
                href={element["2"]}
                target="_blank"
                style={linkStyle.styles}
                className="info__Container--gallery--a"
                rel="noopener noreferrer"
              >
                <div className="info__Container--gallery--imgContainer">
                  <img
                    className="info__Container--gallery--img"
                    src={element["3"]}
                    alt="src"
                  />
                  <h3 className="info__Container--gallery--title">
                    {element["1"]}
                  </h3>
                </div>
              </a>
            );
          })
        )}
      </div>
    </>
  );
};

export default ProyectosGallery;
