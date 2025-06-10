import React, { useState } from "react";
import { FiSearch, FiX } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

const SearchInput = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const navigate = useNavigate();

    const handleSearch = (e) => {
        setSearchTerm(e.target.value);
    };

    const handleClose = () => {
        navigate('/');
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-transparent z-20">
            
            <button className="absolute top-4 sm:top-5 right-4 sm:right-8 bg-gray-200 rounded-full w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center z-30" onClick={handleClose} aria-label="Close search">
                <FiX className="text-white" size={25} />
            </button>
            
            <div className="w-full max-w-[92%] xs:max-w-[80%] sm:max-w-xl md:max-w-2xl px-2 sm:px-6">
                <div className="relative flex items-center border-b border-gray-400">
                    <input type="text" placeholder="Search for plants, care tips, or solutions..." value={searchTerm} onChange={handleSearch}
                        className="w-full bg-transparent px-4 py-3 text-lg tracking-wide focus:outline-none placeholder:text-gray-400 focus:placeholder:text-gray-400 transition-all duration-300 ease-in-out placeholder:font-nunito placeholder:tracking-wider placeholder:leading-normal"
                        style={{ border: "none", boxShadow: "none", letterSpacing: "0.025em" }}
                    />
                    
                    <button
                        className="ml-2 p-2 bg-transparent hover:bg-transparent focus:outline-none"
                        onClick={() => console.log("Searching for:", searchTerm)} aria-label="Search" tabIndex={0}
                    >
                        <FiSearch size={20} className="text-gray-500 " />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SearchInput;
