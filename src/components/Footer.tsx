import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { graphql, useStaticQuery } from "gatsby";

const Footer: React.FC = () => {
  const data = useStaticQuery(graphql`
    query {
      contentfulConfiguration {
        link_fb
        link_ig
        link_line
      }
    }
  `);

  return (
    <section className="px-6 sm:px-16 flex justify-center items-center py-6 mt-10">
      <div className="xl:max-w-[1280px] w-full flex-col">
        <div
          className="w-full flex flex-center items-center flex-col pt-6 cursor-pointer"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <StaticImage
            src="../assets/arrowup.svg"
            alt="arrowup"
            width={22}
            height={22}
            placeholder="blurred"
          />
          <p className="font-libre text-[22px]">Top</p>
        </div>
        <div className="w-full flex justify-end items-center flex-row">
          <div
            onClick={() => window.open(data.contentfulConfiguration.link_fb)}
            className="w-[28px] h-[28px] object-contain cursor-pointer mr-2 p-1"
          >
            <StaticImage
              src="../assets/facebook.svg"
              alt="facebook"
              placeholder="blurred"
            />
          </div>
          <div
            onClick={() => window.open(data.contentfulConfiguration.link_ig)}
            className="w-[28px] h-[28px] object-contain cursor-pointer mr-2 p-1"
          >
            <StaticImage
              src="../assets/instagram.svg"
              alt="instagram"
              placeholder="blurred"
            />
          </div>
          <div
            onClick={() => window.open(data.contentfulConfiguration.link_line)}
            className="w-[28px] h-[28px] object-contain cursor-pointer p-1"
          >
            <StaticImage
              src="../assets/line.svg"
              alt="line"
              placeholder="blurred"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
