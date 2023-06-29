import React from "react";
import { Link } from "react-router-dom";

function AnchorLink({ name, path }) {
  return (
    <div className="px-3">
      <Link
        to={`/${path}`}
        className={`inline-flex items-center text-blue-500 border-0  focus:outline-none hover:scale-x-125 rounded text-base mt-2 md:mt-0 px-3`}
      >
        {name}
      </Link>
    </div>
  );
}

export default AnchorLink;
