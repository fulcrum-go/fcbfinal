// import React from 'react'

// const Buttons = (props) => {
//     return (
//         <div>
//             <button className="border-l border-r border-gray-500 px-6 py-1">{props.name}</button>
//         </div>

//     )
// }

// export default Buttons

import { Link } from 'react-router-dom';

const Buttons = ({ name, hover = false }) => {
  const path = `/${name.toLowerCase()}`;
  const baseClass = "mx-2 px-4 py-2 rounded text-white transition";
  const hoverClass = hover
    ? "bg-black hover:bg-gray-800"
    : "bg-gray-600"; // or any static color

  return (
    <Link to={path}>
      <button className={`${baseClass} ${hoverClass}`}>
        {name}
      </button>
    </Link>
  );
};

export default Buttons;
