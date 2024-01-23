"use client";
import Image from "next/image";
import Logo  from '../img/logo.png';
import { useState, useEffect } from "react";
import Link from "next/link";
import ChevronRightIcon from "./ChevronRightIcon";

export default function MobileNav() 
{

  const [actualWidthSize, setWidthSize] = useState<number>(0);
  const [slideMenuPositionX, setSlideMenuPositionX] = useState<number>(100);
  
  useEffect(() => setWidthSize(window.screen.width), [actualWidthSize]);

  const openTheMenu = () => 
  {
    if (actualWidthSize >= 768) 
    { setSlideMenuPositionX(50) } 
    else 
    { setSlideMenuPositionX(10) }
  };
  const closeTheMenu = () => setSlideMenuPositionX(100);

  return (
    <>
      <nav className="nav flex justify-between items-center bg-orange-300 bg-transparent">
        <Image
          src= {Logo}
          width={75}
          height={75}
          alt="logo"
        />

        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="2.0"
          stroke="currentColor"
          className="w-6 h-6 nav__hamburguer"
          onClick={openTheMenu}
        >
          <path d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
        </svg>
      </nav>

      <div
        className="slide"
        style={{ transform: `translate(${slideMenuPositionX}%)` }}
      >
        <div className="slide__closeMenuContainer flex border-gray-100 justify-start items-center justify-end">
          <svg
            //width and height -- icon
            style={{
              width: "35px",
              height: "35px",
              marginRight: `${slideMenuPositionX + 5}%`,
            }}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 closeIcon"
            onClick={closeTheMenu}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            />
          </svg>
        </div>

        <div className="slide__logo">DRAGON BEATS</div>

        <div className="slide__containerLinks ">
          <Link className="slide__links" href="/">
            <ChevronRightIcon />
            HOME
          </Link>
          <Link className="slide__links" href="#musicvideos">
            <ChevronRightIcon />
            MUSIC VIDEOS
          </Link>
          <Link className="slide__links" href="#musicstore">
            <ChevronRightIcon />
            MUSIC STORE
          </Link>
          <Link className="slide__links" href="#contact">
            <ChevronRightIcon />
            CONTACT
          </Link>
          <Link className="slide__links" href="#footer">
            <ChevronRightIcon />
            FOOTER
          </Link>
        </div>
      </div>
    </>
  );
}
