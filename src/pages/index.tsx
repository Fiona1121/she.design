import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import Layout from "../components/Layout";
import SEO from "../components/Seo";

const IndexPage: React.FC<PageProps> = () => (
  <Layout>
    <SEO />
    <main>
      <section className="px-6 sm:px-16 pt-20 pb-8 min-h-screen flex justify-center">
        <div className="xl:max-w-[1280px] w-full h-full">

        <h1>Home Page</h1>
        </div>
      </section>
    </main>
  </Layout>
);

export default IndexPage;
