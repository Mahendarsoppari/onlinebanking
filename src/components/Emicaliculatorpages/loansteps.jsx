import React from 'react';

const LoanSteps = () => {
  const steps = [
    {
      number: "1",
      title: "Sign up using mobile number",
      description: "Register by entering your mobile number for verification."
    },
    {
      number: "2",
      title: "Enter basic information & check eligibility",
      description: "Fill in your basic details to see if you're eligible for a loan."
    },
    {
      number: "3",
      title: "Verify your profile by uploading KYC documents",
      description: "Upload your KYC documents to verify your identity."
    },
    {
      number: "4",
      title: "Choose your loan amount and tenure",
      description: "Select the loan amount and repayment duration that suits you best."
    },
    {
      number: "5",
      title: "Get loan disbursed directly into your bank account",
      description: "The approved loan amount will be transferred directly to your bank account."
    },
  ];

  return (
    <div className="container  px-48 mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-6">Steps to Apply for Personal Loan</h1>
      <div className="space-y-6">
        {steps.map((step, index) => (
          <div key={index} className="flex items-start p-4 bg-white rounded-lg shadow-md border border-gray-300">
            <div className="flex-shrink-0">
              <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-blue-500 text-white font-bold">
                {step.number}
              </span>
            </div>
            <div className="ml-4">
              <h2 className="text-xl font-semibold text-gray-800">{step.title}</h2>
              <p className="text-gray-600">{step.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LoanSteps;
