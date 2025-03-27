'use client';
import React, { useState } from 'react';

const ExploreTabs: React.FC = () => {
  const [activeTab, setActiveTab] = useState('Explore Workshops');

  const tabs = ['Explore Workshops', 'Regular Classes', 'Private Training'];

  return (
    <div className='bg-white px-1 md:px-4 lg:px-2 py-4 rounded-lg'>
      <div className='flex space-x-6 text-lg md:text-2xl font-semibold mb-4 overflow-x-auto whitespace-nowrap hide-scrollbar'>
        {tabs.map((tab) => (
          <h2
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`cursor-pointer ${
              activeTab === tab
                ? 'font-bold text-black'
                : 'text-gray-400 hover:text-gray-500'
            }`}
          >
            {tab}
          </h2>
        ))}
      </div>

      <p className='text-gray-500 text-sm md:text-base'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>
    </div>
  );
};

export default ExploreTabs;
