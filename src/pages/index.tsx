import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import Layout from "../components/Layout";

const IndexPage: React.FC<PageProps> = () => (
  <Layout>
    <main>
      <h1>Home Page</h1>
    </main>
  </Layout>
);

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
