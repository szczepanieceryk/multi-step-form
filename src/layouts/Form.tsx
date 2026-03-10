import React from 'react';
import FirstStep from './FirstStep';
interface FormNavigationProps {
  step: number;
}

const Form: React.FC<FormNavigationProps> = ({ step }) => {
  return <form className="p-6 rounded-lg bg-white">{step === 1 && <FirstStep />}</form>;
};

export default Form;
