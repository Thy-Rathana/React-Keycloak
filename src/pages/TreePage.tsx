import React from "react";
import First from "../components/Tree/First";
import Default from "../layouts/Default";

export default function Tree(any: any) {
  return (
    <Default>
      <div className="container mx-auto">
        <First />;
      </div>
    </Default>
  );
}
