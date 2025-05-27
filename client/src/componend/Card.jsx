import React from 'react'

const Card = ({ image, title, description }) => {
    return (
        <div className="bg-white shadow-lg rounded-xl p-4 flex flex-col items-center text-center w-full sm:w-80 hover:-translate-y-3 ease-in-out transition-transform ">
            <img src={image} alt={title} className="w-full h-48 object-cover rounded-lg" />
            <h3 className="text-xl font-semibold mt-4">{title}</h3>
            <p className="text-gray-600 mt-2">{description}</p>
        </div>
    );

}

export default Card
