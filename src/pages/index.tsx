import * as React from "react";
import "./Main.css";
// import * as logo from "../images/logo.png";
import { Link } from "gatsby";
import Layout from "../component/Layout";

// styles
const logo = require("../images/logo.png");
const pageStyles = {};
const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 320,
};

// markup
const IndexPage = () => {
  return (
    <Layout>
      <main style={pageStyles} className="Home">
        <title>Blog Site</title>
        <div className="Main">
          {/* <h1 style={headingStyles}>Congratulations</h1> */}
          <img
            src={logo}
            alt=""
            style={{
              height: "100px",
              width: "100px",
              marginTop: "-25px",
              cursor: "pointer",
            }}
          />
          <div className="mainLink">
            <ul className="cl-effect-1">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/blog">Blog</Link>
              </li>
              <li>
                <Link to="/404">Contact</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mainWeb">
          <p style={{ color: "lightslategrey" }}>Hello Welcome to !</p>
          <h1>Readit blog</h1>
          <p style={{ color: "lightslategrey" }}>
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts. Separated they
            live in Bookmarksgrove right at the coast of the Semantics, a large
            language ocean.
          </p>
        </div>
        {/* <Link to="/product/">Visit the Blog Page</Link> */}
      </main>
    </Layout>
  );
};

export default IndexPage;
