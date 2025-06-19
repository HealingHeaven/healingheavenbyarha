import { useState } from "react";
import { useLocation } from "react-router-dom";
import logo from "../assets/logo.png";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    const handleNavigateToSection = (id) => {
        if (location.pathname !== "/") {
            window.location.href = `/#${id}`;
        } else {
            const el = document.getElementById(id);
            if (el) el.scrollIntoView({ behavior: "smooth" });
        }
        setIsOpen(false);
    };

    return (
        <nav className="bg-white p-4 lg:mx-20 z-50 relative">
            <div className="container mx-auto flex justify-between items-center relative">
                {/* Logo */}
                <button
                    onClick={() => handleNavigateToSection("home")}
                    className="w-20 h-20 overflow-hidden rounded-full"
                >
                    <img src={logo} alt="logo" width={300} />
                </button>

                {/* Hamburger Menu */}
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
                    <button onClick={() => handleNavigateToSection("home")} className="text-black hover:text-blue-500">Home</button>
                    <button onClick={() => handleNavigateToSection("services")} className="text-black hover:text-blue-500">Services</button>
                    <button onClick={() => handleNavigateToSection("about")} className="text-black hover:text-blue-500">About Us</button>
                    <button onClick={() => handleNavigateToSection("contact")} className="text-black hover:text-blue-500">Contact</button>
                </div>
            </div>

            {/* Mobile Dropdown */}
            <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? "max-h-60" : "max-h-0"} lg:hidden`}>
                <div className="flex flex-col space-y-4 p-4">
                    <button onClick={() => handleNavigateToSection("home")} className="text-black border-b-2 border-gray-600 text-left">Home</button>
                    <button onClick={() => handleNavigateToSection("services")} className="text-black border-b-2 border-gray-600 text-left">Services</button>
                    <button onClick={() => handleNavigateToSection("about")} className="text-black border-b-2 border-gray-600 text-left">About Us</button>
                    <button onClick={() => handleNavigateToSection("contact")} className="text-black border-b-2 border-gray-600 text-left">Contact</button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
