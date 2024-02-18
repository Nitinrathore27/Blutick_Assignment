import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-blue-500 text-black py-8">
            <div className="container mx-auto pr-4">
                {/* Company Info Section */}
                <div className="flex flex-col md:flex-row">
                    <div className="md:w-1/3 md:ml-2">
                        {/* Company Logo and Name */}
                        <div className="mb-4">
                            <img src="https://www.bluetickconsultants.com/images/bluetick-consultants.webp" className="w-26 h-12 mb-2" alt="Bluetick Consultants LLP" />
                            <span className="text-lg font-bold">Bluetick Consultants LLP</span>
                        </div>
                        {/* Contact Information */}
                        <div className="mb-4 text-sm">
                            contact@bluetickconsultants.com
                        </div>
                        {/* Social Media Icons */}
                        <div className="flex">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzbTmTmM-1pj8sWBQnGVhIOnAFJSg9UlfaudraQcavWw&s" className="w-12 h-12 mr-2" alt="Social Media Icon" />
                            <img src="https://w7.pngwing.com/pngs/345/769/png-transparent-organization-iso-9000-iso-9001-2015-certification-iso-9001-text-trademark-logo.png" className="w-12 h-12" alt="ISO Logo" />
                        </div>
                    </div>
                    {/* Navigation and Copyright Section */}
                    <div className="md:w-2/3 flex flex-col">
                        <div className="flex flex-col md:flex-row justify-between p-1">
                            {/* Resources */}
                            <div className="mb-4 md:mb-0">
                                <span className="text-lg md:text-xl font-semibold uppercase">Resources</span>
                                <ul className="mt-2">
                                    <li className="mb-2 text-lg">Blogs</li>
                                </ul>
                            </div>
                            {/* Products */}
                            <div className="mb-4 ml-0 md:ml-5">
                                <span className="text-lg md:text-xl font-semibold uppercase">Products</span>
                                <div className="mt-2 flex flex-row">
                                    <span className="mb-2 pr-2 text-lg">Talk to code</span>
                                    <span className="mb-2 px-2 text-lg">InterviewGPT</span>
                                    <span className="mb-2 px-2 text-lg">PrivacyDoc</span>
                                    <span className="mb-2 pl-2 text-lg">Sales Call Evaluator</span>
                                </div>
                            </div>
                        </div>
                        {/* Social Media Icons and Copyright */}
                        <div className="flex justify-between items-center py-6 md:py-10 border-t-2">
                            <div className="pl-1 flex items-center">
                                <img src="https://cdn-icons-png.flaticon.com/512/5968/5968764.png" className="w-6 h-6 mr-4" alt="Social Media Icon" />
                                <img src="https://cdn-icons-png.flaticon.com/512/1384/1384063.png" className="w-6 h-6 mr-4" alt="Social Media Icon" />
                                <img src="https://cdn-icons-png.flaticon.com/512/5968/5968830.png" className="w-6 h-6 mr-4" alt="Social Media Icon" />
                                <img src="https://cdn-icons-png.flaticon.com/512/174/174865.png" className="w-6 h-6 mr-4" alt="Social Media Icon" />
                                <img src="https://cdn-icons-png.flaticon.com/512/665/665212.png" className="w-6 h-6" alt="Social Media Icon" />
                            </div>
                            {/* Copyright */}
                            <span className="pr-4 md:pr-10 text-sm">© 2024 All rights reserved by Bluetick Consultants LLP</span>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
