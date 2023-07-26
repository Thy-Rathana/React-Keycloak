import React, { useEffect } from "react";
import PropTypes from "prop-types";

PostItem.propTypes = {};

function PostItem({ post }: { post: any }) {
  return (
    <div className="bg-slate-50 shadow-md border rounded-lg p-10 hover:bg-slate-200">
      <h3 className="text-xl w-fit">{post.title}</h3>
      <div className="flex text-green-600 gap-5">
        <h4 className="">ID: {post.id}</h4>
        <p>User ID: {post.userId}</p>
      </div>
      <div className="pt-4">
        <p className="bg-white rounded-lg border p-4">{post.body}</p>
      </div>
    </div>
  );
}

export default PostItem;
