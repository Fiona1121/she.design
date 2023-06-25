import * as React from "react";
import { graphql } from "gatsby";
import { GatsbyImage, StaticImage } from "gatsby-plugin-image";
import { Zoom } from "react-slideshow-image";
import Layout from "../components/Layout";
import SEO from "../components/Seo";

type IndexPageProps = {
  data: {
    contentfulLayoutProjects: {
      title: string;
      slides: {
        title: string;
        heroImage: {
          gatsbyImageData: any;
        };
        heroImage_m: {
          gatsbyImageData: any;
        };
      }[];
    };
    allContentfulItemProject: {
      nodes: {
        title: string;
        title_en: string;
        heroImage: {
          gatsbyImageData: any;
        };
        types: string[];
      }[];
    };
  };
};

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

const ProjectsPage = ({ data }: IndexPageProps) => {
  const [active, setActive] = React.useState(tabs[0]);
  const [tabMenuOpen, setTabMenuOpen] = React.useState(false);
  const [page, setPage] = React.useState(1);

  const filteredData =
    data.allContentfulItemProject?.nodes?.filter((node) =>
      node?.types ? node?.types[0] === active?.contentfulId : false
    ) || [];

  const hasMore = filteredData.length > page * 5;

  React.useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

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
            {data.contentfulLayoutProjects?.slides?.map((slide, index) => (
              <React.Fragment key={`slide-${index}`}>
                <div className="each-slide-effect w-[100vw] h-[100vh] hidden md:block">
                  <GatsbyImage
                    image={slide?.heroImage?.gatsbyImageData}
                    alt={slide?.title || ""}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="each-slide-effect w-[100vw] h-[100vh] md:hidden">
                  <GatsbyImage
                    image={slide?.heroImage_m?.gatsbyImageData}
                    alt={slide?.title || ""}
                    className="w-full h-full object-cover"
                  />
                </div>
              </React.Fragment>
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
        <section className="px-3 sm:px-5 py-14 sm:pt-16 min-h-screen flex justify-center">
          <div className="xl:max-w-[2000px] w-full h-full">
            {/* mobile design */}
            <div className="sm:hidden flex flex-col justify-center items-center">
              <div className="w-full flex justify-start items-center my-5 font-libre font-normal text-[24px] ">
                <div
                  className="flex items-center cursor-pointer"
                  onClick={() => setTabMenuOpen(true)}
                >
                  {active.title}
                  <StaticImage
                    src="../assets/arrowdown.svg"
                    alt="arrow-down"
                    width={12}
                    height={12}
                    className="ml-2"
                  />
                </div>
                <div
                  className={`h-screen w-screen bg-black bg-opacity-90 fixed top-0 left-0 z-10 ${
                    tabMenuOpen ? "flex" : "hidden"
                  }`}
                >
                  <div className="w-full h-full flex flex-col justify-center items-center gap-[10px]">
                    {tabs.map((tab) => (
                      <div
                        key={tab.id}
                        className={`my-3 mx-20 pb-px font-libre font-normal text-[24px] cursor-pointer ${
                          active.id === tab.id
                            ? "border-b-[1px] border-white"
                            : "border-none"
                        }`}
                        onClick={() => {
                          setActive(tab);
                          setTabMenuOpen(false);
                        }}
                      >
                        {tab.title}
                      </div>
                    ))}
                  </div>
                  <div
                    className="fixed bottom-16 w-full flex justify-center items-center"
                    onClick={() => setTabMenuOpen(false)}
                  >
                    <StaticImage
                      src="../assets/close.svg"
                      alt="close"
                      width={20}
                      height={20}
                    />
                  </div>
                </div>
              </div>
              <div className="w-full h-full flex flex-col justify-center items-center gap-2">
                {filteredData
                  .slice((page - 1) * 3, page * 3)
                  .map((node: any) => (
                    <div
                      key={node?.title_en}
                      className="w-full h-1/3 relative cursor-pointer"
                      onClick={() =>
                        (window.location.href = `/project/${encodeURI(
                          node?.title_en?.toLowerCase().replace(/\s/g, "-")
                        )}`)
                      }
                    >
                      <GatsbyImage
                        image={node?.heroImage?.gatsbyImageData}
                        alt={node?.title || ""}
                        className={`w-full h-1/3 object-cover`}
                      />
                      <div
                        className={`flex flex-col-reverse p-3 absolute top-0 bottom-0 left-0 right-0 w-full h-full opacity-0 ease-in-out duration-300 bg-black hover:opacity-80`}
                      >
                        <p className="text-[15px] font-libre text-right">
                          {node?.title}
                        </p>
                      </div>
                    </div>
                  ))}
              </div>
              <div className="w-full flex justify-center items-center mt-10">
                <div
                  className="mx-2"
                  onClick={() => setPage((page) => (page > 1 ? page - 1 : 1))}
                >
                  <StaticImage
                    src="../assets/arrowleft.svg"
                    alt="previous page"
                    width={22}
                    height={22}
                    placeholder="blurred"
                    className={`${
                      page > 1 ? "cursor-pointer opacity-100" : "opacity-50"
                    }`}
                  />
                </div>
                <div
                  className="mx-2"
                  onClick={() => setPage((page) => (hasMore ? page + 1 : page))}
                >
                  <StaticImage
                    src="../assets/arrowright.svg"
                    alt="next page"
                    width={22}
                    height={22}
                    placeholder="blurred"
                    className={`${
                      hasMore ? "cursor-pointer opacity-100" : "opacity-50"
                    }`}
                  />
                </div>
              </div>
            </div>
            {/* destop design */}
            <div className="hidden sm:flex sm:flex-col justify-center items-center h-full">
              <div className="w-full flex justify-center items-center mb-2">
                {tabs.map((tab) => (
                  <div
                    key={tab.id}
                    className={`my-5 mx-20 pb-2 font-libre font-normal text-[24px] cursor-pointer ${
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
              <div className="w-full h-[70vh] grow flex flex-col justify-center items-center gap-2">
                <div className="w-full h-[60%] flex flex-row gap-2">
                  {filteredData
                    .slice((page - 1) * 5, page * 5 - 3)
                    .map((node: any) => (
                      <div
                        key={node.title_en}
                        className="w-1/2 h-full relative cursor-pointer"
                        onClick={() =>
                          (window.location.href = `/project/${encodeURI(
                            node?.title_en?.toLowerCase().replace(/\s/g, "-")
                          )}`)
                        }
                      >
                        <GatsbyImage
                          image={node?.heroImage?.gatsbyImageData}
                          alt={node?.title || ""}
                          className={`w-full h-full object-cover`}
                        />
                        <div
                          className={`flex flex-col-reverse p-6 absolute top-0 bottom-0 left-0 right-0 w-full h-full opacity-0 ease-in-out duration-300 bg-black hover:opacity-80`}
                        >
                          <p className="text-[18px] font-montserrat text-right">
                            {node?.title}
                          </p>
                        </div>
                      </div>
                    ))}
                </div>
                <div className="w-full h-[40%] flex flex-row gap-2">
                  {filteredData
                    .slice(page * 5 - 3, page * 5)
                    .map((node: any) => (
                      <div
                        key={node.title_en}
                        className="w-1/3 h-full relative cursor-pointer"
                        onClick={() =>
                          (window.location.href = `/project/${encodeURI(
                            node?.title_en?.toLowerCase().replace(/\s/g, "-")
                          )}`)
                        }
                      >
                        <GatsbyImage
                          image={node?.heroImage?.gatsbyImageData}
                          alt={node?.title || ""}
                          className={`w-full h-full object-cover`}
                        />
                        <div
                          className={`flex flex-col-reverse p-6 absolute top-0 bottom-0 left-0 right-0 w-full h-full opacity-0 ease-in-out duration-300 bg-black hover:opacity-80`}
                        >
                          <p className="text-[18px] font-montserrat text-right">
                            {node?.title}
                          </p>
                        </div>
                      </div>
                    ))}
                </div>
              </div>
              <div className="w-full flex justify-center items-center mt-8">
                <div
                  className="mx-2"
                  onClick={() => setPage((page) => (page > 1 ? page - 1 : 1))}
                >
                  <StaticImage
                    src="../assets/arrowleft.svg"
                    alt="previous page"
                    width={22}
                    height={22}
                    placeholder="blurred"
                    className={`${
                      page > 1 ? "cursor-pointer opacity-100" : "opacity-50"
                    }`}
                  />
                </div>
                <div
                  className="mx-2"
                  onClick={() => setPage((page) => (hasMore ? page + 1 : page))}
                >
                  <StaticImage
                    src="../assets/arrowright.svg"
                    alt="next page"
                    width={22}
                    height={22}
                    placeholder="blurred"
                    className={`${
                      hasMore ? "cursor-pointer opacity-100" : "opacity-50"
                    }`}
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
          gatsbyImageData(placeholder: BLURRED, layout: CONSTRAINED)
        }
        heroImage_m {
          gatsbyImageData(placeholder: BLURRED, layout: CONSTRAINED)
        }
      }
    }
    allContentfulItemProject {
      nodes {
        id
        title
        title_en
        heroImage {
          gatsbyImageData(
            placeholder: BLURRED
            height: 1000
            layout: CONSTRAINED
          )
        }
        types
      }
    }
  }
`;
