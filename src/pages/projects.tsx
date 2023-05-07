import * as React from "react";
import { HeadFC, PageProps, graphql } from "gatsby";
import { Zoom } from "react-slideshow-image";
import Layout from "../components/Layout";
import { GatsbyImage, StaticImage } from "gatsby-plugin-image";
import SEO from "../components/Seo";

const tabs = [
  {
    id: "branding",
    title: "Branding",
    contentfulId: "品牌設計 Branding Design",
  },
  { id: "package", title: "Package", contentfulId: "包裝設計 Package Design" },
  {
    id: "graphics",
    title: "Graphics",
    contentfulId: "平面設計 Graphic Design",
  },
];

const ProjectsPage = ({ data }: PageProps<Queries.ProjectsPageQuery>) => {
  const [active, setActive] = React.useState(tabs[0]);
  const [page, setPage] = React.useState(1);

  const filteredData =
    data.allContentfulItemProject?.nodes?.filter((node) =>
      node?.types ? node?.types[0] === active?.contentfulId : false
    ) || [];

  const hasMore = filteredData.length > page * 5;

  return (
    <Layout>
      <SEO title={data.contentfulLayoutProjects?.title || "作品集"} />
      <main>
        <section className="w-[100vw] h-[100vh]">
          <Zoom
            scale={1.3}
            duration={1000}
            transitionDuration={6000}
            easing="ease-in"
            arrows={false}
            pauseOnHover={false}
          >
            {data.contentfulLayoutProjects?.slides?.map((slide) => (
              <div className="each-slide-effect w-[100vw] h-[100vh]">
                <GatsbyImage
                  image={slide?.heroImage?.gatsbyImageData}
                  alt={slide?.title || ""}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </Zoom>
          <div
            className="absolute bottom-0 mb-20 left-1/2 z-10 morebox cursor-pointer"
            onClick={() =>
              window.scrollTo({ top: window.innerHeight, behavior: "smooth" })
            }
          >
            <span></span>
            <span></span>
          </div>
        </section>
        <section className="px-6 sm:px-16 pt-20 pb-8 h-[100vh]">
          <div className="xl:max-w-[1280px] w-full h-full">
            {/* mobile design */}
            <div className="sm:hidden flex flex-col justify-center items-center"></div>
            {/* destop design */}
            <div className="hidden sm:flex sm:flex-col justify-center items-center h-full">
              <div className="w-full flex justify-center items-center mb-4">
                {tabs.map((tab) => (
                  <div
                    key={tab.id}
                    className={`my-5 mx-20 pb-2 font-libre font-normal text-[24px] cursor-pointer text-white ${
                      active.id === tab.id
                        ? "border-b-[1px] border-white"
                        : "border-none"
                    }`}
                    onClick={() => setActive(tab)}
                  >
                    {tab.title}
                  </div>
                ))}
              </div>
              <div className="w-full grow flex flex-col justify-center items-center gap-[15px]">
                <div className="w-full h-[67%] flex flex-row gap-[15px]">
                  {filteredData
                    .slice((page - 1) * 5, page * 5 - 3)
                    .map((node) => (
                      <div
                        className="w-1/2 relative cursor-pointer"
                        onClick={() =>
                          (window.location.href = `/project/${node?.title}`)
                        }
                      >
                        <GatsbyImage
                          image={node?.heroImage?.gatsbyImageData}
                          alt={node?.title || ""}
                          className={`w-full h-full object-cover`}
                        />
                        <div
                          className={`p-6 absolute top-0 bottom-0 left-0 right-0 w-full h-full opacity-0 ease-in-out duration-300 bg-black hover:opacity-80`}
                        >
                          <p className="text-white text-[22px] font-light font-libre">
                            {node?.title}
                          </p>
                        </div>
                      </div>
                    ))}
                </div>
                <div className="w-full h-[33%] flex flex-row gap-[15px]">
                  {filteredData.slice(page * 5 - 3, page * 5).map((node) => (
                    <div
                      className="w-1/3 relative cursor-pointer"
                      onClick={() =>
                        (window.location.href = `/project/${node?.title}`)
                      }
                    >
                      <GatsbyImage
                        image={node?.heroImage?.gatsbyImageData}
                        alt={node?.title || ""}
                        className={`w-full h-full object-cover`}
                      />
                      <div
                        className={`p-6 absolute top-0 bottom-0 left-0 right-0 w-full h-full opacity-0 ease-in-out duration-300 bg-black hover:opacity-80`}
                      >
                        <p className="text-white text-[22px] font-light font-libre">
                          {node?.title}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="w-full flex justify-center items-center mt-10">
                <div className="mx-2">
                  <StaticImage
                    src="../assets/arrowleft.svg"
                    alt="previous page"
                    width={22}
                    height={22}
                    placeholder="blurred"
                    className={`${
                      page > 1 ? "cursor-pointer opacity-100" : "opacity-50"
                    }`}
                    onClick={() => setPage(page - 1)}
                  />
                </div>
                <div className="mx-2">
                  <StaticImage
                    src="../assets/arrowright.svg"
                    alt="next page"
                    width={22}
                    height={22}
                    placeholder="blurred"
                    className={`${
                      hasMore ? "cursor-pointer opacity-100" : "opacity-50"
                    }`}
                    onClick={() => setPage(page + 1)}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
};

export default ProjectsPage;

export const query = graphql`
  query ProjectsPage {
    contentfulLayoutProjects {
      title
      slides {
        title
        heroImage {
          gatsbyImageData(placeholder: BLURRED, width: 1000)
        }
      }
    }
    allContentfulItemProject {
      nodes {
        id
        title
        heroImage {
          gatsbyImageData(placeholder: BLURRED, width: 1000)
        }
        types
      }
    }
  }
`;
