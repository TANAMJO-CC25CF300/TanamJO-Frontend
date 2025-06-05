import React from "react";
import { Link } from 'react-router-dom';

function LittenButton() {
    return (
        <main>
            
            {/* Mobile version */}
            <div className="py-0 text-gray-700">
                <Link to="/" className="-mx-3 block px-3 py-3.5 text-md/7 font-semibold border border-gray-300 rounded-full text-center">
                    Sign Up
                </Link>
            </div>
        
        </main>
    );
}

export default LittenButton;    