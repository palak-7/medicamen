import React from "react";
import CareerDetail from "./CareerDetail";

const page = ({ params }) => {
  const id = params.id;
  return (
    <div>
      <CareerDetail id={id} />
    </div>
  );
};

export default page;
