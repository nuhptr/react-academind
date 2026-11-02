const TabButton = ({ children, onClick, isActive }) => {
   // Check if the button is active based on the current tab content
   const buttonClass = isActive ? "active" : ""

   return (
      <li>
         <button className={buttonClass} onClick={onClick}>
            {children}
         </button>
      </li>
   )
}

export default TabButton
