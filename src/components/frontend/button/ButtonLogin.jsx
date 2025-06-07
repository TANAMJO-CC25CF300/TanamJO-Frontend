import React from "react";
import { Link } from 'react-router-dom';

function ButtonLogin() {
    return (

        <main>
            {/* Desktop version */}
            <div className="hidden xl:flex xl:flex-1 xl:justify-end gap-x-5">
                <div className="flex items-center justify-center w-11 h-11 text-white bg-white/20 backdrop-blur-sm rounded-full border-1 border-white">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                    </svg>
                </div>

                <Link to="/" className="text-sm/6 font-semibold text-white tracking-wide bg-white/20 backdrop-blur-sm rounded-full px-10 py-2.5 border-1 border-white">
                    Sign Up
                </Link>
            </div>
        </main>
        
    );
}

export default ButtonLogin;    