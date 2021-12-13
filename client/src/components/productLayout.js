import React from "react";
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
    frontmatter: { productName, images, price, productCategory, productType },
  } = mdx;

  return (
    <Layout>
      <ProductContainer>
        <StyledCarousel fade variant="dark">
          {images.map((image) => {
            const gatsbyImg = getImage(image);
            return (
              <Carousel.Item>
                <GatsbyImage image={gatsbyImg} />
              </Carousel.Item>
            );
          })}
        </StyledCarousel>

        <DescriptionSection>
          <h1>{productName}</h1>
          <h5>€{price}</h5>
        </DescriptionSection>

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
      </ProductContainer>
    </Layout>
  );
}

const ProductContainer = styled.main`
  display: grid;
  padding: 15px 50px;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 50px;
  width: 100vw;
  max-width: 100%;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(2, 1fr);
  }
`;

const StyledCarousel = styled(Carousel)`
  border-radius: 5px;
  overflow: hidden;
`;

const DescriptionSection = styled.section`
  padding: 25px 50px;
  display: flex;
  flex-direction: column;
`;

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
        productCategory
        productType
        secondaryProductType
        featuredImage {
          childImageSharp {
            gatsbyImageData
          }
        }
        images {
          childImageSharp {
            gatsbyImageData(
              height: 800
              width: 800
              placeholder: BLURRED
              transformOptions: { cropFocus: CENTER }
            )
          }
        }
      }
    }
  }
`;
