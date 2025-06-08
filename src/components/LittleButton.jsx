import React from "react";

const LittleButton = ({ children = "Sign Up", ...props }) => (
  <button
    className="
      bg-[#5B8C51]           
      w-[170px]              
      h-[40px]                
      rounded-[30px]          
      text-white           
      font-bold               
      flex                    
      items-center           
      justify-center          
      focus:outline-none     
      cursor-pointer          
    "
    {...props}
  >
    {children}
  </button>
);

export default LittleButton;
