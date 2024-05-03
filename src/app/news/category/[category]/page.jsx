import React from "react";
import Category from "./Category";

const page = ({ params }) => {
  const cat = params.category;
  return (
    <div>
      <Category cat={cat} />
    </div>
  );
};

export default page;
