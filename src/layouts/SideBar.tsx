import React, { useContext } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { DefaultContext, RouteClass } from "./Default";

SideBar.propTypes = {};

function SideBar({ routes }: { routes: RouteClass[] }) {
  const defaultData = useContext(DefaultContext);
  return (
    <>
      <ul className="text-right">
        {routes.map((route: any, index: number) => (
          <li
            key={index}
            className={`${
              defaultData.active === route.name && "bg-gray-100"
            } hover:bg-gray-100 z-50  duration-200 p-2 `}
          >
            <Link to={route.path}> {route.name}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}

export default SideBar;
