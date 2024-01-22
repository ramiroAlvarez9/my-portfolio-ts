"use client";
import { useState, useEffect } from "react";
import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";



export default function NavBar() {


  return (
  
  <>

    <MobileNav />
    <DesktopNav />

  </>
    
  );
}
