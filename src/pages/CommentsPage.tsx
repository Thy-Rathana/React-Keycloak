import React from "react";
import PropTypes from "prop-types";
import Default from "../layouts/Default";
import { useFetch } from "../customHooks/useFetch";
import { Comments as CommentsList } from "../components/comment/Comments";

CommentsPage.propTypes = {};

function CommentsPage(props: any) {
  const data = useFetch("/comments");

  return (
    <>
      <Default auth>
        <div className="container mx-auto">
          <CommentsList data={data} />
        </div>
      </Default>
    </>
  );
}

export default CommentsPage;
