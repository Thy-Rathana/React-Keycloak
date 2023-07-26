import React, { useContext, useRef, useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Logo from "../components/Logo";
import SideBar from "./SideBar";
import { DefaultContext, RouteClass } from "./Default";
NavBar.propTypes = {};

function NavBar({ routes }: { routes: RouteClass[] }) {
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);
  const defaultData = useContext(DefaultContext);

  const roueList = (
    <section>
      <ul className="hidden sm:flex justify-end items-center gap-5 md:gap-10 xl:gap-20 md:mr-10">
        {routes.map((route: RouteClass, index: number) => (
          <li
            key={index}
            className={`${
              defaultData.active !== route.name && "hover:"
            }bg-gray-200 p-2 md:px-3 rounded `}
          >
            <Link
              onClick={route.handler}
              className={`text-gray-600 ${
                defaultData.active === route.name &&
                "text-gray-900 font-semibold"
              }`}
              to={route.path}
            >
              {route.name}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );

  const button = (
    <button onClick={() => setIsSideBarOpen(!isSideBarOpen)}>
      {
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 sm:hidden mr-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          {isSideBarOpen ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h8m-8 6h16"
            />
          )}
        </svg>
      }
    </button>
  );

  return (
    <section>
      <nav>
        {defaultData.active}
        <div className="flex justify-between items-center py-2">
          <Logo />
          {button}
          {roueList}
        </div>
        <div className="relative ">
          <div
            className={`${
              // isSideBarOpen ? "translate-x-0 " : "-translate-x-full" transition
              isSideBarOpen ? "w-[90%]" : "w-0"
            } transform duration-300 sm:hidden absolute top-0 right-0 z-40 box-content bg-gray-400 rounded-l-full  overflow-hidden`}
          >
            {<SideBar routes={routes} />}
          </div>
        </div>
      </nav>
    </section>
  );
}

export default NavBar;
