import React, { useRef, useState, useEffect } from "react";
import { graphql } from "gatsby";
import { MDXProvider } from "@mdx-js/react";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { Link } from "gatsby";
import { CartState } from "../context/cartContext";
import { Carousel } from "react-bootstrap";
import Layout from "./layout";
import styled from "styled-components";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const shortcodes = { Link };

export default function ProductTemplate({ data: { mdx } }) {
  const {
    state: { cart },
    dispatch,
  } = CartState();

  const {
    id,
    frontmatter: { productName, images },
  } = mdx;

  return (
    <Layout>
      <ProductContainer>
        <Carousel style={{ borderRadius: "15px" }} fade variant="dark">
          {images.map((image) => {
            const gatsbyImg = getImage(image);
            return (
              <Carousel.Item>
                <GatsbyImage
                  image={gatsbyImg}
                  style={{ height: "calc(100vh - 80px)" }}
                />
              </Carousel.Item>
            );
          })}
        </Carousel>

        {/* <MDXProvider components={shortcodes}>
          <MDXRenderer frontmatter={mdx.frontmatter}>{mdx.body}</MDXRenderer>
        </MDXProvider> */}
        {/* <button
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
        </button> */}
      </ProductContainer>
    </Layout>
  );
}

export const pageQuery = graphql`
  query product($id: String) {
    mdx(id: { eq: $id }) {
      id
      body
      frontmatter {
        title
        productName
        price
        featuredProduct
        featuredImage {
          childImageSharp {
            gatsbyImageData
          }
        }
        images {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    }
  }
`;

const ProductContainer = styled.main`
  display: grid;
  padding: 15px 50px;
  grid-template-columns: repeat(2, 1fr);
  width: 100vw;
  max-width: 100%;
`;
