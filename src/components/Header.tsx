import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { navLinks } from "../contants";

const Header: React.FC = () => {
  const [active, setActive] = React.useState("Home");
  const [toggle, setToggle] = React.useState(false);

  return (
    <div className="px-6 sm:px-16 flex justify-center items-center fixed top-0 left-0 w-full bg-black/20 z-50">
      <div className="xl:max-w-[1280px] w-full">
        <nav className="w-full flex py-4 justify-between items-center navbar">
          <div
            className="logo-placeholder cursor-pointer"
            onClick={() => (window.location.href = "/")}
          >
            <StaticImage
              src="../assets/logo.svg"
              alt="She.Design Logo"
              placeholder="blurred"
              height={32}
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
          <div className="sm:hidden flex flex-1 justify-end items-center">
            {toggle ? (
              <span onClick={() => setToggle(!toggle)}>
                <StaticImage
                  src="../assets/close.svg"
                  alt="menu"
                  className="w-[20px] h-[20px] object-contain"
                />
              </span>
            ) : (
              <span onClick={() => setToggle(!toggle)}>
                <StaticImage
                  src="../assets/menu.svg"
                  alt="menu"
                  className="w-[20px] h-[20px] object-contain"
                />
              </span>
            )}

            <div
              className={`${
                !toggle ? "hidden" : "flex"
              } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
            >
              <ul className="list-none flex justify-end items-start flex-1 flex-col">
                {navLinks.map((nav, index) => (
                  <li
                    key={nav.id}
                    className={`font-libre font-medium cursor-pointer text-[16px] ${
                      active === nav.title ? "text-white" : "text-white"
                    } ${index === navLinks.length - 1 ? "mb-0" : "mb-4"}`}
                    onClick={() => setActive(nav.title)}
                  >
                    <a href={`/${nav.id}`}>{nav.title}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Header;
