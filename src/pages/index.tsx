import * as React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import SEO from "../components/Seo";
import { GatsbyImage } from "gatsby-plugin-image";

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
const gridHeightConfig = [50/3, 50/3, 50/3, 50/2, 50/2, 50];

const IndexPage = ({ data }: IndexPageProps) => {
  return (
    <Layout>
      <SEO />
      <main>
        <section className="px-3 sm:px-5 pt-14 sm:pt-16 pb-8 min-h-screen flex justify-center">
          <div className="xl:max-w-[2000px] w-full h-full">
            {/* Mobile Design */}
            <div className="flex flex-col gap-2 sm:hidden">
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
                <div
                  data-sal="slide-up"
                  data-sal-duration="500"
                  data-sal-easing="ease"
                >
                  <>
                    <GatsbyImage
                      image={
                        data?.contentfulLayoutHome?.primaryProject?.heroImage
                          ?.gatsbyImageData
                      }
                      alt={
                        data?.contentfulLayoutHome?.primaryProject?.title ||
                        "primary-project"
                      }
                      className="w-full object-cover h-[50vw]"
                    />
                    <div
                      className={`flex flex-col-reverse p-3 absolute top-0 bottom-0 left-0 right-0 w-full h-full opacity-0 ease-in-out duration-300 bg-black hover:opacity-80`}
                    >
                      <p className="text-[15px] font-libre text-right">
                        {data?.contentfulLayoutHome?.primaryProject?.title}
                      </p>
                    </div>
                  </>
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
                      <div
                        data-sal="slide-up"
                        data-sal-duration="500"
                        data-sal-easing="ease"
                      >
                        <GatsbyImage
                          image={item.heroImage?.gatsbyImageData}
                          alt={item.title || "primary-project"}
                          className="w-full object-cover h-[50vw]"
                        />
                      </div>
                      <div
                        className={`flex flex-col-reverse p-6 absolute top-0 bottom-0 left-0 right-0 w-full h-full opacity-0 ease-in-out duration-300 bg-black hover:opacity-80`}
                      >
                        <p className="text-[15px] font-libre text-right">
                          {item.title}
                        </p>
                      </div>
                    </div>
                  );
                })}
            </div>
            {/* Desktop Design */}
            <div className="flex-col gap-2 hidden sm:flex">
              <div
                className={`grid gap-2 relative sm:grid-cols-1 cursor-pointer`}
                onClick={() =>
                  (window.location.href = `/project/${encodeURI(
                    data?.contentfulLayoutHome?.primaryProject?.title_en
                      ?.toLowerCase()
                      .replace(/\s/g, "-")
                  )}`)
                }
              >
                <div
                  data-sal="slide-up"
                  data-sal-duration="500"
                  data-sal-easing="ease"
                >
                  <GatsbyImage
                    image={
                      data?.contentfulLayoutHome?.primaryProject?.heroImage
                        ?.gatsbyImageData
                    }
                    alt={
                      data?.contentfulLayoutHome?.primaryProject?.title ||
                      "primary-project"
                    }
                    className="w-full object-cover h-[50vw]"
                  />
                </div>
                <div
                  className={`flex flex-col-reverse p-6 absolute top-0 bottom-0 left-0 right-0 w-full h-full opacity-0 ease-in-out duration-300 bg-black hover:opacity-80`}
                >
                  <p className="text-[18px] font-libre text-right">
                    {data?.contentfulLayoutHome?.primaryProject?.title}
                  </p>
                </div>
              </div>
              <div className="grid gap-2 grid-cols-12">
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
                        <div
                          data-sal="slide-up"
                          data-sal-duration="500"
                          data-sal-easing="ease"
                        >
                          <GatsbyImage
                            image={item.heroImage?.gatsbyImageData}
                            alt={item.title || "primary-project"}
                            className="w-full object-cover"
                            style={{
                              height: `${gridHeightConfig[index % 6]}vw`,
                            }}
                          />
                        </div>
                        <div
                          className={`flex flex-col-reverse p-6 absolute top-0 bottom-0 left-0 right-0 w-full h-full opacity-0 ease-in-out duration-300 bg-black hover:opacity-80`}
                        >
                          <p className="text-[18px] font-libre text-right">
                            {item.title}
                          </p>
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
          gatsbyImageData(width: 3000, placeholder: BLURRED)
        }
      }
    }
    allContentfulItemProject(sort: { createdAt: DESC }) {
      nodes {
        id
        title
        title_en
        heroImage {
          gatsbyImageData(width: 3000, placeholder: BLURRED)
        }
      }
    }
  }
`;
