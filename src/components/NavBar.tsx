"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function NavBar() {


  const [actualWidthSize, setWidthSize] = useState<number>(0);
  useEffect( () => setWidthSize(window.screen.width) , [actualWidthSize]) 
  
  return (
    
    
      (actualWidthSize > 1200)? 
      
        <nav className="nav flex justify-between items-center bg-orange-300 bg-transparent">
          otro nav
        </nav>
      
      :
      <>
      <nav className="nav flex justify-between items-center bg-orange-300 bg-transparent">
        
        <h1 className="nav__logo">LOGO</h1>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="2.0"
          stroke="currentColor"
          className="w-6 h-6 nav__hamburguer"
        >
          <path d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
        </svg>

       
        <Link href="#contact" > contact </Link>
      </nav>

      <div className="slide__itemsmenu">

     





      </div>

      </>
    
      
  );
}
