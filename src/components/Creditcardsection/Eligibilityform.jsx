import React, { useState } from "react";

const EligibilityForm = () => {
  const [isWhatsAppChecked, setWhatsAppChecked] = useState(false);
  const [isTermsChecked, setTermsChecked] = useState(false);

  return (
    <div className=" mt-10 mr-10  ml-10 p-8  bg-white rounded-lg  ">
      {/* Heading */}
      <h2 className="text-2xl font-semibold text-gray-900 mb-6 text-center">
        Enjoy Instant Approval & Processing
      </h2>

      {/* Input field */}
      <div className="flex items-center mb-6">
        <span className="text-gray-500 mr-2 text-lg">+91</span>
        <input
          type="text"
          placeholder="Enter mobile number"
          className="flex-1 border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Check eligibility button */}
      <button className="bg-blue-600 text-white w-full p-3 rounded-lg font-semibold hover:bg-blue-500 transition-colors">
        Check Eligibility
      </button>

      {/* Terms and Conditions */}
      <div className="mt-6 text-sm text-gray-600">
        <label className="flex items-center mb-3">
          <input
            type="checkbox"
            className="mr-2"
            checked={isTermsChecked}
            onChange={() => setTermsChecked(!isTermsChecked)}
          />
          By proceeding, you agree with our{" "}
          <a href="#" className="text-blue-600 ml-1">
            Terms & Conditions
          </a>{" "}
          &{" "}
          <a href="#" className="text-blue-600 ml-1">
            Privacy Policy
          </a>
        </label>
        <label className="flex items-center">
          <input
            type="checkbox"
            className="mr-2"
            checked={isWhatsAppChecked}
            onChange={() => setWhatsAppChecked(!isWhatsAppChecked)}
          />
          I agree to receive updates on WhatsApp
        </label>
      </div>
    </div>
  );
};

export default EligibilityForm;
