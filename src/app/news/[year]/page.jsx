import React from "react";
import Year from "./Year";
const page = ({ params }) => {
  const year = params.year;
  return (
    <div>
      <Year year={year} />
    </div>
  );
};

export default page;
