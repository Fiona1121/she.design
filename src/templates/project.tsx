import * as React from "react";
import Layout from "../components/Layout";
import Seo from "../components/Seo";
import { GatsbyImage } from "gatsby-plugin-image";
import Fade from "react-reveal/Fade";

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

  React.useEffect(() => {
    window.scroll({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <Layout bgColor={bgColor}>
      <Seo title={title} description={description.excerpt} />
      <main className="min-h-screen flex flex-col">
        <section
          className={`px-6 sm:px-16 pt-20 pb-8 flex justify-center grow-0`}
        >
          <div className="xl:max-w-[1280px] w-full h-full">
            <div className="flex flex-col gap-[15px]">
              <div className="flex flex-col items-stretch justify-center">
                <Fade bottom>
                  <GatsbyImage image={heroImage} alt={title} />
                </Fade>
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
                      <Fade bottom>
                        {row.images.map((image: any) => (
                          <GatsbyImage
                            image={image.gatsbyImageData}
                            alt={title}
                            className="object-cover"
                            style={{
                              height: `${row.height}vh`,
                            }}
                          />
                        ))}
                      </Fade>
                    </div>
                  );
                })}
            </div>
          </div>
        </section>
        <section className={`px-6 py-4 sm:px-16 flex justify-center grow`}>
          <div className="xl:max-w-[1280px] w-full flex flex-col justify-between">
            <div className="flex flex-col items-stretch justify-center">
              {/* <h1>{title}</h1> */}
              <div
                className="text-center project-description"
                dangerouslySetInnerHTML={{ __html: description.html }}
              />
            </div>
            <div className="mt-10">
              {types.reverse().map((type, index) => (
                <h6
                  className="w-full mb-0 p-px font-medium"
                  key={`type-${index}`}
                >
                  {type}
                </h6>
              ))}
              <div
                className="h-px bg-white mt-4 mb-4"
                style={{ width: "2rem" }}
              ></div>
              <h6 className="font-medium">{brand}</h6>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
};

export default Project;
