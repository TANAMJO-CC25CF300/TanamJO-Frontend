import React from "react";
import logoTanamjo1 from "../../public/logoTanamjo1.png"

export default function Footer() {
    return (
        <footer className="w-full bg-white py-6 px-6 lg:px-20 text-gray-600 ">
            <div className="w-[1070px] border-t border-gray-300 pt-10"></div>
            {/* Konten Footer */}
            <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-10">
                {/* 1. Logo & Deskripsi */}
                <div className="col-span-1 lg:col-span-1 -mt-2">
                    <div className="w-18 h-8 mb-4 overflow-hidden flex items-center">
                        <img src={logoTanamjo1} alt="Tanamjo" className=" h-full w-full object-cover objct center" />
                    </div>
                    <p className="text-sm text-gray-400 font-semibold mb-2 w-[80%]">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit....
                    </p>
                    <p className="text-sm text-gray-400 font-semibold mb-2">Follow Us</p>
                    <div className="flex gap-3 mb-4">
                        <div className="w-6 h-6 bg-gray-400 rounded-full" />
                        <div className="w-6 h-6 bg-gray-400 rounded-full" />
                        <div className="w-6 h-6 bg-gray-400 rounded-full" />
                    </div>
                    <p className="text-sm text-gray-400 font-semibold mb-2">Join Community</p>
                    <div className="w-6 h-6 bg-gray-400 rounded-full" />
                </div>
                {/* 2. Categories */}
                <div>
                    <h2 className="text-sm text-gray-400 font-bold mb-4">Categories</h2>
                    <ul className="space-y-2 text-sm text-gray-400">
                        <li>Plant Encyclopedia</li>
                        <li>Plant Care Guide</li>
                        <li>Identify Plants</li>
                        <li>Application</li>
                    </ul>
                </div>
                {/* 3. Company */}
                <div>
                    <h2 className="font-bold mb-4 text-sm text-gray-400">Company</h2>
                    <ul className="space-y-2 text-sm text-gray-400">
                        <li>Plant Guide</li>
                        <li>Disease Detection</li>
                        <li>Expert Consultation</li>
                    </ul>
                </div>
                {/* 4. Help & Support */}
                <div>
                    <h2 className="font-bold mb-4 text-sm text-gray-400">Help & Support</h2>
                    <ul className="space-y-2 text-sm text-gray-400">
                        <li>FAQ</li>
                        <li>Privacy Policy</li>
                        <li>Terms of Service</li>
                        <li>Contact us</li>
                    </ul>
                </div>
                {/* 5. Newsletter */}
                <div className="lg:col-span-1">
                    <h2 className="font-bold mb-4 text-sm text-gray-400">Join a Newsletter</h2>
                    <div className="flex items-center bg-white border border-gray-300 rounded-full overflow-hidden h-10 w-47">
                        <input
                            type="email"
                            placeholder="Enter Your Email"
                            className="px-4 text-sm text-gray-700 w-full h-full bg-white focus:outline-none placeholder:text-xs"
                        />
                        <button className="h-10 px-6 bg-gray-200 text-gray-700 font-semibold rounded-full">
                            →
                        </button>
                    </div>
                </div>
            </div>
            {/* Bottom Bar */}
            <div className="mt-10 border-t border-gray-300 pt-4 text-center text-xs text-gray-400">
                Copyright Satyam Studio
            </div>
        </footer>
    );
}
