import React from "react";
import { data } from "./investorData";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import Link from "next/link";

const Sidebar = ({ selected }) => {
  return (
    <div>
      {data.map((d) => (
        <Link key={d.id} href={`/investor/${d?.link}`}>
          <div
            className={`my-2 border-gray-700 border-dotted border p-2 flex hover:bg-black/10 ${
              d.link === selected && "bg-primary text-white hover:text-black"
            }`}
          >
            <MdKeyboardDoubleArrowRight className="mt-1 mr-1" />
            {d.name}
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Sidebar;
