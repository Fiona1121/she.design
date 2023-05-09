import * as React from "react";
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({
  children,
  bgColor = "#000",
}: {
  children: React.ReactNode;
  bgColor?: string;
}) => (
  <div className={`bg-[${bgColor}] w-full overflow-hidden`}>
    <Header />
    {children}
    <Footer />
  </div>
);

export default Layout;
