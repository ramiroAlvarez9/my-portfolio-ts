import Button from "@mui/material/Button";
import { TelegramIcon } from "@/components/Icons/TelegramIcon";
import Image from "next/image";
import Logo from "../src/img/logo.png";

export default function Contact() {
  return (
    <>
      <section id="contacto">
        
        <div className="contacto__container">
          <p> Mantengamosnos en contacto: </p>

          <a
            href="https://www.youtube.com/@GoldenDragonBeats"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              variant="contained"
              className="items"
              startIcon={<TelegramIcon />}
              sx={{
                borderRadius: "20px",
                color: "#ffffff",
                borderColor: "#fac959",
                backgroundColor: "#0088cc",
                marginTop: 5%,
                
              }}
            >
              ENVIA UN MENSAJE
            </Button>
          </a>

          <Image src={Logo} width={75} height={75} alt="logo" />
        
        </div>
      </section>
    </>
  );
}
