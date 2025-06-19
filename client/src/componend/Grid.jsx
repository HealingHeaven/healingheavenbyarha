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
                        <p>we take pride in the positive impact our online psychologist consultations and therapy sessions have on our client’s lives. </p>
                    </div>
                </div>
                <div className='item item-2 flex flex-col rounded-xl overflow-hidden shadow-lg bg-[#FEDAFD]'>
                    <img src={whyus} alt="anxiety" width={350} />
                    <div className='flex justify-center  flex-col gap-2 p-2'>
                        <h1 className='text-2xl font-semibold text-center'>Why Us</h1>
                        <p className='text-sm text-center'>we take pride in the positive impact our online have on our client’s lives. </p>
                    </div>
                </div>
                <div className='item item-3 flex justify-between flex-col lg:flex-row lg:rounded-xl overflow-hidden shadow-lg bg-[#FCFAE8]'>
                    <div className='flex justify-center  flex-col gap-2 p-2'>
                        <h1 className='text-2xl font-semibold text-center'>Anxiety</h1>
                        <p className='text-sm text-center'>we take pride in the positive impact our online have on our client’s lives. </p>
                    </div>
                    <img src={anxiety} alt="anxiety" />
                </div>
                <div className='item item-4 flex flex-col rounded-xl overflow-hidden shadow-lg bg-[#86A8FF] '>
                    <img src={trauma} alt="anxiety" className=' lg:w-full lg:h-72' />
                    <div className='flex justify-center  flex-col gap-2 p-2'>
                        <h1 className='text-2xl font-semibold text-center'>Trauma</h1>
                        <p className='text-sm text-center'>we take pride in the positive impact our online have on our client’s lives. </p>
                    </div>
                </div>
                <div className='item item-5 flex flex-col lg:flex-row rounded-none lg:rounded-xl overflow-hidden shadow-lg bg-[#FEDAFD]'>
                    <img src={addition} alt="depression" className=' lg:w-52' />
                    <div className='flex justify-start items-center flex-col p-5 gap-3'>
                        <h1 className='text-3xl font-semibold'>Addiction</h1>
                        <p className='text-sm text-center'>we take pride in the positive impact our online psychologist consultations impact our online have on our client’s lives. </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Grid;