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

    switch (step) {
      case 1:
        stepToShow = <FirstStep />;
        break;
      case 2:
        stepToShow = <SecondStep />;
        break;
      case 3:
        stepToShow = <ThirdStep />;
        break;
      case 4:
        stepToShow = <FourthStep />;
        break;
      default:
        stepToShow = <FirstStep />;
    }

    return stepToShow;
  };

  return <form className="p-6 rounded-lg bg-white shadow-md">{returnStepToShow()}</form>;
};

export default Form;
