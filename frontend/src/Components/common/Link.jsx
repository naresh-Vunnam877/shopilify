import React from "react";
import { Link } from "react-router-dom";

function AnchorLink({ name, path, children, className }) {
  const cName = !className ? 'inline-flex items-center text-blue-500 border-0  focus:outline-none hover:scale-x-125 rounded text-base mt-2 md:mt-0 px-3 ': className
  return (
    <div className="px-3">
      <Link
        to={ `/${path}` }
        className={ cName }
      >
        { children}
        <h4 className="text-white mx-2">{name}</h4>
      </Link>
    </div>
  );
}

export default AnchorLink;
