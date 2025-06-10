import React from "react";

function BigButton({ children = "Login", ...props }) {
    return (

        <button
        className="
          bg-[#5B8C51]
          hover:bg-[#4e7a46]         /* Warna latar saat hover */
          transition-all duration-200 ease-in-out /* Transisi halus */
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
        
    )
}

export default BigButton;