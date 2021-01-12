import React, { useState } from "react";
import { useStaticQuery, graphql, Link } from "gatsby";
import Img from "gatsby-image";
import Layout from "../component/Layout";
import { auth, provider } from "../utils/Signup";

const logo = require("../images/logo.png");
const Blog: React.FC<any> = () => {
  const data = useStaticQuery(
    graphql`
      query {
        allContentfulBlogPost(sort: { fields: contentful_id, order: DESC }) {
          edges {
            node {
              title
              slug
              id
              publishedDate(formatString: "DD MMMM, YYYY")
              featuredImage {
                fluid(maxWidth: 250) {
                  ...GatsbyContentfulFluid
                }
              }
              excerpt {
                excerpt
              }
            }
          }
        }
      }
    `
  );
  const [user, setUser] = useState("");
  const signIn = () => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        const data = result.user.displayName;
        setUser(data);
      })
      .catch((error) => console.log(error));
  };
  return (
    <Layout>
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

      <ul className="posts">
        {data.allContentfulBlogPost.edges.map((edge) => {
          return (
            <li className="post" key={edge.node.id}>
              <h2>
                <Link to="/blog">{edge.node.title}</Link>
              </h2>
              <div className="meta">
                <span>Posted on {edge.node.publishedDate}</span>
              </div>
              {edge.node.featuredImage && (
                <Img
                  className="featured2"
                  fluid={edge.node.featuredImage.fluid}
                  alt={edge.node.title}
                />
              )}
              <p className="excerpt">{edge.node.excerpt.excerpt}</p>
              <div className="button">
                {user > "" ? (
                  <Link to={`/blog/${edge.node.slug}/`}>Read More</Link>
                ) : (
                  <button className="SignIn" onClick={signIn}>
                    SignIn For Read More
                  </button>
                )}
              </div>
            </li>
          );
        })}
      </ul>
    </Layout>
  );
};

export default Blog;
