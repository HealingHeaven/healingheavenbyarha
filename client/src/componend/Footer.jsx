// import { FaInstagram, FaTwitter, FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-300 py-10">
      <div className="max-w-6xl mx-auto px-6">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <h3 className="text-md font-bold text-[#fa62fc]">ABOUT</h3>
            <ul className="mt-2 text-gray-600 space-y-2">
              <li><a href="#">About us</a></li>
              <li><a href="#">Contact Us</a></li>
              <li><a href="#">Help/FAQs</a></li>
            </ul>
          </div>

          {/* Conditions */}
          <div>
            <h3 className="text-md font-bold text-[#fa62fc]">CONDITIONS</h3>
            <ul className="mt-2 text-gray-600 space-y-2">
              <li><a href="#">Anxiety</a></li>
              <li><a href="#">Depression</a></li>
              <li><a href="#">Work Stress</a></li>
              <li><a href="#">Women Health</a></li>
              <li><a href="#">Any Addiction</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-md font-bold text-[#fa62fc]">SERVICES</h3>
            <ul className="mt-2 text-gray-600 space-y-2">
              <li><a href="#">Adult Therapy</a></li>
              <li><a href="#">Teen Therapy</a></li>
              <li><a href="#">Couples Therapy</a></li>
              <li><a href="#">Individual Therapy</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="md:col-span-3 lg:col-span-1">
            <h3 className="text-lg font-bold">Join our newsletter</h3>
            <p className="text-gray-600 text-sm mt-1">
              We’ll send you a nice letter once per week, No spam
            </p>
            <div className="flex mt-3 space-x-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="border border-gray-400 px-4 py-2 rounded-md w-full"
              />
              <button className="bg-[#fa62fc] text-white px-4 py-2 rounded-md">Subscribe</button>
            </div>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-8 text-gray-500 text-xs">
          <p>
            HEALING HEAVEN does not deal with medical or psychological emergencies. We are not
            designed to offer support in crisis situations – including when an individual is
            experiencing thoughts of self-harm or suicide, or is showing symptoms of severe
            clinical disorders such as schizophrenia and other psychotic conditions. In these
            cases, in-person medical intervention is the most appropriate form of help.
          </p>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 flex flex-col md:flex-row md:justify-between items-center text-gray-700">
          {/* Branding */}
          <div className="flex items-center space-x-2">
            <span className="w-8 h-8 flex items-center justify-center bg-black text-white rounded-full text-lg">★</span>
            <span className="font-semibold">Healing Heaven</span>
          </div>

          {/* Social Media Icons */}
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="text-xl">i</a>
            <a href="#" className="text-xl">g</a>
            <a href="#" className="text-xl">x</a>
          </div>

          {/* Copyright */}
          <p className="text-xs mt-4 md:mt-0">&copy;2025 Healing Heaven LLC. All rights reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
