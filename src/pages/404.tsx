import * as React from "react";
import { Link, HeadFC, PageProps } from "gatsby";
import Layout from "../components/Layout";
import SEO from "../components/Seo";

const NotFoundPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <SEO />
      <main>
        <h1>Page not found</h1>
        <Link to="/">Go home</Link>.
      </main>
    </Layout>
  );
};

export default NotFoundPage;
