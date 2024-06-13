import React from "react";
import DetailedNews from "./DetailedNews";
const page = ({ params }) => {
  const id = params.id;
  return (
    <div>
      <DetailedNews id={id} />
    </div>
  );
};

export default page;
