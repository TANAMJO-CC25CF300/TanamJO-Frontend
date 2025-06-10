import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";

const SearchInput = ({ onClose }) => {
    const [searchTerm, setSearchTerm] = useState("");

    const handleSearch = (e) => {
        setSearchTerm(e.target.value);
    };

    return (
        <>
        
            <div className="fixed inset-0 bg-white/85 z-[60]" onClick={onClose}></div>
            
            <div className="fixed inset-0 flex items-center justify-center z-[70]">
                <button className="absolute top-4 sm:top-5 right-4 sm:right-8 rounded-full w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center z-[80]" onClick={onClose} aria-label="Close search">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-gray-400">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>

                <div className="relative w-full max-w-[92%] xs:max-w-[80%] sm:max-w-xl md:max-w-2xl px-2 sm:px-6">
                    <div className="relative flex items-center border-b border-gray-600">
                        <input type="text" placeholder="Search for plants, care tips, or solutions..." value={searchTerm} onChange={handleSearch}
                            className="w-full bg-transparent px-4 py-3.5 text-lg tracking-wide focus:outline-none placeholder:text-black focus:placeholder:text-gray-400 transition-all duration-300 ease-in-out placeholder:font-nunito placeholder:tracking-wider placeholder:leading-normal text-gray-900"
                            style={{ border: "none", boxShadow: "none", letterSpacing: "0.025em" }} autoFocus
                        />
                        
                        <button className="ml-2 p-2 bg-transparent hover:bg-transparent focus:outline-none" onClick={() => console.log("Searching for:", searchTerm)}  aria-label="Search" tabIndex={0}>
                            <FiSearch size={20} className="text-gray-600" />
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SearchInput;