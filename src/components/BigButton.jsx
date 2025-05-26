import React from "react";

const BigButton = ({ children = "Login", ...props }) => (
  <button
    className="
      bg-[#5B8C51]           
      w-[480px]              
      h-[50px]                
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

export default BigButton;
