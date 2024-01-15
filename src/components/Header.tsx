import '../global.scss';
import { Icon } from "@iconify/react";
import { BrowserRouter } from "react-router-dom";

interface Props {
    githubLink :  string;
    linkedinLink: string;
    instagramLink: string;
    cvLink: string;
}

const Header = ({ githubLink ,linkedinLink, instagramLink, cvLink }: Props) => {
  const linkStyle = {
    styles: {
      textDecoration: "none",
    },
  } as const;


  return (
    <>
      <header className="header">
        <span className="header__title">Ramiro Alejandro Alvarez</span>
        <BrowserRouter>
          <div className="header__iconContainer">
            <a
              rel="noopener noreferrer"
              href= {githubLink}
              target="_blank"
              style={linkStyle.styles}
            >
              <Icon
                icon="mdi:github"
                width="20"
                height="20"
                className="header__iconContainer--icon"
              />
            </a>
            <a
              rel="noopener noreferrer"
              href= {linkedinLink}
              target="_blank"
              style={linkStyle.styles}
            >
              <Icon
                icon="mdi:linkedin"
                width="20"
                height="20"
                className="header__iconContainer--icon"
              />
            </a>
            <a
              rel="noopener noreferrer"
              href= {instagramLink}
              target="_blank"
              style={linkStyle.styles}
            >
              <Icon
                icon="mdi:instagram"
                width="20"
                height="20"
                className="header__iconContainer--icon"
              />
            </a>
            <a 
                rel="noopener noreferrer" 
                href= {cvLink} 
                target="_blank"
            >
              <Icon
                icon="mdi:resume"
                color="#fafafa"
                width="20"
                height="20"
                className="header__iconContainer--icon"
              />
            </a>
          </div>
        </BrowserRouter>
      </header>
    </>
  );
};

export default Header;
