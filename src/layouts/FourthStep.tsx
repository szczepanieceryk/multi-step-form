import React from 'react';
const FourthStep: React.FC = () => {
  return (
    <>
      <h1 className="text-2xl md:text-3xl font-semibold">Finishing up</h1>
      <p className="mt-2 mb-4 md:mb-[2rem] text-gray-400">
        Double-check everything looks OK before confirming.
      </p>
      <div className="p-3 bg-blue-100/50 rounded-md">
        {/** Plan */}
        <div className="mb-2 flex justify-between items-center">
          <div>
            <span className="text-blue-700">
              {' '}
              <strong>Arcade (Monthly)</strong>
            </span>
            <span className="block text-gray-400 underline">Change</span>
          </div>
          <span className="text-blue-700">
            <strong>$9/mo</strong>
          </span>
        </div>

        <hr className="my-4" />

        <div className="mb-2 flex justify-between items-center">
          <span className="block text-gray-400">Online service</span>
          <span className="text-blue-700">+$1/mo</span>
        </div>

        <div className="mb-2 flex justify-between items-center">
          <span className="block text-gray-400">Larger storage</span>
          <span className="text-blue-700">+$2/mo</span>
        </div>
      </div>

      <div className="mt-5 flex justify-between items-center">
        <span className="block text-gray-400">Total (per month/year)</span>
        <span className="text-blue-700">
          <strong>$12/mo</strong>
        </span>
      </div>
    </>
  );
};

export default FourthStep;
