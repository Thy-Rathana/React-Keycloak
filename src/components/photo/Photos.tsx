import React from "react";

export const Photos = (data: any) => {
  return (
    <div>{data.length && data.map((item: any) => JSON.stringify(item))}</div>
  );
};
