import { graphql, useStaticQuery } from "gatsby";
import * as React from "react";
import { Helmet } from "react-helmet";

type MetaItem = {
  name: string;
  content: string;
};

type SEOProps = {
  title?: string | null;
  description?: string | null;
  url?: string | null;
  author?: string | null;
  keywords?: string[] | null;
  meta?: MetaItem[] | null;
  image?: string | null;
};

const SEO: React.FC<SEOProps> = (props) => {
  const data = useStaticQuery(graphql`
    query {
      contentfulConfiguration {
        title
        description {
          description
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
    url = "https://www.sshedesign.com",
    logo_t,
    author = "She.Design",
    keywords = [
      "諮詢規劃",
      "專業設計",
      "品牌識別",
      "平面設計",
      "包裝設計",
      "書籍設計",
    ],
  } = data.contentfulConfiguration;

  const siteTitle = props.title ? `${props.title} | ${title}` : title;
  const siteDescription = props.description || description.description;
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
      content: "website",
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
      href: "/favicon.ico",
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "32x32",
      href: "/favicon-32x32.png",
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "16x16",
      href: "/favicon-16x16.png",
    },
    {
      rel: "apple-touch-icon",
      sizes: "180x180",
      href: "/apple-touch-icon.png",
    },
    {
      rel: "manifest",
      href: "/site.webmanifest",
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
