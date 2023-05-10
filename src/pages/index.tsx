import * as React from "react";
import { HeadFC, PageProps, graphql } from "gatsby";
import Layout from "../components/Layout";
import SEO from "../components/Seo";
import { GatsbyImage } from "gatsby-plugin-image";

const IndexPage = ({ data }: PageProps<Queries.IndexPageQuery>) => (
  <Layout>
    <SEO />
    <main>
      <section className="px-6 sm:px-16 pt-20 pb-8 min-h-screen flex justify-center">
        <div className="xl:max-w-[1280px] w-full h-full">
          <div className="flex flex-col gap-[15px]">
            {data?.contentfulLayoutHome?.gallery &&
              data?.contentfulLayoutHome?.gallery?.map((row: any) => {
                const colTemplate = row.widthRatio
                  .split(" ")
                  .map((col: string) => `${col}fr`)
                  .join("_");
                return (
                  <div
                    className={`grid gap-[15px] sm:grid-cols-[${colTemplate}]`}
                  >
                    {row.images.map((image: any) => (
                      <GatsbyImage
                        image={image.gatsbyImageData}
                        alt={image.title}
                        className="object-cover"
                        style={{
                          height: `${row.height}vh`,
                        }}
                      />
                    ))}
                  </div>
                );
              })}
          </div>
        </div>
      </section>
    </main>
  </Layout>
);

export default IndexPage;

export const query = graphql`
  query IndexPage {
    contentfulLayoutHome {
      title
      gallery {
        images {
          title
          gatsbyImageData(placeholder: BLURRED, layout: FULL_WIDTH)
        }
        widthRatio
        height
      }
    }
  }
`;
