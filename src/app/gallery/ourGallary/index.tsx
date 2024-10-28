'use client';
import Image from 'next/image';
import { useState } from 'react';

const GalleryTabs = () => {
  const [activeTab, setActiveTab] = useState('our-customers');

  const renderContent = () => {
    switch (activeTab) {
      case 'production':
        return <div className='w-[100%] h-auto'>
            <Image 
            alt='img_gallary'
            style={{ width: '100%', height: '100%', objectFit: 'contain' }} 
            src={require("../../../public/image/gallary/production.png")} ></Image>
        </div>;
      case 'our-customers':
        return <div className='w-[100%] h-auto'>
            <Image 
            alt='img_gallary'
            style={{ width: '100%', height: '100%', objectFit: 'contain' }} 
            src={require("../../../public/image/gallary/our-customers.png")} ></Image>
        </div>;
      case 'office-block':
        return <div className='w-[100%] h-auto'>
            <Image 
            alt='img_gallary'
            style={{ width: '100%', height: '100%', objectFit: 'contain' }} 
            src={require("../../../public/image/gallary/office-block.png")} ></Image>
        </div>;
      default:
        return null;
    }
  };

  return (
    <div className="flex flex-col items-center py-10 bg-white">
      <div className="flex mt-20 flex-col items-center mb-8">
          <h3 className="text-blueAccent text-4xl font-bold">
            OUR GALLERY
          </h3>
          <div className="w-[40%] h-[4px] bg-greenPrimary"></div>
    </div>
    <div className="relative flex justify-between border-2 border-blue-700 rounded-full 
    overflow-hidden xl:w-[36%] lg:w-[44%] md:w-[60%] w-[60%]">
        <TabButton
          label="PRODUCTION"
          isActive={activeTab === 'production'}
          onClick={() => setActiveTab('production')}
        />
        <TabButton
          label="OUR CUSTOMERS"
          isActive={activeTab === 'our-customers'}
          onClick={() => setActiveTab('our-customers')}
        />
        <TabButton
          label="OFFICE BLOCK"
          isActive={activeTab === 'office-block'}
          onClick={() => setActiveTab('office-block')}
        />
    </div>

    <div className="mt-12 w-[100%] px-main">{renderContent()}</div>
    </div>
  );
};

const TabButton = ({ label, isActive, onClick }: any) => (
  <button
    className={`flex-1 px-4 xl:py-[12px] lg:py-[12px] md:py-[10px] py-[8px] text-center 
       text-[10px] md:text-[12px] lg:text-[14px] xl:text-[16px] font-medium text-base transition-all duration-300 
      ${
        isActive
          ? 'bg-gradient-to-r from-blue-500 to-blue-900 text-white'
          : 'text-blue-700'
      }
      rounded-full
    `}
    onClick={onClick}
  >
    {label}
  </button>
);

export default GalleryTabs;
