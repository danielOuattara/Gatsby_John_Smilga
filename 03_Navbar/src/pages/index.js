import React from "react";
import { Link } from "gatsby";

export default function Home() {
  return (
      <div>
         <h1>Hello world of Gatsby</h1>
         <nav>
            <Link to="/about">About |</Link>
            <Link to="/contact"> Contact |</Link>
          </nav>
          <br />
          <nav>
              <a href = "https://www.gatsbyjs.com/docs/how-to/">Gatsby How-to guides </a>
              <Link to="/docs/nextjs">Nextjs Docs |</Link>
              <Link to="/docs/reactjs">Reactjs Docs |</Link>
          </nav>
      </div>
  );
}
