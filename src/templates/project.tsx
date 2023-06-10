import * as React from "react";
import Layout from "../components/Layout";
import Seo from "../components/Seo";
import { GatsbyImage } from "gatsby-plugin-image";

interface ProjectProps {
  pageContext: {
    title: string;
    brand: string;
    description: {
      excerpt: string;
      html: string;
    };
    heroImage: any;
    types: string[];
    bgColor: string;
    gallery?: {
      images: any[];
      height: number;
      widthRatio: string;
    }[];
  };
}

const Project = ({ pageContext }: ProjectProps) => {
  const { title, brand, description, heroImage, types, bgColor, gallery } =
    pageContext;

  return (
    <Layout bgColor={bgColor}>
      <Seo title={title} description={description.excerpt} />
      <main className="min-h-screen flex flex-col">
        <section
          className={`px-6 sm:px-10 pt-14 sm:pt-16 pb-8 flex justify-center grow-0`}
        >
          <div className="xl:max-w-[1400px] w-full h-full">
            <div className="flex flex-col gap-[15px] mobile-design">
              <div className="flex flex-col items-stretch justify-center">
                <div
                  data-sal="slide-up"
                  data-sal-duration="500"
                  data-sal-easing="ease"
                >
                  <GatsbyImage
                    image={heroImage}
                    alt={title}
                    className="w-full"
                  />
                </div>
              </div>
              {gallery &&
                gallery?.map((row: any) => {
                  return (
                    <div className="grid grid-col-1 gap-[15px]">
                      <div
                        data-sal="slide-up"
                        data-sal-duration="500"
                        data-sal-easing="ease"
                      >
                        <>
                          {row.images.map((image: any) => (
                            <GatsbyImage
                              image={image.gatsbyImageData}
                              alt={title}
                              className="object-cover w-full"
                            />
                          ))}
                        </>
                      </div>
                    </div>
                  );
                })}
            </div>
            <div className="hidden md:flex flex-col gap-[15px]">
              <div className="flex flex-col items-stretch justify-center">
                <div
                  data-sal="slide-up"
                  data-sal-duration="500"
                  data-sal-easing="ease"
                >
                  <GatsbyImage
                    image={heroImage}
                    alt={title}
                    className="w-full"
                  />
                </div>
              </div>
              {gallery &&
                gallery?.map((row: any) => {
                  return (
                    <div
                      className="grid gap-[15px]"
                      style={{
                        gridTemplateColumns: row.widthRatio
                          .split(" ")
                          .map((col: string) => `${col}fr`)
                          .join(" "),
                      }}
                    >
                      <div
                        data-sal="slide-up"
                        data-sal-duration="500"
                        data-sal-easing="ease"
                      >
                        <>
                          {row.images.map((image: any) => (
                            <GatsbyImage
                              image={image.gatsbyImageData}
                              alt={title}
                              className="object-cover w-full"
                              style={{
                                height: `${row.height}vh`,
                              }}
                            />
                          ))}
                        </>
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
        </section>
        <section className={`px-6 py-4 sm:px-10 flex justify-center grow`}>
          <div className="xl:max-w-[1400px] w-full flex flex-col justify-between">
            <div className="flex flex-col items-stretch justify-center">
              <h1 className="project-title">{title}</h1>
              <div
                className="text-center project-description"
                style={{ whiteSpace: "pre-wrap" }}
                dangerouslySetInnerHTML={{ __html: description.html }}
              />
            </div>
            <div className="mt-10 flex gap-2">
              <div>
                {types.reverse().map((type, index) => (
                  <h6
                    className="w-full mb-0 p-px project-type"
                    style={{}}
                    key={`type-${index}`}
                  >
                    {type}
                  </h6>
                ))}
              </div>
              <div className="flex flex-col justify-end">
                <div
                  className="project-type"
                  style={{
                    borderLeft: `1px solid white`,
                    paddingLeft: `0.5rem`,
                    textOverflow: `ellipsis`,
                    whiteSpace: `nowrap`,
                    overflow: `hidden`,
                  }}
                >
                  {brand}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
};

export default Project;
