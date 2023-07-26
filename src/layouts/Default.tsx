import React, {
  PropsWithChildren,
  createContext,
  useEffect,
  useState,
} from "react";
import PropTypes from "prop-types";
import NavBar from "./NavBar";
import SideBar from "./SideBar";
import Footer from "./Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PrivateRoute from "../helpers/PrivateRoute";
import Auth from "./Auth";
// import { useKeycloak } from "@react-keycloak/web";

Default.propTypes = {};

export class RouteClass {
  constructor(
    public path: string,
    public name: string,
    public handler: () => void
  ) {}
}

export const DefaultContext = createContext(
  {} as { active: string; setActive: (active: string) => void }
);

function Default({
  children,
  auth = false,
}: {
  children: any;
  auth?: boolean;
}) {
  // const { keycloak, initialized } = useKeycloak();

  // useEffect(() => {
  //   console.log("keycloak", keycloak);
  //   console.log("initialized", initialized);
  // }, []);

  const routes: RouteClass[] = [
    {
      path: "/posts",
      name: "Posts",
      handler: () => setActive("Posts"),
    },
    {
      path: "/comments",
      name: "Comments",
      handler: () => setActive("Comments"),
    },
    {
      path: "/albums",
      name: "Albums",
      handler: () => setActive("Albums"),
    },
    {
      path: "/photos",
      name: "Photos",
      handler: () => setActive("Photos"),
    },
    {
      path: "/todos",
      name: "Todos",
      handler: () => setActive("Todos"),
    },
    {
      path: "/users",
      name: "Users",
      handler: () => setActive("Users"),
    },
    {
      path: "/tree",
      name: "Tree",
      handler: () => setActive("Tree"),
    },
  ];

  const [active, setActive] = useState(routes[0].name);

  return (
    <>
      {/* {auth && <Auth />} */}
      <DefaultContext.Provider value={{ active, setActive }}>
        <NavBar routes={routes} />
        <main className="container mx-auto">{children}</main>
        <Footer />
        {/* <BrowserRouter>
          <Routes>
            <Route path="/tree" element={<Tree />} />
            <Route
              path="/posts"
              element={
                <PrivateRoute>
                  <Post />
                </PrivateRoute>
              }
            />
          </Routes>
        </BrowserRouter> */}
      </DefaultContext.Provider>
    </>
  );
}

export default Default;
