import React from "react";
import { graphql, Link } from "gatsby";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import Img from "gatsby-image";
import Layout from "../component/Layout";

const logo = require("../images/logo.png");

export const query = graphql`
  query($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
      title
      publishedDate(formatString: "Do MMMM, YYYY")
      featuredImage {
        fluid(maxWidth: 750) {
          ...GatsbyContentfulFluid
        }
      }
      body1 {
        body1
      }
    }
  }
`;

const BlogPost = (props) => {
  const options = {
    renderNode: {
      "embedded-asset-block": (node) => {
        const alt = node.data.target.fields.title["en-US"];
        const url = node.data.target.fields.file["en-US"].url;
        return <img alt={alt} src={url} />;
      },
    },
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
      <div className="content">
        {props.data.contentfulBlogPost.featuredImage && (
          <Img
            className="featured"
            fluid={props.data.contentfulBlogPost.featuredImage.fluid}
            alt={props.data.contentfulBlogPost.title}
          />
        )}
        <div className="SubContent">
          <h1>{props.data.contentfulBlogPost.title}</h1>
          <span className="meta">
            Posted on {props.data.contentfulBlogPost.publishedDate}
          </span>

          <p>{props.data.contentfulBlogPost.body1.body1}</p>
        </div>
        {/* {documentToReactComponents(props.data.contentfulBlogPost.body)} */}
      </div>
    </Layout>
  );
};

export default BlogPost;
