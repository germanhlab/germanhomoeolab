const Dropdown = ({ submenus, dropdown }) => {
    return (
     <ul className={`dropdown ${dropdown ? "show" : ""}`}>
      {/* ... */}
     </ul>
    );
   };
   
   export default Dropdown;