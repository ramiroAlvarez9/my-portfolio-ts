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
                INICIO
              </Link>
              <Link className="nav__containerLinks--link" href="#ultimos-lanzamientos">
                ULTIMOS LANZAMIENTOS
              </Link>
              <Link className="nav__containerLinks--link" href="#tienda">
                TIENDA DE BEATS 
              </Link>
              <Link className="nav__containerLinks--link" href="#contacto">
                CONTACTO
              </Link>
            </div>
          </div>
      </nav>
    </>
  );
}
