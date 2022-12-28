import React from "react";
import { useGlobalState, setGlobalState } from "../global-state";
import { Link, BrowserRouter } from "react-router-dom";

const Blog = () => {
  let blogTranslateValue: number = useGlobalState("transformBlogValue")[0];

  const main__pages = {
    styles: {
      transform: `translate(${blogTranslateValue}%)`,
      transition: "0.5s",
      transitionDelay: "0.1s",
    },
  } as const;

  function ocultarBlog(): void {
    setGlobalState("transformMenuValue", 0);
    setGlobalState("transformBlogValue", 100);
  }

  return (
    <>
      <main className="main__pages" style={main__pages.styles}>
        <div className="main__pages--container">
          <h1>Blog</h1>
          <BrowserRouter>
            <Link to="/" onClick={ocultarBlog}>
              Ocultar blog
            </Link>
          </BrowserRouter>
        </div>
      </main>
    </>
  );
};

export default Blog;
