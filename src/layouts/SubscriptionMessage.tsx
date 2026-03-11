import React from 'react';
import thanksIcon from '../assets/images/icon-thank-you.svg';
const SubscriptionMessage: React.FC = () => {
  return (
    <div className="py-[3rem] text-center">
      <img src={thanksIcon} alt="" className="mb-6 mx-auto" />
      <h1 className="text-2xl md:text-3xl font-semibold">Thank you!</h1>
      <p className="mt-2 mb-4 md:mb-[2rem] text-gray-400">
        Thanks for confirming your subscription! We hope you have fun using our platform. If you
        ever need support, please feel free to email us at support@loremgaming.com.
      </p>
    </div>
  );
};

export default SubscriptionMessage;
