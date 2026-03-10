import React, { useState } from 'react';
const FirstStep: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [name, setName] = useState<string>('');
  const [number, setNumber] = useState<string>('');

  return (
    <>
      <h1 className="text-2xl font-semibold">Personal info</h1>
      <p className="my-2 text-gray-400">
        Please provide your name, email address, and phone number.
      </p>
      <label className="block mb-4" htmlFor="">
        Name
        <input
          type="text"
          placeholder="e.g. Stephen King"
          className="p-2 w-full border-2 border-gray-200 rounded-md"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />{' '}
      </label>

      <label className="block mb-4" htmlFor="">
        Email Address
        <input
          type="email"
          placeholder="e.g. stephenking@lorem.com"
          className="p-2 w-full border-2 border-gray-200 rounded-md"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />{' '}
      </label>

      <label className="block mb-4" htmlFor="">
        Phone Number
        <input
          type="text"
          placeholder="e.g. +1 234 567 890"
          className="p-2 w-full border-2 border-gray-200 rounded-md"
          onChange={(e) => setNumber(e.target.value)}
          value={number}
        />{' '}
      </label>
    </>
  );
};

export default FirstStep;
