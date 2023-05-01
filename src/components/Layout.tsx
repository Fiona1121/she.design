import * as React from "react";
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children }: { children: React.ReactNode }) => (
  <div className="bg-primary w-full overflow-hidden">
    <Header />
    {children}
    <Footer />
  </div>
);

export default Layout;
