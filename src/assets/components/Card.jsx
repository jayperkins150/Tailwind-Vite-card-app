import React from 'react';

const Card = ({ title, description }) => {
    return (
        <div className="m-4 p-6 rounded-lg shadow-xl 
                        bg-gray-100 dark:bg-gray-800 
                        border border-gray-300 dark:border-gray-700
                        hover:shadow-2xl hover:scale-103 transition duration-300 
                        dark:hover:shadow-2xl dark:hover:border-indigo-500
                        cursor-pointer">
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2 text-gray-900 dark:text-white">
                    {title}
                </div>
                <p className="text-gray-700 dark:text-gray-300 text-base">
                    {description}
                </p>
            </div>
        </div>
    );
};

export default Card;
