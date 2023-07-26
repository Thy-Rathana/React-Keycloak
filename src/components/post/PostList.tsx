import React from "react";
import PropTypes from "prop-types";
import PostItem from "./PostItem";

PostList.propTypes = {};

function PostList({ posts }: { posts: Array<any> }) {
  return (
    <div>
      <h1 className="text-4xl">Posts List</h1>
      <div className="flex flex-col gap-5 my-5">
        {posts.length &&
          posts.map((post: any) => <PostItem post={post} key={post.id} />)}
      </div>
    </div>
  );
}

export default PostList;
