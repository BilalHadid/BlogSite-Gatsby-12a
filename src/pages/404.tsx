import * as React from "react";
import { Link } from "gatsby";

const logo = require("../images/logo.png");
// styles
const pageStyles = {
  backgroundColor: "#f2f2ec",
  backgroundSize: "cover",
};
const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 320,
};

const paragraphStyles = {
  marginBottom: 48,
};
const codeStyles = {
  color: "#8A6534",
  padding: 4,
  backgroundColor: "#FFF4DB",
  fontSize: "1.25rem",
  borderRadius: 4,
};

// markup
const NotFoundPage = () => {
  return (
    <main style={pageStyles}>
      <title>Not found</title>
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
              <Link to="/404">Login</Link>
            </li>
          </ul>
        </div>
      </div>
      <div style={{ margin: "10%" }}>
        <h1 style={headingStyles}>Page not found</h1>
        <p style={paragraphStyles}>
          Sorry{" "}
          <span role="img" aria-label="Pensive emoji">
            😔
          </span>{" "}
          we couldn’t find what you were looking for.
          <br />
          {process.env.NODE_ENV === "development" ? (
            <>
              <br />
              Try creating a page in <code style={codeStyles}>src/pages/</code>.
              <br />
            </>
          ) : null}
          <br />
          <Link to="/">Go home</Link>.
        </p>
      </div>
    </main>
  );
};

export default NotFoundPage;
