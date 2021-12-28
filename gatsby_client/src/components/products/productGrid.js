import { Link } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import React from "react";
import styled from "styled-components";

const ProductGrid = ({ products }) => {
  return (
    <Grid>
      {products.map(
        ({
          node: {
            slug,
            id,
            frontmatter: { featuredImage, productName, price },
          },
        }) => {
          console.log(featuredImage.childrenImageSharp[0].gatsbyImageData);
          return (
            <Card key={id}>
              <Link to={`/products/${slug}`}>
                <GatsbyImage
                  image={featuredImage.childrenImageSharp[0].gatsbyImageData}
                />
              </Link>
              <ProductDescription>
                <h5>{productName}</h5>
                <h6>€{price}</h6>
              </ProductDescription>
            </Card>
          );
        }
      )}
    </Grid>
  );
};
export default ProductGrid;

const Grid = styled.div`
  display: grid;
  column-gap: 15px;
  row-gap: 15px;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));

  @media screen and (max-width: 425px) {
    grid-template-columns: 1fr;
  }
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
`;

const ProductDescription = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 25px;
`;
