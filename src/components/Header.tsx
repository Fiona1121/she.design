import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { navLinks } from "../contants";
import { CloseIcon, MenuIcon } from "./Icons";

const Header: React.FC = () => {
  const [active, setActive] = React.useState("Home");
  const [toggle, setToggle] = React.useState(false);

  return (
    <div className="px-3 sm:px-5 flex justify-center items-center fixed top-0 left-0 w-full bg-black/20 z-50">
      <div className="xl:max-w-[2000px] w-full">
        <nav className="hidden sm:flex w-full py-[0.75rem] justify-between items-center navbar">
          <div
            className="hidden sm:flex logo-placeholder cursor-pointer"
            onClick={() => (window.location.href = "/")}
          >
            <StaticImage
              src="../assets/logo.svg"
              alt="She.Design Logo"
              placeholder="blurred"
              height={26}
            />
          </div>
          <ul className="list-none sm:flex hidden justify-end items-center flex-1">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-libre font-normal cursor-pointer text-[24px] menu-item ${
                  index === navLinks.length - 1 ? "mr-0" : "mr-10"
                }`}
              >
                <a href={`/${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>
        </nav>
        <nav className="flex sm:hidden w-full py-[0.75rem] justify-between items-center navbar relative">
          <div
            className="logo-placeholder cursor-pointer"
            onClick={() => (window.location.href = "/")}
          >
            <StaticImage
              src="../assets/logo-img.svg"
              alt="She.Design Logo Image"
              placeholder="blurred"
              height={26}
            />
          </div>
          <div
            className="absolute left-1/2 transform -translate-x-1/2"
            onClick={() => (window.location.href = "/")}
          >
            <StaticImage
              src="../assets/logo-word.svg"
              alt="She.Design Logo Word"
              placeholder="blurred"
              height={26}
            />
          </div>
          <div className="sm:hidden flex flex-1 justify-end items-center">
            <span onClick={() => setToggle(!toggle)}>
              <MenuIcon className="w-[20px] h-[20px] object-contain" />
            </span>
            <div
              className={`${
                !toggle ? "hidden" : "flex"
              } h-screen w-screen bg-black bg-opacity-90 fixed top-0 left-0 z-10`}
            >
              <ul className="list-none w-full h-full flex flex-col justify-center items-center">
                {navLinks.map((nav, index) => (
                  <div
                    key={nav.id}
                    data-sal="slide-down"
                    data-sal-duration="500"
                    data-sal-easing="ease"
                  >
                    <li
                      className={`my-3 font-libre font-medium cursor-pointer text-[24px]`}
                      onClick={() => setActive(nav.title)}
                    >
                      <a href={`/${nav.id}`}>{nav.title}</a>
                    </li>
                  </div>
                ))}
              </ul>
              <div
                className="fixed bottom-16 w-full flex justify-center items-center"
                onClick={() => setToggle(false)}
              >
                <CloseIcon className="!w-[20px] !h-[20px] object-contain" />
              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Header;
