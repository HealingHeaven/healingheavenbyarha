import React from 'react'
import Card from './Card';
import CFF from '../assets/rb_3212 1.png'
import single from '../assets/single.png 1.png'
import couple from '../assets/couple.png';
import teen from '../assets/teen.png';
const OurServices = () => {
    const services = [
        {
            image: single,
            title: "Mental Health Therapy",
            description: "Personalized therapy sessions to improve mental well-being."
        },
        {
            image: couple,
            title: "Online Consultation",
            description: "Get expert advice from professional psychiatrists online."
        },
        {
            image: teen,
            title: "Stress Management",
            description: "Learn how to manage stress with guided techniques."
        }
    ];

    return (
        <section className="py-12 px-4 w-full">
            <div className="mb-28 flex flex-col md:flex-row justify-evenly items-center bg-[#fcdbdc] shadow-lg rounded-xl p-2 max-w-[70rem] mx-auto gap-2 md:gap-6  border-2 border-[#fb9fa2] ">
                <img src={CFF} alt="Consult" className="w-32 h-32 object-cover rounded-lg" />
                <div className="flex flex-col">
                    <h1 className="text-2xl font-bold text-gray-800">Free Consultation</h1>
                    <p className="text-gray-600 mt-2">Get a free initial consultation with our experts to discuss your mental health needs.</p>
                </div>
                <button className="mt-4 bg-[#fcdbdc] text-[#d76a6e] px-7 py-2 rounded-full border-2 border-[#d76a6e] hover:bg-[#d76a6e] hover:text-[#fcdbdc] hover:-translate-y-1 ease-in-out transition-transform ">Consult a coach for free</button>
            </div>
            <div className="max-w-6xl mx-auto text-center">
                <h2 className="text-3xl font-bold text-gray-800 mb-8">Our Services</h2>
                <div className="flex flex-wrap justify-center gap-6">
                    {services.map((service, index) => (
                        <Card key={index} {...service} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default OurServices
