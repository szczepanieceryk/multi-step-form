import React, { useState } from 'react';
import Form from './layouts/Form';
import FormNavigation from './layouts/FormNavigation';
const App: React.FC = () => {
  const [step, setStep] = useState<number>(1);

  return (
    <div className="w-[90%] mx-auto max-w-[800px]">
      <div className="mx-auto max-w-[600px] ">
        <Form step={step} />
        <FormNavigation step={step} />
      </div>
    </div>
  );
};

export default App;
