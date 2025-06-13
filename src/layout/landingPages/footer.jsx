import React from 'react';
import logo from '@/assets/logo/logo.svg';

const Footer = () => {
  return (
    <>        
       <footer className="w-full py-6 px-4 sm:px-9 lg:px-20 text-gray-600 pt-20">
        
            <div className="max-w-[100%] mx-auto border-t border-gray-300 pt-8"></div>

            <div className="max-w-[100%] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 sm:gap-8 lg:gap-10">
                <div className="col-span-1 -mt-2 text-left">
                    <div className="w-18 h-8 mb-4 overflow-hidden flex items-center">
                        <img src={logo} alt="Tanamjo" className="h-full w-full object-cover object-center" />
                    </div>
                    <p className="text-sm/6 text-gray-400 font-semibold mb-3 max-w-[80%] text-left tracking-wider font-nunito leading-normal">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit....
                    </p>
                    
                    <p className="text-sm text-gray-400 font-semibold mb-3 text-left">Follow Us</p>
                    
                    <div className="flex gap-3.5">
                        <a href="#">
                            <div className="w-8 h-8 bg-[#5B8C51] rounded-full flex items-center justify-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                                </svg>
                            </div>
                        </a>
                        <a href="#">
                            <div className="w-8 h-8 bg-[#5B8C51] rounded-full flex items-center justify-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                                </svg>
                            </div>
                        </a>
                        <a href="#">
                            <div className="w-8 h-8 bg-[#5B8C51] rounded-full flex items-center justify-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                                </svg>
                            </div>
                        </a>
                    </div>                    
                </div>

                <div className="text-left">
                    <h2 className="text-sm/6 text-gray-400 font-semibold mb-4 text-left tracking-wider font-nunito leading-normal">Categories</h2>
                    <ul className="space-y-2 text-sm/6 text-gray-400 text-left tracking-wider font-nunito leading-normal">
                        <li className="hover:underline cursor-pointer">About Us</li>
                        <li className="hover:underline cursor-pointer">Plant Care Guide</li>
                        <li className="hover:underline cursor-pointer">Identify Plants</li>
                        <li className="hover:underline cursor-pointer">Application</li>
                    </ul>
                </div>

                <div className="text-left">
                    <h2 className="font-semibold mb-4 text-sm/6 text-gray-400 text-left tracking-wider font-nunito leading-normal">Company</h2>
                    <ul className="space-y-2 text-sm/6 text-gray-400 text-left tracking-wider font-nunito leading-normal">
                        <li className="hover:underline cursor-pointer">Plant Guide</li>
                        <li className="hover:underline cursor-pointer">Disease Detection</li>
                        <li className="hover:underline cursor-pointer">Expert Consultation</li>
                    </ul>
                </div>

                <div className="text-left">
                    <h2 className="font-semibold mb-4 text-sm/6 text-gray-400 text-left tracking-wider font-nunito leading-normal">Help & Support</h2>
                    <ul className="space-y-2 text-sm/6 text-gray-400 text-left tracking-wider font-nunito leading-normal">
                        <li className="hover:underline cursor-pointer">FAQ</li>
                        <li className="hover:underline cursor-pointer">Privacy Policy</li>
                        <li className="hover:underline cursor-pointer">Terms of Service</li>
                        <li className="hover:underline cursor-pointer">Contact us</li>
                    </ul>
                </div>

                <div className="col-span-1 sm:col-span-2 md:col-span-3 lg:col-span-1 text-left">
                    <h2 className="font-semibold mb-4 text-sm/6 text-gray-400 text-left tracking-wider font-nunito leading-normal">Join Our Newsletter</h2>
                    <p className="text-xs text-gray-400 mb-4 font-nunito tracking-wider leading-normal">Stay updated with our latest plant care tips and gardening news!</p>
                    <div className="flex flex-col space-y-3">
                        <div className="flex items-center bg-white border border-gray-300 rounded-lg overflow-hidden h-12 w-full max-w-[300px] shadow-sm">
                            <input type="email" placeholder="Enter your email address" className="px-4 text-sm text-gray-700 w-full h-full bg-white focus:outline-none focus:ring-2 focus:ring-[#5B8C51] focus:border-transparent placeholder:text-gray-400 text-left"/>
                        </div>

                        <button className="h-12 px-6 bg-[#5B8C51] text-white font-semibold rounded-lg hover:bg-[#4A7A40] transition-colors duration-300 flex items-center justify-center space-x-2 w-full max-w-[300px]">
                            <span>Subscribe</span>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
            
            <div className="max-w-[1070px] mx-auto mt-10 border-t border-gray-300 pt-4 text-center  text-sm/6 font-nunito tracking-wider leading-normal text-gray-400">
                Copyright Satyam Studio
            </div>
        </footer>
    </>
  );
};

export default Footer;
