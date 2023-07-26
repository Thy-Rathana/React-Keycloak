import React from "react";
import PropTypes from "prop-types";
import Default from "../layouts/Default";

Index.propTypes = {};

function Index(props: any) {
  return (
    <Default>
      <div className="flex justify-between">
        <h1 className="text-4xl">Home Page</h1>
        <h1 className="text-4xl">Home Page</h1>
      </div>
    </Default>
  );
}

export default Index;
