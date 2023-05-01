import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import Layout from "../components/Layout";

const ProjectsPage: React.FC<PageProps> = () => (
  <Layout>
    <main>
      <h1>Projects Page</h1>
    </main>
  </Layout>
);

export default ProjectsPage;

export const Head: HeadFC = () => <title>Projects Page</title>;
