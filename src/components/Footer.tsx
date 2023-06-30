import * as React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { ArrowUpIcon, FacebookIcon, InstagramIcon, LineIcon } from "./Icons";

const Footer = ({ fontColor = "#fff" }: { fontColor: string }) => {
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
    <section
      className="px-3 sm:px-5 flex justify-center items-center py-6"
      style={{
        color: fontColor,
      }}
    >
      <div className="xl:max-w-[2000px] w-full flex-col">
        <div className="w-full flex flex-center justify-center items-center cursor-pointer">
          <div
            className="flex flex-col justify-center items-center"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <ArrowUpIcon className="!w-[22px] !h-[22px] object-contain" />
            <p className="font-libre text-[22px] mt-1">Top</p>
          </div>
        </div>
        <div className="w-full flex justify-end items-center flex-row">
          <div
            onClick={() => window.open(data.contentfulConfiguration.link_fb)}
            className="w-[30px] h-[30px] object-contain cursor-pointer mr-1.5 p-1"
          >
            <FacebookIcon />
          </div>
          <div
            onClick={() => window.open(data.contentfulConfiguration.link_ig)}
            className="w-[30px] h-[30px] object-contain cursor-pointer mr-1.5 p-1"
          >
            <InstagramIcon />
          </div>
          <div
            onClick={() => window.open(data.contentfulConfiguration.link_line)}
            className="w-[30px] h-[30px] object-contain cursor-pointer p-1"
          >
            <LineIcon />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
