import React from "react";
import PropTypes from "prop-types";
import Default from "../layouts/Default";
import { useFetch } from "../customHooks/useFetch";
import { Albums } from "../components/album/Albums";

AlbumPage.propTypes = {};

function AlbumPage(props: any) {
  const data = useFetch("/albums");

  return (
    <>
      <Default auth>
        <div className="container mx-auto">
          <Albums data={data} />
        </div>
      </Default>
    </>
  );
}

export default AlbumPage;
