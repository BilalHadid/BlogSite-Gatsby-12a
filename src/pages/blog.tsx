import React from "react";
import { useStaticQuery, graphql, Link } from "gatsby";
import Img from "gatsby-image";
import Layout from "../component/Layout";

const Blog = () => {
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
  return (
    <Layout>
      <p>
        <Link to="/">Go back to the homepage</Link>
      </p>
      <ul className="posts">
        {data.allContentfulBlogPost.edges.map((edge) => {
          return (
            <li className="post" key={edge.node.id}>
              <h2>
                <Link to={`/blog/${edge.node.slug}/`}>{edge.node.title}</Link>
              </h2>
              <div className="meta">
                <span>Posted on {edge.node.publishedDate}</span>
              </div>
              {edge.node.featuredImage && (
                <Img
                  className="featured"
                  fluid={edge.node.featuredImage.fluid}
                  alt={edge.node.title}
                />
              )}
              <p className="excerpt">{edge.node.excerpt.excerpt}</p>
              <div className="button">
                <Link to={`/blog/${edge.node.slug}/`}>Read More</Link>
              </div>
            </li>
          );
        })}
      </ul>
    </Layout>
  );
};

export default Blog;
