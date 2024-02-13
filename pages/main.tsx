"use client";
import NavBar from "@/components/NavBar";
import { Button } from "@mui/material";
import Link from "next/link"; 

export default function Main() {
  return (
    <>
      <NavBar />

      <section id="home">

        <div className="home__container" >

          <h1 className="home__container--title items" > GOLDEN <br /> DRAGON BEATS </h1>

          <p  className="home__container--title--paragraph items">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Eius
            maiores id ad.
          </p>
          <Link href= '#tienda' className= 'home__container--link'>
          <Button 
            variant="outlined" 
            className="items"
            sx= 
              {{ 
                   borderRadius: '20px', 
                   color : '#fac959', 
                   borderColor: '#fac959'
              }}
          >
            
            COMPRAR BEATS
            
          </Button>
          </Link>
          
        </div>   

        
      </section>
    </>
  );
}
