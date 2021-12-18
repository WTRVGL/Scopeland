import React, { useState } from "react";
import Layout from "./layout";
import styled from "styled-components";
import { graphql } from "gatsby";
import { MDXProvider } from "@mdx-js/react";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { Carousel } from "react-bootstrap";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { CartState } from "../context/cartContext";
import { CartModalState } from "../context/cartModalContext";

export default function ProductTemplate({ data: { mdx } }) {
  const {
    state: { cart },
    dispatch,
  } = CartState();

  const { modalVisibility, setModalVisibility } = CartModalState();
  const [productQuantity, setProductQuantity] = useState(1);

  const {
    body,
    id,
    frontmatter: { productName, images, price, productCategory, productType },
  } = mdx;

  console.log(mdx);
  const addProduct = () => {
    dispatch({
      type: "ADD_TO_CART",
      payload: { product: mdx, quantity: 1 },
    });
    setModalVisibility(true);
  };

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
          <StyledButton onClick={addProduct}>add to cart</StyledButton>
          <MDXRenderer>{body}</MDXRenderer>
        </DescriptionSection>
      </ProductContainer>
    </Layout>
  );
}

const StyledButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  background-color: #e68845;
  width: 150px;
  height: 50px;
  border-radius: 5px;
  border: 0;
  font-weight: bolder;
  color: white;
  margin: 15px 5px;
`;

const ProductContainer = styled.main`
  display: grid;
  padding: 15px 50px;
  grid-template-columns: repeat(2, 1fr);
  grid-auto-rows: min-content;
  column-gap: 50px;
  width: 100vw;
  max-width: 100%;

  @media screen and (max-width: 992px) {
    grid-template-columns: 1fr;
    grid-auto-rows: min-content;
    column-gap: 5px;
    padding: 15px 10px;
  }
`;

const StyledCarousel = styled(Carousel)`
  border-radius: 5px;
  height: 50vw;
  width: 100%;
  @media screen and (max-width: 992px) {
    grid-row: 1;
    height: 100%;
  }
`;

const DescriptionSection = styled.section`
  padding: 25px 50px;
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 992px) {
    grid-row: 2;
    padding: 25px 5px;
  }
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
              placeholder: BLURRED
              height: 1000
              width: 1000
              transformOptions: { cropFocus: CENTER }
            )
          }
        }
      }
    }
  }
`;
