import * as React from "react";
import Layout from "../components/Layout";
import SEO from "../components/Seo";
import { PageProps, graphql } from "gatsby";

const ServicesPage = ({ data }: PageProps<Queries.ServicesPageQuery>) => {
  const { contentfulLayoutServices } = data;

  return (
    <Layout>
      <SEO
        title={contentfulLayoutServices?.title}
        description={contentfulLayoutServices?.description}
      />
      <main>
        <section className="mx-6 sm:mx-24 flex justify-center">
          <div className="xl:max-w-[1400px] w-full h-full pt-20 sm:pt-28 sm:pb-8 px-4 sm:px-6">
            <div
              data-sal="slide-up"
              data-sal-duration="500"
              data-sal-easing="ease"
            >
              <h4 className="font-montserrat font-medium leading-normal whitespace-pre-wrap">
                {
                  contentfulLayoutServices?.introduction?.childMarkdownRemark
                    ?.rawMarkdownBody
                }
              </h4>
              <h4 className="font-montserrat font-medium leading-normal whitespace-pre-wrap">
                {
                  contentfulLayoutServices?.introduction_en?.childMarkdownRemark
                    ?.rawMarkdownBody
                }
              </h4>
            </div>
          </div>
        </section>
        <section className="mx-6 sm:mx-24 flex justify-center">
          <div className="xl:max-w-[1400px] w-full h-full flex flex-col sm:flex sm:flex-row pt-8 pb-16 px-4 sm:px-6 border-b-[1px] sm:gap-6">
            <div className="w-full sm:w-1/5">
              <div
                data-sal="slide-up"
                data-sal-duration="500"
                data-sal-easing="ease"
              >
                <h4 className="font-montserrat font-medium sm:w-[min-content] whitespace-break-spaces">
                  Design Services
                </h4>
              </div>
            </div>
            <ul className="w-full sm:w-3/5 grid md:grid-cols-2">
              {contentfulLayoutServices?.services?.map(
                (service: any, index: number) => (
                  <div
                    data-sal="slide-up"
                    data-sal-duration="500"
                    data-sal-easing="ease"
                  >
                    <li
                      className="font-montserrat font-medium text-lg"
                      key={`service-${index}`}
                    >
                      {service}
                    </li>
                  </div>
                )
              )}
            </ul>
          </div>
        </section>
        <section className="mx-6 sm:mx-24 flex justify-center">
          <ol className="xl:max-w-[1400px] w-full h-full flex flex-col gap-16 px-4 sm:px-6 pt-16 pb-16 border-b-[1px]">
            {contentfulLayoutServices?.processes?.map(
              (process: any, index: number) => (
                <div
                  data-sal="slide-up"
                  data-sal-duration="500"
                  data-sal-easing="ease"
                >
                  <li
                    className="w-full flex flex-col md:flex md:flex-row gap-6 md:gap-10"
                    key={`process-${index}`}
                  >
                    <div className="w-full md:w-1/5 flex flex-row md:flex-col items-center md:items-start mb-4">
                      <h5 className="font-montserrat font-semibold text-5xl mr-4 mb-0">
                        {(index + 1).toLocaleString("zh-Hant-TW", {
                          minimumIntegerDigits: 2,
                        })}
                      </h5>
                      <h5 className="font-montserrat font-medium w-[min-content] whitespace-break-spaces md:pl-16 mb-0">
                        {process.title}
                      </h5>
                    </div>
                    <div className="w-full md:w-2/5">
                      <p
                        className="font-montserrat font-medium"
                        dangerouslySetInnerHTML={{
                          __html: process.description.childMarkdownRemark.html,
                        }}
                      />
                    </div>
                    <div className="w-full md:w-2/5">
                      <p
                        className="font-montserrat font-medium"
                        dangerouslySetInnerHTML={{
                          __html:
                            process.description_en.childMarkdownRemark.html,
                        }}
                      />
                    </div>
                  </li>
                </div>
              )
            )}
          </ol>
        </section>
        <section className="mx-6 sm:mx-24 flex justify-center">
          <div className="xl:max-w-[1400px] w-full h-full px-4 sm:px-6 pt-16 pb-16">
            <div
              data-sal="slide-up"
              data-sal-duration="500"
              data-sal-easing="ease"
            >
              <div className="flex items-center mb-6">
                <h4>聯絡我們</h4>
                <div className="h-px bg-white ml-4 w-[100px] mb-4"></div>
              </div>
            </div>
            <div className="xl:max-w-[1400px] w-full h-full grid sm:grid-cols-2">
              {contentfulLayoutServices?.contacts?.map(
                (contact: any, index: number) => (
                  <div
                    data-sal="slide-up"
                    data-sal-duration="500"
                    data-sal-easing="ease"
                  >
                    <div
                      className="w-full flex flex-col gap-2"
                      key={`contact-${index}`}
                    >
                      <h5 className="font-montserrat font-medium">
                        {contact.name}
                        <span className="font-normal text-xl opacity-70 ml-4">
                          {contact.title}
                        </span>
                      </h5>
                      <div className="flex flex-col">
                        <div className="flex">
                          <div className="w-[60px] font-semibold">Tel</div>
                          <div className="font-montserrat">{contact.tel}</div>
                        </div>
                        <div className="flex">
                          <div className="w-[60px] font-semibold">Mail</div>
                          <div className="font-montserrat hover:text-gray-300">
                            <a href={`mailto:${contact.email}`}>
                              {contact.email}
                            </a>
                          </div>
                        </div>
                        <div className="flex">
                          <div className="w-[60px] font-semibold">Line</div>
                          <div className="font-montserrat hover:text-gray-300">
                            <a href={contact.line}>{contact.line}</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              )}
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
};

export default ServicesPage;

export const query = graphql`
  query ServicesPage {
    contentfulLayoutServices {
      title
      description
      introduction {
        childMarkdownRemark {
          rawMarkdownBody
        }
      }
      introduction_en {
        childMarkdownRemark {
          rawMarkdownBody
        }
      }
      services
      processes {
        title
        description {
          childMarkdownRemark {
            html
          }
        }
        description_en {
          childMarkdownRemark {
            html
          }
        }
      }
      contacts {
        name
        title
        tel
        email
        line
      }
    }
  }
`;
