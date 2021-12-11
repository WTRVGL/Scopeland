const path = require("path");

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions;

  const result = await graphql(`
    query {
      allMdx {
        edges {
          node {
            slug
            id
          }
        }
      }
    }
  `);

  if (result.errors) {
    reporter.panicOnBuild('🚨  ERROR: Loading "createPages" query');
  }
  // Create blog post pages.
  const products = result.data.allMdx.edges;

  products.forEach(({ node }, index) => {
    createPage({
      path: `/products/${node.slug}`,
      // This component will wrap our MDX content
      component: path.resolve(`./src/components/productLayout.js`),
      // You can use the values in this context in
      // our page layout component
      context: { id: node.id },
    });
  });
};
