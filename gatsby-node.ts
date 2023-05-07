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
          description {
            description
          }
          heroImage {
            gatsbyImageData(width: 1000, placeholder: BLURRED)
          }
          types
          bgColor
        }
      }
    }
  `);
  result.data?.allContentfulItemProject.nodes.forEach((node: any) => {
    createPage({
      path: `/project/${node.title}`,
      component: path.resolve("./src/templates/project.tsx"),
      context: {
        title: node.title,
        description: node.description.description,
        heroImage: node.heroImage.gatsbyImageData,
        types: node.types,
        bgColor: node.bgColor,
      },
    });
  });
};
