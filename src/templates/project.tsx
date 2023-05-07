import { HeadFC, HeadProps, PageProps } from "gatsby";
import * as React from "react";
import Layout from "../components/Layout";
import { GatsbyImage, StaticImage } from "gatsby-plugin-image";
import Seo from "../components/Seo";

interface ProjectProps {
  pageContext: {
    title: string;
    description: string;
    heroImage: any;
    types: string[];
    bgColor: string;
  };
}

const Project = ({ pageContext }: ProjectProps) => {
  const { title, description, heroImage, types, bgColor } = pageContext;
  return (
    <Layout>
      <main>
        <section className="px-6 sm:px-16 pt-20 pb-8 h-min-[100vh]">
          <div className="xl:max-w-[1280px] w-full h-full">
            <div className="">
              <GatsbyImage
                image={heroImage}
                alt={title}
                className="h-full w-full"
              />
            </div>
            <div
              className={`absolute inset-0 bg-[${bgColor}] bg-opacity-50`}
            ></div>
            <div className="relative z-10">
              <div className="container mx-auto px-4">
                <div className="flex flex-col items-center justify-center h-screen">
                  <h1 className="text-5xl font-bold text-white text-center">
                    {title}
                  </h1>
                  <p className="text-white text-center">{description}</p>
                  <div className="flex flex-wrap justify-center items-center mt-10">
                    {types.map((type) => (
                      <div className="mx-2">
                        <StaticImage
                          src="../images/branding.png"
                          alt="Branding"
                          className="w-10 h-10"
                        />
                        <p className="text-white text-center">{type}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="container mx-auto px-4">
              <div className="flex flex-col items-center justify-center">
                <h2 className="text-3xl font-bold text-center">The Process</h2>
                <p className="text-center">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quisquam voluptatum, quibusdam, quia, quae voluptates
                  voluptate necessitatibus quod voluptatibus quos doloribus
                  quidem exercitationem. Quisquam voluptatum, quibusdam, quia,
                  quae voluptates voluptate necessitatibus quod voluptatibus
                  quos doloribus quidem exercitationem.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
};

export default Project;

export const Head = ({ pageContext }: ProjectProps) => (
  <Seo title={pageContext.title} description={pageContext.description} />
);
