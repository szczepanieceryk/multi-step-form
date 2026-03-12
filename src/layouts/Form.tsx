import React from 'react';
import FirstStep from './FirstStep';
import SecondStep from './SecondStep';
import ThirdStep from './ThirdStep';
import FourthStep from './FourthStep';

interface FormNavigationProps {
  step: number;
}

const Form: React.FC<FormNavigationProps> = ({ step }) => {
  const returnStepToShow = () => {
    let stepToShow;
    if (step === 1) {
      stepToShow = <FirstStep />;
    }
    if (step === 2) {
      stepToShow = <SecondStep />;
    }

    if (step === 3) {
      stepToShow = <ThirdStep />;
    }

    if (step === 4) {
      stepToShow = <FourthStep />;
    }

    return stepToShow;
  };

  return <form className="p-6 rounded-lg bg-white shadow-md">{returnStepToShow()}</form>;
};

export default Form;
