import React from "react";
import PropTypes from "prop-types";

Footer.propTypes = {};

function Footer(props: any) {
  return (
    <>
      <footer className="bg-gray-200 text-center text-xs p-3  w-full">
        &copy; {new Date().getFullYear()} Blog App - All Rights Reserved.
      </footer>
    </>
  );
}

export default Footer;
