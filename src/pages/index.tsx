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

const gridSpanConfig = [4, 4, 4, 6, 6, 12];
const gridHeightConfig = [30, 30, 30, 40, 40, 70];

const IndexPage = ({ data }: IndexPageProps) => {
  React.useEffect(() => {
    window.scroll({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <Layout>
      <SEO />
      <main>
        <section className="px-6 sm:px-16 pt-20 pb-8 min-h-screen flex justify-center">
          <div className="xl:max-w-[1280px] w-full h-full">
            {/* Mobile Design */}
            <div className="flex flex-col gap-[15px] sm:hidden">
              <div
                className={`relative cursor-pointer`}
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
                    className="w-full object-cover h-[30vh]"
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
              {data.allContentfulItemProject.nodes
                .filter(
                  (item) =>
                    item.id !== data?.contentfulLayoutHome?.primaryProject?.id
                )
                .map((item, index) => {
                  return (
                    <div
                      key={item.id}
                      className={`relative cursor-pointer`}
                      onClick={() =>
                        (window.location.href = `/project/${encodeURI(
                          item.title_en?.toLowerCase().replace(/\s/g, "-")
                        )}`)
                      }
                      style={{
                        gridColumn: `span ${gridSpanConfig[index % 6]}`,
                      }}
                    >
                      <Fade bottom>
                        <GatsbyImage
                          image={item.heroImage?.gatsbyImageData}
                          alt={item.title || "primary-project"}
                          className="w-full object-cover h-[30vh]"
                        />
                      </Fade>
                      <div
                        className={`p-6 absolute top-0 bottom-0 left-0 right-0 w-full h-full opacity-0 ease-in-out duration-300 bg-black hover:opacity-80`}
                      >
                        <p className="text-[22px] font-libre">{item.title}</p>
                      </div>
                    </div>
                  );
                })}
            </div>
            {/* Desktop Design */}
            <div className="flex-col gap-[15px] hidden sm:flex">
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
                    className="w-full object-cover h-[70vh]"
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
              <div className="grid gap-[15px] grid-cols-12">
                {data.allContentfulItemProject.nodes
                  .filter(
                    (item) =>
                      item.id !== data?.contentfulLayoutHome?.primaryProject?.id
                  )
                  .map((item, index) => {
                    return (
                      <div
                        key={item.id}
                        className={`relative cursor-pointer`}
                        onClick={() =>
                          (window.location.href = `/project/${encodeURI(
                            item.title_en?.toLowerCase().replace(/\s/g, "-")
                          )}`)
                        }
                        style={{
                          gridColumn: `span ${gridSpanConfig[index % 6]}`,
                        }}
                      >
                        <Fade bottom>
                          <GatsbyImage
                            image={item.heroImage?.gatsbyImageData}
                            alt={item.title || "primary-project"}
                            className="w-full object-cover"
                            style={{
                              height: `${gridHeightConfig[index % 6]}vh`,
                            }}
                          />
                        </Fade>
                        <div
                          className={`p-6 absolute top-0 bottom-0 left-0 right-0 w-full h-full opacity-0 ease-in-out duration-300 bg-black hover:opacity-80`}
                        >
                          <p className="text-[22px] font-libre">{item.title}</p>
                        </div>
                      </div>
                    );
                  })}
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
};

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
