import React from "react";

export const Comments = (data: any) => {
  return (
    <div>{data.length && data.map((item: any) => JSON.stringify(item))}</div>
  );
};
