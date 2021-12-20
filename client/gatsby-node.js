const path = require("path");

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions;

  const result = await graphql(`
    query {
      allMdx {
        distinct(field: frontmatter___productCategory)
        edges {
          node {
            frontmatter {
              productType
            }
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
      component: path.resolve(`./src/components/productTemplate.js`),
      context: { id: node.id },
    });
  });

  const categories = result.data.allMdx.distinct

  categories.forEach((category) => {
    const formattedCategory = category.toLowerCase();
    createPage({
      path: `/shop/${formattedCategory}`,
      component: path.resolve(`./src/components/categoryTemplate.js`),
      context: { category },
    });
  });
};
