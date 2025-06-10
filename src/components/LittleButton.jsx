import React from "react";

const LittleButton = ({ children = "Sign Up", ...props }) => (
  <button
    className="
      bg-[#5B8C51]           
      hover:bg-[#4a7643]      /* Warna lebih gelap saat hover */
      transition-colors       /* Animasi halus */
      duration-300            /* Durasi animasi */
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
