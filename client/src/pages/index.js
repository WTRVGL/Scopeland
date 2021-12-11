import { graphql } from "gatsby";
import * as React from "react";
import AboutSection from "../components/aboutSection";
import { FeaturedProductSection } from "../components/featuredProductSection";
import { Hero } from "../components/hero";
import Layout from "../components/layout";

const IndexPage = ({ data }) => {
  const products = data.allMdx.edges;
  console.log(localStorage);

  return (
    <Layout>
      <Hero
        title="Wij brengen het universum naar uw tuin"
        subtitle="Astronomie binnen handbereik voor iedereen"
      />

      <AboutSection
        title="Waarom Scopeland?"
        description="Scopeland levert een unieke shopervaring in België met ongeongeëvenaarde klantenservice."
      />
      <FeaturedProductSection
        title="Astronomisch coole producten"
        products={products}
      />
    </Layout>
  );
};

export default IndexPage;

export const pageQuery = graphql`
  query fetchProductQuery {
    allMdx {
      edges {
        node {
          id
          slug
          frontmatter {
            featuredProduct
            price
            productName
            title
            image {
              childImageSharp {
                gatsbyImageData
              }
            }
          }
        }
      }
    }
  }
`;
