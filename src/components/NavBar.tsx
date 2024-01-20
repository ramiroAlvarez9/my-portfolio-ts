"use client";

export default function NavBar() {
  return (
    <>
      <nav className="nav flex justify-between items-center bg-orange-300 r  bg-transparent">
        
        <div className="nav__logo">
          LOGO
        </div>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="2.0"
          stroke="currentColor"
          className="w-6 h-6 nav__hamburguer"
        >
          
          <path d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
        </svg>
      
      </nav>
    </>
  );
}
