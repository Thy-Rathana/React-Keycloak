import React, { useContext } from "react";
import { TreeDataContext } from "./First";

export const Third = () => {
  const data = useContext(TreeDataContext);

  return (
    <>
      Third and the data is
      {data.count}
      <button
        className="border-2 bg-gray-400 px-3 py-2"
        onClick={() => data.setCount(data.count - 1)}
      >
        -
      </button>
    </>
  );
};
