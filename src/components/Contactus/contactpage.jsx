import React from 'react';

function ContactUs() {
  return (
    <div className="p-6 h-screen bg-gray-100 text-gray-900 flex flex-col md:flex-row items-start">
      {/* Left section with contact details */}
      <div className="md:w-1/2">
        <h2 className="text-2xl font-bold mb-4">Get in touch with us</h2>
        <p className="mb-4">
          Please write to us at{' '}
          <a href="mailto:care@moneyview.in" className="text-blue-600 underline">
            care@moneyview.in
          </a>{' '}
          for any service-related queries or feedback. Alternatively, you may also use the MoneyView App
          to lodge a complaint or report an issue. We generally respond within 24-48 working hours.
        </p>
        <p className="mb-4">
          <strong>Timings:</strong> Monday to Saturday - 9 am to 6 pm - Excluding public holidays
        </p>

        {/* Contact and Customer Support Details */}
        <div className="flex flex-col sm:flex-row items-start space-y-6 sm:space-y-0 sm:space-x-8">
          {/* Contact Number */}
          <div className="flex items-center">
            <span className="text-2xl text-blue-600 mr-2">📞</span>
            <div>
              <h3 className="font-semibold">Contact Number</h3>
              <p className="text-gray-500">080 6939 0476</p>
            </div>
          </div>

          {/* Customer Support */}
          <div className="flex items-center">
            <span className="text-2xl text-blue-600 mr-2">💬</span>
            <div>
              <h3 className="font-semibold">Customer Support</h3>
              <p className="text-gray-500">
                <a href="mailto:care@moneyview.in" className="text-blue-600 underline">
                  care@moneyview.in
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Right section with image */}
      <div className="w-[600px] h-[300px] flex ml-36 ">
        <img
          src="https://moneyview.in/images/Contact-us-mv.png"
          alt="Contact Us"
          className="rounded-lg shadow-md"
        />
      </div>
    </div>
  );
}

export default ContactUs;
