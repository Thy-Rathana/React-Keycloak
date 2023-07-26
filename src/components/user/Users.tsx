import React from "react";

export const Users = (data: any) => {
  return (
    <>
      {data.length}
      <div>{data.length && data.map((item: any) => JSON.stringify(item))}</div>
    </>
  );
};
