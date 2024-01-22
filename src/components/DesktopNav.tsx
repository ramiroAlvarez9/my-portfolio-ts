import Logo  from '../img/logo.png';
import Link  from "next/link";
import Image from "next/image";

export default function DesktopNav() {
  return (
    <>
      <nav className="navDesktop">
          <div className="nav__container flex items-center justify-between">
          <Image
            src    = {Logo}
            width  = {75}
            height = {75}
            alt    = "logo"
          />

            <div className="nav__containerLinks">
              <Link className="nav__containerLinks--link" href="/">
                HOME
              </Link>
              <Link className="nav__containerLinks--link" href="#musicvideos">
                MUSIC VIDEOS
              </Link>
              <Link className="nav__containerLinks--link" href="#musicstore">
                MUSIC STORE
              </Link>
              <Link className="nav__containerLinks--link" href="#contact">
                CONTACT
              </Link>
              <Link className="nav__containerLinks--link" href="#footer">
                FOOTER
              </Link>
            </div>
          </div>
      </nav>
    </>
  );
}
