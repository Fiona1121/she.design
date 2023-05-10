import * as React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import SEO from "../components/Seo";
import { GatsbyImage } from "gatsby-plugin-image";
import Fade from "react-reveal/Fade";

type IndexPageProps = {
  data: {
    contentfulLayoutHome: {
      title: string;
      primaryProject: {
        id: string;
        title: string;
        title_en: string;
        heroImage: {
          gatsbyImageData: any;
        };
      };
    };
    allContentfulItemProject: {
      nodes: {
        id: string;
        title: string;
        title_en: string;
        heroImage: {
          gatsbyImageData: any;
        };
      }[];
    };
  };
};

const IndexPage = ({ data }: IndexPageProps) => (
  <Layout>
    <SEO />
    <main>
      <section className="px-6 sm:px-16 pt-20 pb-8 min-h-screen flex justify-center">
        <div className="xl:max-w-[1280px] w-full h-full">
          <div className="flex flex-col gap-[15px]">
            <div
              className={`grid gap-[15px] relative sm:grid-cols-1 cursor-pointer`}
              onClick={() =>
                (window.location.href = `/project/${encodeURI(
                  data?.contentfulLayoutHome?.primaryProject?.title_en
                    ?.toLowerCase()
                    .replace(/\s/g, "-")
                )}`)
              }
            >
              <Fade bottom>
                <GatsbyImage
                  image={
                    data?.contentfulLayoutHome?.primaryProject?.heroImage
                      ?.gatsbyImageData
                  }
                  alt={
                    data?.contentfulLayoutHome?.primaryProject?.title ||
                    "primary-project"
                  }
                  className="object-cover"
                />
              </Fade>
              <div
                className={`p-6 absolute top-0 bottom-0 left-0 right-0 w-full h-full opacity-0 ease-in-out duration-300 bg-black hover:opacity-80`}
              >
                <p className="text-[22px] font-libre">
                  {data?.contentfulLayoutHome?.primaryProject?.title}
                </p>
              </div>
            </div>
            {/* {data?.contentfulLayoutHome?.gallery &&
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
              })} */}
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
      primaryProject {
        id
        title
        title_en
        heroImage {
          gatsbyImageData(width: 1280, placeholder: BLURRED)
        }
      }
    }
    allContentfulItemProject {
      nodes {
        id
        title
        title_en
        heroImage {
          gatsbyImageData(width: 1280, placeholder: BLURRED)
        }
      }
    }
  }
`;
