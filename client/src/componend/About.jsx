import React from 'react';
import bgImage from '../assets/bgImage.jpg'; // 🖼️ make sure this image is in your assets folder

const About = () => {
    return (
        <section
            className="relative bg-white text-gray-800 py-16 px-6 lg:px-32" id='about'
        >
            {/* Background Image with Overlay */}
            <div
                className="absolute inset-0 bg-cover bg-center opacity-50"
                style={{ backgroundImage: `url(${bgImage})` }}
            ></div>

            {/* Overlay to darken/lighten if needed */}
            <div className="absolute inset-0 bg-white bg-opacity-60"></div>

            {/* Content Layer */}
            <div className="relative max-w-6xl mx-auto z-10">
                <h2 className="text-4xl font-bold mb-6 text-center">About Us</h2>
                <p className="text-lg text-center mb-10 text-gray-700 max-w-3xl mx-auto">
                    At <span className="font-semibold text-indigo-600">Healing Heaven</span>, we are dedicated to improving mental well-being by connecting people with professional consultants, therapists, and tools that empower emotional growth. Our platform is built with care to ensure accessibility, trust, and confidentiality.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    <div className="p-6 border rounded-xl shadow-sm hover:shadow-md transition duration-300 bg-white bg-opacity-90">
                        <h3 className="text-xl font-semibold mb-2 text-black">Our Mission</h3>
                        <p className="text-gray-700">
                            To make mental health support more approachable and remove the stigma around therapy by providing holistic and personalized care through a secure digital platform.
                        </p>
                    </div>

                    <div className="p-6 border rounded-xl shadow-sm hover:shadow-md transition duration-300 bg-white bg-opacity-90">
                        <h3 className="text-xl font-semibold mb-2 text-black">What We Offer</h3>
                        <p className="text-gray-700">
                            From 1-on-1 counseling sessions, AI-based mental health assistants, to assessments and wellness blogs – we provide tools tailored to each individual’s mental wellness journey.
                        </p>
                    </div>

                    <div className="p-6 border rounded-xl shadow-sm hover:shadow-md transition duration-300 bg-white bg-opacity-90">
                        <h3 className="text-xl font-semibold mb-2 text-black">Why Choose Us</h3>
                        <p className="text-gray-700">
                            Confidential consultations, certified therapists, easy booking, and continuous follow-up — all built on a reliable and user-friendly platform that respects your privacy and time.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
