import { Link, BrowserRouter } from "react-router-dom";
import { Icon } from "@iconify/react";
import '../global.scss';

interface Props 
{

    ocultar : () => void

}


const BackButtonMenu = ({ocultar} : Props) => 
{
  const linkStyle = {
    styles: {
      textDecoration: "none",
      WebkitTapHighlightColor: "transparent",
    },
  } as const;

    return (
        <>
            <BrowserRouter>
                <Link to="/" onClick={ocultar} style={linkStyle.styles}>
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
        </>
    );
}

export default BackButtonMenu;
