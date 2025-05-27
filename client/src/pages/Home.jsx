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
const Home = () => {
    return (
        <div className=''>
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
            <div className=''>
                <Footer />
            </div>
            {/* <div>
                <Test />
            </div> */}
        </div>
    )
}

export default Home;