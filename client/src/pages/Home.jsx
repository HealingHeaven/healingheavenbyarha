import React from 'react'
import Grid from '../componend/Grid';
import Hero from '../componend/Hero';
import ServiceCard from '../componend/ServiceCard';
import Testimonial from '../componend/Testimonial';
import Contact from '../componend/ContactForm';
import Footer from '../componend/Footer';
import Steps from '../componend/Steps';
import Faqs from '../componend/Faqs';
import Chatbot from '../componend/Chatbot';
import Test from "../test/gridanimation";
import About from '../componend/About';
const Home = () => {
    return (
        <div className='' id="home">
            <div className=''>
                <Hero />
            </div>
            <div className=''>
                <Grid />
            </div>
            <div className=''>
                <ServiceCard />
            </div>
            <div className=''>
                <Steps />
            </div>

            <div className=''>
                <Contact />
            </div>
            <div>
                <Faqs></Faqs>
            </div>
            <div>
                <Chatbot />
            </div>
            <div>
                <About />
            </div>
            <div className=''>
                <Footer />
            </div>
            {/* WhatsApp Floating Button */}
            <a
                href="https://wa.me/9620778112"
                target="_blank"
                rel="noopener noreferrer"
                className="fixed bottom-5 right-5 z-50"
            >
                <img
                    src="https://img.icons8.com/color/48/000000/whatsapp--v1.png"
                    alt="WhatsApp"
                    className="w-14 h-14 rounded-full shadow-lg hover:scale-110 transition-transform duration-300"
                />
            </a>
        </div>
    )
}

export default Home;