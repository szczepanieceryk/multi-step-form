import React from 'react';
interface FormNavigationProps {
  step: number;
}

const FormNavigation: React.FC<FormNavigationProps> = ({ step }) => {
  return (
    <div className="my-4 flex flex-wrap justify-between">
      <button className="text-gray-400">Go Back</button>

      <button className="py-2 px-3 bg-blue-500 rounded-md text-white">
        {step === 4 ? 'Confirm' : 'Next Step'}
      </button>
    </div>
  );
};

export default FormNavigation;
