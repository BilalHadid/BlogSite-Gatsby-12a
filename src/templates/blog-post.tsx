import React from "react";
import { graphql, Link } from "gatsby";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import Img from "gatsby-image";
import Layout from "../component/Layout";

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
      <Link to="/blog/">Visit the Blog Page</Link>
      <div className="content">
        <h1>{props.data.contentfulBlogPost.title}</h1>
        <span className="meta">
          Posted on {props.data.contentfulBlogPost.publishedDate}
        </span>
        {props.data.contentfulBlogPost.featuredImage && (
          <Img
            className="featured"
            fluid={props.data.contentfulBlogPost.featuredImage.fluid}
            alt={props.data.contentfulBlogPost.title}
          />
        )}
        <h1>It is a long established fact a reader be distracted</h1>
        <p>{props.data.contentfulBlogPost.body1.body1}</p>
        {/* {documentToReactComponents(props.data.contentfulBlogPost.body)} */}
      </div>
    </Layout>
  );
};

export default BlogPost;
