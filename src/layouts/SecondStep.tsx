import React from 'react';
import arcadeIcon from '../assets/images/icon-arcade.svg';
import advancedIcon from '../assets/images/icon-advanced.svg';
import proIcon from '../assets/images/icon-pro.svg';

const SecondStep: React.FC = () => {
  const activeClass = 'border-[#473dffff] bg-[#473dffff]/10';
  return (
    <>
      <h1 className="text-2xl md:text-3xl font-semibold">Select your plan</h1>
      <p className="mt-2 mb-4 md:mb-[2rem] text-gray-400">
        You have the option of monthly or yearly billing.
      </p>
      <div className="md:flex justify-between gap-4">
        {/** Button */}

        <button
          className={`mb-4 p-4 md:p-2 flex flex-wrap w-full md:max-w-[150px] border-2 border-gray-300 hover:border-[#473dffff] hover:bg-[#473dffff]/10 ${activeClass} rounded-md`}
          type="button"
        >
          <img src={arcadeIcon} alt="" className="w-10 h-10 md:basis-full md:mb-[3rem]" />
          <div className="ml-2 flex flex-wrap text-left">
            <span className="block basis-full">Arcade</span>
            <span className="block basis-full text-gray-400">$9/mo</span>
            <span className="hidden md:block basis-full text-blue-700">2 months free</span>
          </div>
        </button>
        {/** Button */}

        {/** Button */}
        <button
          className="mb-4 p-4 md:p-2 flex flex-wrap w-full md:max-w-[150px] border-2 border-gray-300 hover:border-[#473dffff] rounded-md"
          type="button"
        >
          <img src={advancedIcon} alt="" className="w-10 h-10 md:basis-full md:mb-[3rem]" />
          <div className="ml-2 flex flex-wrap text-left">
            <span className="block basis-full">Advanced</span>
            <span className="block basis-full text-gray-400">$12/mo</span>
            <span className="hidden md:block basis-full text-blue-700">2 months free</span>
          </div>
        </button>
        {/** Button */}

        {/** Button */}
        <button
          className="mb-4 p-4 md:p-2 flex flex-wrap  w-full md:max-w-[150px] border-2 border-gray-300 hover:border-[#473dffff] rounded-md"
          type="button"
        >
          <img src={proIcon} alt="" className="w-10 h-10 md:basis-full md:mb-[3rem]" />
          <div className="ml-2 flex flex-wrap text-left">
            <span className="block basis-full">Pro</span>
            <span className="block basis-full text-gray-400">$15/mo</span>
            <span className="hidden md:block basis-full text-blue-700">2 months free</span>
          </div>
        </button>
        {/** Button */}
      </div>{' '}
      <div className="p-4 flex flex-wrap justify-center bg-blue-100/50 rounded-md">
        <span>
          <strong>Monthly</strong>
        </span>
        <span>
          <strong>Yearly</strong>
        </span>
      </div>
    </>
  );
};

export default SecondStep;
