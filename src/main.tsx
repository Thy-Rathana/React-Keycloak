import React from "react";
import ReactDOM from "react-dom/client";
import "./assets/index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import PostsPage from "./pages/PostsPage.tsx";
import Index from "./pages/IndexPage.tsx";
import Tree from "./pages/TreePage.tsx";
import CommentsPage from "./pages/CommentsPage.tsx";
import AlbumPage from "./pages/AlbumPage.tsx";
import PhotosPage from "./pages/PhotosPage.tsx";
import TodosPage from "./pages/TodosPage.tsx";
import UsersPage from "./pages/UsersPage.tsx";
// import { ReactKeycloakProvider } from "@react-keycloak/web";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Index />,
  },
  {
    path: "/posts",
    element: <PostsPage />,
    children: [
      {
        path: "/posts/jhjh",
        element: <PostsPage />,
      },
    ],
  },
  {
    path: "/comments",
    element: <CommentsPage />,
  },
  {
    path: "/albums",
    element: <AlbumPage />,
  },
  {
    path: "/photos",
    element: <PhotosPage />,
  },
  {
    path: "/todos",
    element: <TodosPage />,
  },
  {
    path: "/users",
    element: <UsersPage />,
  },
  {
    path: "/tree",
    element: <Tree />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    {/* <ReactKeycloakProvider authClient={KeycloakKey()}> */}
    <RouterProvider router={router} />
    {/* <Index /> */}
    {/* </ReactKeycloakProvider> */}
  </React.StrictMode>
);
