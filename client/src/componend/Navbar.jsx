import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-white p-4 lg:mx-20">
            <div className="container mx-auto flex justify-between items-center relative">
                {/* Logo */}
                <Link to="/" className="text-gray-700 text-xl font-bold">
                    Healing Heaven
                </Link>

                {/* Hamburger Menu for Mobile */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="text-black lg:hidden"
                >
                    <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M4 6h16M4 12h16m-7 6h7"
                        />
                    </svg>
                </button>

                {/* Desktop Menu */}
                <div className="hidden lg:flex space-x-6">
                    <Link to="/" className="text-black hover:text-blue-500">Home</Link>
                    <Link to="/services" className="text-black hover:text-blue-500">Services</Link>
                    <Link to="/about" className="text-black hover:text-blue-500">About Us</Link>
                    <Link to="/contact" className="text-black hover:text-blue-500">Contact</Link>
                </div>
            </div>

            {/* Mobile Dropdown */}
            <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? "max-h-60" : "max-h-0"
                    } lg:hidden`}
            >
                <div className="flex flex-col space-y-4 p-4">
                    <Link to="/" className="text-black border-b-2 border-gray-600">Home</Link>
                    <Link to="/services" className="text-black border-b-2 border-gray-600">Services</Link>
                    <Link to="/about" className="text-black border-b-2 border-gray-600">About Us</Link>
                    <Link to="/contact" className="text-black border-b-2 border-gray-600">Contact</Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
