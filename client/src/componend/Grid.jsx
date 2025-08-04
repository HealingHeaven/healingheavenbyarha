import React from 'react';
import depression from "../assets/depression.png"
import anxiety from '../assets/anxiety.png'
import addition from '../assets/addiction.png'
import trauma from '../assets/trauma.png'
import whyus from '../assets/whyus.png'
const Grid = () => {
    return (
        <div className='w-full flex justify-center items-center'>
            <div className=' gridContainer md:flex md:flex-wrap lg:grid'>
                <div className=' item item-1 flex flex-col lg:flex-row rounded-xl overflow-hidden shadow-lg bg-[#CDD2FF]'>
                    <img src={depression} alt="depression" />
                    <div className='flex justify-start items-center flex-col p-5 gap-4 lg:p-10 lg:gap-4'>
                        <h1 className='text-3xl font-semibold'>Depression</h1>
                        <p className='text-base text-center'>We provide empathetic, evidence-based therapy to help individuals navigate feelings of sadness, hopelessness, and emotional exhaustion. Our goal is to support you in understanding the root causes of your depression, building emotional resilience, and reconnecting with a sense of purpose and joy.</p>
                    </div>
                </div>
                <div className='item item-2 flex flex-col rounded-xl overflow-hidden shadow-lg bg-[#FEDAFD]'>
                    <img src={whyus} alt="anxiety" width={350} />
                    <div className='flex justify-center  flex-col gap-2 p-2'>
                        <h1 className='text-2xl font-semibold text-center'>Why Choose Us for Your Mental Health Journey?</h1>
                        <p className='text-base text-center'>Comprehensive Care Beyond Symptoms We don't just treat depression, anxiety, and stress—we address the whole person. Our experienced mental health consultants understand that healing involves your mind, body, and spirit working in harmony.</p>
                    </div>
                </div>
                <div className='item item-3 flex justify-between flex-col lg:flex-row lg:rounded-xl overflow-hidden shadow-lg bg-[#FCFAE8]'>
                    <div className='flex justify-center  flex-col gap-2 p-2'>
                        <h1 className='text-2xl font-semibold text-center'>Anxiety</h1>
                        <p className='text-[12px] text-center'>Whether you're facing chronic worry, panic attacks, social anxiety we offer practical tools and therapeutic techniques to help you manage anxiety effectively. Our approach focuses on calming the mind,and empowering you to regain control of your life.</p>
                    </div>
                    <img src={anxiety} alt="anxiety" />
                </div>
                <div className='item item-4 flex flex-col rounded-xl overflow-hidden shadow-lg bg-[#86A8FF] '>
                    <img src={trauma} alt="anxiety" className=' lg:w-full lg:h-72' />
                    <div className='flex justify-center  flex-col gap-2 p-2'>
                        <h1 className='text-2xl font-semibold text-center'>Trauma</h1>
                        <p className='text-sm text-center'>We offer a compassionate space for those who have experienced emotional, physical, or psychological trauma. Our trauma-informed therapists work gently and respectfully to help you process painful experiences.</p>
                    </div>
                </div>
                <div className='item item-5 flex flex-col lg:flex-row rounded-none lg:rounded-xl overflow-hidden shadow-lg bg-[#FEDAFD]'>
                    <img src={addition} alt="depression" className=' lg:w-52' />
                    <div className='flex justify-start items-center flex-col p-5 gap-3'>
                        <h1 className='text-3xl font-semibold'>Addiction</h1>
                        <p className='text-sm text-center'>Our addiction recovery services offer a structured and supportive environment tailored to your unique journey. Through a combination of counseling, we help you break the cycle of dependence.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Grid;