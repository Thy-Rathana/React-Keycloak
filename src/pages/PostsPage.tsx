import React, { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import Default from "../layouts/Default";
import PostList from "../components/post/PostList";
import { useFetch } from "../customHooks/useFetch";

PostPage.propTypes = {};

function PostPage(props: any) {
  const posts = useFetch("/posts");

  return (
    <>
      {/* <Auth /> */}
      <Default auth>
        <div className="container mx-auto">
          <PostList posts={posts} />
        </div>
      </Default>
    </>
  );
}

export default PostPage;
