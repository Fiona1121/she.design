import * as React from "react";
import Header from "./Header";
import Footer from "./Footer";
import fontColorContrast from "font-color-contrast";

const Layout = ({
  children,
  bgColor = "#000",
}: {
  children: React.ReactNode;
  bgColor?: string;
}) => {
  const fontColor = fontColorContrast(bgColor);
  return (
    <div
      className={`w-full overflow-hidden`}
      style={{
        backgroundColor: bgColor,
        color: fontColor,
      }}
    >
      <Header />
      {children}
      <Footer fontColor={fontColor} />
    </div>
  );
};

export default Layout;
