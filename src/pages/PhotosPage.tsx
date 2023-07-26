import React from "react";
import PropTypes from "prop-types";
import Default from "../layouts/Default";
import { useFetch } from "../customHooks/useFetch";
import { Photos } from "../components/photo/Photos";

PhotosPage.propTypes = {};

function PhotosPage(props: any) {
  const data = useFetch("/photos");

  return (
    <>
      <Default auth>
        <div className="container mx-auto">
          <Photos data={data} />
        </div>
      </Default>
    </>
  );
}

export default PhotosPage;
