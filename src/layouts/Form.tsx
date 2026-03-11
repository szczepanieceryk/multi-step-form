import React from 'react';
import FirstStep from './FirstStep';
import FourthStep from './FourthStep';
interface FormNavigationProps {
  step: number;
}

const Form: React.FC<FormNavigationProps> = ({ step }) => {
  return <form className="p-6 rounded-lg bg-white shadow-md">{step === 1 && <FourthStep />}</form>;
};

export default Form;
