import * as React from "react";
import path from "path";
import { GatsbyNode } from "gatsby";

export const createPages: GatsbyNode["createPages"] = async ({
  graphql,
  actions,
}) => {
  const { createPage } = actions;
  const result: {
    error?: any;
    data?: { allContentfulItemProject: { nodes: any[] } };
  } = await graphql(`
    query GatsbyNodeQuery {
      allContentfulItemProject {
        nodes {
          id
          title
          title_en
          brand
          description {
            childMarkdownRemark {
              excerpt(pruneLength: 300)
              html
            }
          }
          heroImage {
            gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
          }
          types
          bgColor
          gallery {
            images {
              gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
            }
          }
        }
      }
    }
  `);
  result.data?.allContentfulItemProject.nodes.forEach((node: any) => {
    const slug = encodeURI(node.title_en.toLowerCase().replace(/\s/g, "-"));
    createPage({
      path: `/project/${slug}`,
      component: path.resolve("./src/templates/project.tsx"),
      context: {
        title: node.title,
        title_en: node.title_en,
        brand: node.brand,
        description: node.description.childMarkdownRemark,
        heroImage: node.heroImage.gatsbyImageData,
        types: node.types,
        bgColor: node.bgColor,
        gallery: node.gallery,
      },
    });
  });
};
