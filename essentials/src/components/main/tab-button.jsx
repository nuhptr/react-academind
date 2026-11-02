const TabButton = ({ children, onClick, isActive }) => {
   const buttonClass = isActive
      ? "bg-tab-active text-tab-text"
      : "bg-transparent text-heading hover:bg-tab-hover hover:text-tab-text"

   return (
      <li>
         <button
            className={`cursor-pointer rounded-md border-0 px-3 py-2 font-roboto-condensed text-sm transition-all duration-200 ease-in-out sm:px-4 sm:text-base ${buttonClass}`}
            onClick={onClick}
         >
            {children}
         </button>
      </li>
   )
}

export default TabButton
