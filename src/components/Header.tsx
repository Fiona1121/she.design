import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { navLinks } from "../contants";

const Header: React.FC = () => {
  const [active, setActive] = React.useState("Home");
  const [toggle, setToggle] = React.useState(false);

  return (
    <div className="px-6 sm:px-10 flex justify-center items-center fixed top-0 left-0 w-full bg-black/20 z-50">
      <div className="xl:max-w-[1400px] w-full">
        <nav className="w-full flex py-[0.75rem] justify-between items-center navbar">
          <div
            className="logo-placeholder cursor-pointer"
            onClick={() => (window.location.href = "/")}
          >
            <StaticImage
              src="../assets/logo.svg"
              alt="She.Design Logo"
              placeholder="blurred"
              height={28}
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
            <span onClick={() => setToggle(!toggle)}>
              <StaticImage
                src="../assets/menu.svg"
                alt="menu"
                className="w-[18px] h-[18px] object-contain"
              />
            </span>
            <div
              className={`${
                !toggle ? "hidden" : "flex"
              } h-screen w-screen bg-black bg-opacity-90 fixed top-0 left-0 z-10`}
            >
              <ul className="list-none w-full h-full flex flex-col justify-center items-center">
                {navLinks.map((nav, index) => (
                  <li
                    key={nav.id}
                    className={`my-3 font-libre font-medium cursor-pointer text-[24px]`}
                    onClick={() => setActive(nav.title)}
                  >
                    <a href={`/${nav.id}`}>{nav.title}</a>
                  </li>
                ))}
              </ul>
              <div
                className="fixed bottom-16 w-full flex justify-center items-center"
                onClick={() => setToggle(false)}
              >
                <StaticImage
                  src="../assets/close.svg"
                  alt="close"
                  width={18}
                  height={18}
                />
              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Header;
