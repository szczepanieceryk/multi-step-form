import React from 'react';
interface FormNavigationProps {
  step: number;
  setStep: React.Dispatch<React.SetStateAction<number>>;
}

const FormNavigation: React.FC<FormNavigationProps> = ({ step, setStep }) => {
  return (
    <div className={`my-4 flex flex-wrap ${step === 1 ? 'justify-end' : 'justify-between'}`}>
      {step > 1 && (
        <button className="text-gray-400" onClick={() => setStep((s) => Math.max(s - 1, 1))}>
          Go Back
        </button>
      )}

      <button
        className="py-2 px-3 bg-blue-500 rounded-md text-white"
        onClick={() => setStep((s) => Math.min(s + 1, 4))}
      >
        {step === 4 ? 'Confirm' : 'Next Step'}
      </button>
    </div>
  );
};

export default FormNavigation;
