"use client";

import { useState } from "react";
import Dropdown from "./Dropdown";
// ...
const MenuItems = ({ items }) => {
 const [dropdown, setDropdown] = useState(false);
 return (
  <li className="menu-items">
   {items.submenu ? (
    <>
     <button
      // ...
      aria-expanded={dropdown ? "true" : "false"}
      onClick={() => setDropdown((prev) => !prev)}
     >
      {items.title}{" "}
     </button>
    
     <Dropdown 
      // ...
      dropdown={dropdown} 
     />
    </>
   ) : (
     <>
   </>
    // ...
   )}
  </li>
 );
};

export default MenuItems;