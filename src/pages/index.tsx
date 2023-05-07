import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import Layout from "../components/Layout";
import SEO from "../components/Seo";

const IndexPage: React.FC<PageProps> = () => (
  <Layout>
    <SEO />
    <main>
      <h1>Home Page</h1>
    </main>
  </Layout>
);

export default IndexPage;
