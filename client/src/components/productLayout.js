import React from "react";
import { graphql } from "gatsby";
import { MDXProvider } from "@mdx-js/react";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { Link } from "gatsby";
import Layout from "./layout";
import styled from "styled-components";
import { CartState } from "../context/cartContext";

const shortcodes = { Link };

export default function ProductTemplate({ data: { mdx } }) {
  const {
    state: { cart },
    dispatch,
  } = CartState();

  console.log(cart);
  return (
    <Layout>
      <LoginContainer>
        <h1>{mdx.frontmatter.productName}</h1>
        <MDXProvider components={shortcodes}>
          <MDXRenderer frontmatter={mdx.frontmatter}>{mdx.body}</MDXRenderer>
        </MDXProvider>
        <button
          onClick={() => {
            dispatch({
              type: "ADD_TO_CART",
              payload: mdx,
            });
          }}
        >
          add to cart
        </button>
        <button
          onClick={() => {
            dispatch({
              type: "REMOVE_FROM_CART",
              payload: mdx,
            });
          }}
        >
          remove from cart
        </button>
      </LoginContainer>
    </Layout>
  );
}

export const pageQuery = graphql`
  query BlogPostQuery($id: String) {
    mdx(id: { eq: $id }) {
      id
      body
      frontmatter {
        title
        productName
        price
        featuredProduct
        image {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    }
  }
`;

const LoginContainer = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  max-width: 100%;
  height: calc(100vh - 80px);
`;
