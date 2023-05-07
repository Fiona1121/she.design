import { graphql, useStaticQuery } from "gatsby";
import * as React from "react";
import { Helmet } from "react-helmet";

type MetaItem = {
  name: string;
  content: string;
};

type SEOProps = {
  title?: string;
  description?: string;
  url?: string;
  author?: string;
  keywords?: string[];
  meta?: MetaItem[];
  image?: string;
};

const SEO: React.FC<SEOProps> = (props) => {
  const data = useStaticQuery(graphql`
    query {
      contentfulConfiguration {
        title
        description {
          description
        }
        link_fb
        link_ig
        link_line
        logo {
          url
        }
        logo_m {
          url
        }
        logo_t {
          url
        }
      }
    }
  `);

  const {
    title,
    description,
    url = "",
    link_fb,
    link_ig,
    link_line,
    logo,
    logo_m,
    logo_t,
    author = "itzsyboo",
    keywords = [],
  } = data.contentfulConfiguration;

  const siteTitle = props.title ? `${title} | ${props.title}` : title;
  const siteDescription = props.description || description;
  const siteUrl = props.url || url;
  const siteAuthor = props.author || author;
  const siteImage = props.image || logo_t.url;
  const siteKeywords = [...keywords, props.keywords].join(",");
  const metaData = [
    {
      name: "canonical",
      content: siteUrl,
    },
    {
      name: "description",
      content: siteDescription,
    },
    {
      name: "image",
      content: siteImage,
    },
    {
      name: "og:url",
      content: siteUrl,
    },
    {
      name: "og:type",
      content: "article",
    },
    {
      name: "og:title",
      content: siteTitle,
    },
    {
      name: "og:description",
      content: siteDescription,
    },
    {
      name: "og:image",
      content: siteImage,
    },
    {
      name: "twitter:card",
      content: "summary_large_image",
    },
    {
      name: "twitter:creator",
      content: siteAuthor,
    },
    {
      name: "twitter:title",
      content: siteTitle,
    },
    {
      name: "twitter:description",
      content: siteDescription,
    },
    {
      name: "twitter:image",
      content: siteImage,
    },
    {
      name: "keywords",
      content: siteKeywords,
    },
  ];

  const linkData = [
    {
      rel: "shortcut icon",
      href: "/icons/favicon.ico",
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "32x32",
      href: "/icons/favicon-32x32.png",
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "16x16",
      href: "/icons/favicon-16x16.png",
    },
    {
      rel: "apple-touch-icon",
      sizes: "180x180",
      href: "/icons/apple-touch-icon.png",
    },
    {
      rel: "manifest",
      href: "/icons/site.webmanifest",
    },
  ];
  return (
    <Helmet
      htmlAttributes={{ lang: "zh-Hant-TW" }}
      title={siteTitle}
      meta={metaData}
      link={linkData}
    />
  );
};

export default SEO;
